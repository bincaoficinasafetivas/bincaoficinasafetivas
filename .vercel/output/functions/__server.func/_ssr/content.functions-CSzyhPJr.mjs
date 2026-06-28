import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import { supabaseAdmin } from "./client.server-BBloQtaf.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const fallbackSiteConfig = {
  site: {
    name: "Bincá",
    logo: ""
  },
  hero: {
    tag: "Oficinas Afetivas",
    title_a: "Onde afeto e descoberta",
    title_em: "se encontram",
    title_b: "",
    subtitle: "Oficinas presenciais cheias de amor,\ntexturas e curiosidade para crianças\nde 0 a 6 anos.",
    cta_primary: "Explorar Atividades",
    cta_primary_link: "#atividades",
    cta_secondary: "Como Funciona",
    cta_secondary_link: "#como",
    badge: "Vivências sensoriais que encantam",
    stats: [
      { num: "+200", label: "Famílias atendidas" },
      { num: "+60", label: "Atividades únicas" },
      { num: "100%", label: "Natural e seguro" }
    ],
    img_main: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 900'%3E%3Crect width='1400' height='900' fill='%23fdf2e9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23c25e37' font-family='Arial,Helvetica,sans-serif' font-size='56'%3EBinc%C3%A1%3C/text%3E%3C/svg%3E",
    img_a: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 600'%3E%3Crect width='700' height='600' fill='%23ffe8d4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23c55a2b' font-family='Arial,Helvetica,sans-serif' font-size='36'%3ESensorial%3C/text%3E%3C/svg%3E",
    img_b: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 600'%3E%3Crect width='700' height='600' fill='%23fff4e1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23b55b33' font-family='Arial,Helvetica,sans-serif' font-size='36'%3EAcolhimento%3C/text%3E%3C/svg%3E"
  },
  sobre: {
    tag: "Nossa Essência",
    title_a: "Oficinas presenciais",
    title_em: "cheias de amor",
    title_b: "para crianças e famílias",
    text: "O Bincá é um espaço de conexão entre famílias, natureza e descobertas sensoriais. Cada atividade é pensada para estimular o afeto, a curiosidade e o brincar livre.",
    cta: "Reserve uma vaga",
    cta_link: "#contato",
    bullets: [
      { text: "Materiais naturais e seguros", icon: "🌿" },
      { text: "Atenção ao desenvolvimento afetivo", icon: "🤲" },
      { text: "Atividades para de 0 a 6 anos", icon: "✨" }
    ],
    img_main: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900'%3E%3Crect width='900' height='900' fill='%23fde7d8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23bc5f3a' font-family='Arial,Helvetica,sans-serif' font-size='44'%3EConex%C3%A3o%3C/text%3E%3C/svg%3E",
    img_a: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 600'%3E%3Crect width='700' height='600' fill='%23fff2e0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23c05b2c' font-family='Arial,Helvetica,sans-serif' font-size='36'%3EAlegria%3C/text%3E%3C/svg%3E",
    img_b: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 600'%3E%3Crect width='700' height='600' fill='%23fff6e8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23b25b39' font-family='Arial,Helvetica,sans-serif' font-size='36'%3EAventura%3C/text%3E%3C/svg%3E"
  },
  atividades_header: {
    tag: "Oficinas que encantam",
    title_a: "Atividades sensoriais",
    title_em: "para explorar",
    title_b: "com cuidado e carinho",
    subtitle: "Experiências que despertam os sentidos e fortalecem o vínculo entre crianças e famílias."
  },
  como: {
    tag: "Como Funciona",
    title_a: "A experiência",
    title_em: "acontece em",
    title_b: "quatro passos simples",
    subtitle: "Do acolhimento inicial até a brincadeira livre, nosso processo é leve, afetivo e pensado para todas as idades.",
    steps: [
      { title: "Ambientação", desc: "Recebemos a família com cuidado e explicamos cada atividade." },
      { title: "Vivência sensorial", desc: "A criança explora texturas, cores e movimentos em um ambiente seguro." },
      { title: "Apoio familiar", desc: "Pais e filhos participam juntos, fortalecendo laços e confiança." },
      { title: "Encerramento", desc: "Compartilhamos o que foi vivido e reforçamos o significado da experiência." }
    ]
  },
  galeria: {
    tag: "Galeria",
    title_a: "Momentos",
    title_em: "que inspiram",
    title_b: ""
  },
  depoimentos_header: {
    tag: "Depoimentos",
    title_a: "Famílias que vivenciaram",
    title_em: "o Bincá",
    title_b: ""
  },
  contato: {
    fale_title: "Fale com a gente",
    fale_sub: "Agende sua visita ou tire suas dúvidas pelo WhatsApp.",
    whatsapp_number: "554899999999",
    whatsapp: "Chamar no WhatsApp",
    wa_template: "Olá! Quero saber mais sobre as oficinas Bincá.",
    instagram: "https://www.instagram.com/binca.oficinas",
    instagram_handle: "@binca.oficinas",
    city: "Imbituba - SC",
    region: "Atendemos toda a região sul",
    note: "Estamos prontos para acolher sua família com carinho."
  },
  event_banner: {
    tag: "Próxima Oficina",
    title_a: "Vem aí uma nova",
    title_em: "oficina afetiva",
    title_b: "para sua família",
    subtitle: "Inscrições abertas para a próxima vivência sensorial.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%23fde7d5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23b25c36' font-family='Arial,Helvetica,sans-serif' font-size='44'%3EPr%C3%B3xima Oficina%3C/text%3E%3C/svg%3E",
    cta: "Quero participar",
    link: "#contato"
  },
  banners: [],
  apoiadores: {
    title_a: "Nossos",
    title_em: "apoiadores",
    title_b: "",
    subtitle: "Parceiros que acreditam na educação afetiva e sensorial."
  },
  footer: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Atividades", href: "#atividades" },
      { label: "Contato", href: "#contato" }
    ],
    copy: "Design pensado para famílias com carinho."
  },
  cta_final: {
    tag: "Vem viver o Bincá",
    title_a: "Pronta para uma experiência",
    title_em: "afetiva",
    title_b: "inesquecível?",
    subtitle: "Conecte seu filho com a natureza, os sentidos e memórias que ficam para sempre.",
    cta: "Falar no WhatsApp",
    cta_link: "#contato",
    wa_message: "Olá! Quero reservar minha oficina Bincá.",
    benefits: [
      { icon: "leaf", text: "Materiais naturais e atóxicos" },
      { icon: "shield", text: "Seguro para diferentes faixas etárias" },
      { icon: "heart", text: "Ambiente acolhedor" }
    ]
  }
};
const fallbackActivities = [
  {
    id: "act-1",
    title: "Jardim Sensorial",
    description: "Uma vivência com texturas naturais, cores e aromas para despertar os sentidos.",
    emoji: "🌿",
    age_range: "0-3 anos",
    image_url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23fdefd8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23bf6d3e' font-family='Arial,Helvetica,sans-serif' font-size='32'%3EJardim Sensorial%3C/text%3E%3C/svg%3E",
    sort_order: 1
  },
  {
    id: "act-2",
    title: "Brincar com Água",
    description: "Explorações suaves de água e movimento para promover calma e curiosidade.",
    emoji: "💧",
    age_range: "1-5 anos",
    image_url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23e8f5fe'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23326b87' font-family='Arial,Helvetica,sans-serif' font-size='32'%3EBrincar com Água%3C/text%3E%3C/svg%3E",
    sort_order: 2
  },
  {
    id: "act-3",
    title: "Cozinha da Imaginação",
    description: "Atividade sensorial com ingredientes naturais, cheiros e sabores lúdicos.",
    emoji: "🍪",
    age_range: "2-6 anos",
    image_url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23fff2da'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23b66536' font-family='Arial,Helvetica,sans-serif' font-size='32'%3ECozinha da Imaginação%3C/text%3E%3C/svg%3E",
    sort_order: 3
  }
];
const fallbackGallery = [
  {
    id: "gal-1",
    image_url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23fcead8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23b35d2f' font-family='Arial,Helvetica,sans-serif' font-size='36'%3EGaleria 1%3C/text%3E%3C/svg%3E",
    caption: "Brincadeira sensorial em família",
    sort_order: 1
  },
  {
    id: "gal-2",
    image_url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23fff3e6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23c06738' font-family='Arial,Helvetica,sans-serif' font-size='36'%3EGaleria 2%3C/text%3E%3C/svg%3E",
    caption: "Momentos de descoberta e afeto",
    sort_order: 2
  },
  {
    id: "gal-3",
    image_url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f9e8d7'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23b15f37' font-family='Arial,Helvetica,sans-serif' font-size='36'%3EGaleria 3%3C/text%3E%3C/svg%3E",
    caption: "Texturas, cores e brincadeiras naturais",
    sort_order: 3
  }
];
const fallbackTestimonials = [
  {
    id: "test-1",
    name: "Larissa",
    role: "Mãe da Ana, 2 anos",
    initials: "LA",
    stars: 5,
    text: "O Bincá trouxe uma experiência delicada, segura e cheia de encantamento para minha filha.",
    sort_order: 1
  },
  {
    id: "test-2",
    name: "Camila",
    role: "Mãe do Pedro, 4 anos",
    initials: "CP",
    stars: 5,
    text: "O carinho no atendimento e o cuidado com os materiais fizeram toda a diferença.",
    sort_order: 2
  },
  {
    id: "test-3",
    name: "Marina",
    role: "Mãe da Sofia, 1 ano",
    initials: "MS",
    stars: 5,
    text: "Foi uma manhã mágica, cheia de descobertas e muita leveza para a família.",
    sort_order: 3
  }
];
const fallbackContentMap = {
  ...fallbackSiteConfig
};
const fetchSiteData_createServerFn_handler = createServerRpc({
  id: "5244a67b68ceb527fae48d774c097258b513ffc44a551a015fc31435aabfe13d",
  name: "fetchSiteData",
  filename: "src/lib/content.functions.ts"
}, (opts) => fetchSiteData.__executeServer(opts));
const fetchSiteData = createServerFn({
  method: "GET"
}).handler(fetchSiteData_createServerFn_handler, async () => {
  try {
    const [content, activities, testimonials, gallery] = await Promise.all([supabaseAdmin.from("site_content").select("key,value"), supabaseAdmin.from("activities").select("*").order("sort_order"), supabaseAdmin.from("testimonials").select("*").order("sort_order"), supabaseAdmin.from("gallery").select("*").order("sort_order")]);
    if (content.error || activities.error || testimonials.error || gallery.error) {
      throw content.error || activities.error || testimonials.error || gallery.error;
    }
    const contentMap = {
      ...fallbackContentMap
    };
    for (const row of content.data ?? []) {
      contentMap[row.key] = row.value;
    }
    return {
      content: contentMap,
      activities: activities.data && activities.data.length > 0 ? activities.data : [...fallbackActivities],
      testimonials: testimonials.data && testimonials.data.length > 0 ? testimonials.data : [...fallbackTestimonials],
      gallery: gallery.data && gallery.data.length > 0 ? gallery.data : [...fallbackGallery]
    };
  } catch (error) {
    console.warn("[SiteData] Supabase unavailable, using fallback content.", error);
    return {
      content: {
        ...fallbackContentMap
      },
      activities: [...fallbackActivities],
      testimonials: [...fallbackTestimonials],
      gallery: [...fallbackGallery]
    };
  }
});
export {
  fetchSiteData_createServerFn_handler
};
