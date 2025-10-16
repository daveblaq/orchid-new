import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function InvestmentService() {
  const features = [
    {
      icon: TrendingUp,
      title: "High Returns",
      description:
        "Earn up to 5% monthly returns on investments below ₦50M, or 3.3% monthly for ₦50M and above.",
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description:
        "Your capital is protected with our robust security measures and risk management protocols.",
    },
    {
      icon: Clock,
      title: "365-Day Duration",
      description:
        "Fixed 365-day investment period with guaranteed returns and transparent terms.",
    },
    {
      icon: DollarSign,
      title: "Flexible Amounts",
      description:
        "Invest any amount from ₦100,000 to unlimited amounts with competitive rates.",
    },
  ];

  const investmentPlans = [
    {
      amount: "Below ₦50M",
      rate: "5%",
      duration: "365 days",
      description: "Higher returns for investments below ₦50 million",
    },
    {
      amount: "₦50M and Above",
      rate: "3.3%",
      duration: "365 days",
      description: "Competitive rates for large investments",
    },
  ];

  const benefits = [
    "Monthly returns paid directly to your account",
    "Capital guaranteed at maturity",
    "No hidden fees or charges",
    "Flexible investment amounts",
    "Professional portfolio management",
    "24/7 customer support",
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
                <TrendingUp size={16} />
                Investment Service
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            >
              Grow Your Wealth with
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Secure Investments
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Invest with confidence and earn attractive returns on your
              capital. Our investment service offers competitive rates with
              guaranteed security and transparent terms.
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
                Start Investing
                <TrendingUp size={20} />
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
              Why Choose Our Investment Service
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              We provide secure, profitable investment opportunities with
              transparent terms and guaranteed returns.
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

      {/* Investment Plans Section */}
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
              Investment Plans
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              Choose the investment plan that best suits your financial goals
              and risk tolerance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {investmentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 hover:border-primary-300/50 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-500 mb-2">
                    {plan.rate}
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-2">
                    Monthly Returns
                  </div>
                  <div className="text-sm text-text-secondary mb-4">
                    {plan.amount}
                  </div>
                  <div className="text-sm text-text-secondary mb-6">
                    {plan.description}
                  </div>
                  <div className="bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold inline-block">
                    {plan.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Calculator Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
              Investment Calculator
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              Calculate your potential returns with our investment calculator.
              See how much you can earn based on your investment amount.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 md:p-12 max-w-4xl mx-auto"
          >
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Investment Amount Input */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Investment Amount (₦)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter amount (e.g., 1,000,000)"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors duration-300 text-sm sm:text-base"
                    onChange={(e) => {
                      // Remove commas and get numeric value
                      const numericValue = e.target.value.replace(/,/g, "");
                      const amount = parseFloat(numericValue);

                      // Format the display with commas
                      if (numericValue && !isNaN(amount) && amount > 0) {
                        e.target.value = amount.toLocaleString();
                      } else if (numericValue === "") {
                        e.target.value = "";
                      }

                      if (!isNaN(amount) && amount > 0) {
                        // Determine interest rate based on amount
                        // Below 50M = 5% monthly, 50M and above = 3.3% monthly
                        const interestRate = amount >= 50000000 ? 0.033 : 0.05;
                        const rateLabel = amount >= 50000000 ? "3.3%" : "5%";

                        // Update calculation display
                        const monthlyROI = amount * interestRate;
                        const totalROI = monthlyROI * 12;
                        const totalPayout = totalROI + amount;

                        // Update display elements
                        const monthlyDisplay =
                          document.getElementById("monthly-roi");
                        const monthlyLabel =
                          document.getElementById("monthly-roi-label");
                        const totalROIDisplay =
                          document.getElementById("total-roi");
                        const capitalDisplay =
                          document.getElementById("capital-returned");
                        const payoutDisplay =
                          document.getElementById("total-payout");

                        if (monthlyDisplay)
                          monthlyDisplay.textContent = `₦${monthlyROI.toLocaleString()}`;
                        if (monthlyLabel)
                          monthlyLabel.textContent = `Monthly ROI (${rateLabel}):`;
                        if (totalROIDisplay)
                          totalROIDisplay.textContent = `₦${totalROI.toLocaleString()}`;
                        if (capitalDisplay)
                          capitalDisplay.textContent = `₦${amount.toLocaleString()}`;
                        if (payoutDisplay)
                          payoutDisplay.textContent = `₦${totalPayout.toLocaleString()}`;
                      }
                    }}
                  />
                </div>

                {/* Investment Summary */}
                <div className="bg-primary-50 p-4 sm:p-6 border border-primary-200">
                  <h4 className="text-base sm:text-lg font-bold text-text-primary mb-3">
                    Your Returns (12 Months)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span
                        id="monthly-roi-label"
                        className="text-text-secondary text-sm"
                      >
                        Monthly ROI (5%):
                      </span>
                      <span
                        id="monthly-roi"
                        className="font-semibold text-primary-500"
                      >
                        ₦0
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary text-sm">
                        Total ROI:
                      </span>
                      <span
                        id="total-roi"
                        className="font-semibold text-primary-500"
                      >
                        ₦0
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary text-sm">
                        Capital Returned:
                      </span>
                      <span
                        id="capital-returned"
                        className="font-semibold text-primary-500"
                      >
                        ₦0
                      </span>
                    </div>
                    <div className="border-t border-primary-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-text-primary font-bold text-sm">
                          Total Payout:
                        </span>
                        <span
                          id="total-payout"
                          className="font-bold text-primary-500 text-lg"
                        >
                          ₦0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Terms */}
              <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-primary-500 to-green-500 p-6 md:p-8 text-white text-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border border-white"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold mb-4">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Investment Terms
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-4">
                      Fixed Tenure
                    </h4>
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="text-3xl sm:text-4xl font-bold">365</div>
                      <div className="text-left">
                        <div className="text-base sm:text-lg font-bold">
                          Days
                        </div>
                        <div className="text-white/80 text-sm">
                          Investment Period
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-white/90 text-sm">
                      Lock your savings for 365 days and earn competitive
                      returns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
                Investment Benefits
              </h2>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                Our investment service is designed to provide maximum returns
                with minimal risk, backed by our commitment to transparency and
                security.
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
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                Trusted by Thousands
              </h3>
              <p className="text-sm mb-6 opacity-90">
                Join thousands of satisfied investors who have grown their
                wealth with our secure investment platform.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">₦2B+</div>
                  <div className="text-sm opacity-90">Invested</div>
                </div>
                <div>
                  <div className="text-xl font-bold">5,000+</div>
                  <div className="text-sm opacity-90">Investors</div>
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
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get started with our investment service today and begin earning
              attractive returns on your capital.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us Now
              <TrendingUp size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
