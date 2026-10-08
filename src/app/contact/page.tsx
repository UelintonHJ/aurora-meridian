import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Contato",
    description:
        "Entre em contato com a Aurora Meridian para assuntos institucionais, acessp a estratégias e oportunidades profissionais.",
    alternates: {
        canonical: "/contact",
    },
};

const contactChannels = [
    {
        number: "01",
        title: "Contato geral",
        description:
            "Para assuntos institucionais, informações corporativas e demais solicitações relacionadas à Aurora Meridian.",
        content: (
            <>
                <a 
                    href="mailto:contact@aurorameridian.com.br"
                    className="text-text-primary underline decoration-border-strong underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                >
                    contact@aurorameridian.com.br
                </a>

                <a 
                    href="tel:+551130427280"
                    className="mt-3 block text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"    
                >
                    +55 11 3042-7280
                </a>
            </>
        ),
    },
    {
        number: "02",
        title: "Acesso institucional",
        description:
            "Para investidores e instituições interessados em conhecer nossas estratégias e estabelecer uma relação institucional.",
        content: (
            <Link 
                href="/opportunity/access"
                className="group inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
                Solicitar acesso

                <span
                    aria-hidden="true"
                    className="transition-transform duration-fast group-hover:translate-x-1"
                >
                    →
                </span>
            </Link>
        ),
    },
    {
        number: "03",
        title: "Carreiras",
        description:
            "Para profissionais interessados em conhecer nossa cultura, ambiente intelectual e oportunidades.",
        content: (
            <Link 
                href="/careers"
                className="group inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
            >
                Conhecer carreiras

                <span
                    aria-hidden="true"
                    className="transition-transform duration-fast group-hover:translate-x-1"
                >
                    →
                </span>
            </Link>
        ),
    },
];

export default function ContactPage() {
    return (
        <>
            <Section className="pt-24 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        07
                    </p>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Contato
                        </p>

                        <h1 className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary">
                            O próximo passo começa com uma conversa.
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                            Diferentes necessidades exigem diferentes formas
                            de relacionamento. Escolha o canal mais adequado
                            para sua situação.
                        </p>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[min(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Canais
                        </p>
                    </Reveal>

                    <div className="border-t border-border">
                        {contactChannels.map((channel, index) => (
                            <Reveal
                                key={channel.number}
                                delay={
                                    index === 0
                                    ? "instant"
                                    : index === 1
                                        ? "medium"
                                        : "slow"
                                }
                            >
                                <article className="grid gap-6 border-b border-border py-10 lg:grid-cols-[4rem_minmax(14rem,0.7fr)_minmax(0,1fr)] lg:gap-10 lg:py-12">
                                    <p
                                        aria-hidden="true"
                                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                    >
                                        {channel.number}
                                    </p>

                                    <div>
                                        <h2 className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                                            {channel.title}
                                        </h2>
                                    </div>

                                    <div>
                                        <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                                            {channel.description}
                                        </p>

                                        <div className="mt-7 text-sm leading-relaxed">
                                            {channel.content}
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid gap-10 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                        São Paulo
                    </p>

                    <Reveal>
                        <address className="not-italic">
                            <p className="max-w-3xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl">
                                Avenida Brigadeiro Faria Lima, 2229
                            </p>

                            <p className="mt-6 text-base leading-relaxed text-text-secondary">
                                14º andar
                                <br />
                                Jardim Paulistano
                                <br />
                                São Paulo — SP
                                <br />
                                01452-906
                                <br />
                                Brasil
                            </p>
                        </address>
                    </Reveal>
                </div>
            </Section>
        </>
    );
}