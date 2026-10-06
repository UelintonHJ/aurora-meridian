import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Culture | Aurora Meridian",
    description:
        "Conheça os princípios que orientam a cultura da Aurora Meridian: independência intelectual, accountability, colaboração e integridade.",
    alternates: {
        canonical: "/culture",
    },
};

const principles = [
    {
        number: "01",
        title: "Independência Intelectual",
        description:
            "Questionar o consenso não é discordar por princípio. É criar espaço para testar hipóteses antes de comprometer capital.",
        detail:
            "A independência intelectual exige curiosidade, debate e disposição para revisar uma conclusão quando as evidências mudam. Convicção não significa apego à primeira hipótese.",
    },
    {
        number: "02",
        title: "Accountability",
        description:
            "Decisões de investimento carregam consequências. Cada pessoa é responsável pela qualidade do raciocínio, pela clareza da decisão e pelo resultado que dela decorre.",
        detail:
            "Accountability significa assumir responsabilidade pelo processo",
    },
    {
        number: "03",
        title: "Colaboração",
        description:
            "Boas decisões raramente surgem de uma única perspectiva. O confronto entre diferentes especialistas torna hipóteses mais fortes e decisões mais completas.",
        detail:
            "Pesquisa, gestão, risco, tecnologia e operações contribuem para uma visão mais ampla. Colaborar significa compartilhar contexto, desafiar ideias e construir sobre o trabalho dos outros.",
    },
    {
        number: "04",
        title: "Integridade",
        description:
            "Confiança institucional começa pela coerência entre o que defendemos, o que decidimos e como agimos quando ninguém está olhando.",
        detail:
            "Integridade orienta a relação com investidores, colegas, parceiros e mercados. Ela estabelece o padrão para decisões que precisam permanecer denfensáveis ao longo do tempo.",
    },
];

const leadership = [
    ["Rafael Montenegro", "Managing Partner & CIO"],
    ["Henrique Valença", "Head of Macro"],
    ["Marcelo Azevedo", "Head of Credit"],
    ["Laura Sampaio", "Head of Research & Technology"],
    ["Eduardo Nogueira", "Chief Risk Officer"],
    ["Camila Duarte", "Chief Operating Officer"],
];

export default function CulturePage() {
    return (
        <>
            <Section className="pt-24 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        05
                    </p>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Cultura
                        </p>

                        <h1 className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary">
                            Mentes independentes.
                            <br />
                            Convicção compartilhada.
                        </h1>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Princípios
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="max-w-3xl font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                A forma como pensamos define a forma como
                                trabalhamos juntos.
                            </p>
                        </Reveal>

                        <div className="mt-16 border-t border-border">
                            {principles.map((principle, index) => (
                                <Reveal
                                    key={principle.number}
                                    delay={
                                        index === 0
                                        ? "instant"
                                        : index === 1
                                            ? "medium"
                                            : "slow"
                                    }
                                >
                                    <article className="border-b border-border py-10 lg:py-12">
                                        <div className="grid gap-8 lg:grid-cols-[4rem_minmax(14rem,0.7fr)_minmax(0,1fr)] lg:gap-8">
                                            <p 
                                                aria-hidden="true"
                                                className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                            >
                                                {principle.number}
                                            </p>

                                            <h2 className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                                                {principle.title}
                                            </h2>

                                            <p className="max-w-xl text-base leading-relaxed text-text-primary sm:text-lg">
                                                {principle.description}
                                            </p>
                                        </div>

                                        <div className="mt-8 border-t border-border-subtle pt-7 lg:ml-[6rem]">
                                            <p className="max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
                                                {principle.detail}
                                            </p>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Pessoas
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <h2 className="max-w-4xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                                Liderança com responsabilidade compartilhada.
                            </h2>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary">
                                Diferentes responsabilidades contribuem para
                                uma mesma disciplina institucional: pesquisar,
                                questionar, decidir, executar e assumir a
                                responsabilidade pelas consequências.
                            </p>
                        </Reveal>

                        <div className="mt-16 border-t border-border">
                            {leadership.map(([name, role], index) => (
                                <Reveal
                                    key={name}
                                    delay={
                                        index % 3 === 0
                                        ? "instant"
                                        : index %  3 === 1
                                            ? "medium"
                                            : "slow"
                                    }
                                >
                                    <article className="grid gap-4 border-b border-border py-7 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(12rem,0.5fr)] sm:items-baseline sm:gap-8">
                                        <p
                                            aria-hidden="true"
                                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <h3 className="font-editorial text-2xl text-text-primary sm:text-3xl">
                                            {name}
                                        </h3>

                                        <p className="text-sm text-text-secondary">
                                            {role}
                                        </p>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Responsabilidade
                        </p>
                    </Reveal>

                    <Reveal delay="medium">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                    Thinking
                                </p>

                                <p className="mt-5 max-w-xl font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                                    Ideias precisam sobreviver ao questionamento
                                    antes de receber convicção.
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                    Responsibility
                                </p>

                                <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-secondary">
                                    Uma cultura de responsabilidade torna
                                    premissas explícitas, incentiva o debate e
                                    permite reconhecer quando uma decisão
                                    precisa mudar.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid gap-10 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                        Próximo capítulo
                    </p>

                    <Reveal>
                        <div>
                            <h2 className="max-w-3xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl">
                                Faça parte de um ambiente construído para
                                pensar com profundidade e responsabilidade.
                            </h2>

                            <Link
                                href="/careers"
                                className="group mt-8 inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                            >
                                Conheça nossas oportunidades

                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-fast group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </Section>
        </>
    );
}