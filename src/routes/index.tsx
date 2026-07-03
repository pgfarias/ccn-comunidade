import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, MapPin, Play, ArrowRight, MessageCircle } from "lucide-react";
import { FishIcon } from "../components/FishIcon";
import heroImg from "../assets/hero-worship.jpg";
import kidsImg from "../assets/kids.jpg";
import bandImg from "../assets/worship-band.jpg";
import preachingImg from "../assets/preaching.jpg";
import familyImg from "../assets/family.jpg";
import youthImg from "../assets/youth.jpg";
import communityImg from "../assets/community-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CCN — Comunidade Cristo para as Nações | Igreja no Jd. Umarizal, SP" },
      {
        name: "description",
        content:
          "Bem-vindo à CCN — uma família de fé no Jardim Umarizal, São Paulo. Cultos sexta às 20h e domingo às 9h30 e 18h30. Assista ao vivo e venha nos visitar.",
      },
      { property: "og:title", content: "CCN — Comunidade Cristo para as Nações" },
      { property: "og:description", content: "Você é bem-vindo. Venha fazer parte dessa família." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const messages = [
  {
    tag: "Mensagem",
    date: "28 Set 2025",
    title: "A cultura do Reino em tempos de incerteza",
    excerpt: "O evangelho responde às grandes questões da nossa geração com esperança e liberdade.",
    img: preachingImg,
  },
  {
    tag: "Devocional",
    date: "24 Set 2025",
    title: "Discernimento espiritual no cotidiano",
    excerpt: "Voltar a mente para a verdade do evangelho é um exercício diário — e possível.",
    img: bandImg,
  },
  {
    tag: "Esboço",
    date: "18 Set 2025",
    title: "Famílias que servem juntas",
    excerpt: "Cada geração ensina e aprende com a outra. O legado da fé atravessa o tempo.",
    img: familyImg,
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-app grid gap-10 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">
              <FishIcon className="h-3.5 w-6" /> Jardim Umarizal • São Paulo
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-primary-deep sm:text-5xl lg:text-6xl">
              Uma família de fé para <em className="not-italic text-primary">você</em> chamar de casa.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-foreground/80">
              Há mais de dez anos caminhamos juntos, propagando as boas novas de Cristo Jesus a toda criatura.
              Seja qual for a sua história, você é bem-vindo aqui.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/sobre" className="btn-primary">
                Conheça a CCN <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/cultos" className="btn-live">
                <span className="live-dot" /> Assista ao vivo
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Fundada em</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-primary-deep">2014</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Anos de comunidade</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-primary-deep">10+</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Ministérios</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-primary-deep">13</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
              <img
                src={heroImg}
                alt="Congregação da CCN em momento de adoração"
                width={1600}
                height={1100}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-6 left-6 hidden max-w-xs rounded-2xl border border-border bg-background p-4 shadow-card sm:block">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Próximo culto
              </p>
              <p className="mt-1 font-display text-lg text-primary-deep">Domingo • 18h30</p>
              <p className="mt-1 text-sm text-muted-foreground">Culto da Família</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO RESUMIDA */}
      <section className="container-app py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Nossa missão</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Vidas transformadas pelo amor de Deus, servindo a uma geração inteira.
          </h2>
          <p className="mt-5 text-lg text-foreground/75">
            Cremos em um ministério atual e expressivo, capaz de apresentar respostas às grandes questões
            do nosso tempo — vivendo a cultura do Reino em esforço coletivo, esperança, alegria e liberdade.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { t: "Discernimento", d: "Ajudar pessoas a alcançarem discernimento emocional e espiritual, voltando a mente para a verdade do evangelho." },
            { t: "Reino de Deus", d: "Buscar o Reino em primeiro lugar e ajudar a definir a realidade da nossa geração — e das que estão por vir." },
            { t: "Comunidade viva", d: "Cada geração ensina e aprende com a outra. Bonança, caridade e sublimidade como marcas do povo de Deus." },
          ].map((v) => (
            <div key={v.t} className="card-soft p-6">
              <FishIcon className="h-5 w-10 fish-icon" />
              <h3 className="mt-4 font-display text-xl font-semibold text-primary-deep">{v.t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRÓXIMO EVENTO */}
      <section className="bg-primary-deep text-white">
        <div className="container-app grid gap-8 py-16 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Próximo evento em destaque
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Culto de Ação de Graças <br /> pelos 11 anos da CCN
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Uma noite de celebração e testemunhos. Traga sua família e um amigo para agradecer com a gente
              tudo o que Deus tem feito nesta caminhada.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/90">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> 12 Out 2025</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> 18h30</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> R. Itamanduaba, 36</span>
            </div>
            <Link to="/agenda" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-primary-deep transition hover:bg-white/90">
              Ver agenda completa <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={communityImg}
              alt="Comunhão da comunidade CCN"
              width={1200}
              height={900}
              loading="lazy"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>
        </div>
      </section>

      {/* MENSAGENS RECENTES */}
      <section className="container-app py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Conteúdo</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Mensagens e devocionais recentes
            </h2>
          </div>
          <Link to="/conteudo" className="btn-outline">Ver todos</Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {messages.map((m) => (
            <article key={m.title} className="card-soft overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={m.img}
                  alt=""
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                  <span className="rounded-full bg-primary-soft px-2.5 py-1 font-semibold text-primary">{m.tag}</span>
                  <span className="text-muted-foreground">{m.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-primary-deep">{m.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{m.excerpt}</p>
                <Link to="/conteudo" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Ler mais <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VERSÍCULO EM DESTAQUE */}
      <section className="bg-surface">
        <div className="container-app py-20 text-center">
          <FishIcon className="mx-auto h-6 w-12 fish-icon" />
          <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl italic text-primary-deep sm:text-3xl">
            "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo."
          </blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Salmos 23:4
          </p>
        </div>
      </section>

      {/* INSTAGRAM FEED (mock grid) */}
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
            Seguir no Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[heroImg, kidsImg, bandImg, youthImg, familyImg, preachingImg].map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/comunidadeccn"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-primary-deep/0 transition group-hover:bg-primary-deep/30" />
            </a>
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO + HORÁRIOS + WHATSAPP */}
      <section className="container-app pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-soft p-6">
            <MapPin className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-semibold text-primary-deep">Onde estamos</h3>
            <p className="mt-2 text-sm text-foreground/80">
              R. Itamanduaba, 36<br />
              Jd. Umarizal — São Paulo/SP<br />
              CEP 05755-140
            </p>
            <a
              href="https://maps.google.com/?q=R.+Itamanduaba,+36+-+Jardim+Umarizal,+São+Paulo"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
            >
              Ver no mapa <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="card-soft p-6">
            <Clock className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-semibold text-primary-deep">Horários dos cultos</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
              <li><strong>Sexta:</strong> 20h — Culto de Ensino</li>
              <li><strong>Domingo:</strong> 9h30 — Escola Bíblica</li>
              <li><strong>Domingo:</strong> 18h30 — Culto da Família</li>
            </ul>
          </div>
          <div className="card-soft p-6">
            <MessageCircle className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-display text-xl font-semibold text-primary-deep">Fale conosco</h3>
            <p className="mt-2 text-sm text-foreground/80">
              Tem alguma dúvida ou pedido de oração? Envie uma mensagem, respondemos com carinho.
            </p>
            <a
              href="https://wa.me/5511990212279"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-4 text-sm"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Silence unused warning for future use
void Play;
