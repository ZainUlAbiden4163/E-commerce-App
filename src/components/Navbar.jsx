import { useState } from "react";
import { NavLink } from "react-router-dom";
// import {
//   FiSearch,
//   FiHeart,
//   FiShoppingBag,
//   FiUser,
//   FiMenu,
//   FiX,
//   FiSend,
// } from "react-icons/fi";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/products" },
];

export default function Navbar({ cartCount = 0, wishlistCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const linkClass = ({ isActive }) =>
    `relative pb-1 text-sm tracking-wide transition-colors ${
      isActive
        ? "text-[#141414] after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-full after:bg-[#C9A227]"
        : "text-[#6B6558] hover:text-[#141414]"
    }`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // wire this up to your search route / query param
    console.log("search:", query);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur border-b border-black/10">
      {/* Top utility strip */}
      <div className="hidden md:block border-b border-black/5 bg-[#141414] text-[#D9D5C9]">
        <div className="mx-auto max-w-7xl px-8 py-1.5 flex justify-between text-xs tracking-wide">
          <span>Free shipping on orders over $50</span>
          <span className="text-[#8C8577]">Need help? +92 300 0000000</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex h-16 items-center gap-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="font-serif text-xl tracking-tight text-[#141414] shrink-0"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Marché
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 shrink-0">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Search box — desktop, inline */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md ml-auto items-center border border-black/15 rounded-full px-4 py-2 focus-within:border-[#C9A227] transition-colors"
          >
            {/* <FiSearch size={16} className="text-[#8C8577]" /> */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full bg-transparent px-3 text-sm text-[#141414] placeholder:text-[#8C8577] outline-none"
            />
          </form>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <NavLink
              to="/wishlist"
              aria-label="Wishlist"
              className="relative text-[#141414] hover:text-[#C9A227] transition-colors"
            >
              {/* <FiHeart size={19} /> */}
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A227] text-[10px] font-medium text-white">
                  {wishlistCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              aria-label="Cart"
              className="relative text-[#141414] hover:text-[#C9A227] transition-colors"
            >
              {/* <FiShoppingBag size={19} /> */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A227] text-[10px] font-medium text-white">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/login"
              aria-label="Account"
              className="text-[#141414] hover:text-[#C9A227] transition-colors"
            >
              {/* <FiUser size={19} /> */}
            </NavLink>
          </div>

          {/* Mobile: search toggle + menu toggle */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            <button
              aria-label="Toggle search"
              onClick={() => setSearchOpen((o) => !o)}
              className="text-[#141414]"
            >
              {/* <FiSearch size={20} /> */}
            </button>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
              className="text-[#141414]"
            >
              {menuOpen ? "X" : "O"}
              {/* <FiX size={22} />
              <FiMenu size={22} /> */}
            </button>
          </div>
        </div>

        {/* Mobile search bar (collapses below header) */}
        {searchOpen && (
          <form
            onSubmit={handleSearchSubmit}
            className="md:hidden flex items-center border border-black/15 rounded-full px-4 py-2 mb-4 focus-within:border-[#C9A227] transition-colors"
          >
            {/* <FiSearch size={16} className="text-[#8C8577]" /> */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              autoFocus
              className="w-full bg-transparent px-3 text-sm text-[#141414] placeholder:text-[#8C8577] outline-none"
            />
          </form>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/10 bg-[#FAFAF7] px-5 py-6">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl text-[#141414]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 flex items-center gap-6 border-t border-black/10 pt-5">
            <NavLink
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-[#141414]"
            >
              {/* <FiHeart size={18} /> */}
              Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
            </NavLink>
            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-[#141414]"
            >
              {/* <FiShoppingBag size={18} />  */}
              Cart {cartCount > 0 && `(${cartCount})`}
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-[#141414]"
            >
              {/* <FiUser size={18} />  */}
              Account
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
