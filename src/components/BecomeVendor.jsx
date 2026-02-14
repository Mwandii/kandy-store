import { FaArrowRight, FaStore } from "react-icons/fa";

function BecomeVendor() {
  return (
    <section className="flex flex-col gap-3 items-center my-8 py-10 bg-linear-to-r from-amber-50 via-yellow-50 to-orange-50 border-b border-t border-amber-200">
      <div className="flex flex-col gap-3 items-center">
      <h2 className="font-bold">Want to become a vendor?</h2>
      <p>Join hundreds of trusted sellers and grow your business with Kandy Baby Store</p>
      </div>
      <div>
      <button className="flex items-center gap-3 bg-linear-to-r from-orange-500 to-orange-600 rounded-full hover:cursor-pointer text-white py-3 px-6"><FaStore/>Start selling today<FaArrowRight/></button>
      </div>
    </section>
  )
}

export default BecomeVendor;