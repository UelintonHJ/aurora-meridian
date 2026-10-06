import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { OpportunityMap } from "@/components/OpportunityMap";

export const metadata: Metadata = {
    title: "Research",
    description:
        "Research público da Aurora Meridian sobre macroeconomia, relações entre mercados e temas relevantes para Brasil e mercados globais.",
        alternates: {
            canonical: "/research",
        },
};

const researchCategories = [
    {
        number: "01",
        title: "Market Perspectives",
        description:
            "Análises sobre mudanças de regime, política monetária, inflação, atividade econômica e os fatores que podem alterar a leitura dos mercados.",
    },
    {
        number: "02",
        title: "Cross-Asset Review",
        description:
            "Leituras que conectam diferentes mercados para observar relações, divergências e assimetrias que não aparecem isoladamente.",
    },
    {
        number: "03",
        title: "Brazil Monitor",
        description:
            "Acompanhamento de temas brasileiros relevantes para juros, inflação, câmbio, atividade, política fiscal e crédito.",
    },
    {
        number: "04",
        title: "Global Macro Brief",
        description:
            "Sínteses sobre acontecimentos internacionais e seus possíveis canais de transmissão para mercados globais e emergentes.",
    },
    {
        number: "05",
        title: "Quarterly Outlook",
        description:
            "Perspectivas trimestrais que organizam os principais cenários, riscos e temas que merecem acompanhamento.",
    },
];

export default function ResearchPage() {
    return (
        <>
            <Section className="pt-24 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p
                            aria-hidden="true"
                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                        >
                            04
                        </p>
                    </div>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Research
                        </p>

                        <h1 className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary">
                            Pensamento de mercado transformado em pesquisa.
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                            Research faz parte da forma como a Aurora Meridian
                            observa mercados, questiona consensos e organiza
                            hipóteses. A publicação de conteúdo amplia a 
                            compreensão sem revelar decisões proprietárias.
                        </p>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Public Research
                        </p>
                    </Reveal>

                    <div className="border-t border-border">
                        {researchCategories.map((category, index) => (
                            <Reveal
                                key={category.number}
                                delay={
                                    index === 0
                                        ? "instant"
                                        : index === 1
                                            ? "medium"
                                            : "slow"
                                }
                            >
                                <article className="grid gap-6 border-b border-border py-9 md:grid-cols-[4rem_minmax(16rem,0.8fr)_minmax(0,1fr)] md:items-start md:gap-10 lg:py-11">
                                    <p
                                        aria-hidden="true"
                                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                    >
                                        {category.number}
                                    </p>

                                    <h2 className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                                        {category.title}
                                    </h2>

                                    <p className="max-w-xl text-base leading-relaxed text-text-secondary">
                                        {category.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            <OpportunityMap />
        </>
    );
}