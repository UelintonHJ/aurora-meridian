import type { Metadata } from "next";
import { headers } from "next/headers";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { rondelle, wulkanDisplay } from "./fonts";
import { siteConfig } from "@/lib/site";
import "@/styles/globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}#website`,
      url: siteConfig.url.toString(),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.locale.replace("_", "-"),
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description: siteConfig.description,
      url: siteConfig.url.toString(),
      logo: `${siteConfig.url}images/aurora-meridian-logo.png`,
    },
  ],
};

function serializeStructuredData(
  data: typeof structuredData,
) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: siteConfig.url,

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  
  description: siteConfig.description,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Aurora Meridian — Gestão profissional de recursos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = 
    (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="pt-BR"
      className={[
        rondelle.variable,
        wulkanDisplay.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="min-h-full bg-canvas text-text-primary">
        <SkipLink />

        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        <script
        nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: 
              serializeStructuredData(
                structuredData,
              ),
          }}
        />
      </body>
    </html>
  );
}
