import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstitutionalProof } from "@/components/InstitutionalProof";
import { OpportunityMap } from "@/components/OpportunityMap";
import { FundShowcase } from "@/components/FundShowcase";
import { BookExperience } from "@/components/BookExperience";
import { CultureSports } from "@/components/CultureSports";

const sections = [
  {
    id: "insights",
    label: "Insights",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "opportunity",
    label: "Opportunity",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        
        <InstitutionalProof />

        <OpportunityMap />

        <FundShowcase />

        <BookExperience />

        <CultureSports />

        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-[70svh] border-t border-border py-24"
            aria-labelledby={`${section.id}-title`}
          >
            <div className="mx-auto w-full max-w-(--container-max-width) px-(--container-gutter) sm:px-6 lg:px-8">
              <p className="text-xs font-medium uppercase tracking-wider text-accent-gold">
                Aurora Meridian
              </p>

              <h2
                id={`${section.id}-title`}
                className="mt-4 font-display text-5xl text-text-primary sm:text-6xl"
              >
                {section.label}
              </h2>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
