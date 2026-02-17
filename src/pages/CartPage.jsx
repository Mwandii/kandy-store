import { Link, useNavigate } from "react-router-dom";
import { 
  FaTrash, 
  FaMinus, 
  FaPlus, 
  FaShoppingBag, 
  FaArrowLeft,
  FaLock,
  FaTruck,
  FaUndo
} from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCartStore();

  // Calculate cart total manually
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate savings
  const totalSavings = cart.reduce((total, item) => {
    if (item.originalPrice) {
      return total + (item.originalPrice - item.price) * item.quantity;
    }
    return total;
  }, 0);

  const subtotal = cartTotal;
  const shipping = cartTotal > 50 ? 0 : 5.99; // Free shipping over $50
  const tax = cartTotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white pt-32 md:pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        
        {/* Header */}
        <div className="mb-8">
          {/* Back button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold mb-4 transition-colors group"
          >
            <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-200" />
            Continue Shopping
          </Link>

          {/* Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Shopping Cart
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                {cartItemCount} {cartItemCount === 1 ? "item" : "items"} in your cart
              </p>
            </div>

            {/* Clear cart button */}
            <button
              onClick={clearCart}
              className="self-start sm:self-auto text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
            >
              <FaTrash className="text-xs" />
              Clear Cart
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="opacity-0 animate-[fadeSlideUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CartItem
                  item={item}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-36">
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                savings={totalSavings}
              />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <TrustBadges />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ── Cart Item Component ─────────────────────────────────────────────────── */
function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex gap-4 md:gap-6">
        
        {/* Product Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between gap-4 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1 line-clamp-2">
                {item.name}
              </h3>
              {item.brand && (
                <p className="text-sm text-gray-500">{item.brand}</p>
              )}
            </div>

            {/* Remove button (desktop) */}
            <button
              onClick={() => onRemove(item.id)}
              className="hidden md:flex items-center justify-center w-10 h-10 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors shrink-0"
              aria-label="Remove item"
            >
              <FaTrash className="text-sm" />
            </button>
          </div>

          {/* Price & Quantity Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
            
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-xl md:text-2xl font-bold text-orange-600">
                ${item.price}
              </span>
              {item.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${item.originalPrice}
                </span>
              )}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-gray-700"
                  aria-label="Decrease quantity"
                >
                  <FaMinus className="text-xs" />
                </button>
                <span className="w-10 text-center font-bold text-base md:text-lg">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-lg hover:bg-orange-500 hover:text-white transition-colors text-gray-700"
                  aria-label="Increase quantity"
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>

              {/* Remove button (mobile) */}
              <button
                onClick={() => onRemove(item.id)}
                className="md:hidden text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Remove item"
              >
                <FaTrash className="text-sm" />
              </button>
            </div>
          </div>

          {/* Item Subtotal */}
          <div className="mt-3 text-sm text-gray-500">
            Subtotal: <span className="font-semibold text-gray-900">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Order Summary ───────────────────────────────────────────────────────── */
function OrderSummary({ subtotal, shipping, tax, total, savings }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

      {/* Price Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-gray-700">
          <span>Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        {savings > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Savings</span>
            <span className="font-semibold">-${savings.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span className="font-semibold">
            {shipping === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>Tax (8%)</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-lg md:text-xl font-bold text-gray-900">
            <span>Total</span>
            <span className="text-orange-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Free Shipping Progress */}
      {shipping > 0 && (
        <div className="mb-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
          <p className="text-sm text-orange-800 font-semibold mb-2">
            Add ${(50 - subtotal).toFixed(2)} more for FREE shipping! 🚚
          </p>
          <div className="w-full bg-orange-200 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Checkout Button */}
      <button
        onClick={() => navigate("/checkout")}
        className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mb-3"
      >
        Proceed to Checkout
      </button>

      <Link
        to="/"
        className="block w-full text-center text-gray-600 hover:text-orange-600 font-semibold py-3 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

/* ── Empty Cart State ────────────────────────────────────────────────────── */
function EmptyCart() {
  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white pt-32 md:pt-36 pb-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaShoppingBag className="text-5xl md:text-6xl text-orange-500" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Looks like you haven't added anything to your cart yet.
            <br />Start shopping to fill it up!
          </p>

          <Link
            to="/"
            className="inline-block bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Trust Badges ────────────────────────────────────────────────────────── */
function TrustBadges() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
          <FaLock className="text-green-600 text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm md:text-base">Secure Payment</h3>
          <p className="text-xs md:text-sm text-gray-500">256-bit SSL encryption</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
          <FaTruck className="text-blue-600 text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm md:text-base">Free Shipping</h3>
          <p className="text-xs md:text-sm text-gray-500">On orders over $50</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
          <FaUndo className="text-purple-600 text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-sm md:text-base">Easy Returns</h3>
          <p className="text-xs md:text-sm text-gray-500">30-day return policy</p>
        </div>
      </div>
    </div>
  );
}

export default CartPage;