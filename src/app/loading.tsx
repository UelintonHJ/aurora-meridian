export default function Loading() {
    return (
        <main
            aria-busy="true"
            aria-live="polite"
            className="flex min-h-screen items-center justify-center bg-background px-6"
        >
            <div className="flex items-center gap-3">
                <span 
                    aria-hidden="true"
                    className="size-2 rounded-full bg-accent-gold"
                />
                
                <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
                    Loading Aurora Meridian
                </p>
            </div>
        </main>
    );
}