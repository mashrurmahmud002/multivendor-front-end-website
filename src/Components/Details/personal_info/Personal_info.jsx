import React from 'react';

const Personal_info = ({handleChanged,setActive, handleNext,disabled, setDisabled}) => {
  
    return (
        <section className="w-full bg-white px-5 py-12 sm:px-8 lg:px-10">
      <div className="w-full">

        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500">
            Step 1 of 4
          </p>

          <h1
            className="
              text-[26px]
              font-black
              uppercase
              leading-none
              tracking-[-1.2px]
              text-black
              sm:text-[28px]
            "
          >
            Personal Info
          </h1>
        </div>

       

          {/* ================= BASIC INFORMATION ================= */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="
                  mb-2
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[1px]
                  text-black
                "
              >
                First Name <span className="text-[#ed351d]">*</span>
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChanged}
                
                required
                className="
                  h-[41px]
                  w-full
                  border
                  border-black
                  bg-white
                  px-3
                  text-[11px]
                  outline-none
                  transition
                  focus:ring-1
                  focus:ring-black
                "
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="
                  mb-2
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[1px]
                  text-black
                "


              >
                Last Name <span className="text-[#ed351d]">*</span>
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                 onChange={handleChanged}
                
                required
                className="
                  h-[41px]
                  w-full
                  border
                  border-black
                  bg-white
                  px-3
                  text-[11px]
                  outline-none
                  transition
                  focus:ring-1
                  focus:ring-black
                "
              />
            </div>

          </div>

          {/* ================= EMAIL ================= */}
          <div className="mt-6">
            <label
              htmlFor="email"
              className="
                mb-2
                block
                text-[8px]
                font-semibold
                uppercase
                tracking-[1px]
              "
               onChange={handleChanged}
            >
              Email Address <span className="text-[#ed351d]">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
               onChange={handleChanged}
             
              required
              className="
                h-[41px]
                w-full
                border
                border-black
                bg-white
                px-3
                text-[11px]
                outline-none
                placeholder:text-gray-400
                focus:ring-1
                focus:ring-black
              "
            />

            <p className="mt-2 text-[8px] text-gray-400">
              Used for account login and order notifications.
            </p>
          </div>

          {/* ================= PHONE ================= */}
          <div className="mt-6">
            <label
              htmlFor="phone"
              className="
                mb-2
                block
                text-[8px]
                font-semibold
                uppercase
                tracking-[1px]
              "
               onChange={handleChanged}
            >
              Phone Number <span className="text-[#ed351d]">*</span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 555 000 0000"
              
              required
              className="
                h-[41px]
                w-full
                border
                border-black
                bg-white
                px-3
                text-[11px]
                outline-none
                placeholder:text-gray-400
                focus:ring-1
                focus:ring-black
              "
               onChange={handleChanged}
            />
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="my-6 border-t border-gray-200" />

          {/* ================= PASSWORD TITLE ================= */}
          <p
            className="
              mb-5
              text-[8px]
              font-medium
              uppercase
              tracking-[1.5px]
              text-gray-500
            "
          >
            Create Password
          </p>

          {/* ================= PASSWORDS ================= */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="
                  mb-2
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[1px]
                "
                 onChange={handleChanged}
              >
                Password <span className="text-[#ed351d]">*</span>
              </label>

              <input
                id="password"
                name="password"
                type="password"
                 onChange={handleChanged}
              
                minLength={8}
                required
                className="
                  h-[41px]
                  w-full
                  border
                  border-black
                  bg-white
                  px-3
                  text-[11px]
                  outline-none
                  focus:ring-1
                  focus:ring-black
                "
              />

              <p className="mt-2 text-[8px] text-gray-400">
                Minimum 8 characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="
                  mb-2
                  block
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[1px]
                "
              >
                Confirm Password{" "}
                <span className="text-[#ed351d]">*</span>
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                 onChange={handleChanged}
               
                minLength={8}
                required
                className="
                  h-[41px]
                  w-full
                  border
                  border-black
                  bg-white
                  px-3
                  text-[11px]
                  outline-none
                  focus:ring-1
                  focus:ring-black
                "
              />
            </div>

          </div>

          {/* ================= BOTTOM ================= */}
          <div className="mt-9 flex justify-end border-t border-gray-200 pt-7">
            <button
              
              onClick={handleNext}
              className={`${disabled ? "bg-gray-300" : "bg-black"} px-6 py-2 text-[11px] font-semibold uppercase tracking-[1px] text-white`}
            >
              Continue →
            </button>
          </div>

       
      </div>
    </section>
    );
};

export default Personal_info;