
-- Public read on binca bucket via signed-style policies (acts public)
CREATE POLICY "Public read binca" ON storage.objects FOR SELECT USING (bucket_id = 'binca');
CREATE POLICY "Auth upload binca" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'binca');
CREATE POLICY "Auth update binca" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'binca');
CREATE POLICY "Auth delete binca" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'binca');

-- Tighten security-definer exposure
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
REVOKE EXECUTE ON FUNCTION public.tg_set_updated_at() FROM PUBLIC;
