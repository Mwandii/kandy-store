function Navbar() {
  return (
    <div className="flex px-6 py-6 justify-between items-center bg-white/95 backdrop-blur-md">
      <h1 className="font-bold text-3xl bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Kandy Baby Store</h1>
      <nav className="flex gap-3">
        <input className="bg-gray-100 px-4 py-2 font-light rounded-full" placeholder="Search....."/>
        <button className="text-l font-semibold">Cart</button>
        <button className="text-l font-semibold">Login</button>
      </nav>
    </div>
  )
}

export default Navbar;