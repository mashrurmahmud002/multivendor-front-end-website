import { useEffect } from "react";

/**
 * Marketo — About / Purpose section
 * Stack: React + Tailwind CSS
 * Font:  Barlow (400/500/600) + Barlow Condensed is NOT needed — headline uses Barlow 900.
 */
export default function AboutBanner() {
  // Load Barlow without touching index.html
  useEffect(() => {
    const id = "barlow-font";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;800;900&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
      className="min-h-screen w-full bg-white text-black border border-black grid grid-cols-1 lg:grid-cols-[1fr_clamp(300px,33%,420px)]"
    >
      {/* LEFT — headline */}
      <div className="flex flex-col justify-between gap-12 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 lg:border-r lg:border-black">
        <div className="flex items-center gap-3">
          <span className="h-px w-5 bg-black" aria-hidden="true" />
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em]">
            About Marketo / Est. 2019
          </p>
        </div>

        <h1 className="font-black uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(3rem,10.5vw,8.5rem)] lg:text-[clamp(4rem,8.6vw,9rem)]">
          Commerce
          <br />
          with more
          <br />
          character.
        </h1>

        <p className="max-w-md text-base sm:text-lg leading-snug font-medium">
          Marketo is the global marketplace where independent vendors build
          meaningful businesses and customers discover products worth keeping.
        </p>
      </div>

      {/* RIGHT — purpose + approach */}
      <aside className="grid grid-rows-[auto_1fr] border-t border-black lg:border-t-0">
        {/* Purpose */}
        <div className="bg-black text-white px-5 py-8 sm:px-8 lg:px-8 lg:py-10 flex flex-col justify-between gap-16 lg:min-h-[245px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
            Our purpose
          </p>
          <h2 className="font-black uppercase leading-[0.95] tracking-[-0.01em] text-3xl sm:text-4xl lg:text-[2.1rem] xl:text-4xl">
            Make the global market feel local again.
          </h2>
        </div>

        {/* Approach */}
        <div className="bg-neutral-100 px-5 py-8 sm:px-8 lg:py-10 flex flex-col justify-between gap-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600">
            Built for both sides
          </p>

          <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
            Better tools for sellers. Better choices for buyers. One
            accountable platform connecting every part of the experience.
          </p>

          <a
            href="#approach"
            className="group inline-flex w-fit items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-100"
          >
            Explore our approach
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </div>
      </aside>
    </section>
  );
}