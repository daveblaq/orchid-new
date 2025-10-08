import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-sm sm:text-lg">O</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary leading-tight">
                Orchid Digital
              </span>
              <span className="text-xs sm:text-sm text-text-secondary font-medium tracking-wide">
                Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 xl:px-6 py-3 text-sm xl:text-base font-semibold transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primary-600"
                    : "text-text-secondary hover:text-primary-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link
                to="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 xl:px-8 py-3 text-sm xl:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-primary-600 focus:outline-none p-2 sm:p-3 transition-colors duration-200 touch-manipulation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} className="sm:w-7 sm:h-7" />
              ) : (
                <Menu size={24} className="sm:w-7 sm:h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 mt-3 sm:mt-4"
        >
          <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-1 sm:space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-colors duration-200 touch-manipulation ${
                  isActive(item.path)
                    ? "text-primary-600 bg-primary-50"
                    : "text-text-secondary hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl touch-manipulation"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
