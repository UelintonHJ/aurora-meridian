import Link from "next/link";

import { Section } from "./ui/Section";
import { Reveal } from "./motion/Reveal";

export function InstitutionalAccess() {
    return (
        <Section
            id="access"
            aria-labelledby="access-title"
            className="border-t border-border"
        >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
                <div>
                    <div className="flex items-center gap-4">
                        <p
                            aria-hidden="true"
                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                        >
                            06
                        </p>

                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Acesso institucional
                        </p>
                    </div>
                </div>

                <Reveal delay="medium">
                    <div className="max-w-3xl">
                        <h2
                            id="access-title"
                            className="max-w-3xl font-editorial text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
                        >
                            Capital institucional exige pensamento institucional.
                        </h2>

                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                            O acesso às estratégias da Aurora Meridian é destinado
                            a investidores elegíveis por meio de nossos
                            relacionamentos institucionais e da plataforma de
                            investimentos.
                        </p>

                        <div className="mt-10">
                            <Link
                                href="/opportunity/access"
                                className={[
                                    "group inline-flex items-center gap-4",
                                    "border border-text-primary",
                                    "px-5 py-3.5",
                                    "text-sm font-medium text-text-primary",
                                    "transition-colors duration-200",
                                    "hover:bg-text-primary hover:text-canvas",
                                    "focus-visible:outline-2 focus-visible:outline-offset-4",
                                    "focus-visible:outline-text-primary",
                                ].join(" ")}
                            >
                                <span>Solicitar acesso</span>

                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}