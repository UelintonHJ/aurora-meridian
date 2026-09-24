import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type DocumentsStepProps = {
    onContinue: () => void;
    onBack: () => void;
    isSubmitting: boolean;
    headingRef: React.RefObject<HTMLHeadingElement | null>;
};

const documents = [
    {
        name: "Investment Thesis",
        type: "Illustrative document",
    },
    {
        name: "Risk Framework",
        type: "Illustrative document",
    },
    {
        name: "Fund Factsheet",
        type: "Illustrative document",
    },
];

export function DocumentsStep({
    onContinue,
    onBack,
    isSubmitting,
    headingRef,
}: DocumentsStepProps) {
    return (
        <div className="space-y-8">
            <div>
                <p className="text-sm font-medium uppercase tracking-wider text-accent-gold">
                    Technical library
                </p>

                <h1
                    ref={headingRef}
                    id="access-step-title"
                    tabIndex={-1}
                    className="mt-4 text-4xl font-medium leading-tight tracking-tight text-text-primary sm:text-5xl"
                >
                    Review the illustrative materials.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                    These documents represent the structure of a
                    technical library without creating or
                    presenting fictional regulatory documents as
                    official materials.
                </p>
            </div>

            <div className="grid gap-4">
                {documents.map((document) => (
                    <Card
                        key={document.name}
                        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div>
                            <h2 className="text-base font-medium text-text-primary">
                                {document.name}
                            </h2>

                            <p className="mt-1 text-sm text-text-muted">
                                {document.type}
                            </p>
                        </div>

                        <span className="inline-flex w-fit rounded-full border border-border px-3 py-1 font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                            Fictional
                        </span>
                    </Card>
                ))}
            </div>

            <div className="border border-danger/30 bg-danger/5 px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-wider text-danger">
                    Fictional case — no regulatory validity
                </p>

                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    No document in this prototype should be
                    interpreted as an official regulatory, legal or
                    investment document.
                </p>
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
                    onClick={onContinue}
                    disabled={isSubmitting}
                    aria-disabled={isSubmitting}
                >
                    {isSubmitting
                        ? "Preparing..."
                        : "Continue to confirmation"}
                </Button>
            </div>

            {isSubmitting ? (
                <p
                    role="status"
                    aria-live="polite"
                    className="text-sm text-text-muted"
                >
                    Completing the prototype flow...
                </p>
            ) : null}
        </div>
    );
}