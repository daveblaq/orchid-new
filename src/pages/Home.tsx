import HeroSlider from "../components/HeroSlider";
import CTASection from "../components/CTASection";
import { motion } from "framer-motion";
import { useState } from "react";
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

  const services = [
    {
      title: "Access to Market",
      description:
        "Connect bulk purchasers, sell across borders, and help enter foreign markets with strategic guidance.",
      icon: Globe,
    },
    {
      title: "Entrepreneurship Training",
      description:
        "Develop individuals for self-employment and business leadership through comprehensive training programs.",
      icon: GraduationCap,
    },
    {
      title: "Facility Management",
      description:
        "Coordinate everything that keeps business systems and assets running smoothly and efficiently.",
      icon: Building,
    },
    {
      title: "Insurance / Audit and Tax Clearance",
      description:
        "Provide financial protection and audit/tax services for businesses of all sizes.",
      icon: FileText,
    },
    {
      title: "Enterprise Management Software Development",
      description:
        "Develop, maintain, and re-engineer business software solutions tailored to your needs.",
      icon: Code,
    },
    {
      title: "Support Services",
      description:
        "End-to-end support from strategy development to implementation and beyond.",
      icon: Headphones,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp Solutions",
      testimonial:
        "Orchid Digital Consulting transformed our business operations. Their expertise in digital transformation helped us increase efficiency by 40% and expand into new markets.",
    },
    {
      name: "Michael Chen",
      position: "Founder",
      company: "StartupXYZ",
      testimonial:
        "The entrepreneurship training program was exceptional. It gave me the skills and confidence to scale my business successfully.",
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Director",
      company: "Global Enterprises",
      testimonial:
        "Their facility management services streamlined our operations and reduced costs significantly. Highly recommended!",
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6 md:mb-8 px-4">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              Comprehensive solutions designed to accelerate your business
              growth and digital transformation journey.
            </p>
          </motion.div>

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
                  className="group bg-white border border-gray-200 p-6 sm:p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                    <Icon className="text-primary-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Services Section */}
      <section className="py-12 sm:py-16 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Investment Service */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 sm:mb-24 md:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Content Section */}
              <div className="order-2 lg:order-1">
                <div className="text-primary-600 font-bold text-sm sm:text-base mb-4">
                  Investment Service
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 sm:mb-8">
                  Investment - Your Savings, Secured with Great Returns
                </h2>
                <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                  Orchid Investment is an exciting savings feature that helps
                  grow your savings with attractive interest rates. Lock your
                  savings for a specified period and receive interest upfront,
                  instantly!
                </p>
                <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
                  Choose from our flexible investment plans with competitive
                  interest rates designed to maximize your returns.
                </p>

                {/* Interest Rate */}
                <div className="mb-8 sm:mb-10">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-text-primary text-lg sm:text-xl md:text-2xl font-bold">
                      365 days: Earn up to 25% interest
                    </span>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="bg-primary-500 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
                >
                  Get Started Now
                </a>
              </div>

              {/* Image Section */}
              <div className="order-1 lg:order-2">
                <div className="bg-primary-500 p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
                  {/* Background Icons */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <DollarSign size={32} />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-10">
                    <TrendingUp size={28} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
                      Unlock your financial dreams with Orchid Investment!
                    </h3>

                    {/* Interest Rate Highlight */}
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="bg-green-600 p-6 sm:p-8 text-center rounded-lg">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                          25%
                        </div>
                        <div className="text-sm sm:text-base md:text-lg">
                          for 365 days
                        </div>
                      </div>
                    </div>

                    {/* Main Message */}
                    <div className="text-center">
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Orchid{" "}
                        <span className="text-green-400">Investment</span>
                      </h4>
                      <p className="text-lg sm:text-xl md:text-2xl mb-6">
                        Lock your deposit and receive your interest upfront,{" "}
                        <span className="text-green-400">INSTANTLY!</span>
                      </p>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                      <p className="text-sm sm:text-base mb-4">
                        Start your investment journey with us today!
                      </p>
                      <a
                        href="/contact"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                      >
                        Contact Us Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Loan Service */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 sm:mb-24 md:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              {/* Image Section */}
              <div className="order-1">
                <div className="bg-primary-500 p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
                  {/* Background Icons */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <FileText size={32} />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-10">
                    <TrendingUp size={28} />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
                      Get the funding you need with Orchid Loans!
                    </h3>

                    {/* Loan Features */}
                    <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                      <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded">
                        <div className="text-lg sm:text-xl font-bold">
                          Quick Approval
                        </div>
                        <div className="text-sm sm:text-base opacity-90">
                          Get approved in minutes
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded">
                        <div className="text-lg sm:text-xl font-bold">
                          Flexible Terms
                        </div>
                        <div className="text-sm sm:text-base opacity-90">
                          Repay over 3-24 months
                        </div>
                      </div>
                      <div className="bg-white bg-opacity-20 p-3 sm:p-4 rounded">
                        <div className="text-lg sm:text-xl font-bold">
                          Competitive Rates
                        </div>
                        <div className="text-sm sm:text-base opacity-90">
                          Starting from 5% monthly
                        </div>
                      </div>
                    </div>

                    {/* Main Message */}
                    <div className="text-center">
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        Orchid <span className="text-green-400">Loans</span>
                      </h4>
                      <p className="text-lg sm:text-xl md:text-2xl mb-6">
                        Access funds when you need them most,{" "}
                        <span className="text-green-400">FAST & EASY!</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="order-2">
                <div className="text-primary-600 font-bold text-sm sm:text-base mb-4">
                  Loan Service
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 sm:mb-8">
                  Loans - Quick, Flexible, and Affordable Financing
                </h2>
                <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                  Orchid Loans provides quick and flexible financing solutions
                  for your business and personal needs. Get the funds you need
                  with competitive rates and flexible repayment terms.
                </p>
                <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10">
                  Whether you need capital for business expansion, equipment
                  purchase, or personal expenses, we've got you covered with
                  fast approval and transparent terms.
                </p>

                {/* Loan Features */}
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-text-primary text-sm sm:text-base md:text-lg font-medium">
                      Quick approval in 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-text-primary text-sm sm:text-base md:text-lg font-medium">
                      Flexible repayment terms (3-24 months)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-text-primary text-sm sm:text-base md:text-lg font-medium">
                      Competitive interest rates starting from 5%
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-text-primary text-sm sm:text-base md:text-lg font-medium">
                      No hidden fees or charges
                    </span>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="bg-primary-500 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
                >
                  Apply for Loan Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Service Section */}
      <section className="py-12 sm:py-16 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Investment Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-200 p-6 sm:p-8 md:p-12 mb-12 sm:mb-16"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary text-center mb-8 sm:mb-12">
              Investment Calculator
            </h3>

            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Investment Amount Input */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-text-primary mb-3">
                    Investment Amount (₦)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors duration-300 text-sm sm:text-base"
                    onChange={(e) => {
                      const amount = parseFloat(e.target.value);
                      if (!isNaN(amount) && amount > 0) {
                        // Update calculation display
                        const monthlyROI = amount * 0.05;
                        const totalROI = monthlyROI * 12;
                        const totalPayout = totalROI + amount;

                        // Update display elements
                        const monthlyDisplay =
                          document.getElementById("monthly-roi");
                        const totalROIDisplay =
                          document.getElementById("total-roi");
                        const capitalDisplay =
                          document.getElementById("capital-returned");
                        const payoutDisplay =
                          document.getElementById("total-payout");

                        if (monthlyDisplay)
                          monthlyDisplay.textContent = `₦${monthlyROI.toLocaleString()}`;
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
                  <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-4">
                    Your Returns (12 Months)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-text-secondary text-sm sm:text-base">
                        Monthly ROI (5%):
                      </span>
                      <span
                        id="monthly-roi"
                        className="font-semibold text-primary-600"
                      >
                        ₦0
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary text-sm sm:text-base">
                        Total ROI:
                      </span>
                      <span
                        id="total-roi"
                        className="font-semibold text-primary-600"
                      >
                        ₦0
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary text-sm sm:text-base">
                        Capital Returned:
                      </span>
                      <span
                        id="capital-returned"
                        className="font-semibold text-primary-600"
                      >
                        ₦0
                      </span>
                    </div>
                    <div className="border-t border-primary-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-text-primary font-bold text-sm sm:text-base">
                          Total Payout:
                        </span>
                        <span
                          id="total-payout"
                          className="font-bold text-primary-600 text-lg"
                        >
                          ₦0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Terms */}
              <div className="mt-16 sm:mt-20 md:mt-24 p-6 sm:p-8 md:p-10 bg-gray-50 border border-gray-200 max-w-4xl mx-auto">
                <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-6 sm:mb-8">
                  Investment Terms
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-sm sm:text-base">
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-text-primary mb-1">
                      Tenure:
                    </div>
                    <div className="text-text-secondary">12 Months</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-text-primary mb-1">
                      Monthly ROI:
                    </div>
                    <div className="text-text-secondary">5% of Capital</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-text-primary mb-1">
                      Payment Structure:
                    </div>
                    <div className="text-text-secondary">Monthly + Capital</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-text-primary mb-1">
                      Total Return:
                    </div>
                    <div className="text-text-secondary">160% Payout</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investment Plans Table */}
          {/* <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white border border-gray-200 overflow-hidden"
          >
            <div className="bg-primary-500 text-white px-4 sm:px-6 py-4 sm:py-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                Orchid Digital Investment Plans
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-text-primary">
                      S/N
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-text-primary">
                      Investment Amount (₦)
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-text-primary">
                      Monthly ROI (5%) (₦)
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-text-primary">
                      Total ROI (12 Months) (₦)
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-text-primary">
                      Capital Returned (₦)
                    </th>
                    <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-semibold text-text-primary">
                      Total Payout After 12 Months (₦)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      amount: 5000000,
                      monthly: 250000,
                      total: 3000000,
                      payout: 8000000,
                    },
                    {
                      amount: 10000000,
                      monthly: 500000,
                      total: 6000000,
                      payout: 16000000,
                    },
                    {
                      amount: 15000000,
                      monthly: 750000,
                      total: 9000000,
                      payout: 24000000,
                    },
                    {
                      amount: 20000000,
                      monthly: 1000000,
                      total: 12000000,
                      payout: 32000000,
                    },
                    {
                      amount: 25000000,
                      monthly: 1250000,
                      total: 15000000,
                      payout: 40000000,
                    },
                    {
                      amount: 30000000,
                      monthly: 1500000,
                      total: 18000000,
                      payout: 48000000,
                    },
                    {
                      amount: 40000000,
                      monthly: 2000000,
                      total: 24000000,
                      payout: 64000000,
                    },
                    {
                      amount: 50000000,
                      monthly: 2500000,
                      total: 30000000,
                      payout: 80000000,
                    },
                    {
                      amount: 75000000,
                      monthly: 3750000,
                      total: 45000000,
                      payout: 120000000,
                    },
                    {
                      amount: 100000000,
                      monthly: 5000000,
                      total: 60000000,
                      payout: 160000000,
                    },
                  ].map((plan, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-text-primary">
                        {index + 1}
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-text-primary font-medium">
                        {plan.amount.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-text-primary">
                        {plan.monthly.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-text-primary">
                        {plan.total.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-text-primary">
                        {plan.amount.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-text-primary font-bold text-primary-600">
                        {plan.payout.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div> */}

          {/* Investment CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-primary-500 text-white p-6 sm:p-8 md:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Start Investing?
              </h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
                Secure your financial future with our proven investment plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block text-center"
                >
                  Start Investing Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6 md:mb-8 px-4">
              Why Choose Us
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              We combine industry expertise with innovative solutions to deliver
              exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                <Users className="text-primary-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                Expert Team
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Our experienced professionals bring deep industry knowledge and
                proven expertise to every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                <TrendingUp className="text-primary-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                Proven Results
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                We deliver measurable outcomes that drive business growth and
                operational efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                <Globe className="text-primary-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                Global Reach
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                We help businesses expand internationally with our global
                network and market expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                <DollarSign className="text-primary-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                Cost Effective
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                Our solutions maximize ROI while minimizing costs through
                efficient processes and smart technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6 md:mb-8 px-4">
              Client Success Stories
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              Trusted by industry leaders who've transformed their businesses
              with our expertise.
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
                    <div className="bg-white border border-gray-200 overflow-hidden">
                      <div className="bg-primary-500 p-6 sm:p-8 md:p-12 lg:p-16 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 opacity-20">
                          <svg
                            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white"
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
                        <blockquote className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 sm:mb-8 md:mb-12 font-light">
                          "{testimonial.testimonial}"
                        </blockquote>

                        {/* Author Info */}
                        <div>
                          <div className="font-bold text-white text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                            {testimonial.name}
                          </div>
                          <div className="text-white/90 text-sm sm:text-base md:text-lg">
                            {testimonial.position} • {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              {/* Progress Bar */}
              <div className="flex-1 max-w-xs w-full sm:w-auto">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-full bg-gray-200 h-1">
                    <div
                      className="bg-primary-500 h-full transition-all duration-500"
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
                        ? "bg-primary-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={goToPreviousTestimonial}
                  className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
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
                  className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
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
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                  500+
                </div>
                <div className="text-text-secondary text-sm sm:text-base">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                  98%
                </div>
                <div className="text-text-secondary text-sm sm:text-base">
                  Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                  24/7
                </div>
                <div className="text-text-secondary text-sm sm:text-base">
                  Support
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                  5★
                </div>
                <div className="text-text-secondary text-sm sm:text-base">
                  Average Rating
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6 md:mb-8 px-4">
              Trusted Partners
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              Collaborating with industry leaders to deliver exceptional results
              across diverse sectors.
            </p>
          </motion.div>

          {/* Partner Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
            {/* Enterprise Partners */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 group hover:border-primary-300 hover:shadow-xl transition-all duration-500"
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                  <Building className="text-primary-600 group-hover:text-white transition-colors duration-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  Enterprise Partners
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  Fortune 500 companies and large-scale organizations trust us
                  with their digital transformation needs.
                </p>
              </div>
            </motion.div>

            {/* Startup Partners */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 group hover:border-primary-300 hover:shadow-xl transition-all duration-500"
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                  <TrendingUp className="text-primary-600 group-hover:text-white transition-colors duration-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  Startup Partners
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  Innovative startups and emerging businesses rely on our
                  expertise to scale and grow rapidly.
                </p>
              </div>
            </motion.div>

            {/* Government Partners */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border border-gray-200 p-4 sm:p-6 md:p-8 group hover:border-primary-300 hover:shadow-xl transition-all duration-500"
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary-500 transition-colors duration-500">
                  <Shield className="text-primary-600 group-hover:text-white transition-colors duration-500 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  Government Partners
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  Public sector organizations partner with us for digital
                  transformation and citizen services.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Client Logo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white border border-gray-200 p-6 sm:p-8 md:p-12"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary text-center mb-8 sm:mb-12">
              Our Clients
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-12">
              {[
                { name: "TechCorp", logo: "/api/placeholder/120/80" },
                { name: "StartupXYZ", logo: "/api/placeholder/120/80" },
                { name: "Global Enterprises", logo: "/api/placeholder/120/80" },
                { name: "Innovation Labs", logo: "/api/placeholder/120/80" },
                { name: "Digital Solutions", logo: "/api/placeholder/120/80" },
                { name: "Future Systems", logo: "/api/placeholder/120/80" },
                { name: "Smart Tech", logo: "/api/placeholder/120/80" },
                { name: "NextGen Corp", logo: "/api/placeholder/120/80" },
                { name: "Alpha Ventures", logo: "/api/placeholder/120/80" },
                { name: "Beta Industries", logo: "/api/placeholder/120/80" },
                { name: "Gamma Tech", logo: "/api/placeholder/120/80" },
                { name: "Delta Solutions", logo: "/api/placeholder/120/80" },
              ].map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-16 sm:h-20 md:h-24 bg-gray-50 border border-gray-200 group hover:border-primary-300 hover:bg-white transition-all duration-300"
                >
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
                          <div class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                            ${client.name.charAt(0)}
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              ))}
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
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Partner With Us?
              </h3>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
                Join our network of successful partners and grow your business
                with our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-white text-primary-600 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Become a Partner
                </button>
                <button className="border-2 border-white text-white px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-lg">
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
        subtitle="Let Orchid Digital Consulting help you reach your next milestone."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        gradient={true}
      />
    </div>
  );
}
