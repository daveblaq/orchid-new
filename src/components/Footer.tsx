import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      bgColor: "bg-blue-600",
      hoverBgColor: "hover:bg-blue-700",
      textColor: "text-white",
    },
    {
      icon: Twitter,
      href: "#",
      label: "X (Twitter)",
      bgColor: "bg-black",
      hoverBgColor: "hover:bg-black",
      textColor: "text-white",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverBgColor: "hover:from-purple-600 hover:to-pink-600",
      textColor: "text-white",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      bgColor: "bg-red-600",
      hoverBgColor: "hover:bg-red-700",
      textColor: "text-white",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      bgColor: "bg-blue-500",
      hoverBgColor: "hover:bg-blue-600",
      textColor: "text-white",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 bg-gradient-to-r from-primary-500 to-green-500 hover:from-primary-600 hover:to-green-600 text-white p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} className="sm:w-6 sm:h-6" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 sm:mb-6">
              <img
                src="https://ik.imagekit.io/shiga/orchid/logo.30351a81.png?updatedAt=1760026675568"
                alt="Orchiddigital Consulting"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain brightness-0 invert"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".fallback-logo")) {
                    parent.innerHTML = `
                      <div class="fallback-logo flex items-center space-x-2 sm:space-x-3">
                        <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center shadow-lg">
                          <span class="text-white font-bold text-lg sm:text-xl">O</span>
                        </div>
                        <div class="flex flex-col">
                          <span class="text-xl sm:text-2xl font-bold text-white">
                            Orchiddigital
                          </span>
                          <span class="text-base sm:text-lg bg-gradient-to-r from-primary-400 to-green-400 bg-clip-text text-transparent">
                            Consulting
                          </span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              Empowering businesses for global growth through technology,
              training, and enterprise transformation. Your trusted partner in
              digital innovation.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${social.bgColor} ${social.hoverBgColor} ${social.textColor} transition-all duration-300 shadow-md hover:shadow-lg touch-manipulation`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Icon size={18} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base md:text-lg touch-manipulation block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white">
              Contact Info
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="text-green-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  hello@orchidconsulting.com
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="text-green-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin
                  className="text-green-400 mt-1 flex-shrink-0"
                  size={18}
                />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  123 Innovation Street
                  <br />
                  Tech City, TC 12345
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 sm:mt-14 md:mt-16 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg text-center md:text-left">
              © {currentYear} Orchiddigital Consulting. All rights reserved.
            </p>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base md:text-lg touch-manipulation text-center"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
