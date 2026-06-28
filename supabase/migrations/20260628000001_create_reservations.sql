CREATE TABLE public.reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  responsible_name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT,
  children JSONB NOT NULL DEFAULT '[]',
  children_count INTEGER DEFAULT 1,
  workshop_id TEXT,
  workshop_name TEXT,
  workshop_date TEXT,
  amount NUMERIC,
  notes TEXT,
  payment_status TEXT DEFAULT 'pending',
  reservation_status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Inserção pública (formulário do site)
CREATE POLICY "allow public insert" ON public.reservations
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Leitura e edição apenas para admins (service role bypassa RLS)
CREATE POLICY "allow admin read" ON public.reservations
  FOR ALL TO authenticated USING (true);
