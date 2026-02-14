import BecomeVendor from "./components/BecomeVendor";
import CategoriesSection from "./components/Categories";
import CategoriesCard from "./components/CategoriesCard";
import FeaturedVendorsSection from "./components/FeaturedVendor";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import TrendingProducts from "./components/TrendingProduct";

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoriesSection/>
    <FeaturedVendorsSection/>
    <BecomeVendor/>
    <TrendingProducts/>
    {/* <TrendingProductsSection/>
    <ShopByAgeSection/>
    <Footer/> */}
    </>
  )
}

export default App;