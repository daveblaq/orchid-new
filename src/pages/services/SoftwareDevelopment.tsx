import { motion } from "framer-motion";
import { Code, Cpu, Smartphone, CheckCircle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function SoftwareDevelopment() {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description:
        "Tailored software solutions designed specifically for your business needs and requirements.",
    },
    {
      icon: Cpu,
      title: "System Maintenance",
      description:
        "Ongoing maintenance and support to keep your software systems running optimally.",
    },
    {
      icon: Smartphone,
      title: "Re-engineering",
      description:
        "Modernize and upgrade existing systems to improve performance and functionality.",
    },
    {
      icon: Users,
      title: "Team Support",
      description:
        "Dedicated development team to support your business software needs.",
    },
  ];

  const services = [
    {
      title: "Enterprise Software Development",
      description:
        "Custom enterprise software solutions tailored to your business processes.",
      features: [
        "Custom applications",
        "Database design",
        "API development",
        "Integration services",
      ],
    },
    {
      title: "System Maintenance & Support",
      description:
        "Comprehensive maintenance and support services for your existing software systems.",
      features: [
        "Bug fixes",
        "Performance optimization",
        "Security updates",
        "24/7 support",
      ],
    },
    {
      title: "Software Re-engineering",
      description:
        "Modernize legacy systems with cutting-edge technology and improved architecture.",
      features: [
        "Legacy modernization",
        "Architecture redesign",
        "Performance enhancement",
        "Technology upgrade",
      ],
    },
  ];

  const benefits = [
    "Custom software solutions",
    "Scalable architecture design",
    "24/7 technical support",
    "Regular system updates",
    "Performance optimization",
    "Security compliance",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-6">
                <Code size={16} />
                Enterprise Management Software Development
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg sm:text-lg md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
            >
              Develop, Maintain, and
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Re-engineer Software
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Develop, maintain, and re-engineer business software solutions
              tailored to your needs with our expert team of developers and
              engineers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-green-500 hover:from-primary-600 hover:to-green-600 text-white px-8 py-4 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Project
                <Code size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-text-primary px-8 py-4 text-sm font-semibold hover:bg-white transition-all duration-300 border border-gray-300/50"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-lg sm:text-lg font-bold text-text-primary mb-4">
              Why Choose Our Software Development
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              We provide comprehensive software development, maintenance, and
              re-engineering services to meet your business technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Software Development Highlight Image */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                Technology Solutions
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Custom Software Solutions
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our expert development team creates, maintains, and modernizes software solutions tailored to your business needs. From enterprise applications to system re-engineering, we deliver high-quality technology solutions.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom software development",
                  "System maintenance and support",
                  "Legacy system modernization",
                  "Scalable architecture design",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="https://ik.imagekit.io/shiga/orchid/software.jpg?updatedAt=1763192755920"
                  alt="Software development service"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-lg sm:text-lg font-bold text-text-primary mb-4">
              Our Software Development Services
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              Comprehensive software development services from initial design to
              ongoing maintenance and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 hover:border-primary-300/50 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-primary-500 mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg sm:text-lg font-bold text-text-primary mb-6">
                Software Development Benefits
              </h2>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                Our software development services help you build, maintain, and
                optimize business software solutions for maximum efficiency and
                performance.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-500 to-green-500 p-8 text-white text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Expert Development Team
              </h3>
              <p className="text-sm mb-6 opacity-90">
                Our experienced developers and engineers deliver high-quality
                software solutions using the latest technologies and best
                practices.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Projects</div>
                </div>
                <div>
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-500 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Ready to Build Your Software Solution?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let our expert team help you develop, maintain, or re-engineer
              software solutions tailored to your business needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Project
              <Code size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
