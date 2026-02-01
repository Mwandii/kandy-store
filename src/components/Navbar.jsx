function Navbar() {
  return (
    <nav>
      <div>
        <p>For all your baby essentials. Fast and reliable delivery guaranteed</p>
        <div>
          <p>Seller Center</p>
          <p>Help & Support</p>
        </div>
      </div>
    <div className="flex px-6 py-6 justify-between items-center bg-white/95 backdrop-blur-md">
      <h1 className="font-bold text-3xl bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Kandy Baby Store</h1>
      <input className="bg-gray-100 px-4 py-2 font-light rounded-full" placeholder="Search....."/>
      <div className="flex gap-3">
        <button className="text-l font-semibold">Cart</button>
        <button className="text-l font-semibold">Login</button>
      </div>
    </div>
    <div>
      <ul>
        <li><a>Start Seling</a></li>
        <li><a>New Arrivals</a></li>
        <li><a>Best Deals</a></li>
        <li><a>Top Vendors</a></li>
        <li><a>Start Selling</a></li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar;