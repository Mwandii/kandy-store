import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaFilter, FaSortAmountDown, FaBaby } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { allProductsMock } from "../data/data";
import { ageGroupsMock } from "../data/data";

function ShopByAgePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [ageGroup, setAgeGroup] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ── Fetch age group + products ──────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetch = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        // Real API: GET /api/products?ageGroup=:slug
        await new Promise((r) => setTimeout(r, 700));

        const foundGroup = ageGroupsMock.find((a) => a.slug === slug);
        if (!foundGroup) {
          navigate("/");
          return;
        }

        setAgeGroup(foundGroup);

        // Filter products that include this age group
        const matched = allProductsMock.filter((p) =>
          p.ageGroups?.includes(slug)
        );
        setProducts(matched);
        setFilteredProducts(matched);
      } catch (err) {
        console.error("Failed to load age group products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [slug, navigate]);

  // ── Get unique categories from matched products ─────────────────────────────
  const categories = ["all", ...new Set(products.map((p) => p.category).filter(Boolean))];

  // ── Filter + Sort ───────────────────────────────────────────────────────────
  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (priceRange === "under-20") result = result.filter((p) => p.price < 20);
    else if (priceRange === "20-50") result = result.filter((p) => p.price >= 20 && p.price <= 50);
    else if (priceRange === "50-100") result = result.filter((p) => p.price > 50 && p.price <= 100);
    else if (priceRange === "over-100") result = result.filter((p) => p.price > 100);

    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "popular") result.sort((a, b) => b.reviewCount - a.reviewCount);

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy, products]);

  // ── Skeleton ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white pt-10  pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">
          <div className="animate-pulse mb-10">
            <div className="h-4 w-32 bg-gray-200 rounded mb-4" />
            <div className="h-12 w-64 bg-gray-200 rounded mb-3" />
            <div className="h-4 w-80 bg-gray-200 rounded" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
                <div className="aspect-square bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-8 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!ageGroup) return null;

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white pt-6 md:pt-18 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="hover:text-orange-600 transition-colors cursor-pointer" onClick={() => navigate(-1)}>
            Shop By Age
          </span>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{ageGroup.ageRange}</span>
        </div>

        {/* ── Hero Header ── */}
        <div
          className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-10"
          style={{ background: ageGroup.gradient }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={ageGroup.image}
              alt={ageGroup.ageRange}
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              {/* Back button */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold mb-4 transition-colors group text-sm"
              >
                <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform duration-200" />
                Back
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl md:text-5xl">{ageGroup.icon}</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                  {ageGroup.ageRange}
                </h1>
              </div>
              <p className="text-white/80 text-sm md:text-base mb-1">{ageGroup.subtitle}</p>
              <p className="text-white/70 text-xs md:text-sm">{ageGroup.description}</p>
            </div>

            {/* Product count badge */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30 self-start md:self-auto">
              <p className="text-white/80 text-xs md:text-sm">Products Found</p>
              <p className="text-3xl md:text-4xl font-bold text-white">{filteredProducts.length}</p>
            </div>
          </div>
        </div>

        {/* ── Age Group Quick Nav ── */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {ageGroupsMock.map((group) => (
            <Link
              key={group.id}
              to={`/shop-by-age/${group.slug}`}
              className={`shrink-0 px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                group.slug === slug
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300"
              }`}
            >
              {group.icon} {group.ageRange}
            </Link>
          ))}
        </div>

        {/* ── Filters ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8">
          {/* Category filter */}
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400 text-sm shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-orange-400 focus:outline-none transition-colors cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price filter */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-semibold text-sm shrink-0">$</span>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-orange-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="under-20">Under $20</option>
              <option value="20-50">$20 – $50</option>
              <option value="50-100">$50 – $100</option>
              <option value="over-100">Over $100</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <FaSortAmountDown className="text-gray-400 text-sm shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-orange-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* ── Products Grid ── */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl md:text-6xl mb-4">🔍</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-sm md:text-base text-gray-500 mb-6">
              Try adjusting your filters
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setPriceRange("all");
                setSortBy("featured");
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
            {filteredProducts.map((product, i) => (
              <div
                key={product.id}
                className="opacity-0 animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export default ShopByAgePage;