"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/components/ui/Navigation";

const CTA_HREF = "#opportunity";

function MenuIcon({ open }: { open: boolean }) {
    return (
        <span
            aria-hidden="true"
            className="relative block size-5"
        >
            <span
                className={[
                    "absolute left-0 top-1/2 block h-px w-5 bg-current",
                    "transition-transform duration-200 ease-(--ease-standard)",
                    open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
                ].join(" ")}
            />
            <span
                className={[
                    "absolute left-0 top-1/2 block h-px w-5 bg-current",
                    "transition-opacity duration-200 ease-(--ease-standard)",
                    open ? "opacity-0" : "opacity-100",
                ].join(" ")}
            />
            <span
                className={[
                    "absolute left-0 top-1/2 h-px w-5 bg-current",
                    "transition-transform duration-200 ease-(--ease-standard)",
                    open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
                ].join(" ")}
            />
        </span>
    );
}

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const nextScrolled = window.scrollY > 8;

            setIsScrolled((current) =>
                current === nextScrolled ? current : nextScrolled,
            );
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const menu = menuRef.current;

        if (!menu) {
            return;
        }

        const focusableSelector = [
            "a[href]",
            "button:not([disabled])",
        ].join(",");

        const focusFirstElement = () => {
            const firstElement = menu.querySelector<HTMLElement>(
                focusableSelector,
            );

            firstElement?.focus();
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setMenuOpen(false);
                menuButtonRef.current?.focus();
                return;
            }

            if (event.key !== "Tab") {
                return;
            }

            const focusableElements = Array.from(
                menu.querySelectorAll<HTMLElement>(focusableSelector),
            );

            if (focusableElements.length === 0) {
                event.preventDefault();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement =
                focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
                return;
            }

            if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        const frame = window.requestAnimationFrame(focusFirstElement);

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            window.cancelAnimationFrame(frame);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
    };

    const handleMenuToggle = () => {
        setMenuOpen((current) => !current);
    };

    return (
        <header
            className={[
                "sticky top-0 z-(--z-header) w-full border-b",
                "transition-[background-color,border-color,box-shadow,backdrop-filter]",
                "duration-(--duration-normal) ease-(--ease-standard)",
                isScrolled
                    ? "border-border bg-background/90 shadow-sm backdrop-blur-md"
                    : "border-transparent bg-transparent",
            ].join(" ")}
        >
            <Container>
                <div className="flex min-h-20 items-center justify-between gap-4">
                    <Link
                        href="/"
                        aria-label="Aurora Meridian"
                        className={[
                            "flex shrink-0 items-center rounded-md",
                            "bg-surface px-2",
                        ].join(" ")}
                    >
                        <Image 
                            src="/images/aurora-meridian-logo.png"
                            alt="Aurora Meridian"
                            width={641}
                            height={402}
                            className="h-16 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex">
                        <nav aria-label="Main navigation">
                            <ul className="flex items-center gap-6">
                                {navigationItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={[
                                                "text-sm text-text-secondary",
                                                "transition-colors duration-200",
                                                "hover:text-text-primary",
                                            ].join(" ")}
                                        > 
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <Link
                            href={CTA_HREF}
                            className={[
                                "inline-flex min-h-11 items-center justify-center",
                                "rounded-md bg-accent-gold px-5",
                                "text-sm font-medium text-background",
                                "transition-colors duration-200",
                                "hover:bg-accent-light",
                            ].join(" ")}
                        >
                            Request access
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 lg:hidden">
                        <Link
                            href={CTA_HREF}
                            className={[
                                "inline-flex min-h-10 items-center justify-center",
                                "rounded-md border border-border px-3",
                                "text-xs font-medium uppercase tracking-wide",
                                "text-text-primary",
                                "transition-colors duration-200",
                                "hover:border-accent-gold hover:text-accent-light",
                                "sm:px-4",
                                "sm:text-sm sm:normal-case",
                                "sm:tracking-normal",
                            ].join(" ")}
                        >
                            Request access
                        </Link>

                        <Button
                            ref={menuButtonRef}
                            type="button"
                            variant="ghost"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={
                                menuOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            onClick={handleMenuToggle}
                            className="size-11 shrink-0 p-0 text-text-primary"
                        >
                            <MenuIcon open={menuOpen} />
                        </Button>
                    </div>
                </div>
            </Container>

            <div
                id="mobile-navigation"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-navigation-title"
                hidden={!menuOpen}
                className={[
                    "border-t border-border bg-background",
                    "lg:hidden",
                ].join(" ")}
            >
                <Container>
                    <div className="flex min-h-[calc(100svh-5rem)] flex-col py-8">
                        <h2
                            id="mobile-navigation-title"
                            className="sr-only"
                        >
                            Main navigation
                        </h2>

                        <nav aria-label="Mobile navigation">
                            <ul className="divide-y divide-border">
                                {navigationItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={[
                                                "flex min-h-16 items-center",
                                                "text-2xl font-medium text-text-primary",
                                                "transition-colors duration-200",
                                                "hover:text-accent-light",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mt-auto border-t border-border pt-8">
                            <Link
                                href={CTA_HREF}
                                onClick={closeMenu}
                                className={[
                                    "inline-flex min-h-12 w-full items-center justify-center",
                                    "rounded-md bg-accent-gold px-5",
                                    "text-sm font-medium text-background",
                                    "transition-colors duration-200",
                                    "hover:bg-accent-light",
                                ].join(" ")}
                            >
                                Request access
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
}