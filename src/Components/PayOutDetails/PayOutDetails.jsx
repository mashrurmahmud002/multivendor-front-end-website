import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';


const PayoutSetup = ({ setActive, personalInfo, buisnessInfo}) => {

  const [payment, setBankTransfer] = useState("bank_transfer");

  const {register, formState:{errors}, watch} = useFormContext();
  
  return (
    <section className="w-full bg-white px-0 py-10">
      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500">
          Step 4 of 4
        </p>

        <h1 className="text-[26px] font-black uppercase leading-none tracking-[-1.3px] text-black">
          Payout Setup
        </h1>
      </div>

      {/* ================= PAYOUT METHOD ================= */}
      <div>
        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[1px]">
          Payout Method <span className="text-[#ed351d]">*</span>
        </label>

        <div className="grid grid-cols-2 border border-black">
          <label
            className={`flex h-[27px] cursor-pointer items-center justify-center border-r border-black text-[10px] font-bold uppercase tracking-[1px] 
            `}
          >
            <input
              type="radio"
              {...register("payoutMethod",{
                required: "Payout Method is required",
              })}
            
              value="bank"
              
              className="sr-only"
            />
            
            Bank Transfer
          </label>
          {
            errors.payoutMethod && (
              <p className="text-[10px] text-[#ed351d]">
                {errors.payoutMethod.message}
              </p>
            )
          }

          <label
            className={`flex h-[27px] cursor-pointer items-center justify-center text-[10px] font-bold uppercase tracking-[1px] 
              `}
          >
            <input
              type="radio"
             
              {...register("payoutMethod",{
                required: "Payout Method is required",
              })}
              value="paypal"
              
           
              className="sr-only"
            />
            {
              errors.payoutMethod && (
                <p className="text-[10px] text-[#ed351d]">
                  {errors.payoutMethod.message}
                </p>
              )
            }
            PayPal
          </label>
        </div>
      </div>

      {/* ================= BANK DETAILS ================= */}
      <div className="mt-4 border border-black p-4">
        <div className="border-b border-gray-200 pb-2">
          <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500">
            Bank Account Details
          </p>
        </div>

        <div className="mt-4 space-y-4">
          {/* Bank Name */}
          <div>
            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[1px]">
              Bank Name <span className="text-[#ed351d]">*</span>
            </label>

            <input
              {...register("bankName",{
                required: "Bank Name is required",
              })}
              
              placeholder="e.g. Chase, Bank of America"
              className="
                h-[28px] w-full border border-black bg-white px-3
                text-[9px] outline-none placeholder:text-gray-400
                focus:ring-1 focus:ring-black
              "
            />
            {
              errors.bankName && (
                <p className="text-[10px] text-[#ed351d]">
                  {errors.bankName.message}
                </p>
              )
            }
          </div>

          {/* Account Holder */}
          <div>
            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[1px]">
              Account Holder Name <span className="text-[#ed351d]">*</span>
            </label>

            <input
              {...register("accountHolderName",{
                required: "Account Holder Name is required",
              })}
             
             
              className="
                h-[28px] w-full border border-black bg-white px-3
                text-[9px] outline-none focus:ring-1 focus:ring-black
              "
            />
            {
              errors.accountHolderName && (
                <p className="text-[10px] text-[#ed351d]">
                  {errors.accountHolderName.message}
                </p>
              )
            }
          </div>

          {/* Account + Routing */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[1px]">
                Account Number <span className="text-[#ed351d]">*</span>
              </label>

              <input
                name="accountNumber"
               
              
                className="
                  h-[28px] w-full border border-black bg-white px-3
                  text-[9px] outline-none focus:ring-1 focus:ring-black
                "
              />
              {
                errors.accountNumber && (
                  <p className="text-[10px] text-[#ed351d]">
                    {errors.accountNumber.message}
                  </p>
                )
              }
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[1px]">
                Routing Number <span className="text-[#ed351d]">*</span>
              </label>

              <input
                name="routingNumber"
                {...register("routingNumber", {
                  required: "Routing Number is required",
                  minLength: {
                    value: 9,
                    message: "Routing Number must be 9 digits",
                  },
                })}
                
              
                className="
                  h-[28px] w-full border border-black bg-white px-3
                  text-[9px] outline-none focus:ring-1 focus:ring-black
                "
              />
              {
                errors.routingNumber && (
                  <p className="text-[10px] text-[#ed351d]">
                    {errors.routingNumber.message}
                  </p>
                )
              }
            </div>
          </div>
        </div>

        <p className="mt-4 text-[10px] leading-[1.6] text-gray-400">
          Your banking information is encrypted and stored securely. We never
          share your financial data with third parties. Payouts are processed
          every 7 days after delivery confirmation.
        </p>
      </div>

      {/* ================= APPLICATION SUMMARY ================= */}
      <div className="mt-4 border border-black bg-gray-50 p-4">
        <div className="border-b border-gray-200 pb-2">
          <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500">
            Application Summary
          </p>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_2fr] gap-y-2 text-[8px]">
          <span className="text-gray-400">Name</span>
          <span className="font-semibold text-black">
            {personalInfo.firstName} {personalInfo.lastName}
            
          </span>

          <span className="text-gray-400">Email</span>
          <span className="font-semibold text-black">
            {personalInfo.email}
          </span>

          <span className="text-gray-400">Store</span>
          <span className="font-semibold text-black">
            {buisnessInfo.storeName}
          </span>

          <span className="text-gray-400">Category</span>
          <span className="font-semibold text-black">
            {buisnessInfo.primary_category}
           
          </span>

          <span className="text-gray-400">Location</span>
          <span className="font-semibold text-black">
            {buisnessInfo.buisness_address}
          
          </span>

          <span className="text-gray-400">Payout</span>
          <span className="font-semibold capitalize text-black">
           
          </span>
        </div>
      </div>

      {/* ================= AGREEMENTS ================= */}
      <div className="mt-4 border-t border-gray-200 pt-4">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500">
          Agreements
        </p>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              {...register("termsAccepted",{
                required: "Please accept terms and conditions",
              })}
             
              className="mt-[1px] h-[13px] w-[13px] shrink-0 accent-black"
            />

            <span className="text-[8px] leading-[1.5] text-gray-500">
              I have read and agree to the Marketo Terms of Service and
              Privacy Policy.
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              name="sellerAgreementAccepted"
           
              className="mt-[1px] h-[13px] w-[13px] shrink-0 accent-black"
            />

            <span className="text-[8px] leading-[1.5] text-gray-500">
              I agree to the Seller Agreement, including commission rates,
              payout schedules, and prohibited items policy.
            </span>
          </label>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="mt-7 flex items-center justify-between border-t border-gray-200 pt-5">
        <button
          onClick={() => setActive("store_details")}
          type="button"
          className="
            h-[31px] border border-black bg-white px-5
            text-[10px] font-semibold uppercase tracking-[1px]
            text-black transition hover:bg-black hover:text-white
          "
        >
          ← Back
        </button>

        <button
          type="submit"
          className="
            h-[31px] min-w-[140px] bg-[#ed351d] px-6
            text-[10px] font-bold uppercase tracking-[1px]
            text-white transition hover:bg-black
          "
        >
          Submit Application →
        </button>
      </div>
    </section>
  );
};

export default PayoutSetup;