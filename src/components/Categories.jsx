import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { categoriesMock } from "../data/data";
import CategoriesCard from "./CategoriesCard";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  const scrollRef = useRef(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // ── Load data ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      await new Promise((r) => setTimeout(r, 400));
      setCategories(categoriesMock);
      setLoading(false);
    };
    load();
  }, []);

  // ── Responsive visible count ──────────────────────────────────────────────────
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ── Get card width based on viewport ─────────────────────────────────────────
  const getCardWidth = () => {
    const el = scrollRef.current;
    if (!el) return 0;
    return el.firstChild?.offsetWidth || 0;
  };

  // ── Sync active dot with scroll position ─────────────────────────────────────
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardW = getCardWidth();
    if (!cardW) return;
    const idx = Math.round(el.scrollLeft / (cardW + 16));
    setActiveIndex(Math.min(Math.max(idx, 0), categories.length - 1));
  };

  // ── Scroll to specific card index ─────────────────────────────────────────────
  const scrollToIndex = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, categories.length - 1));
    const cardW = getCardWidth();
    el.scrollTo({ left: clamped * (cardW + 16), behavior: "smooth" });
    setActiveIndex(clamped);
  };

  const scrollLeft = () => scrollToIndex(activeIndex - 1);
  const scrollRight = () => scrollToIndex(activeIndex + 1);

  // ── Touch swipe ───────────────────────────────────────────────────────────────
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    if (!touchStartX.current) return;
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > dy && dx > 8) e.preventDefault();
  };

  const onTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) dx > 0 ? scrollRight() : scrollLeft();
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ── Skeleton ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="h-4 w-32 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-64 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-4 w-80 bg-gray-200 rounded-full mx-auto animate-pulse" />
        </div>
        <div className="flex gap-4 overflow-hidden justify-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-48 h-64 bg-gray-100 rounded-2xl animate-pulse shrink-0" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-linear-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* ── Heading ── */}
        <div className="flex flex-col gap-3 md:gap-4 items-center text-center mb-10 md:mb-12">
          <p className="text-orange-500 text-xs md:text-sm uppercase font-semibold tracking-wider">
            Explore Collection
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Shop By{" "}
            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Discover premium baby products curated by category for your convenience
          </p>
        </div>

        {/* ── Carousel ── */}
        <div className="relative">

          {/* Left Arrow — desktop only */}
          <button
            onClick={scrollLeft}
            disabled={activeIndex === 0}
            aria-label="Previous"
            className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-orange-500 items-center justify-center bg-white shadow-lg text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-orange-500"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="flex gap-1 py-5 overflow-x-auto scroll-smooth scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" }}
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="shrink-0"
                style={{
                  // Show exactly visibleCount cards with gaps accounted for
                  // gap is 16px, so total gap = 16 * (visibleCount - 1)
                  // each card = (100% - totalGap) / visibleCount
                  width: `calc((100% - ${16 * (visibleCount - 1)}px) / ${visibleCount})`,
                  scrollSnapAlign: "start",
                }}
              >
                <CategoriesCard {...cat} />
              </div>
            ))}
          </div>

          {/* Right Arrow — desktop only */}
          <button
            onClick={scrollRight}
            disabled={activeIndex >= categories.length - 1}
            aria-label="Next"
            className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-orange-500 items-center justify-center bg-white shadow-lg text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:text-orange-500"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>
        </div>

        {/* ── Dot Indicators ── */}
        {categories.length > 1 && (
          <div className="flex justify-center gap-2 mt-5 mb-2">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-orange-500" : "w-2 bg-orange-200 hover:bg-orange-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* ── Mobile arrows ── */}
        <div className="flex sm:hidden justify-center gap-4 mt-5">
          <button
            onClick={scrollLeft}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white shadow-md text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={scrollRight}
            disabled={activeIndex >= categories.length - 1}
            className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center bg-white shadow-md text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* ── Browse All CTA ── */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/categories")}
            className="group flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 shadow-lg hover:shadow-xl text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300 hover:scale-105 font-semibold text-sm md:text-base"
          >
            Browse All Categories
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default CategoriesSection;