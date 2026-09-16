
import React from "react";



const StoreDetails = ({ setActive,  handleNext,storeInfo ,setStoreInfo, disabled}) => {



  const handleChanged = async(e)=>[
     setStoreInfo({...storeInfo,[e.target.name]:e.target.value})
  ]



  return (
    <section className="w-full bg-white px-0 py-10">
      {/* ================= PAGE HEADER ================= */}
      <div className="mb-8">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500">
          Step 3 of 4
        </p>

        <h1
          className="
            text-[26px]
            font-black
            uppercase
            leading-none
            tracking-[-1.3px]
            text-black
          "
        >
          Store Details
        </h1>
      </div>

      {/* ================= STORE DESCRIPTION ================= */}
      <div>
        <label
          htmlFor="storeDescription"
          className="
            mb-2
            block
            text-[10px]
            font-semibold
            uppercase
            tracking-[1px]
            text-black
          "
          onChange={handleChanged}
        >
          Store Description <span className="text-[#ed351d]">*</span>
        </label>

        <textarea
          id="storeDescription"
          name="storeDescription"
          
         
          required
          rows={4}
          placeholder="Tell buyers about your store — what you sell, your story, what makes you unique..."
          className="
            block
            min-h-[80px]
            w-full
            resize-none
            border
            border-black
            bg-white
            px-3
            py-3
            text-[9px]
            leading-[1.5]
            text-black
            outline-none
            placeholder:text-gray-400
            focus:ring-1
            focus:ring-black
          "
          onChange={handleChanged}
        />

        <div className="flex justify-end">
          <span className="mt-2 text-[10px] text-gray-400">
            
          </span>
        </div>
      </div>

      {/* ================= SOCIAL / WEBSITE ================= */}
      <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* Website */}
        <div>
          <label
            htmlFor="website"
            className="
              mb-2
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[1px]
            "
          >
            Website <span className="font-normal text-gray-400">(Optional)</span>
          </label>

          <input
            id="website"
            name="website"
            type="url"
            onChange={handleChanged}
            
            placeholder="https://yoursite.com"
            className="
              h-[28px]
              w-full
              border
              border-black
              bg-white
              px-3
              text-[9px]
              outline-none
              placeholder:text-gray-400
              focus:ring-1
              focus:ring-black
            "
          />
        </div>

        {/* Instagram */}
        <div>
          <label
            htmlFor="instagram"
            className="
              mb-2
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[1px]
            "
            
          >
            Instagram Handle{" "}
            <span className="font-normal text-gray-400">(Optional)</span>
          </label>

          <input
            id="instagram"
            name="instagram"
            type="text"
            onChange={handleChanged}
            
            placeholder="@yourstore"
            className="
              h-[28px]
              w-full
              border
              border-black
              bg-white
              px-3
              text-[9px]
              outline-none
              placeholder:text-gray-400
              focus:ring-1
              focus:ring-black
            "
          />
        </div>
      </div>

      {/* ================= DIVIDER ================= */}
      <div className="my-5 border-t border-gray-200" />

      {/* ================= SHIPPING & POLICY ================= */}
      <p
        className="
          mb-4
          text-[10px]
          font-medium
          uppercase
          tracking-[1.5px]
          text-gray-500
        "
      >
        Shipping & Policy
      </p>

      {/* Shipping + Processing */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* Ships From */}
        <div>
          <label
            htmlFor="shipsFrom"
            className="
              mb-2
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[1px]
            "
            
          >
            Ships From (City, Country)
            <span className="text-[#ed351d]">*</span>
          </label>

          <input
            id="shipsFrom"
            name="shipsFrom"
            type="text"
            onChange={handleChanged}
           
            required
            placeholder="New York, US"
            className="
              h-[28px]
              w-full
              border
              border-black
              bg-white
              px-3
              text-[9px]
              outline-none
              placeholder:text-gray-400
              focus:ring-1
              focus:ring-black
            "
          />
        </div>

        {/* Processing Time */}
        <div>
          <label
            htmlFor="processingTime"
            className="
              mb-2
              block
              text-[10px]
              font-semibold
              uppercase
              tracking-[1px]
            "
          >
            Processing Time <span className="text-[#ed351d]">*</span>
          </label>

          <input
            id="processingTime"
            name="processingTime"
            type="text"
          
            required
            placeholder="3-5 business days"
            className="
              h-[28px]
              w-full
              border
              border-black
              bg-white
              px-3
              text-[9px]
              outline-none
              placeholder:text-gray-400
              focus:ring-1
              focus:ring-black
            "
            onChange={handleChanged}
          />
        </div>
      </div>

      {/* ================= RETURN POLICY ================= */}
      <div className="mt-5">
        <label
          htmlFor="returnPolicy"
          className="
            mb-2
            block
            text-[10px]
            font-semibold
            uppercase
            tracking-[1px]
          "
        >
          Return Policy <span className="text-[#ed351d]">*</span>
        </label>

        <textarea
          id="returnPolicy"
          name="returnPolicy"
        
          required
          rows={3}
          placeholder="Describe your return and refund policy..."
          className="
            block
            min-h-[55px]
            w-full
            resize-none
            border
            border-black
            bg-white
            px-3
            py-3
            text-[9px]
            leading-[1.5]
            outline-none
            placeholder:text-gray-400
            focus:ring-1
            focus:ring-black
          "
          onChange={handleChanged}
        />
      </div>

      {/* ================= BUTTON AREA ================= */}
      <div className="mt-7 flex items-center justify-between border-t border-gray-200 pt-5">

        <button
          type="button"
          className="
            h-[31px]
            border
            border-black
            bg-white
            px-5
            text-[10px]
            font-semibold
            uppercase
            tracking-[1px]
            text-black
            transition
            hover:bg-black
            hover:text-white
          "
        >
          ← Back
        </button>

        <button
        disabled={disabled}
        onClick={handleNext}
          type="submit"
          className={
            `h-[31px]
            min-w-[100px]
            bg-[#ed351d]
            px-5
            text-[10px]
            font-bold
            uppercase
            tracking-[1px]
            text-white
            transition
            hover:bg-black
            ${disabled && "bg-gray-300"}`
          }
            
                  >
          Continue →
        </button>

      </div>
    </section>
  );
};

export default StoreDetails;