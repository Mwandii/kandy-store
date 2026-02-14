import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400">
      
      {/* ── Main Footer Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* ── Brand Column ── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              
              <span className="text-2xl font-bold bg-linear-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Kandy Baby Store</span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6">
              Your trusted marketplace for premium baby products from verified vendors countrywide. 
              Quality guaranteed, happiness delivered.
            </p>

            

            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold text-sm mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <SocialIcon icon={<FaFacebookF />} />
                <SocialIcon icon={<FaTwitter />} />
                <SocialIcon icon={<FaInstagram />} />
                <SocialIcon icon={<FaLinkedinIn />} />
              </div>
            </div>
          </div>

          {/* ── For Customers Column ── */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">For Customers</h3>
            <ul className="space-y-2.5">
              <FooterLink text="Browse Products" />
              <FooterLink text="Track Order" />
              <FooterLink text="Help Center" />
              <FooterLink text="Returns & Refunds" />
              <FooterLink text="Shipping Info" />
              <FooterLink text="Gift Cards" />
            </ul>
          </div>

          {/* ── For Vendors Column ── */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">For Vendors</h3>
            <ul className="space-y-2.5">
              <FooterLink text="Start Selling" />
              <FooterLink text="Vendor Dashboard" />
              <FooterLink text="Pricing Plans" />
              <FooterLink text="Seller Resources" />
              <FooterLink text="Success Stories" />
              <FooterLink text="Partner Program" />
            </ul>
          </div>

          {/* ── Contact Us Column ── */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Us</h3>
            
            {/* Address */}
            <div className="flex gap-3 mb-4">
              <FaMapMarkerAlt className="text-orange-500 text-lg shrink-0 mt-0.5" />
              <div className="text-sm">
                <p>Nairobi</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 mb-4">
              <FaPhoneAlt className="text-orange-500 text-base shrink-0 mt-0.5" />
              <p className="text-sm">+254704207486</p>
            </div>

            {/* Email */}
            <div className="flex gap-3 mb-6">
              <FaEnvelope className="text-orange-500 text-base shrink-0 mt-0.5" />
              <p className="text-sm">kandybabystore@gmail.com</p>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h4 className="text-white font-semibold text-sm mb-2">Business Hours</h4>
              <p className="text-xs">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-xs">Sat - Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Payment Methods Bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* We Accept */}
            <div className="flex items-center gap-4">
              <span className="text-sm">We Accept:</span>
              <div className="flex items-center gap-3">
                <PaymentBadge text="Visa" />
                <PaymentBadge text="Mastercard" />
                <PaymentBadge text="PayPal" />
                <PaymentBadge text="Apple Pay" />
                <PaymentBadge text="Google Pay" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            
            <p>© {currentYear} BabyMart. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}

/* ── Footer Link ─────────────────────────────────────────────────────────── */
function FooterLink({ text }) {
  return (
    <li>
      <a
        href="#"
        className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
      >
        {text}
      </a>
    </li>
  );
}

/* ── Social Icon ─────────────────────────────────────────────────────────── */
function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
    >
      {icon}
    </a>
  );
}

/* ── Payment Badge ───────────────────────────────────────────────────────── */
function PaymentBadge({ text }) {
  return (
    <span className="bg-gray-800 text-gray-300 px-3 py-1.5 rounded text-xs font-medium">
      {text}
    </span>
  );
}