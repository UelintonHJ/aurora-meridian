import { Section } from "@/components/ui/Section"

const fundFacts = [
    {
        label: "Público",
        value: "Premissa ilustrativa do case",
    },
    {
        label: "Perfil",
        value: "Premissa ilustrativa do case",
    },
    {
        label: "Prazo",
        value: "Premissa ilustrativa do case",
    },
    {
        label: "Mínimo",
        value: "Premissa ilustrativa do case",
    },
    {
        label: "Emissor",
        value: "Atlas Securities — entidade fictícia",
    },
    {
        label: "Tributação",
        value: "Conforme estrutura aplicável",
    },
];

export function FundShowcase() {
    return (
        <Section
            id="opportunity"
            aria-labelledby="fund-showcase-title"
            className="border-t border-border"
        >
            <div className="space-y-16">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                            Featured strategy
                        </p>

                        <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-wider text-text-muted">
                            Opportunity / 02
                        </p>
                    </div>

                    <div>
                        <h2
                            id="fund-showcase-title"
                            className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
                        >
                            Atlas Credit Opportunity Fund
                        </h2>

                        <p className="mt-8 max-w-2xl font-display text-3xl italic leading-tight text-text-secondary sm:text-4xl">
                            Estratégia fictícia de crédito privado criada exclusivamente para este case.
                        </p>
                    </div>
                </div>

                <div className="border-y border-border py-10">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        Illustrative fund information
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
                        Todas as características abaixo são primissas
                        conceituais e não representam dados de um fundo real.
                    </p>

                    <div className="mt-6 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                        {fundFacts.map((fact) => (
                            <div
                                key={fact.label}
                                className="border-t border-border pt-5"
                            >
                                <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                                    {fact.label}
                                </p>

                                <p className="mt-3 text-base leading-relaxed text-text-primary">
                                    {fact.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}