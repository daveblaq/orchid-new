import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}
