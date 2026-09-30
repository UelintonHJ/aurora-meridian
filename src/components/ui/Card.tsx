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
                "border border-border bg-surface p-6",
                interactive
                    ? [
                        "transition-colors duration-normal ease-standard",
                        "hover:border-border-strong hover:bg-surface-elevated",
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