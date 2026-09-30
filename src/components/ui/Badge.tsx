import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
    tone?: "neutral" | "accent";
};

const toneClasses = {
    neutral:
        "border-border bg-transparent text-text-secondary",
    
    accent:
        "border-border-strong bg-surface text-text-primary",
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