function Navbar() {
  return (
    <nav>
      <div className="flex justify-between px-5 py-2 bg-linear-to-r from-amber-600 via-amber-700 to-orange-600 text-white text-sm">
        <p>For all your baby essentials. Fast and reliable delivery guaranteed</p>
        <div className="flex gap-4 hover:cursor-pointer">
          <p>Seller Center</p>
          <p>Help & Support</p>
        </div>
      </div>
    <div className="flex px-6 py-4 justify-between items-center bg-white/95 backdrop-blur-md">
      <h1 className="font-bold text-3xl bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Kandy Baby Store</h1>
      <input className="bg-gray-100 px-4 py-2 font-light rounded-full" placeholder="Search....."/>
      <div className="flex gap-3">
        <button className="text-l font-semibold">Cart</button>
        <button className="text-l font-semibold">Login</button>
      </div>
    </div>
    <hr className="w-49/50 mx-auto border-gray-200"/>
    <div>
      <ul className="flex items-center gap-5 mx-5 py-5 text-gray-700 text-sm">
        <li className="hover:cursor-pointer"><a>All Categories</a></li>
        <li className="hover:cursor-pointer"><a>New Arrivals</a></li>
        <li className="hover:cursor-pointer"><a>Best Deals</a></li>
        <li className="hover:cursor-pointer"><a>Top Vendors</a></li>
        <li className="hover:cursor-pointer bg-linear-to-r from-amber-600 to-orange-600 px-6 py-2 text-white rounded-full"><a>Start Selling</a></li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar;