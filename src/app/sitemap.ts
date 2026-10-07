import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "/", 
        "/about", 
        "/approach", 
        "/strategies",
        "/research",
        "/culture",
        "/careers",
    ];

    return routes.map((route) => ({
        url: new URL(route, siteConfig.url).toString(),
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : 0.8,
    }));
}
