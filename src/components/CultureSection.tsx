import { Section } from "@/components/ui/Section";
import { Reveal } from "./motion/Reveal";

const principles = [
    {
        number: "01",
        title: "Independência intelectual",
        description: "Incentivamos pessoas a questionar o consenso.",
    },
    {
        number: "02",
        title: "Responsabilidade",
        description: "Cada ideia pertence a quem a apresenta e sustenta.",
    },
    {
        number: "03",
        title: "Colaboração",
        description:
            "As decisões mais fortes raramente vêm de uma única perspectiva.",
    },
    {
        number: "04",
        title: "Integridade",
        description: "Capital exige confiança. Confiança exige disciplina."
    },
];

export function CultureSection() {
    return (
        <Section
            id="culture"
            aria-labelledby="culture-title"
            className="border-t border-border"
        >
            <div className="grid gap-16 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
                <div>
                    <Reveal delay="instant">
                        <div className="flex items-center gap-4">
                            <p
                                aria-hidden="true"
                                className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                            >
                                05
                            </p>

                            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                                Cultura
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay="medium">
                        <h2
                            id="culture-title"
                            className="mt-8 max-w-xl font-editorial text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
                        >
                            Mentes independentes.
                            <span className="mt-2 block text-text-secondary">
                                Convicção compartilhada.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
                            Uma cultura de investimento baseada em independência
                            intelectual, responsabilidade individual, colaboração
                            e integridade.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay="slow">
                    <div className="border-t border-border">
                        {principles.map((principle) => (
                            <article
                                key={principle.number}
                                className="grid gap-5 border-b border-border py-7 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8 sm:py-9"
                            >
                                <p
                                    aria-hidden="true"
                                    className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                                >
                                    {principle.number}
                                </p>

                                <div className="max-w-2xl">
                                    <h3 className="font-editorial text-2xl leading-tight text-text-primary sm:text-3xl">
                                        {principle.title}
                                    </h3>

                                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
                                        {principle.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}