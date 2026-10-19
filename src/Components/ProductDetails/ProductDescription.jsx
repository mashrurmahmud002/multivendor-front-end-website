import { useState } from "react";

const tabs = ["Description", "Details", "Shipping"];

export default function ProductTabs({description, weight, generateSKu}) {
  const [active, setActive] = useState("Description");
   const details = [
   
    { label: "WEIGHT", value:weight +'gm' },
   
    { label: "SKU", value:generateSKu },
  ];

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6">
      {/* Tab buttons */}
      <div className="flex border-b border-black">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`flex-1 border-l border-t border-black px-4 py-4 text-xs font-bold uppercase tracking-widest sm:flex-none sm:px-8 ${
              active === tab ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="max-w-[780px] space-y-4 pt-8 text-sm leading-7 text-neutral-500">
        {active === "Description" && (
          <>
            {description}
          </>
        )}

        <div className="px-3 py-8 sm:px-6 sm:py-10">
          {active === "Details" && (
            <div className="w-full overflow-hidden border-l border-t border-black">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[125px_minmax(0,1fr)]
                    border-b border-black sm:grid-cols-[180px_minmax(0,1fr)]"
                >
                  {/* Label */}
                  <div className="flex items-center border-r border-black
                    bg-[#f1f1f1] px-3 py-4 sm:px-5">
                    <span className="text-[9px] font-medium
                      tracking-[1.8px] text-gray-500 sm:text-[10px]">
                      {item.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="flex min-w-0 items-center border-r
                    border-black bg-white px-4 py-4 sm:px-5">
                    <span className="break-words text-[12px] leading-5
                      text-[#18365b] sm:text-[13px]">
                      {item?.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      

        {active === "Shipping" && (
          <p>Free shipping on orders over $75. We ship to 190+ countries.</p>
        )}
      </div>
    </section>
  );
}