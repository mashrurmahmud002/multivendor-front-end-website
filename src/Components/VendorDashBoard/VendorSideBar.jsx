
import React from "react";

const VendorSidebar = () => {
  const menuItems = [
    { name: "Overview", path: "/vendor-dashboard" },
    { name: "Orders", path: "/vendor-dashboard/orders", count: 18 },
    { name: "Products", path: "/vendor-dashboard/products", count: 42 },
    { name: "Analytics", path: "/vendor-dashboard/analytics" },
    { name: "Customers", path: "/vendor-dashboard/customers" },
    { name: "Payouts", path: "/vendor-dashboard/payouts" },
    { name: "Settings", path: "/vendor-dashboard/settings" },
  ];

  return (
    <aside className="w-full max-w-[280px] min-h-screen bg-black text-white">

      {/* Header */}
      <div className="px-7 pt-10 pb-8">
        <p className="text-[11px] tracking-[2px] text-gray-400 mb-4">
          VENDOR DASHBOARD
        </p>

        <h2 className="text-2xl font-extrabold uppercase tracking-tight">
          Kinfolk Studio
        </h2>
      </div>

      {/* Navigation */}
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={item.name}
            href={item.path}
            className={`flex items-center justify-between px-7 py-[18px] border-b border-white/25 text-[11px] font-bold tracking-[1.5px] uppercase transition-colors
              ${
                index === 0
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
          >
            <span>{item.name}</span>

            {item.count && (
              <span className="font-normal tracking-normal">
                {item.count}
              </span>
            )}
          </a>
        ))}
      </nav>

      {/* Back Link */}
      <div className="px-7 pt-12">
        <a
          href="/"
          className="text-[11px] tracking-[1.5px] text-gray-400 hover:text-white transition-colors"
        >
          ← BACK TO MARKETPLACE
        </a>
      </div>

    </aside>
  );
};

export default VendorSidebar;
