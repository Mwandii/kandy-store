function Navbar() {
  return (
    <div className="flex px-6 py-6 justify-between items-center">
      <h1 className="font-bold">Kandy Baby Store</h1>
      <nav className="flex gap-3">
        <input className="bg-gray-100 p-3 rounded-full" placeholder="Search....."/>
        <button>Cart</button>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar;