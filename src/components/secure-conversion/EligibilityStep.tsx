import { useState } from "react";

import { Button } from "@/components/ui/Button";

import { AccessFormData } from "./AccessFlow";

type EligibilityStepProps = {
    data: AccessFormData;
    onContinue: (data: AccessFormData) => void;
    onBack: () => void;
    isSubmitting: boolean;
    headingRef: React.RefObject<HTMLHeadingElement | null>;
};

export function EligibilityStep({
    data,
    onContinue,
    onBack,
    isSubmitting,
    headingRef
}: EligibilityStepProps) {
    const [investorType, setInvestorType] =
        useState<AccessFormData["investorType"]>(
            data.investorType,
        );

    const [longTermHorizon, setLongTermHorizon] =
        useState(data.longTermHorizon);

    const [errors, setErrors] = useState({
        investorType: "",
        longTermHorizon: "",
    });

    const handleContinue = () => {
        const nextErrors = {
            investorType: "",
            longTermHorizon: "",
        };

        if (!investorType) {
            nextErrors.investorType =
                "Please select an investor profile.";
        }

        if (!longTermHorizon) {
            nextErrors.longTermHorizon =
                "Please confirm that you understand the investment horizon.";
        }

        setErrors(nextErrors);

        if (nextErrors.investorType || nextErrors.longTermHorizon) {
            return;
        }

        onContinue({
            ...data,
            investorType,
            longTermHorizon,
        });
    };

    return (
        <div className="space-y-8">
            <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                    Indicative eligibility
                </p>

                <h1
                    ref={headingRef}
                    id="access-step-title"
                    tabIndex={-1}
                    className="mt-4 text-4xl font-medium leading-tight tracking-tight text-text-primary sm:text-5xl"
                >
                    Understand the profile this strategy is designed for.
                </h1>

                <p>
                    These questions are illustrative and do not
                    constitute a formal suitability, eligibility or
                    investment decision.
                </p>
            </div>

            <fieldset 
                className="space-y-4"
                aria-invalid={Boolean(errors.investorType)}
                aria-describedby={
                    errors.investorType
                        ? "investor-type-error"
                        : undefined
                }
            >
                <legend className="text-sm font-medium text-text-primary">
                    Investor profile
                </legend>

                <label className="flex cursor-pointer gap-3 rounded-md border border-border bg-surface p-4">
                    <input
                        type="radio"
                        name="investorType"
                        value="individual"
                        checked={investorType === "individual"}
                        onChange={() => {
                            setInvestorType("individual");
                            setErrors((current) => ({
                                ...current,
                                investorType: "",
                            }));
                        }}
                        className="mt-1 accent-(--color-accent-gold)"
                    />

                    <span>
                        <span className="block text-sm font-medium text-text-primary">
                            Individual investor
                        </span>
                        <span>
                            Personal investment profile.
                        </span>
                    </span>
                </label>

                <label className="flex cursor-pointer gap-3 rounded-md border border-border bg-surface p-4">
                    <input
                        type="radio"
                        name="investorType"
                        value="professional"
                        checked={investorType === "professional"}
                        onChange={() => {
                            setInvestorType("professional");
                            setErrors((current) => ({
                                ...current,
                                investorType: "",
                            }));
                        }}
                        className="mt-1 accent-(--color-accent-gold)"
                    />

                    <span>
                        <span className="block text-sm font-medium text-text-primary">
                            Professional / qualified profile
                        </span>
                        <span className="mt-1 block text-sm text-text-secondary">
                            A profile with greater familiarity
                            with investment products and risk.
                        </span>
                    </span>
                </label>

                {errors.investorType ? (
                    <p
                        id="investor-type-error"
                        role="alert"
                        className="text-sm text-danger"
                    >
                        {errors.investorType}
                    </p>
                ) : null}
            </fieldset>

            <div className="border-t border-border pt-6">
                <label className="flex gap-3">
                    <input
                        type="checkbox"
                        checked={longTermHorizon}
                        onChange={(event) => {
                            setLongTermHorizon(event.target.checked);

                            if (event.target.checked) {
                                setErrors((current) => ({
                                    ...current,
                                    longTermHorizon: "",
                                }));
                            }
                        }}
                        required
                        aria-invalid={Boolean(errors.longTermHorizon)}
                        aria-describedby={
                            errors.longTermHorizon
                                ? "long-term-horizon-error"
                                : undefined
                        }
                        className="mt-1 size-4 accent-(--color-accent-gold)"
                    />

                    <span className="text-sm leading-relaxed text-text-secondary">
                        I understand that the illustrative strategy
                        assumes a medium-to-long-term investment horizon.
                    </span>
                </label>

                {errors.longTermHorizon ? (
                    <p
                        id="long-term-horizon-error"
                        role="alert"
                        className="mt-2 text-sm text-danger"
                    >
                        {errors.longTermHorizon}
                    </p>
                ) : null}
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <Button
                    type="button"
                    variant="ghost"
                    onClick={onBack}
                    disabled={isSubmitting}
                >
                    ← Back
                </Button>

                <Button
                    type="button"
                    onClick={handleContinue}
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Preparing..."
                        : "Continue to information"}
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
        </div>
    );
}