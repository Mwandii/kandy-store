import { FaCheck } from "react-icons/fa";

function HeroSection() {

 /* const stats = [
    { number: "500+", label: "Trusted Vendors", icon: FaStore },
    { number: "50K+", label: "Premium Products", icon: FaShoppingBag },
    { number: "100K+", label: "Happy Parents", icon: FaStar }
  ];
*/
  return (
    <section className="bg-linear-to-r from-amber-50 via-yellow-50 to-orange-50 p-18">
      <div className="flex gap-3 items-center bg-white rounded-4xl shadow-2xl py-16 px-10">
        <div className="flex flex-col gap-3 px-8">
          <div>
          <p className="text-xs text-[#8B4513] font-bold bg-linear-to-r from-amber-100 via-yellow-100 to-orange-100 px-4 py-2 rounded-full inline-flex gap-2 items-center"><FaCheck className="bg-[#FF6B35] rounded-full p-1 w-4 h-4 text-white"/> Premium Quality Guaranteed</p>
          </div>
          <div className="">
          <h2 className="text-6xl leading-[1.3] font-bold text-gray-900">Everything Your <span className="bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Baby</span> Needs</h2>
          </div>
          <div className="">
          <p className="text-gray-700 text-lg leading-relaxed">Shop from trusted vendors<span className="mx-1 font-bold">·</span>Best prices guaranteed<span className="mx-1 font-bold">·</span>Fast and safe delivery done country wide</p>
          </div>
          <div>
          <button>Shop Now</button>
          <button>Browse Vendors</button>
          </div>
          <hr/>
          <div>
            <div>
            <p>500 + </p>
            <p>Trusted Vendors</p>
            </div>
            <div>
            <p>50K +</p>
            <p>Premium Products</p>
            </div>
            <div>
            <p>100K +</p>
            <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/top-view-yellow-sweater-with-toys_23-2148251496.jpg?t=st=1770621866~exp=1770625466~hmac=d88899ce8e4329d24bf33d488b02c631e4d1dc4fdd2cef6fd3a47c18d0c6efbc"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;