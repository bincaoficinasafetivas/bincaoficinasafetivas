import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import {
  fallbackSiteConfig,
  fallbackActivities,
  fallbackTestimonials,
  fallbackGallery,
} from "@/data/fallback";

const fallbackContentMap = { ...fallbackSiteConfig };

export const fetchSiteData = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const [content, activities, testimonials, gallery] = await Promise.all([
      supabaseAdmin.from("site_content").select("key,value"),
      supabaseAdmin.from("activities").select("*").order("sort_order"),
      supabaseAdmin.from("testimonials").select("*").order("sort_order"),
      supabaseAdmin.from("gallery").select("*").order("sort_order"),
    ]);

    if (content.error || activities.error || testimonials.error || gallery.error) {
      throw content.error || activities.error || testimonials.error || gallery.error;
    }

    const contentMap = { ...fallbackContentMap };
    for (const row of content.data ?? []) {
      contentMap[row.key] = row.value;
    }

    return {
      content: contentMap,
      activities: (activities.data && activities.data.length > 0) ? activities.data : [...fallbackActivities],
      testimonials: (testimonials.data && testimonials.data.length > 0) ? testimonials.data : [...fallbackTestimonials],
      gallery: (gallery.data && gallery.data.length > 0) ? gallery.data : [...fallbackGallery],
    };
  } catch (error) {
    console.warn("[SiteData] Supabase unavailable, using fallback content.", error);
    return {
      content: { ...fallbackContentMap },
      activities: [...fallbackActivities],
      testimonials: [...fallbackTestimonials],
      gallery: [...fallbackGallery],
    };
  }
});
