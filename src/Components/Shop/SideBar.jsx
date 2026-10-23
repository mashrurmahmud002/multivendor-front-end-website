import React, { useState } from 'react';

const SideBar = () => {
    const [selectedVendor, setSelectedVendor] = useState("All Vendors");
 const [maxPrice, setMaxPrice] = useState(300);
 const [onSaleOnly, setOnSaleOnly] = useState(false);
 const [showFilters, setShowFilters] = useState(false);
 const vendors = [
 "Kinfolk Studio",
 "Volt Electronics",
 "Atelier Nord",
 "Roots & Remedy",
 "Peak Supply Co.",
 "Lunar Goods",
 ];
   return (
       <div>
           <aside
 className={`w-full shrink-0 bg-white px-1 py-2 text- md:block md:w-56 lg:w-60
 ${showFilters ? "block" : "hidden"}`}
 >
 {/* Vendor filter */}
 <section>
  <h3 className="border-b border-black pb-2 text-[11px] font-semibold tracking-[1.5px] text-black">
   VENDOR
  </h3>
  <div className="mt-5 flex flex-col items-start gap-4">
  <button
     onClick={() => setSelectedVendor("All Vendors")}
     className={`text-sm ${
      selectedVendor === "All Vendors"
        ? "font-semibold text-black"
        : "text-gray-600"
  }`}
   >
  All Vendors
   </button>
  {vendors.map((vendor) => (
  <button
  key={vendor}
      onClick={() => setSelectedVendor(vendor)}
      className={`text-left text-sm transition-colors hover:text-black ${
      selectedVendor === vendor
       ? "font-semibold text-black"
       : "text-[#52647e]"
      }`}
 >
    {vendor}
    </button>
    ))}
     </div>
    </section>
    {/* Price filter */}
    <section className="mt-8 sm:mt-10">
    <h3 className="border-b border-black pb-2 text-[11px] font-semibold tracking-[1.5px] text-black">
      MAX PRICE
    </h3>
    <div className="mt-4 flex items-center justify-between text-sm">
     <span className="text-[#52647e]">$0</span>
     <span className="font-bold text-black">
      ${maxPrice}
     </span>
    </div>
    <input
     type="range"
     min="0"
     max="300"
     step="5"
     value={maxPrice}
     onChange={(e) =>
     setMaxPrice(Number(e.target.value))
     }
     aria-label="Maximum price"
     className="mt-6 h-1 w-full cursor-pointer accent-black"
    />
    </section>
    {/* Other filters */}
    <section className="mt-8 sm:mt-10">
     <h3 className="border-b border-black pb-2 text-[11px] font-semibold tracking-[1.5px] text-black">
       FILTER
     </h3>
     <label className="mt-4 flex cursor-pointer items-center gap-3 text-sm text-[#52647e]">
     <input
      type="checkbox"
      checked={onSaleOnly}
      onChange={(e) =>
        setOnSaleOnly(e.target.checked)
      }
      className="h-4 w-4 cursor-pointer accent-black"
     />
     On Sale Only
     </label>
    </section>
    {/* Results */}
    <div className="mt-8 border-t border-gray-200 pt-5 sm:mt-9">
     <p className="text-[10px] tracking-[1.5px] text-[#8490a0]">
      18 RESULTS
     </p>
    </div>
   </aside>
        </div>
    );
};

export default SideBar;