import { FaCheck, FaShoppingBag, FaStar } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

function HeroSection() {
  /* const stats = [
    { number: "500+", label: "Trusted Vendors", icon: FaStore },
    { number: "50K+", label: "Premium Products", icon: FaShoppingBag },
    { number: "100K+", label: "Happy Parents", icon: FaStar }
  ];
*/
  return (
    <section className="bg-linear-to-r from-amber-50 via-yellow-50 to-orange-50 p-18">
      <div className="flex gap-10 items-center justify-between bg-white rounded-4xl shadow-2xl py-16 px-8">
        <div className="flex flex-col gap-3 px-8">
          <div>
            <p className="text-xs text-[#8B4513] font-bold bg-linear-to-r from-amber-100 via-yellow-100 to-orange-100 px-4 py-2 rounded-full inline-flex gap-2 items-center">
              <FaCheck className="bg-[#FF6B35] rounded-full p-1 w-4 h-4 text-white" />{" "}
              Premium Quality Guaranteed
            </p>
          </div>
          <div className="">
            <h2 className="text-6xl leading-[1.3] font-bold text-gray-900">
              Everything Your{" "}
              <span className="bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                Baby
              </span>{" "}
              Needs
            </h2>
          </div>
          <div className="">
            <p className="text-gray-700 text-lg leading-relaxed">
              Shop from trusted vendors<span className="mx-1 font-bold">·</span>
              Best prices guaranteed<span className="mx-1 font-bold">·</span>
              Fast and safe delivery done country wide
            </p>
          </div>
          <div className="flex gap-5 py-6 font-semibold">
            <button className="px-6 py-4 shadow-lg text-white bg-linear-to-r from-orange-500 to-orange-600 rounded-full">
              Shop Now
            </button>
            <button className="px-6 py-4 shadow-lg border-2 border-orange-800 text-orange-800 rounded-full">
              Browse Vendors
            </button>
          </div>
          <hr className="border border-gray-200" />
          <div className="flex justify-evenly py-6">
            <div className="flex flex-col items-center gap-3">
              <FaShop className="text-orange-600" />
              <p className="text-3xl font-bold text-orange-700">500+ </p>
              <p className="text-gray-600">Trusted Vendors</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaShoppingBag className="text-orange-600" />
              <p className="text-3xl font-bold text-orange-700">50K+</p>
              <p className="text-gray-600">Premium Products</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <FaStar className="text-orange-600" />
              <p className="text-3xl font-bold text-orange-700">100K+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="px-8 w-200">
          <img
            className="rounded-2xl w-full"
            src="https://images.unsplash.com/photo-1709380830070-2c0da9348126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJhYnklMjBwbGF5aW5nJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
