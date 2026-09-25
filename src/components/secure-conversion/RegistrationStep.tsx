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
        communicationsConsent: data.communicationsConsent,
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

        if (!formData.name.trim()) {
            nextErrors.name = "Please enter your name.";
        }

        if (!formData.email.trim()) {
            nextErrors.email = "Please enter your email address.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                formData.email.trim(),
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
            name: formData.name.trim(),
            email: formData.email.trim(),
            privacyAcknowledged:
                formData.privacyAcknowledged,
            communicationsConsent:
                formData.communicationsConsent,
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

                <label className="flex gap-3">
                    <input 
                        type="checkbox"
                        checked={formData.communicationsConsent}
                        onChange={(event) => 
                            updateField(
                                "communicationsConsent",
                                event.target.checked,
                            )
                        }
                        className="mt-1 size-4 accent-(--color-accent-gold)"
                    />

                    <span className="text-sm leading-relaxed text-text-secondary">
                        I would like to receive future educational
                        communications about the fictional case.
                    </span>
                </label>
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