import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const FlashSale = () => {
   const [totalseconds, setTime ] = useState(0); //seconds elapsed











   


  return (
    <section className="w-full bg-black px-6 py-5 text-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-8">

        {/* Left Content */}
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
            Today Only
          </p>

          <h2 className="text-[25px] font-bold uppercase leading-none tracking-tight">
            Flash Sale – Up To 46% Off
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex items-end gap-7">

          {/* Countdown */}
          <div className="flex items-center gap-3">

            {/* Hours */}
            <div className="text-center">
              <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Sale Ends In
              </p>

              <div className="flex h-[54px] w-[55px] flex-col items-center justify-center bg-white text-black">
                <span className="text-[18px] font-semibold leading-none">
                
                </span>
                <span className="mt-1 text-[9px] uppercase text-gray-500">
                  H
                </span>
              </div>
            </div>

            <span className="mb-2 text-xl text-gray-600">:</span>

            {/* Minutes */}
            <div className="text-center">
              <p className="mb-1 invisible text-[10px] uppercase tracking-[0.2em]">
                Sale Ends In
              </p>

              <div className="flex h-[54px] w-[55px] flex-col items-center justify-center bg-white text-black">
                <span className="text-[18px] font-semibold leading-none">
                  
                </span>
                <span className="mt-1 text-[9px] uppercase text-gray-500">
                  M
                </span>
              </div>
            </div>

            <span className="mb-2 text-xl text-gray-600">:</span>

            {/* Seconds */}
            <div className="text-center">
              <p className="mb-1 invisible text-[10px] uppercase tracking-[0.2em]">
                Sale Ends In
              </p>

              <div className="flex h-[54px] w-[55px] flex-col items-center justify-center bg-white text-black">
                <span className="text-[18px] font-semibold leading-none">
              
                </span>
                <span className="mt-1 text-[9px] uppercase text-gray-500">
                  S
                </span>
              </div>
            </div>
          </div>

          {/* Shop Button */}
          <button
            className="
              flex h-[47px] items-center gap-2
              border border-white/80
              px-7
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              transition
              hover:bg-white
              hover:text-black
            "
          >
            Shop All
            <ArrowRight size={15} strokeWidth={1.8} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default FlashSale;