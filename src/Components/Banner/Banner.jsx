import React from 'react';
import CategoryCard from '../Categories/CategoryCard';
const Banner = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8">
      <div className="grid min-h-[calc(100vh-106px)] grid-cols-1 lg:grid-cols-[2fr_0.9fr] gap-0">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col justify-between py-10 pr-0 lg:pr-8">

          {/* Small Label */}
          <div>
            <p className="mb-7 text-[7px] font-semibold uppercase tracking-[1.5px] text-gray-600">
              The Multivendor Marketplace
            </p>

            {/* Main Heading */}
            <h1 className="max-w-[520px] text-[70px] font-black uppercase leading-[0.88] tracking-[-4px] text-black sm:text-[85px] lg:text-[88px] xl:text-[92px]">
              Every
              <br />
              Seller.
              <br />
              One
              <br />
              Place.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[420px] text-[11px] leading-[1.7] text-gray-500">
              84,000 independent vendors. Millions of products. One
              <br className="hidden sm:block" />
              unified checkout built for the way people shop today.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <button
                className="
                  h-[31px]
                  bg-[#ef3b20]
                  px-5
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.8px]
                  text-white
                  transition
                  hover:bg-black
                "
              >
                Start Shopping →
              </button>

              <button
                className="
                  h-[31px]
                  border
                  border-black
                  px-5
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.8px]
                  text-black
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                Become a Vendor
              </button>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-12 border-t border-gray-200 pt-7">
            <div className="flex flex-wrap gap-8 sm:gap-12">

              <div>
                <p className="text-[15px] font-black leading-none">
                  84K+
                </p>
                <p className="mt-1 text-[6px] font-medium uppercase tracking-[0.7px] text-gray-500">
                  Active Vendors
                </p>
              </div>

              <div>
                <p className="text-[15px] font-black leading-none">
                  2.1M
                </p>
                <p className="mt-1 text-[6px] font-medium uppercase tracking-[0.7px] text-gray-500">
                  Products Listed
                </p>
              </div>

              <div>
                <p className="text-[15px] font-black leading-none">
                  98%
                </p>
                <p className="mt-1 text-[6px] font-medium uppercase tracking-[0.7px] text-gray-500">
                  Satisfaction Rate
                </p>
              </div>

              <div>
                <p className="text-[15px] font-black leading-none">
                  190+
                </p>
                <p className="mt-1 text-[6px] font-medium uppercase tracking-[0.7px] text-gray-500">
                  Countries Shipped
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative mt-6 h-[550px] overflow-hidden border-l border-black lg:mt-0 lg:h-full">

          <img
            src="https://i.ibb.co.com/S47xxhzf/pexels-tima-miroshnichenko-5560184.jpg"
            alt="Marketplace"
            className="h-full w-full object-cover grayscale"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Image Label */}
          <div className="absolute bottom-5 left-5 bg-black px-2 py-1">
            <p className="text-[6px] font-bold uppercase tracking-[0.7px] text-white">
              84K+ Active Vendors
            </p>
          </div>

        </div>

      </div>
      {/* category card */}
      <CategoryCard/>
    </section>
  );
};

export default Banner;