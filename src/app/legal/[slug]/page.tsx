import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocument } from "@/components/legal/LegalDocument";
import {
    getLegalDocument,
    legalDocuments,
} from "@/lib/legal";

type LegalDocumentPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return legalDocuments.map((document) => ({
        slug: document.slug,
    }));
}

export async function generateMetadata({
    params,
}: LegalDocumentPageProps): Promise<Metadata> {
    const { slug } = await params;
    const document = getLegalDocument(slug);

    if (!document) {
        return {};
    }

    return {
        title: document.title,
        description: document.description,
        alternates: {
            canonical: `/legal/${document.slug}`,
        },
    };
}

export default async function LegalDocumentPage({
    params,
}: LegalDocumentPageProps) {
    const { slug } = await params;
    const document = getLegalDocument(slug);

    if (!document) {
        notFound();
    }

    return <LegalDocument document={document} />;
}