import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SlideData {
  id: number;
  headline: string;
  subtext: string;
  backgroundImage: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    headline: "Empowering Businesses for Global Growth",
    subtext:
      "Transform your business with our comprehensive digital consulting services and strategic guidance.",
    backgroundImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80",
  },
  {
    id: 2,
    headline: "Driving Innovation Through Technology and Training",
    subtext:
      "Stay ahead of the competition with cutting-edge solutions and expert training programs.",
    backgroundImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    headline: "Your Partner in Digital and Enterprise Transformation",
    subtext:
      "Navigate the digital landscape with confidence through our proven methodologies and expertise.",
    backgroundImage:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
    startAutoSlide();
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
    startAutoSlide();
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
    startAutoSlide();
  };

  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className="hidden md:flex absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm border border-gray-300/50 hover:border-green-300/50 text-gray-600 hover:text-green-500 p-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group items-center justify-center"
      >
        <ChevronLeft
          size={24}
          className="group-hover:scale-110 transition-transform duration-200"
        />
      </button>
      <button
        onClick={goToNext}
        disabled={isTransitioning}
        className="hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm border border-gray-300/50 hover:border-green-300/50 text-gray-600 hover:text-green-500 p-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group items-center justify-center"
      >
        <ChevronRight
          size={24}
          className="group-hover:scale-110 transition-transform duration-200"
        />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight px-4">
                {slides[currentSlide].headline}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
                {slides[currentSlide].subtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto px-4">
                <Link
                  to="/services"
                  className="bg-white/90 backdrop-blur-sm text-text-primary px-6 sm:px-10 md:px-12 py-3 sm:py-5 text-base sm:text-xl font-semibold hover:bg-white transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary-500 to-green-500 text-white px-6 sm:px-10 md:px-12 py-3 sm:py-5 text-base sm:text-xl font-semibold hover:from-primary-600 hover:to-green-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-1 transition-all duration-500 disabled:cursor-not-allowed ${
              index === currentSlide
                ? "w-8 sm:w-10 md:w-12 bg-gradient-to-r from-primary-500 to-green-500"
                : "w-4 sm:w-6 bg-white/40 hover:bg-green-300/60 hover:w-6 sm:hover:w-8"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 7, ease: "linear" }}
          className="h-full bg-gradient-to-r from-primary-500 to-green-500"
        />
      </div>
    </section>
  );
}
