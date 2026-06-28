CREATE TABLE IF NOT EXISTS public.events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  date TEXT,
  time TEXT,
  location TEXT,
  price NUMERIC DEFAULT 0,
  spots_available INTEGER DEFAULT 0,
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read events" ON public.events
  FOR SELECT USING (true);

CREATE POLICY "admin write events" ON public.events
  FOR ALL TO authenticated USING (true);
