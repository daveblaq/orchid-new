import { motion } from "framer-motion";
import CTASection from "../components/CTASection";
import {
  Globe,
  GraduationCap,
  Building,
  FileText,
  Code,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Access to Market",
      icon: Globe,
      description:
        "Expand your business reach and connect with global opportunities through our comprehensive market access solutions.",
      details: [
        "International market entry strategy development",
        "Bulk purchaser network connections",
        "Cross-border sales facilitation",
        "Foreign market penetration support",
        "Trade compliance and regulatory guidance",
        "Market research and competitive analysis",
      ],
      benefits: [
        "Increase revenue by 40% on average",
        "Access to 50+ international markets",
        "Reduced market entry time by 60%",
        "Comprehensive compliance support",
      ],
    },
    {
      title: "Entrepreneurship Training",
      icon: GraduationCap,
      description:
        "Develop the next generation of business leaders with our comprehensive entrepreneurship and leadership training programs.",
      details: [
        "Business plan development and validation",
        "Leadership and management skills training",
        "Financial literacy and investment readiness",
        "Marketing and sales strategy development",
        "Technology adoption and digital transformation",
        "Mentorship and networking opportunities",
      ],
      benefits: [
        "95% business success rate",
        "500+ entrepreneurs trained",
        "Comprehensive mentorship program",
        "Industry-leading curriculum",
      ],
    },
    {
      title: "Facility Management",
      icon: Building,
      description:
        "Optimize your business operations with our comprehensive facility management and system coordination services.",
      details: [
        "Asset management and maintenance planning",
        "System integration and optimization",
        "Operational efficiency improvements",
        "Resource allocation and utilization",
        "Safety and compliance management",
        "Performance monitoring and reporting",
      ],
      benefits: [
        "30% reduction in operational costs",
        "99% uptime guarantee",
        "24/7 monitoring and support",
        "Predictive maintenance systems",
      ],
    },
    {
      title: "Insurance / Audit and Tax Clearance",
      icon: FileText,
      description:
        "Ensure financial compliance and protection with our comprehensive insurance, audit, and tax clearance services.",
      details: [
        "Comprehensive insurance coverage assessment",
        "Financial audit and compliance reviews",
        "Tax planning and optimization strategies",
        "Regulatory compliance management",
        "Risk assessment and mitigation",
        "Documentation and reporting support",
      ],
      benefits: [
        "100% compliance guarantee",
        "Average 25% tax savings",
        "Expert audit support",
        "Comprehensive risk coverage",
      ],
    },
    {
      title: "Enterprise Management Software Development",
      icon: Code,
      description:
        "Transform your business operations with custom software solutions designed to meet your specific needs and objectives.",
      details: [
        "Custom software development and implementation",
        "Legacy system modernization and re-engineering",
        "Cloud migration and integration services",
        "API development and system integration",
        "User interface and experience design",
        "Ongoing maintenance and support",
      ],
      benefits: [
        "50% increase in productivity",
        "Custom-built solutions",
        "Seamless system integration",
        "Ongoing technical support",
      ],
    },
    {
      title: "Access to Finance",
      icon: DollarSign,
      description:
        "Secure the funding you need to grow and expand your business through our extensive network of financial partners.",
      details: [
        "Business loan and credit facilitation",
        "Investment capital sourcing and preparation",
        "Financial planning and projections",
        "Grant and funding opportunity identification",
        "Banking relationship management",
        "Financial due diligence support",
      ],
      benefits: [
        "90% funding success rate",
        "Access to $50M+ funding pool",
        "Expedited approval process",
        "Comprehensive financial planning",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description:
        "We conduct a comprehensive analysis of your business needs, challenges, and growth opportunities.",
      icon: Target,
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Our experts create a tailored strategy and roadmap designed specifically for your objectives.",
      icon: Users,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We execute the solution with precision, providing ongoing support throughout the process.",
      icon: Zap,
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "Continuous monitoring, refinement, and optimization to ensure sustained success and growth.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 px-4">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
                Comprehensive business solutions designed to drive growth,
                efficiency, and success across all aspects of your organization.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl"
                >
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                      <Icon className="text-primary-600 group-hover:text-white transition-colors duration-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="text-accent-500 mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                        <span className="text-text-secondary text-xs sm:text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-gray-100 group-hover:border-primary-200 transition-colors duration-300">
                    <span className="text-primary-600 font-semibold text-base sm:text-lg group-hover:text-primary-700 transition-colors duration-300 flex items-center">
                      Learn More{" "}
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 px-4">
              Service Details
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              Explore our comprehensive service offerings in detail and discover
              how we can help your business thrive.
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Panel - Content */}
                    <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white relative">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white"></div>
                        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border border-white"></div>
                        <div className="absolute top-1/2 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-white"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 md:mr-6">
                            <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-12 opacity-90">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                          {service.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start">
                              <CheckCircle className="text-white mr-2 sm:mr-3 mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-white/90 text-sm sm:text-base md:text-lg">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Panel - Benefits & Stats */}
                    <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-50 flex flex-col justify-center">
                      <div className="mb-8 sm:mb-10 md:mb-12">
                        <h4 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8">
                          Why Choose This Service?
                        </h4>
                        <div className="space-y-4 sm:space-y-6">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-start"
                            >
                              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-accent-500 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                                <CheckCircle className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                              </div>
                              <span className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6 sm:pt-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                          <div className="mb-4 sm:mb-0">
                            <div className="text-xl sm:text-2xl font-bold text-primary-600">
                              Get Started
                            </div>
                            <div className="text-text-secondary text-sm sm:text-base">
                              Schedule a consultation
                            </div>
                          </div>
                          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center w-full sm:w-auto justify-center sm:justify-start">
                            Learn More{" "}
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 px-4">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              We follow a proven methodology to ensure successful project
              delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-100 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-primary-500 transition-colors duration-500 relative">
                      <Icon className="text-primary-600 group-hover:text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                      <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-primary-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm sm:text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let's discuss your specific needs and create a customized solution that drives real results."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
        gradient={true}
      />
    </div>
  );
}
