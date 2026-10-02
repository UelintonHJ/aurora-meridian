import { Section } from "@/components/ui/Section";
import { Reveal } from "./motion/Reveal";

const capabilities = [
    {
        number: "01",
        title: "Macro",
        description:
            "Análise de regimes macroeconômicos e oportunidades multiativos.",
        className: "lg:row-span-2",
    },
    {
        number: "02",
        title: "Rates & FX",
        description:
            "Juros, inflação, curvas e moedas nos mercados brasileiro e global.",
    },
    {
        number: "03",
        title: "Credit",
        description:
            "Fundamental analysis, relative value e downside protection.",
    },
    {
        number: "04",
        title: "Global Opportunities",
        description:
            "Oportunidades entre mercados, ativos e geografias.",
    },
];

export function CapabilitiesSection() {
    return (
        <Section
            id="capabilities"
            aria-labelledby="capabilities-title"
            className="border-t border-border-subtle"
        >
            <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        03
                    </p>
                </div>

                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                        Capacidades
                    </p>

                    <h2
                        id="capabilities-title"
                        className="sr-only"
                    >
                        Capacidades de investimento
                    </h2>

                    <Reveal delay="medium">
                        <div className="mt-12 grid gap-px bg-border-subtle lg:grid-cols-2">
                            {capabilities.map((capability) => (
                                <article
                                    key={capability.number}
                                    className={[
                                        "flex min-h-72 flex-col justify-between bg-canvas p-7 sm:p-10 lg:min-h-80",
                                        capability.className ?? "",
                                    ].join(" ")}
                                >
                                    <div className="flex items-start justify-between gap-6">
                                        <p
                                            aria-hidden="true"
                                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                        >
                                            {capability.number}
                                        </p>
                                    </div>

                                    <div className="mt-16 max-w-xl">
                                        <h3 className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                            {capability.title}
                                        </h3>

                                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                                            {capability.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}