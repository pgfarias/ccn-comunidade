import { ArrowRight, AtSign } from "lucide-react";
import heroImg from "../assets/hero-worship.jpg";
import kidsImg from "../assets/kids.jpg";
import bandImg from "../assets/worship-band.jpg";
import youthImg from "../assets/youth.jpg";
import familyImg from "../assets/family.jpg";
import preachingImg from "../assets/preaching.jpg";

/*
  INSTRUÇÕES PARA ATIVAR O FEED REAL DO INSTAGRAM
  ─────────────────────────────────────────────────
  O Instagram não permite embed de feed completo diretamente.
  Para mostrar o feed real de @comunidadeccn, siga um dos caminhos:

  1. SnapWidget (Gratuito – mais comum no Brasil)
     • Acesse https://snapwidget.com e crie uma conta gratuita
     • Conecte o Instagram @comunidadeccn
     • Configure o layout (ex: grid 3×2, sem bordas)
     • Copie a URL do iframe gerada (ex: https://snapwidget.com/v/XXXXX)
     • Cole no campo WIDGET_URL abaixo

  2. LightWidget (Gratuito)
     • Acesse https://lightwidget.com
     • Siga o mesmo fluxo de conexão e cópia da URL

  3. Elfsight (Pago – mais recursos visuais)
     • https://elfsight.com/instagram-feed-widget

  Após configurar o WIDGET_URL, o iframe será renderizado automaticamente
  e o grid de fallback (destaques) será substituído pelo feed ao vivo.
*/

const WIDGET_URL = "https://lightwidget.com/widgets/3c396f52799a5720b8c10accc760f320.html";

const fallbackImages = [
  { src: heroImg, alt: "Momento de adoração na CCN" },
  { src: kidsImg, alt: "Ministério infantil da CCN" },
  { src: bandImg, alt: "Ministério de louvor da CCN" },
  { src: youthImg, alt: "Juventude da CCN" },
  { src: familyImg, alt: "Famílias na CCN" },
  { src: preachingImg, alt: "Palavra ministerial na CCN" },
];

export function InstagramFeedSection() {
  return (
    <section className="container-app py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Redes sociais</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Acompanhe no Instagram
          </h2>
          <p className="mt-2 text-muted-foreground">
            @comunidadeccn — momentos e avisos da semana.
          </p>
        </div>
        <a
          href="https://instagram.com/comunidadeccn"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <AtSign className="h-4 w-4" />
          Seguir no Instagram
        </a>
      </div>

      {WIDGET_URL ? (
        /* Feed real via widget de terceiros */
        <div className="mt-10">
          <iframe
            src={WIDGET_URL}
            title="Feed do Instagram da CCN"
            className="w-full rounded-2xl border border-border"
            style={{ minHeight: 420 }}
            allowTransparency
            frameBorder={0}
            scrolling="no"
          />
        </div>
      ) : (
        /* Grid de destaques (fallback até ativar o widget) */
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {fallbackImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/comunidadeccn"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary-deep/0 transition group-hover:bg-primary-deep/40">
                <AtSign className="h-6 w-6 text-white opacity-0 transition group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <a
          href="https://instagram.com/comunidadeccn"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-primary hover:gap-2 transition-all"
        >
          Ver perfil completo <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
