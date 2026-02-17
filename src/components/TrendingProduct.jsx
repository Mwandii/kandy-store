import { useState, useEffect } from "react";
import { FaArrowRight, FaFire } from "react-icons/fa";
import ProductCard from "./TrendingCard";
import { trendingProductsMock } from "../data/data";
import { Link } from "react-router-dom";

// Simulate API fetch with delay
const fetchTrendingProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(trendingProductsMock);
    }, 800);
  });
};

function TrendingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const data = await fetchTrendingProducts();
        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-5 py-8 md:py-12">
      
      {/* ── Section Header ── */}
      <div className="mb-8 md:mb-10">
        {/* Hot Deals badge */}
        <div className="flex items-center gap-2 mb-2 md:mb-3">
          <FaFire className="text-orange-500 text-lg md:text-xl animate-pulse" />
          <span className="text-orange-500 font-bold text-xs md:text-sm uppercase tracking-wide">
            Hot Deals
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
          Trending{" "}
          <span className="text-red-600">Products</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base">
          Most loved products by parents this month
        </p>
      </div>

      {/* ── Loading Skeleton ── */}
      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden animate-pulse"
            >
              <div className="aspect-square bg-gray-200" />
              <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                <div className="h-2 md:h-3 bg-gray-200 rounded w-1/3" />
                <div className="h-3 md:h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-2 md:h-3 bg-gray-200 rounded w-1/2" />
                <div className="h-4 md:h-6 bg-gray-200 rounded w-1/3" />
                <div className="h-8 md:h-10 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Products Grid ── */}
      {!loading && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="opacity-0 animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="flex justify-center pt-8 md:pt-10">
            <Link to="/categories">
            <button className="group flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3 md:py-4 shadow-lg hover:shadow-xl font-semibold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-sm md:text-base">
              View all products
              <FaArrowRight className="text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            </Link>
          </div>
        </>
      )}

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </section>
  );
}

export default TrendingProducts;