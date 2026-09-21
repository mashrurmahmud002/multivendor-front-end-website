import { useState } from "react";

const CHECKLIST_ITEMS = [
  "Product title",
  "At least 1 image",
  "Category selected",
  "Price set",
  "Description written",
  "Stock quantity",
  "SEO title",
];

export default function ReadinessCard() {
  const [checked, setChecked] = useState(Array(CHECKLIST_ITEMS.length).fill(false));

  const toggle = (i) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const completeCount = checked.filter(Boolean).length;
  const total = CHECKLIST_ITEMS.length;
  const percent = (completeCount / total) * 100;

  return (
    <div className="w-full max-w-xs border border-gray-300 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-300 px-5 py-3">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-800">
          Readiness
        </h2>
      </div>

      <div className="p-5">
        <div className="space-y-3">
          {CHECKLIST_ITEMS.map((item, i) => (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className={`w-4 h-4 border rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                  checked[i] ? "bg-black border-black" : "bg-white border-gray-300"
                }`}
              >
                {checked[i] && (
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
              <span
                className={`text-sm ${
                  checked[i] ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {item}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-xs font-bold tracking-widest uppercase text-gray-400">
            <span>Complete</span>
            <span>
              {completeCount}/{total}
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-all"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}