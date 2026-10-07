import type { Metadata } from "next";

import { AccessFlow } from "@/components/secure-conversion/AccessFlow";

export const metadata: Metadata = {
    title: "Request Access",
    description:
        "Entre em contato com a Aurora Meridian para conhecer nossas estratégias e estabelecer uma relação institucional.",
    alternates: {
        canonical: "/opportunity/access",
    },
};

export default function OpportunityAccessPage() {
    return <AccessFlow />;
}