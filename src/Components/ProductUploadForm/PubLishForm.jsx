import { useState } from "react";

export default function PublishCard() {
  const [isDraft, setIsDraft] = useState(false);

  return (
    <div className="w-full max-w-xs border border-gray-300 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-300 px-5 py-3">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-800">
          Publish
        </h2>
      </div>

      <div className="p-5 space-y-4">
        {/* Draft checkbox */}
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <button
            type="button"
            onClick={() => setIsDraft(!isDraft)}
            className={`w-4 h-4 border rounded-sm flex items-center justify-center transition-colors ${
              isDraft ? "bg-black border-black" : "bg-white border-gray-400"
            }`}
          >
            {isDraft && (
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
          <span className="text-sm font-medium text-gray-900">Draft</span>
        </label>

        {/* Publish button */}
        <button
          type="button"
          className="w-full py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
        >
          Publish Product →
        </button>

        {/* Save as draft button */}
        <button
          type="button"
          className="w-full py-3 border border-gray-300 text-gray-800 text-xs font-bold tracking-widest uppercase hover:bg-gray-50 transition-colors"
        >
          Save as Draft
        </button>
      </div>
    </div>
  );
}