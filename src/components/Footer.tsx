import Link from "next/link";

import { Container } from "@/components/ui/Container";

const CTA_HREF = "/opportunity/access";

export function Footer() {
    return (
        <footer className="border-t border-border bg-canvas">
            <Container>
                <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
                    <div className="max-w-md">
                        <Link
                            href="/"
                            className={[
                                "inline-flex rounded-sm",
                                "text-lg font-medium text-text-primary",
                                "focus-visible:outline-2",
                                "focus-visible:outline-offset-3",
                                "focus-visible:outline-focus",
                            ].join(" ")}
                        >
                            Aurora Meridian
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary">
                            Gestão profissional de recursos orientada por
                            inteligência macroeconômica, disciplina de risco e
                            perspectiva global.
                        </p>
                    </div>

                    <div>
                        <p>
                            Institucional
                        </p>

                        <address className="mt-4 not-italic text-sm leading-relaxed text-text-secondary">
                            Avenida Brigadeiro Faria Lima, 2229
                            <br />
                            14º andar
                            <br />
                            Jardim Paulistano
                            <br />
                            São Paulo - SP
                            <br />
                            01452-906
                            <br />
                            Brasil
                        </address>
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Contato
                        </p>

                        <div>
                            <a
                                href="mailto:contact@aurorameridian.com.br"
                                className={[
                                    "block text-sm text-text-secondary",
                                    "transition-colors duration-fast ease-standard",
                                    "hover:text-text-primary",
                                    "focus-visible:outline-2",
                                    "focus-visible:outline-offset-3",
                                    "focus-visible:outline-focus",
                                ].join(" ")}
                            >
                                contact@aurorameridian.com.br
                            </a>

                            <a
                                href="tel:+551130427280"
                                className={[
                                    "mt-2 block text-sm text-text-secondary",
                                    "transition-colors duration-fast ease-standard",
                                    "hover:text-text-primary",
                                    "focus-visible:outline-2",
                                    "focus-visible:outline-offset-3",
                                    "focus-visible:outline-focus",
                                ].join(" ")}
                            >
                                +55 11 3042-7280
                            </a>

                            <Link
                                href={CTA_HREF}
                                className={[
                                    "inline-flex pt-3 text-sm text-text-primary",
                                    "transition-colors duration-fast ease-standard",
                                    "hover:text-text-secondary",
                                    "focus-visible:outline-2",
                                    "focus-visible:outline-offset-3",
                                    "focus-visible:outline-focus",
                                ].join(" ")}
                            >
                                Solicitar acesso →
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                            Legal & Trust
                        </p>

                        <Link 
                            href="/legal"
                                className={[
                                    "mt-4 inline-flex text-sm text-text-secondary",
                                    "transition-colors duration-fast ease-standard",
                                    "hover:text-text-primary",
                                    "focus-visible:outline-2",
                                    "focus-visible:outline-offset-3",
                                    "focus-visible:outline-focus",
                                ].join(" ")}
                        >
                            Políticas e disclosures →
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-border-subtle py-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Aurora Meridian Gestão de Recursos Ltda.
                    </p>

                    <p>
                        Built in Brazil. Connected to global markets.
                    </p>
                </div>
            </Container>
        </footer>
    );
}