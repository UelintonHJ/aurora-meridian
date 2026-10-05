import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Abordagem",
    description:
        "Entenda como a Aurora Meridian transforma leitura de cenário em decisões de capital disciplinadas.",
    alternates: {
        canonical: "/approach",
    },
};

const pillars = [
    {
        number: "01",
        title: "Macro Thinking",
        description:
            "Entender regimes antes de posicionar capital. Pesquisa, análise, debate e challenge orientam a leitura de política monetária, inflação, atividade, crédito, commodities, fluxos de capital e mercados globais.",
    },
    {
        number: "02",
        title: "Trade Structuring",
        description:
            "Transformar hipóteses em oportunidades assimétricas. Cada ideia precisa ser convertida em uma estrutura de investimento compatível com a convicção, o horizonte e os riscos identificados.",
    },
    {
        number: "03",
        title: "Risk Management",
        description:
            "Cada posição começa pela compreensão do que pode dar errado. O risco participa da construção da tese, do dimensionamento do capital, dos limites e do monitoramento contínuo.",
    },
];

const process = [
    {
        number: "01",
        title: "Observe",
        description: "Entender o ambiente.",
    },
    {
        number: "02",
        title: "Challenge",
        description: "Questionar o consenso.",
    },
    {
        number: "03",
        title: "Structure",
        description: "Transformar uma hipótese em posição com risco definido.",
    },
    {
        number: "04",
        title: "Allocate",
        description: "Dimensionar capital de acordo com convicção e risco.",
    },
    {
        number: "05",
        title: "Monitor",
        description: "Reavaliar continuamente a tese.",
    },
    {
        number: "06",
        title: "Adapt",
        description: "Mudar quando as evidências mudam.",
    },
];

const riskDisciplines = [
    "Scenario analysis",
    "Stress testing",
    "Position sizing",
    "Risk limits",
    "Monitoring",
    "Thesis reassessment",
];

const opportunityMap = [
    {
        number: "01",
        title: "Sinal",
        description: 
            "Identificar uma mudança relevante ao ambiente ou uma relação que merece investigação.",
    },
    {
        number: "02",
        title: "Oportunidade",
        description:
            "Avaliar onde uma assimetria pode existir entre preço, expectativa, risco e cenário.",
    },
    {
        number: "03",
        title: "Tese",
        description:
            "Estruturar uma hipótese clara sobre o que precisa acontencer e por quê.",
    },
    {
        number: "04",
        title: "Estrutura",
        description:
            "Transformar a hipótese em uma posição com horizonte, exposição e condições definidos.",
    },
    {
        number: "05",
        title: "Risco",
        description:
            "Definir o que pode dar errado, quanto capital pode ser comprometido e quais evidências invalidaram a tese.",
    },
    {
        number: "06",
        title: "Papel no portfólio",
        description: 
            "Entender como a posição contribui para o conjunto de exposições e para o risco total do portfólio.",
    },
];

export default function ApproachPage() {
    return (
        <>
            <Section className="pt-24 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem, 0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        01
                    </p>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Abordagem
                        </p>

                        <h1 className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary">
                            Como transformamos leitura de cenário em decisões
                            de capital disciplinadas.
                        </h1>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Três pilares
                        </p>
                    </Reveal>

                    <div className="border-t border-border">
                        {pillars.map((pillar, index) => (
                            <Reveal
                                key={pillar.number}
                                delay={
                                    index === 0
                                        ? "instant"
                                        : index === 1
                                            ? "medium"
                                            : "slow"
                                }
                            >
                                <article className="grid gap-6 border-b border-border py-10 md:grid-cols-[4rem_minmax(0,1fr)_minmax(16rem,0.8fr)] md:items-start md:gap-8 lg:py-12">
                                    <p
                                        aria-hidden="true"
                                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                    >
                                        {pillar.number}
                                    </p>

                                    <h2 className="max-w-xl font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                        {pillar.title}
                                    </h2>

                                    <p className="max-w-md text-base leading-relaxed text-text-secondary">
                                        {pillar.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <Reveal>
                            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                Investment Process
                            </p>
                        </Reveal>
                    </div>

                    <div>
                        <Reveal>
                            <h2 className="max-w-3xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                                Uma hipótese percorre um processo antes de se
                                tornar capital alocado.
                            </h2>
                        </Reveal>

                        <div className="mt-16 border-t border-border">
                            {process.map((step, index) => (
                                <Reveal
                                    key={step.number}
                                    delay={
                                        index < 2
                                            ? "instant"
                                            : index < 4
                                                ? "medium"
                                                : "slow"
                                    }
                                >
                                    <article className="relative grid gap-5 border-b border-border py-8 md:grid-cols-[4rem_minmax(10rem,0.5fr)_minmax(0,1fr)] md:items-start md:gap-8">
                                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                            {step.number}
                                        </p>

                                        <h3 className="font-editorial text-2xl text-text-primary sm:text-3xl">
                                            {step.title}
                                        </h3>

                                        <p className="max-w-xl text-base leading-relaxed text-text-secondary">
                                            {step.description}
                                        </p>

                                        {index < process.length - 1 && (
                                            <span
                                                aria-hidden="true"
                                                className="mt-3 text-text-secondary md:absolute md:-botom-3 md:left-4 md:mt-0"
                                            >
                                                ↓
                                            </span>
                                        )}
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
                            Risk Discipline
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="max-w-4xl font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                O risco não é uma etapa posterior à decisão.
                                Ele faz parte da própria decisão.
                            </p>
                        </Reveal>

                        <div className="mt-16 grid gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
                            {riskDisciplines.map((item, index) => (
                                <Reveal
                                    key={item}
                                    delay={
                                        index % 3 === 0
                                            ? "instant"
                                            : index % 3 === 1
                                                ? "medium"
                                                : "slow"
                                    }
                                >
                                    <article className="min-h-40 bg-canvas p-7 sm:min-h-48 sm:p-8">
                                        <p
                                            aria-hidden="true"
                                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <h3 className="mt-12 font-editorial text-2xl text-text-primary sm:text-3xl">
                                            {item}
                                        </h3>
                                    </article>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay="medium">
                            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-text-secondary">
                                A disciplina de risco acompanha a decisão desde
                                a construção da hipótese até o papel da posição
                                no portfólio. Cenários são testados, exposições
                                dimensionadas e teses reavaliadas conforme as
                                evidências evoluem.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Opportunity Map
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <h2 className="max-w-4xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                                Da inteligência de mercado ao papel de uma
                                oportunidade no portfólio.
                            </h2>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary">
                                O Opportunity Map torna observável uma parte do
                                processo de investimento sem transformar a
                                estratégia em uma caixa-preta nem revelar
                                informações proprietárias.
                            </p>
                        </Reveal>

                        <div className="mt-16 border-t border-border">
                            {opportunityMap.map((item, index) => (
                                <Reveal
                                    key={item.number}
                                    delay={
                                        index % 3 === 0
                                            ? "instant"
                                            : index % 3 === 1
                                                ? "medium"
                                                : "slow"
                                    }
                                >
                                    <article className="grid gap-5 border-b border-border py-8 md:grid-cols-[4rem_minmax(12rem,0.55fr)_minmax(0,1fr)] md:items-start md:gap-8">
                                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                            {item.number}
                                        </p>

                                        <h3 className="font-editorial text-2xl text-text-primary sm:text-3xl">
                                            {item.title}
                                        </h3>

                                        <p className="max-w-xl text-base leading-relaxed text-text-secondary">
                                            {item.description}
                                        </p>
                                    </article>
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay="medium">
                            <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-xs uppercase tracking-wider text-text-secondary">
                                {opportunityMap.map((item, index) => (
                                    <div
                                        key={item.number}
                                        className="flex items-center gap-4"
                                    >
                                        <span>{item.title}</span>

                                        {index < opportunityMap.length - 1 && (
                                            <span aria-hidden="true">→</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
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
                                Explore as áreas em que transformamos essa
                                abordagem em estratégias de investimento.
                            </h2>

                            <Link 
                                href="/#capabilities"
                                className="group mt-8 inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary"
                            >
                                Explorar estratégias

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