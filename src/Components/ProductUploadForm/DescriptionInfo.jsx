import { useContext, useState } from "react";
import { ProvideContext } from "./ProductContextProvider";

const TOOLBAR_BUTTONS = ["B", "I", "U", "—", "H2", "UL", "OL", "🔗"];
const FULL_DESC_MAX = 5000;
const SHORT_DESC_MAX = 160;

export default function DescriptionCopyCard() {
   const {description, setDescription, shortDescription, setShortDescription} = useContext(ProvideContext);
   console.log(description)

  return (
    <div className="w-full  mx-auto border border-gray-200 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-black text-white px-5 py-3 flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center border border-white text-xs font-bold rounded-sm">
          C
        </span>
        <h2 className="text-sm font-bold tracking-wide uppercase">
          Description &amp; Copy
        </h2>
      </div>

      <div className="p-5 space-y-6">
        {/* Full Description */}
        <div>
          <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
            Full Description <span className="text-red-500">*</span>
          </label>

          <div className="mt-2 border border-gray-300 rounded-md overflow-hidden">
            {/* Toolbar */}
            <div className="flex divide-x divide-gray-300 border-b border-gray-300 bg-white">
              {TOOLBAR_BUTTONS.map((btn) => (
                <button
                  key={btn}
                  type="button"
                  className="flex-1 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              
              onChange={(e)=>setDescription(e.target.value)}
              maxLength={FULL_DESC_MAX}
              placeholder="Describe your product in detail — materials, dimensions, use cases, care instructions..."
              rows={6}
              className="w-full px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none resize-none"
            />
          </div>

          <div className="mt-1 text-right text-xs text-blue-500">
            {description.length} chars
          </div>
        </div>

        {/* Short Description */}
        <div>
          <div className="flex items-baseline gap-2">
            <label className="text-xs font-bold tracking-wide uppercase text-gray-800">
              Short Description
            </label>
            <span className="text-xs text-orange-400">shown in product cards</span>
          </div>

          <input
            type="text"
            value={shortDescription}
            onChange={(e) =>
              e.target.value.length <= SHORT_DESC_MAX &&
              setShortDescription(e.target.value)
            }
            maxLength={SHORT_DESC_MAX}
            placeholder="One-line summary shown in search results and cards (max 160 chars)"
            className="mt-2 w-full px-4 py-3 text-sm border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500"
          />

          <div className="mt-1 text-right text-xs text-blue-500">
            {shortDescription.length} / {SHORT_DESC_MAX}
          </div>
        </div>
      </div>
    </div>
  );
}