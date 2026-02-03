import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Search,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import CTASection from "../components/CTASection";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const faqs: FAQItem[] = [
    {
      question: "What does Orchiddigital Consulting Limited do?",
      answer:
        "We provide financial solutions and business consulting services that help individuals, employees, and businesses access funding, investments, and strategic support for growth.",
      category: "services",
    },
    {
      question: "What services do you offer?",
      answer:
        "Our core services include: Salary Loans, Business Loans, Car-Backed Loans, Proof of Funds (Embassy-Compliant), Investment Opportunities, Business Advisory & Development, Facility Management, Enterprise Management & Software development, and Entrepreneurship Training.",
      category: "services",
    },
    {
      question: "Who can apply for your loan services?",
      answer:
        "Employees, business owners, SMEs, and entrepreneurs can apply. Requirements vary by loan type, but basic documentation and income/business verification are needed.",
      category: "services",
    },
    {
      question: "What are your Business Loans for?",
      answer:
        "Business loans support growth activities such as expansion, inventory purchase, operations, and project financing. Loan terms depend on business size, capacity, and documentation.",
      category: "services",
    },
    {
      question: "Do you offer investment opportunities?",
      answer:
        "Yes. We provide safe, structured investment options designed for clients who want steady returns. We guide you through risks, timelines, and expected returns.",
      category: "services",
    },
    {
      question: "What is Proof of Funds, and how does it work?",
      answer:
        "Our Proof-of-Funds service provides clean, professional, embassy-compliant financial documentation for visa applications, business verification, and funding requirements.",
      category: "services",
    },
    {
      question: "How fast is the loan or proof-of-funds process?",
      answer:
        "Processing is fast once documentation is complete. Salary loans and proof-of-funds are typically quicker, while business loans may require more evaluation.",
      category: "process",
    },
    {
      question: "Do I need collateral to access funding?",
      answer:
        "Car-Backed Loans: Yes. Business Loans: May require collateral or guarantors depending on the amount. Salary Loans: Usually no collateral. Proof of Funds: No collateral required.",
      category: "process",
    },
    {
      question: "Are your services legitimate and secure?",
      answer:
        "Yes. Orchiddigital Consulting Limited is fully registered in Nigeria (RC-1668812). We operate with transparency, professionalism, and confidentiality.",
      category: "security",
    },
    {
      question: "Who do you serve?",
      answer:
        "We work with: Government & private employees, Small and medium-scale businesses, and Individuals seeking proof-of-funds or investments.",
      category: "services",
    },
    {
      question: "How do I apply for a service?",
      answer:
        "Contact us via phone, email, or Instagram. Share the service you need, submit required documents, receive an assessment and offer, then approve and complete the process.",
      category: "process",
    },
    {
      question: "Where are you located?",
      answer:
        "NO 314 Peter Odili Extension by Old Refinery Road Opposite Genesis Fastfood, Port Harcourt, Rivers State.",
      category: "contact",
    },
    {
      question: "How can I contact you?",
      answer:
        "Phone: 0907-725-1862. Email: info@orchiddigitalconsulting.com. Instagram: @orchiddigitaledc",
      category: "contact",
    },
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "security", label: "Security" },
    { id: "contact", label: "Contact" },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      action: "Send us an email",
      href: "mailto:info@orchiddigitalconsulting.com",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call us now",
      href: "tel:+2349077251862",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start chatting",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-green-500 mb-6 sm:mb-8">
                <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
                Frequently Asked Questions
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
                Find answers to common questions about our services, processes,
                and how we can help your business grow.
              </p>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5 sm:w-6 sm:h-6" />
              <input
                type="text"
                placeholder="Search for questions or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-4 sm:py-5 md:py-6 text-sm sm:text-base bg-white/80 backdrop-blur-sm border border-gray-300/50 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none transition-colors duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(null);
                }}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm font-semibold transition-all duration-300 touch-manipulation ${activeCategory === category.id
                    ? "bg-gradient-to-r from-primary-500 to-green-500 text-white"
                    : "bg-white/80 backdrop-blur-sm text-text-secondary hover:bg-green-50 hover:text-green-500 border border-gray-300/50 hover:border-green-300/50"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 transition-all duration-500 hover:border-green-300/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-8 text-left flex justify-between items-center hover:bg-green-50/30 transition-colors duration-300 touch-manipulation"
                >
                  <h3 className="text-sm sm:text-base font-bold text-text-primary pr-4 sm:pr-6 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-primary-500 group-hover:text-green-500 transition-colors duration-300 w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 md:px-10 pb-5 sm:pb-6 md:pb-8">
                    <div className="border-t border-gray-100 pt-4 sm:pt-5 md:pt-6">
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-16"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Search className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-text-primary mb-3 sm:mb-4 px-4">
                No results found
              </h3>
              <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto px-4">
                {searchQuery
                  ? "Try adjusting your search terms or browse different categories."
                  : "Try selecting a different category to explore more questions."}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Need Help?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Still Have
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 font-light">
              Our expert team is here to provide personalized support and
              detailed answers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 transition-all duration-500 hover:border-green-300/50"
                >
                  <div className="text-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mx-auto mb-6 sm:mb-8 transition-colors duration-500">
                      <Icon className="text-white transition-colors duration-500 w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm mb-4 sm:mb-6">
                      {method.description}
                    </p>
                    <a
                      href={method.href}
                      className="inline-block bg-gradient-to-r from-primary-500 to-green-500 hover:from-primary-600 hover:to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
                    >
                      {method.action}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Let's discuss your specific needs and create a customized solution that drives real results for your business."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
        gradient={true}
      />
    </div>
  );
}
