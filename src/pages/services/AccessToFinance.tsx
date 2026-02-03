import { motion } from "framer-motion";
import {
	DollarSign,
	TrendingUp,
	CheckCircle,
	FileText,
	Award,
	Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AccessToFinance() {
	const features = [
		{
			icon: DollarSign,
			title: "Credit Facilitation",
			description:
				"Help with securing business loans and credit lines to fuel your growth.",
		},
		{
			icon: TrendingUp,
			title: "Capital Sourcing",
			description:
				"Sourcing and preparing your business for investment capital and equity funding.",
		},
		{
			icon: Target,
			title: "Grant Identification",
			description:
				"Finding and applying for grants and funding opportunities that match your business.",
		},
		{
			icon: FileText,
			title: "Financial Planning",
			description:
				"Comprehensive financial planning and due diligence support for serious funding.",
		},
	];

	const services = [
		{
			title: "Funding & Capital",
			description:
				"We help you secure the funding you need through our extensive network of partners.",
			features: [
				"Business loan facilitation",
				"Investment capital sourcing",
				"Grant identification",
				"Credit line preparation",
			],
		},
		{
			title: "Strategic Planning",
			description:
				"Expert assistance in financial planning and projections to attract investors.",
			features: [
				"Financial projections",
				"Due diligence support",
				"Investment readiness",
				"Banking relationships",
			],
		},
		{
			title: "Support & Compliance",
			description:
				"Ensuring your business meets all requirements for successful funding applications.",
			features: [
				"Compliance checks",
				"Documentation support",
				"Risk assessment",
				"Post-funding guidance",
			],
		},
	];

	const benefits = [
		"High success rate in loan approvals",
		"Access to diverse funding sources",
		"Expert financial due diligence support",
		"Strong banking relationship management",
		"Reduced time to secure capital",
		"Professional investment readiness",
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
								<DollarSign size={16} />
								Access to Finance
							</div>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className="text-lg sm:text-lg md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
						>
							Secure Capital for
							<span className="block bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
								Your Business Growth
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
						>
							Unlock the capital you need to scale. From business loans to
							investment sourcing, we provide the financial expertise and
							connections to fuel your success.
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
								Get Funding
								<DollarSign size={20} />
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
							Why Choose Our Finance Service
						</h2>
						<p className="text-sm text-text-secondary max-w-2xl mx-auto">
							We combine financial expertise with a vast network of funding
							partners to secure the best capital solutions for your business.
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

			{/* Finance Highlight Image */}
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
								Capital Access
							</div>
							<h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
								Secure your funding with expert guidance
							</h3>
							<p className="text-text-secondary mb-6 leading-relaxed">
								Navigating the financial landscape can be complex. Our team provides the preparation, documentation, and connections needed to bridge the gap between your business and the capital it deserves.
							</p>
							<ul className="space-y-3">
								{[
									"Business loan and credit facilitation",
									"Investment capital sourcing and preparation",
									"Grants and funding opportunity identification",
									"Financial due diligence and projections",
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
									src="https://ik.imagekit.io/shiga/orchid/Gemini_Generated_Image_3hr7iz3hr7iz3hr7.png"
									alt="Access to finance"
									className="w-full h-full object-cover"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Services Section */}
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
							Our Finance Services
						</h2>
						<p className="text-sm text-text-secondary max-w-2xl mx-auto">
							Comprehensive financial solutions designed to help you secure and manage the capital needed for business growth.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="bg-white/80 backdrop-blur-sm border border-gray-300/50 p-8 hover:border-primary-300/50 transition-all duration-300"
							>
								<h3 className="text-lg sm:text-xl font-bold text-primary-500 mb-4">
									{service.title}
								</h3>
								<p className="text-text-secondary mb-6 leading-relaxed">
									{service.description}
								</p>

								<div className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<div key={featureIndex} className="flex items-center gap-2">
											<CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
											<span className="text-text-secondary text-sm">
												{feature}
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
								Finance Benefits
							</h2>
							<p className="text-sm text-text-secondary mb-8 leading-relaxed">
								Securing finance through our service provides more than just capital—it provides the strategic foundation needed to grow responsibly and sustainably.
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
								High Success Rate
							</h3>
							<p className="text-sm mb-6 opacity-90">
								Join hundreds of businesses that have successfully secured funding through our financial consultancy services.
							</p>
							<div className="grid grid-cols-2 gap-4 text-center">
								<div>
									<div className="text-xl font-bold">₦5B+</div>
									<div className="text-sm opacity-90">Capital Secured</div>
								</div>
								<div>
									<div className="text-xl font-bold">20+</div>
									<div className="text-sm opacity-90">Bank Partners</div>
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
							Ready to Secure Your Funding?
						</h2>
						<p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
							Start your journey toward financial growth today with our expert
							access to finance services.
						</p>
						<Link
							to="/contact"
							className="inline-flex items-center gap-3 bg-white text-primary-500 hover:bg-gray-100 px-8 py-4 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1"
						>
							Get Started Now
							<DollarSign size={20} />
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
