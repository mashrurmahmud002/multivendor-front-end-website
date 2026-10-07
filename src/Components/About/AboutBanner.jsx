import { useEffect } from "react";

/**
 * Marketo — About / Purpose section
 * Stack: React + Tailwind CSS
 * Font: Barlow (400/500/600/800/900)
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
      className="min-h-screen min-h-svh w-full container mx-auto bg-white text-black border border-black grid grid-cols-1 lg:grid-cols-12"
    >
      {/* LEFT — headline & intro */}
      <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between gap-8 sm:gap-12 p-6 sm:p-10 lg:p-12 xl:p-16 border-b lg:border-b-0 lg:border-r border-black">
        <div className="flex items-center gap-3">
          <span className="h-px w-5 sm:w-8 bg-black" aria-hidden="true" />
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em]">
            About Marketo / Est. 2019
          </p>
        </div>

        <h1 className="font-black uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(2.5rem,11vw,7.5rem)] lg:text-[clamp(3.5rem,7.5vw,8.5rem)] xl:text-[clamp(4.5rem,8vw,10rem)] my-4">
          Commerce
          <br />
          with more
          <br />
          character.
        </h1>

        <p className="max-w-xl text-base sm:text-lg md:text-xl leading-snug sm:leading-normal font-medium">
          Marketo is the global marketplace where independent vendors build
          meaningful businesses and customers discover products worth keeping.
        </p>
      </div>

      {/* RIGHT — purpose + approach */}
      <aside className="lg:col-span-5 xl:col-span-4 flex flex-col h-full justify-between">
        {/* Purpose */}
        <div className="bg-black text-white p-6 sm:p-10 lg:p-8 xl:p-12 flex flex-col justify-between gap-12 sm:gap-16 flex-1 border-b border-black lg:border-b-0">
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/60">
            Our purpose
          </p>
          <h2 className="font-black uppercase leading-[0.95] tracking-[-0.01em] text-2xl sm:text-4xl lg:text-3xl xl:text-4xl">
            Make the global market feel local again.
          </h2>
        </div>

        {/* Approach */}
        <div className="bg-neutral-100 p-6 sm:p-10 lg:p-8 xl:p-12 flex flex-col justify-between gap-8 sm:gap-12 flex-1">
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-neutral-600">
            Built for both sides
          </p>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-neutral-600">
            Better tools for sellers. Better choices for buyers. One
            accountable platform connecting every part of the experience.
          </p>

          <a
            href="#approach"
            className="group inline-flex w-fit items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-100"
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