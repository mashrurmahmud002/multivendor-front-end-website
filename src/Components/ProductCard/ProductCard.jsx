import React from 'react';

const ProductCard = () => {
    return (
    <div className="w-full max-w-[350px] overflow-hidden border border-black bg-white">
      {/* Image Section */}
      <div className="relative h-[195px] bg-[#f5f5f5]">
        {/* New Badge */}
        <span className="absolute left-3 top-3 bg-black px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
          NEW
        </span>

        {/* Image Placeholder */}
        <div className="flex h-full items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-300">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <path d="M3 16l5-5 4 4 3-3 6 6" />
              <circle cx="9" cy="9" r="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="border-t border-black px-5 py-5">
        {/* Brand + Rating */}
        <div className="mb-1 flex items-center justify-between">
          <p className="text-[10px] font-medium tracking-[2px] text-gray-500">
            KINFOLK STUDIO
          </p>

          <div className="flex items-center gap-1 text-[11px] text-gray-500">
            <span>★</span>
            <span>4.8</span>
            <span>(142)</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-[14px] font-bold text-black">
          Ceramic Pour-Over Set
        </h3>

        {/* Bottom Section */}
        <div className="mt-5 flex items-end justify-between">
          <p className="text-[18px] font-bold text-black">$64</p>

          <button
            type="button"
            className="flex h-[31px] items-center gap-2 border border-black px-4 text-[10px] font-medium tracking-[1.5px] transition hover:bg-black hover:text-white"
          >
            ADD
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;