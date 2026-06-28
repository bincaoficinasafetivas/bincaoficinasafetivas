import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { s as supabase } from "./client-IcRWeenY.mjs";
import { c as createSsrRpc } from "./router-BKQVwq8W.mjs";
import { c as createServerFn } from "./index.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/seroval.mjs";
import { L as LogOut, T as Trash2, P as Plus, A as ArrowUp, a as ArrowDown, U as Upload } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const loginSchema = objectType({
  username: stringType().min(1).max(100),
  password: stringType().min(1).max(200)
});
const adminLogin = createServerFn({
  method: "POST"
}).inputValidator((data) => loginSchema.parse(data)).handler(createSsrRpc("89f029f4fc21ed092423cd54f44fb61078423691288a3a89663a6e0973cd86ea"));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
function AdminPage() {
  const navigate = useNavigate();
  const [user, setUser] = reactExports.useState(null);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [checking, setChecking] = reactExports.useState(true);
  async function refresh() {
    try {
      const {
        data
      } = await supabase.auth.getUser();
      const u = data.user;
      setUser(u);
      if (u) {
        const {
          data: roleRow
        } = await supabase.from("user_roles").select("id").eq("user_id", u.id).eq("role", "admin").maybeSingle();
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
  reactExports.useEffect(() => {
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
    } catch {
    }
    setUser(null);
    setIsAdmin(false);
    navigate({
      to: "/"
    });
  }
  if (checking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      padding: 40,
      fontFamily: "var(--font-body)"
    }, children: "Carregando…" });
  }
  if (!user || !isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoginForm, { onSuccess: refresh });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, { onLogout: handleLogout });
}
function LoginForm({
  onSuccess
}) {
  const ensure = useServerFn(adminLogin);
  const [username, setUsername] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        email,
        password: pwd
      } = await ensure({
        data: {
          username,
          password
        }
      });
      const {
        error
      } = await supabase.auth.signInWithPassword({
        email,
        password: pwd
      });
      if (error) throw error;
      toast.success("Bem-vindo!");
      onSuccess();
    } catch (e2) {
      toast.error(e2.message ?? "Falha ao entrar");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "var(--creme2)",
    padding: 24
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    width: "100%",
    maxWidth: 420,
    padding: 32,
    borderRadius: 24
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 28,
      color: "var(--coral)",
      marginBottom: 4
    }, children: "Bincá Admin" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      color: "var(--texto-suave)",
      marginBottom: 24,
      fontSize: 14
    }, children: "Acesse o painel para editar o site." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Usuário" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: username, onChange: (e) => setUsername(e.target.value), autoFocus: true, required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Senha" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: loading, className: "btn-primary", style: {
        marginTop: 8
      }, children: loading ? "Entrando…" : "Entrar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        justifyContent: "center",
        marginTop: 8
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: "Voltar ao site" }) }) })
    ] })
  ] }) });
}
function AdminDashboard({
  onLogout
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    minHeight: "100vh",
    background: "var(--creme2)",
    paddingBottom: 60
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 32px",
      background: "#fff",
      borderBottom: "1px solid rgba(0,0,0,.06)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 800,
        color: "var(--coral)"
      }, children: "Painel Bincá" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", target: "_blank", rel: "noopener", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Ver site" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: onLogout, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { size: 16 }),
          " Sair"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { style: {
      maxWidth: 1100,
      margin: "32px auto",
      padding: "0 24px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "reservas", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { style: {
        flexWrap: "wrap",
        height: "auto"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "reservas", children: "📋 Reservas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "site", children: "Site / SEO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "hero", children: "Hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "sobre", children: "Sobre" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "atividades", children: "Atividades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "eventos", children: "Eventos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "como", children: "Como Funciona" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "galeria", children: "Galeria" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "depoimentos", children: "Depoimentos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "contato", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "faq", children: "FAQ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "cta_final", children: "CTA Final" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "evento", children: "Próximo evento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "apoiadores", children: "Apoiadores" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "footer", children: "Rodapé" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reservas", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReservationsEditor, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "site", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "site", fields: [{
        k: "name",
        label: "Nome do site"
      }, {
        k: "title",
        label: "Título SEO"
      }, {
        k: "description",
        label: "Descrição SEO",
        textarea: true
      }, {
        k: "logo",
        label: "Logo (URL)",
        image: true
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "hero", fields: [{
        k: "tag",
        label: "Tag"
      }, {
        k: "title_a",
        label: "Título — início"
      }, {
        k: "title_em",
        label: "Título — destaque"
      }, {
        k: "title_b",
        label: "Título — final"
      }, {
        k: "subtitle",
        label: "Subtítulo",
        textarea: true
      }, {
        k: "cta_primary",
        label: "Botão principal — texto"
      }, {
        k: "cta_primary_link",
        label: "Botão principal — link"
      }, {
        k: "cta_secondary",
        label: "Botão secundário — texto"
      }, {
        k: "cta_secondary_link",
        label: "Botão secundário — link"
      }, {
        k: "badge",
        label: "Badge (ex: Oficinas ao vivo!)"
      }, {
        k: "img_main",
        label: "Imagem principal",
        image: true
      }, {
        k: "img_a",
        label: "Imagem secundária A",
        image: true
      }, {
        k: "img_b",
        label: "Imagem secundária B",
        image: true
      }, {
        k: "img_c",
        label: "Imagem 4 do Hero",
        image: true
      }, {
        k: "stats",
        label: "Estatísticas",
        json: true
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "sobre", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "sobre", fields: [{
        k: "tag",
        label: "Tag"
      }, {
        k: "title_a",
        label: "Título — início"
      }, {
        k: "title_em",
        label: "Título — destaque"
      }, {
        k: "title_b",
        label: "Título — final"
      }, {
        k: "text",
        label: "Texto",
        textarea: true
      }, {
        k: "cta",
        label: "Botão — texto"
      }, {
        k: "cta_link",
        label: "Botão — link"
      }, {
        k: "img_main",
        label: "Imagem principal",
        image: true
      }, {
        k: "img_a",
        label: "Imagem A",
        image: true
      }, {
        k: "img_b",
        label: "Imagem B",
        image: true
      }, {
        k: "img_c",
        label: "Imagem 4 do Sobre",
        image: true
      }, {
        k: "bullets",
        label: "Lista de benefícios",
        json: true
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "atividades", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "atividades_header", fields: [{
          k: "tag",
          label: "Tag"
        }, {
          k: "title_a",
          label: "Título — início"
        }, {
          k: "title_em",
          label: "Título — destaque"
        }, {
          k: "title_b",
          label: "Título — final"
        }, {
          k: "subtitle",
          label: "Subtítulo",
          textarea: true
        }] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: 32
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActivitiesEditor, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "eventos", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EventsEditor, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "como", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "como", fields: [{
        k: "tag",
        label: "Tag"
      }, {
        k: "title_a",
        label: "Título — início"
      }, {
        k: "title_em",
        label: "Título — destaque"
      }, {
        k: "title_b",
        label: "Título — final"
      }, {
        k: "subtitle",
        label: "Subtítulo",
        textarea: true
      }, {
        k: "steps",
        label: "Passos (lista)",
        json: true
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "galeria", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "galeria", fields: [{
          k: "tag",
          label: "Tag"
        }, {
          k: "title_a",
          label: "Título — início"
        }, {
          k: "title_em",
          label: "Título — destaque"
        }, {
          k: "title_b",
          label: "Título — final"
        }] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: 32
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryEditor, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "depoimentos", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "depoimentos_header", fields: [{
          k: "tag",
          label: "Tag"
        }, {
          k: "title_a",
          label: "Título — início"
        }, {
          k: "title_em",
          label: "Título — destaque"
        }, {
          k: "title_b",
          label: "Título — final"
        }] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: 32
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsEditor, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "contato", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "contato", fields: [{
        k: "tag",
        label: "Tag"
      }, {
        k: "title_a",
        label: "Título — início"
      }, {
        k: "title_em",
        label: "Título — destaque"
      }, {
        k: "title_b",
        label: "Título — final"
      }, {
        k: "subtitle",
        label: "Subtítulo",
        textarea: true
      }, {
        k: "whatsapp",
        label: "WhatsApp (exibido)"
      }, {
        k: "whatsapp_number",
        label: "WhatsApp (somente números c/ DDI, ex: 5548999999999)"
      }, {
        k: "email",
        label: "E-mail"
      }, {
        k: "address",
        label: "Endereço"
      }, {
        k: "instagram",
        label: "Instagram (URL)"
      }, {
        k: "instagram_handle",
        label: "Instagram (handle, ex: @binca.oficinas)"
      }, {
        k: "facebook",
        label: "Facebook (URL)"
      }, {
        k: "wa_template",
        label: "Mensagem padrão do WhatsApp",
        textarea: true
      }, {
        k: "fale_title",
        label: "Bloco contato — título (ex: Fale com a gente)"
      }, {
        k: "fale_sub",
        label: "Bloco contato — subtítulo"
      }, {
        k: "note",
        label: "Bloco contato — nota final"
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "faq", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "faq", fields: [{
        k: "items",
        label: 'Lista de perguntas (JSON, ex: [{"q":"...","a":"..."}])',
        json: true
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "cta_final", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "cta_final", fields: [{
        k: "tag",
        label: "Tag (ex: VEM VIVER O BINCÁ)"
      }, {
        k: "title_a",
        label: "Título — início"
      }, {
        k: "title_em",
        label: "Título — destaque (amarelo)"
      }, {
        k: "title_b",
        label: "Título — final"
      }, {
        k: "subtitle",
        label: "Subtítulo",
        textarea: true
      }, {
        k: "cta",
        label: "Texto do botão"
      }, {
        k: "cta_link",
        label: "Link do botão (vazio = WhatsApp)"
      }, {
        k: "wa_message",
        label: "Mensagem WhatsApp (se botão for WhatsApp)"
      }, {
        k: "bg",
        label: "Cor de fundo (ex: #D96B50)"
      }, {
        k: "benefits",
        label: 'Benefícios (JSON, ex: [{"icon":"leaf","text":"..."}]) — icons: leaf, shield, heart',
        json: true
      }] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "evento", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "event_banner", fields: [{
          k: "tag",
          label: "Tag (ex: Próximo evento)"
        }, {
          k: "title_a",
          label: "Título — início"
        }, {
          k: "title_em",
          label: "Título — destaque"
        }, {
          k: "title_b",
          label: "Título — final"
        }, {
          k: "subtitle",
          label: "Descrição curta",
          textarea: true
        }] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: 24
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BannersEditor, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "apoiadores", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "apoiadores", fields: [{
          k: "title_a",
          label: "Título — início"
        }, {
          k: "title_em",
          label: "Título — destaque"
        }, {
          k: "title_b",
          label: "Título — final"
        }, {
          k: "subtitle",
          label: "Subtítulo (opcional)",
          textarea: true
        }] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: 24
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SponsorsEditor, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContentEditor, { sectionKey: "footer", fields: [{
        k: "copy",
        label: "Texto de copyright"
      }, {
        k: "links",
        label: "Links rápidos",
        json: true
      }] }) })
    ] }) })
  ] });
}
function ContentEditor({
  sectionKey,
  fields
}) {
  const [value, setValue] = reactExports.useState(null);
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    supabase.from("site_content").select("value").eq("key", sectionKey).maybeSingle().then(({
      data
    }) => setValue(data?.value ?? {}));
  }, [sectionKey]);
  async function save() {
    setSaving(true);
    const {
      error
    } = await supabase.from("site_content").upsert({
      key: sectionKey,
      value: value ?? {}
    });
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Salvo!");
  }
  if (!value) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    padding: 20
  }, children: "Carregando…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 28,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }, children: fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FieldEditor, { field: f, value: value[f.k], onChange: (v) => setValue({
      ...value,
      [f.k]: v
    }) }, f.k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "btn-primary", style: {
      marginTop: 24
    }, onClick: save, disabled: saving, children: saving ? "Salvando…" : "Salvar alterações" })
  ] });
}
function FieldEditor({
  field,
  value,
  onChange
}) {
  if (field.json) return /* @__PURE__ */ jsxRuntimeExports.jsx(JsonField, { field, value, onChange });
  if (field.image) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: field.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePicker, { value, onChange })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: field.label }),
    field.textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: value ?? "", onChange: (e) => onChange(e.target.value), rows: 3 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: value ?? "", onChange: (e) => onChange(e.target.value) })
  ] });
}
function JsonField({
  field,
  value,
  onChange
}) {
  const [txt, setTxt] = reactExports.useState(() => JSON.stringify(value ?? [], null, 2));
  reactExports.useEffect(() => {
    setTxt(JSON.stringify(value ?? [], null, 2));
  }, [field.k]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: field.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: txt, rows: Math.min(20, Math.max(5, txt.split("\n").length)), style: {
      fontFamily: "monospace",
      fontSize: 13
    }, onChange: (e) => {
      setTxt(e.target.value);
      try {
        onChange(JSON.parse(e.target.value));
      } catch {
      }
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      fontSize: 12,
      color: "var(--texto-suave)",
      marginTop: 4
    }, children: "JSON estruturado" })
  ] });
}
function ImagePicker({
  value,
  onChange
}) {
  const [uploading, setUploading] = reactExports.useState(false);
  async function onFile(file) {
    setUploading(true);
    try {
      const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      const {
        error: upErr
      } = await supabase.storage.from("binca").upload(path, file, {
        upsert: true
      });
      if (upErr) throw upErr;
      const {
        data,
        error: sErr
      } = await supabase.storage.from("binca").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
      if (sErr) throw sErr;
      onChange(data.signedUrl);
      toast.success("Imagem enviada!");
    } catch (e) {
      toast.error(e.message ?? "Erro no upload");
    } finally {
      setUploading(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    gap: 12,
    alignItems: "center"
  }, children: [
    value && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "", style: {
      width: 80,
      height: 80,
      objectFit: "cover",
      borderRadius: 12,
      border: "1px solid #eee"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: value ?? "", onChange: (e) => onChange(e.target.value), placeholder: "URL ou faça upload" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", hidden: true, onChange: (e) => e.target.files?.[0] && onFile(e.target.files[0]) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", disabled: uploading, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 16 }),
        " ",
        uploading ? "…" : "Upload"
      ] }) })
    ] })
  ] });
}
function ActivitiesEditor() {
  const [items, setItems] = reactExports.useState([]);
  const load = () => supabase.from("activities").select("*").order("sort_order").then(({
    data
  }) => setItems(data ?? []));
  reactExports.useEffect(() => {
    load();
  }, []);
  async function add() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    const {
      error
    } = await supabase.from("activities").insert({
      emoji: "✨",
      title: "Nova oficina",
      description: "Descrição da oficina",
      age_range: "0 – 6 anos",
      sort_order: sort
    });
    if (error) return toast.error(error.message);
    load();
  }
  async function save(it) {
    const {
      error
    } = await supabase.from("activities").update({
      emoji: it.emoji,
      title: it.title,
      description: it.description,
      age_range: it.age_range,
      image_url: it.image_url,
      sort_order: it.sort_order
    }).eq("id", it.id);
    if (error) return toast.error(error.message);
    toast.success("Salvo");
  }
  async function remove(id) {
    if (!confirm("Excluir esta atividade?")) return;
    await supabase.from("activities").delete().eq("id", id);
    load();
  }
  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const a = items[i], b = items[j];
    const sa = a.sort_order, sb = b.sort_order;
    supabase.from("activities").update({
      sort_order: sb
    }).eq("id", a.id).then(() => {
      supabase.from("activities").update({
        sort_order: sa
      }).eq("id", b.id).then(load);
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 24,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 22
      }, children: "Oficinas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: add, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
        " Nova oficina"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gap: 16
    }, children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      border: "1px solid #eee",
      borderRadius: 16,
      padding: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Emoji" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.emoji ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            emoji: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Título" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.title, onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            title: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Faixa etária" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.age_range ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            age_range: e.target.value
          } : x)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 10
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Descrição" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, value: it.description, onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
          ...x,
          description: e.target.value
        } : x)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 10
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Imagem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePicker, { value: it.image_url ?? "", onChange: (v) => setItems(items.map((x) => x.id === it.id ? {
          ...x,
          image_url: v
        } : x)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 8,
        marginTop: 14,
        justifyContent: "flex-end"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => move(i, -1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => move(i, 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: () => remove(it.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => save(it), children: "Salvar" })
      ] })
    ] }, it.id)) })
  ] });
}
function EventsEditor() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  async function load() {
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("events").select("*").order("date", {
      ascending: true
    }).order("sort_order", {
      ascending: true
    });
    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }
    setItems(data ?? []);
    setLoading(false);
  }
  reactExports.useEffect(() => {
    load();
  }, []);
  async function add() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    const {
      error
    } = await supabase.from("events").insert({
      name: "Nova oficina",
      description: "Descrição do evento",
      date: "",
      time: "",
      location: "",
      price: 0,
      spots_available: 0,
      image_url: "",
      active: true,
      sort_order: sort
    });
    if (error) return toast.error(error.message);
    load();
  }
  async function save(item) {
    const {
      error
    } = await supabase.from("events").update({
      name: item.name,
      description: item.description,
      date: item.date,
      time: item.time,
      location: item.location,
      price: item.price,
      spots_available: item.spots_available,
      image_url: item.image_url,
      active: item.active,
      sort_order: item.sort_order
    }).eq("id", item.id);
    if (error) return toast.error(error.message);
    toast.success("Evento salvo");
    load();
  }
  async function remove(id) {
    if (!confirm("Excluir este evento?")) return;
    const {
      error
    } = await supabase.from("events").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Evento excluído");
    load();
  }
  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const a = items[i];
    const b = items[j];
    supabase.from("events").update({
      sort_order: b.sort_order
    }).eq("id", a.id).then(() => {
      supabase.from("events").update({
        sort_order: a.sort_order
      }).eq("id", b.id).then(load);
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 24,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 22
        }, children: "Eventos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "var(--texto-suave)",
          marginTop: 4,
          fontSize: 13
        }, children: "Liste, edite e ative/desative os eventos que aparecem no site." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: add, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
        " Novo evento"
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      padding: 20
    }, children: "Carregando…" }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      padding: 20,
      color: "var(--texto-suave)"
    }, children: "Nenhum evento cadastrado ainda." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gap: 16
    }, children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      border: "1px solid #eee",
      borderRadius: 16,
      padding: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Nome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.name ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            name: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Data" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", value: it.date ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            date: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Horário" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "text", value: it.time ?? "", placeholder: "10:00", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            time: e.target.value
          } : x)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginTop: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Local" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.location ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            location: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Preço" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "0", step: "0.01", value: it.price ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            price: Number(e.target.value)
          } : x)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginTop: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Vagas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: "0", value: it.spots_available ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            spots_available: Number(e.target.value)
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 8
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: `event-active-${it.id}`, type: "checkbox", checked: !!it.active, onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
              ...x,
              active: e.target.checked
            } : x)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: `event-active-${it.id}`, style: {
              cursor: "pointer"
            }, children: it.active ? "Ativo" : "Inativo" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Imagem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePicker, { value: it.image_url ?? "", onChange: (v) => setItems(items.map((x) => x.id === it.id ? {
          ...x,
          image_url: v
        } : x)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        marginTop: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Descrição" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, value: it.description ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
          ...x,
          description: e.target.value
        } : x)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 8,
        marginTop: 14,
        justifyContent: "flex-end"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: () => remove(it.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => move(i, -1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => move(i, 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => save(it), children: "Salvar" })
      ] })
    ] }, it.id)) })
  ] });
}
function GalleryEditor() {
  const [items, setItems] = reactExports.useState([]);
  const load = () => supabase.from("gallery").select("*").order("sort_order").then(({
    data
  }) => setItems(data ?? []));
  reactExports.useEffect(() => {
    load();
  }, []);
  async function addEmpty() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    await supabase.from("gallery").insert({
      image_url: "",
      caption: "",
      sort_order: sort
    });
    load();
  }
  async function save(it) {
    const {
      error
    } = await supabase.from("gallery").update({
      image_url: it.image_url,
      caption: it.caption,
      sort_order: it.sort_order
    }).eq("id", it.id);
    if (error) return toast.error(error.message);
    toast.success("Salvo");
  }
  async function remove(id) {
    if (!confirm("Excluir esta foto?")) return;
    await supabase.from("gallery").delete().eq("id", id);
    load();
  }
  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const a = items[i], b = items[j];
    supabase.from("gallery").update({
      sort_order: b.sort_order
    }).eq("id", a.id).then(() => supabase.from("gallery").update({
      sort_order: a.sort_order
    }).eq("id", b.id).then(load));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 24,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 22
      }, children: "Galeria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: addEmpty, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
        " Adicionar foto"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: 14
    }, children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      border: "1px solid #eee",
      borderRadius: 16,
      padding: 12
    }, children: [
      it.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.image_url, alt: "", style: {
        width: "100%",
        height: 160,
        objectFit: "cover",
        borderRadius: 12,
        marginBottom: 10
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePicker, { value: it.image_url, onChange: (v) => setItems(items.map((x) => x.id === it.id ? {
        ...x,
        image_url: v
      } : x)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { style: {
        marginTop: 8
      }, placeholder: "Legenda", value: it.caption ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
        ...x,
        caption: e.target.value
      } : x)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 6,
        marginTop: 10,
        justifyContent: "space-between"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => move(i, -1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 12 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => move(i, 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 12 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "destructive", onClick: () => remove(it.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => save(it), children: "Salvar" })
        ] })
      ] })
    ] }, it.id)) })
  ] });
}
function TestimonialsEditor() {
  const [items, setItems] = reactExports.useState([]);
  const load = () => supabase.from("testimonials").select("*").order("sort_order").then(({
    data
  }) => setItems(data ?? []));
  reactExports.useEffect(() => {
    load();
  }, []);
  async function add() {
    const sort = (items[items.length - 1]?.sort_order ?? 0) + 1;
    await supabase.from("testimonials").insert({
      text: "Texto do depoimento",
      name: "Nome",
      role: "Mãe da Ana, 2 anos",
      initials: "NA",
      stars: 5,
      sort_order: sort
    });
    load();
  }
  async function save(it) {
    const {
      error
    } = await supabase.from("testimonials").update({
      text: it.text,
      name: it.name,
      role: it.role,
      initials: it.initials,
      stars: it.stars,
      sort_order: it.sort_order
    }).eq("id", it.id);
    if (error) return toast.error(error.message);
    toast.success("Salvo");
  }
  async function remove(id) {
    if (!confirm("Excluir depoimento?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    load();
  }
  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const a = items[i], b = items[j];
    supabase.from("testimonials").update({
      sort_order: b.sort_order
    }).eq("id", a.id).then(() => supabase.from("testimonials").update({
      sort_order: a.sort_order
    }).eq("id", b.id).then(load));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 24,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 22
      }, children: "Depoimentos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: add, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
        " Novo depoimento"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gap: 16
    }, children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      border: "1px solid #eee",
      borderRadius: 16,
      padding: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Texto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, value: it.text, onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
        ...x,
        text: e.target.value
      } : x)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 100px 80px",
        gap: 10,
        marginTop: 10
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Nome" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.name, onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            name: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Identificação" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.role ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            role: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Iniciais" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.initials ?? "", onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            initials: e.target.value
          } : x)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Estrelas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, max: 5, value: it.stars, onChange: (e) => setItems(items.map((x) => x.id === it.id ? {
            ...x,
            stars: Number(e.target.value)
          } : x)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 8,
        marginTop: 12,
        justifyContent: "flex-end"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => move(i, -1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => move(i, 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "destructive", onClick: () => remove(it.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => save(it), children: "Salvar" })
      ] })
    ] }, it.id)) })
  ] });
}
function SponsorsEditor() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.from("site_content").select("value").eq("key", "sponsors").maybeSingle().then(({
      data
    }) => {
      const v = data?.value;
      setItems(Array.isArray(v) ? v : []);
      setLoading(false);
    });
  }, []);
  async function save(next) {
    setItems(next);
    const {
      error
    } = await supabase.from("site_content").upsert({
      key: "sponsors",
      value: next
    });
    if (error) toast.error(error.message);
  }
  function add() {
    save([...items, {
      name: "Novo apoiador",
      logo: "",
      link: ""
    }]);
  }
  function update(i, patch) {
    save(items.map((x, idx) => idx === i ? {
      ...x,
      ...patch
    } : x));
  }
  function remove(i) {
    if (!confirm("Remover este apoiador?")) return;
    save(items.filter((_, idx) => idx !== i));
  }
  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    save(next);
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    padding: 20
  }, children: "Carregando…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 24,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 22
      }, children: "Apoiadores do projeto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: add, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
        " Novo apoiador"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 14
    }, children: [
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        border: "1px solid #eee",
        borderRadius: 16,
        padding: 12
      }, children: [
        it.logo && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.logo, alt: "", style: {
          width: "100%",
          height: 120,
          objectFit: "contain",
          borderRadius: 12,
          marginBottom: 10,
          background: "#fafafa"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Logo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePicker, { value: it.logo ?? "", onChange: (v) => update(i, {
          logo: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { style: {
          marginTop: 8
        }, children: "Nome" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.name ?? "", onChange: (e) => update(i, {
          name: e.target.value
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { style: {
          marginTop: 8
        }, children: "Link (opcional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.link ?? "", onChange: (e) => update(i, {
          link: e.target.value
        }), placeholder: "https://..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 6,
          marginTop: 10,
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            gap: 6
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => move(i, -1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 12 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => move(i, 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 12 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "destructive", onClick: () => remove(i), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
        ] })
      ] }, i)),
      items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        gridColumn: "1/-1",
        color: "var(--texto-suave)",
        textAlign: "center",
        padding: 20
      }, children: 'Nenhum apoiador ainda. Clique em "Novo apoiador" para começar.' })
    ] })
  ] });
}
function BannersEditor() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.from("site_content").select("value").eq("key", "banners").maybeSingle().then(({
      data
    }) => {
      const v = data?.value;
      setItems(Array.isArray(v) ? v : []);
      setLoading(false);
    });
  }, []);
  async function save(next) {
    setItems(next);
    const {
      error
    } = await supabase.from("site_content").upsert({
      key: "banners",
      value: next
    });
    if (error) toast.error(error.message);
    else toast.success("Banners salvos");
  }
  function add() {
    save([...items, {
      image: "",
      title: "",
      subtitle: "",
      link: ""
    }]);
  }
  function update(i, patch) {
    setItems(items.map((x, idx) => idx === i ? {
      ...x,
      ...patch
    } : x));
  }
  function commit() {
    save([...items]);
  }
  function remove(i) {
    if (!confirm("Remover este banner?")) return;
    save(items.filter((_, idx) => idx !== i));
  }
  function move(i, dir) {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    save(next);
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    padding: 20
  }, children: "Carregando banners…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 24,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16,
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 22
        }, children: "Próximo evento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "var(--texto-suave)",
          fontSize: 13,
          marginTop: 4
        }, children: 'Adicione um ou mais banners. Eles aparecem na seção "Próximo evento" do site.' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: add, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
        " Novo banner"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "grid",
      gap: 16
    }, children: [
      items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        border: "1px solid #eee",
        borderRadius: 16,
        padding: 16
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Imagem do banner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePicker, { value: it.image ?? "", onChange: (v) => save(items.map((x, idx) => idx === i ? {
          ...x,
          image: v
        } : x)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          marginTop: 12
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Título (opcional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.title ?? "", onChange: (e) => update(i, {
              title: e.target.value
            }), onBlur: commit })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Link (opcional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: it.link ?? "", onChange: (e) => update(i, {
              link: e.target.value
            }), onBlur: commit, placeholder: "https://..." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          marginTop: 10
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Legenda (opcional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, value: it.subtitle ?? "", onChange: (e) => update(i, {
            subtitle: e.target.value
          }), onBlur: commit })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 8,
          marginTop: 12,
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            gap: 6
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => move(i, -1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 14 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => move(i, 1), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 14 }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            gap: 6
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: commit, children: "Salvar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "destructive", onClick: () => remove(i), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) })
          ] })
        ] })
      ] }, i)),
      items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        color: "var(--texto-suave)",
        textAlign: "center",
        padding: 20
      }, children: 'Nenhum banner ainda. Clique em "Novo banner" para adicionar.' })
    ] })
  ] });
}
const STATUS_LABELS = {
  awaiting_contact: "Aguardando contato",
  awaiting_payment: "Aguardando pagamento",
  confirmed: "Confirmada",
  cancelled: "Cancelada"
};
const PAYMENT_LABELS = {
  pending: "Pendente",
  approved: "Aprovado",
  refused: "Recusado",
  refunded: "Estornado"
};
const STATUS_COLORS = {
  awaiting_contact: "#E8A020",
  awaiting_payment: "#4A9BAE",
  confirmed: "#7A9A52",
  cancelled: "#999"
};
function ReservationsEditor() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selected, setSelected] = reactExports.useState(null);
  const [contato, setContato] = reactExports.useState({});
  async function load() {
    setLoading(true);
    const {
      data
    } = await supabase.from("reservations").select("*").order("created_at", {
      ascending: false
    });
    setItems(data ?? []);
    setLoading(false);
  }
  reactExports.useEffect(() => {
    load();
    supabase.from("site_content").select("key,value").eq("key", "contato").maybeSingle().then(({
      data
    }) => {
      setContato(data?.value ?? {});
    });
  }, []);
  async function updateStatus(id, patch) {
    const {
      error
    } = await supabase.from("reservations").update(patch).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Reserva atualizada");
    load();
    if (selected?.id === id) setSelected({
      ...selected,
      ...patch
    });
  }
  async function remove(id) {
    if (!confirm("Excluir esta reserva permanentemente?")) return;
    const {
      error
    } = await supabase.from("reservations").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Reserva excluída");
    load();
    if (selected?.id === id) setSelected(null);
  }
  function sendWhatsApp(r) {
    const num = (r.whatsapp ?? "").replace(/\D/g, "");
    if (!num) return toast.error("Reserva sem WhatsApp");
    const phone = num.length <= 11 ? "55" + num : num;
    const childrenNames = Array.isArray(r.children) ? r.children.map((c) => `${c.name} (${c.age})`).join(", ") : "";
    const lines = [`Olá, ${r.responsible_name}! ✨`, "", `Sua reserva na Bincá foi *confirmada*!`, childrenNames ? `Crianças: ${childrenNames}` : "", r.workshop_name ? `Oficina: ${r.workshop_name}` : "", "", "", "", "", r.amount ? `Valor: R$ ${Number(r.amount).toFixed(2).replace(".", ",")} — pagamento aprovado ✅` : "", "", "Vaga garantida 💚 Te esperamos!"].filter(Boolean).join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines)}`, "_blank");
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    padding: 20
  }, children: "Carregando reservas…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { style: {
    padding: 24,
    borderRadius: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16,
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 22
        }, children: "Reservas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          color: "var(--texto-suave)",
          fontSize: 13,
          marginTop: 4
        }, children: [
          items.length,
          " reserva",
          items.length !== 1 ? "s" : "",
          " no total."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: load, children: "Atualizar" })
    ] }),
    items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      padding: 40,
      textAlign: "center",
      color: "var(--texto-suave)"
    }, children: "Nenhuma reserva ainda." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      overflowX: "auto"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: {
        background: "var(--creme2)",
        textAlign: "left"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "Responsável" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "WhatsApp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "Crianças" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "Oficina" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "Valor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "Pagamento" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "Reserva" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        }, children: "Data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
          padding: "10px 12px"
        } })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: {
        borderBottom: "1px solid #eee"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px",
          fontWeight: 700
        }, children: r.responsible_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px"
        }, children: r.whatsapp }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px"
        }, children: r.children_count }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px"
        }, children: r.workshop_name ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px"
        }, children: r.amount ? `R$ ${Number(r.amount).toFixed(2).replace(".", ",")}` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px"
        }, children: PAYMENT_LABELS[r.payment_status] ?? r.payment_status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          background: STATUS_COLORS[r.reservation_status] ?? "#999",
          color: "#fff",
          padding: "3px 10px",
          borderRadius: 50,
          fontSize: 12,
          fontWeight: 700
        }, children: STATUS_LABELS[r.reservation_status] ?? r.reservation_status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px",
          color: "var(--texto-suave)",
          fontSize: 12
        }, children: new Date(r.created_at).toLocaleDateString("pt-BR") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "10px 12px",
          whiteSpace: "nowrap"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => setSelected(r), children: "Ver" }) })
      ] }, r.id)) })
    ] }) }),
    selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: () => setSelected(null), style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.5)",
      zIndex: 1e3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: (e) => e.stopPropagation(), style: {
      background: "#fff",
      borderRadius: 20,
      padding: 28,
      maxWidth: 600,
      width: "100%",
      maxHeight: "90vh",
      overflowY: "auto"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 800,
        marginBottom: 4
      }, children: selected.responsible_name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        color: "var(--texto-suave)",
        fontSize: 13,
        marginBottom: 18
      }, children: [
        "Reserva #",
        selected.id.slice(0, 8).toUpperCase(),
        " • ",
        new Date(selected.created_at).toLocaleString("pt-BR")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gap: 8,
        marginBottom: 18
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "WhatsApp:" }),
          " ",
          selected.whatsapp
        ] }),
        selected.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "E-mail:" }),
          " ",
          selected.email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Oficina:" }),
          " ",
          selected.workshop_name ?? "—"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Valor:" }),
          " ",
          selected.amount ? `R$ ${Number(selected.amount).toFixed(2).replace(".", ",")}` : "—"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            "Crianças (",
            selected.children_count,
            "):"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
            marginTop: 6,
            paddingLeft: 18
          }, children: (selected.children ?? []).map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            c.name,
            " ",
            c.age ? `— ${c.age}` : ""
          ] }, i)) })
        ] }),
        selected.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Observações:" }),
          " ",
          selected.notes
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginBottom: 16
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status do pagamento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selected.payment_status, onChange: (e) => updateStatus(selected.id, {
            payment_status: e.target.value
          }), style: {
            width: "100%",
            padding: "10px",
            borderRadius: 8,
            border: "1px solid #ddd"
          }, children: Object.entries(PAYMENT_LABELS).map(([k, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k, children: l }, k)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status da reserva" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selected.reservation_status, onChange: (e) => updateStatus(selected.id, {
            reservation_status: e.target.value
          }), style: {
            width: "100%",
            padding: "10px",
            borderRadius: 8,
            border: "1px solid #ddd"
          }, children: Object.entries(STATUS_LABELS).map(([k, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: k, children: l }, k)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "space-between"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 8,
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => updateStatus(selected.id, {
            payment_status: "approved",
            reservation_status: "confirmed"
          }), children: "Confirmar reserva" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => updateStatus(selected.id, {
            reservation_status: "cancelled"
          }), children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { style: {
            background: "#25D366",
            color: "#fff"
          }, onClick: () => sendWhatsApp(selected), children: "Enviar pelo WhatsApp" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          gap: 8
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", onClick: () => remove(selected.id), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }),
            " Excluir"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: () => setSelected(null), children: "Fechar" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        marginTop: 16,
        fontSize: 12,
        color: "var(--texto-suave)",
        padding: 10,
        background: "var(--creme2)",
        borderRadius: 8
      }, children: "💡 Integração PIX via Efí Bank pode ser ativada quando você fornecer o certificado .p12 e as credenciais (Client ID/Secret). Por enquanto, o pagamento é marcado manualmente." })
    ] }) })
  ] });
}
export {
  AdminPage as component
};
