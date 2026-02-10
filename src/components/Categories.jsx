import { useEffect, useState, useRef, useCallback } from "react";
import fetchCategories from "../api/api";
import CategoriesCard from "./CategoriesCard";
import { FaArrowRight } from "react-icons/fa";

const VISIBLE_COUNT = 4;
const CARD_GAP = 16;
const TRANSITION_MS = 480;

function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ── carousel refs ────────────────────────────────────────────────────────────
  const trackRef = useRef(null);
  const isTransitioning = useRef(false);
  const logicalIndex = useRef(0); // can go negative or beyond length — wraps mod len

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
  });

  // ── build a render list: 1 hidden clone left + VISIBLE_COUNT real + 1 hidden clone right ──
  const buildRenderList = useCallback((data, idx) => {
    if (!data.length) return [];
    const len = data.length;
    const items = [];
    for (let i = -1; i <= VISIBLE_COUNT; i++) {
      const realIdx = (((idx + i) % len) + len) % len;
      items.push({ ...data[realIdx], _slot: i + 1 });
    }
    return items;
  }, []);

  const [renderList, setRenderList] = useState([]);
  // Dot indicator needs a reactive logical index snapshot
  const [dotIndex, setDotIndex] = useState(0);

  // ── initialise render list once categories arrive ──────────────────────────
  useEffect(() => {
    if (!categories.length) return;
    setRenderList(buildRenderList(categories, logicalIndex.current));
  }, [categories, buildRenderList]);

  // ── after every render-list rebuild, silently reset track to neutral ────────
  const resetTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardW =
      (track.offsetWidth - CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;
    const slotW = cardW + CARD_GAP;
    track.style.transition = "none";
    track.style.transform = `translateX(-${slotW}px)`;
  }, []);

  useEffect(() => {
    if (!renderList.length) return;
    requestAnimationFrame(resetTrack);
  }, [renderList, resetTrack]);

  // ── scroll ──────────────────────────────────────────────────────────────────
  const scroll = useCallback(
    (dir) => {
      if (isTransitioning.current || !categories.length) return;
      isTransitioning.current = true;

      const track = trackRef.current;
      if (!track) {
        isTransitioning.current = false;
        return;
      }

      const cardW =
        (track.offsetWidth - CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;
      const slotW = cardW + CARD_GAP;
      const target = dir === "right" ? slotW * 2 : 0;

      track.style.transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.65,0,0.35,1)`;
      track.style.transform = `translateX(-${target}px)`;

      setTimeout(() => {
        logicalIndex.current += dir === "right" ? 1 : -1;

        const len = categories.length;
        const wrapped = ((logicalIndex.current % len) + len) % len;
        setDotIndex(wrapped);
        setRenderList(buildRenderList(categories, logicalIndex.current));
        isTransitioning.current = false;
      }, TRANSITION_MS + 10);
    },
    [categories, buildRenderList]
  );

  // ── shared card width style ──────────────────────────────────────────────────
  const cardStyle = {
    flex: `0 0 calc(${100 / VISIBLE_COUNT}% - ${
      (CARD_GAP * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT
    }px)`,
  };

  return (
    <>
      {/* ── Heading Section ── */}
      <section className="my-6 py-6">
        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-orange-500 text-sm uppercase">
            Explore Collection
          </p>
          <h1 className="text-5xl font-bold text-gray-900">
            Shop By{" "}
            <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Category
            </span>
          </h1>
          <p className="text-gray-500">
            Discover premium baby products curated by category for your
            convinience
          </p>
        </div>
      </section>

      {/* ── Carousel ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          padding: "0 0px",
          width: "100%",
          maxWidth: "1152px",
          gap: "12px",
        }}
      >
        {/* Left Arrow */}
        <ArrowBtn dir="left" onClick={() => scroll("left")} />

        {/* Viewport — clips the sliding track */}
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
            padding: "20x 40px",
            margin: "10px 0",
          }}
        >
          {/* Sliding track */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              willChange: "transform",
              padding: "0 20px"
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
                    transform: isClone ? "scale(0.9)" : "scale(1)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: isClone ? "none" : "auto",
                  }}
                >
                  <CategoriesCard key={cat.id} {...cat}/>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <ArrowBtn dir="right" onClick={() => scroll("right")} />
      </div>

      {/* Dot indicators */}
      {categories.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          {categories.map((_, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                width: i === dotIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: i === dotIndex ? "#f97316" : "#fed7aa",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
      <div className="flex items-center justify-center p-6">
        <button className="flex items-center gap-3 px-6 py-4 shadow-lg text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full m-4 hover:cursor-pointer">
              Browse All Categories<FaArrowRight/>
            </button>
        </div>
    </>
  );
}

/* ── Arrow button ─────────────────────────────────────────────────────────────── */
function ArrowBtn({ dir, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={dir === "left" ? "Previous" : "Next"}
      style={{
        flexShrink: 0,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: "2px solid #f97316",
        background: hovered ? "#f97316" : "#fff7ed",
        color: hovered ? "#fff" : "#f97316",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 4px 18px rgba(249,115,22,0.35)"
          : "0 2px 10px rgba(249,115,22,0.15)",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        transition: "all 0.2s ease",
        outline: "none",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {dir === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
}

export default CategoriesSection;
