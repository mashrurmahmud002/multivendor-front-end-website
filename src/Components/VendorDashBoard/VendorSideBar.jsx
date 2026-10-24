import { useEffect, useState } from "react";
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
  Menu,
  X,
} from "lucide-react";

// Add to your index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
// And in tailwind.config.js:  theme.extend.fontFamily.sans = ["DM Sans", "sans-serif"]
//
// Layout usage (the top bar is fixed on small screens, so offset your content):
//
// <div className="lg:flex">
//   <Sidebar />
//   <main className="flex-1 pt-14 lg:pt-0">...</main>
// </div>

const NAV_ITEMS = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Products", icon: Box },
  { label: "Orders", icon: FileText, badge: 12 },
  { label: "Analytics", icon: ChartNoAxesColumn },
  { label: "Payouts", icon: Wallet },
  { label: "Customers", icon: Users },
  { label: "Messages", icon: MessageSquare, badge: 4 },
];

function Logo({ className = "" }) {
  return (
    <span
      className={`font-extrabold leading-none tracking-tighter text-white ${className}`}
    >
      MARKETO<span className="text-[#f04e30]">.</span>
    </span>
  );
}

function NavItem({ label, icon: Icon, active, badge, onClick }) {
  return (
    <li>
      <a
        href="#"
        onClick={onClick}
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
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Close on Escape, lock body scroll while the drawer is open,
  // and reset when the viewport grows to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const onResize = () => window.innerWidth >= 1024 && close();
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      {/* Mobile / tablet top bar */}
      <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between border-b border-white/10 bg-[#111010] pl-5 pr-3 pt-[env(safe-area-inset-top)] lg:hidden">
        <Logo className="text-[22px]" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="sidebar"
          className="flex h-10 w-10 items-center justify-center text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f04e30]"
        >
          <Menu className="h-6 w-6" strokeWidth={1.75} />
        </button>
      </header>

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Sidebar: off-canvas drawer below lg, sticky column at lg+ */}
      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex h-dvh w-[260px] max-w-[85vw] shrink-0 flex-col overflow-y-auto bg-[#111010] px-5 pt-5 font-sans text-white transition-[transform,visibility] duration-300 ease-out lg:visible lg:sticky lg:top-0 lg:z-auto lg:translate-x-0 ${
          open ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        {/* Logo (+ close button on small screens) */}
        <div className="flex items-center justify-between pb-5">
          <Logo className="text-[26px]" />
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation"
            className="-mr-2 flex h-9 w-9 items-center justify-center text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f04e30] lg:hidden"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
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
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block truncate text-[15px] font-bold">
              North Studio
            </span>
            <span className="block truncate text-xs text-[#8d8d86]">
              Vendor account
            </span>
          </span>
          <ChevronDown className="mr-2 h-4 w-4 shrink-0" strokeWidth={2} />
        </button>

        {/* Navigation */}
        <p className="mb-3 mt-7 text-[11px] font-medium tracking-[0.2em] text-[#8d8d86]">
          WORKSPACE
        </p>
        <nav aria-label="Workspace">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.label} {...item} onClick={close} />
            ))}
          </ul>
        </nav>

        <ul className="mt-auto pb-3 pt-10">
          <NavItem label="Settings" icon={Settings} onClick={close} />
        </ul>

        {/* Support card */}
        <div className="-mx-5 border-t-2 border-[#f04e30] bg-[#1b1b19] px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5">
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
    </>
  );
}