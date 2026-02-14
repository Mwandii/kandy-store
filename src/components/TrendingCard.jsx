import { FaHeart, FaRegHeart, FaStar, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

/* ── Star renderer ─────────────────────────────────────────────────────────── */
function Stars({ rating, reviewCount }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs ${
              i < fullStars
                ? "text-amber-400"
                : i === fullStars && hasHalfStar
                ? "text-amber-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-900">{rating}</span>
      <span className="text-xs text-gray-400">({reviewCount})</span>
    </div>
  );
}

/* ── ProductCard ────────────────────────────────────────────────────────────── */
export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const {
    image,
    name,
    brand,
    rating,
    reviewCount,
    price,
    originalPrice,
    badges = [],
  } = product;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">
      
      {/* ── Image Container ── */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* Wishlist heart */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
          aria-label="Add to wishlist"
        >
          {isWishlisted ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-gray-400 text-lg" />
          )}
        </button>
      </div>

      {/* ── Card Body ── */}
      <div className="p-4 flex flex-col flex-1">
        
        {/* Brand */}
        <p className="text-xs text-gray-500 mb-1">{brand}</p>

        {/* Product name */}
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug">
          {name}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          <Stars rating={rating} reviewCount={reviewCount} />
        </div>

        {/* Price row */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
          )}
        </div>

        {/* Add to Cart button */}
        <button className="mt-auto w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200">
          <FaShoppingCart className="text-sm" />
          Add to Cart
        </button>

      </div>
    </div>
  );
}