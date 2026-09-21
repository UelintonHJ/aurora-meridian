import { Header } from "@/components/Header";

const sections = [
  {
    id: "strategy",
    label: "Strategy",
  },
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
        <section
          className="flex min-h-[85svh] items-end"
          aria-labelledby="hero-title"
        >
          <div className="mx-auto w-full max-w-(--container-max-width) px-(--container-gutter) pb-20 sm:px-6 md:pb-24 lg:px-8">
            <p className="mb-5 text-xs font-medium uppercase tracking-wider text-accent-gold">
              Investment Management
            </p>

            <h1
              id="hero-title"
              className="max-w-4xl font-display text-6xl leading-none tracking-tight text-text-primary sm:text-7xl lg:text-[7.5rem]"
            >
              Beyond the market radar.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary">
              A conceptual institutional experience built around
              research, discipline and long-term thinking.
            </p>
          </div>
        </section>

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
