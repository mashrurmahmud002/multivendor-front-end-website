import { useEffect } from "react";

const CUSTOMERS = {
  eyebrow: "For customers / 01",
  title: ["More to", "discover."],
  text: "Shop a world of considered products with the confidence and convenience expected from a modern marketplace.",
  items: [
    {
      title: "Curated discovery",
      text: "Find distinctive products from verified vendors without searching across hundreds of separate stores.",
    },
    {
      title: "One secure checkout",
      text: "Purchase from multiple sellers in one transaction with encrypted payments and clear order records.",
    },
    {
      title: "Buyer protection",
      text: "Every eligible order is covered by straightforward support, refund, and dispute-resolution policies.",
    },
    {
      title: "Human support",
      text: "Get help from a marketplace team that can see the full picture—not a chain of disconnected systems.",
    },
  ],
};

const VENDORS = {
  eyebrow: "For vendors / 02",
  title: ["More room", "to grow."],
  text: "Build your customer base with professional commerce infrastructure that supports your brand instead of flattening it.",
  items: [
    {
      title: "A global storefront",
      text: "Reach customers in more than 190 countries while keeping control of your products, pricing, and brand.",
    },
    {
      title: "Practical economics",
      text: "No monthly marketplace fee. Transparent category-based commission means costs follow real sales.",
    },
    {
      title: "Useful intelligence",
      text: "Real-time dashboards show traffic, conversion, inventory, fulfillment, and customer behavior.",
    },
    {
      title: "Room to grow",
      text: "Campaign tools, vendor spotlights, and dedicated support help strong products earn more visibility.",
    },
  ],
};

// Literal class strings so Tailwind can see them.
// Mobile: customers block, then vendors block. Desktop: two aligned columns.
const ORDER = {
  cHead: "order-1 lg:order-none",
  cItems: [
    "order-2 lg:order-none",
    "order-3 lg:order-none",
    "order-4 lg:order-none",
    "order-5 lg:order-none",
  ],
  vHead: "order-6 lg:order-none",
  vItems: [
    "order-7 lg:order-none",
    "order-8 lg:order-none",
    "order-9 lg:order-none",
    "order-10 lg:order-none",
  ],
};

const CELL = "border-r border-b border-black";

function Head({ data, dark, order }) {
  return (
    <div
      className={[
        CELL,
        order,
        "flex flex-col px-6 py-8 sm:px-10 sm:py-10",
        dark ? "bg-black text-white" : "bg-white text-black",
      ].join(" ")}
    >
      <p
        className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
          dark ? "text-white/60" : "text-neutral-600"
        }`}
      >
        {data.eyebrow}
      </p>
      <h2 className="mt-8 font-black uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(2.2rem,5vw,3rem)]">
        {data.title[0]}
        <br />
        {data.title[1]}
      </h2>
      <p
        className={`mt-6 max-w-sm text-sm leading-relaxed ${
          dark ? "text-white/60" : "text-neutral-600"
        }`}
      >
        {data.text}
      </p>
    </div>
  );
}

function Item({ item, index, order }) {
  return (
    <div
      className={[
        CELL,
        order,
        "flex gap-4 bg-white px-6 py-7 sm:gap-5 sm:px-10 sm:py-8 lg:min-h-[92px]",
      ].join(" ")}
    >
      <span className="w-5 shrink-0 pt-0.5 text-[10px] font-medium tracking-wider text-orange-800/70">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-black uppercase tracking-[-0.005em] text-sm leading-tight">
          {item.title}
        </h3>
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-600">
          {item.text}
        </p>
      </div>
    </div>
  );
}

/**
 * Marketo — customers / vendors comparison
 * Stack: React + Tailwind CSS
 */
export default function MarketoAudiences() {
  useEffect(() => {
    const id = "barlow-font";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;800;900&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      style={{ fontFamily: "'Barlow', system-ui, sans-serif" }}
      className="w-full bg-white px-3 py-10 sm:px-4 sm:py-14 lg:px-6 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 border-l border-t border-black lg:grid-cols-2">
        <Head data={CUSTOMERS} order={ORDER.cHead} />
        <Head data={VENDORS} dark order={ORDER.vHead} />

        {CUSTOMERS.items.map((c, i) => (
          <Fragment2 key={c.title}>
            <Item item={c} index={i} order={ORDER.cItems[i]} />
            <Item item={VENDORS.items[i]} index={i} order={ORDER.vItems[i]} />
          </Fragment2>
        ))}
      </div>
    </section>
  );
}

// Keeps DOM order row-by-row (so desktop rows align) without extra wrappers.
function Fragment2({ children }) {
  return <>{children}</>;
}