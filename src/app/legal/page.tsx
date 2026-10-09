import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { legalDocuments } from "@/lib/legal";

export const metadata: Metadata = {
    title: "Legal & Trust",
    description:
        "Políticas, disclosures e princípios institucionais da Aurora Meridian.",
    alternates: {
        canonical: "/legal",
    },
};

export default function LegalPage() {
    return (
        <>
            <Section
                aria-labelledby="legal-title"
                className="border-b border-border-subtle pt-24 lg:pt-32"
            >
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p
                        aria-hidden="true"
                        className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                    >
                        08
                    </p>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Legal & Trust
                        </p>

                        <h1
                            id="legal-title"
                            className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary"
                        >
                            Confiança também precisa de estrutura.
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                            Políticas, princípios e informações que ajudam a 
                            compreender como a Aurora Meridian trata risco,
                            integridade, informação e relacionamento
                            institucional.
                        </p>
                    </Reveal>
                </div>
            </Section>

            <Section>
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Documentos
                        </p>
                    </div>

                    <div>
                        <div className="border-t border-border">
                            {legalDocuments.map((document) => (
                                <Reveal key={document.slug}>
                                    <Link 
                                        href={`/legal/${document.slug}`}
                                        className={[
                                            "group grid gap-06 border-b border-border py-8",
                                            "lg:grid-cols-[4rem_minmax(16rem,0.8fr)_minmax(0,1fr)_auto]",
                                            "lg:items-center lg:gap-8",
                                            "focus-visible:outline-2 focus-visible:outline-offset-4",
                                            "focus-visible:outline-focus",
                                        ].join(" ")}    
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                        >
                                            {document.number}
                                        </span>

                                        <span className="font-editorial text-2xl text-text-primary sm:text-3xl">
                                            {document.title}
                                        </span>

                                        <span className="max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
                                            {document.description}
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="text-text-secondary transition-transform duration-fast group-hover:translate-x-1"
                                        >
                                            →
                                        </span>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="border-t border-border">
                <div className="grid gap-10 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                        Princípio
                    </p>

                    <Reveal>
                        <div>
                            <h2 className="max-w-4xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl lg:text-6xl">
                                Compliance não é uma camada adicionada depois.
                            </h2>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary">
                                Integridade, risco, proteção da informação e
                                responsabilidade fazem parte da forma como uma
                                instituição de investimento constrói confiança.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </Section>
        </>
    );
}