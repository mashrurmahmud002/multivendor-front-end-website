import { useContext, useState } from "react";
import { ProvideContext } from "./ProductContextProvider";

function PriceInput({ value, onChange, placeholder = "0.00" }) {
  return (
    <div className="flex border border-gray-300 rounded-md overflow-hidden">
      <span className="flex items-center justify-center w-10 bg-gray-100 text-gray-500 text-sm border-r border-gray-300">
        $
      </span>
      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none"
      />
    </div>
  );
}

export default function PricingCard() {
  const {sale, setSale, compareSale, setCompareSale, cost, setCost, tax,setTax} = useContext(ProvideContext);

  return (
    <div className="w-full  mx-auto border border-gray-200 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-black text-white px-5 py-3 flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center border border-white text-xs font-bold rounded-sm">
          D
        </span>
        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">Pricing</h2>
          <p className="text-xs text-gray-400">All prices in USD</p>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Price fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Sale Price <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <PriceInput value={sale} onChange={setSale} />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Compare-at Price
            </label>
            <div className="mt-2">
              <PriceInput value={compareSale} onChange={setCompareSale} />
            </div>
            <p className="mt-1 text-xs text-blue-400">
              Shown as original / crossed-out price
            </p>
          </div>

          <div>
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Cost Per Item
            </label>
            <div className="mt-2">
              <PriceInput value={cost} onChange={setCompareSale} />
            </div>
            <p className="mt-1 text-xs text-gray-400">Not shown to buyers</p>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTax(!tax)}
            className={`relative w-10 h-5 rounded-full transition-colors ${
              tax ? "bg-black" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                tax? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm font-medium text-gray-800">
            Charge tax on this product
          </span>
        </div>
      </div>
    </div>
  );
}