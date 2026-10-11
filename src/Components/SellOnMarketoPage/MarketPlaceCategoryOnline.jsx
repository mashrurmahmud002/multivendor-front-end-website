export default function MarketplaceCategories() {
  const categories = [
    { num: "01", label: "FASHION & APPAREL" },
    { num: "02", label: "HOME & LIVING" },
    { num: "03", label: "BEAUTY & WELLNESS" },
    { num: "04", label: "ELECTRONICS" },
    { num: "05", label: "FOOD & DRINK" },
    { num: "06", label: "ART & COLLECTIBLES" },
    { num: "07", label: "SPORTS & OUTDOORS" },
    { num: "08", label: "BOOKS & MEDIA" },
  ];

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left: Image + Heading */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[3px] text-black/50 uppercase">
              Marketplace Categories
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-black">
              YOUR CATEGORY.
              <br />
              YOUR OPPORTUNITY.
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="https://i.ibb.co.com/SX9rRGvc/workshop.jpg"
              alt="Workshop with tools and framed art"
              className="w-full h-[250px] sm:h-[320px] md:h-[400px] object-cover grayscale"
            />
          </div>
        </div>

        {/* Right: Category Grid */}
        <div className="border border-black/20">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {categories.map((cat, i) => (
              <div
                key={cat.num}
                className={`flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 ${
                  i < categories.length - 1
                    ? "border-b sm:border-b-0"
                    : ""
                } ${
                  i % 2 === 0 && i < categories.length - 2
                    ? "sm:border-r"
                    : ""
                } ${
                  i < categories.length - 2
                    ? "border-b sm:border-b"
                    : ""
                } ${
                  i === categories.length - 2
                    ? "sm:border-b-0 border-b sm:border-r"
                    : ""
                } ${
                  i === categories.length - 1
                    ? "border-b-0"
                    : ""
                } border-black/20`
                }
              >
                <span className="text-lg sm:text-xl font-black text-black/20">
                  {cat.num}
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[1.5px] text-black">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}   