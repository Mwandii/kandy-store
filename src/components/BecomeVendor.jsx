import { FaArrowRight, FaStore } from "react-icons/fa";

function BecomeVendor() {
  return (
    <section className="flex flex-col items-center my-8 py-7">
      <div className="flex flex-col items-center">
      <h2 className="font-bold">Want to become a vendor?</h2>
      <p>Join hundreds of trusted sellers and grow your business with Kandy Baby Store</p>
      </div>
      <div>
      <button className="flex gap-3"><FaStore/>Start selling today<FaArrowRight/></button>
      </div>
    </section>
  )
}

export default BecomeVendor;