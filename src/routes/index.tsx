import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useEffect, useState } from "react";
import { fetchSiteData, getEvents } from "@/lib/content.functions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Instagram, HelpCircle, Mail, ChevronDown, MessageCircle, Heart, Leaf, Sparkles, Sprout, Users, Star, ArrowRight } from "lucide-react";

function formatEventDate(value?: string | null) {
  if (!value) return "";
  const date = new Date(value.includes("T") ? value : `${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function formatEventTime(value?: string | null) {
  return value ? value : "Horário a combinar";
}

function formatEventPrice(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === "") return "Grátis";
  const amount = Number(value);
  if (Number.isNaN(amount) || amount === 0) return "Grátis";
  return `R$ ${amount.toFixed(2).replace(".", ",")}`;
}

const siteQuery = queryOptions({
  queryKey: ["site-data"],
  queryFn: () => fetchSiteData(),
});

const eventsQuery = queryOptions({
  queryKey: ["events"],
  queryFn: () => getEvents(),
});

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(siteQuery),
  head: () => ({
    meta: [
      { title: "Bincá Oficinas Afetivas | Oficinas sensoriais para crianças de 0 a 6 anos" },
      {
        name: "description",
        content:
          "Oficinas sensoriais presenciais para crianças de 0 a 6 anos, com materiais naturais, experiências afetivas e conexão entre pais e filhos.",
      },
      {
        name: "keywords",
        content:
          "oficinas sensoriais infantis, oficinas para crianças de 0 a 6 anos, atividades sensoriais para crianças, brincadeiras sensoriais, oficinas para pais e filhos, atividades infantis em Imbituba",
      },
      { property: "og:title", content: "Bincá Oficinas Afetivas | Oficinas sensoriais para crianças de 0 a 6 anos" },
      {
        property: "og:description",
        content:
          "Oficinas sensoriais presenciais para crianças de 0 a 6 anos, com materiais naturais, experiências afetivas e conexão entre pais e filhos.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#FBF6F0" }} />}>
      <HomeInner />
    </Suspense>
  );
}

function HomeInner() {
  const { data } = useSuspenseQuery(siteQuery);
  const { data: events = [] } = useSuspenseQuery(eventsQuery);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  useEffect(() => {
    if (events.length === 1) {
      setSelectedEventId(events[0].id);
    }
  }, [events]);

  const { content, activities, testimonials, gallery } = data;
  const site = content.site ?? {};
  const hero = content.hero ?? {};
  const sobre = content.sobre ?? {};
  const atvH = content.atividades_header ?? {};
  const como = content.como ?? {};
  const galeria = content.galeria ?? {};
  const depH = content.depoimentos_header ?? {};
  const contato = content.contato ?? {};
  const evento = content.event_banner ?? {};
  const banners: any[] = Array.isArray(content.banners) ? content.banners : [];
  const apoiadoresH = content.apoiadores ?? {};
  const apoiadores: any[] = Array.isArray(content.sponsors) ? content.sponsors : [];
  const footer = content.footer ?? {};
  const faq: { q: string; a: string }[] = Array.isArray(content.faq?.items)
    ? content.faq.items
    : Array.isArray(content.faq) ? content.faq : [];
  const ctaFinal = content.cta_final ?? {};
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  function scrollToReservationForm() {
    const formElement = document.getElementById("reserva-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function selectEvent(eventId: string) {
    setSelectedEventId(eventId);
    scrollToReservationForm();
  }

  const heroCopy = {
    tag: "APRENDER BRINCANDO, CONECTAR PARA SEMPRE",
    title_a: "Oficinas sensoriais com",
    title_em: "afeto",
    title_b: "para crianças de 2 a 9 anos",
    subtitle:
      "Experiências presenciais que estimulam os sentidos, fortalecem o vínculo entre pais e filhos e criam memórias que duram para sempre.",
    supportingText:
      "Materiais naturais, ambientes acolhedores e atividades pensadas para cada fase do desenvolvimento.",
    cta_primary: "Ver próximas oficinas",
    cta_secondary: "Como funciona",
  };

  const metrics = [
    { label: "+200 famílias atendidas", icon: Sparkles },
    { label: "+60 atividades únicas", icon: Sprout },
    { label: "Vínculos que ficam para sempre", icon: Heart },
    { label: "Materiais naturais e atóxicos", icon: Leaf },
  ];

  const heroImages = [
    {
      src: hero.img_main || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
      alt: "Criança explorando materiais naturais",
    },
    {
      src: hero.img_a || "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
      alt: "Família brincando em ambiente acolhedor",
    },
    {
      src: hero.img_b || "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
      alt: "Detalhe de folhas e materiais naturais",
    },
    {
      src: hero.img_c || "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
      alt: "Ambiente acolhedor com materiais sensoriais",
    },
  ];

  const heroVisualImages = heroImages.length >= 4
    ? heroImages.slice(0, 4)
    : [...heroImages, ...Array.from({ length: 4 - heroImages.length }, () => heroImages[0])];

  const essenceImages = [
    {
      src: sobre.img_main || "https://images.unsplash.com/photo-1503454537195-1dcabb73f9?auto=format&fit=crop&w=1000&q=80",
      alt: "Criança explorando a natureza",
    },
    {
      src: sobre.img_a || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
      alt: "Mãos em contato com folhas e pedras",
    },
    {
      src: sobre.img_b || "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80",
      alt: "Pai e mãe interagindo com a criança",
    },
    {
      src: sobre.img_c || "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80",
      alt: "Detalhe de materiais naturais",
    },
  ];

  const essenceBenefits = [
    "Materiais naturais e atóxicos",
    "Conexão real entre pais e filhos",
    "Estímulo sensorial com propósito",
    "Memórias afetivas que permanecem",
  ];

  const activityCards = activities.map((item: any, index: number) => {
    const icons = [Sprout, Sparkles, Users];
    const Icon = icons[index % icons.length];
    return {
      title: item.title || item.name || "Atividade",
      description: item.description || item.subtitle || "",
      ageRange: item.age_range || item.ageRange || "",
      image: item.image_url || item.image || "https://placehold.co/600x400/f2e2d0/5c3d2e?text=Bincá",
      icon: Icon,
    };
  });

  const howSteps = [
    {
      title: "Escolha sua oficina",
      desc: "Navegue pelo calendário e escolha a oficina ideal para a faixa etária e os interesses do seu filho.",
    },
    {
      title: "Faça sua inscrição",
      desc: "Preencha os dados e reserve a vaga de forma simples, segura e acolhedora.",
    },
    {
      title: "Apareça e mergulhe",
      desc: "Chegue com o coração aberto e deixe o resto com a gente. Nossa equipe cuida dos materiais e do ambiente para vocês aproveitarem juntos.",
    },
  ];

  const galleryItems = gallery.map((item: any) => ({
    src: item.image_url || item.image || "https://placehold.co/600x400/f2e2d0/5c3d2e?text=Bincá",
    alt: item.caption || item.title || item.name || "Galeria Bincá",
  }));

  const testimonialCards = [
    {
      text: "O Bincá foi um respiro pra nossa rotina. Meu filho se conectou de um jeito que eu nunca tinha visto. Ele fala das oficinas até hoje!",
      name: "Mariana S.",
      role: "Mãe do Léo, 2 anos",
      stars: 5,
    },
    {
      text: "As atividades são incríveis! Tudo é pensado com tanto carinho que a gente sente confiança desde o primeiro momento.",
      name: "Juliana C.",
      role: "Mãe da Clara, 3 anos",
      stars: 5,
    },
    {
      text: "Um espaço acolhedor, materiais naturais e profissionais atenciosos. Recomendo de olhos fechados para todas as famílias.",
      name: "Ricardo M.",
      role: "Pai do Mateus, 4 anos",
      stars: 5,
    },
  ];

  const faqItems = [
    { q: "Qual a faixa etária das oficinas?", a: "Atendemos crianças de 2 a 9 anos, com propostas pensadas para cada etapa do desenvolvimento." },
    { q: "Precisa acompanhar a criança?", a: "Sim, as oficinas são pensadas para a presença dos pais ou responsáveis, fortalecendo o vínculo no processo." },
    { q: "Como faço para reservar uma vaga?", a: "Você pode preencher o formulário da página ou falar com a gente pelo WhatsApp para garantir sua participação." },
    { q: "Os materiais são seguros?", a: "Sim. Trabalhamos com materiais naturais, atóxicos e escolhidos com carinho para o ambiente e para as crianças." },
  ];

  const ctaCopy = {
    tag: "VEM VIVER O BINCÁ",
    title_a: "Pronta para uma experiência",
    title_em: "afetiva",
    title_b: "inesquecível?",
    subtitle: "Conecte seu filho com a natureza, os sentidos e memórias que ficam para sempre.",
    cta: "Falar no WhatsApp",
    benefits: [
      "Materiais naturais e atóxicos",
      "Seguro para diferentes faixas etárias",
      "Ambiente acolhedor",
    ],
  };

  const waNumber = (contato.whatsapp_number ?? "").replace(/\D/g, "") || "5548999999999";
  const waLink = (msg?: string) =>
    `https://wa.me/${waNumber}?text=${encodeURIComponent(msg ?? contato.wa_template ?? "Olá!")}`;

  const imageFallback = "https://placehold.co/600x400/f2e2d0/5c3d2e?text=Bincá";

  return (
    <div className="binca">
      {/* HEADER */}
      <header className="binca-header">
        <div className="header-inner">
          {site.logo ? (
            <a href="#inicio" className="brand-link">
              <img src={site.logo} alt={site.name ?? "Bincá"} className="logo" />
            </a>
          ) : (
            <a href="#inicio" className="brand-link" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--coral)", textDecoration: "none" }}>
              Bincá
            </a>
          )}
          <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            ☰
          </button>
          <nav className={`binca-nav desktop ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#atividades" onClick={() => setMenuOpen(false)}>Atividades</a>
            <a href="#como" onClick={() => setMenuOpen(false)}>Como Funciona</a>
            <a href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            <a href="#reserva" className="btn-nav" onClick={() => setMenuOpen(false)}>
              Reservar vaga
            </a>
          </nav>
        </div>
      </header>

      <section className="reserva-section scroll-mt-20" id="reserva">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="reserva-card reserva-evento">
              <div className="section-tag">PRÓXIMOS EVENTOS</div>
              <h2>Encontre sua próxima oficina sensorial</h2>
              {events.length === 0 ? (
                <p className="section-lead">Em breve, novos eventos serão anunciados ✨</p>
              ) : (
                <>
                  <div className="rounded-[28px] border border-[#E7D8CC] bg-white overflow-hidden shadow-sm">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={events[0].image_url || imageFallback}
                        alt={events[0].name || "Evento"}
                        className="h-full w-full object-cover"
                        onError={(e) => { e.currentTarget.src = imageFallback; }}
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="section-tag">PRÓXIMA OFICINA</div>
                      <div>
                        <h3 className="text-2xl font-bold leading-tight">{events[0].name}</h3>
                        <p className="text-sm text-[#6D5A4A]">{formatEventDate(events[0].date)} • {formatEventTime(events[0].time)}</p>
                      </div>
                      <div className="space-y-2 text-sm text-[#4A382D]">
                        <p><strong>Local:</strong> {events[0].location || "Local a confirmar"}</p>
                        <p><strong>Valor:</strong> {formatEventPrice(events[0].price)}</p>
                        <p><strong>Vagas:</strong> {typeof events[0].spots_available === "number" ? `${events[0].spots_available} vaga${events[0].spots_available === 1 ? "" : "s"} restantes` : "Vagas disponíveis"}</p>
                      </div>
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => selectEvent(events[0].id)}
                      >
                        Quero participar
                      </button>
                    </div>
                  </div>
                  {events.length > 1 && (
                    <div className="mt-6 space-y-4">
                      {events.slice(1).map((event) => (
                        <div key={event.id} className="rounded-[24px] border border-[#E7D8CC] bg-white p-5 shadow-sm">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                            <img
                              src={event.image_url || imageFallback}
                              alt={event.name || "Evento"}
                              className="h-28 w-full rounded-3xl object-cover sm:w-40"
                              onError={(e) => { e.currentTarget.src = imageFallback; }}
                            />
                            <div className="flex-1">
                              <div className="section-tag">PRÓXIMA OFICINA</div>
                              <h4 className="text-lg font-bold">{event.name}</h4>
                              <p className="text-sm text-[#6D5A4A]">{formatEventDate(event.date)} • {formatEventTime(event.time)}</p>
                              <p className="text-sm">{event.location || "Local a confirmar"}</p>
                              <p className="text-sm"><strong>{formatEventPrice(event.price)}</strong></p>
                              <p className="text-sm text-[#4A382D]">{typeof event.spots_available === "number" ? `${event.spots_available} vaga${event.spots_available === 1 ? "" : "s"} restantes` : "Vagas disponíveis"}</p>
                              <button
                                type="button"
                                className="mt-3 btn-primary"
                                onClick={() => selectEvent(event.id)}
                              >
                                Quero participar
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="flex-1 reserva-card reserva-form-card">
            <div className="reserva-copy">
              <div className="section-tag">RESERVE SUA VAGA</div>
              <h2>
                Garanta sua participação <span>agora</span>
              </h2>
              <p className="section-lead">
                Preencha o formulário abaixo e receba as instruções de pagamento para confirmar a sua reserva.
              </p>
            </div>
            <ReservationForm
              events={events}
              selectedEventId={selectedEventId}
              onSelectEventId={setSelectedEventId}
            />
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="hero scroll-mt-20" id="inicio">
        <div className="hero-text">
          <div className="hero-tag fade-up">{heroCopy.tag}</div>
          <h1 className="hero-h1 fade-up">
            {heroCopy.title_a} <em>{heroCopy.title_em}</em> {heroCopy.title_b}
          </h1>
          <p className="hero-sub fade-up">{heroCopy.subtitle}</p>
          <p className="hero-sub hero-sub-secondary fade-up">{heroCopy.supportingText}</p>
        </div>
        <div className="hero-images" aria-label="Galeria de imagens da hero">
          <div className="hero-visual-blob" aria-hidden="true" />
          <div className="hero-decor hero-decor-leaf" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 14C34 16 22 32 16 46C24 40 36 38 48 36C42 28 42 20 50 14Z" fill="rgba(122,154,98,0.28)" />
              <path d="M20 18C28 20 34 28 36 36C30 34 24 28 20 18Z" fill="rgba(122,154,98,0.16)" />
            </svg>
          </div>
          <div className="hero-decor hero-decor-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="hero-decor hero-decor-heart" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20C11.4 20 5 15.4 5 10.2C5 7 7.4 5 10.1 5C11.4 5 12.3 5.7 12.8 6.5C13.3 5.7 14.2 5 15.5 5C18.2 5 20.6 7 20.6 10.2C20.6 15.4 14.2 20 12 20Z" fill="rgba(140,94,178,0.9)" />
            </svg>
          </div>
          {heroVisualImages.map((item, index) => (
            <div key={`${item.alt}-${index}`} className={`hero-photo-card hero-photo-card--${index + 1}`}>
              <img
                src={item.src}
                alt={item.alt}
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => { e.currentTarget.src = imageFallback; }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre essence-section scroll-mt-20" id="sobre">
        <div className="essence-gallery" aria-label="Galeria de imagens da seção sobre">
          <div className="essence-visual-blob" aria-hidden="true" />
          <div className="essence-decor essence-decor-leaf" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 14C34 16 22 32 16 46C24 40 36 38 48 36C42 28 42 20 50 14Z" fill="rgba(122,154,98,0.24)" />
            </svg>
          </div>
          <div className="essence-decor essence-decor-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          {essenceImages.map((item, index) => (
            <div key={`${item.alt}-${index}`} className={`essence-photo essence-photo-${index + 1}`}>
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = imageFallback; }}
              />
            </div>
          ))}
        </div>
        <div className="sobre-texto">
          <div className="section-tag">NOSSA ESSÊNCIA</div>
          <h2>
            Brincar com intenção <span>transforma</span>
          </h2>
          <p className="section-lead">
            Acreditamos que o brincar é a linguagem da infância e a base para um desenvolvimento integral. Nossas oficinas unem natureza, sentidos e vínculos afetivos para nutrir corpo, mente e coração.
          </p>
          <ul className="check-list benefit-list">
            {essenceBenefits.map((benefit, index) => (
              <li key={index}>
                <div className="check-icon">
                  <Leaf size={14} />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ATIVIDADES */}
      <section className="atividades scroll-mt-20" id="atividades">
        <div className="atividades-header">
          <div className="section-tag">OFICINAS QUE ENCANTAM</div>
          <h2>
            Cada fase da infância merece <span>um jeito especial</span> de brincar
          </h2>
          <p className="section-lead">
            Nossas propostas são pensadas para acolher crianças de 2 a 9 anos com carinho, segurança e estímulos sensoriais verdadeiros.
          </p>
        </div>
        <div className="cards-grid">
          {activityCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={index} className="binca-card">
                <div className="card-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = imageFallback; }}
                  />
                </div>
                <div className="card-body">
                  <div className="card-emoji">
                    <Icon size={22} />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                  <span className="card-pill">Faixa etária: {item.ageRange}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="como scroll-mt-20" id="como">
        <div className="como-inner" style={{ textAlign: "center" }}>
          <div className="section-tag">PASSO A PASSO</div>
          <h2>
            Simples como <span>brincar</span>
          </h2>
          <p className="section-lead" style={{ margin: "0 auto" }}>
            Criamos um processo leve e acolhedor para que tudo seja fácil para as famílias.
          </p>
          <div className="steps" style={{ textAlign: "left" }}>
            {howSteps.map((step, index) => (
              <div key={index} className="step">
                <div className="step-num">{index + 1}</div>
                <div className="step-content">
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="galeria scroll-mt-20" id="galeria">
        <div className="galeria-header">
          <div className="section-tag">MOMENTOS REAIS</div>
          <h2>
            Assim são nossas <span>oficinas</span>
          </h2>
        </div>
        <div className="galeria-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gal-item">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = imageFallback; }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depoimentos" id="depoimentos">
        <div className="dep-header">
          <div className="section-tag">FAMÍLIAS FALAM</div>
          <h2>
            O que as famílias <span>viveram</span>
          </h2>
        </div>
        <div className="dep-grid">
          {testimonialCards.map((item, index) => (
            <article key={index} className="dep-card">
              <div className="dep-stars">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="dep-text">{item.text}</p>
              <div className="dep-author">
                <div className="dep-avatar">{item.name[0]}</div>
                <div>
                  <div className="dep-name">{item.name}</div>
                  <div className="dep-role">{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ + CONTATO */}
      <section className="faq-contact" id="faq">
        <div className="faq-col">
          <div className="faq-head">
            <div className="faq-icon-circle"><HelpCircle size={20} /></div>
            <h3>Dúvidas frequentes</h3>
          </div>
          {faqItems.map((item, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <button type="button" className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{item.q}</span>
                <ChevronDown size={18} className="faq-chev" />
              </button>
              {openFaq === i && <div className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>
        <div className="faq-col contact-col">
          <div className="faq-head">
            <div className="faq-icon-circle"><Mail size={20} /></div>
            <h3>Fale com a gente</h3>
          </div>
          <p className="contact-sub">Estamos aqui para ajudar você.</p>
          <a href={waLink("Olá! Gostaria de saber mais sobre as oficinas Bincá.")} target="_blank" rel="noopener" className="contact-link">
            <span className="contact-link-icon wa"><MessageCircle size={20} /></span>
            <span className="contact-link-text">
              <strong>WhatsApp</strong>
              <span>Fale conosco</span>
            </span>
            <span className="contact-link-arrow">›</span>
          </a>
          <a href={contato.instagram ?? "https://www.instagram.com/binca.oficinas"} target="_blank" rel="noopener" className="contact-link">
            <span className="contact-link-icon ig"><Instagram size={20} /></span>
            <span className="contact-link-text">
              <strong>Instagram</strong>
              <span>@binca.oficinas</span>
            </span>
            <span className="contact-link-arrow">›</span>
          </a>
          <div className="contact-note">
            <Heart size={14} /> Responderemos o mais rápido possível.
          </div>
        </div>
      </section>

      <section className="contato scroll-mt-20" id="contato">
        <div className="contato-info">
          {evento.tag && <div className="section-tag">{evento.tag}</div>}
          {(evento.title_a || evento.title_em || evento.title_b) && (
            <h2>
              {evento.title_a} <span>{evento.title_em}</span> {evento.title_b}
            </h2>
          )}
          {evento.subtitle && <p className="section-lead">{evento.subtitle}</p>}
          {banners.length > 0 ? (
            <div style={{ display: "grid", gap: 20 }}>
              {banners.map((b: any, i: number) => {
                const isExt = (b.link ?? "").startsWith("http");
                const inner = b.image ? (
                  <img
                    src={b.image}
                    alt={b.title || `Banner ${i + 1}`}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    loading="lazy"
                  />
                ) : (
                  <div style={{ padding: "60px 24px", textAlign: "center", color: "var(--texto-suave)" }}>
                    {b.title || "Banner sem imagem"}
                  </div>
                );
                const wrapStyle = {
                  display: "block",
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 16px 40px -16px rgba(0,0,0,.25)",
                  background: "#fff",
                };
                return b.link ? (
                  <a key={i} href={b.link} {...(isExt ? { target: "_blank", rel: "noopener" } : {})} style={wrapStyle}>
                    {inner}
                    {(b.title || b.subtitle) && (
                      <div style={{ padding: 16 }}>
                        {b.title && <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--marrom)" }}>{b.title}</div>}
                        {b.subtitle && <div style={{ color: "var(--texto-suave)", fontSize: 14, marginTop: 4 }}>{b.subtitle}</div>}
                      </div>
                    )}
                  </a>
                ) : (
                  <div key={i} style={wrapStyle}>
                    {inner}
                    {(b.title || b.subtitle) && (
                      <div style={{ padding: 16 }}>
                        {b.title && <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--marrom)" }}>{b.title}</div>}
                        {b.subtitle && <div style={{ color: "var(--texto-suave)", fontSize: 14, marginTop: 4 }}>{b.subtitle}</div>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : evento.image ? (
            <a
              href={evento.link || "#contato"}
              {...(evento.link ? { target: "_blank", rel: "noopener" } : {})}
              style={{ display: "block", borderRadius: 24, overflow: "hidden", boxShadow: "0 16px 40px -16px rgba(0,0,0,.25)" }}
            >
              <img
                src={evento.image}
                alt={evento.title_em || "Próximo evento"}
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="lazy"
              />
            </a>
          ) : (
            <div
              style={{
                border: "2px dashed rgba(217,107,80,.35)",
                borderRadius: 24,
                padding: "60px 24px",
                textAlign: "center",
                color: "var(--texto-suave)",
                background: "rgba(255,255,255,.5)",
              }}
            >
              Em breve, o banner do próximo evento.
            </div>
          )}
          {evento.cta && (
            <a
              href={evento.link || "#contato"}
              {...(evento.link?.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
              className="btn-primary"
              style={{ marginTop: 20 }}
            >
              {evento.cta}
            </a>
          )}
        </div>
      </section>

      {/* APOIADORES */}
      <section className="cta-final" id="apoiadores">
        <h2>
          {apoiadoresH.title_a ?? "Nossos"}{" "}
          <span>{apoiadoresH.title_em ?? "apoiadores"}</span>{" "}
          {apoiadoresH.title_b ?? ""}
        </h2>
        {apoiadoresH.subtitle && <p>{apoiadoresH.subtitle}</p>}
        <div className="sponsors-grid">
          {apoiadores.length === 0 && (
            <div style={{ color: "rgba(255,255,255,.65)" }}>
              Em breve, nossos parceiros e apoiadores.
            </div>
          )}
          {apoiadores.map((s, i) => {
            const inner = (
              <div className="sponsor-tile">
                {s.logo ? (
                  <img src={s.logo} alt={s.name ?? "Apoiador"} className="sponsor-logo" loading="lazy" />
                ) : (
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fff", fontSize: 16, textAlign: "center", width: 90, height: 90, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    {s.name}
                  </div>
                )}
              </div>
            );
            return s.link ? (
              <a key={i} href={s.link} target="_blank" rel="noopener" title={s.name ?? ""} style={{ textDecoration: "none" }}>
                {inner}
              </a>
            ) : (
              <div key={i} title={s.name ?? ""}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-ribbon" id="cta-final" style={ctaFinal.bg ? { background: ctaFinal.bg } : undefined}>
        <div className="cta-ribbon-inner">
          <div className="cta-ribbon-tag">{ctaCopy.tag}</div>
          <h2 className="cta-ribbon-title">
            {ctaCopy.title_a} <em>{ctaCopy.title_em}</em> {ctaCopy.title_b}
          </h2>
          <p className="cta-ribbon-sub">{ctaCopy.subtitle}</p>
          <a
            href={waLink("Olá! Quero conversar sobre as oficinas Bincá.")}
            target="_blank"
            rel="noopener"
            className="cta-ribbon-btn"
          >
            <MessageCircle size={20} /> {ctaCopy.cta}
          </a>
          <div className="cta-ribbon-benefits">
            {ctaCopy.benefits.map((benefit, index) => (
              <div key={index} className="cta-ribbon-benefit">
                <Leaf size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="binca-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            {site.logo ? (
              <img src={site.logo} alt={site.name ?? "Bincá"} />
            ) : (
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--coral)" }}>
                {site.name ?? "Bincá"}
              </span>
            )}
            <p>{footer.description ?? "Aprender brincando. Conectar para sempre."}</p>
          </div>

          <div className="footer-nav">
            <h4>Navegação</h4>
            <a href="#sobre">Sobre</a>
            <a href="#atividades">Atividades</a>
            <a href="#como">Como Funciona</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
            <a href="/admin">Admin</a>
          </div>

          <div className="footer-socials">
            <h4>Redes</h4>
            {contato.instagram && (
              <a href={contato.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <Instagram size={16} /> Instagram
              </a>
            )}
            <a href={waLink("Olá! Gostaria de saber mais sobre a Bincá.")} target="_blank" rel="noopener">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={contato.email ? `mailto:${contato.email}` : "#contato"}>
              <Mail size={16} /> Contato
            </a>
          </div>

          <div className="footer-location">
            <h4>Onde estamos</h4>
            <p>{contato.city ?? "Oficinas presenciais em Imbituba"}</p>
            <p>{contato.region ?? "Santa Catarina — vagas limitadas"}</p>
          </div>
        </div>

        <div className="footer-copy">
          <span>© {new Date().getFullYear()} Bincá. {footer.copy ?? "Todos os direitos reservados."}</span>
        </div>
      </footer>

      {modalImg && (
        <div className="binca-modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="" />
        </div>
      )}
    </div>
  );
}

function ReservationForm({ events, selectedEventId, onSelectEventId }: { events: any[]; selectedEventId: string | null; onSelectEventId: (id: string | null) => void }) {
  const selectedEvent = events.find((event) => event.id === selectedEventId);
  const price = Number(selectedEvent?.price ?? 0);
  const [responsavel, setResponsavel] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [children, setChildren] = useState<{ name: string; age: string }[]>([{ name: "", age: "" }]);
  const [notes, setNotes] = useState("");
  const [confirmReserva, setConfirmReserva] = useState(false);
  const [imageConsent, setImageConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | { id: string; total: number }>(null);

  const confirmationMessage = "Você precisa confirmar que está ciente das condições da reserva.";

  const requiredFieldsFilled = Boolean(
    responsavel.trim() &&
    whatsapp.trim() &&
    email.trim() &&
    selectedEventId &&
    notes.trim() &&
    confirmReserva &&
    children.length > 0 &&
    children.every((child) => child.name.trim() && child.age.trim())
  );

  function updateChild(i: number, patch: Partial<{ name: string; age: string }>) {
    setChildren((arr) => arr.map((c, idx) => (idx === i ? { ...c, ...patch } : c)));
  }
  function addChild() {
    setChildren((arr) => [...arr, { name: "", age: "" }]);
  }
  function removeChild(i: number) {
    setChildren((arr) => (arr.length <= 1 ? arr : arr.filter((_, idx) => idx !== i)));
  }

  const total = price * children.length;

  function handleConfirmInvalid(e: React.InvalidEvent<HTMLInputElement>) {
    e.preventDefault();
    toast.error(confirmationMessage);
  }

  async function submit(e: React.FormEvent) {
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

      const { data, error } = await supabase
        .from("reservations")
        .insert({
          responsible_name: responsavel.trim().slice(0, 120),
          whatsapp: whatsapp.trim().slice(0, 30),
          email: email.trim().slice(0, 120) || null,
          children: validChildren.map((c) => ({ name: c.name.trim().slice(0, 80), age: c.age.trim().slice(0, 20) })),
          children_count: validChildren.length,
          workshop_id: selectedEvent.id,
          workshop_name: selectedEvent.name ?? null,
          workshop_date: selectedEvent.date ?? null,
          amount: total || null,
          consent_reservation: confirmReserva,
          consent_image: imageConsent,
          notes: [
            notes.trim().slice(0, 1000),
            imageConsent ? "[Autoriza uso de imagem]" : "[NÃO autoriza uso de imagem]",
          ].filter(Boolean).join(" — ") || null,
          payment_status: "pending",
          reservation_status: "awaiting_contact",
        })
        .select("id")
        .single();
      if (error) throw error;

      if (selectedEvent.id) {
        const { error: eventError, data: updatedEvent } = await supabase
          .from("events")
          .update({ spots_available: (selectedEvent.spots_available ?? 0) - spotsToUse })
          .eq("id", selectedEvent.id)
          .gt("spots_available", spotsToUse - 1);

        if (eventError || !updatedEvent || updatedEvent.length === 0) {
          toast.error("Reserva registrada, mas não foi possível atualizar as vagas do evento.");
        }
      }

      setDone({ id: data!.id, total });
      toast.success("Reserva registrada!");
    } catch (err: any) {
      toast.error(err.message ?? "Erro ao enviar reserva");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="form-box" style={{ textAlign: "center" }}>
        <div className="form-title">Reserva recebida</div>
        <p style={{ color: "var(--texto-suave)", margin: "12px 0 20px", lineHeight: 1.6 }}>
          Sua reserva foi registrada. {done.total > 0 ? <>O valor é <strong>R$ {done.total.toFixed(2).replace(".", ",")}</strong>.</> : null}
          <br />Em breve entraremos em contato com as instruções de pagamento (PIX) para confirmar a vaga.
        </p>
        <div style={{ background: "var(--creme2)", borderRadius: 12, padding: 16, fontSize: 13, color: "var(--texto-suave)" }}>
          Código da reserva: <strong style={{ color: "var(--texto)" }}>{done.id.slice(0, 8).toUpperCase()}</strong>
        </div>
      </div>
    );
  }

  return (
    <form id="reserva-form" className="form-box" onSubmit={submit}>
      <div className="form-title">Reserve sua vaga</div>
      <div className="form-sub">
        Preencha os campos abaixo. A vaga é confirmada após o pagamento ser aprovado.
      </div>
      <div className="form-group">
        <label>Nome do responsável *</label>
        <input maxLength={120} value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>WhatsApp *</label>
          <input maxLength={30} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(48) 9..." />
        </div>
        <div className="form-group">
          <label>E-mail *</label>
          <input type="email" maxLength={120} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="form-group">
        <label>Qual oficina você quer reservar? *</label>
        <select
          value={selectedEventId ?? ""}
          onChange={(e) => onSelectEventId(e.target.value || null)}
          required
        >
          <option value="">Selecione um evento</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {`${event.name} — ${formatEventDate(event.date)} — ${formatEventPrice(event.price)}`}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: 4, marginBottom: 14, fontWeight: 700, color: "var(--texto)" }}>
        Crianças ({children.length})
      </div>
      {children.map((c, i) => (
        <div key={i} style={{ background: "var(--creme2)", borderRadius: 14, padding: 14, marginBottom: 10 }}>
          <div className="form-row">
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Nome da criança {i + 1} *</label>
              <input maxLength={80} value={c.name} onChange={(e) => updateChild(i, { name: e.target.value })} />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Idade da criança *</label>
              <input maxLength={20} value={c.age} onChange={(e) => updateChild(i, { age: e.target.value })} placeholder="ex. 2 anos" />
            </div>
          </div>
          {children.length > 1 && (
            <button
              type="button"
              onClick={() => removeChild(i)}
              style={{ marginTop: 8, background: "none", border: "none", color: "var(--coral)", fontSize: 13, cursor: "pointer", fontWeight: 700 }}
            >
              Remover esta criança
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addChild}
        style={{
          width: "100%", padding: "12px", borderRadius: 12, marginBottom: 18,
          border: "2px dashed rgba(217,107,80,.4)", background: "transparent",
          color: "var(--coral)", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-display)",
        }}
      >
        + Adicionar outra criança
      </button>

      <div className="form-group">
        <label>Observações *</label>
        <textarea maxLength={1000} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Algo importante sobre a criança ou a reserva?" />
      </div>

      {price > 0 && (
        <div style={{ background: "var(--creme2)", borderRadius: 12, padding: 14, marginBottom: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "var(--texto-suave)", fontSize: 14 }}>Valor total ({children.length} × R$ {price.toFixed(2).replace(".", ",")})</span>
          <strong style={{ color: "var(--texto)", fontSize: 18, fontFamily: "var(--font-display)" }}>R$ {total.toFixed(2).replace(".", ",")}</strong>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 18, padding: 16, background: "var(--creme2)", borderRadius: 14 }}>
        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontSize: 14, color: "var(--texto)", lineHeight: 1.5 }}>
          <input
            type="checkbox"
            required
            checked={confirmReserva}
            onChange={(e) => setConfirmReserva(e.target.checked)}
            onInvalid={handleConfirmInvalid}
            style={{ marginTop: 3, width: 18, height: 18, accentColor: "var(--coral)", flexShrink: 0 }}
          />
          <span><strong>Confirmo minha reserva e declaro que os dados informados estão corretos. Estou ciente de que a vaga só será garantida após a confirmação do pagamento e que, após a reserva confirmada, não haverá reembolso.</strong></span>
        </label>
        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontSize: 14, color: "var(--texto)", lineHeight: 1.5 }}>
          <input
            type="checkbox"
            checked={imageConsent}
            onChange={(e) => setImageConsent(e.target.checked)}
            style={{ marginTop: 3, width: 18, height: 18, accentColor: "var(--coral)", flexShrink: 0 }}
          />
          <span><strong>Autorizo o uso de imagem</strong> da(s) criança(s) e responsáveis em fotos e vídeos do evento para divulgação nas redes sociais da Bincá. (opcional)</span>
        </label>
      </div>

      <button type="submit" disabled={submitting || !requiredFieldsFilled} className="btn-primary" style={{ display: "block", width: "auto", minWidth: 220, justifyContent: "center", opacity: submitting || !requiredFieldsFilled ? 0.6 : 1, margin: "0 auto" }}>
        {submitting ? "Enviando…" : "Concluir minha reserva"}
      </button>
    </form>
  );
}
