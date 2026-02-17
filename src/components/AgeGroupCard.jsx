import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AgeGroupCard({ ageGroup }) {
  const { slug, ageRange, subtitle, itemCount, gradient, image, icon } = ageGroup;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop-by-age/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col group cursor-pointer"
    >
      
      {/* ── Image Section with Gradient Overlay ── */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: gradient }}
        />

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Item count badge */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white rounded-full px-3 py-1 md:px-4 md:py-1.5 shadow-md">
          <span className="text-[10px] md:text-xs font-bold text-gray-900">{itemCount}</span>
        </div>

        {/* Icon */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center text-3xl md:text-4xl">
          {icon || "👶"}
        </div>
      </div>

      {/* ── Content Section ── */}
      <div className="p-4 md:p-6 flex flex-col items-center text-center flex-1">
        
        {/* Age range title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-2 group-hover:text-orange-600 transition-colors duration-200">
          {ageRange}
        </h3>

        {/* Subtitle */}
        <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
          {subtitle}
        </p>

        {/* Browse Collection CTA */}
        <button className="group/btn inline-flex items-center gap-1.5 md:gap-2 text-orange-500 font-bold text-xs md:text-sm hover:text-orange-600 transition-colors duration-200">
          Browse Collection
          <FaArrowRight className="text-[10px] md:text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}