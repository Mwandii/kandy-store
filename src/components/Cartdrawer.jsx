import { useEffect } from "react";
import { FaTimes, FaTrash, FaMinus, FaPlus, FaShoppingBag } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCartStore();

  // Calculate totals manually (getters don't work as expected)
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Backdrop Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-120 bg-white shadow-2xl z-70 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between p-4 md:p-4 border-b border-gray-200 bg-linear-to-r from-orange-50 to-amber-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <FaShoppingBag className="text-white text-lg" />
            </div>
            <div>
              <Link 
                to="/cart" 
                onClick={closeCart}
                className="hover:text-orange-600 transition-colors"
              >
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Shopping Cart</h2>
              </Link>
              <p className="text-xs md:text-sm text-gray-500">
                {cartItemCount} {cartItemCount === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600"
            aria-label="Close cart"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* ── Cart Items ── */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {cart.length === 0 ? (
            <EmptyCart closeCart={closeCart} />
          ) : (
            <div className="space-y-2">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              ))}

              {/* Clear Cart Button */}
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-red-600 hover:text-red-700 font-semibold py-2 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FaTrash className="text-xs" />
                  Clear All Items
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── Footer (Total & Checkout) ── */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-4 md:p-4 bg-gray-50 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm font-semibold">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-xl text-orange-600">${cartTotal.toFixed(2)}</span>
            </div>

            {/* Shipping Note */}
            <p className="text-xs text-gray-500 text-center">
              Shipping and taxes calculated at checkout
            </p>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Link 
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-1.5 md:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={closeCart}
                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-1.5 md:py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* ── Cart Item Component ─────────────────────────────────────────────────── */
function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="flex gap-4 p-3 md:p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-semibold text-sm md:text-base text-gray-900 line-clamp-2 mb-1">
            {item.name}
          </h3>
          {item.brand && (
            <p className="text-xs text-gray-500">{item.brand}</p>
          )}
          <p className="text-lg md:text-xl font-bold text-orange-600 mt-1">
            ${item.price}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md hover:bg-orange-500 hover:text-white transition-colors text-gray-700"
              aria-label="Decrease quantity"
            >
              <FaMinus className="text-xs" />
            </button>
            <span className="w-8 md:w-10 text-center font-semibold text-sm md:text-base">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md hover:bg-orange-500 hover:text-white transition-colors text-gray-700"
              aria-label="Increase quantity"
            >
              <FaPlus className="text-xs" />
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
            aria-label="Remove item"
          >
            <FaTrash className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Empty Cart State ────────────────────────────────────────────────────── */
function EmptyCart({ closeCart }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <FaShoppingBag className="text-4xl md:text-5xl text-gray-300" />
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
      <p className="text-sm md:text-base text-gray-500 mb-6">
        Add some products to get started!
      </p>
      <button
        onClick={closeCart}
        className="bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        Start Shopping
      </button>
    </div>
  );
}