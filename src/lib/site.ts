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

const isLocalhost =
    siteUrl.hostname === "localhost" ||
    siteUrl.hostname === "127.0.0.1";

if (
    process.env.NODE_ENV === "production" &&
    !isLocalhost &&
    siteUrl.protocol !== "https:"
) {
    throw new Error(
        "NEXT_PUBLIC_SITE_URL must use HTTPS in production.",
    );
}

export { siteUrl };

export const siteConfig = {
    name: "Aurora Meridian",
    legalName: "Aurora Meridian Gestão de Recursos Ltda.",
    title: "Aurora Meridian — Gestão profissional de recursos",
    description:
        "Gestora independente brasileira orientada por inteligência macroeconômica, disciplina de risco e perspectiva global.",
    url: siteUrl,
    locale: "pt_BR",
};