import React from 'react';

const ShopCategoryBanner = () => {
  return (
    <section className="w-full bg-[#f4f4f4]">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:py-16">

        {/* Small Label */}
        <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-gray-500 sm:text-xs md:text-[13px]">
          Marketplace
        </p>

        {/* Heading */}
        <h1 className="mt-2 break-words text-[32px] font-black uppercase leading-[0.95] tracking-[-1px] text-black sm:mt-3 sm:text-[44px] sm:tracking-[-1.5px] md:text-[56px] md:tracking-[-2px] lg:text-[68px] xl:text-[80px]">
          Shop All Products
        </h1>

        {/* Product Count */}
        <p className="mt-3 text-xs font-normal text-gray-500 sm:mt-4 sm:text-sm md:text-base">
          18 products from 6 vendors
        </p>

      </div>
    </section>
  );
};

export default ShopCategoryBanner;