import type { HTMLAttributes } from "react";
import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
    container?: boolean;
};

export function Section({
    children,
    className = "",
    container = true,
    ...props
}: SectionProps) {
    return (
        <section
            className={[
                "py-(--space-20) md:py-(--space-24)",
                className
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {container ? <Container>{children}</Container> : children}
        </section>
    )
}