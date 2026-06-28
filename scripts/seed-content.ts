import 'dotenv/config'
import { supabaseAdmin } from '../src/integrations/supabase/client.server'

async function upsertSiteContent(key: string, value: any) {
  const { error } = await supabaseAdmin.from('site_content').upsert({ key, value });
  if (error) throw error;
}

async function insertIfEmpty(table: string, rows: any[]) {
  const { data } = await supabaseAdmin.from(table).select('id').limit(1);
  if (data && data.length > 0) return;
  const { error } = await supabaseAdmin.from(table).insert(rows);
  if (error) throw error;
}

async function main() {
  console.log('Seeding site_content...');
  await upsertSiteContent('site', { name: 'Bincá', title: 'Bincá · Oficinas Afetivas', description: 'Oficinas sensoriais para crianças' });
  await upsertSiteContent('hero', { tag: 'Vem viver', title_a: 'Oficinas', title_em: 'Afetivas', title_b: 'para crianças' });
  await upsertSiteContent('sobre', { tag: 'Sobre', title_a: 'Quem somos', text: 'Texto sobre o projeto' });

  console.log('Seeding activities...');
  await insertIfEmpty('activities', [
    { emoji: '🎨', title: 'Oficina de Arte', description: 'Atividade sensorial', age_range: '0 – 6 anos', sort_order: 1 },
    { emoji: '🎵', title: 'Oficina de Música', description: 'Exploração sonora', age_range: '0 – 6 anos', sort_order: 2 },
  ]);

  console.log('Seeding events...');
  await insertIfEmpty('events', [
    { name: 'Oficina de Verão', description: 'Evento especial', date: '', time: '', location: '', price: 0, spots_available: 0, image_url: '', active: true, sort_order: 0 },
  ]);

  console.log('Seeding gallery...');
  await insertIfEmpty('gallery', [
    { image_url: '', caption: 'Foto exemplo', sort_order: 0 },
  ]);

  console.log('Seeding testimonials...');
  await insertIfEmpty('testimonials', [
    { text: 'Excelente!', name: 'Nome', role: 'Mãe', initials: 'NM', stars: 5, sort_order: 0 },
  ]);

  console.log('Seed completo');
}

main().catch((err) => { console.error(err); process.exit(1); });
