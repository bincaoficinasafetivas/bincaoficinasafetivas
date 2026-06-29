// Server-only Asaas integration helpers
// Place secrets access inside functions to avoid client bundling
import type { Database } from "@/integrations/supabase/types";

async function asaasFetch(path: string, method = 'POST', body?: any) {
  const key = process.env.ASAAS_API_KEY;
  if (!key) throw new Error('Missing ASAAS_API_KEY in environment');
  const url = `https://api.asaas.com/v3${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      access_token: String(key),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || 'Asaas API error');
  return data;
}

export async function createAsaasCustomer(reservation: any) {
  const name = reservation.responsible_name;
  const email = reservation.email || undefined;
  const phone = (reservation.whatsapp || '').replace(/\D/g, '');

  const body: any = { name };
  if (email) body.email = email;
  if (phone) {
    body.phone = phone;
    body.mobilePhone = phone;
  }

  const data = await asaasFetch('/customers', 'POST', body);
  return data.id;
}

export async function createAsaasPayment(customerId: string, reservation: any, method: string) {
  const billingType = method === 'pix' ? 'PIX' : 'CREDIT_CARD';
  const value = Number(reservation.amount ?? 0) || 0;
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const dueDate = tomorrow.toISOString().slice(0, 10);

  const body: any = {
    customer: customerId,
    billingType,
    value: value.toFixed(2),
    dueDate,
    description: `Reserva Bincá - ${reservation.workshop_name ?? ''}`,
  };

  const data = await asaasFetch('/payments', 'POST', body);

  // Asaas returns various fields; map common ones
  return {
    id: data.id,
    invoiceUrl: data.invoiceUrl || data.invoice_url || data.paymentUrl || data.invoice_url_web || null,
    pixQrCode: data.pixQrCode || data.pix_qr_code || data.qrCode || null,
  };
}

export async function sendWhatsAppConfirmation(reservation: any) {
  // For now, save a confirmation message into reservation.notes as a fallback
  const num = (reservation.whatsapp ?? '').replace(/\D/g, '') || '';
  const phone = num.length <= 11 ? '55' + num : num;
  const childrenNames = Array.isArray(reservation.children) ? reservation.children.map((c: any) => `${c.name} (${c.age})`).join(', ') : '';
  const lines = [
    `Olá, ${reservation.responsible_name}! ✨`,
    '',
    `Seu pagamento foi confirmado. Sua reserva está confirmada!`,
    childrenNames ? `Crianças: ${childrenNames}` : '',
    reservation.workshop_name ? `Oficina: ${reservation.workshop_name}` : '',
    reservation.amount ? `Valor: R$ ${Number(reservation.amount).toFixed(2).replace('.', ',')}` : '',
    '',
    'Vaga garantida 💚 Te esperamos!',
  ].filter(Boolean).join('\n');

  // Update reservation notes and mark whatsapp_sent
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  await supabaseAdmin.from('reservations').update({
    notes: (reservation.notes ? reservation.notes + '\n' : '') + lines,
    whatsapp_sent: true,
    confirmation_sent_at: new Date().toISOString(),
  }).eq('id', reservation.id);

  // Return wa.me link for reference
  return `https://wa.me/${phone}?text=${encodeURIComponent(lines)}`;
}

export async function processAsaasWebhook(payload: any) {
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');

  // Persist raw event for auditing
  await supabaseAdmin.from('asaas_webhook_events').insert({
    event: payload.event || payload.eventType || 'unknown',
    payment_id: payload.payment?.id || payload.id || null,
    reservation_id: null,
    payload,
    processed: false,
  });

  const paymentId = payload.payment?.id || payload.id || payload.paymentId || null;
  if (!paymentId) return;

  // Find reservation by asaas_payment_id
  const { data: resRow } = await supabaseAdmin.from('reservations').select('*').eq('asaas_payment_id', paymentId).maybeSingle();
  if (!resRow) return;

  const statusRaw = (payload.payment?.status || payload.status || '').toString().toLowerCase();
  // Map common statuses
  let payment_status = 'pending';
  let reservation_status = resRow.reservation_status;
  if (statusRaw.includes('received') || statusRaw.includes('confirmed') || statusRaw.includes('paid')) {
    payment_status = 'approved';
    reservation_status = 'confirmed';
  } else if (statusRaw.includes('cancel') || statusRaw.includes('refused') || statusRaw.includes('expired')) {
    payment_status = 'refused';
    reservation_status = 'cancelled';
  }

  const updates: any = { payment_status, reservation_status };
  if (payment_status === 'approved') {
    updates.paid_at = new Date().toISOString();
  }

  await supabaseAdmin.from('reservations').update(updates).eq('asaas_payment_id', paymentId);

  // If approved, send WhatsApp confirmation and mark event as processed
  if (payment_status === 'approved') {
    await sendWhatsAppConfirmation(resRow);
  }

  // mark event processed
  await supabaseAdmin.from('asaas_webhook_events').update({ processed: true }).eq('payment_id', paymentId);
}
