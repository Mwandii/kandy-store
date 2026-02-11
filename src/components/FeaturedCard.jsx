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
          <FaStar key={n} className="text-amber-400 text-[15px]" />
        ) : half ? (
          <FaStarHalfAlt key={n} className="text-amber-400 text-[15px]" />
        ) : (
          <FaRegStar key={n} className="text-gray-300 text-[15px]" />
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
export default function VendorCard({vendor}) {
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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default">

      {/* ── Cover Banner ── */}
      <div
        className="relative h-44 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coverImage})`, backgroundSize: "contain", }}
      >
        {/* Verified badge */}
        <div className="absolute top-3.5 right-3.5 bg-white rounded-full px-3 py-1 flex items-center gap-1.5 text-[13px] font-semibold text-gray-900 shadow-md">
          <FaCheckCircle className="text-green-500 text-sm" />
          Verified
        </div>

        {/* Logo notch */}
        <div className="absolute -bottom-8 left-5 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl">
          <img
    src={logoIcon}
    alt={`${name} logo`}
    className="w-10 h-10 object-contain rounded-2xl"
  />
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="pt-12 px-5 pb-5 flex flex-col flex-1">

        {/* Name & category */}
        <div className="mb-2.5">
          <h3 className="text-[17px] font-bold text-gray-900 leading-snug m-0">{name}</h3>
          <p className="text-[13px] text-gray-500 mt-0.5">{category}</p>
        </div>

        {/* Rating row */}
        <div className="flex items-center gap-2 mb-4">
          <Stars rating={rating} />
          <span className="font-bold text-sm text-gray-900">{rating.toFixed(1)}</span>
          <span className="text-[13px] text-gray-400">({reviewCount.toLocaleString()})</span>
        </div>

        {/* Stats row */}
        <div className="flex gap-3 mb-5">
          <StatChip
            icon={<FaBoxOpen className="text-orange-500 text-base" />}
            value={fmt(products)}
            label="Products"
            bgClass="bg-orange-50"
          />
          <StatChip
            icon={<FaUsers className="text-indigo-500 text-base" />}
            value={fmt(customers)}
            label="Customers"
            bgClass="bg-indigo-50"
          />
        </div>

        {/* Visit Store CTA */}
        <button className="mt-auto w-full py-3 rounded-xl bg-orange-50 text-orange-500 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:bg-orange-500 hover:text-white cursor-pointer border-0">
          Visit Store <FaArrowRight className="text-[13px]" />
        </button>

      </div>
    </div>
  );
}

/* ── Stat chip ──────────────────────────────────────────────────────────────── */
function StatChip({ icon, value, label, bgClass }) {
  return (
    <div className="flex-1 bg-gray-50 rounded-xl p-2.5 flex items-center gap-2.5">
      <div className={`w-9 h-9 rounded-[10px] ${bgClass} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <div className="font-bold text-[15px] text-gray-900 leading-tight">{value}</div>
        <div className="text-[11px] text-gray-400">{label}</div>
      </div>
    </div>
  );
}