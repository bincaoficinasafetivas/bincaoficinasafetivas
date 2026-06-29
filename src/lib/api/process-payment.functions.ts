import { createServerFn } from '@tanstack/react-start'
import { createAsaasCustomer, createAsaasPayment } from '@/lib/payments.server'
import { supabaseAdmin } from '@/integrations/supabase/client.server'

export const processPayment = createServerFn({ method: 'POST' })
  .handler(async ({ data }) => {
    const { reservationId, paymentMethod } = data as { reservationId: string; paymentMethod: string };
    if (!reservationId) throw new Error('reservationId required');

    const { data: reservation, error } = await supabaseAdmin
      .from('reservations')
      .select('*')
      .eq('id', reservationId)
      .single();
    if (error) throw error;
    if (!reservation) throw new Error('reservation not found');

    const customerId = await createAsaasCustomer(reservation);
    const payment = await createAsaasPayment(customerId, reservation, paymentMethod);

    await supabaseAdmin.from('reservations').update({
      asaas_customer_id: customerId,
      asaas_payment_id: payment.id,
      asaas_payment_link: payment.invoiceUrl,
      payment_method: paymentMethod,
      payment_status: 'awaiting_payment'
    }).eq('id', reservationId);

    return {
      paymentLink: payment.invoiceUrl,
      pixQrCode: payment.pixQrCode ?? null,
    };
  })
