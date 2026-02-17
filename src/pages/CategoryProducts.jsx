import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaFilter, FaSortAmountDown } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { categoriesMock, productsByCategoryMock } from "../data/data";

function CategoryProductsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Simulate API fetch
    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Find category by slug
        const foundCategory = categoriesMock.find((cat) => cat.slug === slug);
        
        if (!foundCategory) {
          navigate("/categories");
          return;
        }

        setCategory(foundCategory);

        // Get products for this category
        const categoryProducts = productsByCategoryMock[foundCategory.id] || [];
        setProducts(categoryProducts);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [slug, navigate]);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (priceRange === "all") return true;
      if (priceRange === "under-20") return product.price < 20;
      if (priceRange === "20-50") return product.price >= 20 && product.price <= 50;
      if (priceRange === "over-50") return product.price > 50;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // featured (default order)
    });

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (!category) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-18">
      {/* Header */}
      <div className="bg-linear-to-b from-orange-50/50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6 md:py-10">
          {/* Breadcrumb & Back button */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3">
              <Link to="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/categories" className="hover:text-orange-600 transition-colors">
                Categories
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">{category.name}</span>
            </div>

            <button
              onClick={() => navigate("/categories")}
              className="flex items-center gap-2 text-sm md:text-base text-gray-600 hover:text-orange-600 font-semibold transition-colors group"
            >
              <FaArrowLeft className="text-xs md:text-sm group-hover:-translate-x-1 transition-transform duration-200" />
              Back to All Categories
            </button>
          </div>

          {/* Category Info */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* Icon */}
            <div
              className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-linear-to-br ${category.color} flex items-center justify-center text-4xl md:text-6xl shadow-lg shrink-0`}
            >
              {category.icon}
            </div>

            {/* Text */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {category.name}
              </h1>
              <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-3">
                {category.description}
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                <span className="font-semibold text-orange-600">{filteredProducts.length}</span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"} available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6 md:py-10">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 md:gap-4 mb-6 md:mb-8">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 md:gap-3">
            <FaSortAmountDown className="text-gray-400 text-sm md:text-base shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 sm:flex-none bg-white border-2 border-gray-200 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-gray-700 focus:border-orange-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Price Filter */}
          <div className="flex items-center gap-2 md:gap-3">
            <FaFilter className="text-gray-400 text-sm md:text-base shrink-0" />
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="flex-1 sm:flex-none bg-white border-2 border-gray-200 rounded-lg px-3 md:px-4 py-2 text-xs md:text-sm font-semibold text-gray-700 focus:border-orange-400 focus:outline-none transition-colors cursor-pointer"
            >
              <option value="all">All Prices</option>
              <option value="under-20">Under $20</option>
              <option value="20-50">$20 - $50</option>
              <option value="over-50">Over $50</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 md:py-16">
            <div className="text-5xl md:text-6xl mb-4">📦</div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-sm md:text-base text-gray-500 mb-6">Try adjusting your filters</p>
            <button
              onClick={() => {
                setSortBy("featured");
                setPriceRange("all");
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

/* ── Loading Skeleton ────────────────────────────────────────────────────── */
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-28">
      <div className="bg-linear-to-b from-orange-50/50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6 md:py-10">
          <div className="h-4 md:h-6 w-48 bg-gray-200 rounded mb-4 md:mb-6 animate-pulse" />
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-200 rounded-2xl animate-pulse shrink-0" />
            <div className="flex-1 space-y-2 md:space-y-3">
              <div className="h-8 md:h-10 bg-gray-200 rounded w-1/2 animate-pulse" />
              <div className="h-3 md:h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-3 md:h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden animate-pulse">
              <div className="aspect-square bg-gray-200" />
              <div className="p-3 md:p-4 space-y-2">
                <div className="h-3 md:h-4 bg-gray-200 rounded" />
                <div className="h-3 md:h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-5 md:h-6 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryProductsPage;