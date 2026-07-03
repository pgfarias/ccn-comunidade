import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock, MapPin } from "lucide-react";
import { FishIcon } from "../components/FishIcon";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda — CCN | Próximos eventos e cultos especiais" },
      {
        name: "description",
        content: "Confira a agenda de eventos e cultos especiais da Comunidade Cristo para as Nações.",
      },
      { property: "og:title", content: "Agenda — CCN" },
      { property: "og:url", content: "/agenda" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: AgendaPage,
});

const eventos = [
  { data: "12/10", mes: "Out", ano: "2025", hora: "18h30", titulo: "Culto de Ação de Graças — 11 anos da CCN", local: "Templo — R. Itamanduaba, 36", tag: "Especial" },
  { data: "19/10", mes: "Out", ano: "2025", hora: "9h", titulo: "Manhã de Oração — Mulheres CCN", local: "Templo", tag: "Mulheres" },
  { data: "26/10", mes: "Out", ano: "2025", hora: "16h", titulo: "Tarde Infantil — Festa das Crianças", local: "Templo", tag: "Infantil" },
  { data: "02/11", mes: "Nov", ano: "2025", hora: "18h30", titulo: "Culto de Santa Ceia", local: "Templo", tag: "Culto" },
  { data: "09/11", mes: "Nov", ano: "2025", hora: "20h", titulo: "Encontro de Casais", local: "Salão social", tag: "Casais" },
  { data: "23/11", mes: "Nov", ano: "2025", hora: "18h30", titulo: "Batismo nas Águas", local: "Templo", tag: "Especial" },
];

function AgendaPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-app py-16 md:py-20">
          <p className="eyebrow"><FishIcon className="h-3.5 w-6" /> Agenda</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-primary-deep sm:text-5xl">
            Próximos eventos & celebrações
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Marque no seu calendário — você e sua família são bem-vindos em cada um deles.
          </p>
        </div>
      </section>

      <section className="container-app py-14">
        <ul className="space-y-4">
          {eventos.map((e) => (
            <li key={e.titulo} className="card-soft grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 p-5 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:p-6">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                <div className="text-center leading-none">
                  <p className="font-display text-2xl font-bold">{e.data.split("/")[0]}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest">{e.mes}</p>
                </div>
              </div>
              <div className="min-w-0">
                <span className="inline-flex rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-primary-deep">
                  {e.tag}
                </span>
                <h2 className="mt-1.5 font-display text-lg font-semibold text-primary-deep sm:text-xl">
                  {e.titulo}
                </h2>
                <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {e.data}/{e.ano}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {e.hora}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.local}</span>
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <a href="/contato" className="btn-outline text-sm">Mais informações</a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
