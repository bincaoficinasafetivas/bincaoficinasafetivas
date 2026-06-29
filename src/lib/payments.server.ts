// Server-only Asaas integration helpers
// Place secrets access inside functions to avoid client bundling
import type { Database } from "@/integrations/supabase/types";

const ASAAS_BASE_URL = process.env.ASAAS_BASE_URL ?? 'https://sandbox.asaas.com/api/v3';
const ASAAS_API_KEY = process.env.ASAAS_API_KEY ?? '';

async function asaasFetch(path: string, method = 'POST', body?: any) {
  if (!ASAAS_API_KEY) throw new Error('Missing ASAAS_API_KEY in environment');
  const url = `${ASAAS_BASE_URL}${path}`;
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      access_token: ASAAS_API_KEY,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.errors?.[0]?.description || data?.message || 'Asaas API error');
  return data;
}

export async function createAsaasCustomer(reservation: any) {
  const name = reservation.responsible_name;
  const email = reservation.email || undefined;
  const phone = (reservation.whatsapp || '').replace(/\D/g, '');
  const cpf = reservation.responsible_cpf || reservation.cpf || undefined;

  const body: any = {
    name,
    notificationDisabled: false,
  };
  if (email) body.email = email;
  if (phone) body.mobilePhone = phone;
  if (cpf) body.cpfCnpj = cpf.replace(/\D/g, '');

  const data = await asaasFetch('/customers', 'POST', body);
  return data.id;
}

export async function createAsaasPayment(customerId: string, reservation: any, method: 'pix' | 'credit_card') {
  const billingType = method === 'credit_card' ? 'CREDIT_CARD' : 'PIX';
  const value = Number(reservation.amount ?? 0) || 0;
  const dueDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const body: any = {
    customer: customerId,
    billingType,
    value,
    dueDate,
    externalReference: reservation.id,
    description: `Inscrição - ${reservation.workshop_name ?? 'Bincá'}`,
  };

  if (method === 'credit_card') {
    body.installmentCount = 1;
    body.installmentValue = reservation.amount;
  }

  const payment = await asaasFetch('/payments', 'POST', body);

  let pixQrCode = null;
  let pixCopyPaste = null;
  if (method === 'pix') {
    try {
      const pixRes = await fetch(`${ASAAS_BASE_URL}/payments/${payment.id}/pixQrCode`, {
        headers: { access_token: ASAAS_API_KEY },
      });
      if (pixRes.ok) {
        const pixData = await pixRes.json();
        pixQrCode = pixData.encodedImage ?? pixData.encoded_image ?? null;
        pixCopyPaste = pixData.payload ?? pixData.payload_copy ?? null;
      }
    } catch (err) {
      // ignore pix fetch errors
    }
  }

  return {
    id: payment.id,
    invoiceUrl: payment.invoiceUrl || payment.invoice_url || payment.paymentUrl || null,
    pixQrCode,
    pixCopyPaste,
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

  const eventType = (payload.event || payload.eventType || '').toString().toUpperCase();
  const acceptedEvents = ['PAYMENT_RECEIVED', 'PAYMENT_CONFIRMED'];
  if (!acceptedEvents.includes(eventType)) {
    return;
  }

  const paymentId = payload.payment?.id || payload.id || payload.paymentId || null;
  const externalReference = payload.payment?.externalReference || payload.externalReference || payload.payment?.external_reference || null;
  if (!externalReference && !paymentId) return;

  let resRow: any = null;
  if (externalReference) {
    const { data } = await supabaseAdmin.from('reservations').select('*').eq('id', externalReference).maybeSingle();
    resRow = data;
  }

  if (!resRow && paymentId) {
    const { data } = await supabaseAdmin.from('reservations').select('*').eq('asaas_payment_id', paymentId).maybeSingle();
    resRow = data;
  }

  if (!resRow) return;

  const payment_status = 'approved';
  const reservation_status = 'paid';
  const updates: any = {
    payment_status,
    reservation_status,
    paid_at: new Date().toISOString(),
  };

  await supabaseAdmin.from('reservations').update(updates).eq('id', resRow.id);

  await sendWhatsAppConfirmation(resRow);

  // mark event processed
  await supabaseAdmin.from('asaas_webhook_events').update({ processed: true }).eq('payment_id', paymentId);
}
