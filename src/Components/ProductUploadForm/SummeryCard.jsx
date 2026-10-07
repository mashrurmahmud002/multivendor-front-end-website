import { useContext } from "react";
import { ProvideContext } from "./ProductContextProvider";



export default function SummaryCard() {
  const {title,generateSKu,category, setCategory, price,weightUnit, tags, image} = useContext(ProvideContext);
  const SUMMARY_ROWS = [
  { label: "Title", value: title },
  { label: "SKU", value: generateSKu },
  { label: "Category", value: category },
  { label: "Price", value: price },
  { label: "Stock", value: weightUnit },
  { label: "Images", value: "None" },
  { label: "Tags", value: tags?.map((tag) => "#"+tag).join(", ") || "None"} ,
];
  return (
    <div className="w-full max-w-xs border border-gray-300 rounded-md overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-300 px-5 py-3">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-800">
          Summary
        </h2>
      </div>

      <div>
        {SUMMARY_ROWS.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-5 py-4 ${
              i !== SUMMARY_ROWS.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
              {row.label}
            </span>
            <span className="text-sm text-gray-700">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}