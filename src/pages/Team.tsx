import { motion } from "framer-motion";

export default function Team() {
  const executives = [
    {
      name: "Chiadikaobi David O.",
      fullName: "Mr. Chiadikaobi David Okoh",
      role: "Managing Director",
      image: "https://ik.imagekit.io/shiga/orchid/Screenshot%202025-10-19%20at%206.10.11%E2%80%AFpm.png?updatedAt=1760893829383",
      bio: "Our Managing Director has broad experience across finance, business development, and professional services.With hands- on involvement in access to finance, loans, market access, enterprise training, and advisory services, they lead the team with a practical understanding of what businesses truly need to grow and succeed",
      linkedin: "https://www.linkedin.com/in/adedeji-adewara-mnse-mnieee-nebosh-igc-593687a8",
    },
    {
      name: "Mr. Paul Ugwu",
      fullName: "Mr. Paul Ugwu",
      role: "Chief Operation officer",
      image: "https://ik.imagekit.io/shiga/orchid/IMG-20260109-WA0002(1).jpg",
      bio: "He brings structure, clarity, and operational discipline to the business, ensuring strategies are executed efficiently and systems work seamlessly",
      linkedin: "#",
    },
    {
      name: "Buchi Ijeh",
      fullName: "Buchi Ijeh",
      role: "Business Development Manager",
      image: "https://ik.imagekit.io/shiga/orchid/buchi.png?updatedAt=1760898266865",
      bio: "With more than a decade in corporate leadership, she helps the company grow by identifying opportunities, building relationships, and shaping strategies that work.",
      linkedin: "#",
    },
    {
      name: "Blessing Nwasuruba",
      fullName: "Blessing Nwasuruba",
      role: "Chief Laison Officer",
      image: "https://ik.imagekit.io/shiga/orchid/Screenshot%202025-10-22%20at%201.38.41%E2%80%AFam.png?updatedAt=1761093644059",
      bio: "He specializes in innovative solutions and system architecture, using his technical expertise to make our digital initiatives practical, efficient, and impactful.",
      linkedin: "#",
    },
    {
      name: "Adedeji Adewara",
      fullName: "Adedeji Adewara",
      role: "Laison Officer",
      hoverRole: "Laison Officer on Power/Telecommunication",
      image: "https://ik.imagekit.io/shiga/orchid/adedeji.jpg?updatedAt=1760893627747",
      bio: "With deep experience in power and telecom, he oversees infrastructure development and project execution, turning complex challenges into practical solutions for clients.",
      linkedin: "https://www.linkedin.com/in/adedeji-adewara-mnse-mnieee-nebosh-igc-593687a8",
    },
    {
      name: "Promise Obioha",
      fullName: "Promise Obioha",
      role: "Project Manager",
      image: "https://ik.imagekit.io/shiga/orchid/1000577504.jpg?updatedAt=1760945979405",
      bio: "He has extensive experience in project management and team coordination, ensuring projects are delivered successfully while also connecting clients with the right loan solutions.",
      linkedin: "#",
    },
  ];

  const otherStaff = [
    {
      name: "Victoria Ajayi",
      fullName: "Victoria Ajayi",
      role: "Social Media Manager",
      image: "https://ik.imagekit.io/shiga/orchid/AJAYE8.jpg?updatedAt=1761094336871",
      bio: "She manages our social media presence, creating engaging content and helping the brand connect with people across multiple platforms.",
      linkedin: "#",
    },
    {
      name: "Martin Nwosu",
      fullName: "Martin Nwosu",
      role: "IT Personnel",
      image: "https://ik.imagekit.io/shiga/orchid/WhatsApp%20Image%202026-02-04%20at%2009.57.00.jpeg",
      bio: "He keeps our systems running smoothly, providing technical support and ensuring our digital tools work efficiently for the team.",
      linkedin: "#",
    },
    {
      name: "Confidence Itoro",
      fullName: "Confidence Itoro",
      role: "Business Development Officer",
      image: "https://ik.imagekit.io/shiga/orchid/WhatsApp%20Image%202026-02-04%20at%2009.57.15.jpeg",
      bio: "She supports business growth by identifying opportunities, engaging clients, and helping convert leads into lasting partnerships.",
      linkedin: "#",
    },
    {
      name: "Salome Uduak",
      fullName: "Salome Uduak",
      role: "Admin Officer",
      image: "https://ik.imagekit.io/shiga/orchid/WhatsApp%20Image%202026-02-04%20at%2009.58.26.jpeg",
      bio: "She handles daily administrative tasks, keeps records organised, and supports the team to ensure smooth office operations.",
      linkedin: "#",
    },
  ];

  const MemberCard = ({ member, index }: { member: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-full cursor-pointer"
    >
      <div className="relative overflow-hidden">
        {/* Team Image */}
        <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
          <img
            src={member.image}
            alt={member.fullName}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Name and Role */}
        <div className="bg-gradient-to-r from-primary-500 to-green-500 text-white p-4 text-center">
          <h3 className="font-bold text-lg">{member.name}</h3>
          <p className="text-sm opacity-90">{member.role}</p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 text-white">
          <div className="text-center mb-4">
            <h3 className="font-bold text-lg mb-2">{member.fullName}</h3>
            <p className="text-sm opacity-90 mb-4">{member.hoverRole || member.role}</p>
          </div>
          <p className="text-sm leading-relaxed text-left mb-6">{member.bio}</p>
          <div className="text-left">
            <a
              href={member.linkedin}
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
  );

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
            {executives.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))}
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
            {otherStaff.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
