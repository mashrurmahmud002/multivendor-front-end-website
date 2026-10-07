import { useEffect } from "react";
import { Link } from "react-router-dom";

const Arrow = () => (
  <svg
    viewBox="0 0 16 8"
    className="h-2 w-4 transition-transform duration-200 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <path d="M0 4h14M11 1l3 3-3 3" />
  </svg>
);

const BLOCKS = [
  {
    eyebrow: "Ready to explore?",
    title: ["Find your", "next favorite."],
    text: "Discover original products, trusted vendors, and new ideas from around the world.",
    cta: "Shop the marketplace",
    to: "/shop",
    style:
      "border border-black text-black hover:bg-black hover:text-white focus-visible:ring-black",
  },
  {
    eyebrow: "Build something bigger",
    title: ["Bring your", "store to us."],
    text: "Join a marketplace designed to help serious independent businesses reach more customers.",
    cta: "Apply as a vendor",
    to : "/vendor/vendor-register",
    style:
      "bg-[#e8341c] text-white border border-[#e8341c] hover:bg-black hover:border-black focus-visible:ring-[#e8341c]",
  },
];

/**
 * Marketo — closing call to action
 * Stack: React + Tailwind CSS
 */
export default function MarketoCTA() {
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
      className="w-full bg-white text-black"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-2">
        {BLOCKS.map((b, i) => (
          <div
            key={b.cta}
            className={[
              "px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20",
              i === 0
                ? "border-b border-black md:border-b-0 md:border-r"
                : "",
            ].join(" ")}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600">
              {b.eyebrow}
            </p>
            <h2 className="mt-6 font-black uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(2.4rem,5vw,3.6rem)]">
              {b.title[0]}
              <br />
              {b.title[1]}
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600">
              {b.text}
            </p>
            <Link to={b.to}
              href={b.href}
              className={`group mt-8 inline-flex items-center gap-4 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${b.style}`}
            >
              {b.cta}
              <Arrow />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}