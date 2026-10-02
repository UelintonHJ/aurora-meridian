import { Hero } from "@/components/Hero";
import { FirmSection } from "@/components/FirmSection";
import { InvestmentApproach } from "@/components/InvestmentApproach";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ResearchTechnologySection } from "@/components/ResearchTechnologySection";
import { CultureSection } from "@/components/CultureSection";
import { InstitutionalAccess } from "@/components/InstitutionalAccess";

export default function Home() {
  return (
    <>
        <Hero />
        <FirmSection />
        <InvestmentApproach />
        <CapabilitiesSection />
        <ResearchTechnologySection />
        <CultureSection />
        <InstitutionalAccess />
    </>
  );
}
