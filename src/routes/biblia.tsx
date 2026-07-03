import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, ExternalLink } from "lucide-react";
import { FishIcon } from "../components/FishIcon";

export const Route = createFileRoute("/biblia")({
  head: () => ({
    meta: [
      { title: "Bíblia Online — CCN | Leitura e plano diário" },
      {
        name: "description",
        content: "Leia a Bíblia online e siga um plano de leitura para percorrer as Escrituras em comunidade.",
      },
      { property: "og:title", content: "Bíblia Online — CCN" },
      { property: "og:url", content: "/biblia" },
    ],
    links: [{ rel: "canonical", href: "/biblia" }],
  }),
  component: BibliaPage,
});

const plano = [
  { dia: "Seg", ref: "Salmos 1 • Provérbios 1 • Mateus 1" },
  { dia: "Ter", ref: "Salmos 2 • Provérbios 2 • Mateus 2" },
  { dia: "Qua", ref: "Salmos 3 • Provérbios 3 • Mateus 3" },
  { dia: "Qui", ref: "Salmos 4 • Provérbios 4 • Mateus 4" },
  { dia: "Sex", ref: "Salmos 5 • Provérbios 5 • Mateus 5" },
  { dia: "Sáb", ref: "Salmos 6 • Provérbios 6 • Mateus 6" },
  { dia: "Dom", ref: "Salmos 7 • Provérbios 7 • Mateus 7" },
];

function BibliaPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-app py-16 md:py-20">
          <p className="eyebrow"><FishIcon className="h-3.5 w-6" /> Bíblia Online</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-primary-deep sm:text-5xl">
            Alimente-se da Palavra todos os dias.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho." — Salmos 119:105
          </p>
        </div>
      </section>

      <section className="container-app py-14">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="card-soft p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft">
                <BookOpen className="h-5 w-5 text-primary" />
              </span>
              <h2 className="font-display text-xl font-semibold text-primary-deep">Leia a Bíblia</h2>
            </div>
            <p className="mt-3 text-foreground/75">
              Acesse a Bíblia online completa, com diversas traduções e recursos de estudo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.bible.com/pt"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Abrir YouVersion <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.bibliaonline.com.br/acf"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Bíblia Online (ACF)
              </a>
            </div>
          </div>

          <div className="card-soft p-6">
            <h2 className="font-display text-xl font-semibold text-primary-deep">
              Plano de leitura da semana
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Salmos, Provérbios e Evangelhos.</p>
            <ul className="mt-5 divide-y divide-border">
              {plano.map((d) => (
                <li key={d.dia} className="grid grid-cols-[3rem_1fr] items-center gap-3 py-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">{d.dia}</span>
                  <span className="text-sm text-foreground/85">{d.ref}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
