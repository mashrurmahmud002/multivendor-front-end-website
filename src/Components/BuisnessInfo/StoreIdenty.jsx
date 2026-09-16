import React from 'react';

const StoreIdenty = () => {
    return (
        <div>
              <div className="border border-black">

          {/* Section Header */}
          <div className="flex h-[55px] items-center gap-4 bg-black px-6">
            <div
              className="
                flex
                h-[22px]
                w-[22px]
                items-center
                justify-center
                border
                border-white
                text-[9px]
                font-bold
                text-white
              "
            >
              A
            </div>

            <h2
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[1.2px]
                text-white
              "
            >
              Store Identity
            </h2>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="p-6">

            {/* Store Name + Avatar */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_78px]">

              {/* Store Name */}
              <div>
                <label
                  htmlFor="storeName"
                  className="
                    mb-2
                    block
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[1px]
                  "
                >
                  Store Name <span className="text-[#ed351d]">*</span>
                </label>

                <input
                  id="storeName"
                  name="storeName"
                  type="text"
                  placeholder="e.g. Kinfolk Studio"
                  
                  required
                  className="
                    h-[45px]
                    w-full
                    border
                    border-black
                    bg-white
                    px-4
                    text-[11px]
                    outline-none
                    placeholder:text-gray-400
                    focus:ring-1
                    focus:ring-black
                  "
                />

                <p className="mt-2 text-[8px] text-gray-400">
                  This is your public-facing brand name shown to buyers
                </p>
              </div>

              {/* Avatar */}
              <div className="hidden lg:block">
                <div
                  className="
                    flex
                    h-[50px]
                    w-[60px]
                    items-center
                    justify-center
                    bg-black
                    text-[20px]
                    font-black
                    text-white
                  "
                >
                  ?
                </div>

                <p
                  className="
                    mt-2
                    text-center
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[1.2px]
                    text-gray-500
                  "
                >
                  Avatar
                </p>
              </div>
            </div>

            {/* ================= STORE URL ================= */}
            <div className="mt-6">
              <label
                htmlFor="storeUrl"
                className="
                  mb-2
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[1px]
                "
              >
                Store URL <span className="text-[#ed351d]">*</span>
              </label>

              <div className="flex h-[47px] w-full">

                {/* Prefix */}
                <div
                  className="
                    flex
                    w-[140px]
                    shrink-0
                    items-center
                    border
                    border-r-0
                    border-black
                    bg-gray-50
                    px-4
                    text-[9px]
                    font-semibold
                    text-gray-400
                  "
                >
                  marketo.com/store/
                </div>

                {/* Slug */}
                <input
                  id="storeUrl"
                  name="storeUrl"
                  type="text"
                  placeholder="your-store-name"
                  
                  required
                  className="
                    min-w-0
                    flex-1
                    border
                    border-black
                    bg-white
                    px-4
                    text-[10px]
                    outline-none
                    placeholder:text-gray-400
                    focus:ring-1
                    focus:ring-black
                  "
                />

                {/* Status */}
                <div
                  className="
                    flex
                    w-[44px]
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-l-0
                    border-black
                    bg-gray-50
                  "
                >
                  <span
                    className="
                      h-[10px]
                      w-[10px]
                      rounded-full
                      border
                      border-gray-300
                    "
                  />
                </div>
              </div>

              <p className="mt-2 text-[8px] text-gray-400">
                Lowercase letters, numbers and hyphens only
              </p>
            </div>

          </div>
        </div>
        </div>
    );
};

export default StoreIdenty;