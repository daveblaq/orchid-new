import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  const services = [
    "Access to Market",
    "Entrepreneurship Training",
    "Facility Management",
    "Insurance / Audit and Tax Clearance",
    "Enterprise Management Software Development",
    "Access to Finance",
    "General Inquiry",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="bg-accent-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle className="text-accent-500 w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">
            Message Sent!
          </h2>
          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            Thank you for your message! We'll get back to you within 24 hours.
            Our team is excited to help you with your business needs.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 mb-6 sm:mb-8">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 px-4">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
                Ready to transform your business? Get in touch with our expert
                team and let's discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-100 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-primary-500 transition-colors duration-500">
                <Mail className="text-primary-600 group-hover:text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300">
                Email Us
              </h3>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Send us a detailed message and we'll respond within 24 hours
              </p>
              <a
                href="mailto:hello@orchidconsulting.com"
                className="text-primary-600 font-semibold text-sm sm:text-base md:text-lg group-hover:text-primary-700 transition-colors duration-300 flex items-center justify-center touch-manipulation break-all"
              >
                hello@orchidconsulting.com{" "}
                <ArrowRight className="ml-2 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-100 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-primary-500 transition-colors duration-500">
                <Phone className="text-primary-600 group-hover:text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300">
                Call Us
              </h3>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Speak directly with our experts for immediate assistance
              </p>
              <a
                href="tel:+15551234567"
                className="text-primary-600 font-semibold text-sm sm:text-base md:text-lg group-hover:text-primary-700 transition-colors duration-300 flex items-center justify-center touch-manipulation"
              >
                +1 (555) 123-4567{" "}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-500 hover:border-primary-300 hover:shadow-2xl text-center"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-100 flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-primary-500 transition-colors duration-500">
                <Calendar className="text-primary-600 group-hover:text-white transition-colors duration-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6 group-hover:text-primary-600 transition-colors duration-300">
                Schedule Meeting
              </h3>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Book a free consultation to discuss your specific needs
              </p>
              <button className="text-primary-600 font-semibold text-sm sm:text-base md:text-lg group-hover:text-primary-700 transition-colors duration-300 flex items-center justify-center mx-auto touch-manipulation">
                Book Now{" "}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              Send us a Message
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              Fill out the form below and we'll get back to you with a
              personalized response within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:shadow-2xl"
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-text-secondary mb-3 sm:mb-4">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs sm:text-sm mt-2">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-text-secondary mb-3 sm:mb-4">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs sm:text-sm mt-2">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-text-secondary mb-3 sm:mb-4">
                        Company Name
                      </label>
                      <input
                        type="text"
                        {...register("company")}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-base sm:text-lg font-semibold text-text-secondary mb-3 sm:mb-4">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-text-secondary mb-3 sm:mb-4">
                      Service Interest *
                    </label>
                    <select
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs sm:text-sm mt-2">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-text-secondary mb-3 sm:mb-4">
                      Subject *
                    </label>
                    <input
                      type="text"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs sm:text-sm mt-2">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-base sm:text-lg font-semibold text-text-secondary mb-3 sm:mb-4">
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      rows={8}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300"
                      placeholder="Tell us more about your inquiry and how we can help..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs sm:text-sm mt-2">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 sm:py-5 md:py-6 px-6 sm:px-8 text-base sm:text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 touch-manipulation"
                  >
                    <Send size={20} className="sm:w-6 sm:h-6" />
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white border border-gray-200 p-6 sm:p-8 transition-all duration-500 hover:shadow-2xl"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <Mail className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                        Email
                      </h4>
                      <div className="space-y-1">
                        <p className="text-text-secondary text-sm sm:text-base break-all">
                          hello@orchidconsulting.com
                        </p>
                        <p className="text-text-secondary text-sm sm:text-base break-all">
                          partnerships@orchidconsulting.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <Phone className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                        Phone
                      </h4>
                      <div className="space-y-1">
                        <p className="text-text-secondary text-sm sm:text-base md:text-lg">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-text-secondary text-sm sm:text-base md:text-lg">
                          +1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <MapPin className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                        Address
                      </h4>
                      <p className="text-text-secondary text-sm sm:text-base md:text-lg">
                        123 Innovation Street
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <Clock className="text-primary-600 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                        Business Hours
                      </h4>
                      <div className="text-text-secondary text-sm sm:text-base md:text-lg space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 p-6 sm:p-8 md:p-10 text-white relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 border-2 border-white"></div>
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 border border-white"></div>
                  <div className="absolute top-1/2 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-white"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                    Quick Response
                  </h3>
                  <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, please call us directly.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="text-white mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base md:text-lg">
                        Free initial consultation
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-white mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base md:text-lg">
                        Customized solutions
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-white mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base md:text-lg">
                        Global expertise
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-white mr-2 sm:mr-3 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base md:text-lg">
                        Proven track record
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Visit Our Office
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
              Located in the heart of the business district, our office is
              easily accessible by public transportation and offers convenient
              parking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-gray-200 overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373631531654!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1635151234567!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px]"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 sm:mt-12 text-center"
          >
            <a
              href="https://maps.google.com/?q=123+Innovation+Street+Tech+City+TC+12345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 touch-manipulation"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
