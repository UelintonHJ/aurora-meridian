import type { HTMLAttributes, ReactNode } from "react";

type MetricProps = HTMLAttributes<HTMLDivElement> & {
    value: ReactNode;
    label: ReactNode;
    detail?: ReactNode;
};

export function Metric({
    value,
    label,
    detail,
    className = "",
    ...props
}: MetricProps) {
    return (
        <div
            className={["space-y-2", className].filter(Boolean).join(" ")}
            {...props}
        >
            <p className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                {value}
            </p>

            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                {label}
            </p>

            {detail ? (
                <p className="text-sm leading-relaxed text-text-muted">{detail}</p>
            ) : null}
        </div>
    );
}