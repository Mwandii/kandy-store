import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaEnvelope, FaBox, FaHome } from "react-icons/fa";

function OrderSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber, total, email } = location.state || {};

  useEffect(() => {
    // Redirect if accessed directly without order data
    if (!orderNumber) {
      navigate("/");
    }
  }, [orderNumber, navigate]);

  if (!orderNumber) return null;

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50/30 to-white pt-32 md:pt-18 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-5">
        
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in shadow-lg">
            <FaCheckCircle className="text-5xl md:text-6xl text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-green-100 mb-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="text-2xl font-bold text-gray-900">#{orderNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Paid</p>
                <p className="text-2xl font-bold text-green-600">${total.toFixed(2)}</p>
              </div>
            </div>

            {/* Email Confirmation */}
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl border border-blue-200">
              <FaEnvelope className="text-blue-600 text-xl mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Email Confirmation Sent</p>
                <p className="text-sm text-gray-600">
                  A confirmation email has been sent to <span className="font-semibold">{email}</span>
                </p>
              </div>
            </div>

            {/* Order Status */}
            <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl border border-orange-200">
              <FaBox className="text-orange-600 text-xl mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Order Processing</p>
                <p className="text-sm text-gray-600">
                  Your order is being prepared and will be shipped within 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Order Confirmation</p>
                <p className="text-sm text-gray-600">You'll receive an email with your order details.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Order Processing</p>
                <p className="text-sm text-gray-600">We'll prepare your items for shipment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Shipping Notification</p>
                <p className="text-sm text-gray-600">You'll get tracking info once your order ships.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Delivery</p>
                <p className="text-sm text-gray-600">Your order will arrive at your doorstep.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors"
          >
            <FaHome />
            Continue Shopping
          </Link>
          <button
            onClick={() => window.print()}
            className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Print Receipt
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default OrderSuccessPage;