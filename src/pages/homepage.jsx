import BecomeVendor from "../components/BecomeVendor";
import CategoriesSection from "../components/Categories";
import FeaturedVendorsSection from "../components/FeaturedVendor";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import ShopByAge from "../components/ShopByAge";
import TrendingProducts from "../components/TrendingProduct";

function Homepage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoriesSection/>
    <FeaturedVendorsSection/>
    <BecomeVendor/>
    <TrendingProducts/>
    <ShopByAge/>
    <Footer/>
    </>
  )
}

export default Homepage;