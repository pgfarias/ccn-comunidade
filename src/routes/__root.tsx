import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { WhatsAppFab } from "../components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">Página não encontrada</p>
        <h1 className="mt-3 font-display text-6xl font-semibold text-primary-deep">404</h1>
        <p className="mt-3 text-muted-foreground">
          A página que você procura não existe ou foi movida. Que tal voltar ao início?
        </p>
        <Link to="/" className="btn-primary mt-6">Voltar ao início</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-primary-deep">
          Não conseguimos carregar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tente novamente em instantes ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Tentar novamente
          </button>
          <a href="/" className="btn-outline">Ir para o início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CCN — Comunidade Cristo para as Nações | Igreja no Jardim Umarizal" },
      {
        name: "description",
        content:
          "Igreja evangélica no Jardim Umarizal, São Paulo. Cultos aos domingos e sextas, ministérios para toda a família e transmissão ao vivo. Você é bem-vindo!",
      },
      { name: "author", content: "Comunidade Cristo para as Nações" },
      { property: "og:site_name", content: "Comunidade Cristo para as Nações" },
      { property: "og:title", content: "CCN — Comunidade Cristo para as Nações | Igreja no Jardim Umarizal" },
      {
        property: "og:description",
        content:
          "Uma família de fé no Jardim Umarizal, São Paulo. Venha fazer parte da CCN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0077b6" },
      { name: "twitter:title", content: "CCN — Comunidade Cristo para as Nações | Igreja no Jardim Umarizal" },
      { name: "description", content: "A website for Comunidade Cristo para as Nações (CCN) church, blending institutional information with a content hub." },
      { property: "og:description", content: "A website for Comunidade Cristo para as Nações (CCN) church, blending institutional information with a content hub." },
      { name: "twitter:description", content: "A website for Comunidade Cristo para as Nações (CCN) church, blending institutional information with a content hub." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/9MHYZWrYeNfGmTquOnw1HVRgeix2/social-images/social-1783038721649-logo-1.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/9MHYZWrYeNfGmTquOnw1HVRgeix2/social-images/social-1783038721649-logo-1.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
