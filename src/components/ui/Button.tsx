import type { ButtonHTMLAttributes, Ref } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    ref?: Ref<HTMLButtonElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-accent-gold px-5 text-background hover:bg-accent-light",
    secondary:
        "border border-border-strong bg-transparent text-text-primary hover:border-accent-gold hover:text-accent-light",
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
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-2",
                "text-sm font-medium tracking-normal",
                "transition-colors duration-200 ease-(--ease-standard)",
                "disabled:pointer-events-none disabled:opacity-50",
                variantClasses[variant],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        />
    );
}