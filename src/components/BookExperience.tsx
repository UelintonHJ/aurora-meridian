import { Section } from "@/components/ui/Section";

export function BookExperience() {
    return (
        <Section
            id="book"
            aria-labelledby="book-experience-title"
            className="border-t border-border"
        >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-20">
                <div className="mx-auto w-full max-w-sm lg:mx-0">
                    <div
                        className="relative aspect-3/4 overflow-hidden border border-border bg-surface p-6 shadow-lg"
                        aria-label="Representação editorial de uma referência bibliográfica de Howard Marks"
                    >
                        <div className="flex h-full flex-col justify-between border border-border-subtle p-6">
                            <div className="flex items-center justify-between gap-4">
                                <span className="font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                                    Aurora Meridian
                                </span>

                                <span className="font-mono text-[0.625rem] uppercase tracking-wider text-accent-gold">
                                    01
                                </span>
                            </div>

                            <div>
                                <p className="font-display text-4xl leading-[0.95] text-text-primary sm:text-5xl">
                                    O Mais Importante
                                </p>

                                <p className="mt-1 font-display text-4xl leading-[0.95] text-text-primary sm:text-5xl">
                                    para o Investidor
                                </p>

                                <div className="mt-8 h-px w-16 bg-accent-gold" />

                                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-text-secondary">
                                    Howard Marks
                                </p>
                            </div>

                            <div className="flex items-end justify-between gap-4">
                                <span className="font-mono text-[0.5625rem] uppercase tracking-wider text-text-muted">
                                    Editorial reference
                                </span>

                                <span 
                                    className="h-2 w-2 rounded-full bg-signal"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                        Thinking / 01
                    </p>

                    <h2
                        id="book-experience-title"
                        className="mt-5 max-w-2xl font-display text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
                    >
                        O Mais Importante para o Investidor
                    </h2>

                    <p className="mt-4 text-sm font-medium uppercase tracking-wider text-text-muted">
                        Howard Marks
                    </p>

                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                        Referência editorial relacionada a pensamento de
                        investimento, risco, ciclos de mercado e disciplina
                        na tomada de decisões.
                    </p>

                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-muted">
                        Este projeto utiliza a obra apenas como referência
                        editorial. Nenhuma cópia, representação ou download da
                        obra é distribuído pelo protótipo.
                    </p>

                    <div className="mt-8 border-l border-accent-gold pl-5">
                        <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                            Distribution status
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                            Conteúdo integral não autorizado para distribuição
                            neste case.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}