import { Section } from "@/components/ui/Section";

const riskItems = [
    {
        label: "Crédito",
        description:
            "Estratégias de crédito estão sujeitas ao risco de inadimplência, deterioração da capacidade financeira dos devedores e perdas relacionadas aos ativos da carteira.",
    },
    {
        label: "Liquidez",
        description:
            "Ativos ou estruturas com liquidez restrita podem apresentar dificuldade de negociação ou exigir um horizonte maior de realização.",
    },
    {
        label: "Mercado",
        description:
            "Mudanças nas condições econômicas, taxas de juros, preços de ativos e demais fatores de mercado podem afetar o valor dos investimentos.",
    },
    {
        label: "Estrutura",
        description:
            "O resultado de uma estratégia depende das características específicas de cada operação, sua estrutura jurídica, garantias, fluxos de caixa e demais condições.",
    },
    {
        label: "Capital",
        description:
            "Não existe garantia de preservação do capital. Uma decisão de investimento pode resultar em perda parcial ou total dos recursos aplicados.",
    },
];

export function RiskDisclosure() {
    return (
        <Section
            id="risk-disclosure"
            aria-labelledby="risk-disclosure-title"
            className="border-t border-border"
        >
            <div className="overflow-hidden border border-border bg-surface">
                <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16 lg:p-22">
                    <div>
                        <div className="flex items-center gap-3">
                            <span 
                                aria-hidden="true"
                                className="size-2 rounded-full bg-danger"
                            />

                            <p className="text-xs font-medium uppercase tracking-wider text-danger">
                                Risk disclosure
                            </p>
                        </div>

                        <h2
                            id="risk-disclosure-title"
                            className="mt-5 max-w-xl font-display text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl"
                        >
                            Risco faz parte
                            <span className="block italic text-text-secondary">
                                da decisão.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
                            Nenhuma oportunidade de investimento deve ser
                            analisada isoladamente de seus riscos. Esta seção
                            apresenta os principais riscos considerados na 
                            estrutura conceitual deste case.
                        </p>
                    </div>

                    <div>
                        <div className="divide-y divide-border border-y border-border">
                            {riskItems.map((item, index) => (
                                <div
                                    key={item.label}
                                    className="grid gap-3 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6"
                                >
                                    <p className="font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <div>
                                        <h3 className="text-sm font-medium uppercase tracking-wider text-text-primary">
                                            {item.label}
                                        </h3>

                                        <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-border pt-6">
                            <p className="text-[0.6875rem] leading-relaxed text-text-muted">
                                <strong className="font-medium text-text-secondary">
                                    CASE FICTÍCIO
                                </strong>{" "}
                                Aurora Meridian Asset Management, Vértice
                                Distribuição de Investimentos, Atlas Securities,
                                Atlas Credit Opportunity Fund, seus números,
                                documentos, pessoas e demais elementos
                                apresentados neste projeto são fictícios e
                                foram criados exclusivamente para fins
                                educacionais e de portfólio.
                            </p>

                            <p className="mt-4 text-[0.6875rem] leading-relaxed text-text-muted">
                                Este material não constitui oferta, solicitação,
                                recomendação ou distribuição de valores
                                mobiliários. As informações apresentadas não 
                                representam promessa ou garantia de
                                rentabilidade, nem devem ser utilizadas como 
                                base para uma decisão de investimento real.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}