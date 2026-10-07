import { useEffect } from "react";

/* Default line-art visuals. Replace any with a photo via `image: "/path.jpg"`. */
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ART = {
  independent: (
    <svg viewBox="0 0 120 80" className="h-full w-full" {...stroke} aria-hidden="true">
      <path d="M20 34h80l-6-18H26z" />
      <path d="M26 34v32h68V34" />
      <path d="M50 66V46h20v20" />
      <path d="M40 34c0 5 4 8 10 8s10-3 10-8c0 5 4 8 10 8s10-3 10-8" />
    </svg>
  ),
  trust: (
    <svg viewBox="0 0 120 80" className="h-full w-full" {...stroke} aria-hidden="true">
      <path d="M60 12l28 10v20c0 14-11 24-28 30-17-6-28-16-28-30V22z" />
      <path d="M48 42l9 9 16-18" />
    </svg>
  ),
  choice: (
    <svg viewBox="0 0 120 80" className="h-full w-full" {...stroke} aria-hidden="true">
      <rect x="22" y="16" width="22" height="22" />
      <rect x="49" y="16" width="22" height="22" />
      <rect x="76" y="16" width="22" height="22" />
      <rect x="22" y="43" width="22" height="22" />
      <rect x="49" y="43" width="22" height="22" />
      <path d="M76 54h22M87 43v22" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 120 80" className="h-full w-full" {...stroke} aria-hidden="true">
      <path d="M24 66V50M46 66V40M68 66V30M90 66V18" />
      <path d="M20 66h80" />
      <path d="M24 38l22-10 22-8 22-8" />
      <path d="M82 12h8v8" />
    </svg>
  ),
};

const PRINCIPLES = [
  {
    art: "independent",
    image: "", // e.g. "/images/principle-1.jpg"
    title: "Independent by design",
    text: "We give vendors the tools, data, and visibility to build a durable business without giving up their identity.",
  },
  {
    art: "trust",
    image: "",
    title: "Trust is infrastructure",
    text: "Seller verification, protected payments, clear policies, and responsive support are built into every transaction.",
  },
  {
    art: "choice",
    image: "",
    title: "Choice without chaos",
    text: "A broad catalog should still feel navigable. We invest in quality standards, useful filters, and transparent product data.",
  },
  {
    art: "growth",
    image: "",
    title: "Growth should be shared",
    text: "When customers discover something exceptional and vendors earn repeat business, the whole marketplace becomes stronger.",
  },
];

/**
 * Marketo — "What guides us" principles
 * Stack: React + Tailwind CSS
 */
export default function MarketoPrinciples() {
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
      className="w-full bg-black px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(120px,22%)_1fr] lg:gap-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 lg:pt-3">
            What guides us
          </p>
          <h2 className="font-black uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2.2rem,5.2vw,4.1rem)]">
            Four principles.
            <br />
            No fine print.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 border-l border-t border-neutral-600 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col border-b border-r border-neutral-600 p-5 sm:p-6"
            >
              {/* Image slot with number on top */}
              <div className="relative h-36 overflow-hidden border border-neutral-700 bg-neutral-950 sm:h-40 lg:h-44">
                {p.image ? (
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-6 text-white/70 transition-colors duration-300 group-hover:text-white">
                    {ART[p.art]}
                  </div>
                )}
                <span className="absolute left-3 top-3 text-[11px] font-semibold tracking-wider text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 font-black uppercase leading-tight tracking-[-0.005em] text-[15px]">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-neutral-400">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}