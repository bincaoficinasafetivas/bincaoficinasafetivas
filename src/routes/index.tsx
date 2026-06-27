import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import { fetchSiteData } from "@/lib/content.functions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Instagram, Facebook, HelpCircle, Mail, ChevronDown, MessageCircle, Heart, Leaf, ShieldCheck } from "lucide-react";

const siteQuery = queryOptions({
  queryKey: ["site-data"],
  queryFn: () => fetchSiteData(),
});

export const Route = createFileRoute("/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(siteQuery),
  head: () => ({
    meta: [
      { title: "Bincá · Oficinas Afetivas" },
      {
        name: "description",
        content:
          "Oficinas sensoriais afetivas para crianças de 0 a 6 anos em Imbituba/SC. Experiências naturais que fortalecem o vínculo entre pais e filhos.",
      },
      { property: "og:title", content: "Bincá · Oficinas Afetivas" },
      {
        property: "og:description",
        content:
          "Vivências sensoriais para você e seu filho de 0 a 6 anos.",
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
  const nextWS = content.next_workshop ?? {};
  const faq: { q: string; a: string }[] = Array.isArray(content.faq?.items)
    ? content.faq.items
    : Array.isArray(content.faq) ? content.faq : [];
  const ctaFinal = content.cta_final ?? {};
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  const waNumber = (contato.whatsapp_number ?? "").replace(/\D/g, "") || "5548999999999";
  const waLink = (msg?: string) =>
    `https://wa.me/${waNumber}?text=${encodeURIComponent(msg ?? contato.wa_template ?? "Olá!")}`;

  return (
    <div className="binca">
      {/* HEADER */}
      <header className="binca-header">
        {site.logo ? (
          <a href="#inicio">
            <img src={site.logo} alt={site.name ?? "Bincá"} className="logo" />
          </a>
        ) : (
          <a href="#inicio" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--coral)", textDecoration: "none" }}>
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
          <a href="#contato" className="btn-nav" onClick={() => setMenuOpen(false)}>
            Reservar vaga
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-text">
          {hero.tag && <div className="hero-tag fade-up">{hero.tag}</div>}
          <h1 className="hero-h1 fade-up">
            {hero.title_a} <em>{hero.title_em}</em> {hero.title_b}
          </h1>
          <p className="hero-sub fade-up">{hero.subtitle}</p>
          <div className="hero-btns fade-up">
            {hero.cta_primary && (
              <a href={hero.cta_primary_link ?? "#contato"} className="btn-primary">
                {hero.cta_primary}
              </a>
            )}
            {hero.cta_secondary && (
              <a href={hero.cta_secondary_link ?? "#como"} className="btn-secondary">
                {hero.cta_secondary}
              </a>
            )}
          </div>
          {Array.isArray(hero.stats) && hero.stats.length > 0 && (
            <div className="hero-stats fade-up">
              {hero.stats.map((s: any, i: number) => (
                <div key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hero-images">
          {hero.badge && (
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              {hero.badge}
            </div>
          )}
          {hero.img_main && (
            <div className="hero-img-main">
              <img src={hero.img_main} alt="Oficina Bincá" loading="eager" />
            </div>
          )}
          {hero.img_a && (
            <div className="hero-img-sm">
              <img src={hero.img_a} alt="Brincadeira sensorial" loading="lazy" />
            </div>
          )}
          {hero.img_b && (
            <div className="hero-img-sm">
              <img src={hero.img_b} alt="Vivência afetiva" loading="lazy" />
            </div>
          )}
        </div>
      </section>

      {/* SOBRE */}
      <section className="sobre" id="sobre">
        <div className="sobre-img-grid">
          {sobre.img_main && (
            <div className="sobre-img">
              <img src={sobre.img_main} alt="Espaço Bincá" loading="lazy" />
            </div>
          )}
          {sobre.img_a && (
            <div className="sobre-img">
              <img src={sobre.img_a} alt="Vivência afetiva" loading="lazy" />
            </div>
          )}
          {sobre.img_b && (
            <div className="sobre-img">
              <img src={sobre.img_b} alt="Conexão" loading="lazy" />
            </div>
          )}
        </div>
        <div className="sobre-texto">
          <div className="section-tag">{sobre.tag}</div>
          <h2>
            {sobre.title_a} <span>{sobre.title_em}</span> {sobre.title_b}
          </h2>
          <p className="section-lead">{sobre.text}</p>
          {Array.isArray(sobre.bullets) && (
            <ul className="check-list">
              {sobre.bullets.map((b: any, i: number) => (
                <li key={i}>
                  <div className="check-icon">{b.icon}</div>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          )}
          {sobre.cta && (
            <a href={sobre.cta_link ?? "#contato"} className="btn-primary">
              {sobre.cta}
            </a>
          )}
        </div>
      </section>

      {/* ATIVIDADES */}
      <section className="atividades" id="atividades">
        <div className="atividades-header">
          <div className="section-tag">{atvH.tag}</div>
          <h2>
            {atvH.title_a} <span>{atvH.title_em}</span> {atvH.title_b}
          </h2>
          <p className="section-lead">{atvH.subtitle}</p>
        </div>
        <div className="cards-grid">
          {activities.map((a: any) => (
            <article key={a.id} className="binca-card">
              {a.image_url && (
                <div className="card-img">
                  <img src={a.image_url} alt={a.title} loading="lazy" />
                </div>
              )}
              <div className="card-body">
                <div className="card-emoji">{a.emoji}</div>
                <h3 className="card-title">{a.title}</h3>
                <p className="card-desc">{a.description}</p>
                {a.age_range && <span className="card-pill">{a.age_range}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="como" id="como">
        <div className="como-inner" style={{ textAlign: "center" }}>
          <div className="section-tag">{como.tag}</div>
          <h2>
            {como.title_a} <span>{como.title_em}</span> {como.title_b}
          </h2>
          <p className="section-lead" style={{ margin: "0 auto" }}>{como.subtitle}</p>
          <div className="steps" style={{ textAlign: "left" }}>
            {Array.isArray(como.steps) &&
              como.steps.map((s: any, i: number) => (
                <div key={i} className="step">
                  <div className="step-num">{i + 1}</div>
                  <div className="step-content">
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="galeria" id="galeria">
        <div className="galeria-header">
          <div className="section-tag">{galeria.tag}</div>
          <h2>
            {galeria.title_a} <span>{galeria.title_em}</span> {galeria.title_b}
          </h2>
        </div>
        <div className="galeria-strip">
          {gallery.map((g: any) => (
            <div key={g.id} className="gal-item" onClick={() => setModalImg(g.image_url)}>
              <img src={g.image_url} alt={g.caption ?? "Galeria Bincá"} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="depoimentos" id="depoimentos">
        <div className="dep-header">
          <div className="section-tag">{depH.tag}</div>
          <h2>
            {depH.title_a} <span>{depH.title_em}</span> {depH.title_b}
          </h2>
        </div>
        <div className="dep-grid">
          {testimonials.map((t: any) => (
            <article key={t.id} className="dep-card">
              <div className="dep-stars">{"★".repeat(t.stars ?? 5)}</div>
              <p className="dep-text">{t.text}</p>
              <div className="dep-author">
                <div className="dep-avatar">{t.initials ?? t.name?.[0] ?? "B"}</div>
                <div>
                  <div className="dep-name">{t.name}</div>
                  <div className="dep-role">{t.role}</div>
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
          {faq.length === 0 && (
            <div style={{ color: "var(--texto-suave)", fontSize: 14, padding: 12 }}>
              Em breve adicionaremos as perguntas frequentes.
            </div>
          )}
          {faq.map((f, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <button type="button" className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <ChevronDown size={18} className="faq-chev" />
              </button>
              {openFaq === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>
        <div className="faq-col contact-col">
          <div className="faq-head">
            <div className="faq-icon-circle"><Mail size={20} /></div>
            <h3>{contato.fale_title ?? "Fale com a gente"}</h3>
          </div>
          <p className="contact-sub">{contato.fale_sub ?? "Estamos aqui para ajudar você."}</p>
          {contato.whatsapp_number && (
            <a href={waLink()} target="_blank" rel="noopener" className="contact-link">
              <span className="contact-link-icon wa"><MessageCircle size={20} /></span>
              <span className="contact-link-text">
                <strong>WhatsApp</strong>
                <span>{contato.whatsapp ?? "Fale conosco"}</span>
              </span>
              <span className="contact-link-arrow">›</span>
            </a>
          )}
          {contato.instagram && (
            <a href={contato.instagram} target="_blank" rel="noopener" className="contact-link">
              <span className="contact-link-icon ig"><Instagram size={20} /></span>
              <span className="contact-link-text">
                <strong>Instagram</strong>
                <span>{contato.instagram_handle ?? "@binca.oficinas"}</span>
              </span>
              <span className="contact-link-arrow">›</span>
            </a>
          )}
          <div className="contact-note">
            <Heart size={14} /> {contato.note ?? "Responderemos o mais rápido possível."}
          </div>
        </div>
      </section>

      <section className="contato" id="contato">
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
              Em breve, o banner do próximo evento ✨
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
        <ReservationForm workshop={nextWS} />
      </section>

      {/* APOIADORES */}
      <section className="cta-final" id="apoiadores">
        <h2>
          {apoiadoresH.title_a ?? "Nossos"}{" "}
          <span>{apoiadoresH.title_em ?? "apoiadores"}</span>{" "}
          {apoiadoresH.title_b ?? ""}
        </h2>
        {apoiadoresH.subtitle && <p>{apoiadoresH.subtitle}</p>}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 1100,
            width: "100%",
          }}
        >
          {apoiadores.length === 0 && (
            <div style={{ color: "rgba(255,255,255,.65)" }}>
              Em breve, nossos parceiros e apoiadores ✨
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
          {ctaFinal.tag !== "" && (
            <div className="cta-ribbon-tag">✿ {ctaFinal.tag ?? "VEM VIVER O BINCÁ"} ✿</div>
          )}
          <h2 className="cta-ribbon-title">
            {ctaFinal.title_a ?? "Pronta para uma experiência"} <em>{ctaFinal.title_em ?? "afetiva"}</em> {ctaFinal.title_b ?? "inesquecível?"}
          </h2>
          <p className="cta-ribbon-sub">
            {ctaFinal.subtitle ?? "Conecte seu filho com a natureza, os sentidos e memórias que ficam para sempre."}
          </p>
          <a
            href={ctaFinal.cta_link || waLink(ctaFinal.wa_message)}
            target={(ctaFinal.cta_link || "").startsWith("http") || !ctaFinal.cta_link ? "_blank" : undefined}
            rel="noopener"
            className="cta-ribbon-btn"
          >
            <MessageCircle size={20} /> {ctaFinal.cta ?? "Falar no WhatsApp"}
          </a>
          <div className="cta-ribbon-benefits">
            {(Array.isArray(ctaFinal.benefits) && ctaFinal.benefits.length > 0
              ? ctaFinal.benefits
              : [
                  { icon: "leaf", text: "Materiais naturais e atóxicos" },
                  { icon: "shield", text: "Seguro para diferentes faixas etárias" },
                  { icon: "heart", text: "Ambiente acolhedor" },
                ]
            ).map((b: any, i: number) => (
              <div key={i} className="cta-ribbon-benefit">
                {b.icon === "shield" ? <ShieldCheck size={18} /> : b.icon === "heart" ? <Heart size={18} /> : <Leaf size={18} />}
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="binca-footer">
        {site.logo ? (
          <img src={site.logo} alt={site.name ?? "Bincá"} />
        ) : (
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, color: "var(--coral)" }}>
            {site.name ?? "Bincá"}
          </span>
        )}
        <div className="footer-links">
          {Array.isArray(footer.links) &&
            footer.links.map((l: any, i: number) => (
              <a key={i} href={l.href}>{l.label}</a>
            ))}
          {contato.instagram && (
            <a href={contato.instagram} target="_blank" rel="noopener" aria-label="Instagram"
               style={{ display:"inline-flex", alignItems:"center", gap:6 }}>
              <Instagram size={16} /> Instagram
            </a>
          )}
          <a href="#contato">Contato</a>
        </div>
        <div className="footer-location">
          <span style={{ color: "var(--coral)", fontSize: 18, lineHeight: 1 }}>📍</span>
          <div>
            <div className="footer-location-title">{contato.city ?? "Florianópolis - SC"}</div>
            <div>{contato.region ?? "Atendemos toda a região"}</div>
          </div>
        </div>
        <div className="footer-copy">
          <strong>© {new Date().getFullYear()} Bincá.</strong>
          {footer.copy ?? "Todos os direitos reservados."}
          <div style={{ marginTop: 6 }}>
            <a href="/admin" style={{ color: "var(--texto-suave)", fontSize: 12, textDecoration: "none", opacity:.6 }}>
              Admin
            </a>
          </div>
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

function ReservationForm({ workshop }: { workshop: any }) {
  const price = Number(workshop?.price ?? 0);
  const [responsavel, setResponsavel] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [children, setChildren] = useState<{ name: string; age: string }[]>([{ name: "", age: "" }]);
  const [notes, setNotes] = useState("");
  const [confirmReserva, setConfirmReserva] = useState(false);
  const [imageConsent, setImageConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | { id: string; total: number }>(null);

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

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!responsavel.trim() || !whatsapp.trim()) {
      toast.error("Preencha nome e WhatsApp");
      return;
    }
    const validChildren = children.filter((c) => c.name.trim());
    if (validChildren.length === 0) {
      toast.error("Adicione pelo menos uma criança");
      return;
    }
    if (!confirmReserva) {
      toast.error("Confirme sua reserva para continuar");
      return;
    }
    setSubmitting(true);
    try {
      const { data, error } = await supabase
        .from("reservations")
        .insert({
          responsible_name: responsavel.trim().slice(0, 120),
          whatsapp: whatsapp.trim().slice(0, 30),
          email: email.trim().slice(0, 120) || null,
          children: validChildren.map((c) => ({ name: c.name.trim().slice(0, 80), age: c.age.trim().slice(0, 20) })),
          children_count: validChildren.length,
          workshop_name: workshop?.name ?? null,
          workshop_date: workshop?.date ?? null,
          amount: total || null,
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
        <div className="form-title">Reserva recebida! ✨</div>
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
    <form className="form-box" onSubmit={submit}>
      <div className="form-title">Reserve sua vaga ✨</div>
      <div className="form-sub">
        Preencha os campos abaixo. A vaga é confirmada após o pagamento ser aprovado.
      </div>
      <div className="form-group">
        <label>Nome do responsável *</label>
        <input required maxLength={120} value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>WhatsApp *</label>
          <input required maxLength={30} value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(48) 9..." />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" maxLength={120} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div style={{ marginTop: 4, marginBottom: 14, fontWeight: 700, color: "var(--texto)" }}>
        Crianças ({children.length})
      </div>
      {children.map((c, i) => (
        <div key={i} style={{ background: "var(--creme2)", borderRadius: 14, padding: 14, marginBottom: 10 }}>
          <div className="form-row">
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Nome da criança {i + 1}</label>
              <input maxLength={80} value={c.name} onChange={(e) => updateChild(i, { name: e.target.value })} />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label>Idade</label>
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
        <label>Observações</label>
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
            checked={confirmReserva}
            onChange={(e) => setConfirmReserva(e.target.checked)}
            style={{ marginTop: 3, width: 18, height: 18, accentColor: "var(--coral)", flexShrink: 0 }}
          />
          <span><strong>Confirmo minha reserva</strong> e os dados informados acima. Entendo que a vaga só será garantida após a confirmação do pagamento.</span>
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

      <button type="submit" disabled={submitting || !confirmReserva} className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: submitting || !confirmReserva ? 0.6 : 1 }}>
        {submitting ? "Enviando…" : "Concluir minha reserva ✨"}
      </button>
    </form>
  );
}
