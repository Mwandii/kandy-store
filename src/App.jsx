import CategoriesSection from "./components/Categories";
import FeaturedVendorsSection from "./components/FeaturedVendor";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import ShopByAgeSection from "./components/ShopByAge";
import TrendingProductsSection from "./components/TrendingProducts";

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoriesSection/>
    <FeaturedVendorsSection/>
    <TrendingProductsSection/>
    <ShopByAgeSection/>
    <Footer/>
    </>
  )
}

export default App;