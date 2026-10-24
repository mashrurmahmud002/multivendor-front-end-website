import {
  LayoutGrid,
  Box,
  FileText,
  ChartNoAxesColumn,
  Wallet,
  Users,
  MessageSquare,
  Settings,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// Add to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
// And in tailwind.config.js:  theme.extend.fontFamily.sans = ["DM Sans", "sans-serif"]

const NAV_ITEMS = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Products", icon: Box },
  { label: "Orders", icon: FileText, badge: 12 },
  { label: "Analytics", icon: ChartNoAxesColumn },
  { label: "Payouts", icon: Wallet },
  { label: "Customers", icon: Users },
  { label: "Messages", icon: MessageSquare, badge: 4 },
];

function NavItem({ label, icon: Icon, active, badge }) {
  return (
    <li>
      <a
        href="#"
        aria-current={active ? "page" : undefined}
        className={`relative flex items-center gap-4 px-4 py-3.5 text-[15px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f04e30] ${
          active
            ? "bg-[#2b2b27] text-white"
            : "text-[#a7a7a0] hover:bg-[#1c1c1a] hover:text-white"
        }`}
      >
        {active && (
          <span className="absolute left-[-20px] top-0 h-full w-[3px] bg-[#f04e30]" />
        )}
        <Icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
        <span className="flex-1">{label}</span>
        {badge != null && (
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#f04e30] px-1.5 text-xs font-bold text-white">
            {badge}
          </span>
        )}
      </a>
    </li>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[260px] flex-col bg-[#111010] px-5 pt-5 font-sans text-white">
      {/* Logo */}
      <div className="pb-5">
        <span className="text-[26px] font-extrabold leading-none tracking-tighter">
          MARKETO<span className="text-[#f04e30]">.</span>
        </span>
      </div>
      <div className="h-px bg-white/10" />

      {/* Account switcher */}
      <button
        type="button"
        className="mt-5 flex w-full items-center gap-3 border border-white/10 bg-[#1b1b19] p-2 text-left hover:bg-[#222220] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f04e30]"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-sm font-extrabold tracking-tighter text-[#111010]">
          NS
        </span>
        <span className="flex-1 leading-tight">
          <span className="block text-[15px] font-bold">North Studio</span>
          <span className="block text-xs text-[#8d8d86]">Vendor account</span>
        </span>
        <ChevronDown className="mr-2 h-4 w-4 text-white" strokeWidth={2} />
      </button>

      {/* Navigation */}
      <p className="mb-3 mt-7 text-[11px] font-medium tracking-[0.2em] text-[#8d8d86]">
        WORKSPACE
      </p>
      <nav aria-label="Workspace">
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>

      <ul className="mt-auto pb-3 pt-10">
        <NavItem label="Settings" icon={Settings} />
      </ul>

      {/* Support card */}
      <div className="-mx-5 border-t-2 border-[#f04e30] bg-[#1b1b19] px-5 pb-6 pt-5">
        <p className="text-[10px] font-bold tracking-[0.18em] text-[#f04e30]">
          NEED A HAND?
        </p>
        <h3 className="mt-2 text-lg font-bold">Vendor support</h3>
        <p className="mt-1 text-[13px] leading-snug text-[#8d8d86]">
          Our team is here to help you grow.
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider hover:text-[#f04e30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f04e30]"
        >
          GET SUPPORT
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>
    </aside>
  );
}