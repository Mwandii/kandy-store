import { FaHeart, FaRegHeart, FaStar, FaShoppingCart, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

/* ── Star renderer ─────────────────────────────────────────────────────────── */
function Stars({ rating, reviewCount }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1 md:gap-1.5">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-[10px] md:text-xs ${
              i < fullStars
                ? "text-amber-400"
                : i === fullStars && hasHalfStar
                ? "text-amber-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-xs md:text-sm font-semibold text-gray-900">{rating}</span>
      <span className="text-[10px] md:text-xs text-gray-400">({reviewCount})</span>
    </div>
  );
}

/* ── ProductCard ────────────────────────────────────────────────────────────── */
export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  
  // Get addToCart action from Zustand store
  const addToCart = useCartStore((state) => state.addToCart);

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

  const handleAddToCart = () => {
    addToCart(product);
    
    // Show "Added!" feedback
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">
      
      {/* ── Image Container ── */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3 flex flex-col gap-1.5 md:gap-2">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-md"
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* Wishlist heart */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
          aria-label="Add to wishlist"
        >
          {isWishlisted ? (
            <FaHeart className="text-red-500 text-sm md:text-lg" />
          ) : (
            <FaRegHeart className="text-gray-400 text-sm md:text-lg" />
          )}
        </button>
      </div>

      {/* ── Card Body ── */}
      <div className="p-3 md:p-4 flex flex-col flex-1">
        
        {/* Brand */}
        <p className="text-[10px] md:text-xs text-gray-500 mb-1 truncate">{brand}</p>

        {/* Product name */}
        <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug min-h-10 md:min-h-12">
          {name}
        </h3>

        {/* Rating */}
        <div className="mb-2 md:mb-3">
          <Stars rating={rating} reviewCount={reviewCount} />
        </div>

        {/* Price row */}
        <div className="flex items-baseline gap-1.5 md:gap-2 mb-3 md:mb-4">
          <span className="text-lg md:text-2xl font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-xs md:text-sm text-gray-400 line-through">${originalPrice}</span>
          )}
        </div>

        {/* Add to Cart button */}
        <button 
          onClick={handleAddToCart}
          disabled={justAdded}
          className={`mt-auto w-full py-2 md:py-3 rounded-lg md:rounded-xl flex items-center justify-center gap-1.5 md:gap-2 transition-all duration-200 text-xs md:text-sm font-bold ${
            justAdded
              ? "bg-green-500 text-white"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          {justAdded ? (
            <>
              <FaCheck className="text-xs md:text-sm" />
              Added!
            </>
          ) : (
            <>
              <FaShoppingCart className="text-xs md:text-sm group-hover:scale-110 transition-transform duration-200" />
              Add to Cart
            </>
          )}
        </button>

      </div>
    </div>
  );
}