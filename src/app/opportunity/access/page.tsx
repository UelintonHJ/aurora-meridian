import type { Metadata } from "next";

import { AccessFlow } from "@/components/secure-conversion/AccessFlow";

export const metadata: Metadata = {
    title: "Request Access",
    description:
        "Access flow for the Aurora Meridian fictional portfolio case.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function OpportunityAccessPage() {
    return <AccessFlow />;
}