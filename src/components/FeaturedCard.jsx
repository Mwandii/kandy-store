import { 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar, 
  FaCheckCircle, 
  FaBoxOpen, 
  FaUsers,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ── Star renderer ─────────────────────────────────────────────────────────── */
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => {
        const full = rating >= n;
        const half = !full && rating >= n - 0.5;
        return full ? (
          <FaStar key={n} className="text-amber-400 text-sm md:text-base" />
        ) : half ? (
          <FaStarHalfAlt key={n} className="text-amber-400 text-sm md:text-base" />
        ) : (
          <FaRegStar key={n} className="text-gray-300 text-sm md:text-base" />
        );
      })}
    </div>
  );
}

/* ── Format big numbers ─────────────────────────────────────────────────────── */
function fmt(n) {
  if (n >= 1000) return `${Math.floor(n / 1000)}K+`;
  return n.toString();
}

/* ── VendorCard (Enhanced for All Vendors page) ────────────────────────────── */
export default function VendorCard({ vendor }) {
  const navigate = useNavigate();
  
  const {
    slug,
    name,
    category,
    description,
    rating,
    reviewCount,
    products,
    customers,
    coverImage,
    logoIcon,
    verified,
    location,
    responseTime,
    tags = []
  } = vendor;

  const handleClick = () => {
    navigate(`/vendors/${slug}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
    >
      
      {/* ── Cover Image ── */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Verified badge */}
        {verified && (
          <div className="absolute top-3 right-3 bg-white rounded-full px-2.5 md:px-3 py-1 flex items-center gap-1 md:gap-1.5 text-xs md:text-sm font-semibold shadow-md">
            <FaCheckCircle className="text-green-500 text-xs md:text-sm" />
            Verified
          </div>
        )}

        {/* Logo */}
        <div className="absolute -bottom-6 md:-bottom-8 left-4 md:left-5 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center text-2xl md:text-3xl border-4 border-white transition-transform duration-300 group-hover:scale-110">
          {logoIcon}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="pt-8 md:pt-12 px-4 md:px-5 pb-4 md:pb-5">
        
        {/* Name & Category */}
        <div className="mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors line-clamp-1">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 line-clamp-1">{category}</p>
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <Stars rating={rating} />
          <span className="font-bold text-sm md:text-base text-gray-900">{rating.toFixed(1)}</span>
          <span className="text-xs md:text-sm text-gray-400">({reviewCount.toLocaleString()})</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="flex items-center gap-2 bg-orange-50 rounded-lg p-2">
            <FaBoxOpen className="text-orange-500 text-sm md:text-base flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-bold text-gray-900 truncate">{fmt(products)}</p>
              <p className="text-[10px] md:text-xs text-gray-500">Products</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-indigo-50 rounded-lg p-2">
            <FaUsers className="text-indigo-500 text-sm md:text-base flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-bold text-gray-900 truncate">{fmt(customers)}</p>
              <p className="text-[10px] md:text-xs text-gray-500">Customers</p>
            </div>
          </div>
        </div>

        {/* Location & Response Time */}
        <div className="space-y-1.5 mb-4 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-orange-500 text-xs flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaClock className="text-green-500 text-xs flex-shrink-0" />
            <span className="truncate">{responseTime}</span>
          </div>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
            {tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] md:text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Visit Store Button */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm md:text-base py-2.5 md:py-3 rounded-xl transition-all duration-200 hover:scale-[1.02]">
          Visit Store
        </button>
      </div>
    </div>
  );
}