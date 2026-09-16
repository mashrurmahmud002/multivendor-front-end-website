

import { useState } from "react";
import StoreIdenty from "./StoreIdenty";



 const businessTypes =[
              "Sole Trader / Individual",
              "Partnership",
              "LLC",
              "Corporation",
              "Non-Profit",
              "Other",
            ]

const BusinessInfo = ({setActive, businessInfo, handleNext,setBusinessInfo,disabled, setActiveStep}) => {

  const [selectedType, setSelectedType] = useState(null);
  const [category, setCategory] = useState(null);

  console.log(disabled)
  

  console.log(selectedType)

  const handleChanged = async(e)=>{
     
    setBusinessInfo({...businessInfo,[e.target.name]:e.target.value});

  }


  const handleSetCategory = async(name)=>{

    setCategory(name);
    setBusinessInfo((prev)=>({...prev,primary_category:name}));
  }

  const handleSelectedType = async(name)=>{

    setSelectedType(name);
    setBusinessInfo((prev)=>({...prev,type:name}));


  }


  

  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-gray-900 font-sans">
      {/* Step Header */}
      <div className="mb-8">
        <p className="text-xs tracking-widest text-gray-500 uppercase mb-1">
          STEP 2 OF 4
        </p>
        <h1 className="text-3xl font-bold tracking-tight">BUSINESS INFO</h1>
      </div>

      {/* ========== A. STORE IDENTITY ========== */}
      <section className="mb-8 border border-gray-300">
        <div className="bg-black text-white px-4 py-3 flex items-center gap-2">
          <div className="w-5 h-5 border border-white flex items-center justify-center text-xs font-bold">
            A
          </div>
          <span className="font-semibold tracking-wide text-sm uppercase">
            Store Identity
          </span>
        </div>

        <div className="p-5 space-y-6">
          {/* Store Name */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              STORE NAME <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                onChange={handleChanged}
                name="storeName"
                placeholder="e.g. Kinfolk Studio"
                className="flex-1 border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-black"
                defaultValue=""
              />
              {/* Avatar placeholder */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 bg-black flex items-center justify-center text-white text-xl font-bold">
                  ?
                </div>
                <span className="text-[10px] tracking-wider text-gray-500 uppercase">
                  Avatar
                </span>
              </div>
            </div>
            <p className="mt-1.5 text-xs text-gray-500">
              This is your public-facing brand name shown to buyers
            </p>
          </div>

          {/* Store URL */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              STORE URL <span className="text-red-500">*</span>
            </label>
            <div className="flex border border-gray-300">
              <span className="bg-gray-50 px-3 py-2.5 text-sm text-gray-600 border-r border-gray-300 whitespace-nowrap">
                marketo.com/store/
              </span>
              <input
                type="text"
                name="storeUrl"
                onChange={handleChanged}
                placeholder="your-store-name"
                className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
              />
              <div className="w-10 flex items-center justify-center border-l border-gray-300">
                <div className="w-4 h-4 rounded-full border border-gray-400" />
              </div>
            </div>
            <p className="mt-1.5 text-xs text-gray-500">
              Lowercase letters, numbers and hyphens only
            </p>
          </div>
        </div>
      </section>

      {/* ========== B. BUSINESS TYPE ========== */}
      <section className="mb-8 border border-gray-300">
        <div className="bg-black text-white px-4 py-3 flex items-center gap-2">
          <div className="w-5 h-5 border border-white flex items-center justify-center text-xs font-bold">
            B
          </div>
          <span className="font-semibold tracking-wide text-sm uppercase">
            Business Type
          </span>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-700 mb-4">
            Select the legal structure that best describes your business-
            <span className="text-red-500">*</span>
          </p>

          <div className="grid grid-cols-3 border border-gray-300">
            {businessTypes.map((label, i) => (
              <div
                key={label}
                className={`
                  flex items-center gap-3 px-4 py-3 text-sm
                  ${i % 3 !== 2 ? "border-r border-gray-300" : ""}
                  ${i < 3 ? "border-b border-gray-300" : ""}
                `}
              >
               {
                 
                 selectedType === label  ? <div onClick={() => handleSelectedType(label)} className="w-4 h-4 rounded-full bg-red-700"></div> : <div onClick={()=>handleSelectedType(label)} className="w-4 h-4 rounded-full border border-gray-300"></div>
               } 
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== C. PRIMARY CATEGORY ========== */}
      <section className="mb-8 border border-gray-300">
        <div className="bg-black text-white px-4 py-3 flex items-center gap-2">
          <div className="w-5 h-5 border border-white flex items-center justify-center text-xs font-bold">
            C
          </div>
          <span className="font-semibold tracking-wide text-sm uppercase">
            Primary Category
          </span>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-700 mb-4">
            Choose the category that best represents your products. This affects
            your commission rate. <span className="text-red-500">*</span>
          </p>

          <div className="grid grid-cols-4 border border-gray-300">
            {[
              { name: "Electronics", rate: "8% COMMISSION", icon: "📱" },
              { name: "Fashion & Apparel", rate: "10% COMMISSION", icon: "◇" },
              { name: "Home & Garden", rate: "9% COMMISSION", icon: "⌂" },
              { name: "Sports & Outdoors", rate: "9% COMMISSION", icon: "◎" },
              { name: "Beauty & Wellness", rate: "12% COMMISSION", icon: "✦" },
              { name: "Books & Media", rate: "7% COMMISSION", icon: "☰" },
              { name: "Automotive", rate: "8% COMMISSION", icon: "◎" },
              { name: "Food & Drink", rate: "7% COMMISSION", icon: "✦" },
              { name: "Art & Collectibles", rate: "11% COMMISSION", icon: "◇" },
              { name: "Toys & Games", rate: "10% COMMISSION", icon: "▲" },
              { name: "Pet Supplies", rate: "9% COMMISSION", icon: "ⓘ" },
              { name: "Other", rate: "10% COMMISSION", icon: "○" },
            ].map((cat, i) => (
              category === cat.name ?  <div onClick={()=>handleSetCategory(cat.name)}
                key={cat.name}
                className={`
                  p-4 text-center bg-black text-white
                  ${i % 4 !== 3 ? "border-r border-red-500" : ""}
                  ${i < 8 ? "border-b border-green-600" : ""}
                `}
              >
                <div className="text-lg mb-2">{cat.icon}</div>
                <div className="text-sm font-medium">{cat.name}</div>
                <div className="text-[11px] text-gray-500 mt-1 tracking-wide">
                  {cat.rate}
                </div>
              </div>: 
              <div
              onClick={()=>handleSetCategory(cat.name)}
                key={cat.name}
                className={`
                  p-4 text-center
                  ${i % 4 !== 3 ? "border-r border-red-500" : ""}
                  ${i < 8 ? "border-b border-green-600" : ""}
                `}
              >
                <div className="text-lg mb-2">{cat.icon}</div>
                <div className="text-sm font-medium">{cat.name}</div>
                <div className="text-[11px] text-gray-500 mt-1 tracking-wide">
                  {cat.rate}
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* ========== D. BUSINESS ADDRESS ========== */}
      <section className="border border-gray-300">
        <div className="bg-black text-white px-4 py-3 flex items-center gap-2">
          <div className="w-5 h-5 border border-white flex items-center justify-center text-xs font-bold">
            D
          </div>
          <span className="font-semibold tracking-wide text-sm uppercase">
            Business Address
          </span>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-3 gap-6">
            {/* Left fields */}
            <div className="col-span-2 space-y-5">
              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  COUNTRY / REGION <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full border border-gray-300 px-3 py-2.5 text-sm appearance-none focus:outline-none focus:border-black bg-white" name="country" onChange={handleChanged}>
                     <option value="" disabled>
                       Select Country
                     </option>
                    <option value="ukraine">Ukraine</option>
                    <option value="russia">Russia</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="india">India</option>
                    <option value="others">Others</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* City + Zip */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    CITY <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city" onChange={handleChanged}
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    ZIP / POSTAL CODE
                  </label>
                  <input
                    name="zip"
                    onChange={handleChanged}
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  STREET ADDRESS (OPTIONAL)
                </label>
                <input
                  type="text"
                  name="buisness_address"
                  onChange={handleChanged}
                  placeholder="123 Main St, Suite 100"
                  className="w-full border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:border-black"
                />
                <p className="mt-1.5 text-xs text-gray-500">
                  Not shown publicly — used for tax and compliance purposes only
                </p>
              </div>
            </div>

            {/* Right side - Location Preview */}
            <div className="border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-medium tracking-wider text-gray-500 uppercase mb-3">
                Location Preview
              </p>
              <div className="bg-white border border-gray-200 h-32 flex items-center justify-center relative mb-3">
                {/* Simple map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-gray-300" />
                  <div className="absolute w-px h-full bg-gray-300" />
                  <div className="absolute w-3 h-3 rounded-full bg-black border-2 border-white shadow" />
                </div>
              </div>
              <p className="text-sm text-center text-gray-600 mb-4">
                City, Country
              </p>
              <div className="text-xs text-gray-500 leading-relaxed">
                <p className="font-medium text-gray-700 mb-1">PRIVACY NOTE</p>
                Only your city and country are shown on your public store page.
              </div>
            </div>
         
          </div>
            <div className="mt-9  flex justify-between w-full border-t border-gray-200 pt-7">
            <button
              
              onClick={handleNext}
              className={`${disabled ? "bg-gray-300" : "bg-red-500"} px-6 py-2 text-[11px] font-semibold uppercase tracking-[1px] text-white`}
            >
              Continue →
            </button>
            <button onClick={()=>setActiveStep(1)} className="px-6 py-2 text-[11px] font-semibold uppercase tracking-[1px] text-white bg-black ">
              Back
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessInfo;