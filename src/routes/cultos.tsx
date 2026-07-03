import { createFileRoute } from "@tanstack/react-router";
import { Play, Calendar, Clock } from "lucide-react";
import { FishIcon } from "../components/FishIcon";

export const Route = createFileRoute("/cultos")({
  head: () => ({
    meta: [
      { title: "Cultos & Ao Vivo — CCN | Sex 20h, Dom 9h30 e 18h30" },
      {
        name: "description",
        content:
          "Assista aos cultos ao vivo da CCN. Sexta 20h e domingo 9h30 (presencial e online). Domingo 18h30 (online). Confira as últimas mensagens.",
      },
      { property: "og:title", content: "Cultos & Ao Vivo — CCN" },
      { property: "og:url", content: "/cultos" },
    ],
    links: [{ rel: "canonical", href: "/cultos" }],
  }),
  component: CultosPage,
});

const horarios = [
  { dia: "Sexta-feira", hora: "20h00", nome: "Culto de Ensino", descricao: "Presencial e online." },
  { dia: "Domingo", hora: "9h30", nome: "Escola Bíblica", descricao: "Presencial e online." },
  { dia: "Domingo", hora: "18h30", nome: "Culto da Família", descricao: "Online." },
];

const videos = [
  { titulo: "A cultura do Reino em tempos de incerteza", data: "28 Set 2025", duracao: "58 min" },
  { titulo: "Discernimento espiritual no cotidiano", data: "21 Set 2025", duracao: "52 min" },
  { titulo: "O legado da fé entre gerações", data: "14 Set 2025", duracao: "1h 04 min" },
  { titulo: "Bonança, caridade e sublimidade", data: "07 Set 2025", duracao: "49 min" },
];

function CultosPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-app py-16 md:py-20">
          <p className="eyebrow"><FishIcon className="h-3.5 w-6" /> Cultos & Ao Vivo</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-primary-deep sm:text-5xl">
            Assista de onde estiver — a família toda no mesmo culto.
          </h1>
        </div>
      </section>

      <section className="container-app py-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-primary-deep">
              <iframe
                title="Transmissão ao vivo — CCN"
                src="https://www.youtube.com/embed/live_stream?channel=UC_dummy"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-live px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-live-foreground">
                <span className="live-dot" /> Ao vivo
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              A transmissão inicia alguns minutos antes de cada culto. Se estiver fora do horário, você verá o último culto disponível.
            </p>
          </div>

          <aside className="card-soft p-6">
            <h2 className="font-display text-xl font-semibold text-primary-deep">Horários fixos</h2>
            <ul className="mt-4 space-y-4">
              {horarios.map((h) => (
                <li key={h.nome} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="min-w-0">
                    <p className="font-semibold text-primary-deep">{h.nome}</p>
                    <p className="text-sm text-muted-foreground">{h.descricao}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{h.dia}</p>
                    <p className="font-display text-lg text-primary-deep">{h.hora}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="container-app pb-20">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Recentes</p>
            <h2 className="mt-2 font-display text-3xl font-semibold">Últimos vídeos</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v) => (
            <article key={v.titulo} className="card-soft overflow-hidden">
              <div className="relative aspect-video bg-primary-deep">
                <div className="absolute inset-0 grid place-items-center text-white/80">
                  <Play className="h-10 w-10" />
                </div>
                <span className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
                  {v.duracao}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-semibold text-primary-deep line-clamp-2">
                  {v.titulo}
                </h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {v.data}
                  <span className="mx-1">•</span>
                  <Clock className="h-3.5 w-3.5" /> {v.duracao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
