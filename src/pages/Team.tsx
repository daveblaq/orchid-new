import { motion } from "framer-motion";

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              Our Team
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
                Executive Team
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-5xl mx-auto leading-relaxed px-4 font-light">
              Our experienced leadership team brings together decades of
              expertise in digital transformation, business strategy, and
              innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Executive Team - First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Mr. Chiadikaobi David Okoh - CEO/Director */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative h-full cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Team Image */}
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/shiga/orchid/Screenshot%202025-10-19%20at%206.10.11%E2%80%AFpm.png?updatedAt=1760893829383"
                    alt="Mr. Chiadikaobi David Okoh"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Name and Role */}
                <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white p-4 text-center">
                  <h3 className="font-bold text-lg">Chiadikaobi David O.</h3>
                  <p className="text-sm opacity-90">Managing Director</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 text-white">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg mb-2">
                      Mr. Chiadikaobi David Okoh
                    </h3>
                    <p className="text-sm opacity-90 mb-4">Managing Director</p>
                  </div>
                  <p className="text-sm leading-relaxed text-left mb-6">
                    Managing Director with extensive experience in business
                    strategy and digital transformation. Leads our team with
                    deep industry knowledge and proven leadership skills.
                  </p>
                  <div className="text-left">
                    <a
                      href="https://www.linkedin.com/in/adedeji-adewara-mnse-mnieee-nebosh-igc-593687a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:underline inline-flex items-center"
                    >
                      LinkedIn <span className="ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Buchi Ijeh - Partner */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative h-full cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Team Image */}
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/shiga/orchid/buchi.png?updatedAt=1760898266865"
                    alt="Buchi Ijeh"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Name and Role */}
                <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white p-4 text-center">
                  <h3 className="font-bold text-lg">Buchi Ijeh</h3>
                  <p className="text-sm opacity-90">
                    Business Development Executive on Oil and Gas
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 text-white">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg mb-2">Buchi Ijeh</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Business Development Executive on Oil and Gas
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-left mb-6">
                    Business Development Executive specializing in oil and gas
                    services with over 10
                    years of corporate leadership experience. Expert in business
                    development and strategic planning.
                  </p>
                  <div className="text-left">
                    <a
                      href="#"
                      className="text-white text-sm hover:underline inline-flex items-center"
                    >
                      LinkedIn <span className="ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mr. Blessing Nwasuruba - Chief Laison officer */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative h-full cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Team Image */}
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/shiga/orchid/Screenshot%202025-10-22%20at%201.38.41%E2%80%AFam.png?updatedAt=1761093644059"
                    alt="Blessing Nwasuruba"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Name and Role */}
                <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white p-4 text-center">
                  <h3 className="font-bold text-lg">Blessing Nwasuruba</h3>
                  <p className="text-sm opacity-90">Chief Laison Officer</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 text-white">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg mb-2">
                      Blessing Nwasuruba
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      Chief Laison Officer
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-left mb-6">
                    Chief Laison Officer specializing in innovative solutions
                    and system architecture. Brings deep technical expertise to
                    drive our digital transformation initiatives.
                  </p>
                  <div className="text-left">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:underline inline-flex items-center"
                    >
                      LinkedIn <span className="ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Adedeji Adewara - Laison Officer */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative h-full cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Team Image */}
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/shiga/orchid/adedeji.jpg?updatedAt=1760893627747"
                    alt="Adedeji Adewara"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Name and Role */}
                <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white p-4 text-center">
                  <h3 className="font-bold text-lg">Adedeji Adewara</h3>
                  <p className="text-sm opacity-90">Laison Officer</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 text-white">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg mb-2">Adedeji Adewara</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Laison Officer on Power/Telecommunication
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-left mb-6">
                    Laison Officer focused on power and telecommunication
                    solutions. Expert in infrastructure development and Laison
                    consulting with extensive industry experience.
                  </p>
                  <div className="text-left">
                    <a
                      href="https://www.linkedin.com/in/adedeji-adewara-mnse-mnieee-nebosh-igc-593687a8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:underline inline-flex items-center"
                    >
                      LinkedIn <span className="ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Promise Obioha - Project Manager */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative h-full cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/shiga/orchid/1000577504.jpg?updatedAt=1760945979405"
                    alt="Promise Obioha"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white p-4 text-center">
                  <h3 className="font-bold text-lg">Promise Obioha</h3>
                  <p className="text-sm opacity-90">Project Manager</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 text-white">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg mb-2">Promise Obioha</h3>
                    <p className="text-sm opacity-90 mb-4">Project Manager</p>
                  </div>
                  <p className="text-sm leading-relaxed text-left mb-6">
                    Project Manager with extensive experience in project
                    management and team coordination. Ensures successful
                    delivery of complex projects and client satisfaction.
                  </p>
                  <div className="text-left">
                    <a
                      href="#"
                      className="text-white text-sm hover:underline inline-flex items-center"
                    >
                      LinkedIn <span className="ml-1">&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Line Separator */}
          <div className="flex items-center justify-center mb-16">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Other Staffs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Other Staffs
            </h2>
            <p className="text-sm sm:text-base text-text-secondary max-w-3xl mx-auto">
              Our dedicated support team that ensures smooth operations and
              excellent service delivery.
            </p>
          </motion.div>

          {/* Other Staffs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Victoria Ajayi - Social Media Manager */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative h-full cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Team Image */}
                <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                  <img
                    src="https://ik.imagekit.io/shiga/orchid/AJAYE8.jpg?updatedAt=1761094336871"
                    alt="Victoria Ajayi"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Name and Role */}
                <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white p-4 text-center">
                  <h3 className="font-bold text-lg">Victoria Ajayi</h3>
                  <p className="text-sm opacity-90">Social Media Manager</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 text-white">
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-lg mb-2">Victoria Ajayi</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Social Media Manager
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-left mb-6">
                    Social Media Manager with expertise in digital marketing and
                    brand management. Creates engaging content and builds strong
                    online presence across multiple platforms.
                  </p>
                  <div className="text-left">
                    <a
                      href="#"
                      className="text-white text-sm hover:underline inline-flex items-center"
                    >
                      LinkedIn <span className="ml-1">&gt;</span>
                    </a>
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
