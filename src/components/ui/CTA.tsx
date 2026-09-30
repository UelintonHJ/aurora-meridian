import Link from "next/link";
import type { ReactNode } from "react";

type CTAProps = {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    href: string;
    label: ReactNode;
};

export function CTA({
    eyebrow,
    title,
    description,
    href,
    label,
}: CTAProps) {
    return (
        <section className="border border-border bg-surface px-6 py-10 sm:px-8 lg:px-10">
            <div className="max-w-3xl space-y-5">
                {eyebrow ? (
                    <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                        {eyebrow}
                    </p>
                ) : null}

                <h2 className="max-w-2xl font-editorial text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                    {title}
                </h2>

                {description ? (
                    <p className="max-w-xl text-base leading-relaxed text-text-secondary">
                        {description}
                    </p>
                ) : null}

                <Link
                    href={href}
                    className={[
                        "inline-flex min-h-11 items-center justify-center",
                        "rounded-sm border border-text-primary",
                        "px-5 text-sm font-medium text-text-primary",
                        "transition-colors duration-normal ease-standard",
                        "hover:bg-text-primary hover:text-canvas",
                        "focus-visible:outline-2 focus-visible:outline-offset-3",
                        "focus-visible:outline-focus",
                    ].join(" ")}
                >
                    {label}
                </Link>
            </div>
        </section>
    );
}