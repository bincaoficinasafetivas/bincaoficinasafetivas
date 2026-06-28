import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useServerFn } from "@tanstack/react-start";
import { adminLogin } from "@/lib/admin.functions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Upload, ArrowUp, ArrowDown, LogOut } from "lucide-react";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({ meta: [{ title: "Admin · Bincá" }, { name: "robots", content: "noindex" }] }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  async function refresh() {
    try {
      const { data } = await supabase.auth.getUser();
      const u = data.user;
      setUser(u);
      if (u) {
        const { data: roleRow } = await supabase
          .from("user_roles")
          .select("id")
          .eq("user_id", u.id)
          .eq("role", "admin")
          .maybeSingle();
        setIsAdmin(!!roleRow);
      } else {
        setIsAdmin(false);
      }
    } catch {
      setUser(null);
      setIsAdmin(false);
    } finally {
      setChecking(false);
    }
  }

  useEffect(() => {
    refresh();
    const sub = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        refresh();
      }
    });
    return () => sub.data.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await supabase.auth.signOut();
    } catch {}
    setUser(null);
    setIsAdmin(false);
    navigate({ to: "/" });
  }

  if (checking) {
    return <div style={{ padding: 40, fontFamily: "var(--font-body)" }}>Carregando…</div>;
  }
  if (!user || !isAdmin) return <LoginForm onSuccess={refresh} />;
  return <AdminDashboard onLogout={handleLogout} />;
}


function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const ensure = useServerFn(adminLogin);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, password: pwd } = await ensure({ data: { username, password } });
      const { error } = await supabase.auth.signInWithPassword({ email, password: pwd });
      if (error) throw error;
      toast.success("Bem-vindo!");
      onSuccess();
    } catch (e: any) {
      toast.error(e.message ?? "Falha ao entrar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--creme2)", padding: 24 }}>
      <Card style={{ width: "100%", maxWidth: 420, padding: 32, borderRadius: 24 }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "var(--coral)", marginBottom: 4 }}>
          Bincá Admin
        </h1>
        <p style={{ color: "var(--texto-suave)", marginBottom: 24, fontSize: 14 }}>
          Acesse o painel para editar o site.
        </p>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <Label>Usuário</Label>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} autoFocus required />
          </div>
          <div>
            <Label>Senha</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: 8 }}>
            {loading ? "Entrando…" : "Entrar"}
          </Button>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
            <Button asChild variant="outline">
              <a href="/">Voltar ao site</a>
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--creme2)", paddingBottom: 60 }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px", background: "#fff", borderBottom: "1px solid rgba(0,0,0,.06)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--coral)" }}>
          Painel Bincá
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="/" target="_blank" rel="noopener">
            <Button variant="outline">Ver site</Button>
          </a>
          <Button variant="ghost" onClick={onLogout}><LogOut size={16} /> Sair</Button>
        </div>
      </header>
      <main style={{ maxWidth: 1100, margin: "32px auto", padding: "0 24px" }}>
        <Tabs defaultValue="reservas">
          <TabsList style={{ flexWrap: "wrap", height: "auto" }}>
            <TabsTrigger value="reservas">📋 Reservas</TabsTrigger>
            <TabsTrigger value="site">Site / SEO</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="sobre">Sobre</TabsTrigger>
            <TabsTrigger value="atividades">Atividades</TabsTrigger>
            <TabsTrigger value="eventos">Eventos</TabsTrigger>
            <TabsTrigger value="como">Como Funciona</TabsTrigger>
            <TabsTrigger value="galeria">Galeria</TabsTrigger>
            <TabsTrigger value="depoimentos">Depoimentos</TabsTrigger>
            <TabsTrigger value="contato">Contato</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="cta_final">CTA Final</TabsTrigger>
            <TabsTrigger value="evento">Próximo evento</TabsTrigger>
            <TabsTrigger value="apoiadores">Apoiadores</TabsTrigger>
            <TabsTrigger value="footer">Rodapé</TabsTrigger>
          </TabsList>

          <TabsContent value="reservas"><ReservationsEditor /></TabsContent>

          <TabsContent value="site"><ContentEditor sectionKey="site" fields={[
            { k: "name", label: "Nome do site" },
            { k: "title", label: "Título SEO" },
            { k: "description", label: "Descrição SEO", textarea: true },
            { k: "logo", label: "Logo (URL)", image: true },
          ]} /></TabsContent>

          <TabsContent value="hero"><ContentEditor sectionKey="hero" fields={[
            { k: "tag", label: "Tag" },
            { k: "title_a", label: "Título — início" },
            { k: "title_em", label: "Título — destaque" },
            { k: "title_b", label: "Título — final" },
            { k: "subtitle", label: "Subtítulo", textarea: true },
            { k: "cta_primary", label: "Botão principal — texto" },
            { k: "cta_primary_link", label: "Botão principal — link" },
            { k: "cta_secondary", label: "Botão secundário — texto" },
            { k: "cta_secondary_link", label: "Botão secundário — link" },
            { k: "badge", label: "Badge (ex: Oficinas ao vivo!)" },
            { k: "img_main", label: "Imagem principal", image: true },
            { k: "img_a", label: "Imagem secundária A", image: true },
            { k: "img_b", label: "Imagem secundária B", image: true },
            { k: "img_c", label: "Imagem 4 do Hero", image: true },
            { k: "stats", label: "Estatísticas", json: true },
          ]} /></TabsContent>

          <TabsContent value="sobre"><ContentEditor sectionKey="sobre" fields={[
            { k: "tag", label: "Tag" },
            { k: "title_a", label: "Título — início" },
            { k: "title_em", label: "Título — destaque" },
            { k: "title_b", label: "Título — final" },
            { k: "text", label: "Texto", textarea: true },
            { k: "cta", label: "Botão — texto" },
            { k: "cta_link", label: "Botão — link" },
            { k: "img_main", label: "Imagem principal", image: true },
            { k: "img_a", label: "Imagem A", image: true },
            { k: "img_b", label: "Imagem B", image: true },
            { k: "img_c", label: "Imagem 4 do Sobre", image: true },
            { k: "bullets", label: "Lista de benefícios", json: true },
          ]} /></TabsContent>

          <TabsContent value="atividades">
            <ContentEditor sectionKey="atividades_header" fields={[
              { k: "tag", label: "Tag" },
              { k: "title_a", label: "Título — início" },
              { k: "title_em", label: "Título — destaque" },
              { k: "title_b", label: "Título — final" },
              { k: "subtitle", label: "Subtítulo", textarea: true },
            ]} />
            <div style={{ marginTop: 32 }}>
              <ActivitiesEditor />
            </div>
          </TabsContent>

          <TabsContent value="eventos"><EventsEditor /></TabsContent>

          <TabsContent value="como"><ContentEditor sectionKey="como" fields={[
            { k: "tag", label: "Tag" },
            { k: "title_a", label: "Título — início" },
            { k: "title_em", label: "Título — destaque" },
            { k: "title_b", label: "Título — final" },
            { k: "subtitle", label: "Subtítulo", textarea: true },
            { k: "steps", label: "Passos (lista)", json: true },
          ]} /></TabsContent>

          <TabsContent value="galeria">
            <ContentEditor sectionKey="galeria" fields={[
              { k: "tag", label: "Tag" },
              { k: "title_a", label: "Título — início" },
              { k: "title_em", label: "Título — destaque" },
              { k: "title_b", label: "Título — final" },
            ]} />
            <div style={{ marginTop: 32 }}>
              <GalleryEditor />
            </div>
          </TabsContent>

          <TabsContent value="depoimentos">
            <ContentEditor sectionKey="depoimentos_header" fields={[
              { k: "tag", label: "Tag" },
              { k: "title_a", label: "Título — início" },
              { k: "title_em", label: "Título — destaque" },
              { k: "title_b", label: "Título — final" },
            ]} />
            <div style={{ marginTop: 32 }}>
              <TestimonialsEditor />
            </div>
          </TabsContent>

          <TabsContent value="contato"><ContentEditor sectionKey="contato" fields={[
            { k: "tag", label: "Tag" },
            { k: "title_a", label: "Título — início" },
            { k: "title_em", label: "Título — destaque" },
            { k: "title_b", label: "Título — final" },
            { k: "subtitle", label: "Subtítulo", textarea: true },
            { k: "whatsapp", label: "WhatsApp (exibido)" },
            { k: "whatsapp_number", label: "WhatsApp (somente números c/ DDI, ex: 5548999999999)" },
            { k: "email", label: "E-mail" },
            { k: "address", label: "Endereço" },
            { k: "instagram", label: "Instagram (URL)" },
            { k: "instagram_handle", label: "Instagram (handle, ex: @binca.oficinas)" },
            { k: "facebook", label: "Facebook (URL)" },
            { k: "wa_template", label: "Mensagem padrão do WhatsApp", textarea: true },
            { k: "fale_title", label: "Bloco contato — título (ex: Fale com a gente)" },
            { k: "fale_sub", label: "Bloco contato — subtítulo" },
            { k: "note", label: "Bloco contato — nota final" },
          ]} /></TabsContent>

          <TabsContent value="faq"><ContentEditor sectionKey="faq" fields={[
            { k: "items", label: 'Lista de perguntas (JSON, ex: [{"q":"...","a":"..."}])', json: true },
          ]} /></TabsContent>


          <TabsContent value="cta_final"><ContentEditor sectionKey="cta_final" fields={[
            { k: "tag", label: "Tag (ex: VEM VIVER O BINCÁ)" },
            { k: "title_a", label: "Título — início" },
            { k: "title_em", label: "Título — destaque (amarelo)" },
            { k: "title_b", label: "Título — final" },
            { k: "subtitle", label: "Subtítulo", textarea: true },
            { k: "cta", label: "Texto do botão" },
            { k: "cta_link", label: "Link do botão (vazio = WhatsApp)" },
            { k: "wa_message", label: "Mensagem WhatsApp (se botão for WhatsApp)" },
            { k: "bg", label: "Cor de fundo (ex: #D96B50)" },
            { k: "benefits", label: 'Benefícios (JSON, ex: [{"icon":"leaf","text":"..."}]) — icons: leaf, shield, heart', json: true },
          ]} /></TabsContent>


          <TabsContent value="evento">
            <ContentEditor sectionKey="event_banner" fields={[
              { k: "tag", label: "Tag (ex: Próximo evento)" },
              { k: "title_a", label: "Título — início" },
              { k: "title_em", label: "Título — destaque" },
              { k: "title_b", label: "Título — final" },
              { k: "subtitle", label: "Descrição curta", textarea: true },
            ]} />
            <div style={{ marginTop: 24 }}>
              <BannersEditor />
            </div>
          </TabsContent>

          <TabsContent value="apoiadores">
            <ContentEditor sectionKey="apoiadores" fields={[
              { k: "title_a", label: "Título — início" },
              { k: "title_em", label: "Título — destaque" },
              { k: "title_b", label: "Título — final" },
              { k: "subtitle", label: "Subtítulo (opcional)", textarea: true },
            ]} />
            <div style={{ marginTop: 24 }}>
              <SponsorsEditor />
            </div>
          </TabsContent>

          <TabsContent value="footer"><ContentEditor sectionKey="footer" fields={[
            { k: "copy", label: "Texto de copyright" },
            { k: "links", label: "Links rápidos", json: true },
          ]} /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

/* ---------------- CONTENT EDITOR ---------------- */

type Field = { k: string; label: string; textarea?: boolean; image?: boolean; json?: boolean };

function ContentEditor({ sectionKey, fields }: { sectionKey: string; fields: Field[] }) {
  const [value, setValue] = useState<Record<string, any> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase
      .from("site_content")
      .select("value")
      .eq("key", sectionKey)
      .maybeSingle()
      .then(({ data }) => setValue((data?.value as any) ?? {}));
  }, [sectionKey]);

  async function save() {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .upsert({ key: sectionKey, value: value ?? {} });
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Salvo!");
  }

  if (!value) return <div style={{ padding: 20 }}>Carregando…</div>;

  return (
    <Card style={{ padding: 28, borderRadius: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {fields.map((f) => (
          <FieldEditor key={f.k} field={f} value={value[f.k]} onChange={(v) => setValue({ ...value, [f.k]: v })} />
        ))}
      </div>
      <Button className="btn-primary" style={{ marginTop: 24 }} onClick={save} disabled={saving}>
        {saving ? "Salvando…" : "Salvar alterações"}
      </Button>
    </Card>
  );
}

function FieldEditor({ field, value, onChange }: { field: Field; value: any; onChange: (v: any) => void }) {
  if (field.json) return <JsonField field={field} value={value} onChange={onChange} />;
  if (field.image) {
    return (
      <div>
        <Label>{field.label}</Label>
        <ImagePicker value={value} onChange={onChange} />
      </div>
    );
  }
  return (
    <div>
      <Label>{field.label}</Label>
      {field.textarea ? (
        <Textarea value={value ?? ""} onChange={(e) => onChange(e.target.value)} rows={3} />
      ) : (
        <Input value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
}

function JsonField({ field, value, onChange }: { field: Field; value: any; onChange: (v: any) => void }) {
  const [txt, setTxt] = useState(() => JSON.stringify(value ?? [], null, 2));
  useEffect(() => { setTxt(JSON.stringify(value ?? [], null, 2)); /* eslint-disable-next-line */ }, [field.k]);
  return (
    <div>
      <Label>{field.label}</Label>
      <Textarea
        value={txt}
        rows={Math.min(20, Math.max(5, txt.split("\n").length))}
        style={{ fontFamily: "monospace", fontSize: 13 }}
        onChange={(e) => {
          setTxt(e.target.value);
          try { onChange(JSON.parse(e.target.value)); } catch {}
        }}
      />
      <div style={{ fontSize: 12, color: "var(--texto-suave)", marginTop: 4 }}>JSON estruturado</div>
    </div>
  );
}

function ImagePicker({ value, onChange }: { value?: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  async function onFile(file: File) {
    setUploading(true);
    try {
      const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      const { error: upErr } = await supabase.storage.from("binca").upload(path, file, { upsert: true });
      if (upErr) throw upErr;
      const { data, error: sErr } = await supabase.storage
        .from("binca")
        .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
      if (sErr) throw sErr;
      onChange(data.signedUrl);
      toast.success("Imagem enviada!");
    } catch (e: any) {
      toast.error(e.message ?? "Erro no upload");
    } finally {
      setUploading(false);
    }
  }
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {value && (
        <img src={value} alt="" style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 12, border: "1px solid #eee" }} />
      )}
      <Input value={value ?? ""} onChange={(e) => onChange(e.target.value)} placeholder="URL ou faça upload" />
      <label>
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
        />
        <Button asChild variant="outline" disabled={uploading}>
          <span><Upload size={16} /> {uploading ? "…" : "Upload"}</span>
        </Button>
      </label>
    </div>
  );
}

/* ---------------- ACTIVITIES ---------------- */

function ActivitiesEditor() {
  const [items, setItems] = useState<any[]>([]);
  const load = () =>
    supabase.from("activities").select("*").order("sort_order").then(({ data }) => setItems(data ?? []));
  useEffect(() => { load(); }, []);

  async function add() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    const { error } = await supabase.from("activities").insert({
      emoji: "✨", title: "Nova oficina", description: "Descrição da oficina", age_range: "0 – 6 anos", sort_order: sort,
    });
    if (error) return toast.error(error.message);
    load();
  }
  async function save(it: any) {
    const { error } = await supabase.from("activities").update({
      emoji: it.emoji, title: it.title, description: it.description, age_range: it.age_range,
      image_url: it.image_url, sort_order: it.sort_order,
    }).eq("id", it.id);
    if (error) return toast.error(error.message);
    toast.success("Salvo");
  }
  async function remove(id: string) {
    if (!confirm("Excluir esta atividade?")) return;
    await supabase.from("activities").delete().eq("id", id);
    load();
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir; if (j < 0 || j >= items.length) return;
    const a = items[i], b = items[j];
    const sa = a.sort_order, sb = b.sort_order;
    supabase.from("activities").update({ sort_order: sb }).eq("id", a.id).then(() => {
      supabase.from("activities").update({ sort_order: sa }).eq("id", b.id).then(load);
    });
  }

  return (
    <Card style={{ padding: 24, borderRadius: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}>Oficinas</h2>
        <Button onClick={add}><Plus size={16} /> Nova oficina</Button>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {items.map((it, i) => (
          <div key={it.id} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 12 }}>
              <div>
                <Label>Emoji</Label>
                <Input value={it.emoji ?? ""} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, emoji:e.target.value} : x))} />
              </div>
              <div>
                <Label>Título</Label>
                <Input value={it.title} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, title:e.target.value} : x))} />
              </div>
              <div>
                <Label>Faixa etária</Label>
                <Input value={it.age_range ?? ""} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, age_range:e.target.value} : x))} />
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <Label>Descrição</Label>
              <Textarea rows={2} value={it.description} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, description:e.target.value} : x))} />
            </div>
            <div style={{ marginTop: 10 }}>
              <Label>Imagem</Label>
              <ImagePicker value={it.image_url ?? ""} onChange={(v) => setItems(items.map(x => x.id===it.id ? {...x, image_url:v} : x))} />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 14, justifyContent: "flex-end" }}>
              <Button variant="outline" onClick={() => move(i, -1)}><ArrowUp size={14} /></Button>
              <Button variant="outline" onClick={() => move(i, 1)}><ArrowDown size={14} /></Button>
              <Button variant="destructive" onClick={() => remove(it.id)}><Trash2 size={14} /></Button>
              <Button onClick={() => save(it)}>Salvar</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function EventsEditor() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true })
      .order("sort_order", { ascending: true });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    setItems(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function add() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    const { error } = await supabase.from("events").insert({
      name: "Nova oficina",
      description: "Descrição do evento",
      date: "",
      time: "",
      location: "",
      price: 0,
      spots_available: 0,
      image_url: "",
      active: true,
      sort_order: sort,
    });

    if (error) return toast.error(error.message);
    load();
  }

  async function save(item: any) {
    const { error } = await supabase.from("events").update({
      name: item.name,
      description: item.description,
      date: item.date,
      time: item.time,
      location: item.location,
      price: item.price,
      spots_available: item.spots_available,
      image_url: item.image_url,
      active: item.active,
      sort_order: item.sort_order,
    }).eq("id", item.id);

    if (error) return toast.error(error.message);
    toast.success("Evento salvo");
    load();
  }

  async function remove(id: string) {
    if (!confirm("Excluir este evento?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Evento excluído");
    load();
  }

  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const a = items[i];
    const b = items[j];
    supabase.from("events").update({ sort_order: b.sort_order }).eq("id", a.id).then(() => {
      supabase.from("events").update({ sort_order: a.sort_order }).eq("id", b.id).then(load);
    });
  }

  return (
    <Card style={{ padding: 24, borderRadius: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}>Eventos</h2>
          <p style={{ color: "var(--texto-suave)", marginTop: 4, fontSize: 13 }}>
            Liste, edite e ative/desative os eventos que aparecem no site.
          </p>
        </div>
        <Button onClick={add}><Plus size={16} /> Novo evento</Button>
      </div>

      {loading ? (
        <div style={{ padding: 20 }}>Carregando…</div>
      ) : items.length === 0 ? (
        <div style={{ padding: 20, color: "var(--texto-suave)" }}>
          Nenhum evento cadastrado ainda.
        </div>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {items.map((it, i) => (
            <div key={it.id} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                <div>
                  <Label>Nome</Label>
                  <Input value={it.name ?? ""} onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, name: e.target.value } : x))} />
                </div>
                <div>
                  <Label>Data</Label>
                  <Input type="date" value={it.date ?? ""} onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, date: e.target.value } : x))} />
                </div>
                <div>
                  <Label>Horário</Label>
                  <Input type="text" value={it.time ?? ""} placeholder="10:00" onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, time: e.target.value } : x))} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
                <div>
                  <Label>Local</Label>
                  <Input value={it.location ?? ""} onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, location: e.target.value } : x))} />
                </div>
                <div>
                  <Label>Preço</Label>
                  <Input type="number" min="0" step="0.01" value={it.price ?? ""} onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, price: Number(e.target.value) } : x))} />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
                <div>
                  <Label>Vagas</Label>
                  <Input type="number" min="0" value={it.spots_available ?? ""} onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, spots_available: Number(e.target.value) } : x))} />
                </div>
                <div>
                  <Label>Status</Label>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                    <input
                      id={`event-active-${it.id}`}
                      type="checkbox"
                      checked={!!it.active}
                      onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, active: e.target.checked } : x))}
                    />
                    <label htmlFor={`event-active-${it.id}`} style={{ cursor: "pointer" }}>
                      {it.active ? "Ativo" : "Inativo"}
                    </label>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <Label>Imagem</Label>
                <ImagePicker value={it.image_url ?? ""} onChange={(v) => setItems(items.map(x => x.id === it.id ? { ...x, image_url: v } : x))} />
              </div>

              <div style={{ marginTop: 12 }}>
                <Label>Descrição</Label>
                <Textarea rows={3} value={it.description ?? ""} onChange={(e) => setItems(items.map(x => x.id === it.id ? { ...x, description: e.target.value } : x))} />
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 14, justifyContent: "flex-end" }}>
                <Button variant="destructive" onClick={() => remove(it.id)}><Trash2 size={14} /></Button>
                <Button variant="outline" onClick={() => move(i, -1)}><ArrowUp size={14} /></Button>
                <Button variant="outline" onClick={() => move(i, 1)}><ArrowDown size={14} /></Button>
                <Button onClick={() => save(it)}>Salvar</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

/* ---------------- GALLERY ---------------- */

function GalleryEditor() {
  const [items, setItems] = useState<any[]>([]);
  const load = () => supabase.from("gallery").select("*").order("sort_order").then(({ data }) => setItems(data ?? []));
  useEffect(() => { load(); }, []);

  async function addEmpty() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    await supabase.from("gallery").insert({ image_url: "", caption: "", sort_order: sort });
    load();
  }
  async function save(it: any) {
    const { error } = await supabase.from("gallery").update({ image_url: it.image_url, caption: it.caption, sort_order: it.sort_order }).eq("id", it.id);
    if (error) return toast.error(error.message);
    toast.success("Salvo");
  }
  async function remove(id: string) {
    if (!confirm("Excluir esta foto?")) return;
    await supabase.from("gallery").delete().eq("id", id);
    load();
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir; if (j < 0 || j >= items.length) return;
    const a = items[i], b = items[j];
    supabase.from("gallery").update({ sort_order: b.sort_order }).eq("id", a.id).then(() =>
      supabase.from("gallery").update({ sort_order: a.sort_order }).eq("id", b.id).then(load));
  }

  return (
    <Card style={{ padding: 24, borderRadius: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}>Galeria</h2>
        <Button onClick={addEmpty}><Plus size={16} /> Adicionar foto</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
        {items.map((it, i) => (
          <div key={it.id} style={{ border: "1px solid #eee", borderRadius: 16, padding: 12 }}>
            {it.image_url && <img src={it.image_url} alt="" style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12, marginBottom: 10 }} />}
            <ImagePicker value={it.image_url} onChange={(v) => setItems(items.map(x => x.id===it.id ? {...x, image_url:v} : x))} />
            <Input style={{ marginTop: 8 }} placeholder="Legenda" value={it.caption ?? ""} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, caption:e.target.value} : x))} />
            <div style={{ display: "flex", gap: 6, marginTop: 10, justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <Button size="sm" variant="outline" onClick={() => move(i, -1)}><ArrowUp size={12} /></Button>
                <Button size="sm" variant="outline" onClick={() => move(i, 1)}><ArrowDown size={12} /></Button>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <Button size="sm" variant="destructive" onClick={() => remove(it.id)}><Trash2 size={12} /></Button>
                <Button size="sm" onClick={() => save(it)}>Salvar</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

function TestimonialsEditor() {
  const [items, setItems] = useState<any[]>([]);
  const load = () => supabase.from("testimonials").select("*").order("sort_order").then(({ data }) => setItems(data ?? []));
  useEffect(() => { load(); }, []);

  async function add() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    await supabase.from("testimonials").insert({
      text: "Texto do depoimento", name: "Nome", role: "Mãe da Ana, 2 anos", initials: "NA", stars: 5, sort_order: sort,
    });
    load();
  }
  async function save(it: any) {
    const { error } = await supabase.from("testimonials").update({
      text: it.text, name: it.name, role: it.role, initials: it.initials, stars: it.stars, sort_order: it.sort_order,
    }).eq("id", it.id);
    if (error) return toast.error(error.message);
    toast.success("Salvo");
  }
  async function remove(id: string) {
    if (!confirm("Excluir depoimento?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    load();
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir; if (j < 0 || j >= items.length) return;
    const a = items[i], b = items[j];
    supabase.from("testimonials").update({ sort_order: b.sort_order }).eq("id", a.id).then(() =>
      supabase.from("testimonials").update({ sort_order: a.sort_order }).eq("id", b.id).then(load));
  }

  return (
    <Card style={{ padding: 24, borderRadius: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}>Depoimentos</h2>
        <Button onClick={add}><Plus size={16} /> Novo depoimento</Button>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {items.map((it, i) => (
          <div key={it.id} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
            <Label>Texto</Label>
            <Textarea rows={3} value={it.text} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, text:e.target.value} : x))} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 100px 80px", gap: 10, marginTop: 10 }}>
              <div><Label>Nome</Label><Input value={it.name} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, name:e.target.value} : x))} /></div>
              <div><Label>Identificação</Label><Input value={it.role ?? ""} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, role:e.target.value} : x))} /></div>
              <div><Label>Iniciais</Label><Input value={it.initials ?? ""} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, initials:e.target.value} : x))} /></div>
              <div><Label>Estrelas</Label><Input type="number" min={1} max={5} value={it.stars} onChange={(e) => setItems(items.map(x => x.id===it.id ? {...x, stars:Number(e.target.value)} : x))} /></div>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "flex-end" }}>
              <Button variant="outline" onClick={() => move(i, -1)}><ArrowUp size={14} /></Button>
              <Button variant="outline" onClick={() => move(i, 1)}><ArrowDown size={14} /></Button>
              <Button variant="destructive" onClick={() => remove(it.id)}><Trash2 size={14} /></Button>
              <Button onClick={() => save(it)}>Salvar</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------- SPONSORS ---------------- */

function SponsorsEditor() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("site_content")
      .select("value")
      .eq("key", "sponsors")
      .maybeSingle()
      .then(({ data }) => {
        const v = data?.value as any;
        setItems(Array.isArray(v) ? v : []);
        setLoading(false);
      });
  }, []);

  async function save(next: any[]) {
    setItems(next);
    const { error } = await supabase.from("site_content").upsert({ key: "sponsors", value: next });
    if (error) toast.error(error.message);
  }

  function add() {
    save([...items, { name: "Novo apoiador", logo: "", link: "" }]);
  }
  function update(i: number, patch: any) {
    save(items.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  }
  function remove(i: number) {
    if (!confirm("Remover este apoiador?")) return;
    save(items.filter((_, idx) => idx !== i));
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    save(next);
  }

  if (loading) return <div style={{ padding: 20 }}>Carregando…</div>;

  return (
    <Card style={{ padding: 24, borderRadius: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}>Apoiadores do projeto</h2>
        <Button onClick={add}><Plus size={16} /> Novo apoiador</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
        {items.map((it, i) => (
          <div key={i} style={{ border: "1px solid #eee", borderRadius: 16, padding: 12 }}>
            {it.logo && <img src={it.logo} alt="" style={{ width: "100%", height: 120, objectFit: "contain", borderRadius: 12, marginBottom: 10, background: "#fafafa" }} />}
            <Label>Logo</Label>
            <ImagePicker value={it.logo ?? ""} onChange={(v) => update(i, { logo: v })} />
            <Label style={{ marginTop: 8 }}>Nome</Label>
            <Input value={it.name ?? ""} onChange={(e) => update(i, { name: e.target.value })} />
            <Label style={{ marginTop: 8 }}>Link (opcional)</Label>
            <Input value={it.link ?? ""} onChange={(e) => update(i, { link: e.target.value })} placeholder="https://..." />
            <div style={{ display: "flex", gap: 6, marginTop: 10, justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <Button size="sm" variant="outline" onClick={() => move(i, -1)}><ArrowUp size={12} /></Button>
                <Button size="sm" variant="outline" onClick={() => move(i, 1)}><ArrowDown size={12} /></Button>
              </div>
              <Button size="sm" variant="destructive" onClick={() => remove(i)}><Trash2 size={12} /></Button>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div style={{ gridColumn: "1/-1", color: "var(--texto-suave)", textAlign: "center", padding: 20 }}>
            Nenhum apoiador ainda. Clique em "Novo apoiador" para começar.
          </div>
        )}
      </div>
    </Card>
  );
}

/* ---------------- BANNERS ---------------- */

function BannersEditor() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("site_content")
      .select("value")
      .eq("key", "banners")
      .maybeSingle()
      .then(({ data }) => {
        const v = data?.value as any;
        setItems(Array.isArray(v) ? v : []);
        setLoading(false);
      });
  }, []);

  async function save(next: any[]) {
    setItems(next);
    const { error } = await supabase.from("site_content").upsert({ key: "banners", value: next });
    if (error) toast.error(error.message);
    else toast.success("Banners salvos");
  }

  function add() {
    save([...items, { image: "", title: "", subtitle: "", link: "" }]);
  }
  function update(i: number, patch: any) {
    setItems(items.map((x, idx) => (idx === i ? { ...x, ...patch } : x)));
  }
  function commit() {
    save([...items]);
  }
  function remove(i: number) {
    if (!confirm("Remover este banner?")) return;
    save(items.filter((_, idx) => idx !== i));
  }
  function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    save(next);
  }

  if (loading) return <div style={{ padding: 20 }}>Carregando banners…</div>;

  return (
    <Card style={{ padding: 24, borderRadius: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}>Próximo evento</h2>
          <p style={{ color: "var(--texto-suave)", fontSize: 13, marginTop: 4 }}>
            Adicione um ou mais banners. Eles aparecem na seção "Próximo evento" do site.
          </p>
        </div>
        <Button onClick={add}><Plus size={16} /> Novo banner</Button>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {items.map((it, i) => (
          <div key={i} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
            <Label>Imagem do banner</Label>
            <ImagePicker value={it.image ?? ""} onChange={(v) => save(items.map((x, idx) => idx === i ? { ...x, image: v } : x))} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
              <div>
                <Label>Título (opcional)</Label>
                <Input value={it.title ?? ""} onChange={(e) => update(i, { title: e.target.value })} onBlur={commit} />
              </div>
              <div>
                <Label>Link (opcional)</Label>
                <Input value={it.link ?? ""} onChange={(e) => update(i, { link: e.target.value })} onBlur={commit} placeholder="https://..." />
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <Label>Legenda (opcional)</Label>
              <Textarea rows={2} value={it.subtitle ?? ""} onChange={(e) => update(i, { subtitle: e.target.value })} onBlur={commit} />
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <Button size="sm" variant="outline" onClick={() => move(i, -1)}><ArrowUp size={14} /></Button>
                <Button size="sm" variant="outline" onClick={() => move(i, 1)}><ArrowDown size={14} /></Button>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                <Button size="sm" onClick={commit}>Salvar</Button>
                <Button size="sm" variant="destructive" onClick={() => remove(i)}><Trash2 size={14} /></Button>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div style={{ color: "var(--texto-suave)", textAlign: "center", padding: 20 }}>
            Nenhum banner ainda. Clique em "Novo banner" para adicionar.
          </div>
        )}
      </div>
    </Card>
  );
}

/* ---------------- NEXT WORKSHOP ---------------- */

/* ---------------- RESERVATIONS ---------------- */

const STATUS_LABELS: Record<string, string> = {
  awaiting_contact: "Aguardando contato",
  awaiting_payment: "Aguardando pagamento",
  confirmed: "Confirmada",
  cancelled: "Cancelada",
};
const PAYMENT_LABELS: Record<string, string> = {
  pending: "Pendente",
  approved: "Aprovado",
  refused: "Recusado",
  refunded: "Estornado",
};
const STATUS_COLORS: Record<string, string> = {
  awaiting_contact: "#E8A020",
  awaiting_payment: "#4A9BAE",
  confirmed: "#7A9A52",
  cancelled: "#999",
};

function ReservationsEditor() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any | null>(null);
  const [contato, setContato] = useState<any>({});

  async function load() {
    setLoading(true);
    const { data } = await supabase.from("reservations").select("*").order("created_at", { ascending: false });
    setItems(data ?? []);
    setLoading(false);
  }
  useEffect(() => {
    load();
    supabase.from("site_content").select("key,value").eq("key", "contato").maybeSingle().then(({ data }) => {
      setContato((data?.value as any) ?? {});
    });
  }, []);

  async function updateStatus(id: string, patch: any) {
    const { error } = await supabase.from("reservations").update(patch).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Reserva atualizada");
    load();
    if (selected?.id === id) setSelected({ ...selected, ...patch });
  }
  async function remove(id: string) {
    if (!confirm("Excluir esta reserva permanentemente?")) return;
    const { error } = await supabase.from("reservations").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Reserva excluída");
    load();
    if (selected?.id === id) setSelected(null);
  }

  function sendWhatsApp(r: any) {
    const num = (r.whatsapp ?? "").replace(/\D/g, "");
    if (!num) return toast.error("Reserva sem WhatsApp");
    const phone = num.length <= 11 ? "55" + num : num;
    const childrenNames = Array.isArray(r.children) ? r.children.map((c: any) => `${c.name} (${c.age})`).join(", ") : "";
    const lines = [
      `Olá, ${r.responsible_name}! ✨`,
      "",
      `Sua reserva na Bincá foi *confirmada*!`,
      childrenNames ? `Crianças: ${childrenNames}` : "",
      r.workshop_name ? `Oficina: ${r.workshop_name}` : "",
      "",
      "",
      "",
      "",
      r.amount ? `Valor: R$ ${Number(r.amount).toFixed(2).replace(".", ",")} — pagamento aprovado ✅` : "",
      "",
      "Vaga garantida 💚 Te esperamos!",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines)}`, "_blank");
  }

  if (loading) return <div style={{ padding: 20 }}>Carregando reservas…</div>;

  return (
    <Card style={{ padding: 24, borderRadius: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}>Reservas</h2>
          <p style={{ color: "var(--texto-suave)", fontSize: 13, marginTop: 4 }}>
            {items.length} reserva{items.length !== 1 ? "s" : ""} no total.
          </p>
        </div>
        <Button variant="outline" onClick={load}>Atualizar</Button>
      </div>

      {items.length === 0 ? (
        <div style={{ padding: 40, textAlign: "center", color: "var(--texto-suave)" }}>
          Nenhuma reserva ainda.
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "var(--creme2)", textAlign: "left" }}>
                <th style={{ padding: "10px 12px" }}>Responsável</th>
                <th style={{ padding: "10px 12px" }}>WhatsApp</th>
                <th style={{ padding: "10px 12px" }}>Crianças</th>
                <th style={{ padding: "10px 12px" }}>Oficina</th>
                <th style={{ padding: "10px 12px" }}>Valor</th>
                <th style={{ padding: "10px 12px" }}>Pagamento</th>
                <th style={{ padding: "10px 12px" }}>Reserva</th>
                <th style={{ padding: "10px 12px" }}>Data</th>
                <th style={{ padding: "10px 12px" }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((r) => (
                <tr key={r.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700 }}>{r.responsible_name}</td>
                  <td style={{ padding: "10px 12px" }}>{r.whatsapp}</td>
                  <td style={{ padding: "10px 12px" }}>{r.children_count}</td>
                  <td style={{ padding: "10px 12px" }}>{r.workshop_name ?? "—"}</td>
                  <td style={{ padding: "10px 12px" }}>{r.amount ? `R$ ${Number(r.amount).toFixed(2).replace(".", ",")}` : "—"}</td>
                  <td style={{ padding: "10px 12px" }}>{PAYMENT_LABELS[r.payment_status] ?? r.payment_status}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{
                      background: STATUS_COLORS[r.reservation_status] ?? "#999",
                      color: "#fff", padding: "3px 10px", borderRadius: 50, fontSize: 12, fontWeight: 700,
                    }}>
                      {STATUS_LABELS[r.reservation_status] ?? r.reservation_status}
                    </span>
                  </td>
                  <td style={{ padding: "10px 12px", color: "var(--texto-suave)", fontSize: 12 }}>
                    {new Date(r.created_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td style={{ padding: "10px 12px", whiteSpace: "nowrap" }}>
                    <Button size="sm" variant="outline" onClick={() => setSelected(r)}>Ver</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", borderRadius: 20, padding: 28, maxWidth: 600, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, marginBottom: 4 }}>
              {selected.responsible_name}
            </h3>
            <p style={{ color: "var(--texto-suave)", fontSize: 13, marginBottom: 18 }}>
              Reserva #{selected.id.slice(0, 8).toUpperCase()} • {new Date(selected.created_at).toLocaleString("pt-BR")}
            </p>
            <div style={{ display: "grid", gap: 8, marginBottom: 18 }}>
              <div><strong>WhatsApp:</strong> {selected.whatsapp}</div>
              {selected.email && <div><strong>E-mail:</strong> {selected.email}</div>}
              <div><strong>Oficina:</strong> {selected.workshop_name ?? "—"}</div>
              <div><strong>Valor:</strong> {selected.amount ? `R$ ${Number(selected.amount).toFixed(2).replace(".", ",")}` : "—"}</div>
              <div>
                <strong>Crianças ({selected.children_count}):</strong>
                <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                  {(selected.children ?? []).map((c: any, i: number) => (
                    <li key={i}>{c.name} {c.age ? `— ${c.age}` : ""}</li>
                  ))}
                </ul>
              </div>
              {selected.notes && <div><strong>Observações:</strong> {selected.notes}</div>}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
              <div>
                <Label>Status do pagamento</Label>
                <select
                  value={selected.payment_status}
                  onChange={(e) => updateStatus(selected.id, { payment_status: e.target.value })}
                  style={{ width: "100%", padding: "10px", borderRadius: 8, border: "1px solid #ddd" }}
                >
                  {Object.entries(PAYMENT_LABELS).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
                </select>
              </div>
              <div>
                <Label>Status da reserva</Label>
                <select
                  value={selected.reservation_status}
                  onChange={(e) => updateStatus(selected.id, { reservation_status: e.target.value })}
                  style={{ width: "100%", padding: "10px", borderRadius: 8, border: "1px solid #ddd" }}
                >
                  {Object.entries(STATUS_LABELS).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
                </select>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Button onClick={() => updateStatus(selected.id, { payment_status: "approved", reservation_status: "confirmed" })}>
                  Confirmar reserva
                </Button>
                <Button variant="outline" onClick={() => updateStatus(selected.id, { reservation_status: "cancelled" })}>
                  Cancelar
                </Button>
                <Button style={{ background: "#25D366", color: "#fff" }} onClick={() => sendWhatsApp(selected)}>
                  Enviar pelo WhatsApp
                </Button>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Button variant="destructive" onClick={() => remove(selected.id)}><Trash2 size={14} /> Excluir</Button>
                <Button variant="ghost" onClick={() => setSelected(null)}>Fechar</Button>
              </div>
            </div>

            <p style={{ marginTop: 16, fontSize: 12, color: "var(--texto-suave)", padding: 10, background: "var(--creme2)", borderRadius: 8 }}>
              💡 Integração PIX via Efí Bank pode ser ativada quando você fornecer o certificado .p12 e as credenciais (Client ID/Secret). Por enquanto, o pagamento é marcado manualmente.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
