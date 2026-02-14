import {
  FaBoxOpen,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

/* ── Star renderer ─────────────────────────────────────────────────────────── */
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => {
        const full = rating >= n;
        const half = !full && rating >= n - 0.5;
        return full ? (
          <FaStar key={n} className="text-amber-400 text-sm md:text-[15px]" />
        ) : half ? (
          <FaStarHalfAlt key={n} className="text-amber-400 text-sm md:text-[15px]" />
        ) : (
          <FaRegStar key={n} className="text-gray-300 text-sm md:text-[15px]" />
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

/* ── VendorCard ─────────────────────────────────────────────────────────────── */
export default function VendorCard({ vendor }) {
  const {
    name,
    category,
    rating,
    reviewCount,
    products,
    customers,
    coverImage,
    logoIcon,
  } = vendor;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default group">

      {/* ── Cover Banner ── */}
      <div
        className="relative h-36 sm:h-40 md:h-44 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coverImage})`, backgroundSize: "cover" }}
      >
        {/* Gradient overlay for better badge visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/5 to-transparent" />

        {/* Verified badge */}
        <div className="absolute top-2.5 right-2.5 md:top-3.5 md:right-3.5 bg-white rounded-full px-2.5 py-1 md:px-3 md:py-1 flex items-center gap-1 md:gap-1.5 text-xs md:text-[13px] font-semibold text-gray-900 shadow-md">
          <FaCheckCircle className="text-green-500 text-xs md:text-sm" />
          Verified
        </div>

        {/* Logo notch */}
        <div className="absolute -bottom-6 md:-bottom-8 left-4 md:left-5 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center text-xl md:text-2xl transition-transform duration-300 group-hover:scale-110">
          <img
            src={logoIcon}
            alt={`${name} logo`}
            className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-xl md:rounded-2xl"
          />
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="pt-8 md:pt-12 px-4 md:px-5 pb-4 md:pb-5 flex flex-col flex-1">

        {/* Name & category */}
        <div className="mb-2 md:mb-2.5">
          <h3 className="text-base md:text-[17px] font-bold text-gray-900 leading-snug m-0 line-clamp-1">
            {name}
          </h3>
          <p className="text-xs md:text-[13px] text-gray-500 mt-0.5 line-clamp-1">
            {category}
          </p>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
          <Stars rating={rating} />
          <span className="font-bold text-xs md:text-sm text-gray-900">
            {rating.toFixed(1)}
          </span>
          <span className="text-xs md:text-[13px] text-gray-400">
            ({reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Stats row */}
        <div className="flex gap-2 md:gap-3 mb-4 md:mb-5">
          <StatChip
            icon={<FaBoxOpen className="text-orange-500 text-sm md:text-base" />}
            value={fmt(products)}
            label="Products"
            bgClass="bg-orange-50"
          />
          <StatChip
            icon={<FaUsers className="text-indigo-500 text-sm md:text-base" />}
            value={fmt(customers)}
            label="Customers"
            bgClass="bg-indigo-50"
          />
        </div>

        {/* Visit Store CTA */}
        <button className="mt-auto w-full py-2.5 md:py-3 rounded-xl bg-orange-50 text-orange-500 font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:bg-orange-500 hover:text-white cursor-pointer border-0 group/btn">
          Visit Store 
          <FaArrowRight className="text-xs md:text-[13px] group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>

      </div>
    </div>
  );
}

/* ── Stat chip ──────────────────────────────────────────────────────────────── */
function StatChip({ icon, value, label, bgClass }) {
  return (
    <div className="flex-1 bg-gray-50 rounded-lg md:rounded-xl p-2 md:p-2.5 flex items-center gap-2 md:gap-2.5">
      <div className={`w-7 h-7 md:w-9 md:h-9 rounded-lg md:rounded-[10px] ${bgClass} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-bold text-sm md:text-[15px] text-gray-900 leading-tight truncate">
          {value}
        </div>
        <div className="text-[10px] md:text-[11px] text-gray-400 truncate">
          {label}
        </div>
      </div>
    </div>
  );
}