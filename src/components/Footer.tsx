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
  MessageCircle,
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
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "#",
      label: "X (Twitter)",
      color: "hover:text-gray-300",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" },
    {
      icon: MessageCircle,
      href: "#",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 bg-primary-600 hover:bg-primary-700 text-white p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} className="sm:w-5 sm:h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
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
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">
                  O
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold">
                  Orchid Digital
                </span>
                <span className="text-base sm:text-lg text-primary-400">
                  Consulting
                </span>
              </div>
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
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-700 transition-all duration-300 ${social.color} touch-manipulation`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Icon size={16} className="sm:w-5 sm:h-5" />
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
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base md:text-lg touch-manipulation block py-1"
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
                <Mail
                  className="text-primary-400 mt-1 flex-shrink-0"
                  size={16}
                />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  hello@orchidconsulting.com
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="text-primary-400 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm sm:text-base md:text-lg">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin
                  className="text-primary-400 mt-1 flex-shrink-0"
                  size={16}
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
              © {currentYear} Orchid Digital Consulting. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base md:text-lg touch-manipulation text-center"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base md:text-lg touch-manipulation text-center"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
