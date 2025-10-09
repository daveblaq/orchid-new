import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

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
      className={`py-20 relative overflow-hidden ${
        gradient ? "bg-primary-500" : "bg-white"
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
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              gradient ? "text-white" : "text-text-primary"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
              gradient ? "text-white/90" : "text-text-secondary"
            }`}
          >
            {subtitle}
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {["Expert Consultation", "Proven Results", "24/7 Support"].map(
              (benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center space-x-3"
                >
                  <CheckCircle
                    className={`w-5 h-5 ${
                      gradient ? "text-white" : "text-primary-600"
                    }`}
                  />
                  <span
                    className={`font-semibold ${
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
              className={`group inline-flex items-center space-x-3 px-10 py-4 font-bold transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
                gradient
                  ? "bg-white text-primary-600 hover:bg-gray-100"
                  : "bg-primary-500 text-white hover:bg-primary-700"
              }`}
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
