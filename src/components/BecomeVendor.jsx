import { FaArrowRight, FaStore } from "react-icons/fa";

function BecomeVendor() {
  return (
    <section className="relative overflow-hidden my-8 md:my-12 mx-4 md:mx-auto max-w-7xl">
      {/* Background with gradient + decorative elements */}
      <div className="relative bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl border-2 border-orange-200/60 shadow-lg px-6 py-10 md:py-16">
        
        {/* Decorative gradient blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative flex flex-col items-center text-center gap-5 md:gap-6 z-10">
          
          {/* Icon badge */}
          <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow">
            <FaStore className="text-white text-2xl md:text-3xl" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2 md:gap-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Want to become a{" "}
              <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                vendor?
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4">
              Join hundreds of trusted sellers and grow your business with Kandy Baby Store
            </p>
          </div>

          {/* CTA Button */}
          <button className="group flex items-center gap-2.5 md:gap-3 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-white font-bold text-sm md:text-base py-3 md:py-4 px-6 md:px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
            <FaStore className="text-base md:text-lg" />
            <span>Start selling today</span>
            <FaArrowRight className="text-sm md:text-base group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Easy onboarding</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Trusted by parents</span>
            </div>
            <span className="hidden sm:inline text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Reach more customers</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default BecomeVendor;