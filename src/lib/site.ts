const explicitSiteUrl = 
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;

const vercelProductionUrl = 
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

const resolvedSiteUrl =
    explicitSiteUrl ??
    (vercelProductionUrl
        ? `https://${vercelProductionUrl}`
        : "http://localhost:3000");

const siteUrl = new URL(resolvedSiteUrl);

if (
    process.env.NODE_ENV === "production" &&
    siteUrl.protocol !== "https:"
) {
    throw new Error(
        "NEXT_PUBLIC_SITE_URL must use HTTPS in production.",
    );
}

export { siteUrl };

export const siteConfig = {
    name: "Aurora Meridian",
    title: "Aurora Meridian — Beyond the Market Radar",
    description:
        "Case conceitual fictício de uma gestora de investimentos orientada por pesquisa, disciplina e visão de longo prazo.",
    url: siteUrl,
    locale: "en_US",
};