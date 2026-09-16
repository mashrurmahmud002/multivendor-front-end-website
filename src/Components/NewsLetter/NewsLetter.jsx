import react from "react";
const Newsletter = () => {
  return (
    <section className="w-full border-t border-black bg-[#f4f4f4] px-4 py-7 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center sm:gap-8">

        {/* ================= LEFT ================= */}
        <div>
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[1.3px]  text-gray-500">
            Stay Informed
          </p>

          <h2
            className="
              text-[14px]
              font-black
              uppercase
              leading-none
              tracking-[-0.5px]
              text-black
              sm:text-[15px]
            "
          >
            Weekly Drops & Vendor Spotlights
          </h2>
        </div>

        {/* ================= SUBSCRIBE ================= */}
        <form className="flex h-[32px] w-full max-w-[262px] border border-black bg-white">
          <input
            type="email"
            placeholder="your@email.com"
            className="
              min-w-0
              flex-1
              bg-white
              px-3
              text-[10px]
              text-black
              outline-none
              placeholder:text-gray-400
            "
          />

          <button
            type="submit"
            className="
              w-[68px]
              shrink-0
              bg-black
              text-[9px]
              font-bold
              uppercase
              tracking-[0.8px]
              text-white
              transition
              hover:bg-[#ef3b20]
            "
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;