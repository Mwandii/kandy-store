import React, { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaHeart,
  FaChevronDown,
  FaTimes
} from "react-icons/fa";

function Navbar({ setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-linear-to-r from-amber-600 via-amber-700 to-orange-600 text-white text-xs sm:text-sm py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-center sm:text-left font-medium animate-fade-in">
            ✨ Free shipping on orders over $50 • Premium Quality Guaranteed
          </p>
          <div className="flex gap-6 text-xs animate-fade-in">
            <a
              href="#"
              className="hover:text-amber-200 transition-all duration-200 font-medium hover:scale-105"
            >
              Seller Center
            </a>
            <a
              href="#"
              className="hover:text-amber-200 transition-all duration-200 font-medium hover:scale-105"
            >
              Help & Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-2xl py-3" : "shadow-lg py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setCurrentPage("home")}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=100&h=100&fit=crop"
                  alt="Baby"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl object-cover"
                />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent whitespace-nowrap group-hover:scale-105 transition-transform duration-200">
                Kandy Baby Store
              </h1>
            </div>

            {/* Search - Desktop */}
            <div className="hidden md:flex flex-1 mx-6 max-w-2xl">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search for baby products, brands, shops..."
                  className="w-full px-5 lg:px-6 py-2.5 lg:py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-gray-50 focus:bg-white text-sm lg:text-base"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                  <FaSearch className="text-sm lg:text-base" />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex gap-3 sm:gap-4 lg:gap-5 items-center">
              {/* Wishlist */}
              <button className="hidden sm:block text-gray-600 hover:text-amber-600 transition-all duration-200 transform hover:scale-110 relative group">
                <FaHeart className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>

              {/* Cart */}
              <button className="text-gray-600 hover:text-amber-600 transition-all duration-200 transform hover:scale-110 relative group">
                <FaShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-linear-to-r from-amber-600 to-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login Button */}
              <button className="hidden sm:flex items-center gap-2 bg-linear-to-r from-gray-50 to-gray-100 hover:from-amber-50 hover:to-orange-50 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full transition-all duration-300 text-sm lg:text-base font-medium text-gray-700 hover:text-amber-700 shadow-sm hover:shadow-md transform hover:scale-105 border border-gray-200 hover:border-amber-300">
                <FaUser className="w-4 h-4" />
                <span className="hidden lg:inline">Login</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-600 hover:text-amber-600 transition-all duration-200 transform hover:scale-110"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-3 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-full focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all duration-300 bg-gray-50 focus:bg-white text-sm"
              />
              <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Secondary Nav - Desktop */}
          <div className="hidden lg:flex gap-6 xl:gap-8 mt-4 pt-4 border-t border-gray-100 text-sm">
            <button className="flex items-center gap-2 text-gray-700 hover:text-amber-600 font-medium transition-all duration-200 hover:scale-105 group">
              <FaBars className="group-hover:rotate-180 transition-transform duration-300" />
              All Categories
              <FaChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              href="#"
              className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-200 hover:scale-105"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-200 hover:scale-105 flex items-center gap-1"
            >
              Best Deals
              <span className="text-orange-500 animate-pulse">🔥</span>
            </a>
            <button
              onClick={() => setCurrentPage("vendors")}
              className="text-gray-700 hover:text-amber-600 font-medium transition-all duration-200 hover:scale-105"
            >
              Top Vendors
            </button>
            <a
              href="#"
              className="bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-5 py-1.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Selling
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in">
          <div className="bg-white w-4/5 max-w-sm h-full p-6 shadow-2xl animate-slide-in-left">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold bg-linear-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                Menu
              </h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-500 hover:text-amber-600 duration-200 hover:rotate-90 transform transition-transform"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-2">
              {[
                { label: "Home", page: "home" },
                { label: "All Categories", page: "categories" },
                { label: "New Arrivals", page: "new" },
                { label: "Best Deals", page: "deals" },
                { label: "Top Vendors", page: "vendors" },
                { label: "Products", page: "products" },
                { label: "Wishlist", page: "wishlist" },
                { label: "My Account", page: "account" }
              ].map((item, index) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#"
                className="block w-full text-center bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-4"
              >
                Start Selling
              </a>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;