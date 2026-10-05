import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Estratégias",
    description:
        "Conheça as áreas de investimento da Aurora Meridian e como cada estratégia contribui para uma plataforma institucional complementar.",
    alternates: {
        canonical: "/strategies",
    },
};

const platform = [
    {
        number: "01",
        title: "Macro",
        logic:
            "Identificar e expressar oportunidades geradas por mudanças de regime macroeconômico, política monetária, inflação, atividade e fluxos de capital.",
        scope:
            "Uma abordagem multiativos que conecta a leitura de cenário à construção de posições com horizonte e risco definidos.",
        markets:
            "Juros, moedas, commodities e outros mercados líquidos relevantes ao cenário.",
        role:
            "É uma das principais expressões da inteligência macro da plataforma.",
    },
    {
        number: "02",
        title: "Rates & FX",
        logic:
            "Explorar relações entre juros, moedas, expectativas de política monetária e diferenciais entre mercados.",
        scope:
            "Leitura de curvas, regimes de política e movimentos relativos para identificar assimetrias de preço e expectativa.",
        markets:
            "Taxas de juros, curvas, moedas e instrumentos relacionados.",
        role:
            "Conecta a leitura macro à expressão de oportunidades em rates e FX.",
    },
    {
        number: "03",
        title: "Credit",
        logic:
            "Avaliar risco de crédito, prêmio, estrutura e assimetria antes de comprometer capital.",
        scope:
            "Análise fundamental, cenários de crédito, estrutura de capital e relações de valor relativo.",
        markets:
            "Crédito e instrumentos de renda fixa e valor relativo relevantes à tese.",
        role:
            "Amplia a plataforma para oportunidades em crédito com disciplina de risco.",
    },
    {
        number: "04",
        title: "Global Opportunities",
        logic:
            "Conectar sinais locais e globais para identificar oportunidades que atravessam mercados e geografias.",
        scope:
            "Análise cross-market orientada por regimes, relações de preço e mudanças de expectativa.",
        markets:
            "Estados Unidos, Europa, mercados emergentes, commodities globais e moedas.",
        role:
            "Expande o universo de investimento sem perder a disciplina central da plataforma.",
    },
];

const strategies = [
    {
        number: "01",
        title: "Aurora Meridian Macro",
        description:
            "Estratégia macro multiativos orientada por regimes, cenários e assimetrias entre preço e expectativa.",
        exposure:
            "Exposições em juros, moedas, commodities e outros mercados líquidos conforme a tese.",
        logic:
            "Transformar leitura macro em posições com convicção, horizonte e risco definidos.",
        risk:
            "Cenários, dimensionamento, limites e reavaliação contínua da tese.",
    },
    {
        number: "02",
        title: "Aurora Meridian Relative Value",
        description:
            "Estratégia orientada por relações de valor relativo e assimetrias entre ativos, mercados e estruturas.",
        exposure:
            "Relações entre curvas, moedas, crédito e outros instrumentos compatíveis com a oportunidade.",
        logic:
            "Buscar discrepâncias entre preço, expectativa e fundamentos que possam ser expressas de forma estruturada.",
        risk:
            "Controle de exposição, cenários de convergência e divergência e monitoramento da relação de valor.",
    },
    {
        number: "03",
        title: "Aurora Meridian Credit",
        description:
            "Estratégia dedicada à análise e construção de oportunidades em crédito com disciplina de risco.",
        exposure:
            "Crédito, renda fixa e estruturas relacionadas ao perfil de cada oportunidade.",
        logic:
            "Combinar análise de crédito, estrutura, prêmio e cenários para selecionar assimetrias.",
        risk:
            "Qualidade do crédito, liquidez, concentração, cenários de estresse e monitoramento da tese.",
    },
    {
        number: "04",
        title: "Aurora Meridian Global",
        description:
            "Estratégia orientada por oportunidades globais e relações cross-market.",
        exposure:
            "Mercados desenvolvidos e emergentes, moedas, juros e commodities globais.",
        logic:
            "Conectar diferentes geografias e mercados para identificar oportunidades que não aparecem em uma única perspectiva.",
        risk:
            "Risco de mercado, correlação, liquidez, exposição cambial e reavaliação de cenários.",
    },
];

export default function StrategiesPage() {
    return (
        <>
            <Section className="pt-24 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        03
                    </p>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Estratégias
                        </p>

                        <h1 className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary">
                            Uma plataforma construída sobre quatro áreas
                            complementares.
                        </h1>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Plataforma
                        </p>
                    </Reveal>

                    <div className="border-t border-border">
                        {platform.map((item, index) => (
                            <Reveal
                                key={item.number}
                                delay={
                                    index === 0
                                        ? "instant"
                                        : index === 1
                                            ? "medium"
                                            : "slow"
                                }
                            >
                                <article className="grid gap-8 border-b border-border py-10 lg:grid-cols-[4rem_minmax(12rem,0.65fr)_minmax(0,1fr)] lg:gap-10 lg:py-12">
                                    <p
                                        aria-hidden="true"
                                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                    >
                                        {item.number}
                                    </p>

                                    <div>
                                        <h2 className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                                            {item.title}
                                        </h2>
                                    </div>

                                    <div className="grid gap-8 sm:grid-cols-2">
                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                                Lógica
                                            </p>

                                            <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                                {item.logic}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                                Escopo
                                            </p>

                                            <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                                {item.scope}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                                Mercados
                                            </p>

                                            <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                                {item.markets}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                                Papel na plataforma
                                            </p>

                                            <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Estratégias
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <h2 className="max-w-4xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                                Expressões distintas de uma mesma disciplina de
                                investimento.
                            </h2>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary">
                                Cada estratégia possui uma lógica própria, mas
                                compartilha a mesma exigência de clareza de
                                tese, estruturação e disciplina de risco.
                            </p>
                        </Reveal>

                        <div className="mt-16 border-t border-border">
                            {strategies.map((strategy, index) => (
                                <Reveal
                                    key={strategy.number}
                                    delay={
                                        index === 0
                                            ? "instant"
                                            : index === 1
                                                ? "medium"
                                                : "slow"
                                    }
                                >
                                    <article className="grid gap-8 border-b border-border py-10 lg:grid-cols-[4rem_minmax(16rem,0.75fr)_minmax(0,1fr)] lg:gap-10 lg:py-12">
                                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                            {strategy.number}
                                        </p>

                                        <div>
                                            <h3 className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                                                {strategy.title}
                                            </h3>

                                            <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
                                                {strategy.description}
                                            </p>
                                        </div>

                                        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
                                            <div>
                                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                                    Exposições
                                                </p>

                                                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                                    {strategy.exposure}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                                    Lógica
                                                </p>

                                                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                                    {strategy.logic}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                                    Risco
                                                </p>

                                                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                                                    {strategy.risk}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
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
                                Conheça nossa plataforma de acesso
                                institucional.
                            </h2>

                            <Link
                                href="/opportunity/access"
                                className="group mt-8 inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary"
                            >
                                Solicitar acesso

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
