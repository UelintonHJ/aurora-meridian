import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    tone?: "neutral" | "gold" | "signal";
};

const toneClasses = {
    neutral:
        "border-border bg-surface text-text-secondary",
    gold:
        "border-accent-gold/40 bg-accent-gold/10 text-accent-light",
    signal:
        "border-signal/30 bg-signal/10 text-signal",
};

export function Badge({
    tone = "neutral",
    className = "",
    ...props
}: BadgeProps) {
    return (
        <span
            className={[
                "inline-flex items-center rounded-full border px-3 py-1",
                "text-xs font-medium uppercase tracking-wider",
                toneClasses[tone],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        />
    );
}