import Image from "next/image";

import { Section } from "@/components/ui/Section";

const experiences = [
    {
        number: "01",
        label: "Cultura",
        title: "Cultura amplia a perspectiva.",
        description:
            "Arte, pensamento e encontro fazem parte de uma visão institucional que reconhece valor também nas relações construídas fora do ambiente financeiro.",
        image: {
            src: "/images/culture.jpeg",
            alt: "Quatro pessoas em frente a uma pintura artística abstrata exposta em um museu, com outras obras visíveis pelos corredores",
        }
    },
    {
        number: "02",
        label: "Esporte",
        title: "Esporte traduz disciplina em experiência.",
        description: 
            "Competição, preparação e horizonte de longo prazo criam pontos de contato com uma cultura orientada por disciplina e relacionamento.",
        image: {
            src: "/images/sport.jpeg",
            alt: "Três pessoas em um barco a vela em uma baía, preparando-se para velejar.",
        },
    },
];

export function CultureSports() {
    return (
        <Section
            id="culture-sports"
            aria-labelledby="culture-sports-title"
            className="border-t border-border"
        >
            <div className="space-y-16 lg:space-y-24">
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                            Culture / Sport
                        </p>
                    </div>

                    <div>
                        <h2
                            id="culture-sports-title"
                            className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
                        >
                            Capital também transforma 
                            <span className="block italic text-text-secondary">
                                o que está ao redor.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
                            Relações institucionais não se constroem apenas 
                            em torno de mercados. Cultura e esporte criam 
                            espaços para encontro, perspectiva e diálogo
                            de longo prazo.
                        </p>
                    </div>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                    {experiences.map((experience) => (
                        <article
                            key={experience.label}
                            className="group"
                        >
                            <div className="flex items-center justify-between border-t border-border pt-5">
                                <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-muted">
                                    {experience.number}
                                </p>

                                <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                                    {experience.label}
                                </p>
                            </div>

                            <div className="relative mt-6 aspect-video overflow-hidden bg-surface">
                                <Image 
                                    src={experience.image.src}
                                    alt={experience.image.alt}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-(--duration-slower) ease-(--ease-standard) motion-safe:group-hover:scale-[1.02]"
                                />
                            </div>

                            <div className="mt-6 max-w-xl">
                                <h3 className="font-display text-3xl leading-tight text-text-primary sm:text-4xl">
                                    {experience.title}
                                </h3>

                                <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                                    {experience.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <p>
                    Elementos de cultura, esporte, eventos e relacionamento
                    apresentados neste projeto fazem parte de um universo
                    institucional fictício criado exclusivamente para este
                    case de portfólio.
                </p>
            </div>
        </Section>
    );
}