import { createFileRoute } from "@tanstack/react-router";
import { FishIcon } from "../components/FishIcon";

export const Route = createFileRoute("/ministerios")({
  head: () => ({
    meta: [
      { title: "Ministérios — CCN | Adoração, Família, Nova Geração, Serviço" },
      {
        name: "description",
        content:
          "Conheça os ministérios da CCN: Adoração & Arte, Família & Relacionamentos, Nova Geração, Serviço & Produção. Encontre seu lugar para servir.",
      },
      { property: "og:title", content: "Ministérios — CCN" },
      { property: "og:url", content: "/ministerios" },
    ],
    links: [{ rel: "canonical", href: "/ministerios" }],
  }),
  component: MinisteriosPage,
});

const grupos = [
  {
    tag: "Adoração & Arte",
    descricao: "Louvor, expressão e criatividade a serviço do Reino.",
    depts: ["Louvor", "Coral", "Dança", "Grupo Elohim"],
  },
  {
    tag: "Família & Relacionamentos",
    descricao: "Fortalecendo casais, mulheres e homens no propósito de Deus.",
    depts: ["Mulheres", "Homens", "Casais"],
  },
  {
    tag: "Nova Geração",
    descricao: "Formando crianças, adolescentes e jovens firmes na fé.",
    depts: ["Infantil", "Adolescentes", "Jovens"],
  },
  {
    tag: "Serviço & Produção",
    descricao: "Bastidores que sustentam o culto com excelência e alegria.",
    depts: ["Diaconato", "Multimídia", "Som", "Decoração"],
  },
];

function MinisteriosPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-app py-16 md:py-24">
          <p className="eyebrow"><FishIcon className="h-3.5 w-6" /> Ministérios</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-primary-deep sm:text-5xl">
            Encontre o seu lugar para servir e crescer.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Cada ministério é uma porta de entrada para viver a fé em comunidade. Descubra onde seu dom encontra o
            chamado de Deus para a sua vida.
          </p>
        </div>
      </section>

      <section className="container-app py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {grupos.map((g) => (
            <article key={g.tag} className="card-soft p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Categoria
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-primary-deep">{g.tag}</h2>
              <p className="mt-2 text-foreground/75">{g.descricao}</p>

              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Departamentos
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.depts.map((d) => (
                    <li
                      key={d}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground/85"
                    >
                      <FishIcon className="h-3 w-6 fish-icon" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-primary p-8 text-white sm:p-12">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Quero servir</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
                Dê o próximo passo com a gente.
              </h2>
              <p className="mt-3 text-white/85">
                Fale com um líder e descubra em qual ministério você pode começar a servir esta semana.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="/contato" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-primary transition hover:bg-white/90">
                Entrar em contato
              </a>
              <a
                href="https://wa.me/5511990212279"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
