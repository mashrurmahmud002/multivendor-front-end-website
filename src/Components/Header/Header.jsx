import { useContext, useEffect, useState } from "react";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getSearchProducts, getUserInfo, logOutUser } from "../../../Api";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
import CartDropdown from "../CartDropDown/CartDropDown";







const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

/** Renders a router link for "/paths" and a plain anchor for "#" placeholders. */
function SmartLink({ to, className, onClick, children ,user}) {
  if (to.startsWith("/")) {
    return (
      user?._id ? (<button className={className}>Logout</button>):( <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `${className} ${isActive ? "underline underline-offset-8" : ""}`
        }
      >
        {children}
      </NavLink>)
    );
  }
  return (
    <a href={to} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

const SAMPLE = [
  { id: 1, code: "CP", name: "Ceramic Pour-Over Set", brand: "Kinfolk Studio", category: "Home", price: 64 },
  { id: 2, code: "WO", name: "Wool Merino Overshirt", brand: "Atelier Nord", category: "Fashion", price: 128 },
  { id: 3, code: "WE", name: "Wireless Earbuds Pro", brand: "Volt Electronics", category: "Tech", price: 149 },
  { id: 4, code: "RS", name: "Retinol Night Serum", brand: "Roots & Remedy", category: "Beauty", price: 54 },
];

function SearchBox({ className, buttonClass, inputClass,search,setSearch,searchBox, setSearchBox }) {
  
  const [activeIndex, setActiveIndex] = useState(null);
  
  
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={`flex border border-black ${className}`}
    >
      <label htmlFor="site-search" className="sr-only">
        Search products, vendors, brands
      </label>
      <input
        id="site-search"
        type="search"
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search products, vendors, brands..."
        className={`min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400 ${inputClass}`}
      />
      <button
        type="submit"
        className={`shrink-0 bg-black font-bold text-white transition-colors hover:bg-gray-800 ${buttonClass}`}
      >
        SEARCH
      </button>
       <div className={search.length > 0 ?"absolute z-2 shadow-lg  top-13 w-full left-0":" hidden"} >
           <ul className="w-full  rounded-lg p-3">
          
           {
             search.length > 0 ? searchBox?.length > 0 ? searchBox?.map((item, index) => (
              <li  role="option" aria-selected={activeIndex === index} >
              <button
                type="button"
               
                className={`flex w-full items-center rounded-lg gap-4 border-t border-neutral-200 px-5 py-3 text-left transition-colors ${
                  activeIndex === index ? "bg-neutral-50" : "bg-white"
                }`}
              >
                <img  src={item?.imageArray?.[0]}  className="flex h-14 w-14 shrink-0 items-center justify-center border border-neutral-200 bg-neutral-100 text-[13px] font-bold"/>
                  
                

                <span className="min-w-0 flex-1">
                  <Link to={`/shop/product-details/${item?._id}`} className="block truncate text-[17px] font-bold leading-tight">
                    {item.title}
                  </Link>
                  <span className="mt-1 block truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                    {item?.brand} / {item?.category}
                  </span>
                </span>

                <span className="text-[17px] font-bold tabular-nums">${item?.price}</span>
              </button>
            </li>
               
             )): (<div className="flex justify-center items-center">
               <p>No products match “{search}”.</p>
             </div>) : " "
             
           
           }
          
        </ul>
        </div>
    </form>
  );
}




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [searchBox, setSearchBox] = useState([]);
  const {user, setUser} = useContext(AuthContext);
   const [open, setOpen] = useState(false);

  useEffect(()=>{
    getUserInfo();
  },[user])

  
  console.log(user,"user from authCOntext")
  const navigate = useNavigate();
  const navLinks = [
  { label: "SHOP", to: "/shop" },
  { label: "VENDORS", to: "/vendor/vendor-register" },
  { label: "DEALS", to: "/deals/deals-products" },
  { label: "NEW ARRIVALS", to: "/new-arrivals" },
  { label: "ABOUT", to: "/about" },
];
const utilityLinks = [
  { label: "SELL ON MARKETO", to: "/sell-on-markerto" },
  { label: "HELP", to: "#" },
  {label: "Vendor Login", to: "/vendor-login"},
  { label: user ? "LOGOUT" : "LOGIN", to: user ? "" : "/auth/signin" },

];


  const handleCartDropDown = () => {
    setOpen(!open);
  };

  const handleGetSearch = async()=>{
    console.log("hello  I am getSearch")

    try{

      const response = await getSearchProducts(search);
      console.log(response?.data?.products);

      setSearchBox(response?.data?.products)

    }catch(err){
      console.log(err)
    }

  }

useEffect(() => {
  if (!search.trim()) {
    setSearchBox([]);
    return;
  }

  handleGetSearch();
}, [search]);
  

 

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  const handleLogOut = async()=>{
     try{
      const response =  await logOutUser();
       Swal.fire({
              position: "top-end",
              icon: "success",
              title: response?.data?.message,
              showConfirmButton: false,
              timer: 1500
              });
      navigate("/login")
     }catch(err){
      console.log(err)
     }
  }


 

  // Close on Escape, and when the viewport grows past the drawer breakpoint
  // useEffect(() => {
  //   if (!menuOpen) return;
  //   const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
  //   const mq = window.matchMedia("(min-width: 1024px)");
  //   const onChange = (e) => e.matches && setMenuOpen(false);
  //   window.addEventListener("keydown", onKey);
  //   mq.addEventListener("change", onChange);
  //   return () => {
  //     window.removeEventListener("keydown", onKey);
  //     mq.removeEventListener("change", onChange);
  //   };
  // }, [menuOpen]);

  const close = () => setMenuOpen(false);

 

  return (
    <header className="w-full container mx-auto bg-white text-black">
      {/* Top bar */}
      <div className="flex h-[38px] items-center justify-between gap-4 border-b border-black px-4 sm:px-6 lg:px-8">
        <p className="truncate text-[9px] font-medium tracking-[1.5px] text-gray-600 sm:text-[10px] md:text-[11px] md:tracking-[2px]">
          FREE SHIPPING ON ORDERS OVER $75 · 190+ COUNTRIES
        </p>

        <div className="hidden shrink-0  items-center gap-6 md:flex lg:gap-8">
          {utilityLinks.map((l,i) =>{

            return i === 2 ?(
            <SmartLink
              key={l.label}
              to={l.to}
              className="text-[10px] font-medium border-r border-black border-l px-2 tracking-[1.5px] transition-colors hover:text-gray-500"
            >
              {l.label}
            </SmartLink>
          ):(
            <SmartLink
              user={user}
              key={l.label}
              to={l.to}
              className="text-[10px] font-medium tracking-[1.5px] transition-colors hover:text-gray-500"
            >
              {l.label}
            </SmartLink>
          )

          } )}
        </div>
      </div>

      {/* Main row */}
      <div className="flex h-[64px] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:h-[68px] lg:gap-8 lg:px-8">
        {/* Menu toggle (below lg) */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          className={`flex h-10 w-10 shrink-0 items-center justify-center border border-black lg:hidden ${focusRing}`}
        >
          <Menu size={18} strokeWidth={1.75} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`shrink-0 text-[20px] font-black tracking-[-1.5px] sm:text-[24px] ${focusRing}`}
        >
          MARKETO
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((l) => (
            <SmartLink
              key={l.label}
              to={l.to}
              className="whitespace-nowrap text-[11px] font-medium tracking-[1.8px] transition-colors hover:text-gray-500"
            >
              {l.label}
            </SmartLink>
          ))}
        </nav>

        {/* Desktop / tablet search */}
        <SearchBox
          search={search}
          setSearch={setSearch}
          searchBox={searchBox}
          setSearchBox={setSearchBox}
          className="ml-auto hidden relative h-[44px] max-w-[647px] min-w-0 flex-1 md:flex"
          inputClass="px-4"
          buttonClass="w-[84px] text-[11px] tracking-[1.5px] lg:w-[100px]"
        />
       

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 md:ml-0">
          <button
            type="button"
            aria-label="Wishlist"
            className={`group hidden h-10 items-center gap-2 px-2 sm:flex ${focusRing}`}
          >
            <Heart
              size={20}
              strokeWidth={1.5}
              className="transition group-hover:fill-black"
            />
            <span className="hidden text-[10px] font-semibold tracking-[1.5px] xl:block">
              WISHLIST
            </span>
          </button>

          <button
            type="button"
            aria-label="Cart, 3 items"
            className={`flex h-10 items-center gap-2 px-2 ${focusRing}`}
          >
            <ShoppingCart onClick={handleCartDropDown} size={21} strokeWidth={1.5} />
            {
               open ? <CartDropdown open={open} setOpen={setOpen}/> : null
            }
            <span className="hidden text-[10px] font-semibold tracking-[1.5px] xl:block">
              CART
            </span>
            <span className="flex h-[19px] min-w-[19px] items-center justify-center bg-black px-1 text-[10px] font-bold text-white">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Mobile search (below md) */}
      <div className="px-4 pb-4 sm:px-6 md:hidden">
        <SearchBox
          className="h-[44px]"
          inputClass="px-3"
          buttonClass="w-[84px] text-[10px] tracking-[1px]"
          
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="absolute inset-0 bg-black/40"
          />

          

          <div className="absolute left-0 top-0 flex h-full w-[85%] max-w-[340px] flex-col bg-white shadow-xl">
            <div className="flex h-[64px] shrink-0 items-center justify-between border-b border-black px-5">
              <span className="text-[18px] font-black tracking-[-1px]">MARKETO</span>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                autoFocus
                className={`flex h-10 w-10 items-center justify-center border border-black ${focusRing}`}
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
              <ul>
                {navLinks.map((l) => (
                  <li key={l.label} className="border-b border-gray-200">
                    <SmartLink
                      to={l.to}
                      onClick={close}
                      className="block py-4 text-[13px] font-semibold tracking-[1.5px]"
                    >
                      {l.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-col gap-4 ">
                {utilityLinks.map((l,i) =>{
                 return l === "Vendor Login" ? (
                    <li key={l.label} className=" ">
                      <SmartLink
                        to={l.to}
                        onClick={close}
                        className="block py-4 text-[13px] font-semibold tracking-[1.5px]  "
                      >
                        {l.label}
                      </SmartLink>
                    </li>
                   ) : (
                  <li className=" " key={l.label}>
                    <SmartLink
                      to={l.to}
                      onClick={close}
                      className="text-[11px] font-medium tracking-[1.5px] text-gray-600 "
                    >
                      {l.label}
                    </SmartLink>
                  </li>
                )

                } )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;