import { NavLink } from "react-router-dom";
// import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-[#D9D5C9]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand + newsletter */}
          <div className="col-span-2">
            <h2
              className="text-2xl mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Marché
            </h2>
            <p className="text-sm text-[#8C8577] max-w-xs mb-5">
              Considered goods, delivered well. Sign up for early access to new
              drops.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-sm border-b border-[#3A3A3A] focus-within:border-[#C9A227] transition-colors"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-transparent py-2 text-sm text-white placeholder:text-[#6B6558] outline-none"
              />
              <button
                type="submit"
                className="text-sm text-[#C9A227] hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#8C8577] mb-4">
              Shop
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <NavLink
                  to="/products"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  All products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wishlist"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#8C8577] mb-4">
              Account
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <NavLink
                  to="/login"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Sign in
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Help center
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className="hover:text-[#C9A227] transition-colors"
                >
                  Returns
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#2A2A2A] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6558]">
            © {new Date().getFullYear()} Marché. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#8C8577] hover:text-[#C9A227] transition-colors"
            >
              {/* <Instagram size={16} /> */}
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#8C8577] hover:text-[#C9A227] transition-colors"
            >
              {/* <Twitter size={16} /> */}
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#8C8577] hover:text-[#C9A227] transition-colors"
            >
              {/* <Facebook size={16} /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
