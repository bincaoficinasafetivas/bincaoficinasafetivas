import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { s as siteQuery, g as getEvents } from "./router-BKQVwq8W.mjs";
import { u as useSuspenseQuery, q as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { s as supabase } from "./client-IcRWeenY.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { S as Sprout, b as Sparkles, c as Users, d as Leaf, e as Star, C as CircleQuestionMark, f as ChevronDown, M as Mail, g as MessageCircle, I as Instagram, H as Heart } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function formatEventDate(value) {
  if (!value) return "";
  const date = new Date(value.includes("T") ? value : `${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}
function formatEventTime(value) {
  return value ? value : "Horário a combinar";
}
function formatEventPrice(value) {
  if (value === null || value === void 0 || value === "") return "Grátis";
  const amount = Number(value);
  if (Number.isNaN(amount) || amount === 0) return "Grátis";
  return `R$ ${amount.toFixed(2).replace(".", ",")}`;
}
const eventsQuery = queryOptions({
  queryKey: ["events"],
  queryFn: () => getEvents()
});
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    minHeight: "100vh",
    background: "#FBF6F0"
  } }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(HomeInner, {}) });
}
function HomeInner() {
  const {
    data
  } = useSuspenseQuery(siteQuery);
  const {
    data: events = []
  } = useSuspenseQuery(eventsQuery);
  const [selectedEventId, setSelectedEventId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (events.length === 1) {
      setSelectedEventId(events[0].id);
    }
  }, [events]);
  const {
    content,
    activities,
    testimonials,
    gallery
  } = data;
  const site = content.site ?? {};
  const hero = content.hero ?? {};
  const sobre = content.sobre ?? {};
  content.atividades_header ?? {};
  content.como ?? {};
  content.galeria ?? {};
  content.depoimentos_header ?? {};
  const contato = content.contato ?? {};
  const evento = content.event_banner ?? {};
  const banners = Array.isArray(content.banners) ? content.banners : [];
  const apoiadoresH = content.apoiadores ?? {};
  const apoiadores = Array.isArray(content.sponsors) ? content.sponsors : [];
  const footer = content.footer ?? {};
  Array.isArray(content.faq?.items) ? content.faq.items : Array.isArray(content.faq) ? content.faq : [];
  const ctaFinal = content.cta_final ?? {};
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [modalImg, setModalImg] = reactExports.useState(null);
  function scrollToReservationForm() {
    const formElement = document.getElementById("reserva-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
  function selectEvent(eventId) {
    setSelectedEventId(eventId);
    scrollToReservationForm();
  }
  const heroCopy = {
    tag: "APRENDER BRINCANDO, CONECTAR PARA SEMPRE",
    title_a: "Oficinas sensoriais com",
    title_em: "afeto",
    title_b: "para crianças de 2 a 9 anos",
    subtitle: "Experiências presenciais que estimulam os sentidos, fortalecem o vínculo entre pais e filhos e criam memórias que duram para sempre.",
    supportingText: "Materiais naturais, ambientes acolhedores e atividades pensadas para cada fase do desenvolvimento."
  };
  const heroImages = [{
    src: hero.img_main || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
    alt: "Criança explorando materiais naturais"
  }, {
    src: hero.img_a || "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    alt: "Família brincando em ambiente acolhedor"
  }, {
    src: hero.img_b || "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    alt: "Detalhe de folhas e materiais naturais"
  }, {
    src: hero.img_c || "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    alt: "Ambiente acolhedor com materiais sensoriais"
  }];
  const heroVisualImages = heroImages.length >= 4 ? heroImages.slice(0, 4) : [...heroImages, ...Array.from({
    length: 4 - heroImages.length
  }, () => heroImages[0])];
  const essenceImages = [{
    src: sobre.img_main || "https://images.unsplash.com/photo-1503454537195-1dcabb73f9?auto=format&fit=crop&w=1000&q=80",
    alt: "Criança explorando a natureza"
  }, {
    src: sobre.img_a || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
    alt: "Mãos em contato com folhas e pedras"
  }, {
    src: sobre.img_b || "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80",
    alt: "Pai e mãe interagindo com a criança"
  }, {
    src: sobre.img_c || "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80",
    alt: "Detalhe de materiais naturais"
  }];
  const essenceBenefits = ["Materiais naturais e atóxicos", "Conexão real entre pais e filhos", "Estímulo sensorial com propósito", "Memórias afetivas que permanecem"];
  const activityCards = activities.map((item, index) => {
    const icons = [Sprout, Sparkles, Users];
    const Icon = icons[index % icons.length];
    return {
      title: item.title || item.name || "Atividade",
      description: item.description || item.subtitle || "",
      ageRange: item.age_range || item.ageRange || "",
      image: item.image_url || item.image || "https://placehold.co/600x400/f2e2d0/5c3d2e?text=Bincá",
      icon: Icon
    };
  });
  const howSteps = [{
    title: "Escolha sua oficina",
    desc: "Navegue pelo calendário e escolha a oficina ideal para a faixa etária e os interesses do seu filho."
  }, {
    title: "Faça sua inscrição",
    desc: "Preencha os dados e reserve a vaga de forma simples, segura e acolhedora."
  }, {
    title: "Apareça e mergulhe",
    desc: "Chegue com o coração aberto e deixe o resto com a gente. Nossa equipe cuida dos materiais e do ambiente para vocês aproveitarem juntos."
  }];
  const galleryItems = gallery.map((item) => ({
    src: item.image_url || item.image || "https://placehold.co/600x400/f2e2d0/5c3d2e?text=Bincá",
    alt: item.caption || item.title || item.name || "Galeria Bincá"
  }));
  const testimonialCards = [{
    text: "O Bincá foi um respiro pra nossa rotina. Meu filho se conectou de um jeito que eu nunca tinha visto. Ele fala das oficinas até hoje!",
    name: "Mariana S.",
    role: "Mãe do Léo, 2 anos",
    stars: 5
  }, {
    text: "As atividades são incríveis! Tudo é pensado com tanto carinho que a gente sente confiança desde o primeiro momento.",
    name: "Juliana C.",
    role: "Mãe da Clara, 3 anos",
    stars: 5
  }, {
    text: "Um espaço acolhedor, materiais naturais e profissionais atenciosos. Recomendo de olhos fechados para todas as famílias.",
    name: "Ricardo M.",
    role: "Pai do Mateus, 4 anos",
    stars: 5
  }];
  const faqItems = [{
    q: "Qual a faixa etária das oficinas?",
    a: "Atendemos crianças de 2 a 9 anos, com propostas pensadas para cada etapa do desenvolvimento."
  }, {
    q: "Precisa acompanhar a criança?",
    a: "Sim, as oficinas são pensadas para a presença dos pais ou responsáveis, fortalecendo o vínculo no processo."
  }, {
    q: "Como faço para reservar uma vaga?",
    a: "Você pode preencher o formulário da página ou falar com a gente pelo WhatsApp para garantir sua participação."
  }, {
    q: "Os materiais são seguros?",
    a: "Sim. Trabalhamos com materiais naturais, atóxicos e escolhidos com carinho para o ambiente e para as crianças."
  }];
  const ctaCopy = {
    tag: "VEM VIVER O BINCÁ",
    title_a: "Pronta para uma experiência",
    title_em: "afetiva",
    title_b: "inesquecível?",
    subtitle: "Conecte seu filho com a natureza, os sentidos e memórias que ficam para sempre.",
    cta: "Falar no WhatsApp",
    benefits: ["Materiais naturais e atóxicos", "Seguro para diferentes faixas etárias", "Ambiente acolhedor"]
  };
  const waNumber = (contato.whatsapp_number ?? "").replace(/\D/g, "") || "5548999999999";
  const waLink = (msg) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg ?? contato.wa_template ?? "Olá!")}`;
  const imageFallback = "https://placehold.co/600x400/f2e2d0/5c3d2e?text=Bincá";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "binca", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "binca-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-inner", children: [
      site.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#inicio", className: "brand-link", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: site.logo, alt: site.name ?? "Bincá", className: "logo" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#inicio", className: "brand-link", style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 28,
        color: "var(--coral)",
        textDecoration: "none"
      }, children: "Bincá" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "menu-toggle", onClick: () => setMenuOpen((o) => !o), "aria-label": "Menu", children: "☰" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: `binca-nav desktop ${menuOpen ? "mobile-open" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre", onClick: () => setMenuOpen(false), children: "Sobre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#atividades", onClick: () => setMenuOpen(false), children: "Atividades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#como", onClick: () => setMenuOpen(false), children: "Como Funciona" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#galeria", onClick: () => setMenuOpen(false), children: "Galeria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", onClick: () => setMenuOpen(false), children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#reserva", className: "btn-nav", onClick: () => setMenuOpen(false), children: "Reservar vaga" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "reserva-section scroll-mt-20", id: "reserva", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reserva-card reserva-evento", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "PRÓXIMOS EVENTOS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Encontre sua próxima oficina sensorial" }),
        events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-lead", children: "Em breve, novos eventos serão anunciados ✨" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[28px] border border-[#E7D8CC] bg-white overflow-hidden shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: events[0].image_url || imageFallback, alt: events[0].name || "Evento", className: "h-full w-full object-cover", onError: (e) => {
              e.currentTarget.src = imageFallback;
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "PRÓXIMA OFICINA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold leading-tight", children: events[0].name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#6D5A4A]", children: [
                  formatEventDate(events[0].date),
                  " • ",
                  formatEventTime(events[0].time)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm text-[#4A382D]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Local:" }),
                  " ",
                  events[0].location || "Local a confirmar"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Valor:" }),
                  " ",
                  formatEventPrice(events[0].price)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Vagas:" }),
                  " ",
                  typeof events[0].spots_available === "number" ? `${events[0].spots_available} vaga${events[0].spots_available === 1 ? "" : "s"} restantes` : "Vagas disponíveis"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "btn-primary", onClick: () => selectEvent(events[0].id), children: "Quero participar" })
            ] })
          ] }),
          events.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: events.slice(1).map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[24px] border border-[#E7D8CC] bg-white p-5 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: event.image_url || imageFallback, alt: event.name || "Evento", className: "h-28 w-full rounded-3xl object-cover sm:w-40", onError: (e) => {
              e.currentTarget.src = imageFallback;
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "PRÓXIMA OFICINA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold", children: event.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-[#6D5A4A]", children: [
                formatEventDate(event.date),
                " • ",
                formatEventTime(event.time)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: event.location || "Local a confirmar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: formatEventPrice(event.price) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#4A382D]", children: typeof event.spots_available === "number" ? `${event.spots_available} vaga${event.spots_available === 1 ? "" : "s"} restantes` : "Vagas disponíveis" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "mt-3 btn-primary", onClick: () => selectEvent(event.id), children: "Quero participar" })
            ] })
          ] }) }, event.id)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 reserva-card reserva-form-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reserva-copy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "RESERVE SUA VAGA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
            "Garanta sua participação ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "agora" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-lead", children: "Preencha o formulário abaixo e receba as instruções de pagamento para confirmar a sua reserva." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReservationForm, { events, selectedEventId, onSelectEventId: setSelectedEventId })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero scroll-mt-20", id: "inicio", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-tag fade-up", children: heroCopy.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "hero-h1 fade-up", children: [
          heroCopy.title_a,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: heroCopy.title_em }),
          " ",
          heroCopy.title_b
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-sub fade-up", children: heroCopy.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-sub hero-sub-secondary fade-up", children: heroCopy.supportingText })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-images", "aria-label": "Galeria de imagens da hero", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-visual-blob", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-decor hero-decor-leaf", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 14C34 16 22 32 16 46C24 40 36 38 48 36C42 28 42 20 50 14Z", fill: "rgba(122,154,98,0.28)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 18C28 20 34 28 36 36C30 34 24 28 20 18Z", fill: "rgba(122,154,98,0.16)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-decor hero-decor-dots", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-decor hero-decor-heart", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 20C11.4 20 5 15.4 5 10.2C5 7 7.4 5 10.1 5C11.4 5 12.3 5.7 12.8 6.5C13.3 5.7 14.2 5 15.5 5C18.2 5 20.6 7 20.6 10.2C20.6 15.4 14.2 20 12 20Z", fill: "rgba(140,94,178,0.9)" }) }) }),
        heroVisualImages.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hero-photo-card hero-photo-card--${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.alt, loading: index === 0 ? "eager" : "lazy", onError: (e) => {
          e.currentTarget.src = imageFallback;
        } }) }, `${item.alt}-${index}`))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "sobre essence-section scroll-mt-20", id: "sobre", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "essence-gallery", "aria-label": "Galeria de imagens da seção sobre", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "essence-visual-blob", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "essence-decor essence-decor-leaf", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M50 14C34 16 22 32 16 46C24 40 36 38 48 36C42 28 42 20 50 14Z", fill: "rgba(122,154,98,0.24)" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "essence-decor essence-decor-dots", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
        ] }),
        essenceImages.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `essence-photo essence-photo-${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.alt, loading: "lazy", onError: (e) => {
          e.currentTarget.src = imageFallback;
        } }) }, `${item.alt}-${index}`))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sobre-texto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "NOSSA ESSÊNCIA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
          "Brincar com intenção ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "transforma" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-lead", children: "Acreditamos que o brincar é a linguagem da infância e a base para um desenvolvimento integral. Nossas oficinas unem natureza, sentidos e vínculos afetivos para nutrir corpo, mente e coração." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "check-list benefit-list", children: essenceBenefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "check-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 14 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: benefit })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "atividades scroll-mt-20", id: "atividades", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "atividades-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "OFICINAS QUE ENCANTAM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
          "Cada fase da infância merece ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "um jeito especial" }),
          " de brincar"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-lead", children: "Nossas propostas são pensadas para acolher crianças de 2 a 9 anos com carinho, segurança e estímulos sensoriais verdadeiros." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cards-grid", children: activityCards.map((item, index) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "binca-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, loading: "lazy", onError: (e) => {
            e.currentTarget.src = imageFallback;
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-emoji", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "card-title", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "card-desc", children: item.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-pill", children: [
              "Faixa etária: ",
              item.ageRange
            ] })
          ] })
        ] }, index);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "como scroll-mt-20", id: "como", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "como-inner", style: {
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "PASSO A PASSO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "Simples como ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "brincar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-lead", style: {
        margin: "0 auto"
      }, children: "Criamos um processo leve e acolhedor para que tudo seja fácil para as famílias." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "steps", style: {
        textAlign: "left"
      }, children: howSteps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "step-num", children: index + 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "step-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "step-title", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "step-desc", children: step.desc })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "galeria scroll-mt-20", id: "galeria", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "galeria-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "MOMENTOS REAIS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
          "Assim são nossas ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "oficinas" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "galeria-grid", children: galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gal-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.alt, loading: "lazy", onError: (e) => {
        e.currentTarget.src = imageFallback;
      } }) }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "depoimentos", id: "depoimentos", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dep-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "FAMÍLIAS FALAM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
          "O que as famílias ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "viveram" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dep-grid", children: testimonialCards.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "dep-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dep-stars", children: Array.from({
          length: item.stars
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, fill: "currentColor" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "dep-text", children: item.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dep-author", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dep-avatar", children: item.name[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dep-name", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dep-role", children: item.role })
          ] })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "faq-contact", id: "faq", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-icon-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Dúvidas frequentes" })
        ] }),
        faqItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `faq-item ${openFaq === i ? "open" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "faq-q", onClick: () => setOpenFaq(openFaq === i ? null : i), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18, className: "faq-chev" })
          ] }),
          openFaq === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-a", children: item.a })
        ] }, i))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-col contact-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "faq-head", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "faq-icon-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Fale com a gente" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "contact-sub", children: "Estamos aqui para ajudar você." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink("Olá! Gostaria de saber mais sobre as oficinas Bincá."), target: "_blank", rel: "noopener", className: "contact-link", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "contact-link-icon wa", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "contact-link-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fale conosco" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "contact-link-arrow", children: "›" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: contato.instagram ?? "https://www.instagram.com/binca.oficinas", target: "_blank", rel: "noopener", className: "contact-link", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "contact-link-icon ig", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "contact-link-text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "@binca.oficinas" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "contact-link-arrow", children: "›" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-note", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
          " Responderemos o mais rápido possível."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "contato scroll-mt-20", id: "contato", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contato-info", children: [
      evento.tag && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: evento.tag }),
      (evento.title_a || evento.title_em || evento.title_b) && /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        evento.title_a,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: evento.title_em }),
        " ",
        evento.title_b
      ] }),
      evento.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-lead", children: evento.subtitle }),
      banners.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gap: 20
      }, children: banners.map((b, i) => {
        const isExt = (b.link ?? "").startsWith("http");
        const inner = b.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.image, alt: b.title || `Banner ${i + 1}`, style: {
          width: "100%",
          height: "auto",
          display: "block"
        }, loading: "lazy" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          padding: "60px 24px",
          textAlign: "center",
          color: "var(--texto-suave)"
        }, children: b.title || "Banner sem imagem" });
        const wrapStyle = {
          display: "block",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 16px 40px -16px rgba(0,0,0,.25)",
          background: "#fff"
        };
        return b.link ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: b.link, ...isExt ? {
          target: "_blank",
          rel: "noopener"
        } : {}, style: wrapStyle, children: [
          inner,
          (b.title || b.subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            padding: 16
          }, children: [
            b.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 18,
              color: "var(--marrom)"
            }, children: b.title }),
            b.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              color: "var(--texto-suave)",
              fontSize: 14,
              marginTop: 4
            }, children: b.subtitle })
          ] })
        ] }, i) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: wrapStyle, children: [
          inner,
          (b.title || b.subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            padding: 16
          }, children: [
            b.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 18,
              color: "var(--marrom)"
            }, children: b.title }),
            b.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              color: "var(--texto-suave)",
              fontSize: 14,
              marginTop: 4
            }, children: b.subtitle })
          ] })
        ] }, i);
      }) }) : evento.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: evento.link || "#contato", ...evento.link ? {
        target: "_blank",
        rel: "noopener"
      } : {}, style: {
        display: "block",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 16px 40px -16px rgba(0,0,0,.25)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: evento.image, alt: evento.title_em || "Próximo evento", style: {
        width: "100%",
        height: "auto",
        display: "block"
      }, loading: "lazy" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        border: "2px dashed rgba(217,107,80,.35)",
        borderRadius: 24,
        padding: "60px 24px",
        textAlign: "center",
        color: "var(--texto-suave)",
        background: "rgba(255,255,255,.5)"
      }, children: "Em breve, o banner do próximo evento." }),
      evento.cta && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: evento.link || "#contato", ...evento.link?.startsWith("http") ? {
        target: "_blank",
        rel: "noopener"
      } : {}, className: "btn-primary", style: {
        marginTop: 20
      }, children: evento.cta })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "cta-final", id: "apoiadores", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        apoiadoresH.title_a ?? "Nossos",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: apoiadoresH.title_em ?? "apoiadores" }),
        " ",
        apoiadoresH.title_b ?? ""
      ] }),
      apoiadoresH.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: apoiadoresH.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sponsors-grid", children: [
        apoiadores.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          color: "rgba(255,255,255,.65)"
        }, children: "Em breve, nossos parceiros e apoiadores." }),
        apoiadores.map((s, i) => {
          const inner = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sponsor-tile", children: s.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.logo, alt: s.name ?? "Apoiador", className: "sponsor-logo", loading: "lazy" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            color: "#fff",
            fontSize: 16,
            textAlign: "center",
            width: 90,
            height: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }, children: s.name }) });
          return s.link ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.link, target: "_blank", rel: "noopener", title: s.name ?? "", style: {
            textDecoration: "none"
          }, children: inner }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { title: s.name ?? "", children: inner }, i);
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "cta-ribbon", id: "cta-final", style: ctaFinal.bg ? {
      background: ctaFinal.bg
    } : void 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-ribbon-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-ribbon-tag", children: ctaCopy.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "cta-ribbon-title", children: [
        ctaCopy.title_a,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: ctaCopy.title_em }),
        " ",
        ctaCopy.title_b
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "cta-ribbon-sub", children: ctaCopy.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink("Olá! Quero conversar sobre as oficinas Bincá."), target: "_blank", rel: "noopener", className: "cta-ribbon-btn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20 }),
        " ",
        ctaCopy.cta
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cta-ribbon-benefits", children: ctaCopy.benefits.map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-ribbon-benefit", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 18 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: benefit })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "binca-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-inner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-brand", children: [
          site.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: site.logo, alt: site.name ?? "Bincá" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 24,
            color: "var(--coral)"
          }, children: site.name ?? "Bincá" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: footer.description ?? "Aprender brincando. Conectar para sempre." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-nav", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Navegação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre", children: "Sobre" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#atividades", children: "Atividades" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#como", children: "Como Funciona" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#galeria", children: "Galeria" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", children: "Contato" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/admin", children: "Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-socials", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Redes" }),
          contato.instagram && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: contato.instagram, target: "_blank", rel: "noopener", "aria-label": "Instagram", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }),
            " Instagram"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink("Olá! Gostaria de saber mais sobre a Bincá."), target: "_blank", rel: "noopener", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }),
            " WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: contato.email ? `mailto:${contato.email}` : "#contato", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }),
            " Contato"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-location", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Onde estamos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: contato.city ?? "Oficinas presenciais em Imbituba" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: contato.region ?? "Santa Catarina — vagas limitadas" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-copy", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Bincá. ",
        footer.copy ?? "Todos os direitos reservados."
      ] }) })
    ] }),
    modalImg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "binca-modal", onClick: () => setModalImg(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: modalImg, alt: "" }) })
  ] });
}
function ReservationForm({
  events,
  selectedEventId,
  onSelectEventId
}) {
  const selectedEvent = events.find((event) => event.id === selectedEventId);
  const price = Number(selectedEvent?.price ?? 0);
  const [responsavel, setResponsavel] = reactExports.useState("");
  const [whatsapp, setWhatsapp] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [children, setChildren] = reactExports.useState([{
    name: "",
    age: ""
  }]);
  const [notes, setNotes] = reactExports.useState("");
  const [confirmReserva, setConfirmReserva] = reactExports.useState(false);
  const [imageConsent, setImageConsent] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(null);
  const confirmationMessage = "Você precisa confirmar que está ciente das condições da reserva.";
  const requiredFieldsFilled = Boolean(responsavel.trim() && whatsapp.trim() && email.trim() && selectedEventId && notes.trim() && confirmReserva && children.length > 0 && children.every((child) => child.name.trim() && child.age.trim()));
  function updateChild(i, patch) {
    setChildren((arr) => arr.map((c, idx) => idx === i ? {
      ...c,
      ...patch
    } : c));
  }
  function addChild() {
    setChildren((arr) => [...arr, {
      name: "",
      age: ""
    }]);
  }
  function removeChild(i) {
    setChildren((arr) => arr.length <= 1 ? arr : arr.filter((_, idx) => idx !== i));
  }
  const total = price * children.length;
  function handleConfirmInvalid(e) {
    e.preventDefault();
    toast.error(confirmationMessage);
  }
  async function submit(e) {
    e.preventDefault();
    if (!confirmReserva) {
      toast.error(confirmationMessage);
      return;
    }
    if (!requiredFieldsFilled) {
      toast.error("Preencha todos os campos obrigatórios antes de concluir sua reserva.");
      return;
    }
    const validChildren = children.filter((c) => c.name.trim());
    setSubmitting(true);
    try {
      if (!selectedEvent) {
        toast.error("Selecione um evento antes de concluir a reserva.");
        return;
      }
      const spotsToUse = validChildren.length || 1;
      if (typeof selectedEvent.spots_available === "number" && selectedEvent.spots_available < spotsToUse) {
        toast.error("Não há vagas suficientes para este evento.");
        return;
      }
      const {
        data,
        error
      } = await supabase.from("reservations").insert({
        responsible_name: responsavel.trim().slice(0, 120),
        whatsapp: whatsapp.trim().slice(0, 30),
        email: email.trim().slice(0, 120) || null,
        children: validChildren.map((c) => ({
          name: c.name.trim().slice(0, 80),
          age: c.age.trim().slice(0, 20)
        })),
        children_count: validChildren.length,
        workshop_id: selectedEvent.id,
        workshop_name: selectedEvent.name ?? null,
        workshop_date: selectedEvent.date ?? null,
        amount: total || null,
        consent_reservation: confirmReserva,
        consent_image: imageConsent,
        notes: [notes.trim().slice(0, 1e3), imageConsent ? "[Autoriza uso de imagem]" : "[NÃO autoriza uso de imagem]"].filter(Boolean).join(" — ") || null,
        payment_status: "pending",
        reservation_status: "awaiting_contact"
      }).select("id").single();
      if (error) throw error;
      if (selectedEvent.id) {
        const {
          error: eventError,
          data: updatedEvent
        } = await supabase.from("events").update({
          spots_available: (selectedEvent.spots_available ?? 0) - spotsToUse
        }).eq("id", selectedEvent.id).gt("spots_available", spotsToUse - 1);
        if (eventError || !updatedEvent || updatedEvent.length === 0) {
          toast.error("Reserva registrada, mas não foi possível atualizar as vagas do evento.");
        }
      }
      setDone({
        id: data.id,
        total
      });
      toast.success("Reserva registrada!");
    } catch (err) {
      toast.error(err.message ?? "Erro ao enviar reserva");
    } finally {
      setSubmitting(false);
    }
  }
  if (done) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-box", style: {
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-title", children: "Reserva recebida" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        color: "var(--texto-suave)",
        margin: "12px 0 20px",
        lineHeight: 1.6
      }, children: [
        "Sua reserva foi registrada. ",
        done.total > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "O valor é ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "R$ ",
            done.total.toFixed(2).replace(".", ",")
          ] }),
          "."
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Em breve entraremos em contato com as instruções de pagamento (PIX) para confirmar a vaga."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "var(--creme2)",
        borderRadius: 12,
        padding: 16,
        fontSize: 13,
        color: "var(--texto-suave)"
      }, children: [
        "Código da reserva: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: {
          color: "var(--texto)"
        }, children: done.id.slice(0, 8).toUpperCase() })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "reserva-form", className: "form-box", onSubmit: submit, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-title", children: "Reserve sua vaga" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-sub", children: "Preencha os campos abaixo. A vaga é confirmada após o pagamento ser aprovado." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Nome do responsável *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { maxLength: 120, value: responsavel, onChange: (e) => setResponsavel(e.target.value) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "WhatsApp *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { maxLength: 30, value: whatsapp, onChange: (e) => setWhatsapp(e.target.value), placeholder: "(48) 9..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "E-mail *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", maxLength: 120, value: email, onChange: (e) => setEmail(e.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Qual oficina você quer reservar? *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: selectedEventId ?? "", onChange: (e) => onSelectEventId(e.target.value || null), required: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecione um evento" }),
        events.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: event.id, children: `${event.name} — ${formatEventDate(event.date)} — ${formatEventPrice(event.price)}` }, event.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      marginTop: 4,
      marginBottom: 14,
      fontWeight: 700,
      color: "var(--texto)"
    }, children: [
      "Crianças (",
      children.length,
      ")"
    ] }),
    children.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "var(--creme2)",
      borderRadius: 14,
      padding: 14,
      marginBottom: 10
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", style: {
          marginBottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            "Nome da criança ",
            i + 1,
            " *"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { maxLength: 80, value: c.name, onChange: (e) => updateChild(i, {
            name: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", style: {
          marginBottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Idade da criança *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { maxLength: 20, value: c.age, onChange: (e) => updateChild(i, {
            age: e.target.value
          }), placeholder: "ex. 2 anos" })
        ] })
      ] }),
      children.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeChild(i), style: {
        marginTop: 8,
        background: "none",
        border: "none",
        color: "var(--coral)",
        fontSize: 13,
        cursor: "pointer",
        fontWeight: 700
      }, children: "Remover esta criança" })
    ] }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addChild, style: {
      width: "100%",
      padding: "12px",
      borderRadius: 12,
      marginBottom: 18,
      border: "2px dashed rgba(217,107,80,.4)",
      background: "transparent",
      color: "var(--coral)",
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: "var(--font-display)"
    }, children: "+ Adicionar outra criança" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Observações *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { maxLength: 1e3, value: notes, onChange: (e) => setNotes(e.target.value), placeholder: "Algo importante sobre a criança ou a reserva?" })
    ] }),
    price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "var(--creme2)",
      borderRadius: 12,
      padding: 14,
      marginBottom: 18,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
        color: "var(--texto-suave)",
        fontSize: 14
      }, children: [
        "Valor total (",
        children.length,
        " × R$ ",
        price.toFixed(2).replace(".", ","),
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: {
        color: "var(--texto)",
        fontSize: 18,
        fontFamily: "var(--font-display)"
      }, children: [
        "R$ ",
        total.toFixed(2).replace(".", ",")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 18,
      padding: 16,
      background: "var(--creme2)",
      borderRadius: 14
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        cursor: "pointer",
        fontSize: 14,
        color: "var(--texto)",
        lineHeight: 1.5
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", required: true, checked: confirmReserva, onChange: (e) => setConfirmReserva(e.target.checked), onInvalid: handleConfirmInvalid, style: {
          marginTop: 3,
          width: 18,
          height: 18,
          accentColor: "var(--coral)",
          flexShrink: 0
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Confirmo minha reserva e declaro que os dados informados estão corretos. Estou ciente de que a vaga só será garantida após a confirmação do pagamento e que, após a reserva confirmada, não haverá reembolso." }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        cursor: "pointer",
        fontSize: 14,
        color: "var(--texto)",
        lineHeight: 1.5
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: imageConsent, onChange: (e) => setImageConsent(e.target.checked), style: {
          marginTop: 3,
          width: 18,
          height: 18,
          accentColor: "var(--coral)",
          flexShrink: 0
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Autorizo o uso de imagem" }),
          " da(s) criança(s) e responsáveis em fotos e vídeos do evento para divulgação nas redes sociais da Bincá. (opcional)"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: submitting || !requiredFieldsFilled, className: "btn-primary", style: {
      display: "block",
      width: "auto",
      minWidth: 220,
      justifyContent: "center",
      opacity: submitting || !requiredFieldsFilled ? 0.6 : 1,
      margin: "0 auto"
    }, children: submitting ? "Enviando…" : "Concluir minha reserva" })
  ] });
}
export {
  HomePage as component
};
