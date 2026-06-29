import 'dotenv/config'
import { supabaseAdmin } from '../src/integrations/supabase/client.server'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

async function main() {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error('Missing ADMIN_EMAIL or ADMIN_PASSWORD in environment')
    process.exit(1)
  }

  console.log('Ensuring admin user:', ADMIN_EMAIL)

  const { data: list, error: listErr } = await supabaseAdmin.auth.admin.listUsers()
  if (listErr) {
    console.error('Failed to list users:', listErr)
    process.exit(1)
  }

  let user = list?.users?.find((u) => u.email === ADMIN_EMAIL)

  if (!user) {
    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      email_confirm: true,
    })
    if (error) {
      console.error('Failed to create admin user:', error)
      process.exit(1)
    }
    user = created.user!
    console.log('Admin user created:', user.id)
  } else {
    // Update password in case it changed
    const { error } = await supabaseAdmin.auth.admin.updateUserById(user.id, { password: ADMIN_PASSWORD })
    if (error) {
      console.error('Failed to update admin password:', error)
      process.exit(1)
    }
    console.log('Admin user exists, password updated')
  }

  // Ensure admin role
  const { data: existingRole } = await supabaseAdmin
    .from('user_roles')
    .select('id')
    .eq('user_id', user.id)
    .eq('role', 'admin')
    .maybeSingle()

  if (!existingRole) {
    const { error } = await supabaseAdmin.from('user_roles').insert({ user_id: user.id, role: 'admin' })
    if (error) {
      console.error('Failed to insert admin role:', error)
      process.exit(1)
    }
    console.log('Admin role assigned')
  } else {
    console.log('Admin role already present')
  }

  console.log('Done')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
