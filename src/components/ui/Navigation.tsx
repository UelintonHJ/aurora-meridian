import Link from "next/link";

export const navigationItems = [
    { href: "#strategy", label: "Strategy" },
    { href: "#insights", label: "Insights" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
];

export function Navigation() {
    return (
        <nav aria-label="Main navigation">
            <ul className="flex items-center gap-6">
                {navigationItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={[
                                "text-sm text-text-secondary",
                                "transition-colors duration-normal ease-standard",
                                "hover:text-text-primary",
                                "focus-visible:outline-2 focus-visible:outline-offset-4",
                                "focus-visible:outline-focus",
                            ].join(" ")}
                        >
                        {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}