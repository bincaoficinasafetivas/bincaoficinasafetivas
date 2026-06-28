INSERT INTO storage.buckets (id, name, public)
VALUES ('binca', 'binca', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "allow public read binca" ON storage.objects
  FOR SELECT USING (bucket_id = 'binca');

CREATE POLICY "allow authenticated upload binca" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'binca');

CREATE POLICY "allow authenticated delete binca" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'binca');
