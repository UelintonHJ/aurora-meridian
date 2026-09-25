import { Metric } from "@/components/ui/Metric";
import { Section } from "@/components/ui/Section";

export function InstitutionalProof() {
    return (
        <Section
            id="institutional-proof"
            aria-labelledby="institutional-proof-title"
            className="border-t border-border"
        >
            <div className="space-y-12">
                <div className="grid gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-10 lg:gap-16">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                            Institutional proof
                        </p>

                        <h2
                            id="institutional-proof-title"
                            className="mt-4 max-w-xl font-display text-4xl leading-tight text-text-primary sm:text-5xl"
                        >
                            Scale is measurable. Perspective extends beyond capital.
                        </h2>
                    </div>

                    <p className="max-w-2xl self-end text-base leading-relaxed text-text-secondary sm:text-lg">
                        A fictional institutional universe built around long-term relationships, disciplined research and a broader view of value.
                    </p>
                </div>

                <div className="grid border-y border-border sm:grid-cols-2">
                    <div className="border-b border-border py-8 sm:border-b-0 sm:border-r sm:pr-8 lg:py-10">
                        <Metric 
                            value="+85 mil"
                            label="Clientes"
                            detail="Dado ilustrativo criado exclusivamente para este case."
                        />
                    </div>

                    <div className="py-8 sm:pl-8 lg:pl-10">
                        <Metric 
                            value="R$ 57 bi+"
                            label="Sob custódia"
                            detail="Dado ilustrativo criado exclusivamente para este case."
                        />
                    </div>
                </div>

                <p className="max-w-3xl text-[0.6875rem] leading-relaxed text-text-muted">
                    Dados institucionais e elementos de relacionamento apresentados nesta seção são ilustrativos e foram criados exclusivamente para este case de portfólio.
                </p>
            </div>
        </Section>
    );
}