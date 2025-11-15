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
    { path: "/investment-calculator", label: "Investment Calculator" },
    { path: "/team", label: "Team" },
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
            <img
              src="https://ik.imagekit.io/shiga/orchid/logo.30351a81.png?updatedAt=1760026675568"
              alt="Orchiddigital Consulting"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent && !parent.querySelector(".fallback-logo")) {
                  parent.innerHTML = `
                    <div class="fallback-logo flex items-center space-x-2 sm:space-x-3">
                      <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span class="text-white font-bold text-sm sm:text-lg">O</span>
                      </div>
                      <div class="flex flex-col">
                        <span class="text-lg sm:text-xl md:text-2xl font-bold text-text-primary leading-tight">
                          Orchiddigital
                        </span>
                        <span class="text-xs sm:text-sm text-text-secondary font-medium tracking-wide">
                          Consulting
                        </span>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={` py-3 text-sm xl:text-base font-semibold transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primary-500 hover:text-green-500"
                    : "text-text-secondary hover:text-green-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-green-500 focus:outline-none p-2 sm:p-3 transition-colors duration-200 touch-manipulation"
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
                    ? "text-primary-500 bg-green-50/50 hover:text-green-500"
                    : "text-text-secondary hover:text-green-500 hover:bg-green-50/30"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
