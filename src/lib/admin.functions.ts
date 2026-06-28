import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ADMIN_EMAIL = "financeirobinca@gmail.com";
const ADMIN_PASSWORD = "@Binca120523";
const ADMIN_USERNAME = "financeirobinca";

const loginSchema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(200),
});

/**
 * Ensures the admin user exists with the configured credentials and
 * admin role. Returns the email to use for client-side sign-in.
 *
 * Called from the admin login form. Anyone can call it, but it only
 * succeeds when the supplied username/password match the hardcoded
 * admin credentials, so it cannot be used to escalate any other user.
 */
export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((data) => loginSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.username !== ADMIN_USERNAME || data.password !== ADMIN_PASSWORD) {
      throw new Error("Credenciais inválidas");
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Find or create the admin user
    const { data: list } = await supabaseAdmin.auth.admin.listUsers();
    let user = list?.users?.find((u) => u.email === ADMIN_EMAIL);
    if (!user) {
      const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        email_confirm: true,
      });
      if (error) throw error;
      user = created.user!;
    } else {
      // Refresh password in case it drifted
      await supabaseAdmin.auth.admin.updateUserById(user.id, { password: ADMIN_PASSWORD });
    }

    // Ensure admin role
    const { data: existingRole } = await supabaseAdmin
      .from("user_roles")
      .select("id")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();
    if (!existingRole) {
      await supabaseAdmin.from("user_roles").insert({ user_id: user.id, role: "admin" });
    }

    return { email: ADMIN_EMAIL, password: ADMIN_PASSWORD };
  });
