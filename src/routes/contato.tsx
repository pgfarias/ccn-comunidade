import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, AtSign, CheckCircle2 } from "lucide-react";
import { FishIcon } from "../components/FishIcon";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — CCN | Fale com a Comunidade Cristo para as Nações" },
      {
        name: "description",
        content:
          "Fale com a CCN — endereço, telefone, WhatsApp, e-mail e mapa. Envie seu pedido de oração ou tire suas dúvidas.",
      },
      { property: "og:title", content: "Contato — CCN" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  mensagem: z.string().trim().min(10, "Escreva uma mensagem com pelo menos 10 caracteres").max(1000),
});
type FormData = z.infer<typeof schema>;

function ContatoPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Placeholder: em produção, enviar para um endpoint / e-mail service.
    const text = `Olá, sou ${data.nome} (${data.email}).\n\n${data.mensagem}`;
    const url = `https://wa.me/5511990212279?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
    reset();
  };

  return (
    <>
      <section className="bg-surface">
        <div className="container-app py-16 md:py-20">
          <p className="eyebrow"><FishIcon className="h-3.5 w-6" /> Contato</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-primary-deep sm:text-5xl">
            Vamos conversar. Estamos aqui por você.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Dúvidas, pedidos de oração, visitas: escreva pra gente. Respondemos com carinho.
          </p>
        </div>
      </section>

      <section className="container-app py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-soft p-6 sm:p-8"
            noValidate
          >
            <h2 className="font-display text-2xl font-semibold text-primary-deep">
              Envie sua mensagem
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha o formulário — abriremos o WhatsApp para concluir o envio.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-primary-deep">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  autoComplete="name"
                  {...register("nome")}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.nome && <p className="mt-1 text-xs text-live">{errors.nome.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-deep">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.email && <p className="mt-1 text-xs text-live">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-primary-deep">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={5}
                  {...register("mensagem")}
                  className="mt-2 w-full resize-y rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.mensagem && <p className="mt-1 text-xs text-live">{errors.mensagem.message}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto">
                {isSubmitting ? "Enviando…" : "Enviar mensagem"}
              </button>

              {sent && (
                <div className="flex items-center gap-2 rounded-lg bg-primary-soft p-3 text-sm text-primary-deep">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Mensagem preparada! Se o WhatsApp não abriu, confira o bloqueador de popups.
                </div>
              )}
            </div>
          </form>

          <div className="space-y-4">
            <div className="card-soft p-6">
              <h2 className="font-display text-xl font-semibold text-primary-deep">Onde estamos</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>R. Itamanduaba, 36 — Jd. Umarizal, São Paulo — SP, 05755-140</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+551125337770" className="hover:text-primary">(11) 2533-7770</a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="https://wa.me/5511990212279" target="_blank" rel="noreferrer" className="hover:text-primary">
                    WhatsApp: (11) 99021-2279
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:comcristoparaasnacoes@gmail.com" className="break-all hover:text-primary">
                    comcristoparaasnacoes@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <AtSign className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="https://instagram.com/comunidadeccn" target="_blank" rel="noreferrer" className="hover:text-primary">
                    @comunidadeccn
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Mapa da CCN"
                src="https://www.google.com/maps?q=R.+Itamanduaba,+36+-+Jardim+Umarizal,+São+Paulo&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
