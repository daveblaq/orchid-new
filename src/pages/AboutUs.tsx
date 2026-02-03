import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Globe,
  Briefcase,
  Wrench,
  TrendingUp,
} from "lucide-react";

export default function AboutUs() {
  const team = [
    {
      name: "Mr. Okoh Chiadikaobi David",
      role: "CEO & Founder",
      bio: "Entrepreneur, writer, consultant, and business coach with 7+ years of experience. Author of 'The Entrepreneur: Money Doubler' and has helped over 5000 businesses access funding.",
      image:
        "https://ik.imagekit.io/shiga/orchid/Screenshot%202025-10-19%20at%206.10.11%E2%80%AFpm.png?updatedAt=1760893829383",
    },
  ];

  const missionGoals = [
    {
      title: "Financial Stability",
      description:
        "To secure financial stability in Nigeria through entrepreneurship programme and workshop trainings.",
      icon: Target,
    },
    {
      title: "Access to Finance",
      description:
        "Access to finance for SMEs, MSMEs and other business sectors including Power sector, Entertainment, AgiTECH, Logistics, Advisory and Consulting Services.",
      icon: Award,
    },
    {
      title: "Business Bridge",
      description:
        "To be a bridge to link business to businesses, connecting people and organizations to resources.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 lg:pt-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight px-4 sm:px-0">
                Orchiddigital Consulting Limited - Your Partner in Business
                Growth and Financial Success
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-4 sm:px-0">
                A finance-based consulting firm established in 2019 and
                officially registered with the Corporate Affairs Commission
                (CAC) on March 17, 2020 (RC: 1530396). We provide comprehensive
                business services across production, manufacturing, logistics,
                agriculture and digital sectors.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-r from-primary-500 to-green-500 hover:from-primary-600 hover:to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 mx-4 sm:mx-0"
              >
                Explore Our Services
              </motion.button>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 sm:space-y-6"
            >
              {/* Top Image */}
              <div className="relative">
                <img
                  src="https://ik.imagekit.io/shiga/orchid/IMG-20250313-WA0015%20(1).jpg?updatedAt=1761301275857"
                  alt="Professional business meeting"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative">
                <img
                  src="https://ik.imagekit.io/shiga/orchid/IMG-20251022-WA0008%20(1).jpg?updatedAt=1761301351391"
                  alt="Team collaboration and innovation"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-4 px-4 sm:px-0">
                Our Story
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-4 px-4 sm:px-0">
                Orchiddigital Consulting Limited was established in 2019 and
                officially registered with the Corporate Affairs Commission
                (CAC) on March 17, 2020, as a limited liability company. We are
                a multi-dimensional corporate entity that provides comprehensive
                business services across all sectors.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed mb-4 sm:mb-4 px-4 sm:px-0">
                The firm is affiliated with commercial banks and collaborates
                with Partnership Initiatives in the Niger Delta (PIND). We offer
                entrepreneurship development training, access to finance,
                consultancy, inventory management, insurance audit and tax
                clearance services.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed px-4 sm:px-0">
                Our primary aim is to ensure that entrepreneurs are guided and
                equipped with the right knowledge, feasible business
                methodologies and strategies that will give them an edge in
                achieving their set goals. We have successfully helped over 5000
                businesses access funding and mentorship.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-green-500 p-6 sm:p-8 md:p-12 text-white">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      10+
                    </div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      500M+
                    </div>
                    <div className="text-sm opacity-90">Disbursed Funds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      50+
                    </div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      3 Stated
                    </div>
                    <div className="text-sm opacity-90">National Coverage</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-green-300/50"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mb-6 sm:mb-6 transition-colors duration-500">
                <Target className="text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                To secure financial stability in Nigeria through
                entrepreneurship programmes and workshop trainings. We provide
                access to finance for SMEs, MSMEs and other business sectors
                including Power, Entertainment, AgiTECH, Logistics, Advisory and
                Consulting Services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-green-300/50"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mb-6 sm:mb-6 transition-colors duration-500">
                <Eye className="text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-4 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed">
                To be a bridge linking businesses to businesses, connecting
                people and organizations to resources. We envision a Nigeria
                where every entrepreneur has access to the knowledge, funding,
                and support needed to build successful, sustainable businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Mission Goals
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 px-4 leading-tight">
              What We
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Strive For
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed px-4 font-light">
              Our three core mission goals that drive everything we do to
              support entrepreneurs and businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionGoals.map((goal, index) => {
              const Icon = goal.icon;
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
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 transition-all duration-500 group-hover:border-green-300/50 h-full flex flex-col text-center">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center transition-all duration-500 group-hover:scale-110 mx-auto">
                        <Icon className="text-white w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 group-hover:rotate-12" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {goal.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-sm font-light flex-1">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-4 px-4 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                CEO & Founder
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed px-4 font-light">
              The visionary leader who founded Orchiddigital Consulting and has
              helped over 5000 businesses access funding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 overflow-hidden transition-all duration-500 hover:border-green-300/50 "
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-text-primary mb-2 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-semibold text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-4 space-y-2">
                    {/* <p className="text-xs text-text-secondary">
                      <strong>Education:</strong> Computer Science, B.S.Eds,
                      PMP, PHRi
                    </p>
                    <p className="text-xs text-text-secondary">
                      <strong>Experience:</strong> IT Manager at Arik Airline
                      Services (3 years), Ojemaifarms Limited (3 years)
                    </p>
                    <p className="text-xs text-text-secondary">
                      <strong>Author:</strong> "The Entrepreneur: Money Doubler"
                    </p> */}
                    <p className="text-xs text-text-secondary">
                      <strong>Achievement:</strong> Helped 50+ businesses
                      access funding through CBN-AGSMEIS loans and TEF grants
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Mission & Programs */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* About Us Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/70 border border-gray-700 p-6 sm:p-8 text-white space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  About Orchiddigital Consulting
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Orchiddigital Consulting Limited is a multi-dimensional
                  corporate entity that partners with commercial banks and PIND
                  to provide entrepreneurs with finance, training, and advisory
                  services. Our goal is to equip founders with practical
                  methodologies and strategies that help them scale sustainably.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "10+" },
                  { label: "Funds Disbursed", value: "₦500M+" },
                  { label: "Projects Delivered", value: "50+" },
                  { label: "National Coverage", value: "3 States" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wide text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Accomplishment Plans Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/70 border border-gray-700 p-6 sm:p-8 text-white space-y-6"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Accomplishment Plans
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Our entrepreneurship bootcamp blends virtual learning with
                  physical workshops. Following our “learning by doing” doctrine,
                  we welcome participants 18+ from any educational background and
                  guide them through ideation, validation, and funding readiness.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Delivery Strategy</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    "Two-way communication cycles for rapid feedback",
                    "Action-oriented assignments with mentor checkpoints",
                    "Recognition programs that reward collaboration",
                    "Documented workflows for executing strategy",
                    "Course-correction loops built into every module",
                  ].map((item, idx) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary-400 font-semibold">
                        {idx + 1}.
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Our Engagement Approach */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-6 text-center px-4">
              OUR ENGAGEMENT APPROACH
            </h3>
            <p className="text-gray-300 text-base sm:text-lg text-center mb-6 sm:mb-10 md:mb-12 max-w-4xl mx-auto px-4">
              Specifically, Orchiddigital Consulting facilitates the achievement
              of the following outcomes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Develop entrepreneurial skills of individuals to successfully
                  start, manage, diversify and expand business enterprises
                </p>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Facilitate easy access to Start-up Capital for successful
                  participants, especially funds from commercial banks,
                  microfinance banks, allied financial institutions,
                  Non-Governmental Organizations and other development agencies.
                </p>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Generate employment opportunities through entrepreneurship,
                  for Nigerians in-line with the agenda of the Federal
                  Government and the goals of National Economic Empowerment and
                  Development Strategy (NEEDS).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
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
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              What Makes Us Different
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4 sm:mb-4 px-4 leading-tight">
              Our Unique
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed px-4 font-light">
              Comprehensive expertise and proven methodologies that set us apart
              in the consulting industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-green-300/50 "
            >
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                Our Approach
              </h3>
              <ul className="space-y-3 sm:space-y-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1  transition-colors duration-300">
                    <CheckCircle className="text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed">
                    Comprehensive assessment and strategic planning tailored to
                    your business goals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1  transition-colors duration-300">
                    <CheckCircle className="text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed">
                    Custom solutions designed specifically for your industry and
                    challenges
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1  transition-colors duration-300">
                    <CheckCircle className="text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed">
                    End-to-end implementation support with dedicated project
                    management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mr-3 sm:mr-4 mt-1  transition-colors duration-300">
                    <CheckCircle className="text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed">
                    Continuous monitoring and optimization for sustained growth
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Our Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-300/50 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-green-300/50 "
            >
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4 sm:mb-4 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-green-500 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                Our Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 ">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mb-3 sm:mb-4  transition-colors duration-300">
                    <Globe className="text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-sm group-hover/item:text-green-500 transition-colors duration-300">
                    Global Reach
                  </div>
                  <div className="text-text-secondary text-xs mt-1">
                    Serving clients worldwide
                  </div>
                </div>
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 ">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mb-3 sm:mb-4  transition-colors duration-300">
                    <Briefcase className="text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-sm group-hover/item:text-green-500 transition-colors duration-300">
                    Multi-Industry
                  </div>
                  <div className="text-text-secondary text-xs mt-1">
                    Cross-sector expertise
                  </div>
                </div>
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 ">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mb-3 sm:mb-4  transition-colors duration-300">
                    <Wrench className="text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-sm group-hover/item:text-green-500 transition-colors duration-300">
                    Full-Service
                  </div>
                  <div className="text-text-secondary text-xs mt-1">
                    Complete solutions
                  </div>
                </div>
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 ">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-green-500 flex items-center justify-center mb-3 sm:mb-4  transition-colors duration-300">
                    <TrendingUp className="text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-sm group-hover/item:text-green-500 transition-colors duration-300">
                    Proven Results
                  </div>
                  <div className="text-text-secondary text-xs mt-1">
                    Track record of success
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
