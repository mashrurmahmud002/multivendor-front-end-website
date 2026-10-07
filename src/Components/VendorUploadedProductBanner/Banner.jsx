
import { useContext } from "react";
import { VendorContext } from "../VendorProviderContext/VendorProviderContext";

export default function Vendor_Product_Upload_Banner() {
  const { activeState, setActiveState } = useContext(VendorContext);

  return (
    <div className="w-full bg-[#f5f5f5] px-3 py-6 sm:px-5 sm:py-8 md:px-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        {/* Left Side */}
        <div className="min-w-0">
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500">
            New Product
          </p>

          <h1 className="truncate text-[24px] font-black uppercase leading-none tracking-[-0.04em] text-black sm:text-[28px] md:text-[30px]">
            Untitled Product
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex w-full border border-black sm:w-auto">

          <button
            onClick={() => setActiveState(1)}
            className={`h-9 flex-1 px-3 text-[9px] font-medium uppercase tracking-[0.1em] transition sm:flex-none sm:px-5 sm:tracking-[0.15em] ${
              activeState === 1
                ? "border-r bg-black text-white"
                : "border-r bg-white text-black"
            }`}
          >
            Draft
          </button>

          <button
            onClick={() => setActiveState(2)}
            className={`h-9 flex-1 px-3 text-[9px] font-medium uppercase tracking-[0.1em] transition sm:flex-none sm:px-5 sm:tracking-[0.15em] ${
              activeState === 2
                ? "border-r bg-black text-white"
                : "border-r bg-white text-black"
            }`}
          >
            Active
          </button>

          <button
            onClick={() => setActiveState(3)}
            className={`h-9 flex-1 px-3 text-[9px] font-medium uppercase tracking-[0.1em] transition sm:flex-none sm:px-5 sm:tracking-[0.15em] ${
              activeState === 3
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Scheduled
          </button>

        </div>
      </div>
    </div>
  );
}

