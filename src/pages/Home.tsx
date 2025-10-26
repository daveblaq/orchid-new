import HeroSlider from "../components/HeroSlider";
import CTASection from "../components/CTASection";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Globe,
  Shield,
  Headphones,
  Building,
  GraduationCap,
  FileText,
  Code,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 logo
      } else if (window.innerWidth < 768) {
        setItemsPerView(2); // SM: 2 logos
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // MD: 3 logos
      } else {
        setItemsPerView(4); // LG: 4 logos
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const mainServices = [
    {
      title: "Investment Service",
      description:
        "Grow your wealth with our secure investment plans. Earn up to 5% monthly returns on investments below ₦50M, or 3.3% monthly for ₦50M and above.",
      icon: TrendingUp,
      link: "/services/investment",
    },
    {
      title: "Loan Service",
      description:
        "Get quick access to capital with our Orchiddigital Loan Plan. Flexible terms with competitive rates and fast approval process.",
      icon: DollarSign,
      link: "/services/loan",
    },
  ];

  const otherServices = [
    {
      title: "Access to Market",
      description:
        "Connect bulk purchasers, sell across borders, and help enter foreign markets with strategic guidance.",
      icon: Globe,
      link: "/services/access-to-market",
    },
    {
      title: "Entrepreneurship Training",
      description:
        "Develop individuals for self-employment and business leadership through comprehensive training programs.",
      icon: GraduationCap,
      link: "/services/entrepreneurship-training",
    },
    {
      title: "Facility Management",
      description:
        "Coordinate everything that keeps business systems and assets running smoothly and efficiently.",
      icon: Building,
      link: "/services/facility-management",
    },
    {
      title: "Insurance / Audit and Tax Clearance",
      description:
        "Provide financial protection and audit/tax services for businesses of all sizes.",
      icon: FileText,
      link: "/services/insurance-audit-tax",
    },
    {
      title: "Enterprise Management Software Development",
      description:
        "Develop, maintain, and re-engineer business software solutions tailored to your needs.",
      icon: Code,
      link: "/services/software-development",
    },
    {
      title: "Support Services",
      description:
        "End-to-end support from strategy development to implementation and beyond.",
      icon: Headphones,
      link: "/services/support",
    },
  ];

  const testimonials = [
    {
      name: "Everyday Supermarket",
      position: "Director",
      company: "Everyday Supermarket",
      testimonial:
        "Orchiddigital Consulting transformed our business operations. Their expertise in digital transformation helped us increase efficiency by 40% and expand into new markets.",
      image:
        "https://ik.imagekit.io/shiga/orchid/everydaymart.jpg?updatedAt=1761303462761",
    },
    {
      name: "Zaffiro",
      position: "Founder",
      company: "Zaffiro",
      testimonial:
        "The entrepreneurship training program was exceptional. It gave me the skills and confidence to scale my business successfully.",
      image: "/api/placeholder/200/200",
    },
    {
      name: "Ifeoma",
      position: "Operations Director",
      company: "Ifeoma",
      testimonial:
        "Their facility management services streamlined our operations and reduced costs significantly. Highly recommended!",
      image: "/api/placeholder/200/200",
    },
  ];

  const clients = [
    {
      name: "Rivers State Government",
      logo: "https://ik.imagekit.io/shiga/orchid/rivers.avif?updatedAt=1761441810863",
    },
    {
      name: "PIND",
      logo: "https://ik.imagekit.io/shiga/orchid/pind.svg?updatedAt=1761441906401",
    },
    {
      name: "CBN",
      logo: "https://ik.imagekit.io/shiga/orchid/CBN-logo.jpg?updatedAt=1761442293980",
    },
    {
      name: "SSEDC",
      logo: "https://ik.imagekit.io/shiga/orchid/ssedc.png?updatedAt=1761442222970",
    },
    {
      name: "Sycamore",
      logo: "https://ik.imagekit.io/shiga/orchid/sycamore.png?updatedAt=1761095197346",
    },
    {
      name: "Wakacredit",
      logo: "https://ik.imagekit.io/shiga/orchid/wakacredit.jpg?updatedAt=1761095306364",
    },
    {
      name: "Parallex",
      logo: "https://ik.imagekit.io/shiga/orchid/parallex.jpg?updatedAt=1761095403390",
    },
    {
      name: "Irvin Global",
      logo: "https://ik.imagekit.io/shiga/orchid/IRVIN.logo_.png?updatedAt=1761302883201",
    },
    {
      name: "Alliance Global",
      logo: "https://ik.imagekit.io/shiga/orchid/Screenshot_2025-10-24_at_11.49.50_am-removebg-preview.png?updatedAt=1761303025891",
    },
    {
      name: "Rosabon Financial Services",
      logo: "https://ik.imagekit.io/shiga/orchid/Screenshot_2025-10-24_at_11.51.42_am-removebg-preview.png?updatedAt=1761303135588",
    },
    {
      name: "Nirsalmfb",
      logo: "https://ik.imagekit.io/shiga/orchid/NIRSAL-Microfinance-1.jpg?updatedAt=1761303218873",
    },
    {
      name: "Everyday Supermarket",
      logo: "https://ik.imagekit.io/shiga/orchid/Screenshot%202025-10-24%20at%2011.55.23%E2%80%AFam.png?updatedAt=1761303337687",
    },
  ];

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNextClient = () => {
    setCurrentClientIndex((prev) => (prev + 1) % clients.length);
  };

  const goToPreviousClient = () => {
    setCurrentClientIndex(
      (prev) => (prev - 1 + clients.length) % clients.length
    );
  };

  // Create extended client array for seamless looping
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              Our Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Comprehensive
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed px-4 font-light">
              Accelerate your business growth with our cutting-edge technology
              solutions and strategic consulting services.
            </p>
          </motion.div>

          {/* Main Services - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-green-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6  transition-all duration-500 group-hover:border-primary-300/50 h-full flex flex-col">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110">
                        <Icon className="text-white w-8 h-8 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="pt-3">
                        <Link
                          to={service.link}
                          className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-300 group/link"
                        >
                          Learn More
                          <svg
                            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Other Services - 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={`other-${index}`}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-green-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6  transition-all duration-500 group-hover:border-primary-300/50 h-full flex flex-col">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110">
                        <Icon className="text-white w-8 h-8 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="pt-3">
                        <Link
                          to={service.link}
                          className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-300 group/link"
                        >
                          Learn More
                          <svg
                            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16 sm:mt-20 md:mt-24"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-green-500 hover:from-primary-600 hover:to-green-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-bold transition-all duration-300  transform hover:-translate-y-2 hover:scale-105"
            >
              <span>Explore All Services</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Why Choose Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Proven Excellence in
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Digital Consulting
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed px-4 font-light">
              We combine industry expertise with innovative solutions to deliver
              exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 sm:p-8  transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110 mx-auto">
                    <Users className="text-white w-8 h-8 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Expert Team
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                    Our experienced professionals bring deep industry knowledge
                    and proven expertise to every project.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 sm:p-8  transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110 mx-auto">
                    <TrendingUp className="text-white w-8 h-8 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Proven Results
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                    We deliver measurable outcomes that drive business growth
                    and operational efficiency.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 sm:p-8  transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110 mx-auto">
                    <Globe className="text-white w-8 h-8 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Global Reach
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                    We help businesses expand internationally with our global
                    network and market expertise.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 sm:p-8  transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110 mx-auto">
                    <DollarSign className="text-white w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">4</span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Cost Effective
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                    Our solutions maximize ROI while minimizing costs through
                    efficient processes and smart technology.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Client Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Trusted by
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed px-4 font-light">
              Discover how we've transformed businesses with our proven
              expertise and innovative solutions.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-300/50 overflow-hidden">
                      <div className="flex flex-col lg:flex-row">
                        {/* Client Image Section - Left Side */}
                        <div className="lg:w-1/2 bg-gray-100">
                          <div className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.name} - ${testimonial.position}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to initials if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = "none";
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-full h-full bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold">
                                      ${testimonial.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        </div>

                        {/* Testimonial Content Section - Right Side */}
                        <div className="lg:w-1/2 bg-white p-6 sm:p-8 md:p-12 lg:p-16 relative">
                          {/* Quote Icon */}
                          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 opacity-10">
                            <svg
                              className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary-500"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                          </div>

                          {/* Rating Stars */}
                          <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current mr-1"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-text-primary text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
                            "{testimonial.testimonial}"
                          </blockquote>

                          {/* Author Info */}
                          <div>
                            <div className="font-bold text-text-primary text-sm sm:text-base md:text-lg mb-1">
                              {testimonial.name}
                            </div>
                            <div className="text-text-secondary text-xs sm:text-sm">
                              {testimonial.position} • {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
              {/* Progress Bar */}
              <div className="flex-1 max-w-xs w-full sm:w-auto">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-green-500 h-full transition-all duration-500"
                      style={{
                        width: `${
                          ((currentTestimonial + 1) / testimonials.length) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-text-secondary font-semibold text-sm sm:text-base">
                    {currentTestimonial + 1}/{testimonials.length}
                  </span>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-gradient-to-r from-primary-500 to-green-500 scale-125"
                        : "bg-gray-300 hover:bg-green-300"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={goToPreviousTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm border border-gray-300/50 hover:border-green-300/50 flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-green-500 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNextTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm border border-gray-300/50 hover:border-green-300/50 flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-green-500 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 sm:mt-20 md:mt-24"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center bg-white/60 backdrop-blur-sm border border-gray-300/50 p-6 transition-all duration-300 hover:border-green-300/50"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-text-secondary text-sm font-medium">
                  Happy Clients
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center bg-white/60 backdrop-blur-sm border border-gray-300/50 p-6 transition-all duration-300 hover:border-green-300/50"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-text-secondary text-sm font-medium">
                  Success Rate
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center bg-white/60 backdrop-blur-sm border border-gray-300/50 p-6 transition-all duration-300 hover:border-green-300/50"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-text-secondary text-sm font-medium">
                  Support
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center bg-white/60 backdrop-blur-sm border border-gray-300/50 p-6 transition-all duration-300 hover:border-green-300/50"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent mb-2">
                  5★
                </div>
                <div className="text-text-secondary text-sm font-medium">
                  Average Rating
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Trusted Partners
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Strategic
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed px-4 font-light">
              Collaborating with industry leaders to deliver exceptional results
              across diverse sectors.
            </p>
          </motion.div>

          {/* Partner Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {/* Enterprise Partners */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 sm:p-8  transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110 mx-auto">
                    <Building className="text-white w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">E</span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Enterprise Partners
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                    Fortune 500 companies and large-scale organizations trust us
                    with their digital transformation needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Startup Partners */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 sm:p-8  transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110 mx-auto">
                    <TrendingUp className="text-white w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Startup Partners
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                    Innovative startups and emerging businesses rely on our
                    expertise to scale and grow rapidly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Government Partners */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 sm:p-8  transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center  group- transition-all duration-500 group-hover:scale-110 mx-auto">
                    <Shield className="text-white w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    Government Partners
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                    Public sector organizations partner with us for digital
                    transformation and citizen services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Client Logo Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm border border-gray-300/50  p-6 md:p-12 lg:p-16"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary text-center mb-8 sm:mb-10">
              Our{" "}
              <span className="bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Clients
              </span>
            </h3>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Navigation Buttons */}
              <button
                onClick={goToPreviousClient}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-300/50 hover:border-green-300/50 flex items-center justify-center transition-all duration-300 "
              >
                <svg
                  className="w-5 h-5 text-gray-600 hover:text-green-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNextClient}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-gray-300/50 hover:border-green-300/50 flex items-center justify-center transition-all duration-300 "
              >
                <svg
                  className="w-5 h-5 text-gray-600 hover:text-green-500 transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Client Logos Row - Mobile: 1 logo, SM: 2 logos, MD: 3 logos, LG: 4 logos */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    ((currentClientIndex + clients.length) * 100) / itemsPerView
                  }%)`,
                }}
              >
                {extendedClients.map((client, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 sm:px-3 md:px-4"
                  >
                    <div className="w-full h-20 sm:h-24 md:h-28 bg-gray-50 border border-gray-200 group hover:border-primary-300 hover:bg-white transition-all duration-300 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to a simple colored box with company initial if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                                ${client.name.charAt(0)}
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partnership CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >
            <div className="bg-primary-500 text-white p-6 sm:p-8 md:p-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Partner With Us?
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90">
                Join our network of successful partners and grow your business
                with our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-white text-primary-500 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300  transform hover:-translate-y-1">
                  Become a Partner
                </button>
                <button className="border-2 border-white text-white px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300 ">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Grow Your Business?"
        subtitle="Let Orchiddigital Consulting help you reach your next milestone."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        gradient={true}
      />
    </div>
  );
}
