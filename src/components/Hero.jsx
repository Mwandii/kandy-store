import { useState, useEffect, useRef } from "react";
import { FaShoppingBag, FaStore, FaCheckCircle, FaStar } from "react-icons/fa";

function HeroSection({ setCurrentPage }) {
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

  const stats = [
    { number: "500+", label: "Trusted Vendors", icon: FaStore },
    { number: "50K+", label: "Premium Products", icon: FaShoppingBag },
    { number: "100K+", label: "Happy Parents", icon: FaStar }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl lg:rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-16">
            {/* Left Content */}
            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-200 animate-fade-in">
                <FaCheckCircle className="text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">
                  Premium Quality Guaranteed
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Everything Your{" "}
                <span className="bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent animate-gradient">
                  Baby
                </span>{" "}
                Needs
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Shop from trusted vendors • Best prices guaranteed • Fast & safe delivery to your doorstep
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage("products")}
                  className="group relative bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaShoppingBag />
                    Shop Now
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </button>

                <button
                  onClick={() => setCurrentPage("vendors")}
                  className="group border-2 border-amber-600 hover:border-amber-700 text-amber-700 hover:text-white bg-white hover:bg-linear-to-r hover:from-amber-600 hover:to-orange-600 px-8 py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaStore />
                    Browse Vendors
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className={`text-center transition-all duration-700 delay-${
                        index * 100
                      } ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="flex justify-center mb-2">
                        <Icon className="text-amber-600 text-xl" />
                      </div>
                      <p className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                        {stat.number}
                      </p>
                      <p className="text-xs lg:text-sm text-gray-600 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="relative h-64 sm:h-80 lg:h-125 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
                {/* Main Image */}
                <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop"
                  alt="Happy baby with toys"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    <span className="font-bold text-gray-800">4.9</span>
                    <span className="text-sm text-gray-600">Rating</span>
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Free Shipping on
                      </p>
                      <p className="text-lg font-bold bg-linear-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                        Orders Over $50
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaShoppingBag className="text-white text-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-50">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(10px);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;