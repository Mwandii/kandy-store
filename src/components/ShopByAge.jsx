import { useState, useEffect } from "react";
import AgeGroupCard from "./AgeGroupCard";
import { ageGroupsMock } from "../data/data";

function ShopByAge() {
  const [ageGroups, setAgeGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        // Simulate API delay — swap for real API when ready:
        // const data = await fetch("/api/age-groups").then(r => r.json());
        await new Promise((r) => setTimeout(r, 600));
        if (isMounted) setAgeGroups(ageGroupsMock);
      } catch (err) {
        console.error("Failed to load age groups:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-orange-50/30 to-white py-10 md:py-16 px-4 sm:px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-8 md:mb-12">
          
          {/* Age-appropriate badge */}
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-orange-500 font-bold text-[10px] md:text-xs uppercase tracking-widest">
              Age-Appropriate Selection
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Shop by{" "}
            <span className="text-orange-500">Age Group</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
            Find perfectly curated products for every stage of your baby's growth
          </p>
        </div>

        {/* ── Loading Skeleton ── */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="h-48 sm:h-56 md:h-64 bg-gray-200" />
                <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                  <div className="h-5 md:h-6 bg-gray-200 rounded w-2/3 mx-auto" />
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-1/2 mx-auto" />
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-1/3 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Age Groups Grid ── */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ageGroups.map((group, i) => (
              <div
                key={group.id}
                className="opacity-0 animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <AgeGroupCard ageGroup={group} />
              </div>
            ))}
          </div>
        )}

        {/* ── Keyframes ── */}
        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

      </div>
    </section>
  );
}

export default ShopByAge;