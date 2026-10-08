export type LegalSection = {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
};

export type LegalDocument = {
    slug: string;
    number: string;
    title: string;
    description: string;
    sections: LegalSection[];
};

export const legalDocuments: LegalDocument[] = [
    {
        slug: "privacidade",
        number: "01",
        title: "Política de Privacidade",
        description:
            "Como a Aurora Meridian trata dados pessoais em seus canais institucionais e experiências digitais.",
        sections: [
            {
                heading: "Finalidade",
                paragraphs: [
                    "A Aurora Meridian trata dados pessoais de forma compatível com as finalidades informadas aos titulares e com as obrigações legais e regulatórias aplicáveis.",
                    "Nos canais institucionais, os dados podem ser utilizados para responder solicitações, estabelecer relacionamentos institucionais, disponibilizar informações solicitadas e manter a segurança das experiências digitais.",
                ],
            },
            {
                heading: "Princípios",
                paragraphs: [
                    "O tratamento de dados deve observar finalidade, adequação, necessidade, transparência, segurança, prevenção e responsabilização, de acordo com a legislação aplicável.",
                ],
            },
            {
                heading: "Solicitações institucionais",
                paragraphs: [
                    "Informações fornecidas em formulários de contato ou de acesso institucional são utilizadas de acordo com a finalidade da solicitação e com os requisitos aplicáveis ao relacionamento.",
                ],
            },
            {
                heading: "Segurança",
                paragraphs: [
                    "A proteção das informações faz parte da arquitetura institucional da Aurora Meridian. Medidas técnicas e organizacionais são aplicadas de acordo com a natureza das informações e os riscos envolvidos.",
                ],
            },
            {
                heading: "Direitos dos titulares",
                paragraphs: [
                    "Os titulares de dados pessoais possuem os direitos previstos em legislação aplicável. Solicitações relacionadas ao tratamento de dados devem ser encaminhadas pelos canais institucionais disponíveis.",
                ],
            },
        ],
    },

    {
        slug: "termos",
        number: "02",
        title: "Termos de Uso",
        description:
            "Condições gerais para utilização do website e de seus conteúdos institucionais.",
        sections: [
            {
                heading: "Uso do website",
                paragraphs: [
                    "Este website apresenta informações institucionais sobre a Aurora Meridian, sua abordagem de investimento, capacidades, pesquisa, cultura e canais de relacionamento.",
                    "A utilização do website deve ocorrer de acordo com a legislação aplicável e com estes Termos de Uso.",
                ],
            },
            {
                heading: "Conteúdo institucional",
                paragraphs: [
                    "Os conteúdos publicados possuem finalidade informativa e institucional. Sua disponibilização não altera a natureza ou as condições específicas de qualquer relacionamento, produto ou estratégia de investimento.",
                ],
            },
            {
                heading: "Informações de investimento",
                paragraphs: [
                    "Informações apresentadas no website não devem ser interpretados isoladamente como recomendação, oferta ou solicitação de investimento.",
                    "Informações específicas sobre estratégias, produtos e documentos podem depender do contexto do investidor e dos requisitos aplicáveis.",
                ],
            },
            {
                heading: "Propriedade intelectual",
                paragraphs: [
                    "Textos, elementos visuais, marcas, interfaces e demais conteúdos do website são protegidos pelos direitos aplicáveis e não devem ser reproduzidos ou utilizados fora das permissões correspondentes.",
                ],
            },
        ],
    },

    {
        slug: "disclosures",
        number: "03",
        title: "Disclosures",
        description:
            "Informações e limitações relevantes para a interpretação dos conteúdos institucionais.",
        sections: [
            {
                heading: "Informação institucional",
                paragraphs: [
                    "Os conteúdos deste website foram organizados para apresentar a Aurora Meridian, sua filosofia de investimento, capacidades e relacionamento institucional.",
                    "Informações específicas podem estar sujeitas a atualização, revisão ou disponibilização restrita conforme sua natureza.",
                ],
            },
            {
                heading: "Risco",
                paragraphs: [
                    "Investimentos estão sujeitos a riscos. O desempenho passado não constitui garantia de resultados futuros e decisões de investimento devem considerar as características, objetivos e riscos de cada estratégia.",
                ],
            },
            {
                heading: "Elegibidade",
                paragraphs: [
                    "O acesso a determinadas estratégias ou informações pode depender do perfil do investidor, da legislação aplicável, da documentação pertinente e das condições específicas do relacionamento.",
                ],
            },
            {
                heading: "Informações regulatórias",
                paragraphs: [
                    "Referências normativas ou institucionais apresentadas neste website não devem ser interpretadas como declaração de registro, autorização, licença ou adesão perante qualquer órgão ou entidade além daquilo que estiver formalmente identificado e aplicável.",
                ],
            },
        ],
    },

    {
        slug: "conflitos-de-interesse",
        number: "04",
        title: "Conflitos de Interesse",
        description:
            "Princípios para identificação, avaliação e tratamento de potenciais conflitos de interesse.",
        sections: [
            {
                heading: "Princípio",
                paragraphs: [
                    "Decisões de investimento e relacionamentos institucionais devem considerar potenciais conflitos de interesse desde sua identificação.",
                ],
            },
            {
                heading: "Identificação",
                paragraphs: [
                    "Potenciais conflitos podem surgir de relações comerciais, interesses econômicos, posições pessoais, relacionamentos com terceiros ou diferentes responsabilidades dentro da organização.",
                ],
            },
            {
                heading: "Tratamento",
                paragraphs: [
                    "Quando um potencial conflito for identificado, devem ser avaliadas medidas proporcionais para evitar, mitigar ou administrar seus efeitos, de acordo com as políticas e procedimentos aplicáveis.",
                ],
            },
            {
                heading: "Transparência",
                paragraphs: [
                    "Quando apropriado, informações relevantes sobre conflitos devem ser comunicadas às partes pertinentes e tratadas de forma consistente com os deveres aplicáveis.",
                ],
            },
        ],
    },

    {
        slug: "codigo-de-etica",
        number: "05",
        title: "Código de Ética",
        description: 
            "Princípios de integridade, responsabilidade e conduta que orientam a atuação institucional.",
        sections: [
            {
                heading: "Integridade",
                paragraphs: [
                    "A confiança necessária para administrar capital exige comportamento íntegro, responsável e consistente.",
                ],
            },
            {
                heading: "Independência intelectual",
                paragraphs: [
                    "Profissionais são incentivados a questionar consensos, explicitar premissas e confrontar ideias com evidências.",
                ],
            },
            {
                heading: "Responsabilidade",
                paragraphs: [
                    "Cada profissional deve compreender as responsabilidades associadas às decisões e atividades sob sua atuação.",
                ],
            },
            {
                heading: "Confidencialidade",
                paragraphs: [
                    "Informações confidenciais, estratégicas ou não públicas devem ser protegidas e utilizadas somente para finalidades autorizadas.",
                ],
            },
            {
                heading: "Conduta profissional",
                paragraphs: [
                    "A atuação profissional deve observar as normas internas, os deveres aplicáveis e os padrões de conduta esperados de uma organização que administra capital de terceiros.",
                ],
            },
        ],
    },

    {
        slug: "investimentos-pessoais",
        number: "06",
        title: "Política de Investimentos Pessoais",
        description:
            "Princípios para administrar investimentos pessoais de profissionais sujeitos a potenciais conflitos.",
        sections: [
            {
                heading: "Objetivo",
                paragraphs: [
                    "A política busca reduzir potenciais conflitos entre interesses pessoais e responsabilidades profissionais.",
                ],
            },
            {
                heading: "Princípios",
                bullets: [
                    "Evitar utilização indevida de informações não públicas.",
                    "Preservar a independência das decisões de investimentos.",
                    "Observar restrições e procedimentos internos aplicáveis.",
                    "Manter registros e evidências quando exigidos.",
                ],
            },
            {
                heading: "Informações privilegiada",
                paragraphs: [
                    "Informações não públicas relevantes não devem ser utilizadas para benefício pessoal ou de terceiros quando seu uso for proibido pela legislação ou pelas políticas aplicáveis.",
                ],
            },
        ],
    },

    {
        slug: "gestao-de-riscos",
        number: "07",
        title: "Gestão de Riscos",
        description:
            "A estrutura de risco como parte da construção, monitoramento e adaptação das decisões de investimento.",
        sections: [
            {
                heading: "Risco faz parte da decisão",
                paragraphs: [
                    "A análise de risco não ocorre depois da decisão de investimento. Ela participa da própria construção da tese, da estrutura da posição e da definição do capital alocado.",
                ],
            },
            {
                heading: "Principais dimensões",
                bullets: [
                    "Risco de mercado.",
                    "Risco de liquidez.",
                    "Risco de crédito.",
                    "Risco de concentração.",
                    "Risco operacional.",
                    "Risco relacionado à estrutura das operações.",
                ],
            },
            {
                heading: "Monitoramento",
                paragraphs: [
                    "A avaliação de risco deve acompanhar a evolução das posições, das condições de mercado, das hipóteses de investimento e dos cenários relevantes.",
                ],
            },
            {
                heading: "Cenários",
                paragraphs: [
                    "Stress testing, análise de cenários e outras ferramentas podem ser utilizadas para compreender como diferentes condições poderiam afetar portfólios e posições.",
                ],
            },
        ],
    },

    {
        slug: "prevencao-lavagem-dinheiro",
        number: "08",
        title: "Prevenção à Lavagem de Dinheiro",
        description:
            "Princípios institucionais de prevenção à lavagem de dinheiro, financiamento do terrorismo e demais ilícitos aplicáveis.",
        sections: [
            {
                heading: "Princípios",
                paragraphs: [
                    "A prevenção à lavagem de dinheiro, ao financiamento do terrorismo e ao financiamento da proliferação de armas de destruição em massa integra a estrutura de integridade e gestão de riscos da organização.",
                ],
            },
            {
                heading: "Abordagem baseada em risco",
                paragraphs: [
                    "Os controles devem considerar a natureza, o perfil e os riscos associados aos relacionamentos, operações e atividades pertinentes.",
                ],
            },
            {
                heading: "Conheça seu cliente",
                paragraphs: [
                    "Processos de identificação, qualificação e diligência devem ser aplicados conforme os requisitos legais, regulatórios e internos pertinentes.",
                ],
            },
            {
                heading: "Monitoramento",
                paragraphs: [
                    "Situações e operações que apresentem sinais de risco devem ser submetidas aos procedimentos internos aplicáveis e, quando cabível, aos tratamentos exigidos pela legislação.",
                ],
            },
        ],
    },

    {
        slug: "seguranca-da-informacao",
        number: "09",
        title: "Segurança da Informação",
        description:
            "Princípios para proteção de informações, sistemas e infraestrutura institucional.",
        sections: [
            {
                heading: "Princípio",
                paragraphs: [
                    "Segurança da informação é parte da infraestrutura institucional e deve acompanhar a criticidade dos dados, sistemas e processos protegidos.",
                ],
            },
            {
                heading: "Proteção",
                bullets: [
                    "Controle de acesso.",
                    "Proteção de credenciais e informações sensíveis.",
                    "Segregação de responsabilidade.",
                    "Monitoramento de eventos relevantes.",
                    "Gestão de vulnerabilidades e incidentes.",
                    "Continuidade e recuperação conforme criticidade.",
                ],
            },
            {
                heading: "Responsabilidade",
                paragraphs: [
                    "Segurança não é responsabilidade exclusiva da tecnologia. Todos os profissionais devem preservar as informações e seguir os controles aplicáveis às suas atividades.",
                ],
            },
        ],
    },

    {
        slug: "canal-de-denuncias",
        number: "10",
        title: "Canal de Denúncias",
        description:
            "Princípios para comunicação de situações que possam violar leis, políticas ou padrões de conduta.",
        sections: [
            {
                heading: "Finalidade",
                paragraphs: [
                    "O canal de denúncias existe para permitir o reporte responsável de situações que possam envolver violações legais, regulatórias, éticas ou de políticas internas.",
                ],
            },
            {
                heading: "Boa-fé",
                paragraphs: [
                    "Relatos devem ser realizados de boa-fé e conter, sempre que possível, informações suficientes para permitir a avaliação adequada da situação.",
                ],
            },
            {
                heading: "Confidencialidade",
                paragraphs: [
                    "Relatos devem ser tratados com confidencialidade e de acordo com os procedimentos aplicáveis.",
                ],
            },
            {
                heading: "Não retaliação",
                paragraphs: [
                    "A comunicação responsável de preocupações não deve ser utilizada como fundamento para retaliação contra pessoas que atuem de boa-fé.",
                ],
            },
            {
                heading: "Canal",
                paragraphs: [
                    "O canal institucional responsável pelo recebimento e tratamento de denúncias deve ser divulgado de forma adequada e mantido conforme a estrutura de governaça aplicável.",
                ],
            },
        ],
    },
];

export function getLegalDocument(slug: string) {
    return legalDocuments.find(
        (document) => document.slug === slug,
    );
}