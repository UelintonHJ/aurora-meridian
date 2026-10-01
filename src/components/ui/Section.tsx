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
                "py-(--am-section-space-md) lg:py-(--am-section-space-lg)",
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