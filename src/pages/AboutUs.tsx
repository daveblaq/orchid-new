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
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in digital transformation and business consulting.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Technology leader with expertise in enterprise software development.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      bio: "Operations expert specializing in facility management and process optimization.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "David Kim",
      role: "Lead Consultant",
      bio: "Financial services expert with deep knowledge in audit and tax clearance.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and methodologies to deliver forward-thinking solutions.",
      icon: Target,
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, ensuring exceptional results for our clients.",
      icon: Award,
    },
    {
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices.",
      icon: CheckCircle,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership to achieve extraordinary outcomes.",
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-[190%] px-4 sm:px-0">
                Orchid Digital Consulting connects businesses with innovative
                solutions for seamless transformation.
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed px-4 sm:px-0">
                We open doors to meaningful growth where your business expertise
                shines and your potential flourishes through strategic digital
                consulting.
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg mx-4 sm:mx-0"
              >
                Explore Our Services
              </motion.button>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Top Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Professional business meeting"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Team collaboration and innovation"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 px-4 sm:px-0">
                Our Story
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                Founded in 2018, Orchid Digital Consulting emerged from a vision
                to bridge the gap between traditional business practices and the
                digital future. We recognized that many organizations were
                struggling to adapt to the rapidly evolving technological
                landscape.
              </p>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                Today, we stand as a trusted partner for businesses across
                various industries, helping them navigate digital
                transformation, optimize operations, and achieve sustainable
                growth in an increasingly competitive market.
              </p>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed px-4 sm:px-0">
                Our commitment to excellence and innovation has earned us the
                trust of over 500 clients worldwide, from startups to Fortune
                500 companies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-primary-500 p-6 sm:p-8 md:p-12 text-white">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                      500+
                    </div>
                    <div className="text-sm sm:text-base md:text-lg opacity-90">
                      Clients Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                      50+
                    </div>
                    <div className="text-sm sm:text-base md:text-lg opacity-90">
                      Countries
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                      99%
                    </div>
                    <div className="text-sm sm:text-base md:text-lg opacity-90">
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                      24/7
                    </div>
                    <div className="text-sm sm:text-base md:text-lg opacity-90">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group bg-white border border-gray-200 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-100 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary-500 transition-colors duration-500">
                <Target className="text-primary-500 group-hover:text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6 sm:mb-8 group-hover:text-primary-500 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                To empower businesses worldwide by providing innovative digital
                solutions, strategic guidance, and comprehensive support that
                drives sustainable growth and transformation in an ever-evolving
                marketplace.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group bg-white border border-gray-200 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-100 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-primary-500 transition-colors duration-500">
                <Eye className="text-primary-500 group-hover:text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6 sm:mb-8 group-hover:text-primary-500 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                To become the global leader in digital consulting, recognized
                for our ability to transform businesses and create lasting value
                through technology, innovation, and strategic partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              The principles that guide everything we do and define who we are
              as an organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-100 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-primary-500 transition-colors duration-500">
                      <Icon className="text-primary-500 group-hover:text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 group-hover:text-primary-500 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-sm sm:text-base md:text-lg">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              The experienced professionals who drive our success and guide our
              clients to achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:border-primary-300 hover:shadow-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-2 sm:mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-semibold text-sm sm:text-base md:text-lg">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Mission & Programs */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left - Office Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional office environment with team collaboration"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 sm:space-y-10 md:space-y-12"
            >
              {/* About Us */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  About Us
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Orchid Digital Consulting Limited is committed to eradicating
                  poverty, reducing unemployment, and promoting job creation
                  through startups. We prevent business failure by supporting
                  existing businesses and hand-holding entrepreneurs through a
                  tried and tested education process resulting in stronger
                  sustainable business growth.
                </p>
              </div>

              {/* Accomplishment Plans */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  ACCOMPLISHMENT PLANS
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Our entrepreneurship development program features a one-week
                  intensive program with online and physical classroom training
                  engagement model. Following our "Learning by Doing" maxim, we
                  engage aspiring and existing entrepreneurs regardless of level
                  of education, gender or socio-economic status. The only
                  criterion is that participants must be 18 years & above.
                </p>
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
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center px-4">
              OUR ENGAGEMENT APPROACH
            </h3>
            <p className="text-gray-300 text-base sm:text-lg text-center mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto px-4">
              Specifically, Orchid Digital Consulting facilitates the
              achievement of the following outcomes:
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
              What Makes Us Different
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              Our unique approach and comprehensive expertise set us apart in
              the consulting industry with proven methodologies and innovative
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group bg-white border border-gray-200 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8 group-hover:text-primary-500 transition-colors duration-300">
                Our Approach
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-100 flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:bg-primary-500 transition-colors duration-300">
                    <CheckCircle className="text-primary-500 group-hover:text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                    Comprehensive assessment and strategic planning tailored to
                    your business goals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-100 flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:bg-primary-500 transition-colors duration-300">
                    <CheckCircle className="text-primary-500 group-hover:text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                    Custom solutions designed specifically for your industry and
                    challenges
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-100 flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:bg-primary-500 transition-colors duration-300">
                    <CheckCircle className="text-primary-500 group-hover:text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                    End-to-end implementation support with dedicated project
                    management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary-100 flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:bg-primary-500 transition-colors duration-300">
                    <CheckCircle className="text-primary-500 group-hover:text-white transition-colors duration-300 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
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
              className="group bg-white border border-gray-200 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8 group-hover:text-primary-500 transition-colors duration-300">
                Our Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary-100 flex items-center justify-center mb-3 sm:mb-4 group-hover/item:bg-primary-500 transition-colors duration-300">
                    <Globe className="text-primary-500 group-hover/item:text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-base sm:text-lg group-hover/item:text-primary-500 transition-colors duration-300">
                    Global Reach
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm mt-1">
                    Serving clients worldwide
                  </div>
                </div>
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary-100 flex items-center justify-center mb-3 sm:mb-4 group-hover/item:bg-primary-500 transition-colors duration-300">
                    <Briefcase className="text-primary-500 group-hover/item:text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-base sm:text-lg group-hover/item:text-primary-500 transition-colors duration-300">
                    Multi-Industry
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm mt-1">
                    Cross-sector expertise
                  </div>
                </div>
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary-100 flex items-center justify-center mb-3 sm:mb-4 group-hover/item:bg-primary-500 transition-colors duration-300">
                    <Wrench className="text-primary-500 group-hover/item:text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-base sm:text-lg group-hover/item:text-primary-500 transition-colors duration-300">
                    Full-Service
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm mt-1">
                    Complete solutions
                  </div>
                </div>
                <div className="group/item bg-gray-50 hover:bg-primary-50 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-primary-100 flex items-center justify-center mb-3 sm:mb-4 group-hover/item:bg-primary-500 transition-colors duration-300">
                    <TrendingUp className="text-primary-500 group-hover/item:text-white transition-colors duration-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="font-bold text-text-primary text-base sm:text-lg group-hover/item:text-primary-500 transition-colors duration-300">
                    Proven Results
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm mt-1">
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
