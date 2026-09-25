import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/opportunity/access",
        },
        sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    };
}