import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const disciplines = ["Research", "Data", "Analytics", "Risk"];

const process = [
    "Data",
    "Research",
    "Scenario",
    "Portfolio Construction",
    "Risk",
];

export function ResearchTechnologySection() {
    return (
        <Section
            id="intelligence"
            aria-labelledby="intelligence-title"
            className="overflow-hidden border-t border-border"
        >
            <div className="grid gap-16 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4">
                            <p
                                aria-hidden="true"
                                className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                            >
                                04
                            </p>

                            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                                Inteligência
                            </p>
                        </div>

                        <h2
                            id="intelligence-title"
                            className="mt-8 max-w-xl font-editorial text-4xl leading-[1.05] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
                        >
                            Research, data and technology that expand the
                            capacity to understand complexity.
                        </h2>
                    </div>

                    <div className="mt-12 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-border-subtle pt-6">
                        {disciplines.map((discipline) => (
                            <div key={discipline}>
                                <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-text-secondary">
                                    {discipline}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <Reveal delay="medium">
                    <div className="relative">
                        <div
                            className="relative border-y border-border-subtle py-8 sm:py-10"
                            aria-label="Fluxo de pesquisa e investimento"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute left-4 top-0 h-full w-px bg-border-subtle sm:left-6"
                            />

                            <div className="relative space-y-0">
                                {process.map((step, index) => (
                                    <div
                                        key={step}
                                        className="relative flex min-h-20 items-center gap-6 sm:min-h-24 sm:gap-8"
                                    >
                                        <div
                                            aria-hidden="true"
                                            className="relative z-10 flex size-8 shrink-0 items-center justify-center border border-border-subtle bg-canvas sm:size-12"
                                        >
                                            <span className="font-mono text-[0.625rem] text-text-secondary sm:text-xs">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <p
                                                className={[
                                                    "font-mono text-xs uppercase tracking-wider sm:text-sm",
                                                    index === process.length - 1
                                                        ? "text-text-primary"
                                                        : "text-text-secondary",
                                                ].join(" ")}
                                            >
                                                {step}
                                            </p>
                                        </div>

                                        {index < process.length - 1 && (
                                            <div
                                                aria-hidden="true"
                                                className="absolute bottom-0 left-4 h-1/2 w-px bg-border-subtle sm:left-6"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 max-w-xl border-t border-border-subtle pt-6">
                            <Reveal delay="slow">
                                <p className="font-editorial text-2xl leading-snug text-text-primary sm:text-3xl ">
                                    A tecnologia não substitui o julgamento.
                                    <span className="mt-1 block text-text-secondary">
                                        Ela amplia sua capacidade.
                                    </span>
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}