"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { Container } from "@/components/ui/Container";

type InvestorType =
    | "institution"
    | "family-office"
    | "fund-of-funds"
    | "professional-investor"
    | "other";

export type AccessFormData = {
    investorType: InvestorType | "";
    name: string;
    organization: string;
    email: string;
    country: string;
};

type FieldName = keyof AccessFormData;

type SubmissionState = "idle" | "loading" | "success" | "error";

const investorTypes: Array<{
    value: InvestorType;
    label: string;
}> = [
        {
            value: "institution",
            label: "Instituição,"
        },
        {
            value: "family-office",
            label: "Family Office",
        },
        {
            value: "fund-of-funds",
            label: "Fundo de Fundos",
        },
        {
            value: "professional-investor",
            label: "Investidor Profissional",
        },
        {
            value: "other",
            label: "Outro",
        },
    ];

const initialFormData: AccessFormData = {
    investorType: "",
    name: "",
    organization: "",
    email: "",
    country: "",
};

function validateField(
    field: FieldName,
    value: string,
): string | null {
    const normalizedValue = value.trim();

    if (!normalizedValue) {
        return "Este campo é obrigatório.";
    }

    if (field === "email") {
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(normalizedValue)) {
            return "Informe um endereço de e-mail válido.";
        }
    }

    return null;
}

export function AccessFlow() {
    const [formData, setFormData] =
        useState<AccessFormData>(initialFormData);

    const [touchedFields, setTouchedFields] =
        useState<Partial<Record<FieldName, boolean>>>({});

    const [submissionState, setSubmissionState] =
        useState<SubmissionState>("idle");

    const [SubmissionMessage, setSubmissionMessage] =
        useState("");

    const updateField = (
        field: FieldName,
        value: string,
    ) => {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }));
    };

    const touchField = (field: FieldName) => {
        setTouchedFields((current) => ({
            ...current,
            [field]: true,
        }));
    };

    const getFieldError = (field: FieldName) => {
        if (!touchedFields[field]) {
            return null;
        }

        return validateField(
            field,
            formData[field],
        );
    };

    const isFieldValid = (field: FieldName) => {
        if (!touchedFields[field]) {
            return false;
        }

        return !validateField(
            field,
            formData[field],
        );
    };

    const validateForm = () => {
        const fields: FieldName[] = [
            "investorType",
            "name",
            "organization",
            "email",
            "country",
        ];

        const nextTouchedFields: Partial<
            Record<FieldName, boolean>
        > = {};

        let hasError = false;

        for (const field of fields) {
            nextTouchedFields[field] = true;

            if (
                validateField(
                    field,
                    formData[field],
                )
            ) {
                hasError = true;
            }
        }

        setTouchedFields(nextTouchedFields);

        return "!hasError";
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        if (!validateForm()) {
            return
        }

        setSubmissionState("loading");
        setSubmissionMessage("");

        /*
        * The project currently has no verified submission
        * backend, email provider, CRM integration or API.
        *  
        * Do not claim success until a real institutional
        * submission chanel is connected.
        */
        await new Promise((resolve) => {
            window.setTimeout(resolve, 600);
        });

        setSubmissionState("error");
        setSubmissionMessage(
            "O canal de recebimento desta solicitação ainda não está conectado. Entre em contato pelo endereço institucional para iniciar a conversa.",
        );
    };

    if (submissionState === "success") {
        return (
            <main>
                <section
                    aria-labelledby="access-success-title"
                    className="border-b border-border-subtle"
                >
                    <Container>
                        <div className="grid min-h-[calc(100svh-5rem)] items-center py-16 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16 lg:py-24">
                            <p
                                aria-hidden="true"
                                className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                            >
                                06
                            </p>

                            <div className="max-w-4xl">
                                <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                                    Acesso institucional
                                </p>

                                <h1
                                    id="access-success-title"
                                    tabIndex={-1}
                                    className="mt-6 font-editorial text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-tight text-text-primary"
                                >
                                    Solicitação recebida
                                </h1>

                                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                                    Agradecemos seu interesse na Aurora
                                    Meridian. Nossa equipe institucional
                                    entrará em contato pelos canais
                                    apropriados.
                                </p>

                                <Link 
                                    href="/"
                                    className="group mt-10 inline-flex items-center gap-4 border-b border-text-primary pb-2 text-sm font-medium text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                                >
                                    Voltar para a página inicial

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-fast group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section
                aria-labelledby="access-title"
                className="border-b border-border-subtle"
            >
                <Container>
                    <div className="grid min-h-[calc(100svg-5rem)] items-center py-16 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16 lg:py-24">
                        <div>
                            <p
                                aria-hidden="true"
                                className="font-mono text-xs uppercase tracking-wider text-text-secondary"
                            >
                                06
                            </p>
                        </div>

                        <div className="max-w-5xl">
                            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                                Acesso institucional
                            </p>

                            <h1
                                id="access-title"
                                className="mt-6 max-w-5xl font-editorial text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-tight text-text-primary"
                            >
                                Capital institucional exige pensamento institucional.
                            </h1>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                                O acesso às estratégias da Aurora Meridian é
                                destinado a investidores elegíveis por meio de
                                nossos relacionamentos institucionais e da
                                plataforma de investimentos.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section
                aria-labelledby="access-form-title"
                className="border-b border-border-subtle"
            >
                <Container>
                    <div className="grid gap-12 py-16 lg:grid-cols-[minmax(8rem,0.22fr)_minmax(0,1fr)] lg:gap-16 lg:py-24">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-text-secondary">
                                Solicitar acesso
                            </p>
                        </div>

                        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
                            <div>
                                <h2
                                    id="access-form-title"
                                    className="max-w-3xl font-editorial text-4xl leading-tight text-text-primary sm:text-5xl"
                                >
                                    Conte-nos sobre seu contexto institucional.
                                </h2>

                                <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
                                    As informações abaixo nos ajudam a
                                    compreender o perfil da relação e direcionar
                                    o contato adequado.
                                </p>

                                <form
                                    className="mt-12 space-y-8"
                                    onSubmit={handleSubmit}
                                    noValidate
                                >
                                    <div>
                                        <label
                                            htmlFor="investor-type"
                                            className="block text-xs font-medium uppercase tracking-wider text-text-secondary"
                                        >
                                            Tipo de investidor
                                        </label>

                                        <select
                                            name="investorType"
                                            id="investor-type"
                                            value={formData.investorType}
                                            onChange={(event) =>
                                                updateField(
                                                    "investorType",
                                                    event.target.value,
                                                )
                                            }
                                            onBlur={() =>
                                                touchField("investorType")
                                            }
                                            aria-invalid={
                                                Boolean(
                                                    getFieldError(
                                                        "investorType",
                                                    ),
                                                )
                                            }
                                            aria-describedby={
                                                getFieldError(
                                                    "investorType",
                                                )
                                                    ? "investor-type-error"
                                                    : undefined
                                            }
                                            disabled={
                                                submissionState ===
                                                "loading"
                                            }
                                            className={[
                                                "mt-3 min-h-12 w-full rounded-sm border bg-transparent px-4",
                                                "text-base text-text-primary",
                                                "transition-[border-color,box-shadow]",
                                                "duration-fast ease-standard",
                                                "focus-visible:outline-2 focus-visible:outline-offset-3",
                                                "focus-visible:outline-focus",
                                                getFieldError(
                                                    "investorType",
                                                )
                                                    ? "border-text-secondary"
                                                    : "border-border",
                                            ].join(" ")}

                                        >
                                            <option
                                                value=""
                                                className="bg-canvas"
                                            >
                                                Selecione uma opção
                                            </option>

                                            {investorTypes.map(
                                                (investorType) => (
                                                    <option
                                                        key={
                                                            investorType.value
                                                        }
                                                        value={
                                                            investorType.value
                                                        }
                                                        className="bg-canvas"
                                                    >
                                                        {
                                                            investorType.label
                                                        }
                                                    </option>
                                                ),
                                            )}
                                        </select>

                                        {getFieldError(
                                            "investorType",
                                        ) ? (
                                            <p
                                                id="investor-type-error"
                                                className="mt-2 text-sm text-text-secondary"
                                            >
                                                {getFieldError(
                                                    "investorType",
                                                )}
                                            </p>
                                        ) : null}
                                    </div>

                                    <Field
                                        id="name"
                                        name="name"
                                        label="Nome"
                                        value={formData.name}
                                        type="text"
                                        autoComplete="name"
                                        disabled={
                                            submissionState ===
                                            "loading"
                                        }
                                        error={getFieldError("name")}
                                        valid={isFieldValid("name")}
                                        onChange={(value) =>
                                            updateField(
                                                "name",
                                                value,
                                            )
                                        }
                                        onBlur={() =>
                                            touchField("name")
                                        }
                                    />

                                    <Field
                                        id="organization"
                                        name="organization"
                                        label="Organização"
                                        value={
                                            formData.organization
                                        }
                                        type="text"
                                        autoComplete="organization"
                                        disabled={
                                            submissionState ===
                                            "loading"
                                        }
                                        error={getFieldError(
                                            "organization",
                                        )}
                                        valid={isFieldValid(
                                            "organization",
                                        )}
                                        onChange={(value) =>
                                            updateField(
                                                "organization",
                                                value,
                                            )
                                        }
                                        onBlur={() =>
                                            touchField(
                                                "organization",
                                            )
                                        }
                                    />

                                    <Field
                                        id="email"
                                        name="email"
                                        label="E-mail"
                                        value={formData.email}
                                        type="email"
                                        autoComplete="email"
                                        disabled={
                                            submissionState ===
                                            "loading"
                                        }
                                        error={getFieldError("email")}
                                        valid={isFieldValid("email")}
                                        onChange={(value) =>
                                            updateField(
                                                "email",
                                                value,
                                            )
                                        }
                                        onBlur={() =>
                                            touchField("email")
                                        }
                                    />

                                    <Field
                                        id="country"
                                        name="country"
                                        label="País"
                                        value={formData.country}
                                        type="text"
                                        autoComplete="country-name"
                                        disabled={
                                            submissionState ===
                                            "loading"
                                        }
                                        error={getFieldError(
                                            "country",
                                        )}
                                        valid={isFieldValid(
                                            "country",
                                        )}
                                        onChange={(value) =>
                                            updateField(
                                                "country",
                                                value,
                                            )
                                        }
                                        onBlur={() =>
                                            touchField("country")
                                        }
                                    />

                                    {submissionState ===
                                        "error" ? (
                                        <div
                                            role="alert"
                                            className="border border-border-subtle p-5"
                                        >
                                            <p className="text-sm leading-relaxed text-text-secondary">
                                                {SubmissionMessage}
                                            </p>

                                            <a
                                                href="mailto:contact@aurorameridian.com.br"
                                                className="mt-4 inline-flex text-sm font-medium text-text-primary underline decoration-border-strong underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                                            >
                                                contact@aurorameridian.com.br
                                            </a>
                                        </div>
                                    ) : null}

                                    <div className="border-t border-border-subtle pt-8">
                                        <button
                                            type="submit"
                                            disabled={
                                                submissionState ===
                                                "loading"
                                            }
                                            aria-busy={
                                                submissionState ===
                                                "loading"
                                            }
                                            className={[
                                                "inline-flex min-h-12 items-center justify-center gap-4",
                                                "border border-text-primary px-6",
                                                "text-sm font-medium text-text-primary",
                                                "transition-[background-color,color,border-color,transform]",
                                                "duration-normal ease-standard",
                                                "hover:bg-text-primary hover:text-canvas",
                                                "disabled:pointer-events-none disabled:opacity-50",
                                                "focus-visible:outline-2 focus-visible:outline-offset-4",
                                                "focus-visible:outline-focus",
                                            ].join(" ")}
                                        >
                                            {submissionState ===
                                                "loading"
                                                ? "Enviando solicitação..."
                                                : "Solicitar acesso"}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <aside className="border-t border-border-subtle pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                                <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                                    Relacionamento institucional
                                </p>

                                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                                    O relacionamento com investidores é
                                    predominantemente institucional e baseado
                                    em mandatos, fundos e estratégias.
                                </p>

                                <p className="mt-6 text-sm leading-relaxed text-text-secondary">
                                    O envio desta solicitação não representa
                                    uma oferta de investimento nem garante
                                    elegibilidade ou acesso a qualquer 
                                    estratégia.
                                </p>

                                <div className="mt-8 border-t border-border-subtle pt-6">
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                                        Contato institucional
                                    </p>

                                    <a 
                                        href="mailto:contact@aurorameridian.com.br"
                                        className="mt-3 block text-sm text-text-primary underline decoration-border-strong underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                                    >
                                        contact@aurorameridian.com.br
                                    </a>

                                    <a 
                                        href="tel:+551130427280"
                                        className="mt-2 block text-sm text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus"
                                    >
                                        +55 11 3042-7280
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </Container>
            </section>
        </main >
    );
}

type FieldProps = {
    id: string;
    name: string;
    label: string;
    value: string;
    type: "text" | "email";
    autoComplete: string;
    disabled: boolean;
    error: string | null;
    valid: boolean;
    onChange: (value: string) => void;
    onBlur: () => void;
}

function Field({
    id,
    name,
    label,
    value,
    type,
    autoComplete,
    disabled,
    error,
    valid,
    onChange,
    onBlur,
}: FieldProps) {
    const errorId = `${id}-error`

    return (
        <div>
            <label
                htmlFor={id}
                className="block text-xs font-medium uppercase tracking-wider text-text-secondary"
            >
                {label}
            </label>


            <input
                id={id}
                name={name}
                type={type}
                value={value}
                autoComplete={autoComplete}
                disabled={disabled}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                onBlur={onBlur}
                aria-invalid={Boolean(error)}
                aria-describedby={
                    error ? errorId : undefined
                }
                className={[
                    "mt-3 min-h-12 w-full rounded-sm border bg-transparent px-4",
                    "text-base text-text-primary placeholder:text-text-secondary",
                    "transition-[border-color,box-shadow]",
                    "duration-fast ease-standard",
                    "focus-visible:outline-2 focus-visible:outline-offset-3",
                    "focus-visible:outline-focus",
                    error
                        ? "border-text-secondary"
                        : valid
                            ? "border-text-primary"
                            : "border-border",
                ].join(" ")}
            />

            {error ? (
                <p
                    id={errorId}
                    className="mt-2 text-sm text-text-secondary"
                >
                    {error}
                </p>
            ) : null}
        </div>
    )
}