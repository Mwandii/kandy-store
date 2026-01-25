import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaHeart, FaShoppingCart, FaFire, FaArrowRight, FaBaby, FaChild } from "react-icons/fa";

function ShopByAgeSection() {
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

  const ages = [
    {
      label: "0–6 Months",
      description: "Newborn essentials",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=400&fit=crop",
      gradient: "from-pink-400 to-rose-500",
      icon: FaBaby,
      productCount: "1,200+"
    },
    {
      label: "6–12 Months",
      description: "Growing baby needs",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=500&h=400&fit=crop",
      gradient: "from-blue-400 to-cyan-500",
      icon: FaBaby,
      productCount: "980+"
    },
    {
      label: "1–2 Years",
      description: "Toddler favorites",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&h=400&fit=crop",
      gradient: "from-purple-400 to-indigo-500",
      icon: FaChild,
      productCount: "1,450+"
    },
    {
      label: "2+ Years",
      description: "Active kids items",
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=500&h=400&fit=crop",
      gradient: "from-amber-400 to-orange-500",
      icon: FaChild,
      productCount: "2,100+"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 lg:mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Age-Appropriate Selection
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Shop by{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Age Group
            </span>
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Find perfectly curated products for every stage of your baby's growth
          </p>
        </div>

        {/* Age Groups Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {ages.map((age, index) => {
            const Icon = age.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 transform hover:-translate-y-3 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
                }}
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={age.image}
                    alt={age.label}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${age.gradient} opacity-50 group-hover:opacity-60 transition-opacity duration-300`}></div>

                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className={`text-4xl sm:text-5xl bg-gradient-to-br ${age.gradient} bg-clip-text text-transparent`} />
                    </div>
                  </div>

                  {/* Product Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-gray-800">
                      {age.productCount} items
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6 text-center bg-gradient-to-b from-white to-gray-50">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {age.label}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {age.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-600 hover:to-orange-600 text-amber-700 hover:text-white py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                    Browse Collection
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${age.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ShopByAgeSection;