import React from "react";  


const FlashAlert = () => {
  return (
    <section className="w-full border border-gray-200 bg-[#f5f5f5] px-7 py-10">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-10">
        
        {/* Left Content */}
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[2px] text-gray-500">
            Never miss a deal
          </p>

          <h2 className="text-[25px] font-black uppercase leading-tight tracking-[-0.8px] text-black">
            Flash alerts, straight to your inbox
          </h2>
        </div>

        {/* Email Form */}
        <form className="flex h-[56px] w-[428px] shrink-0">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-full min-w-0 flex-1 border border-black bg-white px-6 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="h-full w-[123px] bg-black px-3 text-[10px] font-bold uppercase tracking-[1px] text-white"
          >
            Alert Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default FlashAlert;