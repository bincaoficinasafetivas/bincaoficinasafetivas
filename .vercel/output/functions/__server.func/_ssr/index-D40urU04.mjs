import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { s as siteQuery } from "./router-C_iwu42B.mjs";
import { u as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { S as Sparkles, b as Sprout, H as Heart, c as Leaf, d as ArrowRight, e as Users, f as Star, C as CircleQuestionMark, g as ChevronDown, M as Mail, h as MessageCircle, I as Instagram } from "../_libs/lucide-react.mjs";
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
    content,
    activities,
    testimonials,
    gallery
  } = data;
  const site = content.site ?? {};
  content.hero ?? {};
  content.sobre ?? {};
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
  content.next_workshop ?? {};
  Array.isArray(content.faq?.items) ? content.faq.items : Array.isArray(content.faq) ? content.faq : [];
  const ctaFinal = content.cta_final ?? {};
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  const [modalImg, setModalImg] = reactExports.useState(null);
  const heroCopy = {
    tag: "APRENDER BRINCANDO, CONECTAR PARA SEMPRE",
    title_a: "Oficinas sensoriais com",
    title_em: "afeto",
    title_b: "para crianças de 2 a 9 anos",
    subtitle: "Experiências presenciais que estimulam os sentidos, fortalecem o vínculo entre pais e filhos e criam memórias que duram para sempre.",
    supportingText: "Materiais naturais, ambientes acolhedores e atividades pensadas para cada fase do desenvolvimento.",
    cta_primary: "Ver próximas oficinas",
    cta_secondary: "Como funciona"
  };
  const metrics = [{
    label: "+200 famílias atendidas",
    icon: Sparkles
  }, {
    label: "+60 atividades únicas",
    icon: Sprout
  }, {
    label: "Vínculos que ficam para sempre",
    icon: Heart
  }, {
    label: "Materiais naturais e atóxicos",
    icon: Leaf
  }];
  const heroImages = [{
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
    alt: "Criança explorando materiais naturais",
    className: "hero-img-main"
  }, {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    alt: "Família brincando em ambiente acolhedor",
    className: "hero-img-sm"
  }, {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    alt: "Detalhe de folhas e materiais naturais",
    className: "hero-img-sm"
  }];
  const essenceImages = [{
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
    alt: "Criança explorando a natureza"
  }, {
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
    alt: "Mãos em contato com folhas e pedras"
  }, {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80",
    alt: "Pai e mãe interagindo com a criança"
  }, {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80",
    alt: "Detalhe de materiais naturais"
  }];
  const essenceBenefits = ["Materiais naturais e atóxicos", "Conexão real entre pais e filhos", "Estímulo sensorial com propósito", "Memórias afetivas que permanecem"];
  const activityCards = [{
    title: "Exploração da Natureza",
    description: "Atividades sensoriais para descobrir texturas, cores e movimentos da natureza com calma, curiosidade e presença.",
    ageRange: "2–4 anos",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    icon: Sprout
  }, {
    title: "Brincadeiras Sensoriais",
    description: "Vivências pensadas para estimular os sentidos, a linguagem e a autonomia em cada etapa da infância.",
    ageRange: "5–7 anos",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    icon: Sparkles
  }, {
    title: "Oficinas em Família",
    description: "Momentos acolhedores em que pais e filhos se conectam por meio de brincadeiras intencionais e naturais.",
    ageRange: "8–9 anos",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    icon: Users
  }];
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
  const galleryItems = [{
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    alt: "Criança explorando com lupa e cesta"
  }, {
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    alt: "Mãos mexendo em materiais naturais"
  }, {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80",
    alt: "Família interagindo em oficina"
  }, {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalhe de mãozinhas com folhas e flores"
  }];
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero", id: "inicio", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-sub hero-sub-secondary fade-up", children: heroCopy.supportingText }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-btns fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#atividades", className: "btn-primary", children: heroCopy.cta_primary }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#como", className: "btn-secondary", children: heroCopy.cta_secondary })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-metrics fade-up", children: metrics.map((item, index) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-metric-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-metric-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
          ] }, index);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-images", children: heroImages.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: item.className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.alt, loading: index === 0 ? "eager" : "lazy" }) }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "sobre essence-section", id: "sobre", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "essence-gallery", children: essenceImages.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `essence-photo essence-photo-${index + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.alt, loading: "lazy" }) }, index)) }),
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
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contato", className: "btn-primary", children: [
          "Quero viver isso",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "atividades", id: "atividades", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-img", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.title, loading: "lazy" }) }),
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "como", id: "como", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "como-inner", style: {
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "galeria", id: "galeria", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "galeria-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-tag", children: "MOMENTOS REAIS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
          "Assim são nossas ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "oficinas" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "galeria-grid", children: galleryItems.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gal-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.alt, loading: "lazy" }) }, index)) })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "contato", id: "contato", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contato-info", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "cta-final", id: "apoiadores", style: {
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
        textAlign: "center"
      }, children: [
        apoiadoresH.title_a ?? "Nossos",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: apoiadoresH.title_em ?? "apoiadores" }),
        " ",
        apoiadoresH.title_b ?? ""
      ] }),
      apoiadoresH.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        textAlign: "center"
      }, children: apoiadoresH.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 40,
        display: "flex",
        flexWrap: "wrap",
        gap: 28,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 1100,
        width: "100%"
      }, children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", children: "Contato" })
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
export {
  HomePage as component
};
