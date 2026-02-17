import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStore, FaSearch, FaSortAmountDown, FaFilter } from "react-icons/fa";
import VendorCard from "../components/FeaturedCard";
import { allVendorsMock } from "../data/data";

function AllVendorsPage() {
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Simulate API fetch
    const fetchVendors = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setVendors(allVendorsMock);
        setFilteredVendors(allVendorsMock);
      } catch (err) {
        console.error("Failed to load vendors:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  // Get unique categories
  const categories = ["all", ...new Set(vendors.map((v) => v.category))];

  // Filter and sort vendors
  useEffect(() => {
    let result = [...vendors];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (vendor) =>
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((vendor) => vendor.category === selectedCategory);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "products") return b.products - a.products;
      if (sortBy === "customers") return b.customers - a.customers;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    setFilteredVendors(result);
  }, [searchQuery, selectedCategory, sortBy, vendors]);

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white pt-32 md:pt-18 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">All Vendors</span>
          </div>

          {/* Title & Description */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaStore className="text-white text-xl md:text-2xl" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  All Vendors
                </h1>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                Discover trusted sellers offering quality baby products
              </p>
            </div>

            {/* Vendor count */}
            <div className="bg-white rounded-2xl shadow-md px-6 py-4 border-2 border-orange-100 self-start md:self-auto">
              <p className="text-xs md:text-sm text-gray-500">Total Vendors</p>
              <p className="text-2xl md:text-3xl font-bold text-orange-600">
                {loading ? "..." : filteredVendors.length}
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
              placeholder="Search vendors by name, category, or description..."
              className="w-full bg-white pl-12 md:pl-14 pr-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-orange-400 transition-all outline-none shadow-sm focus:shadow-md text-sm md:text-base"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2 md:gap-3 flex-1">
            <FaFilter className="text-gray-400 text-sm md:text-base shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-orange-400 focus:outline-none transition-colors cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 md:gap-3 flex-1">
            <FaSortAmountDown className="text-gray-400 text-sm md:text-base shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-gray-700 focus:border-orange-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="rating">Highest Rated</option>
              <option value="products">Most Products</option>
              <option value="customers">Most Customers</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Vendors Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse"
              >
                <div className="h-40 md:h-48 bg-gray-200" />
                <div className="p-4 md:p-5 space-y-3">
                  <div className="h-5 md:h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-full" />
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-10 md:h-12 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredVendors.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl md:text-6xl mb-4">🏪</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No vendors found</h3>
            <p className="text-sm md:text-base text-gray-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSortBy("rating");
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredVendors.map((vendor, i) => (
              <div
                key={vendor.id}
                className="opacity-0 animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <VendorCard vendor={vendor} />
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

export default AllVendorsPage;