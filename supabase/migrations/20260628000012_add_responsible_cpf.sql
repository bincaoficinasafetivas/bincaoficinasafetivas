ALTER TABLE public.reservations
  ADD COLUMN IF NOT EXISTS responsible_cpf TEXT;
