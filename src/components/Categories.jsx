import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

function CategoriesSection() {
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
  const categories = [
    {
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
      gradient: "from-pink-400 to-pink-600",
      itemCount: "2,450+ items"
    },
    {
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop",
      gradient: "from-purple-400 to-purple-600",
      itemCount: "1,890+ items"
    },
    {
      name: "Feeding",
      image: "https://images.unsplash.com/photo-1599686156842-2427e2d86f5c?w=400&h=400&fit=crop",
      gradient: "from-blue-400 to-blue-600",
      itemCount: "980+ items"
    },
    {
      name: "Nursery",
      image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=400&h=400&fit=crop",
      gradient: "from-green-400 to-green-600",
      itemCount: "1,230+ items"
    },
    {
      name: "Gear",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
      gradient: "from-orange-400 to-orange-600",
      itemCount: "1,560+ items"
    },
    {
      name: "Bath",
      image: "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400&h=400&fit=crop",
      gradient: "from-cyan-400 to-cyan-600",
      itemCount: "720+ items"
    }
  ];
*/
  return (
    <section
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20"
    >
      {/* Section Header */}
      <div
        className={`text-center mb-10 lg:mb-14 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-block mb-4">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider bg-amber-50 px-4 py-2 rounded-full">
            Explore Collections
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Shop by{" "}
          <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Category
          </span>
        </h3>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover premium baby products curated by category for your convenience
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`group relative bg-white rounded-2xl lg:rounded-3xl shadow-md hover:shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
            }}
          >
            {/* Image Container */}
            <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${cat.gradient} opacity-40 group-hover:opacity-50 transition-opacity duration-300`}></div>
              
              {/* Icon/Badge Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-3xl sm:text-4xl">
                    {cat.name === "Clothing" && "👕"}
                    {cat.name === "Toys" && "🧸"}
                    {cat.name === "Feeding" && "🍼"}
                    {cat.name === "Nursery" && "🛏️"}
                    {cat.name === "Gear" && "🚼"}
                    {cat.name === "Bath" && "🛁"}
                  </span>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                <FaArrowRight className="text-amber-600 text-sm" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 lg:p-5 text-center bg-linear-to-b from-white to-gray-50">
              <h4 className="font-bold text-base lg:text-lg text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                {cat.name}
              </h4>
              <p className="text-xs lg:text-sm text-gray-500 font-medium">
                {cat.itemCount}
              </p>
            </div>

            {/* Bottom Accent Line */}
            <div className={`h-1 bg-linear-to-r ${cat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div
        className={`text-center mt-10 lg:mt-14 transition-all duration-1000 delay-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <button className="group inline-flex items-center gap-3 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Browse All Categories
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
        }
      `}</style>
    </section>
  );
}

export default CategoriesSection;