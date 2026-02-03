import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  TrendingUp,
  CreditCard,
  Headphones,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Access to Market",
      link: "/services/access-to-market",
      icon: Globe,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_smaaidsmaaidsmaa.png",
      description:
        "Practical and strategic strategies to enter and grow in high-value international markets through our direct buyer connections.",
      details: [
        "International entry strategy development",
        "Direct connections to bulk buyers globally",
        "Cross-border sales and transaction support",
        "Strategic transition to foreign markets",
        "Regulatory and trade documentation guidance",
        "Market insights and competitor analysis",
      ],
      benefits: [
        "Grow revenue faster in high-value markets",
        "Access 50+ international markets easily",
        "Significantly reduced market entry time",
        "End-to-end regulatory compliance guidance",
      ],
    },
    {
      title: "Entrepreneurship Training",
      link: "/services/entrepreneurship-training",
      icon: GraduationCap,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_olubk3olubk3olub.png",
      description:
        "Equipping aspiring and growing entrepreneurs with the practical skills, mindset, and support needed to build sustainable businesses.",
      details: [
        "Idea creation, refinement, and validation",
        "Practical leadership and management training",
        "Financial mastery for investor attraction",
        "Growth-driving marketing and sales strategies",
        "Tech adoption for operational efficiency",
        "Access to mentor and industry networks",
      ],
      benefits: [
        "Practical, industry-relevant curriculum",
        "Track record of successful business growth",
        "Ongoing mentorship beyond training",
        "Access to valuable expert networks",
      ],
    },
    {
      title: "Facility Management",
      link: "/services/facility-management",
      icon: Building,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/fm.5481be26.jpeg",
      description:
        "Keep your assets, systems, and operations working smoothly together so you can focus on growing your business without disruptions.",
      details: [
        "Proactive asset management and planning",
        "Smart system integration for reliability",
        "Day-to-day operational efficiency boosts",
        "Resource optimization to control costs",
        "Safety standards and regulatory compliance",
        "Predictive maintenance for asset longevity",
      ],
      benefits: [
        "Significantly lower operational costs",
        "Reliable systems with minimal downtime",
        "24/7 monitoring and issue escalation",
        "Proactive asset lifespan extension",
      ],
    },
    {
      title: "Insurance / Audit and Tax Clearance",
      link: "/services/insurance-audit-tax",
      icon: FileText,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_rte1zhrte1zhrte1.png",
      description:
        "Taking the complexity out of insurance, audits, and tax matters so you can operate with confidence and financial soundness.",
      details: [
        "Insurance coverage assessment and review",
        "Financial audits and compliance checks",
        "Smart tax planning and risk reduction",
        "Ongoing regulatory alignment support",
        "Risk identification and mitigation",
        "Audit-ready documentation and reporting",
      ],
      benefits: [
        "Confidence in meeting all regulations",
        "Reduced liabilities and improved cash flow",
        "Experienced guidance through audits",
        "Well-structured protective risk coverage",
      ],
    },
    {
      title: "Enterprise Management Software Development",
      link: "/services/software-development",
      icon: Code,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_lv12qalv12qalv12.png",
      description:
        "Build software that fits the way your business actually works—streamlining operations, improving visibility, and scaling with confidence.",
      details: [
        "Custom software tailored to your processes",
        "Legacy system modernization and upgrades",
        "Secure cloud migration and integration",
        "API development for tool connectivity",
        "User-friendly interfaces for productivity",
        "Ongoing technical system maintenance",
      ],
      benefits: [
        "Noticeable team productivity improvements",
        "Purpose-built, non-off-the-shelf tools",
        "Seamless workflow system integration",
        "Reliable, ongoing technical support",
      ],
    },
    {
      title: "Access to Finance",
      link: "/services/access-to-finance",
      icon: DollarSign,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_3hr7iz3hr7iz3hr7.png",
      description:
        "Secure the capital you need to scale through our expertise in loan facilitation, investment sourcing, and financial planning.",
      details: [
        "Business loan and credit facilitation",
        "Investment capital sourcing and preparation",
        "Financial planning and ROI projections",
        "Grant and funding opportunity identification",
        "Banking relationship management",
        "Financial due diligence and compliance",
      ],
      benefits: [
        "High success rate in funding approvals",
        "Access to diverse capital and grant sources",
        "Professional investment readiness",
      ],
    },
    {
      title: "Orchiddigital Investment Service",
      link: "/services/investment",
      icon: TrendingUp,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_5yy1cz5yy1cz5yy1.png",
      description:
        "Grow your savings with attractive interest rates. Lock your savings for 365 days and receive competitive returns on your investment.",
      details: [
        "5% monthly ROI for investments below ₦50M",
        "3.3% monthly ROI for investments ₦50M and above",
        "Fixed 365-day investment period",
        "Monthly interest payments plus capital return",
        "Secure and transparent investment platform",
        "Instant interest calculation and tracking",
      ],
      benefits: [
        "Up to 60% total annual return",
        "Flexible investment amounts",
        "Monthly ROI payments",
        "Guaranteed capital return",
      ],
    },
    {
      title: "Orchiddigital Loan Service",
      link: "/services/loan",
      icon: CreditCard,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_jpg7sqjpg7sqjpg7.png",
      description:
        "Access funds when you need them most with our fast and easy loan service. Get the financial support your business needs to thrive.",
      details: [
        "6-month loan duration",
        "Quick approval process",
        "Competitive interest rates",
        "Flexible repayment terms",
        "Business-focused loan products",
        "Minimal documentation required",
      ],
      benefits: [
        "Fast approval within 24-48 hours",
        "Transparent fee structure",
        "6-month flexible repayment",
        "Dedicated loan support team",
      ],
    },
    {
      title: "Sourcing of Goods and Services",
      link: "/contact",
      icon: Target,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_vubz6fvubz6fvubz.png",
      description:
        "We handle the complexity of finding the right suppliers and managing procurement so you get the best quality at the right price.",
      details: [
        "Reliable supplier identification and vetting",
        "Negotiation for better pricing and terms",
        "Quality control and inspection services",
        "Logistics and supply chain coordination",
        "Bulk purchasing strategies for cost savings",
        "Vendor relationship management",
      ],
      benefits: [
        "Significant savings on procurement costs",
        "Access to a verified network of suppliers",
        "Guaranteed quality and delivery timelines",
        "Reduced administrative burden for your team",
      ],
    },
    {
      title: "Business Advisory and Support",
      link: "/services/support",
      icon: Headphones,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/support.jpg?updatedAt=1763192755920",
      description:
        "We provide expert guidance and hands-on support to help you solve business challenges, improve performance, and find the clearest path to growth.",
      details: [
        "General business consulting and problem solving",
        "Strategic advice on scaling and growth",
        "Operational troubleshooting and optimization",
        "Strategic partnership identification",
        "Performance improvement strategies",
        "Expert guidance for business transitions",
      ],
      benefits: [
        "Practical, actionable real-world advice",
        "Experienced multi-industry consultants",
        "Hands-on implementation support",
        "Measurable business improvements",
      ],
    },
    {
      title: "Human Resource Training and Management",
      link: "/contact",
      icon: Users,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_m9c1zhm9c1zhm9c1.png",
      description:
        "We help you build and manage high-performing teams through professional training, recruitment, and structured HR systems.",
      details: [
        "Staff recruitment and talent placement",
        "Professional skill development training",
        "HR policy and system development",
        "Performance management systems",
        "Team building and culture development",
        "Employee engagement and retention",
      ],
      benefits: [
        "Improved team productivity and morale",
        "Compliance with latest labor regulations",
        "Lower staff turnover and better hiring",
        "Structured, professional work environment",
      ],
    },
    {
      title: "Project Management",
      link: "/contact",
      icon: Zap,
      backgroundImage:
        "https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_px3v5kpx3v5kpx3v.png",
      description:
        "We ensure your projects stay on track, on budget, and deliver the results you expect through professional planning and execution.",
      details: [
        "Comprehensive project planning and scope",
        "Timeline and milestone management",
        "Budget planning and cost control",
        "Risk identification and mitigation",
        "Resource allocation and coordination",
        "Progress tracking and quality assurance",
      ],
      benefits: [
        "Projects delivered on time and on budget",
        "Reduced risk of project failure or delays",
        "Clear visibility into project progress",
        "Professional execution from start to finish",
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


      {/* Detailed Services Section */}
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
              Service Details
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Explore Our
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Service Offerings
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 font-light">
              Discover how we can help your business thrive with our
              comprehensive solutions.
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-300/50 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Panel - Content */}
                    <div className="p-6 sm:p-8 text-white relative overflow-hidden">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${service.backgroundImage}')`,
                        }}
                      />
                      {/* Black Overlay */}
                      <div className="absolute inset-0 bg-black/70" />

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 md:mr-6">
                            <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                          </div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 opacity-90">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                          {service.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start">
                              <CheckCircle className="text-white mr-2 sm:mr-3 mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                              <span className="text-white/90 text-sm">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Panel - Benefits & Stats */}
                    <div className="p-6 sm:p-8 bg-gray-50 flex flex-col justify-center">
                      <div className="mb-8 sm:mb-10 md:mb-12">
                        <h4 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
                          Why Choose This Service?
                        </h4>
                        <div className="space-y-4 sm:space-y-6">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex items-start"
                            >
                              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                                <CheckCircle className="text-white w-3 h-3 sm:w-4 sm:h-4" />
                              </div>
                              <span className="text-text-secondary text-sm leading-relaxed">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6 sm:pt-8">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                          <div className="mb-4 sm:mb-0">
                            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                              Get Started
                            </div>
                            <div className="text-text-secondary text-sm">
                              Schedule a consultation
                            </div>
                          </div>
                          <Link
                            to={service.link ?? "/contact"}
                            className="bg-gradient-to-r from-primary-500 to-green-500 hover:from-primary-600 hover:to-green-600 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center w-full sm:w-auto justify-center sm:justify-start"
                          >
                            Learn More{" "}
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                          </Link>
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
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Proven
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 font-light">
              Ensuring successful project delivery and client satisfaction every
              time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
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
                  className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 transition-all duration-500 hover:border-green-300/50 "
                >
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mx-auto mb-6 sm:mb-8  transition-colors duration-500 relative">
                      <Icon className="text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                      {/* <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-green-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center">
                        {step.step}
                      </div> */}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm">
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
