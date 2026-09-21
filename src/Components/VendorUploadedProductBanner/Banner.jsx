import { useContext, useState } from "react";
import { VendorContext } from "../VendorProviderContext/VendorProviderContext";

export default function Vendor_Product_Upload_Banner() {
   const {activeState, setActiveState} = useContext(VendorContext) ;
   console.log(activeState, "In vendor product banner"); 
  const [status, setStatus] = useState("DRAFT");

  const statuses = ["DRAFT", "ACTIVE", "SCHEDULED"];

  return (
   <div className="w-full bg-[#f5f5f5] px-1 py-8">
      <div className="flex items-center justify-between">
        
        {/* Left Side */}
        <div>
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.18em] text-gray-500">
            New Product
          </p>

          <h1 className="text-[30px] font-black uppercase leading-none tracking-[-0.04em] text-black">
            Untitled Product
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex border border-black">
          <button
            onClick={() => setActiveState(1)}
            className={`${activeState === 1 ?"h-9 border-r bg-black  px-5 text-[9px] font-medium uppercase tracking-[0.15em] text-white transition ": "h-9 border-r  bg-white px-5 text-[9px] font-medium uppercase tracking-[0.15em] text-black transition"}`}
          >
            Draft
          </button>

          <button
            onClick={() => setActiveState(2)}
            className={`${activeState === 2 ?"h-9 border-r bg-black  px-5 text-[9px] font-medium uppercase tracking-[0.15em] text-white transition ": "h-9 border-r  bg-white  px-5 text-[9px] font-medium uppercase tracking-[0.15em] text-black transition"}`}
          >
            Active
          </button>

          <button
          onClick={()=>setActiveState(3)}
             className={`${activeState === 3 ?"h-9 border-r bg-black  px-5 text-[9px] font-medium uppercase tracking-[0.15em] text-white transition ": "h-9 border-r bg-white  px-5 text-[9px] font-medium uppercase tracking-[0.15em] text-black transition"}`}
          >
            Scheduled
          </button>
        </div>

      </div>
    </div>
  );
}   