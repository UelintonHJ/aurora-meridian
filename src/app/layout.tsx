import type { Metadata } from "next";

import { cormorantGaramond, geistMono, geistSans } from "./fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aurora Meridian",
    template: "%s | Aurora Meridian",
  },
  description:
    "Case conceitual fictício de uma gestora de investimentos orientada por pesquisa, disciplina e visão de longo prazo.",
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
      </body>
    </html>
  );
}
