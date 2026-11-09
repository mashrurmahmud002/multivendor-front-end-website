
import React, { useState } from "react";

const OrderSummary = ({
  subtotal = 341,
  totalItems = 3,
  tax = 27,
  shipping = 0,
}) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  const total = subtotal + shipping + tax - discount;

  // Apply promo code
  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      setMessage("Please enter a promo code");
      return;
    }

    if (promoCode.toUpperCase() === "SAVE10") {
      const discountAmount = subtotal * 0.1;

      setDiscount(discountAmount);
      setMessage("Promo code applied successfully!");
    } else {
      setDiscount(0);
      setMessage("Invalid promo code");
    }
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <div className="w-full max-w-[460px] border border-black bg-white">

      {/* Header */}
      <div className="px-5 py-8 border-b border-black">
        <p className="text-[11px] tracking-[2px] uppercase text-gray-600 mb-3">
          Checkout
        </p>

        <h2 className="text-2xl font-black uppercase tracking-tight text-black">
          Order Summary
        </h2>
      </div>

      {/* Price Details */}
      <div className="px-5 py-6 space-y-4 border-b border-gray-200">

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Subtotal ({totalItems} items)
          </p>

          <p className="font-bold text-sm">
            ${subtotal.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Shipping</p>

          <p className="font-bold text-sm">
            {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Estimated tax</p>

          <p className="font-bold text-sm">
            ${tax.toFixed(2)}
          </p>
        </div>

        {discount > 0 && (
          <div className="flex justify-between items-center">
            <p className="text-sm text-green-600">Discount</p>
            <p className="font-bold text-sm text-green-600">
              -${discount.toFixed(2)}
            </p>
          </div>
        )}

      </div>

      {/* Promo Code */}
      <div className="px-5 py-6 border-b border-black">

        <label className="block text-[11px] font-bold tracking-[2px] uppercase mb-3">
          Promo Code
        </label>

        <div className="flex h-[52px] border border-black">

          <input
            type="text"
            placeholder="Enter code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full min-w-0 px-3 text-sm outline-none placeholder:text-gray-400"
          />

          <button
            onClick={handleApplyPromo}
            className="bg-black text-white px-5 text-[11px] font-bold tracking-widest uppercase hover:bg-gray-800 transition"
          >
            Apply
          </button>

        </div>

        {message && (
          <p className={`text-xs mt-2 ${
            discount > 0 ? "text-green-600" : "text-red-500"
          }`}>
            {message}
          </p>
        )}

      </div>

      {/* Order Total */}
      <div className="px-5 py-7">

        <div className="flex justify-between items-center mb-6">

          <div>
            <p className="text-[11px] font-bold tracking-[2px] uppercase text-gray-500">
              Order Total
            </p>

            <p className="text-xs text-gray-400 mt-2">
              USD / Taxes included
            </p>
          </div>

          <h3 className="text-3xl md:text-4xl font-black tracking-tight">
            ${total.toFixed(2)}
          </h3>

        </div>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="w-full h-[54px] bg-[#ed2e12] text-white flex justify-between items-center px-6 hover:bg-black transition-colors duration-300"
        >
          <span className="text-[11px] font-bold tracking-[1.5px] uppercase">
            Proceed to Checkout
          </span>

          <span className="text-lg">→</span>
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-5">
          Secure checkout · Encrypted payment · Easy returns
        </p>

      </div>

    </div>
  );
};

export default OrderSummary;
