import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaThLarge } from "react-icons/fa";
import CategoryCard from "../components/CategoryCard";
import { categoriesMock } from "../data/data";

function AllCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Simulate API fetch
    const fetchCategories = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        setCategories(categoriesMock);
      } catch (err) {
        console.error("Failed to load categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white pt-8 md:pt-18">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 mb-8 md:mb-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 md:mb-6">
          <Link to="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">All Categories</span>
        </div>

        {/* Page Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaThLarge className="text-white text-xl md:text-2xl" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                All Categories
              </h1>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Browse through our complete collection of baby product categories
            </p>
          </div>

          {/* Category count */}
          <div className="bg-white rounded-2xl shadow-md px-6 py-4 border-2 border-orange-100 self-start md:self-auto">
            <p className="text-xs md:text-sm text-gray-500">Total Categories</p>
            <p className="text-2xl md:text-3xl font-bold text-orange-600">
              {loading ? "..." : categories.length}
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 pb-12 md:pb-16">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse"
              >
                <div className="h-44 md:h-48 bg-gray-200" />
                <div className="p-4 md:p-5 space-y-3">
                  <div className="h-5 md:h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-full" />
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, i) => (
              <div
                key={category.id}
                className="opacity-0 animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <CategoryCard category={category} />
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

export default AllCategoriesPage;