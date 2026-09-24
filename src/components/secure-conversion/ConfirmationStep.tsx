import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { LegalNotice } from "@/components/ui/LegalNotice";

type ConfirmationStepProps = {
    onBack: () => void;
    headingRef: React.RefObject<HTMLHeadingElement | null>;
};

export function ConfirmationStep({
    onBack,
    headingRef,
}: ConfirmationStepProps) {
    return (
        <div className="space-y-8">
            <div>
                <p className="text-xs font-medium uppercase tracking-wider text-signal">
                    Flow completed
                </p>

                <h1
                    ref={headingRef}
                    id="access-step-title"
                    tabIndex={-1}
                    className="mt-4 text-4xl font-medium leading-tight tracking-tight text-text-primary sm:text-5xl"
                >
                    Access flow prepared.
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary">
                    This fictional portfolio experience has
                    completed the requested access journey locally.
                    No information has been submitted to a server.
                </p>
            </div>

            <div  className="border-y border-border py-8">
                <p className="text-sm font-medium uppercase tracking-wider text-text-muted">
                    Next step
                </p>

                <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-primary">
                    Explore the educational material associated
                    with the case.
                </p>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary">
                    Book access is intentionally not wired in this
                    Sprint because no authorized book resource or 
                    route currently exists in the repository.
                </p>
            </div>

            <LegalNotice>
                <p>
                    This prototype does not create an investment
                    application, suitability decision, account,
                    transaction or regulatory submission.
                </p>
            </LegalNotice>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <Button
                    type="button"
                    variant="ghost"
                    onClick={onBack}
                >
                    ← Back
                </Button>

                <Link
                    href="/"
                    className={[
                        "inline-flex min-h-11 items-center justify-center",
                        "rounded-md bg-accent-gold px-5",
                        "text-sm font-medium text-background",
                        "transition-colors duration-200",
                        "hover:bg-accent-light",
                        "focus-visible:outline-2 focus-visible:outline-offset-3",
                        "focus-visible:outline-(--focus-color)",
                    ].join(" ")}
                >
                    Return to homepage
                </Link>
            </div>
        </div>
    );
}