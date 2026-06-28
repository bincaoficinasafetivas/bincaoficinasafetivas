ALTER TABLE public.reservations
  ADD COLUMN IF NOT EXISTS workshop_id UUID,
  ADD COLUMN IF NOT EXISTS workshop_name TEXT,
  ADD COLUMN IF NOT EXISTS workshop_date TEXT,
  ADD COLUMN IF NOT EXISTS consent_reservation BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS consent_image BOOLEAN DEFAULT false;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'reservations'
      AND column_name = 'workshop_id'
      AND data_type = 'text'
  ) THEN
    ALTER TABLE public.reservations
      ALTER COLUMN workshop_id TYPE UUID
      USING CASE
        WHEN workshop_id ~ '^[0-9a-fA-F\-]{36}$' THEN workshop_id::uuid
        ELSE NULL
      END;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE constraint_schema = 'public'
      AND table_name = 'reservations'
      AND constraint_name = 'reservations_workshop_id_fkey'
  ) THEN
    ALTER TABLE public.reservations
      ADD CONSTRAINT reservations_workshop_id_fkey
      FOREIGN KEY (workshop_id) REFERENCES public.events(id);
  END IF;
END
$$;
