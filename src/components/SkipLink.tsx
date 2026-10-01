export function SkipLink() {
    return (
        <a 
            href="#main-content"
            className={[
                "fixed left-4 top-4 z-(--am-z-toast)",
                "rounded-sm border border-text-primary",
                "bg-text-primary px-4 py-3",
                "text-sm font-medium text-canvas",
                "translate-y-[-120%] opacity-0",
                "transition-[opacity,transform]", 
                "duration-fast ease-standard",
                "focus-visible:translate-y-0 focus-visible:opacity-100",
                "focus-visible:outline-2 focus-visible:outline-offset-3",
                "focus-visible:outline-focus",
            ].join(" ")}>
                Pular para o conteúdo principal
            </a>
    )
}