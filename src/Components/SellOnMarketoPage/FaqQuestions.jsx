import { useState } from "react";

const IMG =
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=80";

const FAQS = [
  ["Who can sell on Marketo?", "Independent makers, studios, retailers, emerging brands, and established businesses may apply. Every application is reviewed for product fit, business authenticity, operational readiness, and alignment with marketplace standards."],
  ["What does it cost?", "There is no monthly marketplace fee. Marketo charges a category-based commission of 5–12% when an item sells. Any applicable processing or optional campaign costs are shown clearly before you participate."],
  ["How quickly can I launch?", "Most complete applications are reviewed within 2–3 business days. Once approved, sellers can build and submit a storefront immediately. Launch timing depends mainly on catalog size and product readiness."],
  ["Do I control pricing and inventory?", "Yes. You set retail prices, available quantities, processing times, shipping coverage, and product availability. You can update your catalog whenever your business requires it."],
  ["How do orders and shipping work?", "Customers check out through Marketo, and orders appear in your vendor dashboard. You prepare and ship each order according to your published processing time, then add tracking so both you and the customer can follow delivery."],
  ["When do vendors get paid?", "Standard payouts are released seven days after confirmed delivery, subject to account standing and applicable reserves. Your dashboard provides a complete view of pending, scheduled, and completed payouts."],
];



export default function FaqSection() {
  const [open, setOpen] = useState(0);

  

  return (
    <section
      className="w-full bg-white px-6 py-12 text-black sm:px-9"
      style={{ fontFamily: "'Barlow', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[670px_1fr] lg:gap-[30px]">
        {/* Left */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Vendor FAQ</p>
          <h2 className="mt-5 text-[32px] font-extrabold uppercase leading-[0.95] tracking-tight">
            Know before
            <br />
            you apply.
          </h2>
          <img
            src={IMG}
            alt=""
            className="mt-5 h-[280px] w-full border border-black object-cover grayscale"
          />
        </div>

        {/* Right */}
        <div className="border-t border-black">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
           
            return (
              <div key={q} className="border-b border-black">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-6 py-4 text-left"
                >
                  <span className="w-5 text-2xl text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-2xl font-extrabold uppercase">{q}</span>
                  <span className="text-xl">{isOpen ? "×" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="max-w-full pb-5 pl-11 text-2xl leading-relaxed text-neutral-500">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}