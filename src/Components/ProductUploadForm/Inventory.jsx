import { useContext, useState } from "react";
import { ProvideContext } from "./ProductContextProvider";

export default function InventoryCard() {
  const {quantity, setquantity, lowstock, setLowStock,allowBackdors , setallowBackdors,trackInventory, setTrackInventory} = useContext(ProvideContext);


  return (
    <div className="w-full  mx-auto border border-gray-200 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-black text-white px-5 py-3 flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center border border-white text-xs font-bold rounded-sm">
          E
        </span>
        <h2 className="text-sm font-bold tracking-wide uppercase">Inventory</h2>
      </div>

      <div className="p-5 space-y-5">
        {/* Track inventory toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTrackInventory(!trackInventory)}
            className={`relative w-10 h-5 rounded-full transition-colors ${
              trackInventory ? "bg-black" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                trackInventory ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm font-medium text-gray-800">
            Track inventory for this product
          </span>
        </div>

        {/* Fields row */}
        <div className="flex flex-wrap items-end gap-6">
          <div className="w-full sm:w-64">
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Quantity in Stock <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={quantity}
              onChange={(e) => setquantity(e.target.value)}
              placeholder="0"
              className="mt-2 w-full px-3 py-3 text-sm border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500"
            />
          </div>

          <div className="w-full sm:w-64">
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Low Stock Alert
            </label>
            <div className="mt-2 flex border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                inputMode="numeric"
                value={lowstock}
                onChange={(e) => setLowStock(e.target.value)}
                className="w-full px-3 py-3 text-sm text-gray-800 outline-none"
              />
              <span className="flex items-center px-4 bg-gray-100 text-gray-400 text-sm">
                units
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pb-3">
            <button
              type="button"
              onClick={() => setallowBackdors(!allowBackdors)}
              className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
                allowBackdors
                  ? "bg-black border-black"
                  : "bg-white border-gray-400"
              }`}
            >
              {allowBackdors && (
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
            <span className="text-sm text-gray-500">Allow backorders</span>
          </div>
        </div>
      </div>
    </div>
  );
}