import { Section } from "@/components/ui/Section";
import { Reveal } from "./motion/Reveal";

const pillars = [
    {
        number: "01",
        title: "Macro Thinking",
        description: "Understanding regimes before positioning capital.",
    },
    {
        number: "02",
        title: "Trade Structuring",
        description: "Turning ideas into asymmetric opportunities.",
    },
    {
        number: "03",
        title: "Risk Management",
        description:
            "Every position begins with an understanding of what can go wrong.",
    },
];

const process = [
    "Observe",
    "Challenge",
    "Structure",
    "Allocate",
    "Monitor",
    "Adapt",
];

export function InvestmentApproach() {
    return (
        <Section
            id="approach"
            aria-labelledby="approach-title"
            className="border-t border-border-subtle"
        >
            <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                    <Reveal delay="instant">
                        <p
                            aria-hidden="true"
                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                        >
                            02
                        </p>
                    </Reveal>
                </div>

                <div>
                    <Reveal delay="medium">
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Abordagem
                        </p>
                    </Reveal>

                    <h2
                        id="approach-title"
                        className="sr-only"
                    >
                        Nossa abordagem de investimento
                    </h2>

                    <div className="mt-12 border-t border-border-subtle">
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
                                <article
                                    key={pillar.number}
                                    className="grid gap-6 border-b border-border-subtle py-8 md:grid-cols-[4rem_minmax(0,1fr)_minmax(16rem,0.7fr)] md:items-start md:gap-8 lg:py-10"
                                >
                                    <p
                                        aria-hidden="true"
                                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                    >
                                        {pillar.number}
                                    </p>

                                    <p className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                        {pillar.title}
                                    </p>

                                    <p className="max-w-md text-base leading-relaxed text-text-secondary">
                                        {pillar.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-20">
                        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                    Investment Process
                                </p>
                            </div>

                            <div>
                                <Reveal delay="medium">
                                    <div
                                        aria-label="Processo de investimento"
                                        className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm text-text-primary sm:gap-x-4"
                                    >
                                        {process.map((step, index) => (
                                            <div
                                                key={step}
                                                className="flex items-center gap-3"
                                            >
                                                <span>{step}</span>

                                                {index < process.length - 1 && (
                                                    <span
                                                        aria-hidden="true"
                                                        className="text-text-secondary"
                                                    >
                                                        →
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </Reveal>

                                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
                                    Cada hipótese é observada, questionada,
                                    estruturada e dimensionada segundo sua
                                    convicção e seu risco. A tese continua
                                    sendo reavaliada à medida que as evidências
                                    mudam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}