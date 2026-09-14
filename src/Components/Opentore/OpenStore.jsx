import React from "react";
const vendorBenefits = [
  {
    value: "5–12%",
    label: "COMMISSION — BY CATEGORY",
  },
  {
    value: "7 Days",
    label: "PAYOUT — AFTER DELIVERY",
  },
  {
    value: "Real-Time",
    label: "DASHBOARD — ANALYTICS",
  },
  {
    value: "24/7",
    label: "SUPPORT — DEDICATED TEAM",
  },
];

const OpenStore = () => {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1px_1fr] lg:items-center lg:gap-7">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Label */}
          <p className="mb-4 text-[7px] font-medium uppercase tracking-[1.5px] text-gray-500">
            For Vendors
          </p>

          {/* Heading */}
          <h2
            className="
              max-w-[310px]
              text-[27px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-1.5px]
              text-black
              sm:text-[30px]
            "
          >
            Open Your
            <br />
            Store Today
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[360px]
              text-[9px]
              leading-[1.7]
              text-gray-500
            "
          >
            Join 84,000 independent sellers already growing their business
            on Marketo. No monthly fees. Only pay when you sell.
          </p>

          {/* CTA */}
          <button
            className="
              mt-5
              h-[32px]
              border
              border-black
              px-5
              text-[7px]
              font-bold
              uppercase
              tracking-[0.8px]
              text-black
              transition
              hover:bg-black
              hover:text-white
            "
          >
            Apply as Vendor →
          </button>
        </div>

        {/* ================= VERTICAL DIVIDER ================= */}
        <div className="hidden h-[180px] w-px bg-black lg:block" />

        {/* ================= BENEFITS GRID ================= */}
        <div className="grid grid-cols-1 border border-black sm:grid-cols-2">
          {vendorBenefits.map((benefit, index) => (
            <div
              key={benefit.value}
              className={`
                group
                flex
                min-h-[89px]
                flex-col
                justify-center
                px-5
                py-4
                transition-colors
                hover:bg-black

                ${
                  index === 1 || index === 3
                    ? "sm:border-l sm:border-black"
                    : ""
                }

                ${
                  index === 2 || index === 3
                    ? "border-t border-black sm:border-t"
                    : ""
                }
              `}
            >
              {/* Value */}
              <p
                className="
                  text-[17px]
                  font-black
                  leading-none
                  tracking-[-0.8px]
                  text-black
                  transition-colors
                  group-hover:text-white
                "
              >
                {benefit.value}
              </p>

              {/* Label */}
              <p
                className="
                  mt-1.5
                  text-[5px]
                  font-medium
                  uppercase
                  tracking-[1px]
                  text-gray-500
                  transition-colors
                  group-hover:text-gray-400
                "
              >
                {benefit.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OpenStore;