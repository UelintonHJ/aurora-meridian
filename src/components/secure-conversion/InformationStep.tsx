import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { LegalNotice } from "../ui/LegalNotice";

type InformationStepProps = {
    onContinue: () => void;
    onBack: () => void;
    isSubmitting: boolean;
    headingRef: React.RefObject<HTMLHeadingElement | null>;
};

const risks = [
    "Credit risk",
    "Liquidity risk",
    "Capital loss risk",
];

export function InformationStep({
    onContinue,
    onBack,
    isSubmitting,
    headingRef,
}: InformationStepProps) {
    const [understood, setUnderstood] = useState(false);
    const [error, setError] = useState("");

    const handleContinue = () => {
        if (!understood) {
            setError(
                "Please confirm that you have reviewed the information.",
            );
            return;
        }

        setError("");
        onContinue();
    };

    return (
        <div className="space-y-8">
            <div>
                <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                    Before continuing
                </p>

                <h1
                    ref={headingRef}
                    id="access-step-title"
                    tabIndex={-1}
                    className="mt-4 text-4xl font-medium leading-tight tracking-tight text-text-primary sm:text-5xl"
                >
                    Review the key information first.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                    This step is designed to keep the fictional
                    investment experience transparent.
                </p>
            </div>

            <dl className="divide-y divide-border border-y border-border">
                <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        Strategy
                    </dt>

                    <dd className="text-sm text-text-primary">
                        Private credit
                    </dd>
                </div>

                <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        Objective
                    </dt>

                    <dd className="text-sm text-text-primary">
                        Hypothetical target defined for this case.
                    </dd>
                </div>

                <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-sm font-medium uppercase tracking-wider text-text-muted">
                        Horizon
                    </dt>

                    <dd className="text-sm text-text-primary">
                        Illustrative long-term structure.
                    </dd>
                </div>

                <div className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-xs font-medium uppercase tracking-wider text-text-muted">
                        Risk
                    </dt>

                    <dd>
                        <ul className="space-y-2 text-sm text-text-primary">
                            {risks.map((risk) => (
                                <li key={risk}>— {risk}</li>
                            ))}
                        </ul>
                    </dd>
                </div>
            </dl>

            <LegalNotice>
                <p>
                    This is a fictional portfolio case. The
                    information presented here is illustrative and
                    does not constitute an offer, recommendation,
                    suitability assessment or investment decision.
                </p>
            </LegalNotice>

            <div>
                <label className="flex gap-3">
                    <input
                        type="checkbox"
                        checked={understood}
                        onChange={(event) => {
                            setUnderstood(event.target.checked);
                            setError("");
                        }}
                        className="mt-1 size-4 accent-(--color-accent-gold)"
                    />

                    <span className="text-sm leading-relaxed text-text-secondary">
                        I understand that the information presented
                        in this prototype is illustrative.
                    </span>
                </label>

                {error ? (
                    <p
                        role="alert"
                        className="mt-2 text-sm text-danger"
                    >
                        {error}
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
                        : "Review documents"}
                </Button>
            </div>

            {isSubmitting ? (
                <p
                    role="status"
                    aria-live="polite"
                    className="text-sm text-text-muted"
                >
                    Preparing the document library...
                </p>
            ) : null}
        </div>
    );
}