import { useEffect, useState, useRef, useCallback } from "react";
import fetchCategories from "../api/api";
import CategoriesCard from "./CategoriesCard";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TRANSITION_MS = 480;

function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── Responsive visible count ────────────────────────────────────────────────
  const [visibleCount, setVisibleCount] = useState(4);
  
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);       // mobile
      else if (window.innerWidth < 768) setVisibleCount(2);  // tablet
      else if (window.innerWidth < 1024) setVisibleCount(3); // small desktop
      else setVisibleCount(4);                                // large desktop
    };
    
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const CARD_GAP = 16;

  // ── carousel refs ────────────────────────────────────────────────────────────
  const trackRef = useRef(null);
  const isTransitioning = useRef(false);
  const logicalIndex = useRef(0);

  useEffect(() => {
    let isMounted = true;
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        if (isMounted) setCategories(data);
      } catch (err) {
        if (isMounted) setError("Failed to load categories.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  // ── build render list ────────────────────────────────────────────────────────
  const buildRenderList = useCallback((data, idx, count) => {
    if (!data.length) return [];
    const len = data.length;
    const items = [];
    for (let i = -1; i <= count; i++) {
      const realIdx = (((idx + i) % len) + len) % len;
      items.push({ ...data[realIdx], _slot: i + 1 });
    }
    return items;
  }, []);

  const [renderList, setRenderList] = useState([]);
  const [dotIndex, setDotIndex] = useState(0);

  // ── initialise render list ───────────────────────────────────────────────────
  useEffect(() => {
    if (!categories.length) return;
    setRenderList(buildRenderList(categories, logicalIndex.current, visibleCount));
  }, [categories, buildRenderList, visibleCount]);

  // ── reset track position ─────────────────────────────────────────────────────
  const resetTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = (track.offsetWidth - CARD_GAP * (visibleCount - 1)) / visibleCount;
    const slotW = cardW + CARD_GAP;
    track.style.transition = "none";
    track.style.transform = `translateX(-${slotW}px)`;
  }, [visibleCount]);

  useEffect(() => {
    if (!renderList.length) return;
    requestAnimationFrame(resetTrack);
  }, [renderList, resetTrack]);

  // ── scroll ───────────────────────────────────────────────────────────────────
  const scroll = useCallback(
    (dir) => {
      if (isTransitioning.current || !categories.length) return;
      isTransitioning.current = true;

      const track = trackRef.current;
      if (!track) {
        isTransitioning.current = false;
        return;
      }

      const cardW = (track.offsetWidth - CARD_GAP * (visibleCount - 1)) / visibleCount;
      const slotW = cardW + CARD_GAP;
      const target = dir === "right" ? slotW * 2 : 0;

      track.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.65,0,0.35,1)`;
      track.style.transform = `translateX(-${target}px)`;

      setTimeout(() => {
        logicalIndex.current += dir === "right" ? 1 : -1;

        const len = categories.length;
        const wrapped = ((logicalIndex.current % len) + len) % len;
        setDotIndex(wrapped);
        setRenderList(buildRenderList(categories, logicalIndex.current, visibleCount));
        isTransitioning.current = false;
      }, TRANSITION_MS + 10);
    },
    [categories, buildRenderList, visibleCount]
  );

  // ── card style ───────────────────────────────────────────────────────────────
  const cardStyle = {
    flex: `0 0 calc(${100 / visibleCount}% - ${(CARD_GAP * (visibleCount - 1)) / visibleCount}px)`,
  };

  if (loading) {
    return (
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-pulse">
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto mb-4" />
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4" />
          <div className="h-4 w-96 bg-gray-200 rounded mx-auto" />
        </div>
        <div className="flex justify-center gap-4 overflow-hidden">
          {[...Array(visibleCount)].map((_, i) => (
            <div key={i} className="w-48 h-64 bg-gray-100 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-linear-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ── Heading Section ── */}
        <div className="flex flex-col gap-3 md:gap-4 items-center text-center mb-10 md:mb-12 animate-fadeIn">
          <p className="text-orange-500 text-xs md:text-sm uppercase font-semibold tracking-wider">
            Explore Collection
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 px-4">
            Shop By{" "}
            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl px-4">
            Discover premium baby products curated by category for your convenience
          </p>
        </div>

        {/* ── Carousel Container ── */}
        <div className="relative">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            
            {/* Left Arrow - Hidden on mobile for cleaner UX */}
            <div className="hidden sm:block">
              <ArrowBtn dir="left" onClick={() => scroll("left")} />
            </div>

            {/* Viewport */}
            <div className="flex-1 overflow-hidden relative max-w-6xl">
              {/* Sliding track */}
              <div
                ref={trackRef}
                className="flex"
                style={{
                  gap: `${CARD_GAP}px`,
                  willChange: "transform",
                  padding: "20px 0",
                }}
              >
                {renderList.map((cat, i) => {
                  const isClone = i === 0 || i === renderList.length - 1;
                  return (
                    <div
                      key={`${cat.id ?? "c"}-${i}`}
                      style={{
                        ...cardStyle,
                        opacity: isClone ? 0.35 : 1,
                        transform: isClone ? "scale(0.92)" : "scale(1)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        pointerEvents: isClone ? "none" : "auto",
                      }}
                    >
                      <CategoriesCard {...cat} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Arrow - Hidden on mobile */}
            <div className="hidden sm:block">
              <ArrowBtn dir="right" onClick={() => scroll("right")} />
            </div>
          </div>

          {/* Mobile: Arrows at bottom */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <ArrowBtn dir="left" onClick={() => scroll("left")} />
            <ArrowBtn dir="right" onClick={() => scroll("right")} />
          </div>
        </div>

        {/* Dot indicators */}
        {categories.length > 1 && (
          <div className="flex justify-center gap-2 mt-8 mb-6">
            {categories.map((_, i) => (
              <span
                key={i}
                className={`inline-block h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === dotIndex
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-orange-200 hover:bg-orange-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* Browse All CTA */}
        <div className="flex justify-center mt-8">
          <button className="group flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300 hover:scale-105 font-semibold text-sm md:text-base">
            Browse All Categories
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

/* ── Arrow Button ────────────────────────────────────────────────────────────── */
function ArrowBtn({ dir, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className={`
        shrink-0 w-10 h-10 md:w-12 md:h-12
        rounded-full border-2 border-orange-500
        flex items-center justify-center
        transition-all duration-200
        ${hovered 
          ? "bg-orange-500 text-white shadow-lg scale-110" 
          : "bg-orange-50 text-orange-500 shadow-md"
        }
      `}
    >
      {dir === "left" ? (
        <FaChevronLeft className="text-sm md:text-base" />
      ) : (
        <FaChevronRight className="text-sm md:text-base" />
      )}
    </button>
  );
}

export default CategoriesSection;