export default function WhoThrivesHere() {
  const criteria = [
    {
      num: "01",
      title: "PRODUCTS WITH A POINT OF VIEW",
      desc: "Original, well-made, well-sourced, or thoughtfully selected products with accurate descriptions.",
    },
    {
      num: "02",
      title: "RELIABLE OPERATIONS",
      desc: "Clear inventory, realistic processing times, secure packaging, and trackable fulfillment.",
    },
    {
      num: "03",
      title: "PROFESSIONAL SERVICE",
      desc: "Responsive communication, transparent policies, and fair resolution when an order needs attention.",
    },
    {
      num: "04",
      title: "AUTHENTIC BUSINESSES",
      desc: "Verified ownership and a commitment to lawful, responsible, and honest marketplace participation.",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold tracking-[3px] text-black/50 uppercase">
            Who Thrives Here
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-black">
            GOOD PRODUCTS.
            <br />
            SERIOUS SELLERS.
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-black/60 max-w-md">
            We welcome businesses of different sizes and models. What matters is a strong product proposition and a professional commitment to the customer.
          </p>

          <div className="relative overflow-hidden mt-2">
            <img
              src="https://i.ibb.co.com/Q7XDMtbF/tool-box.jpg"
              alt="Open box with tools and utensils"
              className="w-full h-[200px] sm:h-[280px] md:h-[350px] object-cover grayscale"
            />
          </div>
        </div>

        {/* Right Column – Criteria Grid */}
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {criteria.map((item) => (
              <div key={item.num} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-black text-black/10 leading-none">
                  {item.num}
                </span>
                <h3 className="text-[11px] md:text-xs font-bold tracking-[1.5px] text-black mt-1">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-black/55">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}   