import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar?: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  position,
  company,
  testimonial,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-text-primary">{name}</h4>
          <p className="text-sm text-text-secondary">
            {position}, {company}
          </p>
        </div>
      </div>
      <p className="text-text-secondary leading-relaxed italic">
        "{testimonial}"
      </p>
    </motion.div>
  );
}
