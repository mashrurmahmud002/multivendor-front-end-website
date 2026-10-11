// Swap each image for your own photo (grayscale is applied via CSS)
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80";

const FEATURES = [
  {
    title: "A storefront that stays yours",
    text: "Build a clear brand presence with your own story, policies, catalog, and visual identity—inside a marketplace customers already trust.",
    img: "https://i.ibb.co.com/rfKzNbpp/Brand.jpg",
    alt: "A brand's workshop and shelves",
  },
  {
    title: "One command center",
    text: "Manage products, inventory, orders, fulfillment, messages, returns, and payouts from one focused vendor dashboard.",
    img: "https://i.ibb.co.com/MkTFqm8q/Command.jpg",
    alt: "Laptop dashboard beside fabric samples",
  },
  {
    title: "Data you can act on",
    text: "Understand traffic, conversion, top products, customer behavior, and stock performance through real-time reporting.",
    img: "https://i.ibb.co.com/HL9NKQ1L/traffic.jpg",
    alt: "Shop wall with paper bags",
  },
  {
    title: "Growth without guesswork",
    text: "Use marketplace campaigns, vendor spotlights, merchandising opportunities, and practical guidance to reach the right buyers.",
    img: "https://i.ibb.co.com/9H90LFdp/markerplace.jpg",
    alt: "A maker working at a bench",
  },
  {
    title: "Payments made simpler",
    text: "Accept major payment methods without building your own infrastructure. We process transactions and organize your payouts.",
    img: "https://i.ibb.co.com/FLx6Lz2n/payment.jpg",
    alt: "Printed order sheet and packaging",
  },
  {
    title: "Support that knows commerce",
    text: "Get help with onboarding, catalog quality, fulfillment, disputes, and account health from a dedicated marketplace team.",
    img: "https://i.ibb.co.com/WWY0pCjN/support.jpg",
    alt: "A vendor crafting a product by hand",
  },
];

export default function VendorToolset() {
  return (
    <section
      className="w-full bg-white px-4 py-10 text-black sm:px-8 sm:py-14 lg:px-10 lg:py-16"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@900&display=swap');
      .display{font-family:'Barlow Condensed','Barlow',sans-serif;font-weight:900;letter-spacing:-0.01em}`}</style>

      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div>
          <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-neutral-500 sm:text-[11px]">
            YOUR VENDOR TOOLSET
          </p>
          <h2
            className="display text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-[0.92]"
            style={{ textShadow: "1.5px 0 #e3300f, -1.5px 0 #22d3ee" }}
          >
            Everything needed
            <br />
            to move forward.
          </h2>
        </div>
        <p className="max-w-[260px] text-sm leading-relaxed text-neutral-500 lg:mb-3">
          One connected system from first product upload to repeat purchase.
        </p>
      </div>

      {/* Grid (gap-px over a black background draws the divider lines) */}
      <ul className="mt-8 grid grid-cols-1 gap-px border border-black bg-black sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <li key={f.title} className="flex flex-col bg-white">
            <div className="relative h-40 overflow-hidden sm:h-36 lg:h-[130px] xl:h-40">
              <img
                src={f.img}
                alt={f.alt}
                className="h-full w-full object-cover grayscale contrast-110"
              />
              <span className="absolute left-0 top-0 border-b border-r border-black bg-white px-2 py-1 text-[10px] font-semibold tracking-[0.12em]">
                {String(i + 1).padStart(2, "0")} / {String(FEATURES.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-end border-t border-black px-5 py-6 sm:min-h-[200px] sm:px-6 lg:min-h-[170px] lg:py-7">
              <h3 className="display text-xl uppercase leading-tight sm:text-[22px]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {f.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}