import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFire, FaSearch, FaSortAmountDown, FaFilter, FaClock } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { newArrivalsMock } from "../data/data";

function NewArrivalsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Simulate API fetch
    const fetchNewArrivals = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setProducts(newArrivalsMock);
        setFilteredProducts(newArrivalsMock);
      } catch (err) {
        console.error("Failed to load new arrivals:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  // Get unique categories
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory);
    }

    // Price filter
    if (priceRange !== "all") {
      if (priceRange === "under-30") result = result.filter((p) => p.price < 30);
      else if (priceRange === "30-100") result = result.filter((p) => p.price >= 30 && p.price <= 100);
      else if (priceRange === "over-100") result = result.filter((p) => p.price > 100);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "newest") return new Date(b.dateAdded) - new Date(a.dateAdded);
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "popular") return b.reviewCount - a.reviewCount;
      return 0;
    });

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, sortBy, priceRange, products]);

  // Calculate days ago for a product
  const getDaysAgo = (dateAdded) => {
    const today = new Date("2026-02-16"); // Current date from system prompt
    const added = new Date(dateAdded);
    const diff = Math.floor((today - added) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";
    return `${diff} days ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/30 to-white pt-32 md:pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">New Arrivals</span>
          </div>

          {/* Title & Badge */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {/* Hot Badge */}
                <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full border-2 border-red-300">
                  <FaFire className="text-lg animate-pulse" />
                  <span className="font-bold text-sm uppercase tracking-wide">Fresh</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  New Arrivals
                </h1>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Discover the latest products added in the last 30 days
              </p>
            </div>

            {/* Product count */}
            <div className="bg-white rounded-2xl shadow-md px-6 py-4 border-2 border-red-100 self-start md:self-auto">
              <p className="text-xs md:text-sm text-gray-500">New Products</p>
              <p className="text-2xl md:text-3xl font-bold text-red-600">
                {loading ? "..." : filteredProducts.length}
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm md:text-base" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search new arrivals by name, brand, or category..."
              className="w-full bg-white pl-12 md:pl-14 pr-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-red-400 transition-all outline-none shadow-sm focus:shadow-md text-sm md:text-base"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2 md:gap-3">
            <FaFilter className="text-gray-400 text-sm md:text-base flex-shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-red-400 focus:outline-none transition-colors cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-gray-400 text-sm md:text-base">$</span>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-red-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="under-30">Under $30</option>
              <option value="30-100">$30 - $100</option>
              <option value="over-100">Over $100</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 md:gap-3 sm:col-span-2">
            <FaSortAmountDown className="text-gray-400 text-sm md:text-base flex-shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-red-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md animate-pulse"
              >
                <div className="aspect-square bg-gray-200" />
                <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-5 md:h-6 bg-gray-200 rounded w-1/3" />
                  <div className="h-8 md:h-10 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl md:text-6xl mb-4">📦</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-sm md:text-base text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
                setSortBy("newest");
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
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
                <div className="relative">
                  {/* Days ago badge */}
                  <div className="absolute -top-2 left-2 z-10 bg-red-500 text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                    <FaClock className="text-[8px] md:text-[10px]" />
                    {getDaysAgo(product.dateAdded)}
                  </div>
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default NewArrivalsPage;