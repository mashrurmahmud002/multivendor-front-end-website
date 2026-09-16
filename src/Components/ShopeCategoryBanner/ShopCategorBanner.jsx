import React from 'react';

const ShopCategorBanner = () => {
    return (
        <section className="w-full bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1320px] px-5 py-9 sm:px-8 lg:px-10">
        
        {/* Small Label */}
        <p
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[1.5px]
            text-gray-500
          "
        >
          Marketplace
        </p>

        {/* Heading */}
        <h1
          className="
            mt-3
            text-[36px]
            font-black
            uppercase
            leading-[0.9]
            tracking-[-2px]
            text-black
            sm:text-[42px]
            lg:text-[44px]
          "
        >
          Shop All Products
        </h1>

        {/* Product Count */}
        <p
          className="
            mt-4
            text-[11px]
            font-normal
            text-gray-500
          "
        >
          18 products from 6 vendors
        </p>

      </div>
    </section>
    );
};

export default ShopCategorBanner;