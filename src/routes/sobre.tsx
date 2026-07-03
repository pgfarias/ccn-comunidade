import { createFileRoute } from "@tanstack/react-router";
import { FishIcon } from "../components/FishIcon";
import pastorsImg from "../assets/pastors.jpg";
import familyImg from "../assets/family.jpg";
import communityImg from "../assets/community-1.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Quem Somos — CCN | Igreja no Jd. Umarizal" },
      {
        name: "description",
        content:
          "Conheça a história, a missão e os valores da Comunidade Cristo para as Nações — uma família de fé há mais de 10 anos no Jardim Umarizal.",
      },
      { property: "og:title", content: "Quem Somos — CCN" },
      { property: "og:description", content: "Uma família de fé há mais de 10 anos." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

const outrosPastores = [
  { nome: "Pr. Ricardo Alves", papel: "Ministério de Ensino" },
  { nome: "Pra. Débora Souza", papel: "Ministério Feminino" },
  { nome: "Pr. Marcos Lima", papel: "Nova Geração" },
  { nome: "Ev. Cláudia Barros", papel: "Evangelismo" },
  { nome: "Ev. Rafael Prado", papel: "Missões" },
  { nome: "Pr. Anderson Reis", papel: "Ministério de Louvor" },
];

function SobrePage() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-app grid gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
          <div>
            <p className="eyebrow"><FishIcon className="h-3.5 w-6" /> Quem Somos</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-primary-deep sm:text-5xl">
              Uma família de fé, há mais de <em className="not-italic text-primary">dez anos</em> caminhando junta.
            </h1>
            <p className="mt-5 text-lg text-foreground/80">
              A Comunidade Cristo para as Nações (CCN) nasceu do desejo de ver vidas transformadas pelo amor de Deus.
              Localizada no Jardim Umarizal, em São Paulo, somos uma família de fé que caminha unida para propagar as
              boas novas de salvação em Cristo Jesus a toda criatura. Você é bem-vindo aqui, seja qual for a sua história.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={communityImg}
              alt="Comunidade CCN em comunhão"
              width={1200}
              height={900}
              loading="lazy"
              className="h-80 w-full object-cover md:h-[460px]"
            />
          </div>
        </div>
      </section>

      <section className="container-app py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Nossa missão</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Discernimento, verdade e Reino</h2>
            <p className="mt-4 text-foreground/80">
              Nossa missão é ajudar pessoas a alcançarem discernimento emocional e espiritual, voltando suas mentes
              para a verdade do evangelho, buscando o Reino de Deus e ajudando a definir a realidade da nossa geração —
              e das que ainda estão por vir.
            </p>
            <p className="mt-3 text-foreground/80">
              Acreditamos em um ministério atual e expressivo na sociedade, capaz de apresentar respostas às grandes
              questões do nosso tempo, sempre se atualizando para continuar propondo um futuro melhor e recebendo o
              novo que Deus tem para nós.
            </p>
          </div>
          <div>
            <p className="eyebrow">Nossos valores</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">A cultura do Reino</h2>
            <ul className="mt-4 space-y-3 text-foreground/85">
              {[
                ["Esforço coletivo", "Cremos que o Reino se constrói em comunidade, não em individualismo."],
                ["Esperança e alegria", "Uma visão positiva do futuro e da obra de Deus entre nós."],
                ["Liberdade", "Verdade que liberta corações, mentes e famílias."],
                ["Bonança, caridade e sublimidade", "Marcas de um povo que serve a Deus de corpo, alma e espírito."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <FishIcon className="mt-1 h-4 w-8 shrink-0 fish-icon" />
                  <span><strong className="text-primary-deep">{t}.</strong> <span className="text-foreground/75">{d}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-app py-20">
          <p className="eyebrow">Liderança</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Pastores principais</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <img
                src={pastorsImg}
                alt="Pastores principais da CCN"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-[480px] w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-primary-deep">
                Pr. Josué Ferreira & Pra. Míriam Ferreira
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Pastores fundadores
              </p>
              <p className="mt-4 text-foreground/80">
                À frente da CCN desde a fundação em 2014, os pastores Josué e Míriam pastoreiam a comunidade com o
                compromisso de anunciar Cristo com clareza, formar discípulos maduros e servir a cidade de São Paulo
                com o amor do Reino.
              </p>
              <p className="mt-3 text-foreground/80 italic">
                "Cada geração ensina e aprende com a outra, porque cremos que o legado da fé atravessa o tempo."
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="font-display text-2xl font-semibold text-primary-deep">
              Pastores & evangelistas
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outrosPastores.map((p) => (
                <div key={p.nome} className="card-soft flex items-center gap-4 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary-soft">
                    <FishIcon className="h-5 w-8 fish-icon" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-primary-deep">{p.nome}</p>
                    <p className="text-sm text-muted-foreground">{p.papel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-app py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={familyImg}
              alt="Famílias da CCN"
              width={1200}
              height={900}
              loading="lazy"
              className="h-80 w-full object-cover md:h-[420px]"
            />
          </div>
          <div>
            <p className="eyebrow">Um lugar para pertencer</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Se você está buscando um lugar para pertencer, crescer e servir…
            </h2>
            <p className="mt-4 text-foreground/80">
              A CCN está de portas abertas. Venha fazer parte dessa família e caminhar conosco rumo ao que Deus tem preparado.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/cultos" className="btn-primary">Ver horários dos cultos</a>
              <a href="/contato" className="btn-outline">Falar com um pastor</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
