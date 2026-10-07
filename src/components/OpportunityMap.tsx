"use client";

import { useState } from "react";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

const stages = [
    {
        number: "01",
        title: "Sinal",
        label: "SIGNAL",
        description:
            "Observar mudanças no ambiente macroeconômico, relações entre mercados e sinais que merecem investigação.",
    },
    {
        number: "02",
        title: "Oportunidade",
        label: "OPPORTUNITY",
        description:
            "Identificar onde uma mudança de regime, uma divergência ou uma assimetria pode justificar uma investigação mais profunda.",
    },
    {
        number: "03",
        title: "Tese",
        label: "THESIS",
        description:
            "Estruturar uma hipótese clara sobre o que pode estar mudando, por que isso importa e quais evidências sustentariam ou enfraqueceriam a ideia.",
    },
    {
        number: "04",
        title: "Estrutura",
        label: "STRUCTURE",
        description:
            "Transformar a hipótese em uma estrutura de investimento possível, com horizonte, exposição e condições de invalidação definidos.",
    },
    {
        number: "05",
        title: "Risco",
        label: "RISK",
        description:
            "Examinar o que pode dar errado, testar cenários adversos e compreender como a exposição deve ser dimensionada diante da incerteza.",
    },
    {
        number: "06",
        title: "Papel no portfólio",
        label: "PORTFOLIO ROLE",
        description:
            "Definir qual função uma oportunidade poderia exercer dentro de um portfólio, considerando diversificação, exposição, risco e convicção.",
    },
] as const;

export function OpportunityMap() {
    const [activeStage, setActiveStage] = useState(0);

    const selectedStage = stages[activeStage];

    return (
        <Section
            id="opportunity-map"
            aria-labelledby="opportunity-map-title"
            className="border-t border-border"
        >
            <div className="grid gap-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
                <div>
                    <Reveal>
                        <div className="flex items-center gap-4">
                            <p
                                aria-hidden="true"
                                className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                            >
                                01
                            </p>

                            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                                Decision Architecture
                            </p>
                        </div>

                        <h2
                            id="opportunity-map-title"
                            className="mt-8 max-w-xl font-editorial text-4xl leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
                        >
                            Como uma ideia pode se transformar em uma decisão.
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                            O Opportunity Map mostra a arquitetura de uma
                            decisão de investimento sem reproduzir uma tese,
                            posição ou dado proprietário da Aurora Meridian.
                        </p>
                    </Reveal>

                    <Reveal delay="medium">
                        <p className="mt-8 max-w-lg border-l border-border pl-5 text-sm leading-relaxed text-text-secondary">
                            Exemplo conceitual. A experiência não representa
                            uma recomendação, posição atual ou simulação de
                            performance.
                        </p>
                    </Reveal>
                </div>

                <div>
                    <div
                        role="tablist"
                        aria-label="Etapas da arquitetura de decisão"
                        className="border-y border-border"
                    >
                        {stages.map((stage, index) => {
                            const isActive = index === activeStage;

                            return (
                                <button
                                    key={stage.number}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`oportunity-stage-${stage.number}`}
                                    id={`opportunity-tab-${stage.number}`}
                                    onClick={() => setActiveStage(index)}
                                    className={[
                                        "group grid w-full grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4",
                                        "border-b border-border-subtle py-5 text-left last-border-b-0",
                                        "transition-colors duration-normal ease-standard",
                                        "focus-visible:outline-2 focus-visible:outline-offset-2",
                                        "focus-visible:outline-focus",
                                        isActive
                                            ? "text-text-primary"
                                            : "text-text-secondary hover:text-text-primary",
                                    ].join(" ")}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={[
                                            "font-mono text-xs transition-colors duration-fast",
                                            isActive
                                                ? "text-text-primary"
                                                : "text-text-secondary",
                                        ].join(" ")}
                                    >
                                        {stage.number}
                                    </span>

                                    <span
                                        className={[
                                            "font-editorial text-2xl leading-tight sm:text-3xl",
                                            isActive
                                                ? "text-text-primary"
                                                : "text-text-secondary",
                                        ].join(" ")}
                                    >
                                        {stage.title}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className={[
                                            "text-lg transition-transform duration-fast ease-standard",
                                            isActive
                                                ? "translate-x-0 opacity-100"
                                                : "-translate-x-1 opacity-50",
                                        ].join(" ")}
                                    >
                                        →
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    <Reveal>
                        <div
                            id={`opportunity-stage-${selectedStage.number}`}
                            role="tabpanel"
                            aria-labelledby={`opportunity-tab-${selectedStage.number}`}
                            className="border-b border-border py-8 sm:py-10"
                        >
                            <div className="grid gap-8 sm:grid-cols-[minmax(8rem,0.35fr)_minmax(0,1fr)] sm:gap-12">
                                <div>
                                    <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-secondary">
                                        Etapa
                                    </p>

                                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-text-primary">
                                        {selectedStage.label}
                                    </p>
                                </div>

                                <div>
                                    <p className="max-w-2xl text-lg leading-relaxed text-text-primary sm:text-xl">
                                        {selectedStage.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}