// Swap this for your own photo (grayscale is applied via CSS)
const BANNER_IMG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80";

const STATS = [
  { value: "$0", label: "Monthly marketplace fee" },
  { value: "5–12%", label: "Commission by category" },
  { value: "7 days", label: "Standard payout cycle" },
  { value: "190+", label: "Countries reached" },
];

export default function VendorEconomics() {
  return (
    <section
      className="w-full bg-neutral-100 px-4 py-6 text-black sm:px-8 lg:px-10"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      

      {/* Top line */}
      <div className="flex flex-col gap-1 border-b border-black pb-4 text-[10px] font-semibold tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
        <p>SIMPLE, TRANSPARENT ECONOMICS</p>
        <p className="text-neutral-500">PAY FOR PERFORMANCE, NOT FOR ACCESS.</p>
      </div>

      {/* Frame */}
      <div className="mt-5 border border-black bg-white">
        <div className="h-40 overflow-hidden border-b border-black sm:h-56 lg:h-72">
          <img
            src="https://i.ibb.co.com/sfTXrm9/krakenimages-376-KN-ISpl-E-unsplash.jpg"
            alt="Shop shelves with paper bags ready for shipping"
            className="h-full w-full object-cover object-center grayscale contrast-110"
          />
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`border-black px-5 py-6 sm:px-6 sm:py-8 lg:py-10 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i > 1 ? "border-t" : ""} lg:border-t-0 ${
                i === 0 ? "lg:border-l-0" : "lg:border-l"
              }`}
            >
              <dd
                className="display text-4xl leading-none sm:text-5xl"
                style={{ textShadow: "1px 0 #e3300f, -1px 0 #22d3ee" }}
              >
                {s.value}
              </dd>
              <dt className="mt-3 text-[10px] font-semibold tracking-[0.16em] text-neutral-500 sm:text-[11px]">
                {s.label.toUpperCase()}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}