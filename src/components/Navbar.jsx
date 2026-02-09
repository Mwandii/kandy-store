function Navbar() {
  return (
    <nav className="shadow-lg">
      <div className="flex justify-between px-5 py-2 bg-linear-to-r from-amber-600 via-amber-700 to-orange-600 text-white text-sm">
        <p>For all your baby essentials. Fast and reliable delivery guaranteed</p>
        <div className="flex gap-4 hover:cursor-pointer">
          <p>Seller Center</p>
          <p>Help & Support</p>
        </div>
      </div>
    <div className="flex px-6 py-4 justify-between items-center bg-white/95 backdrop-blur-md">
      <h1 className="font-bold text-3xl bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Kandy Baby Store</h1>
      <input type="search" className="bg-gray-100 px-6 py-4 font-light rounded-full w-154 text-sm" placeholder="Search for baby products, brands, shops......"/>
      <div className="flex gap-3">
        <button className="text-l font-semibold">Cart</button>
        <button className="text-l font-semibold">Login</button>
      </div>
    </div>
    <hr className="w-49/50 mx-auto border-gray-200"/>
    <div className="bg-white">
      <ul className="flex items-center gap-5 px-5 py-2 text-gray-700 text-sm font-bold">
        <li className="hover:cursor-pointer"><a>All Categories</a></li>
        <li className="hover:cursor-pointer"><a>New Arrivals</a></li>
        <li className="hover:cursor-pointer"><a>Best Deals</a></li>
        <li className="hover:cursor-pointer"><a>Top Vendors</a></li>
        <li className="hover:cursor-pointer bg-linear-to-r from-amber-600 to-orange-600 px-6 py-2 text-white rounded-full shadow-md"><a>Start Selling</a></li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar;