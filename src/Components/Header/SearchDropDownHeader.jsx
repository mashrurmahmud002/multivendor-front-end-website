/**
 * Search suggestions dropdown (panel only, no search bar).
 * Place it inside a `relative` wrapper directly under your input.
 *
 * Font: Barlow Semi Condensed. Add to index.html <head>:
 * <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

{
             SAMPLE.map((item,i) => (
                <li  role="option" aria-selected={activeIndex === i} >
              <button
                type="button"
               
                className={`flex w-full items-center rounded-lg gap-4 border-t border-neutral-200 px-5 py-3 text-left transition-colors ${
                  activeIndex === i ? "bg-neutral-50" : "bg-white"
                }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-neutral-200 bg-neutral-100 text-[13px] font-bold">
                  {item.code}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[17px] font-bold leading-tight">
                    {item.name}
                  </span>
                  <span className="mt-1 block truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                    {item.brand} / {item.category}
                  </span>
                </span>

                <span className="text-[17px] font-bold tabular-nums">${item.price}</span>
              </button>
            </li>
             ))
           }

const SAMPLE = [
  { id: 1, code: "CP", name: "Ceramic Pour-Over Set", brand: "Kinfolk Studio", category: "Home", price: 64 },
  { id: 2, code: "WO", name: "Wool Merino Overshirt", brand: "Atelier Nord", category: "Fashion", price: 128 },
  { id: 3, code: "WE", name: "Wireless Earbuds Pro", brand: "Volt Electronics", category: "Tech", price: 149 },
  { id: 4, code: "RS", name: "Retinol Night Serum", brand: "Roots & Remedy", category: "Beauty", price: 54 },
];

export default function SearchDropdown({
  query = "d",
  results = SAMPLE,
  activeIndex = -1, // highlighted row; results.length = "view all" row
  onHover = () => {},
  onSelect = (p) => console.log("select", p),
  onViewAll = (q) => console.log("view all", q),
}) {
  const viewAllIndex = results.length;

  return (
    <div
      id="search-suggestions"
      role="listbox"
      className="absolute left-0 right-0 top-full z-50 border border-t-0 border-black bg-white font-['Barlow_Semi_Condensed',ui-sans-serif,system-ui,sans-serif] text-black"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Suggested products
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
          {results.length} {results.length === 1 ? "result" : "results"}
        </span>
      </div>

      {/* Rows */}
      {results.length === 0 ? (
        <p className="border-t border-neutral-200 px-6 py-8 text-sm text-neutral-500">
          No products match “{query}”.
        </p>
      ) : (
        <ul>
          {results.map((p, i) => (
            <li key={p.id} role="option" aria-selected={activeIndex === i}>
              <button
                type="button"
                onClick={() => onSelect(p)}
                onMouseEnter={() => onHover(i)}
                className={`flex w-full items-center gap-4 border-t border-neutral-200 px-5 py-3 text-left transition-colors ${
                  activeIndex === i ? "bg-neutral-50" : "bg-white"
                }`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-neutral-200 bg-neutral-100 text-[13px] font-bold">
                  {p.code}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[17px] font-bold leading-tight">
                    {p.name}
                  </span>
                  <span className="mt-1 block truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                    {p.brand} / {p.category}
                  </span>
                </span>

                <span className="text-[17px] font-bold tabular-nums">${p.price}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* View all */}
      <button
        type="button"
        onClick={() => onViewAll(query)}
        onMouseEnter={() => onHover(viewAllIndex)}
        className={`flex w-full items-center justify-between border-t border-black px-6 py-4 text-left transition-colors ${
          activeIndex === viewAllIndex ? "bg-neutral-50" : "bg-white"
        }`}
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
          View all results for “{query}”
        </span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="M3 12h17M14 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}