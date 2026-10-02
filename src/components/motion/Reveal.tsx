"use client";

import type { HTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
    delay?: "instant" | "medium" | "slow";
};

const delayValues = {
    instant: "var(--am-motion-instant)",
    medium: "var(--am-motion-medium)",
    slow: "var(--am-motion-slow)",
} as const;

export function Reveal({
    children,
    className = "",
    delay = "medium",
    ...props
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                setIsVisible(true);
                observer.disconnect();
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={[
                "transition-[opacity,transform]",
                "ease-(--am-motion-ease-emphasized)",
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                "motion-reduce:translate-y-0 motion-reduce:opacity-100",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={{
                transitionDuration: delayValues[delay],
            }}
            {...props}
        >
            {children}
        </div>
    );
}