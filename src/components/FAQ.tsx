import { Section } from "@/components/ui/Section";

const faqItems = [
    {
        question: "O que é o Atlas Credit Opportunity Fund?",
        answer:
            "Dentro deste case conceitual, o Atlas Credit Opportunity Fund representa uma estratégia fictícia de crédito privado orientada à análise de oportunidades estruturadas. As características apresentadas no protótipo são ilustrativas e não representam um fundo real.",
    },
    {
        question: "Quem pode acessar a oportunidade?",
        answer:
            "O universo conceitual do projeto foi desenhado para investidores qualificados e sofisticados. Essa definição é parte da premissa do case e não representa uma oferta ou processo real de elegibilidade.",
    },
    {
        question: "O retorno é garantido?",
        answer:
            "Não. O objetivo do retorno apresentado no case é hipotético e não representa promessa, garantia ou expectativa de rentabilidade futura.",
    },
    {
        question: "Existe possibilidade de perda de capital?",
        answer:
            "Sim. O conceito do produto considera riscos associados a crédito, liquidez, estrutura das operações e outros fatores. A apresentação de qualquer oportunidade de investimento deve considerar os riscos antes de uma eventual decisão.",
    },
    {
        question: "O investimento possui cobertura do FGC?",
        answer: 
            "Não há cobertura do FGC prevista na estrutura conceitual apresentada neste case. A informação é uma premissa fictícia do projeto e não deve ser interpretada como característica de um produto financeiro real.",
    },
    {
        question: "Qual é o horizonte da estratégia?",
        answer:
            "O case utiliza um horizonte conceitual de longo prazo. Qualquer prazo, período de extensão ou condição de liquidez apresentado no protótipo deve ser considerado ilustrativo.",
    },
    {
        question: "Onde posso consultar o material técnico?",
        answer: 
            "O projeto prevê uma biblioteca documental com materiais conceituais, como lâmina, regulamento, política de investimentos e relatórios de riscos. Esses documentos são fictícios e não possuem validade regulatória.",
    },
    {
        question: "Como acessar o livro?",
        answer:
            "O protótipo representa uma jornada de acesso condicionada à autorização para distribuição do conteúdo. Nenhuma cópia não autorizada do livro é disponibilizada por este projeto.",
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
                                    "flex cursor-pointer list-none items-center justify-between gap-6",
                                    "py-6 text-left",
                                    "text-base font-medium text-text-primary",
                                    "marker:hidden",
                                    "focus-visible:outline-2 focus-visible:outline-offset-4",
                                    "focus-visible:outline-(--focus-color)",
                                    "sm:py-7 sm:text-lg",
                                ].join(" ")}
                            >
                                <span>
                                    <span className="mr-4 font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
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