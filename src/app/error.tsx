"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string};
    reset: () => void;
}) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="w-full max-w-xl border border-border bg-surface p-8 sm:p-10">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-accent-gold">
                    Aurora Meridian
                </p>

                <h1 className="font-display text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl ">
                    Something went wrong.
                </h1>

                <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
                    Não foi possível carregar esta experiência. Tente novamente.
                </p>

                <button
                    type="button"
                    onClick={reset}
                    className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-accent-gold px-5 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent-light"
                >
                    Tentar novamente
                </button>

                {process.env.NODE_ENV === "development" ? (
                    <details className="mt-8 border-t border-border-subtle pt-6">
                        <summary className="cursor-pointer text-xs font-medium uppercase tracking-wider text-text-muted">
                            Development details
                        </summary>

                        <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-xs leading-relaxed text-text-muted">
                            {error.message}
                        </pre>
                    </details>
                ) : null}
            </div>
        </main>
    );
}