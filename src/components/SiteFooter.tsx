import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { FishIcon } from "./FishIcon";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-app grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft">
              <FishIcon className="h-5 w-5 fish-icon" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg font-semibold text-primary-deep">CCN</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Cristo p/ as Nações
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Uma família de fé no Jardim Umarizal, propagando as boas novas de Cristo Jesus a toda criatura.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-deep">
            Navegue
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/sobre", "Quem Somos"],
              ["/ministerios", "Ministérios"],
              ["/cultos", "Cultos & Ao Vivo"],
              ["/agenda", "Agenda"],
              ["/conteudo", "Conteúdo"],
              ["/biblia", "Bíblia Online"],
              ["/contato", "Contato"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-foreground/80 hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-deep">
            Horários
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground/80">
            <li><strong>Sexta:</strong> 20h — Culto de Ensino</li>
            <li><strong>Domingo:</strong> 9h30 — Escola Bíblica</li>
            <li><strong>Domingo:</strong> 18h30 — Culto da Família</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-deep">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2 text-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>R. Itamanduaba, 36 — Jd. Umarizal, São Paulo — SP, 05755-140</span>
            </li>
            <li className="flex gap-2 text-foreground/80">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+551125337770" className="hover:text-primary">(11) 2533-7770</a>
            </li>
            <li className="flex gap-2 text-foreground/80">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href="https://wa.me/5511990212279"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                WhatsApp: (11) 99021-2279
              </a>
            </li>
            <li className="flex gap-2 text-foreground/80">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:comcristoparaasnacoes@gmail.com" className="hover:text-primary break-all">
                comcristoparaasnacoes@gmail.com
              </a>
            </li>
            <li className="flex gap-2 text-foreground/80">
              <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a
                href="https://instagram.com/comunidadeccn"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                @comunidadeccn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-app flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Comunidade Cristo para as Nações. Todos os direitos reservados.</p>
          <p className="italic">"Ide por todo o mundo e pregai o evangelho." — Mc 16:15</p>
        </div>
      </div>
    </footer>
  );
}
