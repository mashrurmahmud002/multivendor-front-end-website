import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const Personal_info = ({handleChanged,setActive, handleNext,disabled, setDisabled}) => {

  const {register , formState:{errors}, watch} = useFormContext();

  console.log(disabled,"This is disabled");


  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const firstName = watch("firstName");
  const lastName = watch("lastName");


  console.log(email,password,confirmPassword,firstName,lastName);


  useEffect(()=>{
    if(email && password && confirmPassword && firstName && lastName){
      setDisabled(false);
    }
  },[email,password,confirmPassword,firstName,lastName,disabled,setDisabled])


 
  

  
  
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
                {...register("firstName", {required: "First Name is required"})}
                type="text"
               
                
               
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
              {
                errors.firstName && <span className='text-[#ed351d] text-[10px]'>{errors.firstName.message}</span>
              }
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
                {...register("lastName", {required: "Last Name is required"})}
                type="text"
                
                
                
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
             
            >
              Email Address <span className="text-[#ed351d]">*</span>
            </label>

            <input
              id="email"
              {...register("email", {required: "Email Address is required"})}
              type="email"
              placeholder="you@example.com"
              
             
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
            {
              errors.email && <span className='text-[#ed351d] text-[10px]'>{errors.email.message}</span>
            }

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
             
            >
              Phone Number <span className="text-[#ed351d]">*</span>
            </label>

            <input
              id="phone"
              {...register("phone", {required: "Phone Number is required"})}
              type="tel"
              placeholder="+1 555 000 0000"
              
            
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
            {
              errors.phone && <span className='text-[#ed351d] text-[10px]'>{errors.phone.message}</span>
            }
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
               
              >
                Password <span className="text-[#ed351d]">*</span>
              </label>

              <input
                id="password"
               
                type="password"
                {...register("password", {required: "Password is required", maxLength: 8, minLength: 8})}
              
               
                
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
            {
              errors.password && <span className='text-[#ed351d] text-[10px]'>{errors.password.message}</span>
            }

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
                {...register("confirmPassword", {required: "Confirm Password is required"})}
                type="password"
                 
               
                
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
              {
                errors.confirmPassword && <span className='text-[#ed351d] text-[10px]'>{errors.confirmPassword.message}</span>
              }
            </div>

          </div>

          {/* ================= BOTTOM ================= */}
          <div className="mt-9 flex justify-end border-t border-gray-200 pt-7">
            <button
               type="button"
               disabled={disabled}
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