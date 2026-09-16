import { useEffect, useState } from "react";
import {
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "SHOP", to: "/shop" },
  { label: "VENDORS", to: "/vendor/vendor-register" },
  { label: "DEALS", to: "#" },
  { label: "NEW ARRIVALS", to: "#" },
  { label: "ABOUT", to: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="w-full bg-white text-black">
      {/* Top Bar */}
      <div className="flex h-[38px] items-center justify-between border-b border-black px-4 sm:px-6 md:px-8">
        <p className="truncate text-[9px] font-medium tracking-[1.5px] text-gray-600 sm:text-[10px] md:text-[11px] md:tracking-[2px]">
          FREE SHIPPING ON ORDERS OVER $75 · 190+ COUNTRIES
        </p>

        <div className="hidden shrink-0 items-center gap-8 md:flex">
          <a
            href="#"
            className="text-[10px] font-medium tracking-[1.5px] hover:text-gray-500"
          >
            SELL ON MARKETO
          </a>

          <a
            href="#"
            className="text-[10px] font-medium tracking-[1.5px] hover:text-gray-500"
          >
            HELP
          </a>

          <a
            href="#"
            className="text-[10px] font-medium tracking-[1.5px] hover:text-gray-500"
          >
            SIGN IN
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex h-[64px] items-center gap-4 px-4 sm:px-6 md:h-[68px] md:gap-8 md:px-8">
        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-black lg:hidden"
        >
          <Menu size={18} strokeWidth={1.75} />
        </button>

        {/* Logo */}
        <div className="shrink-0">
          <Link
            to="/"
            className="text-[20px] font-black tracking-[-1.5px] sm:text-[24px]"
          >
            MARKETO
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.to.startsWith("/") ? (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-[11px] font-medium tracking-[1.8px] transition-colors hover:text-gray-500"
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.to}
                className="text-[11px] font-medium tracking-[1.8px] hover:text-gray-500"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Search */}
        <div className="ml-auto hidden h-[47px] max-w-[647px] flex-1 border border-black md:flex">
          <input
            type="text"
            placeholder="Search products, vendors, brands..."
            className="min-w-0 flex-1 px-4 text-sm outline-none placeholder:text-gray-400"
          />

          <button className="w-[100px] bg-black text-[11px] font-bold tracking-[1.5px] text-white transition-colors hover:bg-gray-800">
            SEARCH
          </button>
        </div>

        {/* Right Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-4 sm:gap-5 md:ml-0">
          {/* Wishlist */}
          <button className="group hidden items-center gap-2 sm:flex" aria-label="Wishlist">
            <Heart
              size={20}
              strokeWidth={1.5}
              className="transition group-hover:fill-black"
            />

            <span className="hidden text-[10px] font-semibold tracking-[1.5px] xl:block">
              WISHLIST
            </span>
          </button>

          {/* Cart */}
          <button className="flex items-center gap-2" aria-label="Cart, 3 items">
            <ShoppingCart size={21} strokeWidth={1.5} />

            <span className="hidden text-[10px] font-semibold tracking-[1.5px] xl:block">
              CART
            </span>

            <span className="flex h-[19px] w-[19px] items-center justify-center bg-black text-[10px] font-bold text-white">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-4 pb-4 sm:px-6 md:hidden">
        <div className="flex h-[44px] border border-black">
          <input
            type="text"
            placeholder="Search products, vendors, brands..."
            className="min-w-0 flex-1 px-3 text-sm outline-none"
          />

          <button className="w-[80px] shrink-0 bg-black text-[10px] font-bold tracking-[1px] text-white">
            SEARCH
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV DRAWER ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Panel */}
          <div className="absolute left-0 top-0 flex h-full w-[82%] max-w-[320px] flex-col bg-white">
            <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-black px-5">
              <span className="text-[18px] font-black tracking-[-1px]">
                MARKETO
              </span>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center border border-black"
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.label} className="border-b border-gray-200">
                    {link.to.startsWith("/") ? (
                      <NavLink
                        to={link.to}
                        onClick={() => setMenuOpen(false)}
                        className="block py-4 text-[13px] font-semibold tracking-[1.5px]"
                      >
                        {link.label}
                      </NavLink>
                    ) : (
                      <a
                        href={link.to}
                        onClick={() => setMenuOpen(false)}
                        className="block py-4 text-[13px] font-semibold tracking-[1.5px]"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[11px] font-medium tracking-[1.5px] text-gray-600"
                >
                  SELL ON MARKETO
                </a>
                <a
                  href="#"
                  className="text-[11px] font-medium tracking-[1.5px] text-gray-600"
                >
                  HELP
                </a>
                <a
                  href="#"
                  className="text-[11px] font-medium tracking-[1.5px] text-gray-600"
                >
                  SIGN IN
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
