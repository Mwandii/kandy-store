import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingBag,
  FaUser,
  FaTruck,
  FaCreditCard,
  FaCheckCircle,
  FaArrowLeft,
  FaArrowRight,
  FaLock,
  FaEdit,
} from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

function CheckoutPage() {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // Contact Info
    email: "",
    phone: "",
    // Shipping Address
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    county: "",
    postalCode: "",
    // Delivery Method
    deliveryMethod: "standard",
    // Payment
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  // Redirect if cart is empty (but not if we're processing an order)
  useEffect(() => {
    if (cart.length === 0 && !isProcessing) {
      navigate("/cart");
    }
  }, [cart, navigate, isProcessing]);

  // Calculate totals - manually calculate since cartTotal is a getter
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = formData.deliveryMethod === "express" ? 15.99 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate step
  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Email is invalid";
      if (!formData.phone) newErrors.phone = "Phone is required";
      else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone))
        newErrors.phone = "Phone number is invalid";
    }

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.county) newErrors.county = "County is required";
    }

    if (step === 4) {
      if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, "")))
        newErrors.cardNumber = "Card number must be 16 digits";
      if (!formData.cardName) newErrors.cardName = "Cardholder name is required";
      if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
      else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate))
        newErrors.expiryDate = "Format: MM/YY";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
      else if (!/^\d{3}$/.test(formData.cvv))
        newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Next step
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Previous step
  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Submit order
  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart and navigate to success
    clearCart();
    navigate("/order-success", {
      state: {
        orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase(),
        total: total,
        email: formData.email,
      },
    });
  };

  const steps = [
    { number: 1, title: "Contact", icon: FaUser },
    { number: 2, title: "Shipping", icon: FaTruck },
    { number: 3, title: "Delivery", icon: FaShoppingBag },
    { number: 4, title: "Payment", icon: FaCreditCard },
  ];

  if (cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/30 to-white pt-32 md:pt-18 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-5">
        
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 font-semibold mb-4 transition-colors group"
          >
            <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Cart
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Checkout
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Complete your order securely
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps steps={steps} currentStep={currentStep} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <ContactStep
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  handleNext={handleNext}
                />
              )}

              {/* Step 2: Shipping Address */}
              {currentStep === 2 && (
                <ShippingStep
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                />
              )}

              {/* Step 3: Delivery Method */}
              {currentStep === 3 && (
                <DeliveryStep
                  formData={formData}
                  setFormData={setFormData}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                />
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <PaymentStep
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  handlePrevious={handlePrevious}
                  handleSubmit={handleSubmit}
                  isProcessing={isProcessing}
                  setCurrentStep={setCurrentStep}
                />
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-36">
              <OrderSummary
                cart={cart}
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                tax={tax}
                total={total}
                deliveryMethod={formData.deliveryMethod}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Progress Steps ──────────────────────────────────────────────────────── */
function ProgressSteps({ steps, currentStep }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-orange-500 text-white scale-110"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {isCompleted ? (
                    <FaCheckCircle className="text-xl md:text-2xl" />
                  ) : (
                    <Icon className="text-lg md:text-xl" />
                  )}
                </div>
                <span
                  className={`text-xs md:text-sm font-semibold mt-2 ${
                    isActive ? "text-orange-600" : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 md:mx-4 transition-all duration-300 ${
                    currentStep > step.number ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Contact Step ────────────────────────────────────────────────────────── */
function ContactStep({ formData, errors, handleChange, handleNext }) {
  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border-2 ${
            errors.email ? "border-red-500" : "border-gray-200"
          } focus:border-orange-400 outline-none transition-colors`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border-2 ${
            errors.phone ? "border-red-500" : "border-gray-200"
          } focus:border-orange-400 outline-none transition-colors`}
          placeholder="+254 700 000000"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        Continue to Shipping
        <FaArrowRight />
      </button>
    </div>
  );
}

/* ── Shipping Step ───────────────────────────────────────────────────────── */
function ShippingStep({ formData, errors, handleChange, handleNext, handlePrevious }) {
  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Address</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.firstName ? "border-red-500" : "border-gray-200"
            } focus:border-orange-400 outline-none transition-colors`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.lastName ? "border-red-500" : "border-gray-200"
            } focus:border-orange-400 outline-none transition-colors`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Street Address *
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border-2 ${
            errors.address ? "border-red-500" : "border-gray-200"
          } focus:border-orange-400 outline-none transition-colors`}
          placeholder="123 Main Street"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            City *
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.city ? "border-red-500" : "border-gray-200"
            } focus:border-orange-400 outline-none transition-colors`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            County *
          </label>
          <input
            type="text"
            name="county"
            value={formData.county}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.county ? "border-red-500" : "border-gray-200"
            } focus:border-orange-400 outline-none transition-colors`}
          />
          {errors.county && (
            <p className="text-red-500 text-sm mt-1">{errors.county}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Continue
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

/* ── Delivery Step ───────────────────────────────────────────────────────── */
function DeliveryStep({ formData, setFormData, handleNext, handlePrevious }) {
  const deliveryOptions = [
    {
      id: "standard",
      title: "Standard Delivery",
      time: "5-7 business days",
      price: 5.99,
    },
    {
      id: "express",
      title: "Express Delivery",
      time: "2-3 business days",
      price: 15.99,
    },
  ];

  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Method</h2>

      <div className="space-y-4">
        {deliveryOptions.map((option) => (
          <label
            key={option.id}
            className={`block p-4 md:p-6 rounded-xl border-2 cursor-pointer transition-all ${
              formData.deliveryMethod === option.id
                ? "border-orange-500 bg-orange-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value={option.id}
                  checked={formData.deliveryMethod === option.id}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      deliveryMethod: e.target.value,
                    }))
                  }
                  className="w-5 h-5 text-orange-500"
                />
                <div>
                  <p className="font-bold text-gray-900">{option.title}</p>
                  <p className="text-sm text-gray-500">{option.time}</p>
                </div>
              </div>
              <p className="font-bold text-orange-600">${option.price.toFixed(2)}</p>
            </div>
          </label>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          Continue to Payment
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

/* ── Payment Step ────────────────────────────────────────────────────────── */
function PaymentStep({
  formData,
  errors,
  handleChange,
  handlePrevious,
  handleSubmit,
  isProcessing,
  setCurrentStep,
}) {
  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ") || value;
  };

  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  return (
    <div className="space-y-6 animate-[fadeSlideUp_0.5s_ease-out]">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Information</h2>

      {/* Review Summary */}
      <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Contact:</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{formData.email}</span>
            <button
              onClick={() => setCurrentStep(1)}
              className="text-orange-500 hover:text-orange-600"
            >
              <FaEdit className="text-xs" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Ship to:</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              {formData.city}, {formData.county}
            </span>
            <button
              onClick={() => setCurrentStep(2)}
              className="text-orange-500 hover:text-orange-600"
            >
              <FaEdit className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Card Number *
        </label>
        <input
          type="text"
          name="cardNumber"
          value={formatCardNumber(formData.cardNumber)}
          onChange={(e) => {
            const value = e.target.value.replace(/\s/g, "");
            if (value.length <= 16 && /^\d*$/.test(value)) {
              handleChange({ target: { name: "cardNumber", value } });
            }
          }}
          className={`w-full px-4 py-3 rounded-xl border-2 ${
            errors.cardNumber ? "border-red-500" : "border-gray-200"
          } focus:border-orange-400 outline-none transition-colors`}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Cardholder Name *
        </label>
        <input
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border-2 ${
            errors.cardName ? "border-red-500" : "border-gray-200"
          } focus:border-orange-400 outline-none transition-colors`}
          placeholder="JOHN DOE"
        />
        {errors.cardName && (
          <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expiry Date *
          </label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={(e) => {
              const formatted = formatExpiryDate(e.target.value);
              handleChange({ target: { name: "expiryDate", value: formatted } });
            }}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.expiryDate ? "border-red-500" : "border-gray-200"
            } focus:border-orange-400 outline-none transition-colors`}
            placeholder="MM/YY"
            maxLength="5"
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            CVV *
          </label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 3 && /^\d*$/.test(value)) {
                handleChange(e);
              }
            }}
            className={`w-full px-4 py-3 rounded-xl border-2 ${
              errors.cvv ? "border-red-500" : "border-gray-200"
            } focus:border-orange-400 outline-none transition-colors`}
            placeholder="123"
            maxLength="3"
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-4 rounded-xl border border-green-200">
        <FaLock className="text-green-600 shrink-0" />
        <p>Your payment information is encrypted and secure</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors"
          disabled={isProcessing}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={isProcessing}
          className="flex-1 bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <FaLock />
              Place Order
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/* ── Order Summary ───────────────────────────────────────────────────────── */
function OrderSummary({ cart, subtotal, deliveryFee, tax, total, deliveryMethod }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm line-clamp-1">{item.name}</p>
              <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              <p className="text-sm font-bold text-orange-600">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-3 border-t border-gray-200 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">
            Delivery ({deliveryMethod === "express" ? "Express" : "Standard"})
          </span>
          <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (8%)</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
          <span>Total</span>
          <span className="text-orange-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Animations ──────────────────────────────────────────────────────────── */
const styles = `
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default CheckoutPage;