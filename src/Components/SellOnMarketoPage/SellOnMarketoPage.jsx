import { Link } from "react-router-dom";
import VendorEconomics from "./VendorEconomics";
import WhyMarketo from "./WhyMarketToSection";
import VendorToolset from "./VendorToolSet";
import BellLanding from "./BellLanding";

// Swap this for your own photo (grayscale is applied via CSS)
const HERO_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80";

const STATS = [
  { value: "2–3", label: "Days to review" },
  { value: "24/7", label: "Vendor support" },
];

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e3300f] focus-visible:ring-offset-2";

export default function VendorProgram() {
  return (
    <main
      className="min-h-screen w-full border-t border-black bg-white text-black x"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@800;900&display=swap');
      .display{font-family:'Barlow Condensed','Barlow',sans-serif;font-weight:900;letter-spacing:-0.01em}`}</style>

     <section className="flex flex-col lg:flex-row">
         {/* LEFT: message */}
      <section className="flex flex-col px-5 py-8 sm:px-10 sm:py-12 lg:min-h-screen w-full lg:w-[70%] lg:px-14 lg:py-14 xl:px-20">
        <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] sm:text-[11px]">
          <span aria-hidden="true" className="h-px w-8 bg-black" />
          SELL ON MARKETO / VENDOR PROGRAM
        </div>

        <h1 className="display my-10 text-[clamp(3.75rem,17vw,6.5rem)] uppercase leading-[0.88] sm:my-14 sm:text-[clamp(5rem,14vw,8rem)] lg:my-auto lg:py-10 lg:text-[clamp(5rem,9vw,9.5rem)]">
          Your store.
          <br />
          A bigger
          <br />
          market.
        </h1>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <p className="max-w-[420px] text-base leading-relaxed text-neutral-800 sm:text-[17px]">
            Reach new customers, run your business with confidence, and grow
            without giving up what makes your brand distinct.
          </p>

          <Link
            to="/vendor/vendor-register"
            className={`inline-flex h-12 shrink-0 items-center justify-center gap-3 bg-[#e3300f] px-7 text-[11px] font-bold tracking-[0.15em] text-white transition-colors hover:bg-black sm:w-auto ${focusRing}`}
          >
            START YOUR APPLICATION
            <span aria-hidden="true" className="text-base leading-none">
              ›
            </span>
          </Link>
        </div>
      </section>

      {/* RIGHT: proof */}
      <aside className="flex w-full lg:w-[30%] flex-col border-t border-black lg:min-h-screen lg:border-l lg:border-t-0">
        <div className="relative h-60 overflow-hidden border-b border-black sm:h-80 lg:h-auto lg:flex-[1.15]">
          <img
            src={HERO_IMG}
            alt="A vendor working in their shop"
            className="h-full w-full object-cover object-top grayscale contrast-110"
          />
        </div>

        <div className="bg-black px-6 py-8 text-white sm:px-10 lg:px-8 lg:py-10 xl:px-10">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-400">
            54,000+ ACTIVE VENDORS
          </p>
          <h2
            className="display mt-3 text-4xl uppercase leading-[0.92] sm:text-5xl lg:text-[44px] xl:text-5xl"
            style={{ textShadow: "1.5px 0 #e3300f, -1.5px 0 #22d3ee" }}
          >
            Built for
            <br />
            business.
          </h2>
          <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-neutral-400">
            Professional commerce infrastructure for ambitious independent
            sellers at every stage.
          </p>
        </div>

        <dl className="grid grid-cols-2 border-t border-neutral-700 bg-neutral-100">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-5 sm:px-10 lg:px-6 xl:px-8 ${
                i > 0 ? "border-l border-black/20" : ""
              }`}
            >
              <dd className="display text-3xl leading-none sm:text-4xl">
                {s.value}
              </dd>
              <dt className="mt-2 text-[10px] font-semibold tracking-[0.18em] text-neutral-600">
                {s.label.toUpperCase()}
              </dt>
            </div>
          ))}
        </dl>
      </aside>
     </section>
      <VendorEconomics/>
      <WhyMarketo/>
      <VendorToolset/>
      <BellLanding/>
      
    </main>
  );
}