import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Metric } from "@/components/ui/Metric";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Sobre",
    description: 
        "Conheça a Aurora Meridian, sua origem brasileira, perspectiva global, evolução institucional e estrutura.",
    alternates: {
        canonical: "/about",
    },
};

const institucionalModel = [
    {
        title: "Independência",
        description:
            "Uma estrutura orientada por convicção própria, pesquisa e responsabilidade sobre cada decisão.",
    },
    {
        title: "Profundidade local",
        description:
            "Conhecimento de juros, inflação, câmbio, crédito, commodities e política econômica brasileira.",
    },
    {
        title: "Perspectiva global",
        description:
            "Conexão entre o mercado brasileiro, América Latina e os principais mercados internacionais.",
    },
    {
        title: "Disciplina de risco",
        description:
            "Risco é incorporado à construção da decisão, ao dimensionamento do capital e ao monitoramento da tese.",
    },
];

const history = [
    {
        year: "2014",
        title: "Fundação",
        description:
            "Aurora Meridian é fundada em São Paulo.",
    },
    {
        year: "2016",
        title: "Macro Platform",
        description:
            "Criação formal da plataforma proprietária de Macro Research.",
    },
    {
        year: "2018",
        title: "Credit",
        description:
            "Expansão para Credit & Relative Value e criação da equipe dedicada de crédito.",
    },
    {
        year: "2020",
        title: "Risk Architecture",
        description:
            "Revisão profunda de liquidez, stress testing, construção de portfolio e análises de cenários.",
    },
    {
        year: "2022",
        title: "Global Opportunities",
        description:
            "Expansão da cobertura para Estados Unidos, Europa, commodities globais e mercados emergentes.",
    },
    {
        year: "2024",
        title: "Research & Technology",
        description:
            "Integração de Data, Research, Scenario, Portfolio Construction e Risk.",
    },
    {
        year: "2026",
        title: "Institutional Platform",
        description:
            "Consolidação da plataforma institucional com R$ 12,4 bi em AUM e 68 profissionais.",
    },
];

const leadership = [
    ["Rafael Montenegro", "Managing Partner & CIO"],
    ["Henrique Valença", "Head of Macro"],
    ["Marcelo Azevedo", "Head of Credit"],
    ["Laura Sampaio", "Head of Research & Technology"],
    ["Eduardo Nogueira", "Chief Risk Officer"],
    ["Camila Duarte", "Chief Operating Officer"],
];

export default function AboutPage() {
    return (
        <>
            <Section className="pt-24 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        01
                    </p>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Sobre a Aurora Meridian
                        </p>

                        <h1 className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary">
                            Uma gestora brasileira com perspectiva global.
                        </h1>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Fundação brasileira
                        </p>
                    </Reveal>

                    <div>
                        <Reveal delay="medium">
                            <h2 className="max-w-4xl font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                Conhecimento local como origem da vantagem.
                            </h2>
                        </Reveal>

                        <Reveal delay="slow">
                            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-text-primary sm:text-2xl">
                                A Aurora Meridian é uma gestora independente
                                brasileira construída sobre conhecimento
                                profundo do mercado local e uma perspectiva
                                conectada aos mercados globais.
                            </p>

                            <p className="mt-8 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
                                O Brasil é uma fonte de conhecimento e vantagem
                                analítica, não um limite geográfico. Nossa
                                plataforma combina inteligência
                                macroeconômica, pensamento estrutural,
                                disciplina de risco, tecnologia e execução para
                                transformar leitura de cenário em decisões de
                                capital.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Perspectiva global
                        </p>
                    </Reveal>

                    <Reveal delay="medium">
                        <div className="grid gap-10 sm:grid-cols-2">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                    Local knowledge
                                </p>

                                <p className="mt-4 max-w-md text-lg leading-relaxed text-text-primary">
                                    Uma leitura profunda de juros, inflação,
                                    câmbio, crédito, commodities e política
                                    econômica brasileira.
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                    Global perspective
                                </p>

                                <p className="mt-4 max-w-md text-lg leading-relaxed text-text-primary">
                                    Uma visão conectada a moedas, juros,
                                    commodities, mercados emergentes e
                                    oportunidades cross-market.
                                </p>
                            </div>
                        </div>

                        <p className="mt-12 max-w-3xl border-t border-border-subtle pt-8 font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                            Brazil as an edge, not a boundary.
                        </p>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Modelo institucional
                        </p>
                    </div>

                    <Reveal>
                        <div className="border-t border-border">
                            {institucionalModel.map((item, index) => (
                                <article
                                    key={item.title}
                                    className="grid gap-5 border-b border-border py-8 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8"
                                >
                                    <p
                                        aria-hidden="true"
                                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <div>
                                        <h2 className="font-editorial text-2xl text-text-primary sm:text-3xl">
                                            {item.title}
                                        </h2>

                                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-secondary">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            História
                        </p>
                    </div>

                    <Reveal delay="medium">
                        <div className="border-t border-border">
                            {history.map((item) => (
                                <article
                                    key={item.year}
                                    className="grid gap-5 border-b border-border py-8 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8"
                                >
                                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                        {item.year}
                                    </p>

                                    <div>
                                        <h2 className="font-editorial text-2xl text-text-primary sm:text-3xl">
                                            {item.title}
                                        </h2>

                                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-secondary">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Liderança
                        </p>
                    </div>

                    <Reveal delay="medium">
                        <div className="border-t border-border">
                            {leadership.map(([name, role], index) => (
                                <article
                                    key={name}
                                    className="grid gap-4 border-b border-border py-7 sm:grid-cols[4rem_minmax(0,1fr)_minmax(12rem,0.5fr)] sm:items-baseline sm:gap-8"
                                >
                                    <p
                                        aria-hidden="true"
                                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <h2 className="font-editorial text-2xl text-text-primary">
                                        {name}
                                    </h2>

                                    <p className="text-sm text-text-secondary">
                                        {role}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Escala institucional
                        </p>

                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-text-secondary">
                            Uma plataforma construída para relacionamentos
                            institucionais de longo prazo.
                        </p>
                    </div>

                    <Reveal delay="medium">
                        <div className="border-t border-border pt-8">
                            <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
                                <Metric
                                    value="R$ 12,4 bi"
                                    label="Assets Under Management"
                                    detail="Data de referência: 30 Jun 2026."
                                />

                                <Metric
                                    value="2014"
                                    label="Fundação"
                                    detail="São Paulo, Brasil."
                                />
                            </div>

                            <div className="mt-12 grid gap-12 border-t border-border-subtle pt-8 sm:grid-cols-3">
                                <Metric
                                    value="68"
                                    label="Profissionais"
                                />

                                <Metric
                                    value="320+"
                                    label="Relações institucionais"
                                />

                                <Metric
                                    value="85K+"
                                    label="Investidores alcançados"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                        Próximo capítulo
                    </p>

                    <Reveal>
                        <div>
                            <h2 className="max-w-3xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl">
                                Conheça a forma como transformamos leitura de
                                cenário em decisão.
                            </h2>

                            <Link
                                href="/#approach"
                                className="group mt-8 inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary"
                            >
                                Conheça nossa abordagem

                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-fast group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </Section>
        </>
    );
}