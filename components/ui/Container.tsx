import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({
    className = "",
    ...props
}: ContainerProps) {
    return (
        <div
            className={[
                "mx-auto w-full max-w-(--container-max-width)",
                "px-(--container-gutter)",
                "sm:px-6 lg:px-8",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        />
    );
}