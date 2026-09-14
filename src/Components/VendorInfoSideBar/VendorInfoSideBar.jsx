const sellingPoints = [
  "No listing fees — only pay a commission when you make a sale",
  "84K+ vendors already trust us to grow their business",
  "Real-time analytics dashboard and inventory management",
  "Reach buyers in 190+ countries from day one",
  "Dedicated vendor support 7 days a week",
];

const commissions = [
  { category: "Electronics", rate: "8%" },
  { category: "Fashion", rate: "10%" },
  { category: "Home & Garden", rate: "9%" },
  { category: "Beauty", rate: "12%" },
  { category: "Food & Drink", rate: "7%" },
  { category: "Other", rate: "10%" },
];

const VendorInfoSidebar = () => {
  return (
    <aside className="w-full max-w-[320px] bg-white px-5 py-10 lg:px-0">

      {/* ================= WHY SELL ================= */}
      <section>
        <p
          className="
            mb-5
            text-[7px]
            font-medium
            uppercase
            tracking-[1.5px]
            text-gray-500
          "
        >
          Why Sell on Marketo
        </p>

        <ul className="space-y-4">
          {sellingPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3"
            >
              <span className="mt-[1px] shrink-0 text-[11px] leading-none text-black">
                →
              </span>

              <p
                className="
                  text-[10px]
                  font-normal
                  leading-[1.65]
                  text-gray-500
                "
              >
                {point}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DIVIDER ================= */}
      <div className="my-8 border-t border-gray-200" />

      {/* ================= COMMISSION ================= */}
      <section>
        <p
          className="
            mb-4
            text-[7px]
            font-medium
            uppercase
            tracking-[1.5px]
            text-gray-500
          "
        >
          Commission by Category
        </p>

        <div className="w-full border-l border-t border-black">
          {commissions.map((item) => (
            <div
              key={item.category}
              className="grid grid-cols-[1fr_52px]"
            >
              {/* Category */}
              <div
                className="
                  flex
                  h-[38px]
                  items-center
                  border-b
                  border-r
                  border-black
                  px-4
                  text-[10px]
                  text-gray-500
                "
              >
                {item.category}
              </div>

              {/* Rate */}
              <div
                className="
                  flex
                  h-[38px]
                  items-center
                  justify-center
                  border-b
                  border-r
                  border-black
                  text-[10px]
                  font-bold
                  text-black
                "
              >
                {item.rate}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HELP ================= */}
      <div className="mt-8 border-t border-gray-200 pt-8">
        <p
          className="
            text-[7px]
            font-medium
            uppercase
            tracking-[1.5px]
            text-gray-500
          "
        >
          Need Help?
        </p>

        <button
          className="
            mt-3
            text-[9px]
            font-medium
            text-black
            underline
            underline-offset-2
            transition
            hover:text-gray-500
          "
        >
          Contact Vendor Support →
        </button>
      </div>

    </aside>
  );
};

export default VendorInfoSidebar;