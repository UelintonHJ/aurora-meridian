import type { Metadata } from "next";

import { cormorantGaramond, geistMono, geistSans } from "./fonts";
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
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.name,
      description:
        "Fictional investment management firm created exclusively as an educational portfolio case study.",
      url: siteConfig.url.toString(),
      logo: `${siteConfig.url}images/aurora-meridian-logo.png`,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: siteConfig.url,

  title: {
    default: "Aurora Meridian",
    template: "%s | Aurora Meridian",
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
        alt: "Aurora Meridian — Beyond the Market Radar",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        geistSans.variable,
        geistMono.variable,
        cormorantGaramond.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="min-h-full bg-background text-text-primary">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
