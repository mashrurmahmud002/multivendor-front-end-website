// Swap this for your own photo (grayscale is applied via CSS)
const PORTRAIT_IMG =
  "https://i.ibb.co.com/VpDwNqxs/maranda-vandergriff-7aak-Zd-Il4vg-unsplash.jpg";

export default function WhyMarketo() {
  return (
    <section
      className="w-full bg-white px-4 py-10 text-black sm:px-8 sm:py-14 lg:px-10 lg:py-16"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@900&display=swap');
      .display{font-family:'Barlow Condensed','Barlow',sans-serif;font-weight:900;letter-spacing:-0.01em}`}</style>

      <div className="grid gap-8 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-12 xl:gap-16">
        {/* Left: label + portrait */}
        <div>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-neutral-500 sm:text-[11px]">
            WHY MARKETO
          </p>
          <div className="aspect-[4/5] w-full max-w-[320px] overflow-hidden border border-black sm:max-w-[360px] lg:max-w-none">
            <img
              src={PORTRAIT_IMG}
              alt="A maker working on a leather craft project"
              className="h-full w-full object-cover grayscale contrast-110"
            />
          </div>
        </div>

        {/* Right: message */}
        <div className="lg:pt-8">
          <h2
            className="display max-w-[900px] text-[clamp(2.25rem,6vw,4.25rem)] uppercase leading-[0.95]"
            style={{ textShadow: "1.5px 0 #e3300f, -1.5px 0 #22d3ee" }}
          >
            Marketplace reach without marketplace sameness.
          </h2>

          <div className="mt-6 grid gap-5 text-sm leading-relaxed text-neutral-600 sm:mt-8 sm:grid-cols-2 sm:gap-8 sm:text-[15px]">
            <p>
              Customers come to Marketo to find products with character. That
              makes your perspective, expertise, and standards an
              advantage—not something to hide behind a generic listing.
            </p>
            <p>
              We combine that discovery with the practical systems required to
              sell professionally: secure checkout, order management,
              analytics, payouts, and marketplace support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}