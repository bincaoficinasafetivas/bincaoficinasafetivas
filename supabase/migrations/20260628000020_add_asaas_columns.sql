-- Add Asaas integration columns and webhook events table
ALTER TABLE public.reservations
  ADD COLUMN IF NOT EXISTS asaas_customer_id TEXT,
  ADD COLUMN IF NOT EXISTS asaas_payment_id TEXT,
  ADD COLUMN IF NOT EXISTS asaas_payment_link TEXT,
  ADD COLUMN IF NOT EXISTS asaas_invoice_url TEXT,
  ADD COLUMN IF NOT EXISTS payment_method TEXT DEFAULT 'pix',
  ADD COLUMN IF NOT EXISTS whatsapp_sent BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS confirmation_sent_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS paid_at TIMESTAMPTZ;

CREATE TABLE IF NOT EXISTS public.asaas_webhook_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event TEXT NOT NULL,
  payment_id TEXT,
  reservation_id UUID REFERENCES public.reservations(id),
  payload JSONB NOT NULL,
  processed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.asaas_webhook_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service role only" ON public.asaas_webhook_events
  FOR ALL USING (false);
