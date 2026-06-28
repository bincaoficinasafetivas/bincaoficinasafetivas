import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "financeirobinca@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "@Binca120523";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "financeirobinca";
const loginSchema = objectType({
  username: stringType().min(1).max(100),
  password: stringType().min(1).max(200)
});
const adminLogin_createServerFn_handler = createServerRpc({
  id: "89f029f4fc21ed092423cd54f44fb61078423691288a3a89663a6e0973cd86ea",
  name: "adminLogin",
  filename: "src/lib/admin.functions.ts"
}, (opts) => adminLogin.__executeServer(opts));
const adminLogin = createServerFn({
  method: "POST"
}).inputValidator((data) => loginSchema.parse(data)).handler(adminLogin_createServerFn_handler, async ({
  data
}) => {
  if (data.username !== ADMIN_USERNAME || data.password !== ADMIN_PASSWORD) {
    throw new Error("Credenciais inválidas");
  }
  const {
    supabaseAdmin
  } = await import("./client.server-CgU2i_-t.mjs");
  const {
    data: list
  } = await supabaseAdmin.auth.admin.listUsers();
  let user = list?.users?.find((u) => u.email === ADMIN_EMAIL);
  if (!user) {
    const {
      data: created,
      error
    } = await supabaseAdmin.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      email_confirm: true
    });
    if (error) throw error;
    user = created.user;
  } else {
    await supabaseAdmin.auth.admin.updateUserById(user.id, {
      password: ADMIN_PASSWORD
    });
  }
  const {
    data: existingRole
  } = await supabaseAdmin.from("user_roles").select("id").eq("user_id", user.id).eq("role", "admin").maybeSingle();
  if (!existingRole) {
    await supabaseAdmin.from("user_roles").insert({
      user_id: user.id,
      role: "admin"
    });
  }
  return {
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD
  };
});
export {
  adminLogin_createServerFn_handler
};
