import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaCheckCircle, FaStore, FaArrowRight, FaBox, FaUsers } from "react-icons/fa";

function FeaturedVendorsSection({ setCurrentPage }) {
  const [isVisible, setIsVisible] = useState(false);
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
/*
  const vendors = [
    {
      id: 1,
      name: "Little Angels Store",
      rating: 4.8,
      reviews: 2340,
      products: 450,
      verified: true,
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop",
      specialty: "Organic Baby Clothing",
      bgGradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      name: "Baby Bliss Shop",
      rating: 4.7,
      reviews: 1890,
      products: 380,
      verified: true,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      specialty: "Premium Toys & Gear",
      bgGradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Tiny Treasures",
      rating: 4.9,
      reviews: 3120,
      products: 520,
      verified: true,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      specialty: "Nursery Essentials",
      bgGradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      name: "Sweet Dreams Baby",
      rating: 4.6,
      reviews: 1560,
      products: 290,
      verified: true,
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=300&fit=crop",
      specialty: "Sleep & Comfort",
      bgGradient: "from-amber-500 to-orange-500"
    }
  ];
*/
  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-amber-50 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 lg:mb-14 gap-6 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider bg-amber-50 px-4 py-2 rounded-full">
                Trusted Partners
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Featured{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Vendors
              </span>
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              Shop from our verified and trusted baby product vendors
            </p>
          </div>

          <button
            onClick={() => setCurrentPage("vendors")}
            className="group flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-base transition-all duration-300 hover:gap-3"
          >
            View All Vendors
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Vendors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              onClick={() => setCurrentPage("vendor")}
              className={`group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-3 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
              }}
            >
              {/* Header Image */}
              <div className="relative h-32 sm:h-36 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${vendor.bgGradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Verified Badge */}
                {vendor.verified && (
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    <span className="text-xs font-bold text-gray-800">Verified</span>
                  </div>
                )}
              </div>

              {/* Vendor Avatar */}
              <div className="relative -mt-10 px-5">
                <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border-4 border-white flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FaStore className={`text-3xl bg-gradient-to-br ${vendor.bgGradient} bg-clip-text text-transparent`} />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pb-6 pt-3">
                {/* Name & Specialty */}
                <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">
                  {vendor.name}
                </h4>
                <p className="text-sm text-gray-500 mb-4 line-clamp-1">
                  {vendor.specialty}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(vendor.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800">{vendor.rating}</span>
                  <span className="text-xs text-gray-500">
                    ({vendor.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
                      <FaBox className="text-amber-600 text-xs" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{vendor.products}</p>
                      <p className="text-xs text-gray-500">Products</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <FaUsers className="text-blue-600 text-xs" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{(vendor.reviews / 10).toFixed(0)}K+</p>
                      <p className="text-xs text-gray-500">Customers</p>
                    </div>
                  </div>
                </div>

                {/* Visit Button */}
                <button className="w-full bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-600 hover:to-orange-600 text-amber-700 hover:text-white py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group/btn">
                  Visit Store
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-xs" />
                </button>
              </div>

              {/* Hover Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${vendor.bgGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-10 lg:mt-14 transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-2xl p-8 border border-amber-100">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Want to become a vendor?
            </h4>
            <p className="text-gray-600 mb-6">
              Join hundreds of trusted sellers and grow your business with BabyMart
            </p>
            <button className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FaStore />
              Start Selling Today
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedVendorsSection;