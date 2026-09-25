import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function buildContentSecurityPolicy(nonce: string) {
    const isDevelopment = process.env.NONE_ENV !== "production";

    const scriptSource = isDevelopment
        ? `'self' 'nonce-${nonce}' 'unsafe-eval' 'unsafe-inline'`
        : `'self' 'nonce-${nonce}' 'strict-dynamic'`;

    const styleSource = isDevelopment
        ? `'self' 'unsafe-inline'`
        : `'self' 'nonce-${nonce}'`;

    return [
        "default-src 'self'",
        `script-src ${scriptSource}`,
        `style-src ${styleSource}`,
        "style-src-attr 'none'",
        "img-src 'self' data: blob:",
        "font-src 'self'",
        "connect-src 'self'",
        "media-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'",
        "manifest-src 'self'",
        "worker-src 'self' blob:",
        "upgrade-insecure-requests",
    ].join("; ");
}

export function proxy(request: NextRequest) {
    const nonce = Buffer.from(
        crypto.randomUUID(),
    ).toString("base64");

    const contentSecurityPolicy =
        buildContentSecurityPolicy(nonce);

    const requestHeaders = new Headers(
        request.headers,
    );

    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set(
        "Content-Security-Policy",
        contentSecurityPolicy,
    );

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set(
        "Content-Security-Policy",
        contentSecurityPolicy,
    );

    return response;
}

export const config = {
    matcher: [
        {
            source:
                "/((?!api|_next/data|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
            missing: [
                {
                    type: "header",
                    key: "next-router-prefetch",
                },
                {
                    type: "header",
                    key: "purpose",
                    value: "prefetch",
                },
            ],
        },
    ],
};