import Link from "next/link";

import { Container } from "@/components/ui/Container";

function Radar() {
    return (
        <div
            aria-hidden="true"
            className="relative aspect-square w-full max-w-122 sm:max-w-120 md:max-w-lg lg:max-w-136"
        >
            <div className="absolute inset-[8%] rounded-full border border-border/70" />
            <div className="absolute inset-[23%] rounded-full border border-border/60" />
            <div className="absolute inset-[38%] rounded-full border border-border/50" />

            <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-border/50" />

            <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-border/50" />

            <div className="absolute left-[24%] top-[29%] size-1.5 rounded-full bg-text-muted opacity-60" />

            <div className="absolute left-[61%] top-[38%] size-1.5 rounded-full bg-text-muted opacity-70" />

            <div className="absolute left-[69%] top-[24%] size-2 rounded-full bg-accent-gold opacity-80 animate-[hero-signal_5s_ease-in-out_infinite]" />

            <div className="absolute left-[79%] top-[72%] size-2.5 rounded-full bg-signal shadow-[0_0_24px_var(--color-signal)] animate-[hero-signal_4s_ease-in-out_infinite]" />

            <div className="absolute inset-[8%] rounded-full border border-accent-gold/10 animate-[hero-radar_12s_ease-in-out_infinite]" />

            <div className="absolute bottom-[8%] left-[8%] font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                Opportunity / 01
            </div>

            <div className="absolute right-[8%] left-[8%] font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                01 — 04
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative isolate overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_42%,rgba(200,169,107,0.07),transparent_28%),radial-gradient(circle_at_25%_80%,rgba(215,255,99,0.025),transparent_24%)]"
            />

            <Container>
                <div className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-8 lg:py-24">
                    <div className="relative z-(--z-content) max-w-3xl">
                        <p className="mb-5 text-xs font-medium uppercase tracking-wider text-accent-gold">
                            Aurora Meridian — Investment Management
                        </p>

                        <p className="mb-4 font-mono text-[0.6875rem] uppercase tracking-wider text-text-muted">
                            Opportunity / 01
                        </p>

                        <h1
                            id="hero-title"
                            className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-tight text-text-primary"
                        >
                            Beyond the{" "}
                            <span className="font-display font-medium italic">
                                market radar.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                            Capital for opportunities beyond the traditional
                            market radar, guided by research, disciplined
                            analysis and a long-term view.
                        </p>

                        <Link
                            href="/opportunity/access"
                            className={[
                                "mt-8 inline-flex min-h-12 items-center justify-center",
                                "rounded-md bg-accent-gold px-6",
                                "text-sm font-medium text-background",
                                "transition-[background-color,transform]",
                                "duration-(--duration-normal) ease-(--ease-standard)",
                                "hover:bg-accent-light hover:-translate-y-0.5",
                                "focus-visible:outline-2 focus-visible:outline-offset-3",
                                "focus-visible:outline-(--focus-color)",
                            ].join(" ")}
                        >
                            Explore the opportunity
                            <span aria-hidden="true" className="ml-3">
                                →
                            </span>
                        </Link>
                    </div>

                    <div>
                        <Radar />
                    </div>
                </div>
            </Container>
        </section>
    );
}