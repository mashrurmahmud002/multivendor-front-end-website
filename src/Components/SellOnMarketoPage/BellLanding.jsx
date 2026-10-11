import { Link } from "react-router-dom";

export default function BellLanding() {
  const steps = [
    {
      num: "01",
      title: "APPLY",
      desc: "Tell us about your business, products, operations, and where you ship from. Most applications take under 15 minutes.",
    },
    {
      num: "02",
      title: "GET VERIFIED",
      desc: "Our marketplace team reviews your identity, business information, product fit, and customer policies.",
    },
    {
      num: "03",
      title: "BUILD YOUR STORE",
      desc: "Add your brand story, upload products, set inventory, configure shipping, and connect your payout method.",
    },
    {
      num: "04",
      title: "START SELLING",
      desc: "Publish your storefront, welcome customers, fulfill orders, and track performance from your dashboard.",
    },
  ];

  return (
    <section className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="px-8 pt-12 pb-8 md:px-16">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-black">
          FROM APPLICATION
          <br />
          TO FIRST SALE
        </h1>
        <p className="mt-4 text-sm md:text-base font-semibold tracking-[2px] text-black/70">
          FOUR CLEAR STEPS. ONE WORKING STORE.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mx-8 md:mx-16 overflow-hidden">
        <img
          src="https://i.ibb.co.com/355XVSwL/Buisness-Holder.jpg"
          alt="Shop owner in workspace"
          className="w-full h-[300px] md:h-[500px] object-cover grayscale"
        />
      </div>

      {/* Steps Grid */}
      <div className="px-8 md:px-16 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col">
              <span className="text-5xl md:text-6xl font-black text-black/10">
                {step.num}
              </span>
              <h3 className="mt-3 text-sm font-bold tracking-[1.5px] text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-black/60">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link to='/vendor/vendor-register'
            
            className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold tracking-[1.5px] px-8 py-4 hover:bg-red-700 transition-colors"
          >
            APPLY TO BELL <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}   