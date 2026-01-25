import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaShieldAlt,
  FaTruck,
  FaHeadset
} from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  const trustBadges = [
    { icon: FaShieldAlt, text: "Secure Payment" },
    { icon: FaTruck, text: "Fast Delivery" },
    { icon: FaHeadset, text: "24/7 Support" }
  ];

  return (
    <>
      <footer
        ref={sectionRef}
        className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-900/10 rounded-full blur-3xl"></div>

        {/* Trust Badges Section */}
        <div className="relative border-b border-stone-700/50">
          <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-4 p-4 bg-stone-800/50 rounded-xl backdrop-blur-sm hover:bg-stone-700/50 transition-all duration-300 group"
                    style={{
                      transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white text-xl" />
                    </div>
                    <span className="font-semibold text-base lg:text-lg">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
            {/* Brand Column */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=100&h=100&fit=crop"
                    alt="Baby"
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                </div>
                <h4 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  BabyMart
                </h4>
              </div>

              <p className="text-gray-400 text-sm lg:text-base mb-6 leading-relaxed">
                Your trusted marketplace for premium baby products from verified vendors worldwide. Quality guaranteed, happiness delivered.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h5 className="font-semibold text-white mb-3">
                  Subscribe to Newsletter
                </h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 bg-stone-800/50 border border-stone-700 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-white placeholder-gray-500 text-sm transition-all duration-300"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-semibold text-white mb-3">Follow Us</h5>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebookF, color: "hover:bg-blue-600" },
                    { icon: FaTwitter, color: "hover:bg-sky-500" },
                    { icon: FaInstagram, color: "hover:bg-pink-600" },
                    { icon: FaLinkedinIn, color: "hover:bg-blue-700" }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className={`w-11 h-11 bg-stone-800/70 backdrop-blur-sm rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg`}
                      >
                        <Icon className="text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* For Customers Column */}
            <div
              className={`transition-all duration-1000 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h5 className="font-bold mb-4 text-base lg:text-lg text-white">
                For Customers
              </h5>
              <ul className="space-y-3 text-sm">
                {[
                  "Browse Products",
                  "Track Order",
                  "Help Center",
                  "Returns & Refunds",
                  "Shipping Info",
                  "Gift Cards"
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-400 transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Vendors Column */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h5 className="font-bold mb-4 text-base lg:text-lg text-white">
                For Vendors
              </h5>
              <ul className="space-y-3 text-sm">
                {[
                  "Start Selling",
                  "Vendor Dashboard",
                  "Pricing Plans",
                  "Seller Resources",
                  "Success Stories",
                  "Partner Program"
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-400 transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h5 className="font-bold mb-4 text-base lg:text-lg text-white">
                Contact Us
              </h5>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 text-gray-400 hover:text-amber-400 transition-colors group">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>123 Baby Street, New York, NY 10001, USA</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors group">
                  <FaPhone className="text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+18002229999">+1 (800) 222-9999</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-amber-400 transition-colors group">
                  <FaEnvelope className="text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:support@babymart.com">support@babymart.com</a>
                </li>
              </ul>

              {/* Business Hours */}
              <div className="mt-6 p-4 bg-stone-800/50 rounded-xl border border-stone-700">
                <h6 className="font-semibold text-white text-sm mb-2">
                  Business Hours
                </h6>
                <p className="text-xs text-gray-400">
                  Mon - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Sat - Sun: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div
            className={`border-t border-stone-700/50 pt-8 mb-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">We Accept:</p>
              <div className="flex flex-wrap items-center gap-3">
                {["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"].map(
                  (method, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-stone-800/70 backdrop-blur-sm rounded-lg text-xs font-semibold text-gray-300 hover:bg-stone-700/70 transition-all duration-300"
                    >
                      {method}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`border-t border-stone-700/50 pt-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs lg:text-sm text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} BabyMart. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <span className="text-stone-700">|</span>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <span className="text-stone-700">|</span>
                <a
                  href="#"
                  className="hover:text-amber-400 transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-50 animate-bounce-slow"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default Footer;