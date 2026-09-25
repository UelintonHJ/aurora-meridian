import { Section } from "@/components/ui/Section";

const faqItems = [
    {
        question: "O que é o Atlas Credit Opportunity Fund?",
        answer:
            "O Atlas Credit Opportunity Fund é uma entidade fictícia criada para representar, neste case, uma estratégia conceitual de crédito privado. Não existe um fundo real sendo oferecido por este projeto.",
    },
    {
        question: "Quem pode acessar a oportunidade?",
        answer:
            "O universo narrativo do case considera um público conceitual de investidores qualificados e sofisticados. Essa classificação é uma premissa de design e não representa uma verificação real de elegibilidade, qualificação ou suitability.",
    },
    {
        question: "O retorno é garantido?",
        answer:
            "Não. Qualquer objetivo ou retorno ilustrativo apresentado no universo do case é hipotético e não constitui promessa, garantia ou expectativa de rentabilidade futura.",
    },
    {
        question: "Existe possibilidade de perda de capital?",
        answer:
            "O conceito do produto considera riscos de crédito, liquidez, estrutura e perda de capital. As informações são ilustrativas e não representam uma avaliação real de risco de um produto financeiro.",
    },
    {
        question: "O investimento possui cobertura do FGC?",
        answer: 
            "A estrutura conceitual do case considera ausência de cobertura pelo FGC. Essa informação é uma premissa fictícia e não deve ser interpretada como característica de um produto financeiro real.",
    },
    {
        question: "Qual é o horizonte da estratégia?",
        answer:
            "O case utiliza um horizonte conceitual de longo prazo. Qualquer prazo, período de extensão ou condição de liquidez apresentado no protótipo deve ser considerado ilustrativo.",
    },
    {
        question: "Como funciona o suitability?",
        answer:
            "O fluxo apresentado no protótipo não realiza suitability. As perguntas da experiência são apenas ilustrativas. Uma avaliação real de adequação depende do processo, das informações e das responsabilidades aplicáveis às instituições envolvidas.",
    },
    {
        question: "Onde posso consultar o material técnico?",
        answer: 
            "O projeto prevê uma biblioteca documental com materiais conceituais, como lâmina, regulamento, política de investimentos e relatórios de riscos. Esses documentos são fictícios e não possuem validade regulatória.",
    },
    {
        question: "Como acessar o livro?",
        answer:
            "O livro apresentado na experiência é uma referência editorial real. O protótipo não disponibiliza cópia ou download da obra e não presume autorização para sua distribuição.",
    },
];

export function FAQ() {
    return (
        <Section
            id="faq"
            aria-labelledby="faq-title"
            className="border-t border-border"
        >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                        FAQ
                    </p>

                    <h2
                        id="faq-title"
                        className="mt-4 max-w-xl font-display text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl"
                    >
                        Antes de acessar,
                        <span className="block italic text-text-secondary">
                            entenda a tese.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-md text-sm leading-relaxed text-text-secondary sm:text-base">
                        Respostas objetivas às principais dúvidas sobre a 
                        estratégia conceitual, seus riscos e o universo
                        fictício apresentado neste case.
                    </p>
                </div>

                <div className="divide-y divide-border border-y border-border">
                    {faqItems.map((item, index) => (
                        <details
                            key={item.question}
                            className="group"
                        >
                            <summary
                                className={[
                                    "flex cursor-pointer list-none items-center justify-between gap-4",
                                    "py-6 text-left",
                                    "text-base font-medium text-text-primary",
                                    "marker:hidden",
                                    "focus-visible:outline-2 focus-visible:outline-offset-4",
                                    "focus-visible:outline-(--focus-color)",
                                    "sm:gap-6 sm:py-7 sm:text-lg",
                                ].join(" ")}
                            >
                                <span className="min-w-0 flex-1">
                                    <span className="mr-3 whitespace-nowrap font-mono text-[0.625rem] uppercase tracking-wider text-text-muted sm:mr-4">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    {item.question}
                                </span>

                                <span
                                    aria-hidden="true"
                                    className="shrink-0 text-xl font-light text-accent-gold transition-transform duration-(--duration-normal) ease-(--ease-standard) group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>

                            <div className="max-w-2xl pb-7 pr-8 text-sm leading-relaxed text-text-secondary sm:pb-8 sm:text-base">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </Section>
    );
}