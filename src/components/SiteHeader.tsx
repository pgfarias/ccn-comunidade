import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FishIcon } from "./FishIcon";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Quem Somos" },
  { to: "/ministerios", label: "Ministérios" },
  { to: "/cultos", label: "Cultos & Ao Vivo" },
  { to: "/agenda", label: "Agenda" },
  { to: "/conteudo", label: "Conteúdo" },
  { to: "/biblia", label: "Bíblia" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft">
            <FishIcon className="h-5 w-5 fish-icon" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold text-primary-deep">CCN</span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Cristo p/ as Nações
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary bg-primary-soft" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/cultos" className="btn-primary text-sm">
            Assista ao vivo
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-app flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90"
                activeProps={{ className: "text-primary bg-primary-soft" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/cultos"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 text-sm"
            >
              Assista ao vivo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
