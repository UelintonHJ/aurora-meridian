import type { ButtonHTMLAttributes, Ref } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    ref?: Ref<HTMLButtonElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-text-primary text-canvas hover:bg-text-secondary",
    secondary:
        "border border-border-strong bg-transparent text-text-primary hover:border-text-primary",
    ghost:
        "bg-transparent text-text-secondary hover:text-text-primary",
};

export function Button({
    variant = "primary",
    className = "",
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            className={[
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-2",
                "text-sm font-medium tracking-normal",
                "transition-colors duration-fast ease-standard",
                "disabled:pointer-events-none disabled:opacity-50",
                "focus-visible:outline-2 focus-visible:outlie-offset-3",
                "focus-visible:outline-focus",
                variantClasses[variant],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        />
    );
}