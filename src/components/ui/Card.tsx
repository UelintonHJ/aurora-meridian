import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    interactive?: boolean;
};

export function Card({
    interactive = false,
    className = "",
    ...props
}: CardProps) {
    return (
        <div
            className={[
                "rounded-lg border border-border bg-surface p-6",
                interactive
                    ? [
                        "transition-colors duration-250",
                        "hover:border-accent-gold/50 hover:bg-surface-elevated",
                    ].join(" ")
                    : "",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        />
    );
}