import type { HTMLAttributes, ReactNode } from "react";

type LegalNoticeProps = HTMLAttributes<HTMLElement> & {
    children: ReactNode;
};

export function LegalNotice({
    children,
    className = "",
    ...props
}: LegalNoticeProps) {
    return (
        <aside
            className={[
                "border border-border-subtle bg-surface px-5 py-4",
                "text-xs leading-relaxed text-text-muted",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            <p className="mb-2 font-medium uppercase tracking-wider text-text-secondary">
                Aviso importante
            </p>

            <div>{children}</div>
        </aside>
    );
}