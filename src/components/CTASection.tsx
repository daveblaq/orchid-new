import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  gradient?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  gradient = true,
}: CTASectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden ${
        gradient
          ? "bg-gradient-to-br from-primary-500 to-green-500"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background Dots Pattern */}
      {gradient && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-48 left-48 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute top-16 right-48 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-64 left-16 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-40 right-16 w-2 h-2 bg-white rounded-full"></div>

          <div className="absolute top-80 left-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-96 right-64 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute top-72 left-64 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-88 right-20 w-1 h-1 bg-white rounded-full"></div>

          <div className="absolute bottom-20 left-20 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-48 left-48 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute bottom-16 right-48 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-64 left-16 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-16 w-2 h-2 bg-white rounded-full"></div>

          <div className="absolute bottom-80 left-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-96 right-64 w-3 h-3 bg-white rounded-full"></div>
          <div className="absolute bottom-72 left-64 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-88 right-20 w-1 h-1 bg-white rounded-full"></div>

          {/* Center dots */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white rounded-full"></div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${
              gradient ? "text-white" : "text-text-primary"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-xl sm:text-2xl md:text-3xl mb-12 sm:mb-16 max-w-5xl mx-auto leading-relaxed font-light ${
              gradient ? "text-white/90" : "text-text-secondary"
            }`}
          >
            {subtitle}
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16 max-w-5xl mx-auto">
            {["Expert Consultation", "Proven Results", "24/7 Support"].map(
              (benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center space-x-3 sm:space-x-4"
                >
                  <CheckCircle
                    className={`w-6 h-6 sm:w-7 sm:h-7 ${
                      gradient ? "text-white" : "text-green-500"
                    }`}
                  />
                  <span
                    className={`font-semibold text-lg sm:text-xl ${
                      gradient ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              )
            )}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              to={buttonLink}
              className={`group inline-flex items-center space-x-3 sm:space-x-4 px-10 sm:px-12 md:px-14 py-4 sm:py-5 md:py-6 text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 shadow-lg ${
                gradient
                  ? "bg-white/95 backdrop-blur-sm text-primary-500 hover:bg-white border border-white/50"
                  : "bg-gradient-to-r from-primary-500 to-green-500 hover:from-primary-600 hover:to-green-600 text-white"
              }`}
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12"
          >
            <p
              className={`text-sm ${
                gradient ? "text-white/70" : "text-text-secondary"
              }`}
            >
              Join 500+ successful businesses worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
