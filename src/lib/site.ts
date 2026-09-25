const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

const resolvedSiteUrl =
    explicitSiteUrl ??
    (vercelProductionUrl
        ? `https://${vercelProductionUrl}`
        : "http://localhost:3000");

export const siteUrl = new URL(resolvedSiteUrl);

export const siteConfig = {
    name: "Aurora Meridian",
    title: "Aurora Meridian — Beyond the Market Radar",
    description:
        "Case conceitual fictício de uma gestora de investimentos orientada por pesquisa, disciplina e visão de longo prazo.",
    url: siteUrl,
    locale: "en_US",
};