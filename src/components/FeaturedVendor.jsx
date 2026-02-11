import { useEffect, useState } from "react";
import { FaArrowRight, FaMedal } from "react-icons/fa";
import { mockVendors } from "../data/data";
import VendorCard from "./FeaturedCard";

function FeaturedVendors() {
  const [topVendors, setTopVendors] = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadVendors = async () => {
      try {
        const data = mockVendors;
        if (isMounted) {
          await new Promise(r => setTimeout(r, 1500));
          const top4 = [...data]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 4);
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
    <section className="w-full max-w-6xl mx-auto px-5 mt-12 py-10 pb-16">

      {/* ── Section Heading ── */}
      <div className="flex justify-between items-center">
      <div className="flex flex-col gap-3 mb-12">

        {/* Top-rated pill */}
        <div className="inline-flex self-start items-center gap-1.5 bg-orange-50 text-orange-500 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-orange-200 mb-6">
          <FaMedal className="text-[13px]" />
          Top Rated
        </div>

        {/* Title */}
        <h2 className="text-5xl font-bold text-gray-900 m-0 leading-tight">
          Featured{" "}
          <span className="bg-linear-to-br from-amber-600 to-orange-500 bg-clip-text text-transparent">
            Vendors
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-[15px] max-w-md m-0">
          Handpicked stores with the highest customer ratings — trusted by thousands of happy parents.
        </p>
      </div>
      <div>
        <button className="flex gap-4 items-center text-orange-500 font-semibold">View All Vendors<FaArrowRight/></button>
      </div>
      </div>

      {/* ── Skeleton Loading ── */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-96 rounded-2xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* ── Error state ── */}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}

      {/* ── Cards Grid ── */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topVendors.map((vendor, i) => (
            <div
              key={vendor.id ?? i}
              className="opacity-0 animate-[fadeSlideUp_0.55s_cubic-bezier(0.22,1,0.36,1)_forwards]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <VendorCard vendor={vendor}/>
            </div> 
          ))}
        </div>
      )}

      {/* ── Keyframes (only fadeSlideUp — not available in Tailwind base) ── */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </section>
  );
}

export default FeaturedVendors;