const META = [
  { label: "12 new items" },
  { label: "This week / 148" },
];

export default function NewArrivalsHeroBanner() {
  return (
    <section
      className="w-full border-t border-black bg-white px-5 pb-10 pt-12 text-black sm:px-10 sm:pb-14 sm:pt-16 lg:px-[88px] lg:pb-16 lg:pt-[84px]"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@900&display=swap');
      .display{font-family:'Barlow',sans-serif;font-weight:900;letter-spacing:-0.02em}`}</style>

      {/* Eyebrow */}
      <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] sm:text-[11px]">
        <span aria-hidden="true" className="h-px w-8 bg-black" />
        JUST LANDED / UPDATED DAILY
      </div>

      <div className="mt-8 flex flex-col gap-8 sm:mt-10 lg:mt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        {/* Heading */}
        <h1 className="display text-[clamp(4rem,17vw,9.5rem)] uppercase leading-[0.85]">
          New
          <br />
          arrivals.
        </h1>

        {/* Description + meta */}
        <div className="max-w-[360px] lg:mb-2 lg:mr-[8%]">
          <p className="text-base leading-relaxed sm:text-[17px]">
            The latest products, independent labels, and fresh ideas added to
            Marketo.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-semibold tracking-[0.18em] text-neutral-600 sm:text-[11px]">
            {META.map((m) => (
              <li key={m.label}>{m.label.toUpperCase()}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}