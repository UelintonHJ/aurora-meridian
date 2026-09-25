import { useState } from "react";

import { Button } from "@/components/ui/Button";

import { FieldError } from "./FieldError";
import type { AccessFormData } from "./AccessFlow";

type RegistrationStepProps = {
    data: AccessFormData;
    onContinue: (data: AccessFormData) => void;
    isSubmitting: boolean;
    headingRef: React.RefObject<HTMLHeadingElement | null>;
};

type RegistrationErrors = {
    name?: string;
    email?: string;
    privacyAcknowledged?: string;
};

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;

export function RegistrationStep({
    data,
    onContinue,
    isSubmitting,
    headingRef,
}: RegistrationStepProps) {
    const [formData, setFormData] = useState({
        name: data.name,
        email: data.email,
        privacyAcknowledged: data.privacyAcknowledged,
    });

    const [errors, setErrors] = useState<RegistrationErrors>({});

    const updateField = <K extends keyof typeof formData>(
        field: K,
        value: (typeof formData)[K],
    ) => {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }));

        setErrors((current) => ({
            ...current,
            [field]: undefined,
        }));
    };

    const validate = () => {
        const nextErrors: RegistrationErrors = {};

        const normalizedName = formData.name
            .trim()
            .replace(/\s+/g, " ");

        const normalizedEmail =
            formData.email.trim();

        if (!normalizedName) {
            nextErrors.name =
                "Please enter your name.";
        } else if (
            normalizedName.length < 2
        ) {
            nextErrors.name =
                "Please enter at least 2 characters."
        } else if (
            normalizedName.length >
            MAX_NAME_LENGTH
        ) {
            nextErrors.name =
                `Please use no more than ${MAX_NAME_LENGTH} characters.`;
        } else if (
            /[\u0000-\u001F\u007F]/.test(
                normalizedName,
            )
        ) {
            nextErrors.name = 
                "Please remove unsupported control characters.";
        }

        if(!normalizedEmail) {
            nextErrors.email =
                "Please enter your email address.";
        } else if (
            normalizedEmail.length >
            MAX_EMAIL_LENGTH
        ) {
            nextErrors.email =
                "Please enter a valid email address.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                normalizedEmail,
            )
        ) {
            nextErrors.email =
                "Please enter a valid email address.";
        }

        if (!formData.privacyAcknowledged) {
            nextErrors.privacyAcknowledged =
                "Please acknowledge the privacy notice to continue.";
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        onContinue({
            ...data,
            name: formData.name.trim().replace(/\s+/g, " "),
            email: formData.email.trim(),
            privacyAcknowledged:
                formData.privacyAcknowledged,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                    Request access
                </p>

                <h1
                    ref={headingRef}
                    id="access-step-title"
                    tabIndex={-1}
                    className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-text-primary sm:text-5xl"
                >
                    A structured path to understand the strategy.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                    Provide the information below to continue
                    through the fictional access experience.
                </p>
            </div>

            <div className="space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-text-primary"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        autoCapitalize="words"
                        maxLength={MAX_NAME_LENGTH}
                        required
                        value={formData.name}
                        onChange={(event) =>
                            updateField(
                                "name",
                                event.target.value,
                            )
                        }
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                            errors.name
                                ? "name-error"
                                : undefined
                        }
                        className={[
                            "mt-2 min-h-12 w-full rounded-md border",
                            "bg-surface px-4 text-text-primary",
                            "placeholder:text-text-muted",
                            "transition-colors duration-200",
                            "focus:border-accent-gold focus:outline-none",
                            errors.name
                                ? "border-danger"
                                : "border-border",
                        ].join(" ")}
                    />

                    <FieldError
                        id="name-error"
                        message={errors.name}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-text-primary"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        maxLength={MAX_EMAIL_LENGTH}
                        spellCheck={false}
                        required
                        value={formData.email}
                        onChange={(event) =>
                            updateField(
                                "email",
                                event.target.value,
                            )
                        }
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                            errors.email
                                ? "email-error"
                                : undefined
                        }
                        className={[
                            "mt-2 min-h-12 w-full rounded-md border",
                            "bg-surface px-4 text-text-primary",
                            "placeholder:text-text-muted",
                            "transition-colors duration-200",
                            "focus:border-accent-gold focus:outline-none",
                            errors.email
                                ? "border-danger"
                                : "border-border",
                        ].join(" ")}
                    />

                    <FieldError
                        id="email-error"
                        message={errors.email}
                    />
                </div>
            </div>

            <fieldset className="space-y-5 border-t border-border pt-6">
                <legend className="sr-only">
                    Privacy and communication preferences
                </legend>

                <label className="flex gap-3">
                    <input 
                        type="checkbox"
                        checked={formData.privacyAcknowledged}
                        onChange={(event) =>
                            updateField(
                                "privacyAcknowledged",
                                event.target.checked,
                            )
                        }
                        required
                        aria-invalid={Boolean(errors.privacyAcknowledged)}
                        aria-describedby={
                            errors.privacyAcknowledged
                                ? "privacy-error"
                                : undefined
                        }
                        className="mt-1 size-4 accent-(--colors-accent-gold)"
                    />

                    <span className="text-sm leading-relaxed text-text-secondary">
                        I acknowledge the privacy notice and
                        understand that this fictional prototype
                        does not submit my information to a server.
                    </span>
                </label>

                <FieldError 
                    id="privacy-error"
                    message={errors.privacyAcknowledged}
                />
            </fieldset>

            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Preparing..."
                        : "Continue"}
                </Button>
            </div>

            {isSubmitting ? (
                <p
                    role="status"
                    aria-live="polite"
                    className="text-sm text-text-muted"
                >
                    Preparing the next step...
                </p>
            ) : null}
        </form>
    );
}