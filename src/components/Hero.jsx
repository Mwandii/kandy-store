import { FaCheck, FaShoppingBag, FaStar } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-linear-to-br from-amber-50 via-yellow-50 to-orange-50 px-4 py-8 md:p-14">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-between bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl p-6 md:py-8 md:px-8 max-w-7xl mx-auto">
        
        {/* ── Left Content ── */}
        <div className="flex flex-col gap-4 md:gap-5 md:px-8 w-full lg:w-auto animate-fadeSlideUp">
          
          {/* Quality Badge */}
          <div>
            <p className="text-xs md:text-sm text-[#8B4513] font-bold bg-linear-to-r from-amber-100 via-yellow-100 to-orange-100 px-4 py-2 rounded-full inline-flex gap-2 items-center shadow-sm">
              <FaCheck className="bg-[#FF6B35] rounded-full p-1 w-4 h-4 text-white shrink-0" />
              <span className="whitespace-nowrap">Premium Quality Guaranteed</span>
            </p>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.2] md:leading-[1.3] font-bold text-gray-900">
              Everything Your{" "}
              <span className="bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                Baby
              </span>{" "}
              Needs
            </h1>
          </div>

          {/* Subtitle */}
          <div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Shop from trusted vendors
              <span className="mx-1 md:mx-1.5 font-bold text-orange-500">·</span>
              Best prices guaranteed
              <span className="mx-1 md:mx-1.5 font-bold text-orange-500">·</span>
              Fast and safe delivery done country wide
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 pt-2 md:py-6 font-semibold">
            <Link to="/categories">
            <button className="px-6 py-3.5 md:px-8 md:py-4 shadow-lg hover:shadow-xl text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:cursor-pointer">
              Shop Now
            </button>
            </Link>
            <Link to="/vendors">
            <button className="px-6 py-3.5 md:px-8 md:py-4 shadow-md hover:shadow-lg border-2 border-orange-600 text-orange-700 hover:text-orange-800 rounded-full transition-all duration-300 hover:scale-105 hover:bg-orange-50 hover:cursor-pointer">
              Browse Vendors
            </button>
            </Link>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-200 my-2 md:my-0" />

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 py-4 md:py-6">
            <StatCard
              icon={<FaShop className="text-orange-600 text-xl md:text-2xl" />}
              number="500+"
              label="Trusted Vendors"
            />
            <StatCard
              icon={<FaShoppingBag className="text-orange-600 text-xl md:text-2xl" />}
              number="50K+"
              label="Premium Products"
            />
            <StatCard
              icon={<FaStar className="text-orange-600 text-xl md:text-2xl" />}
              number="100K+"
              label="Happy Clients"
            />
          </div>
        </div>

        {/* ── Right Image ── */}
        <div className="w-full lg:w-[45%] lg:max-w-lg shrink-0 animate-fadeSlideUp animation-delay-200">
          <div className="relative group">
            {/* Decorative gradient blob behind image */}
            <div className="absolute -inset-4 bg-linear-to-br from-orange-200 via-amber-200 to-yellow-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Main image */}
            <img
              className="relative rounded-2xl md:rounded-3xl w-full shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
              src="https://images.unsplash.com/photo-1709380830070-2c0da9348126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFieSUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Happy baby playing"
            />

            {/* Floating badge overlay */}
        
          </div>
        </div>

      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* ── Stat Card Component ────────────────────────────────────────────────── */
function StatCard({ icon, number, label }) {
  return (
    <div className="flex flex-col items-center gap-2 md:gap-3 group cursor-default">
      <div className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <p className="text-2xl md:text-3xl font-bold text-orange-700 transition-colors duration-300 group-hover:text-orange-600">
        {number}
      </p>
      <p className="text-xs md:text-sm text-gray-600 text-center leading-tight">
        {label}
      </p>
    </div>
  );
}

export default HeroSection;