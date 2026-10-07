import { useEffect } from "react";

const ShieldCheck = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ITEMS = [
  {
    title: "Verified vendors",
    text: "Identity and business checks help establish accountability before a seller goes live.",
  },
  {
    title: "Protected payments",
    text: "Secure payment processing and monitored transactions safeguard buyers and vendors.",
  },
  {
    title: "Clear standards",
    text: "Marketplace policies cover product accuracy, delivery expectations, returns, and conduct.",
  },
  {
    title: "Real accountability",
    text: "Verified reviews and marketplace-level support create a reliable record for every order.",
  },
];

/**
 * Marketo — Trust & Safety
 * Stack: React + Tailwind CSS
 */
export default function MarketoTrust() {
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
      className="w-full border-t border-black bg-neutral-100 px-5 py-14 text-black sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <p className="text-[10px] font-medium uppercase tracking-[0.18em]">
          Trust &amp; safety
        </p>
        <h2 className="mt-5 max-w-xl font-black uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2.2rem,5vw,3.6rem)]">
          Confidence is part of the product.
        </h2>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600">
          Trust cannot be added at checkout. It has to shape how sellers join,
          how products are represented, and how every order is supported.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 border-l border-t border-black sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:max-w-[1000px]">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[200px] flex-col justify-between border-b border-r border-black bg-white p-5 sm:min-h-[220px] lg:min-h-[160px]"
            >
              <ShieldCheck />
              <div className="mt-10">
                <h3 className="font-black uppercase leading-tight tracking-[-0.005em] text-sm">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}