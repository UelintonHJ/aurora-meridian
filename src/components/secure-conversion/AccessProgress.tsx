import type { AccessStep } from "./AccessFlow";

type AccessProgressProps = {
    currentStep: AccessStep;
};

const steps: Array<{
    id: AccessStep;
    label: string;
}> = [
    {
        id: "registration",
        label: "Registration",
    },
    {
        id: "eligibility",
        label: "Eligibility",
    },
    {
        id: "information",
        label: "Information",
    },
    {
        id: "documents",
        label: "Documents",
    },
    {
        id: "confirmation",
        label: "Confirmation",
    },
];

export function AccessProgress({
    currentStep,
}: AccessProgressProps) {
    const currentIndex = steps.findIndex(
        (step) => step.id === currentStep,
    );

    return (
        <nav
            aria-label="Access flow progress"
            className="border-y border-border py-5"
        >
            <ol className="grid grid-cols-5 gap-2">
                {steps.map((step, index) => {
                    const isCurrent = step.id === currentStep;
                    const isCompleted = index < currentIndex;

                    return (
                        <li key={step.id}>
                            <div
                                aria-current={
                                    isCurrent ? "step" : undefined
                                }
                                className={[
                                    "border-t pt-3",
                                    isCurrent
                                        ? "border-accent-gold"
                                        : isCompleted
                                            ? "border-text-secondary"
                                            : "border-border",
                                ].join(" ")}
                            >
                                <span
                                    className={[
                                        "font-mono text-[0.625rem] uppercase tracking-wider",
                                        isCurrent
                                            ? "text-accent-gold"
                                            : "text-text-muted",
                                    ].join(" ")}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span
                                    className={[
                                        "mt-2 hidden text-xs sm:block",
                                        isCurrent
                                            ? "text-text-primary"
                                            : "text-text-muted",
                                    ].join(" ")}
                                >
                                    {step.label}
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ol>

            <p className="sr-only" aria-live="polite">
                Step {currentIndex + 1} of {steps.length}:{" "}
                {steps[currentIndex]?.label}
            </p>
        </nav>
    );
}