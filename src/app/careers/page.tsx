import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Carreiras | Aurora Meridian",
    description:
        "Conheça o ambiente intelectual, a cultura de pesquisa e a estrutura multidisciplinar da Aurora Meridian.",
    alternates: {
        canonical: "/careers",
    },
};

const environment = [
    {
        number: "01",
        title: "People",
        description: 
            "Uma instituição de investimento é construída por pessoas capazes de combinar profundidade em suas áreas com disposição para questionar perspectivas diferentes.",
    },
    {
        number: "02",
        title: "Intellectual Environment",
        description:
            "O debate faz parte do processo. Hipóteses são discutidas, premissas são questionadas e convicções precisam permanecer abertas às evidências.",
    },
    {
        number: "03",
        title: "Research",
        description:
            "Pesquisa transforma informação em conhecimento acionável. Macro, crédito, mercados globais e outras disciplinas contribuem para uma compreensão mais completa dos cenários.",
    },
    {
        number: "04",
        title: "Technology",
        description:
            "Tecnologia amplia a capacidade de pesquisar, analisar dados, estruturar decisões e transformar informação em infraestrutura para a organização.",
    },
];

const disciplines = [
    "Investimento",
    "Pesquisa",
    "Tecnologia",
    "Risco",
    "Operações",
    "Funções institucionais",
];

export default function CareersPage() {
    return (
        <>
            <Section className="pt-24 lg:pt-32">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        05
                    </p>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Carreiras
                        </p>

                        <h1 className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary">
                            Construir uma instituição de investimento exige
                            pessoas capazes de pensar além do consenso.
                        </h1>
                    </Reveal>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Ambiente
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="max-w-4xl font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                Um ambiente intelectual construído para
                                transformar perguntas difíceis em decisões
                                melhores.
                            </p>
                        </Reveal>

                        <div className="mt-16 border-t border-border">
                            {environment.map((item, index) => (
                                <Reveal
                                    key={item.number}
                                    delay={
                                        index === 0
                                            ? "instant"
                                            : index === 1
                                                ? "medium"
                                                : "slow"
                                    }
                                >
                                    <article className="grid gap-6 border-b border-border py-10 lg:grid-cols-[4rem_minmax(14rem,0.7fr)_minmax(0,1fr)] lg:gap-8 lg:py-12">
                                        <p
                                            aria-hidden="true"
                                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                        >
                                            {item.number}
                                        </p>

                                        <h2 className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl">
                                            {item.title}
                                        </h2>

                                        <p className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                                            {item.description}
                                        </p>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Pesquisa + tecnologia
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <h2 className="max-w-4xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                                Conhecimento e infraestrutura precisam evoluir
                                juntos.
                            </h2>
                        </Reveal>

                        <div className="mt-16 grid gap-px bg-border-subtle sm:grid-cols-2">
                            <Reveal>
                                <article className="bg-canvas p-8 sm:min-h-72 lg:p-10">
                                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                        Research
                                    </p>

                                    <h3 className="mt-12 max-w-md font-editorial text-3xl leading-tight text-text-primary">
                                        Investigar antes de concluir.
                                    </h3>

                                    <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
                                        A pesquisa amplia o contexto necessário
                                        para compreender regimes, relações entre
                                        mercados e mudanças que podem alterar
                                        uma tese de investimento.
                                    </p>
                                </article>
                            </Reveal>

                            <Reveal delay="medium">
                                <article className="bg-canvas p-8 sm:min-h-72 lg:p-10">
                                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                        Technology
                                    </p>

                                    <h3 className="mt-12 max-w-md font-editorial text-3xl leading-tight text-text-primary">
                                        Transformar complexidade em capacidade.
                                    </h3>

                                    <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
                                        Tecnologia cria ferramentas,
                                        infraestrutura e formas mais eficientes
                                        de trabalhar com dados, pesquisa e 
                                        informação.
                                    </p>
                                </article>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border-subtle">
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Interdisciplinaridade
                        </p>
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="max-w-4xl font-editorial text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
                                Diferentes disciplinas, uma mesma responsabilidade
                                sobre a qualidade da decisão.
                            </p>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary">
                                Investimento, pesquisa, tecnologia, risco,
                                operações e funções institucionais trabalham em
                                diferentes partes da organização. A conexão
                                entre essas perspectivas ajuda a transformar 
                                conhecimento especializado em capacidade
                                institucional.
                            </p>
                        </Reveal>

                        <Reveal delay="medium">
                            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-8">
                                {disciplines.map((discipline, index) => (
                                    <div
                                        key={discipline}
                                        className="flex items-center gap-6"
                                    >
                                        <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                            {discipline}
                                        </span>

                                        {index < disciplines.length - 1 && (
                                            <span
                                                aria-hidden="true"
                                                className="text-text-secondary"
                                            >
                                                →
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid gap-10 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <Reveal>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Oportunidades
                        </p>
                    </Reveal>

                    <Reveal delay="medium">
                        <div>
                            <h2 className="max-w-4xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                                Oportunidades surgem quando a estrutura precisa
                                de novas perspectivas.
                            </h2>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary">
                                A Aurora Meridian reúne pessoas de investimento,
                                pesquisa, tecnologia, risco, operações e funções
                                institucionais.
                            </p>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
                                Quando houver oportunidades compatíveis com 
                                nossa estrutura, elas serão comunicadas pelos
                                canais institucionais apropriados.
                            </p>

                            <Link 
                                href="/opportunity/access"
                                className="group mt-10 inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                            >
                                Canal institucional

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