import { useEffect } from "react";

const STATS = [
  {
    value: "84K+",
    label: "Active vendors",
    note: "From independent makers to established brands",
  },
  {
    value: "2.1M",
    label: "Products listed",
    note: "Across carefully organized global categories",
  },
  {
    value: "190+",
    label: "Countries served",
    note: "With localized delivery and payment options",
  },
  {
    value: "98%",
    label: "Buyer satisfaction",
    note: "Measured across verified marketplace orders",
  },
];

/**
 * Marketo — "At a glance" stats section
 * Stack: React + Tailwind CSS
 */
export default function MarketoAtAGlance() {
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
      className="w-full bg-neutral-100 text-black border-t border-black"
    >
      {/* Inset container: header rule and grid share the same width */}
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4 lg:px-6">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4 border-b border-black px-4 py-4">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em]">
            Marketo at a glance
          </h2>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-600">
            Updated 2026
          </p>
        </div>

        {/* Stats grid: dividers only between cells */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col px-5 py-8 lg:py-10 border-black",
                "border-b last:border-b-0",
                "sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0",
                "lg:border-b-0 lg:border-r lg:last:border-r-0",
              ].join(" ")}
            >
              <p className="text-[10px] font-medium tracking-[0.18em] text-neutral-600">
                {String(i + 1).padStart(2, "0")} / {String(STATS.length).padStart(2, "0")}
              </p>
              <p className="mt-5 font-black leading-[0.9] tracking-[-0.02em] text-[clamp(3rem,6vw,4.5rem)]">
                {s.value}
              </p>
              <h3 className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em]">
                {s.label}
              </h3>
              <p className="mt-3 max-w-[16rem] text-sm leading-snug text-neutral-600">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}