import localFont from "next/font/local";

export const rondelle = localFont({
    src: "./fonts/Rondelle-EGgr.woff2",
    variable: "--font-rondelle",
    display: "swap",
    fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const wulkanDisplay = localFont({
    src: "./fonts/Wulkan-Display-SemiBold.woff2",
    weight: "600",
    variable: "--font-wulkan-display",
    display: "swap",
    fallback: ["Georgia", "serif"],
})