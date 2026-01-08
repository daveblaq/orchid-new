import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EntrepreneurshipTraining() {
  const features = [
    {
      icon: GraduationCap,
      title: "Comprehensive Training",
      description:
        "Complete entrepreneurship development program with practical skills and knowledge.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from experienced entrepreneurs and business leaders with proven track records.",
    },
    {
      icon: BookOpen,
      title: "Practical Learning",
      description:
        "Hands-on training with real-world case studies and business simulations.",
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description:
        "Structured program designed to help you achieve your business goals and objectives.",
    },
  ];

  const programModules = [
    {
      title: "Business Fundamentals",
      description:
        "Core business concepts, planning, and strategy development.",
      duration: "2 weeks",
      topics: [
        "Business planning",
        "Market analysis",
        "Financial management",
        "Legal requirements",
      ],
    },
    {
      title: "Leadership Development",
      description: "Build leadership skills and team management capabilities.",
      duration: "2 weeks",
      topics: [
        "Team building",
        "Communication",
        "Decision making",
        "Conflict resolution",
      ],
    },
    {
      title: "Marketing & Sales",
      description: "Learn effective marketing strategies and sales techniques.",
      duration: "2 weeks",
      topics: [
        "Digital marketing",
        "Brand building",
        "Sales strategies",
        "Customer relations",
      ],
    },
    {
      title: "Financial Management",
      description:
        "Master financial planning, budgeting, and investment strategies.",
      duration: "2 weeks",
      topics: ["Budgeting", "Cash flow", "Investment", "Risk management"],
    },
  ];

  const benefits = [
    "One-week intensive program",
    "Online and physical classroom training",
    "Learning by doing methodology",
    "18+ years age requirement",
    "No education barriers",
    "Comprehensive support materials",
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
                <GraduationCap size={16} />
                Entrepreneurship Training
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg sm:text-lg md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
            >
              Develop Your
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Entrepreneurial Skills
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Transform yourself into a successful entrepreneur with our
              comprehensive training program. Learn essential business skills
              and develop the mindset needed for business leadership.
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
                Enroll Now
                <GraduationCap size={20} />
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
              Why Choose Our Training Program
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              Our entrepreneurship development program features comprehensive
              training designed for aspiring and existing entrepreneurs.
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

      {/* Training Highlight Image */}
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
                Past Cohort Highlight
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                Hands-on Training With Real Entrepreneurs
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Each cohort concludes with a live pitch clinic and mentorship
                day. The photo showcases our Woji hub session where 45 founders
                built prototypes, refined their business models, and presented
                to industry mentors.
              </p>
              <ul className="space-y-3">
                {[
                  "Facilitated by senior coaches and visiting investors",
                  "Practical breakout sessions and peer-to-peer reviews",
                  "Immediate feedback with action plans for every participant",
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
                  src="https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_olubk3olubk3olub.png"
                  alt="Entrepreneurship training cohort presentation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <p className="text-xs text-text-secondary mt-3 text-center">
                Cohort 5 founders during the final presentation day at the Woji
                training center.
              </p> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Modules Section */}
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
              Training Program Modules
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              Comprehensive 8-week program covering all essential aspects of
              entrepreneurship and business development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 hover:border-primary-300/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-500">
                    {module.title}
                  </h3>
                  <div className="bg-green-100 text-green-600 px-3 py-1 text-sm font-semibold">
                    {module.duration}
                  </div>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {module.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-text-primary mb-2">
                    Topics Covered:
                  </h4>
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {topic}
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
                Program Benefits
              </h2>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                Our entrepreneurship development program is designed to equip
                you with the skills, knowledge, and mindset needed to succeed as
                an entrepreneur.
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
                Certificate of Completion
              </h3>
              <p className="text-sm mb-6 opacity-90">
                Receive a recognized certificate upon successful completion of
                the program, validating your entrepreneurial skills and
                knowledge.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold">8</div>
                  <div className="text-sm opacity-90">Weeks</div>
                </div>
                <div>
                  <div className="text-xl font-bold">100+</div>
                  <div className="text-sm opacity-90">Graduates</div>
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
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Enroll in our comprehensive entrepreneurship training program and
              develop the skills needed to succeed in business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Enroll Now
              <GraduationCap size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
