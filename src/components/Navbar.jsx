import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaQuestionCircle,
  FaStore,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  // Get cart state from Zustand
  const cartItemCount = useCartStore((state) => state.cartItemCount);
  const toggleCart = useCartStore((state) => state.toggleCart);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsAtTop(currentScrollY < 10);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu handler
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop ? "shadow-md" : "shadow-2xl"
      }`}
    >
      
      {/* ── Top Banner (hidden on mobile) ── */}
      <div className="hidden md:flex justify-between px-5 py-2 bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 text-white text-sm">
        <p className="flex items-center">
          For all your baby essentials. Fast and reliable delivery guaranteed
        </p>
        <div className="flex gap-4 font-medium">
          <a href="#" className="hover:underline flex items-center gap-1.5 transition-all">
            <FaStore className="text-xs" />
            Seller Center
          </a>
          <a href="#" className="hover:underline flex items-center gap-1.5 transition-all">
            <FaQuestionCircle className="text-xs" />
            Help & Support
          </a>
        </div>
      </div>

      {/* ── Main Header ── */}
      <div className="flex px-4 md:px-6 py-3 md:py-4 justify-between items-center bg-white/95 backdrop-blur-md">
        
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu}>
          <h1 className="font-bold text-xl md:text-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent whitespace-nowrap cursor-pointer">
            Kandy Baby Store
          </h1>
        </Link>

        {/* Search Bar (desktop) */}
        <div className="hidden lg:block flex-1 max-w-2xl mx-8">
          <div
            className={`relative transition-all duration-200 ${
              searchFocused ? "scale-105" : ""
            }`}
          >
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="search"
              className="bg-gray-100 focus:bg-white pl-12 pr-6 py-3.5 font-light rounded-full w-full text-sm border-2 border-transparent focus:border-orange-400 transition-all outline-none shadow-sm focus:shadow-md"
              placeholder="Search for baby products, brands, shops......"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3 items-center">
          {/* Cart Button with Badge */}
          <button 
            onClick={toggleCart}
            className="relative flex items-center gap-2 text-gray-700 hover:text-orange-600 font-semibold transition-colors px-3 py-2 rounded-lg hover:bg-orange-50"
          >
            <FaShoppingCart className="text-lg" />
            <span className="hidden lg:inline">Cart</span>
            
            {/* Cart Badge */}
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-once">
                {cartItemCount > 99 ? "99+" : cartItemCount}
              </span>
            )}
          </button>

          <button className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all">
            <FaUser className="text-sm" />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ── Search Bar (mobile - below header) ── */}
      <div className="lg:hidden px-4 pb-3 bg-white">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="search"
            className="bg-gray-100 pl-11 pr-4 py-3 font-light rounded-full w-full text-sm border-2 border-transparent focus:border-orange-400 transition-all outline-none"
            placeholder="Search products..."
          />
        </div>
      </div>

      {/* ── Divider ── */}
      <hr className="border-gray-200" />

      {/* ── Navigation Links (desktop) ── */}
      <div className="hidden md:block bg-white">
        <ul className="flex items-center gap-5 px-5 py-3 text-gray-700 text-sm font-bold max-w-7xl mx-auto">
          <li className="hover:text-orange-600 transition-colors cursor-pointer">
            <Link to="/categories">All Categories</Link>
          </li>
          <li className="hover:text-orange-600 transition-colors cursor-pointer">
            <Link to="/new-arrivals">New Arrivals</Link>
          </li>
        <li> <Link 
  to="/checkout"
  onClick={(e) => {
    console.log("Link clicked!");
    console.log("Navigating to:", e.currentTarget.getAttribute("to"));
  }}
>
  Test Link
</Link></li>
          <li className="hover:text-orange-600 transition-colors cursor-pointer">
            <a>Best Deals</a>
          </li>
          <li className="hover:text-orange-600 transition-colors cursor-pointer">
            <a>Top Vendors</a>
          </li>
          <li className="ml-auto">
            <a className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-2.5 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
              Start Selling
            </a>
          </li>
        </ul>
      </div>

      {/* ── Mobile Menu (slide-down) ── */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown">
          <ul className="flex flex-col py-3">
            <MobileNavItem text="All Categories" to="/categories" onClick={closeMobileMenu} />
            <MobileNavItem text="New Arrivals" to="#" onClick={closeMobileMenu} />
            <MobileNavItem text="Best Deals" to="#" onClick={closeMobileMenu} />
            <MobileNavItem text="Top Vendors" to="#" onClick={closeMobileMenu} />
            
            {/* Mobile CTA buttons */}
            <li className="px-4 py-3 border-t border-gray-100 mt-2 pt-4 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold px-5 py-3 rounded-full shadow-md">
                <FaStore />
                Start Selling
              </button>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/cart">
                <button 
                  onClick={() => {
                    toggleCart();
                    closeMobileMenu();
                  }}
                  className="relative flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-600 font-semibold px-4 py-2.5 rounded-full hover:bg-orange-50 transition-colors"
                >
                  <FaShoppingCart />
                  Cart
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount > 99 ? "99+" : cartItemCount}
                    </span>
                  )}
                </button>
                </Link>
                
                <button className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-semibold px-4 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
                  <FaUser />
                  Login
                </button>
              </div>
            </li>

            {/* Mobile top banner links */}
            <li className="px-4 py-3 border-t border-gray-100 flex flex-col gap-2 text-sm">
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors py-2">
                <FaStore />
                Seller Center
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors py-2">
                <FaQuestionCircle />
                Help & Support
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* ── Animations ── */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
        @keyframes bounceOnce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-bounce-once {
          animation: bounceOnce 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}

/* ── Mobile Nav Item ─────────────────────────────────────────────────────── */
function MobileNavItem({ text, to, onClick }) {
  return (
    <li className="px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer border-b border-gray-100 font-semibold text-gray-700">
      <Link to={to} onClick={onClick}>{text}</Link>
    </li>
  );
}

export default Navbar;