import { useEffect } from "react";

const MILESTONES = [
  {
    year: "2019",
    title: "The first market",
    text: "Marketo launches with 120 independent vendors and one clear goal: make small brands easier to discover.",
  },
  {
    year: "2021",
    title: "One connected checkout",
    text: "Multi-vendor checkout and unified order tracking remove the friction from shopping across independent stores.",
  },
  {
    year: "2023",
    title: "Going global",
    text: "Localized payments, cross-border tools, and expanded seller support bring Marketo to more than 100 countries.",
  },
  {
    year: "2026",
    title: "The next marketplace",
    text: "More than 84,000 active vendors now reach customers through a platform built for responsible, long-term commerce.",
  },
];

/**
 * Marketo — "Our story" timeline
 * Stack: React + Tailwind CSS
 */
export default function MarketoStory() {
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
      className="w-full bg-white px-5 py-14 text-black sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[minmax(240px,28%)_1fr] lg:gap-16">
        {/* Intro */}
        <div className="lg:pt-1">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em]">
            Our story
          </p>
          <h2 className="mt-5 font-black uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(1.9rem,3.2vw,2.4rem)]">
            From one market
            <br />
            to the world.
          </h2>
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-neutral-600">
            The platform has changed. The ambition has not: give excellent
            independent businesses a better way to be found.
          </p>
        </div>

        {/* Timeline */}
        <ol className="border-t border-black">
          {MILESTONES.map((m) => (
            <li
              key={m.year}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-b border-black py-6 sm:grid-cols-[110px_1fr] md:grid-cols-[110px_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-x-8 lg:grid-cols-[140px_minmax(0,1fr)_minmax(0,1.2fr)]"
            >
              <p className="font-black leading-none tracking-[-0.01em] text-3xl sm:text-4xl lg:text-[2.1rem]">
                {m.year}
              </p>
              <h3 className="font-black uppercase leading-tight tracking-[-0.005em] text-sm">
                {m.title}
              </h3>
              <p className="col-span-2 max-w-md text-xs leading-relaxed text-neutral-600 sm:col-span-2 sm:col-start-2 md:col-span-1 md:col-start-auto">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}