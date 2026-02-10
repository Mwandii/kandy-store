import CategoriesSection from "./components/Categories";
import CategoriesCard from "./components/CategoriesCard";
import FeaturedVendorsSection from "./components/FeaturedVendor";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoriesSection/>
    <FeaturedVendorsSection/>
    {/*<TrendingProductsSection/>
    <ShopByAgeSection/>
    <Footer/>*/}
    </>
  )
}

export default App;