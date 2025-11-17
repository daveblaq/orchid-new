import { motion } from "framer-motion";
import { DollarSign, Clock, Shield, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoanService() {
  const features = [
    {
      icon: DollarSign,
      title: "Quick Access to Capital",
      description:
        "Get fast approval and access to funds within 24-48 hours of application approval.",
    },
    {
      icon: Clock,
      title: "6-Month Duration",
      description:
        "Flexible 6-month repayment period with manageable monthly installments.",
    },
    {
      icon: Shield,
      title: "Competitive Rates",
      description:
        "Attractive interest rates with transparent terms and no hidden charges.",
    },
    {
      icon: FileText,
      title: "Simple Application",
      description:
        "Streamlined application process with minimal documentation requirements.",
    },
  ];

  const loanTypes = [
    {
      name: "Business Loan",
      amount: "₦1M - ₦10M",
      duration: "6 months",
      description:
        "Perfect for business expansion, inventory, or working capital needs.",
      features: ["Fast approval", "Flexible terms", "No collateral required"],
    },
    {
      name: "Salary Loan",
      amount: "₦1M - ₦5M",
      duration: "6 months",
      description:
        "Quick personal financing for emergencies or personal expenses.",
      features: [
        "Instant application",
        "Quick disbursement",
        "Competitive rates",
      ],
    },
  ];

  const benefits = [
    "Fast approval process (24-48 hours)",
    "No hidden fees or charges",
    "Flexible repayment options",
    "Competitive interest rates",
    "Minimal documentation required",
    "Dedicated customer support",
  ];

  const requirements = [
    "Valid government-issued ID",
    "Proof of income (3 months)",
    "Bank statement (6 months)",
    "Business registration (for business loans)",
    "Utility bill (not older than 3 months)",
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
                <DollarSign size={16} />
                Orchiddigital Loan Service
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg sm:text-lg md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
            >
              Quick Access to
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Capital When You Need It
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Get the funding you need with our fast and flexible loan service.
              Competitive rates, quick approval, and flexible repayment terms
              designed for your success.
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
                Apply Now
              
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
              Why Choose Our Loan Service
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              We provide fast, flexible, and affordable loan solutions designed
              to meet your financial needs.
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

      {/* Loan Types Section */}
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
              Loan Types
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              Choose the loan type that best fits your financial needs and
              goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 hover:border-primary-300/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-500 mb-2">
                    {loan.name}
                  </h3>
                  <div className="text-sm font-semibold text-text-primary mb-2">
                    {loan.amount}
                  </div>
                  <div className="bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold inline-block mb-4">
                    {loan.duration}
                  </div>
                  <p className="text-text-secondary">{loan.description}</p>
                </div>

                <div className="space-y-2">
                  {loan.features.map((feature, featureIndex) => (
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

      {/* Benefits and Requirements Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-lg sm:text-lg font-bold text-text-primary mb-6">
                Loan Benefits
              </h2>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                Our loan service is designed to provide quick access to capital
                with flexible terms and competitive rates.
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
            >
              <h2 className="text-lg sm:text-lg font-bold text-text-primary mb-6">
                Requirements
              </h2>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                Simple documentation requirements to get your loan approved
                quickly and efficiently.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FileText className="text-primary-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{requirement}</span>
                  </motion.div>
                ))}
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
              Ready to Get Your Loan?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Apply for your loan today and get quick approval with competitive
              rates and flexible terms.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Apply Now
        
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
