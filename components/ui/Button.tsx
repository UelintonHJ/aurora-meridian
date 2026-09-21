import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-accent-gold text-background hover:bg-accent-light focus-visible:outline-accent-light",
    secondary:
        "border border-border bg-transparent text-text-primary hover:border-accent-gold hover:text-accent-light",
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
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5",
                "text-sm font-medium tracking-normal",
                "transition-colors duration-200 ease-(--ease-standard)",
                "focus-visible:outline-2 focus-visible:outline-offset-3",
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