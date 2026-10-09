import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import type { LegalDocument as LegalDocumentData } from "@/lib/legal";

type LegalDocumentProps = {
    document: LegalDocumentData;
};

export function LegalDocument({
    document,
}: LegalDocumentProps) {
    return (
        <main>
            <Section
                aria-labelledby="legal-document-title"
                className="border-b border-border-subtle pt-24 lg:pt-32"
            >
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p
                            aria-hidden="true"
                            className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                        >
                            {document.number}
                        </p>
                    </div>

                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Legal & Trust
                        </p>

                        <h1
                            id="legal-document-title"
                            className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary"
                        >
                            {document.title}
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                            {document.description}
                        </p>
                    </Reveal>
                </div>
            </Section>

            <Section>
                <div className="grid gap-12 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                            Documento
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl">
                    {document.sections.map((section, index) => (
                        <Reveal
                            key={section.heading}
                            delay={
                                index === 0
                                    ? "instant"
                                    : index === 1
                                        ? "medium"
                                        : "slow"
                            }
                        >
                            <section
                                className={[
                                    "border-t border-border-subtle py-10",
                                    index ===
                                        document.sections.length - 1
                                        ? "border-b"
                                        : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                aria-labelledby={`legal-section-${index}`}
                            >
                                <h2
                                    id={`legal-section-${index}`}
                                    className="font-editorial text-3xl leading-tight text-text-primary sm:text-4xl"
                                >
                                    {section.heading}
                                </h2>

                                {section.paragraphs?.map(
                                    (paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg"
                                        >
                                            {paragraph}
                                        </p>
                                    ),
                                )}

                                {section.bullets ? (
                                    <ul className="mt-6 space-y-4">
                                        {section.bullets.map(
                                            (bullet) => (
                                                <li
                                                    key={bullet}
                                                    className="flex gap-4 text-base leading-relaxed text-text-secondary sm:text-lg"
                                                >
                                                    <span 
                                                       aria-hidden="true"
                                                       className="mt-3 size-1.5 shrink-0 rounded-full bg-text-secondary" 
                                                    />

                                                    <span>
                                                        {bullet}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                ) : null}
                            </section>
                        </Reveal>
                    ))}

                    <div className="mt-12 border-t border-border-subtle pt-8">
                        <Link 
                            href="/legal"
                            className="group inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                        >
                            Voltar para Legal & Trust

                            <span
                                aria-hidden="true"
                                className="transition-transform duration-fast group-hover:-translate-x-1"
                            >
                                ←
                            </span>
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}