import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Homepage from "./pages/homepage"
import AllCategoriesPage from "./pages/AllCategoriesPage";
import CategoryProductsPage from "./pages/CategoryProducts";
import CartDrawer from "./components/Cartdrawer";
import CartPage from "./pages/CartPage";
import AllVendorsPage from "./pages/AllVendors";

function App() {
  return (
   <>
      <div className="min-h-screen bg-white">
        {/* Navbar - shows on all pages */}
        <Navbar />
        
        {/* Cart Drawer - accessible from all pages */}
        <CartDrawer/>
        <main className="pt-32 md:pt-36"> 
        {/* Routes */}
        <Routes>
          {/* Home Page - with all sections */}
          <Route path="/" element={<Homepage/>} />
          
          {/* All Categories Page - grid of all categories */}
          <Route path="/categories" element={<AllCategoriesPage />} />
          
          {/* Single Category Products Page - filtered products with sort/filter */}
          <Route path="/categories/:slug" element={<CategoryProductsPage />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/vendors" element={<AllVendorsPage />} />
        </Routes>
        </main>
        {/* Footer - shows on all pages */}
        <Footer />
      </div>
    </>
  );
}

export default App;

/* ────────────────────────────────────────────────────────────────────────────
   NAVIGATION FLOW:
   
   Homepage (/)
      ↓ Click "All Categories" in navbar
   All Categories Page (/categories)
      ↓ Click any category card (e.g., "Baby Clothing")
   Category Products Page (/categories/baby-clothing)
      ↓ Filter, sort, add to cart
      ↓ Click "Back to All Categories"
   All Categories Page (/categories)
   
   ──────────────────────────────────────────────────────────────────────────── */