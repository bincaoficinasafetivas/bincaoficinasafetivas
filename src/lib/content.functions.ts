import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const fetchSiteData = createServerFn({ method: "GET" }).handler(async () => {
  const [content, activities, testimonials, gallery] = await Promise.all([
    supabaseAdmin.from("site_content").select("key,value"),
    supabaseAdmin.from("activities").select("*").order("sort_order"),
    supabaseAdmin.from("testimonials").select("*").order("sort_order"),
    supabaseAdmin.from("gallery").select("*").order("sort_order"),
  ]);

  const contentMap: Record<string, any> = {};
  for (const row of content.data ?? []) contentMap[row.key] = row.value;

  return {
    content: contentMap,
    activities: activities.data ?? [],
    testimonials: testimonials.data ?? [],
    gallery: gallery.data ?? [],
  };
});
