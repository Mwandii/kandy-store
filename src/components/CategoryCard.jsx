import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const navigate = useNavigate();
  const { name, slug, description, icon, image, itemCount, color } = category;

  const handleClick = () => {
    navigate(`/categories/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
    >
      {/* Image with gradient overlay */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`} />

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl md:text-7xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Item count badge */}
        <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 md:px-3 md:py-1 shadow-md">
          <span className="text-[10px] md:text-xs font-bold text-gray-900">{itemCount} items</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5 md:mb-2 group-hover:text-orange-600 transition-colors">
          {name}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 line-clamp-2">
          {description}
        </p>

        {/* Browse button */}
        <button className="flex items-center gap-1.5 md:gap-2 text-orange-500 font-semibold text-xs md:text-sm group-hover:gap-3 transition-all">
          Browse Category
          <FaArrowRight className="text-[10px] md:text-xs" />
        </button>
      </div>
    </div>
  );
}