import { useState } from "react";

export default function Vendor_Product_Upload_Banner() {
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
            className="
              h-9
              border-r border-black
              bg-black
              px-5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
          >
            Draft
          </button>

          <button
            className="
              h-9
              border-r border-black
              bg-transparent
              px-5
              text-[9px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-black
              transition
              hover:bg-black
              hover:text-white
            "
          >
            Active
          </button>

          <button
            className="
              h-9
              bg-transparent
              px-5
              text-[9px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-black
              transition
              hover:bg-black
              hover:text-white
            "
          >
            Scheduled
          </button>
        </div>

      </div>
    </div>
  );
}   