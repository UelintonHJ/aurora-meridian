"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type AccordionProps = {
    title: ReactNode;
    children: ReactNode;
    defaultOpen?: boolean;
};

export function Accordion({
    title,
    children,
    defaultOpen = false,
}: AccordionProps) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-border">
            <button
                type="button"
                aria-expanded={open}
                className={[
                    "flex w-full items-center justify-between gap-6 py-5 text-left",
                    "text-base font-medium text-text-primary",
                    "transition-colors duration-200",
                    "hover:text-accent-light",
                    "focus-visible:outline-2 focus-visible:outline-offset-4",
                ].join(" ")}
                onClick={() => setOpen((current) => !current)}
            >
                <span>{title}</span>

                <span
                    aria-hidden="true"
                    className={[
                        "text-xl font-light text-text-primary",
                        "transition-transform duration-250",
                        open ? "rotate-45" : "rotate-0",
                    ].join(" ")}
                >
                    +
                </span>
            </button>

            <div
                hidden={!open}
                className="pb-5 text-sm leading-relaxed text-text-secondary"
            >
                {children}
            </div>
        </div>
    );
}