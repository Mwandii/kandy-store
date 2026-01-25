import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaHeart, FaShoppingCart, FaFire, FaArrowRight, FaBaby, FaChild } from "react-icons/fa";

// ============================================
// TRENDING PRODUCTS SECTION
// ============================================
function TrendingProductsSection({ setCurrentPage }) {
  const [isVisible, setIsVisible] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const products = [
    {
      id: 1,
      name: "Organic Cotton Baby Onesie",
      vendor: "Little Angels",
      price: 24.99,
      oldPrice: 34.99,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&h=500&fit=crop",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Premium Soft Teddy Bear",
      vendor: "Tiny Treasures",
      price: 18.99,
      oldPrice: null,
      rating: 4.8,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop",
      badge: "New"
    },
    {
      id: 3,
      name: "Complete Feeding Set",
      vendor: "Baby Bliss",
      price: 29.99,
      oldPrice: 39.99,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1599686156842-2427e2d86f5c?w=500&h=500&fit=crop",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Musical Nursery Mobile",
      vendor: "Sweet Dreams",
      price: 34.99,
      oldPrice: null,
      rating: 4.7,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=500&h=500&fit=crop",
      badge: "Trending"
    },
    {
      id: 5,
      name: "Baby Bath Towel Set",
      vendor: "Little Angels",
      price: 19.99,
      oldPrice: 25.99,
      rating: 4.9,
      reviews: 501,
      image: "https://images.unsplash.com/photo-1620843002805-05a08cb72f57?w=500&h=500&fit=crop",
      badge: "Popular"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20"
    >
      {/* Section Header */}
      <div
        className={`mb-10 lg:mb-14 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <FaFire className="text-orange-500 text-2xl animate-pulse" />
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
            Hot Deals
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Trending{" "}
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Products
          </span>
        </h3>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
          Most loved products by parents this month
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
            }}
            onClick={() => setCurrentPage("detail")}
          >
            {/* Image Container */}
            <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {product.badge}
                </div>
              )}

              {/* Sale Badge */}
              {product.oldPrice && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
                  SAVE {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <FaHeart
                  className={`${
                    wishlist.includes(product.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  } transition-colors`}
                />
              </button>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-4 lg:p-5">
              {/* Vendor */}
              <p className="text-xs text-gray-500 mb-1 font-medium">
                {product.vendor}
              </p>

              {/* Product Name */}
              <h4 className="font-bold text-sm lg:text-base text-gray-800 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300 min-h-[2.5rem]">
                {product.name}
              </h4>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600 font-semibold">
                  {product.rating}
                </span>
                <span className="text-xs text-gray-400">
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-lg lg:text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-2.5 lg:py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <FaShoppingCart className="text-xs" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div
        className={`text-center mt-10 lg:mt-14 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <button
          onClick={() => setCurrentPage("products")}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          View All Products
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}

export default TrendingProductsSection;

