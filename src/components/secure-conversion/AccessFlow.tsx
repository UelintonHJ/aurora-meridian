"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { LegalNotice } from "../ui/LegalNotice";

import { AccessProgress } from "./AccessProgress";
import { ConfirmationStep } from "./ConfirmationStep";
import { DocumentsStep } from "./DocumentsStep";
import { EligibilityStep } from "./EligibilityStep";
import { InformationStep } from "./InformationStep";
import { RegistrationStep } from "./RegistrationStep";

export type AccessStep =
    | "registration"
    | "eligibility"
    | "information"
    | "documents"
    | "confirmation";

export type AccessFormData = {
    name: string;
    email: string;
    investorType: "individual" | "professional" | "";
    longTermHorizon: boolean;
    privacyAcknowledged: boolean;
    communicationsConsent: boolean;
};

const initialFormData: AccessFormData = {
    name: "",
    email: "",
    investorType: "",
    longTermHorizon: false,
    privacyAcknowledged: false,
    communicationsConsent: false,
};

const stepOrder: AccessStep[] = [
    "registration",
    "eligibility",
    "information",
    "documents",
    "confirmation",
];

export function AccessFlow() {
    const [step, setStep] =
        useState<AccessStep>("registration");

    const [formData, setFormData] =
        useState<AccessFormData>(initialFormData);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const headingRef = useRef<HTMLHeadingElement>(null);

    const currentIndex = stepOrder.indexOf(step);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            headingRef.current?.focus();
        });

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, [step]);

    const transitionTo = async (nextStep: AccessStep) => {
        setIsSubmitting(true);

        await new Promise((resolve) => {
            window.setTimeout(resolve, 300);
        });

        setStep(nextStep);
        setIsSubmitting(false);
    };

    const handleRegistrationContinue = async (
        data: AccessFormData,
    ) => {
        setFormData(data);
        await transitionTo("eligibility");
    };

    const handleEligibilityContinue = async (
        data: AccessFormData,
    ) => {
        setFormData(data);
        await transitionTo("information");
    };

    const handleInformationContinue = async () => {
        await transitionTo("documents");
    };

    const handleDocumentsContinue = async () => {
        await transitionTo("confirmation");
    };

    const handleBack = async () => {
        if (currentIndex <= 0) {
            return;
        }

        const previousStep =
            stepOrder[currentIndex - 1];

        if (!previousStep) {
            return;
        }

        await transitionTo(previousStep);
    };

    return (
        <main className="min-h-svh bg-background">
            <Container>
                <div className="flex min-h-svh flex-col py-6 sm:py-8 lg:py-10">
                    <header className="flex items-center justify-between gap-6">
                        <Link
                            href="/"
                            className="rounded-md text-sm font-medium tracking-wide text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-(--focus-color)"
                        >
                            Aurora Meridian
                        </Link>

                        <span className="font-mono text-[0.625rem] uppercase tracking-wider text-text-muted">
                            Portfolio case
                        </span>
                    </header>

                    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center py-12 lg:py-16">
                        <div className="mb-10">
                            <AccessProgress currentStep={step} />
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
                            <section
                                aria-labelledby="access-step-title"
                                className="min-w-0"
                            >
                                {step === "registration" ? (
                                    <RegistrationStep
                                        data={formData}
                                        onContinue={
                                            handleRegistrationContinue
                                        }
                                        isSubmitting={
                                            isSubmitting
                                        }
                                        headingRef={headingRef}
                                    />
                                ) : null}

                                {step === "eligibility" ? (
                                    <EligibilityStep
                                        data={formData}
                                        onContinue={
                                            handleEligibilityContinue
                                        }
                                        onBack={handleBack}
                                        isSubmitting={
                                            isSubmitting
                                        }
                                        headingRef={headingRef}
                                    />
                                ) : null}

                                {step === "information" ? (
                                    <InformationStep
                                        onContinue={
                                            handleInformationContinue
                                        }
                                        onBack={handleBack}
                                        isSubmitting={
                                            isSubmitting
                                        }
                                        headingRef={headingRef}
                                    />
                                ) : null}

                                {step === "documents" ? (
                                    <DocumentsStep
                                        onContinue={
                                            handleDocumentsContinue
                                        }
                                        onBack={handleBack}
                                        isSubmitting={
                                            isSubmitting
                                        }
                                        headingRef={headingRef}
                                    />
                                ) : null}

                                {step === "confirmation" ? (
                                    <ConfirmationStep
                                        onBack={handleBack}
                                        headingRef={headingRef}
                                    />
                                ) : null}
                            </section>

                            <aside className="lg:border-l lg:border-border lg:pl-8">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                                            Access experience
                                        </p>

                                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                                            A structured prototype
                                            separating educational
                                            content from the
                                            investment access
                                            journey.
                                        </p>
                                    </div>

                                    <LegalNotice>
                                        <p>
                                            Fictional portfolio
                                            case. No information
                                            submitted through This
                                            prototype is persisted
                                            or transmitted.
                                        </p>
                                    </LegalNotice>
                                </div>
                            </aside>
                        </div>
                    </div>
                    
                    <footer className="border-t border-border pt-5">
                        <p>
                            Fictional case study created for
                            educational and portolio purposes.
                        </p>
                    </footer>
                </div>
            </Container>
        </main >
    );
}