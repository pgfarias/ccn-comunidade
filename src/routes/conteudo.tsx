import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FishIcon } from "../components/FishIcon";
import preachingImg from "../assets/preaching.jpg";
import bandImg from "../assets/worship-band.jpg";
import familyImg from "../assets/family.jpg";
import youthImg from "../assets/youth.jpg";
import kidsImg from "../assets/kids.jpg";
import communityImg from "../assets/community-1.jpg";

export const Route = createFileRoute("/conteudo")({
  head: () => ({
    meta: [
      { title: "Conteúdo — CCN | Mensagens, devocionais e esboços" },
      {
        name: "description",
        content: "Mensagens, devocionais e esboços da CCN para nutrir sua caminhada de fé durante a semana.",
      },
      { property: "og:title", content: "Conteúdo — CCN" },
      { property: "og:url", content: "/conteudo" },
    ],
    links: [{ rel: "canonical", href: "/conteudo" }],
  }),
  component: ConteudoPage,
});

type Cat = "Todos" | "Mensagem" | "Devocional" | "Esboço";

const posts = [
  { cat: "Mensagem" as Cat, titulo: "A cultura do Reino em tempos de incerteza", data: "28 Set 2025", autor: "Pr. Josué Ferreira", img: preachingImg },
  { cat: "Devocional" as Cat, titulo: "Discernimento espiritual no cotidiano", data: "24 Set 2025", autor: "Pra. Míriam Ferreira", img: bandImg },
  { cat: "Esboço" as Cat, titulo: "Famílias que servem juntas", data: "18 Set 2025", autor: "Pr. Ricardo Alves", img: familyImg },
  { cat: "Mensagem" as Cat, titulo: "O legado da fé entre gerações", data: "14 Set 2025", autor: "Pr. Josué Ferreira", img: communityImg },
  { cat: "Devocional" as Cat, titulo: "Bonança em meio à tempestade", data: "10 Set 2025", autor: "Pra. Débora Souza", img: youthImg },
  { cat: "Esboço" as Cat, titulo: "Crianças e o Reino de Deus", data: "05 Set 2025", autor: "Pr. Marcos Lima", img: kidsImg },
];

const cats: Cat[] = ["Todos", "Mensagem", "Devocional", "Esboço"];

function ConteudoPage() {
  const [filter, setFilter] = useState<Cat>("Todos");
  const visible = filter === "Todos" ? posts : posts.filter((p) => p.cat === filter);

  return (
    <>
      <section className="bg-surface">
        <div className="container-app py-16 md:py-20">
          <p className="eyebrow"><FishIcon className="h-3.5 w-6" /> Conteúdo</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-primary-deep sm:text-5xl">
            Mensagens, devocionais e esboços
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Conteúdo para nutrir sua caminhada com Cristo — para você, para o seu grupo pequeno, para a sua família.
          </p>
        </div>
      </section>

      <section className="container-app py-14">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/75 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.titulo} className="card-soft overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 font-semibold text-primary">{p.cat}</span>
                  <span className="text-muted-foreground">{p.data}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-primary-deep">{p.titulo}</h2>
                <p className="mt-2 text-sm text-muted-foreground">por {p.autor}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
