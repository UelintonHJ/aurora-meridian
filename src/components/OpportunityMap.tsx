"use client";

import { useEffect, useRef, useState } from "react";

import { Section } from "@/components/ui/Section";

const radarPoints = [
    { id: "consensus-one", cx: 32, cy: 42, variant: "muted" },
    { id: "consensus-two", cx: 43, cy: 56, variant: "muted" },
    { id: "consensus-three", cx: 55, cy: 34, variant: "gold" },
    { id: "opportunity", cx: 79, cy: 23, variant: "signal" },
] as const;

export function OpportunityMap() {
    const radarRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const radar = radarRef.current;

        if (!radar) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.25,
            },
        );

        observer.observe(radar);

        return () => {
            observer.disconnect();
        };
    }, []);
    
    return (
        <Section
            id="strategy"
            aria-labelledby="opportunity-map-title"
            className="overflow-hidden border-t border-border"
        >
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-20">
                <div className="relative z-10 max-w-2xl">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                        Opportunity thesis
                    </p>

                    <h2
                        id="opportunity-map-title"
                        className="mt-5 max-w-xl text-5xl font-medium leading-[0.95] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
                    >
                        O mercado vê o que está evidente.
                        <span className="mt-2 block font-display font-medium italic text-text-secondary">
                            Nós procuramos o que ainda não está no radar.
                        </span>
                    </h2>

                    <p className="mt-8 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                        Nem toda oportunidade começa onde o consenso aponta.
                        Nossa tese parte da pesquisa, da estrutura e da análise 
                        das situações que exigem uma visão diferente.
                    </p>

                    <div className="mt-10 grid max-w-md gap-6 border-t border-border pt-6 sm:grid-cols-2">
                        <div>
                            <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-muted">
                                01
                            </p>

                            <p className="mt-2 text-sm font-medium text-text-primary">
                                Consenso
                            </p>

                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                O que o mercado já consegue identificar.
                            </p>
                        </div>

                        <div>
                            <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-muted">
                                02
                            </p>

                            <p className="mt-2 text-sm font-medium text-text-primary">
                                Oportunidade
                            </p>

                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                O que exige pesquisa para ser encontrado.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    ref={radarRef}
                    className="relative mx-auto w-full max-w-3xl"
                >
                    <div className="relative aspect-square" aria-hidden="true">
                        <div className="absolute inset-[5%] rounded-full border border-border/70" />
                        <div className="absolute inset-[17%] rounded-full border border-border/60" />
                        <div className="absolute inset-[29%] rounded-full border border-border/50" />
                        <div className="absolute inset-[41%] rounded-full border border-border/40" />

                        <div className="absolute left-1/2 top-[5%] h-[90%] w-px -translate-x-1/2 bg-border/40" />
                        <div className="absolute left-[5%] top-1/2 h-px w-[90%] -translate-y-1/2 bg-border/40" />

                        <div className="absolute inset-[5%] overflow-hidden rounded-full">
                            <div 
                                className={[
                                    "absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left",
                                    "-translate-x-0.5 -translate-y-full",
                                    "bg-[conic-gradient(from_0deg,transparent_0deg,rgba(215,255,99,0.12)_18deg,transparent_48deg)]",
                                    "motion-safe:animate-[spin_14s_linear_infinite]",
                                ].join(" ")}
                            />
                        </div>

                        <svg
                            viewBox="0 0 100 100"
                            className="absolute inset-0 size-full"
                        >
                            <line 
                                x1="32"
                                y1="42"
                                x2="43"
                                y2="56"
                                pathLength="1"
                                className={[
                                    "fill-none stroke-border trasition-[stroke-dashoffset,opacity]",
                                    "duration-900 ease-(--ease-emphasized)",
                                    isVisible
                                        ? "opacity-100 [stroke-dashoffset:0"
                                        : "opacity-0 [stroke-dashoffset:1"
                                ].join(" ")}
                                strokeDasharray="1"
                                strokeWidth="0.25"
                            />

                            <line 
                                x1="43"
                                y1="56"
                                x2="55"
                                y2="34"
                                pathLength="1"
                                className={[
                                    "fill-none stroke-border transition-[stroke-dashoffset,opacity]",
                                    "delay-150 duration-900 ease-(--emphasized)",
                                    isVisible
                                        ? "opacity-100 [stroke-dashoffset:0]"
                                        : "opacity-0 [stroke-dashoffset:1]",
                                ].join(" ")}
                                strokeDasharray="1"
                                strokeWidth="0.25"
                            />

                            <line 
                                x1="55"
                                y1="34"
                                x2="79"
                                y2="23"
                                pathLength="1"
                                className={[
                                    "fill-one stroke-accent-gold transition-[stroke-dashoffset,opacity]",
                                    "delay-300 duration-1100 ease-(--emphasized)",
                                    isVisible
                                        ? "opacity-80 [stroke-dashoffset:0]" 
                                        : "opacity-0 [stroke-dashoffset:1]",
                                ].join(" ")}
                                strokeDasharray="1"
                                strokeWidth="0.3"
                            />

                            {radarPoints.map((point, index) => (
                                <circle 
                                    key={point.id}
                                    cx={point.cx}
                                    cy={point.cy}
                                    r={
                                        point.variant === "signal"
                                        ? 1.35
                                        : 0.9
                                    }
                                    className={[
                                        point.variant === "signal"
                                            ? "fill-signal"
                                            : point.variant === "gold"
                                                ? "fill-accent-gold"
                                                : "fill-text-muted",
                                        "transition-[opacity,transform]",
                                        "duration-700 ease-(--ease-emphasized)",
                                        isVisible
                                            ? "opacity-100"
                                            : "opacity-0",
                                    ].join(" ")}
                                    style={{
                                        transitionDelay: `${index * 140}ms`,
                                    }}
                                />
                            ))}

                            <circle 
                                cx="79"
                                cy="23"
                                r="4"
                                className={[
                                    "fill-none stroke-signal/20",
                                    "transition-[opacity,transform]",
                                    "duration-1000 ease-(--ease-emphasized)",
                                    isVisible
                                        ? "scale-100 opacity-100"
                                        : "scale-75 opacity-0",
                                ].join(" ")}
                            />
                        </svg>
                        
                        <div className="absolute left-[5%] top-[5%] font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                            Market field
                        </div>

                        <div className="absolute bottom-[5%] left-[5%] font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                            Consensus
                        </div>

                        <div className="absolute right-[5%] top-[5%] max-w-28 text-right font-mono text-[0.625rem] uppercase tracking-wider text-signal">
                            Beyond the radar
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}