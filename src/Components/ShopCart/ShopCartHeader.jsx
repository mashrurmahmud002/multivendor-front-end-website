
const ShoppingCartHeader = ({
  totalItems = 3,
  subtotal = 120,
  shippingThreshold = 100,
  savedAmount = 12,
}) => {
  const shippingUnlocked = subtotal >= shippingThreshold;

  const progress = Math.min(
    (subtotal / shippingThreshold) * 100,
    100
  );

  return (
    <section className="w-full border border-gray-200">
      {/* Cart Heading */}
      <div className="min-h-[240px] px-6 md:px-10 py-10 flex flex-col justify-between">
        
        <p className="text-[10px] md:text-xs font-medium tracking-[2px] uppercase text-gray-700">
          Your Selection
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-[-3px] uppercase text-black leading-none">
            Shopping Cart
          </h1>

          <p className="text-[11px] font-semibold tracking-[2px] uppercase text-gray-800 whitespace-nowrap">
            {String(totalItems).padStart(2, "0")} Items
          </p>
        </div>
      </div>

      {/* Free Shipping Banner */}
      <div className="bg-black text-white px-6 md:px-10 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">

          <p className="text-[10px] md:text-xs font-bold tracking-[1.5px] uppercase whitespace-nowrap">
            {shippingUnlocked
              ? "Free Shipping Unlocked"
              : `Add $${shippingThreshold - subtotal} for Free Shipping`}
          </p>

          {/* Progress Line */}
          <div className="flex-1 h-[1px] bg-white/30 relative">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-[10px] md:text-xs tracking-[1.5px] uppercase whitespace-nowrap text-gray-300">
            You Saved ${savedAmount}
          </p>

        </div>
      </div>
    </section>
  );
};

export default ShoppingCartHeader;
