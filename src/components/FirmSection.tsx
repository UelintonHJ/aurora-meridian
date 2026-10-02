import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function FirmSection() {
    return (
        <Section
            id="firm"
            aria-labelledby="firm-title"
            className="border-t border-border-subtle"
        >
            <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                    <Reveal delay="instant">
                        <p
                            aria-hidden="true"
                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                        >
                            01
                        </p>
                    </Reveal>
                </div>


                <div className="max-w-5xl">
                    <Reveal delay="medium">
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            A firma
                        </p>

                        <h2
                            id="firm-title"
                            className="mt-6 max-w-4xl font-editorial text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-text-primary"
                        >
                            Aurora Meridian
                        </h2>
                    </Reveal>

                    <Reveal delay="slow">
                        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-text-primary sm:text-2xl">
                            Gestão independente construída a partir da inteligência
                            macroeconômica, conhecimento profundo do mercado
                            brasileiro e uma perspectiva conectada aos mercados
                            globais.
                        </p>

                        <div className="mt-16 grid gap-8 border-t border-border-subtle pt-8 sm:grid-cols-2 sm:gap-12">
                            <div>
                                <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-secondary">
                                    Presença
                                </p>

                                <p className="mt-3 text-base text-text-primary">
                                    São Paulo
                                </p>

                                <p className="text-sm text-text-secondary">
                                    Brasil
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-secondary">
                                    Categoria
                                </p>

                                <p className="mt-3 max-w-xs text-base leading-relaxed text-text-primary">
                                    Gestão Independente de Recursos
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}