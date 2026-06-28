-- Fix security policies for production

DROP POLICY IF EXISTS "admin can manage events" ON public.events;
DROP POLICY IF EXISTS "admin write events" ON public.events;
CREATE POLICY "admin can manage events" ON public.events
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "allow admin read" ON public.reservations;
CREATE POLICY "admin full access reservations" ON public.reservations
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "allow authenticated upload binca" ON storage.objects;
DROP POLICY IF EXISTS "allow authenticated delete binca" ON storage.objects;
CREATE POLICY "admin upload binca" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'binca'
    AND public.has_role(auth.uid(), 'admin')
  );

CREATE POLICY "admin delete binca" ON storage.objects
  FOR DELETE TO authenticated
  USING (
    bucket_id = 'binca'
    AND public.has_role(auth.uid(), 'admin')
  );
