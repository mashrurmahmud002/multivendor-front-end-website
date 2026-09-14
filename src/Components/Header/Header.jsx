import React from "react";

import {
  Heart,
  ShoppingCart,
  Search,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white text-black">
      {/* Top Bar */}
      <div className="h-[38px] border-b border-black flex items-center justify-between px-6 md:px-8">
        <p className="text-[10px] md:text-[11px] font-medium tracking-[2px] text-gray-600">
          FREE SHIPPING ON ORDERS OVER $75 · 190+ COUNTRIES
        </p>

        <div className="hidden md:flex items-center gap-8">
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
      <div className="h-[68px] flex items-center px-6 md:px-8 gap-8">
        {/* Logo */}
        <div className="shrink-0">
          <a
            href="#"
            className="text-[24px] font-black tracking-[-1.5px]"
          >
            MARKETO
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink 
            to='/shop'
            className="text-[11px] font-medium tracking-[1.8px] hover:text-gray-500"
          >
            SHOP
          </NavLink>

          <Link
            to="/vendor"
            className="text-[11px] font-medium tracking-[1.8px] hover:text-gray-500"
          >
            VENDORS
          </Link>

          <a
            href="#"
            className="text-[11px] font-medium tracking-[1.8px] hover:text-gray-500"
          >
            DEALS
          </a>

          <a
            href="#"
            className="text-[11px] font-medium tracking-[1.8px] hover:text-gray-500"
          >
            NEW ARRIVALS
          </a>

          <a
            href="#"
            className="text-[11px] font-medium tracking-[1.8px] hover:text-gray-500"
          >
            ABOUT
          </a>
        </nav>

        {/* Search */}
        <div className="hidden md:flex flex-1 h-[47px] border border-black ml-auto max-w-[647px]">
          <input
            type="text"
            placeholder="Search products, vendors, brands..."
            className="flex-1 min-w-0 px-4 text-sm outline-none placeholder:text-gray-400"
          />

          <button className="w-[100px] bg-black text-white text-[11px] font-bold tracking-[1.5px] hover:bg-gray-800">
            SEARCH
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5 ml-auto md:ml-0 shrink-0">
          {/* Wishlist */}
          <button className="hidden sm:flex items-center gap-2 group">
            <Heart
              size={21}
              strokeWidth={1.5}
              className="group-hover:fill-black transition"
            />

            <span className="hidden xl:block text-[10px] font-semibold tracking-[1.5px]">
              WISHLIST
            </span>
          </button>

          {/* Cart */}
          <button className="flex items-center gap-2">
            <ShoppingCart
              size={22}
              strokeWidth={1.5}
            />

            <span className="hidden xl:block text-[10px] font-semibold tracking-[1.5px]">
              CART
            </span>

            <span className="flex items-center justify-center bg-black text-white text-[10px] font-bold w-[20px] h-[20px]">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-6 pb-4">
        <div className="flex h-[44px] border border-black">
          <input
            type="text"
            placeholder="Search products, vendors, brands..."
            className="flex-1 min-w-0 px-3 text-sm outline-none"
          />

          <button className="w-[80px] bg-black text-white text-[10px] font-bold tracking-[1px]">
            SEARCH
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;