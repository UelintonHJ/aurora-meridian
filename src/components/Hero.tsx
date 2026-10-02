import Link from "next/link";

import { Container } from "@/components/ui/Container";

function HeroVisual() {
    return (
        <div
            aria-hidden="true"
            className={[
                "pointer-events-none relative aspect-square w-full", 
                "max-w-152 lg:justify-self-end",
                "animate-[hero-visual-in_var(--am-motion-slow)_var(--am-motion-ease-emphasized)_both]",
                "motion-reduce:animate-none",
            ].join(" ")}
        >
            <svg
                viewBox="0 0 640 640"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full"
            >
                <defs>
                    <linearGradient
                        id="hero-flow"
                        x1="80"
                        y1="520"
                        x2="560"
                        y2="100"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop 
                            stopColor="var(--am-color-text-secondary)"
                            stopOpacity="0"
                        />
                        <stop 
                            offset="0.48"
                            stopColor="var(--am-color-text-secondary)"
                            stopOpacity="0.42"
                        />
                        <stop 
                            offset="1"
                            stopColor="var(--am-color-text-primary)"
                            stopOpacity="0.7"
                        />
                    </linearGradient>

                    <radialGradient
                        id="hero-node"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(0 0) rotate(90) scale(1)"
                    >
                        <stop 
                            stopColor="var(--am-color-text-primary)"
                        />
                        <stop 
                            offset="1"
                            stopColor="var(--am-color-text-primary)"
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>

                <path 
                    d="M36 494C132 432 126 280 224 244C302 215 342 286 410 254C486 218 484 116 604 74"
                    stroke="var(--am-color-border-strong)"
                    strokeOpacity="0.24"
                    strokeWidth="1"
                />

                <path
                    d="M22 548C116 510 184 474 216 394C250 309 226 216 314 174C391 137 444 196 508 156C550 130 574 94 618 42"
                    stroke="url(#hero-flow)"
                    strokeWidth="1"
                />

                <path 
                    d="M78 112C164 174 212 184 276 146C348 104 380 62 462 82C526 98 548 152 594 198"
                    stroke="var(--am-color-border)"
                    strokeOpacity="0.42"
                    strokeWidth="1"
                />

                <path 
                    d="M54 342C126 302 176 326 226 352C294 388 336 426 402 398C462 372 484 310 554 298C582 293 602 298 620 310"
                    stroke="var(--am-color-border-strong)"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                />

                <path 
                    d="M122 588C174 538 240 522 294 546C354 573 380 590 444 560C510 528 516 470 600 446"
                    stroke="var(--am-color-border)"
                    strokeOpacity="0.34"
                    strokeWidth="1"
                />

                <circle 
                    cx="216"
                    cy="394"
                    r="3"
                    fill="var(--am-color-text-primary)"
                    fillOpacity="0.72"
                />

                <circle 
                    cx="314"
                    cy="174"
                    r="3"
                    fill="var(--am-color-text-secondary)"
                    fillOpacity="0.75"
                />

                <circle 
                    cx="410"
                    cy="254"
                    r="3"
                    fill="var(--am-color-text-primary)"
                    fillOpacity="0.58"
                />

                <circle 
                    cx="508"
                    cy="156"
                    r="3"
                    fill="var(--am-color-text-secondary)"
                    fillOpacity="0.68"
                />

                <circle 
                    cx="444"
                    cy="560"
                    r="4"
                    fill="var(--am-color-text-primary)"
                    fillOpacity="0.86"
                />

                <circle 
                    cx="444"
                    cy="560"
                    r="16"
                    stroke="var(--am-color-text-primary)"
                    strokeOpacity="0.08"
                    strokeWidth="1"
                />

                <circle 
                    cx="444"
                    cy="560"
                    r="30"
                    stroke="var(--am-color-text-primary)"
                    strokeOpacity="0.04"
                    strokeWidth="1"
                />
            </svg>

            <div className="absolute right-[12%] top-[14.5%]">
                <div className="size-1.5 rounded-full bg-text-primary" />
            </div>

            <div className="absolute bottom-[19%] left-[14%]">
                <div className="size-1 rounded-full bg-text-secondary" /> 
            </div>

            <div 
                className={[
                    "absolute bottom-[11.5%] right-[17%]",
                    "h-px bg-border-subtle",
                    "sm:w-24",
                ].join(" ")}
            />
        </div>
    );
}

export function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className={[
                "relative isolate overflow-hidden",
                "border-b border-border-subtle"
            ].join(" ")}
        >
            <Container>
                <div className={[
                    "relative grid min-h-[calc(100svh-5rem)]",
                    "items-center gap-10",
                    "py-16 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]",
                    "lg:gap-4 lg:py-24",
                ].join(" ")}
                >
                    <div className="relative z-(--am-z-content) max-w-3xl">
                        <p
                            className={[
                                "mb-8 font-mono text-[0.6875rem]",
                                "uppercase tracking-wider text-text-secondary",
                                "animate-[hero-fade-in_var(--am-motion-medium)_var(--am-motion-ease-emphasized)_both]",
                                "motion-reduce:animate-none",
                            ].join(" ")}
                        >
                            Gestão independente • Brasil / Mercados globais
                        </p>

                        <h1
                            id="hero-title"
                            className={[
                                "max-w-4xl font-editorial",
                                "text-[clamp(3.5rem,8vw,7.75rem)]",
                                "font-semibold leading-[0.88]",
                                "tracking-[-0.035em] text-text-primary",
                                "animate-[hero-title-in_var(--am-motion-medium)_var(--am-motion-ease-emphasized)_100ms_both]",
                                "motion-reduce:animate-none",
                            ].join(" ")}
                        >
                            Capital exige{" "}
                            <span className="font-display font-medium italic">
                                perspectiva.
                            </span>
                        </h1>

                        <p
                            className={[
                                "mt-8 max-w-xl",
                                "text-base leading-relaxed",
                                "text-text-secondary sm:text-lg",
                                "animate-[hero-fade-in_var(--am-motion-medium)_var(--am-motion-ease-emphasized)_250ms_both]",
                                "motion-reduce:animate-none",
                            ].join(" ")}
                        >
                            A Aurora Meridian é uma gestora independente
                            brasileira orientada por inteligência
                            macroeconômica, disciplina de risco e perspectiva
                            global.
                        </p>

                        <div
                            className={[
                                "mt-10 flex flex-col items-start gap-3",
                                "sm:flex-row sm:items-center",
                                "animate-[hero-fade-in_var(--am-motion-medium)_var(--am-motion-ease-emphasized)_400ms_both]",
                                "motion-reduce:animate-none",
                            ].join(" ")}
                        >
                            <Link
                                href="#approach"
                                className={[
                                    "inline-flex min-h-12 items-center justify-center",
                                    "rounded-sm bg-text-primary px-6",
                                    "text-sm font-medium text-canvas",
                                    "transition-[background-color,color,transform]",
                                    "duration-normal ease-standard",
                                    "hover:bg-text-secondary",
                                    "hover:-translate-y-0.5",
                                    "focus-visible:outline-2",
                                    "focus-visible:outline-offset-3",
                                    "focus-visible:outline-focus",
                                ].join(" ")}
                            >
                                Explorar nossa abordagem
                                <span aria-hidden="true" className="ml-3">
                                    →
                                </span>
                            </Link>

                            <Link
                                href="#firm"
                                className={[
                                    "inline-flex min-h-12 items-center",
                                    "rounded-sm px-4",
                                    "text-sm font-medium text-text-secondary",
                                    "transition-[color,transform]",
                                    "duration-normal ease-standard",
                                    "hover:text-text-primary",
                                    "hover:-translate-y-0.5",
                                    "focus-visible:outline-2",
                                    "focus-visible:outline-offset-3",
                                    "focus-visible:outline-focus",
                                ].join(" ")}
                            >
                                Conhecer a Aurora
                                <span
                                    aria-hidden="true"
                                    className="ml-3"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div
                        className={[
                            "relative flex items-center justify-center",
                            "lg:min-h-144",
                        ].join(" ")}
                    >
                        <HeroVisual />
                    </div>
                </div>
            </Container>
        </section >
    );
}