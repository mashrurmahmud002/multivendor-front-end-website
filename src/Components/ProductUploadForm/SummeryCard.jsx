const SUMMARY_ROWS = [
  { label: "Title", value: "—" },
  { label: "SKU", value: "—" },
  { label: "Category", value: "—" },
  { label: "Price", value: "—" },
  { label: "Stock", value: "0 units" },
  { label: "Images", value: "None" },
  { label: "Tags", value: "—" },
];

export default function SummaryCard() {
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