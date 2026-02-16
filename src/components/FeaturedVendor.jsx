import { useEffect, useState } from "react";
import { FaArrowRight, FaMedal } from "react-icons/fa";
import { mockVendors } from "../data/data";
import VendorCard from "./FeaturedCard";
import { Link } from "react-router-dom";

function FeaturedVendors() {
  const [topVendors, setTopVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadVendors = async () => {
      try {
        const data = mockVendors;
        if (isMounted) {
          await new Promise((r) => setTimeout(r, 1500));
          const top4 = [...data].sort((a, b) => b.rating - a.rating).slice(0, 4);
          setTopVendors(top4);
        }
      } catch (err) {
        if (isMounted) setError("Failed to load vendors.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadVendors();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-5 mt-8 md:mt-12 py-6 md:py-10">
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-6 mb-8 md:mb-12">
        {/* Left: Heading */}
        <div className="flex flex-col gap-2 md:gap-3">
          {/* Top-rated pill */}
          <div className="inline-flex self-start items-center gap-1.5 bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-orange-200">
            <FaMedal className="text-xs md:text-[13px]" />
            Top Rated
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 m-0 leading-tight">
            Featured{" "}
            <span className="bg-linear-to-br from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Vendors
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm md:text-[15px] max-w-md m-0">
            Handpicked stores with the highest customer ratings — trusted by thousands of happy
            parents.
          </p>
        </div>

        {/* Right: View All button (desktop) */}
        <Link to="/vendors">
        <button className="hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm transition-all duration-200 group whitespace-nowrap">
          View All Vendors
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
        </button>
        </Link>
      </div>

      {/* ── Skeleton Loading ── */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-80 md:h-96 rounded-2xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      )}

      {/* ── Error state ── */}
      {error && <p className="text-center text-red-500 font-semibold">{error}</p>}

      {/* ── Cards Grid ── */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {topVendors.map((vendor, i) => (
              <div
                key={vendor.id ?? i}
                className="opacity-0 animate-[fadeSlideUp_0.55s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <VendorCard vendor={vendor} />
              </div>
            ))}
          </div>

          {/* View All button (mobile - below cards) */}
          <button className="md:hidden mt-6 w-full sm:w-auto sm:mx-auto flex items-center justify-center gap-2 text-orange-500 hover:text-orange-600 font-semibold text-sm bg-orange-50 hover:bg-orange-100 px-6 py-3 rounded-full transition-all duration-200 group">
            View All Vendors
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </>
      )}

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default FeaturedVendors;