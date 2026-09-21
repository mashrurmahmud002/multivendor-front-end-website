import { useState } from "react";

const WEIGHT_UNITS = ["KG", "LB", "G", "OZ"];

export default function ShippingDimensionsCard() {
  const [freeShipping, setFreeShipping] = useState(false);
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("KG");
  const [shippingClass, setShippingClass] = useState("Standard");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="w-full  mx-auto border border-gray-200 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-black text-white px-5 py-3 flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center border border-white text-xs font-bold rounded-sm">
          G
        </span>
        <h2 className="text-sm font-bold tracking-wide uppercase">
          Shipping &amp; Dimensions
        </h2>
      </div>

      <div className="p-5 space-y-6">
        {/* Free shipping checkbox */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFreeShipping(!freeShipping)}
            className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
              freeShipping ? "bg-black border-black" : "bg-white border-gray-400"
            }`}
          >
            {freeShipping && (
              <svg
                viewBox="0 0 12 12"
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 6l3 3 5-6" />
              </svg>
            )}
          </button>
          <span className="text-sm text-gray-500">
            Offer free shipping on this product
          </span>
        </div>

        {/* Weight + Shipping class */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Weight
            </label>
            <div className="mt-2 flex border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                inputMode="decimal"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="0.00"
                className="w-full px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none"
              />
              <div className="flex">
                {WEIGHT_UNITS.map((unit) => (
                  <button
                    key={unit}
                    type="button"
                    onClick={() => setWeightUnit(unit)}
                    className={`px-3 text-xs font-bold border-l border-gray-300 transition-colors ${
                      weightUnit === unit
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Shipping Class
            </label>
            <input
              type="text"
              value={shippingClass}
              onChange={(e) => setShippingClass(e.target.value)}
              className="mt-2 w-full px-3 py-3 text-sm border border-gray-300 rounded-md text-gray-800 outline-none focus:border-gray-500"
            />
          </div>
        </div>

        {/* Dimensions */}
        <div>
          <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
            Dimensions (cm)
          </label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 border border-gray-300 rounded-md divide-y sm:divide-y-0 sm:divide-x divide-gray-300 overflow-hidden">
            <div className="px-4 py-3">
              <span className="text-xs text-gray-400">Length</span>
              <input
                type="text"
                inputMode="numeric"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="0"
                className="block w-full mt-1 text-sm font-medium text-gray-500 placeholder-gray-400 outline-none"
              />
            </div>
            <div className="px-4 py-3">
              <span className="text-xs text-gray-400">Width</span>
              <input
                type="text"
                inputMode="numeric"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="0"
                className="block w-full mt-1 text-sm font-medium text-gray-500 placeholder-gray-400 outline-none"
              />
            </div>
            <div className="px-4 py-3">
              <span className="text-xs text-gray-400">Height</span>
              <input
                type="text"
                inputMode="numeric"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="0"
                className="block w-full mt-1 text-sm font-medium text-gray-500 placeholder-gray-400 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}