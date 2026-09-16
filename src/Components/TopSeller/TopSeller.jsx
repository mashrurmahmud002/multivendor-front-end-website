const vendors = [
  {
    initial: "K",
    name: "Kinfolk Studio",
    category: "HOMEWARE & TEXTILES",
    products: "218",
    rating: "4.9",
    badge: "TOP RATED",
  },
  {
    initial: "V",
    name: "Volt Electronics",
    category: "CONSUMER ELECTRONICS",
    products: "543",
    rating: "4.8",
    badge: "VERIFIED",
  },
  {
    initial: "A",
    name: "Atelier Nord",
    category: "FASHION & APPAREL",
    products: "89",
    rating: "4.7",
    badge: "NEW",
  },
  {
    initial: "R",
    name: "Roots & Remedy",
    category: "HEALTH & WELLNESS",
    products: "312",
    rating: "4.9",
    badge: "TOP RATED",
  },
];

const TopSeller = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
      {/* ================= HEADER ================= */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500">
            Featured Vendors
          </p>

          <h2 className="text-[18px] font-black uppercase leading-none tracking-[-0.8px] sm:text-[20px]">
            Top Sellers This Week
          </h2>
        </div>

        <button
          className="
            hidden
            h-[25px]
            border
            border-black
            px-4
            text-[10px]
            font-semibold
            uppercase
            tracking-[1px]
            transition
            hover:bg-black
            hover:text-white
            sm:block
          "
        >
          View All Vendors
        </button>
      </div>

      {/* ================= VENDOR GRID ================= */}
      <div className="grid grid-cols-1 border border-black sm:grid-cols-2 lg:grid-cols-4">
        {vendors.map((vendor, index) => (
          <article
            key={vendor.name}
            className={`
              group
              relative
              min-h-[148px]
              p-[15px]
              transition-colors
              hover:bg-black
              ${
                index !== 0
                  ? "border-t border-black sm:border-l sm:border-t-0"
                  : ""
              }
              ${
                index === 2
                  ? "lg:border-l"
                  : ""
              }
            `}
          >
            {/* ================= TOP ================= */}
            <div className="flex items-start justify-between">
              {/* Initial */}
              <div
                className="
                  flex
                  h-[30px]
                  w-[30px]
                  items-center
                  justify-center
                  bg-black
                  text-[13px]
                  font-black
                  text-white
                  transition-colors
                  group-hover:bg-white
                  group-hover:text-black
                "
              >
                {vendor.initial}
              </div>

              {/* Badge */}
              <span
                className="
                  border
                  border-black
                  px-2
                  py-[3px]
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.8px]
                  transition-colors
                  group-hover:border-white
                  group-hover:text-white
                "
              >
                {vendor.badge}
              </span>
            </div>

            {/* ================= VENDOR INFO ================= */}
            <div className="mt-4">
              <h3
                className="
                  text-[11px]
                  font-black
                  leading-none
                  text-black
                  transition-colors
                  group-hover:text-white
                "
              >
                {vendor.name}
              </h3>

              <p
                className="
                  mt-2
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[1px]
                  text-gray-400
                  transition-colors
                  group-hover:text-gray-400
                "
              >
                {vendor.category}
              </p>
            </div>

            {/* ================= DIVIDER ================= */}
            <div className="my-3 border-t border-gray-200 transition-colors group-hover:border-gray-700" />

            {/* ================= BOTTOM STATS ================= */}
            <div className="flex items-end justify-between">
              {/* Products */}
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    leading-none
                    text-black
                    transition-colors
                    group-hover:text-white
                  "
                >
                  {vendor.products} products
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[1px]
                    text-gray-400
                  "
                >
                  In stock
                </p>
              </div>

              {/* Rating */}
              <div className="text-right">
                <p
                  className="
                    text-[9px]
                    font-bold
                    leading-none
                    text-black
                    transition-colors
                    group-hover:text-white
                  "
                >
                  ★ {vendor.rating}
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[1px]
                    text-gray-400
                  "
                >
                  Rating
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile button */}
      <button
        className="
          mt-4
          block
          h-[30px]
          w-full
          border
          border-black
          text-[10px]
          font-semibold
          uppercase
          tracking-[1px]
          transition
          hover:bg-black
          hover:text-white
          sm:hidden
        "
      >
        View All Vendors
      </button>
    </section>
  );
};

export default TopSeller;