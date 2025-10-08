import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      title: "INTRODUCTION",
      icon: Shield,
      content: `ORCHID DIGITAL CONSULTING LIMITED respects the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.orchiddigitalconsulting.com, including any other media form, social media handles and application related or connected thereto (collectively, "the Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.

You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.`,
    },
    {
      title: "COLLECTION OF YOUR INFORMATION",
      icon: Eye,
      content: `We may collect information about you in a variety of ways. The information we may collect on the Site includes:

Personal Data: Personally identifiable information, such as your name, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.

Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, and your access times.

Facebook Permissions: The Site may by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public.

Data From Social Networks: User information from social networking sites, such as Facebook, Google+, Instagram, Pinterest, Twitter, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.

Mobile Device Data: Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.

Third-Party Data: Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Site permission to access this information.

Data From Contests, Giveaways, and Surveys: Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.`,
    },
    {
      title: "USE OF YOUR INFORMATION",
      icon: FileText,
      content: `Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:

• Administer promotions and contests
• Compile anonymous statistical data and analysis for use internally or with third parties
• Create and manage your account
• Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you
• Email you regarding your account or application
• Fulfill and manage applications and other transactions related to the Site
• Generate a personal profile about you to make future visits to the Site more personalized
• Increase the efficiency and operation of the Site
• Monitor and analyze usage and trends to improve your experience with the Site
• Notify you of updates to the Site
• Offer new products, services, and/or recommendations to you
• Perform other business activities as needed
• Prevent fraudulent transactions, monitor against theft, and protect against criminal activity
• Request feedback and contact you about your use of the Site
• Resolve disputes and troubleshoot problems
• Respond to product and customer service requests
• Send you a newsletter
• Solicit support for the Site`,
    },
    {
      title: "DISCLOSURE OF YOUR INFORMATION",
      icon: Lock,
      content: `We may share information we have collected about you in certain situations. Your information may be disclosed as follows:

By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.

Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.

Marketing Communications: With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.

Interactions with Other Users: If you interact with other users on our social media pages, those users may see your name, profile photo, and descriptions of your activity.

Online Postings: When you post comments, contributions or other content to the Site, your posts may be viewed by all users and may be publicly distributed outside the Site in perpetuity.

Third-Party Advertisers: We may use third-party advertising companies to serve ads when you visit the Site.

Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.

Business Partners: We may share your information with our business partners to offer you certain products, services or promotions.

Sale or Bankruptcy: If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity.`,
    },
  ];

  const additionalSections = [
    {
      title: "TRACKING TECHNOLOGIES",
      content: `Cookies and Web Beacons: Orchid Digital Consulting Limited may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.

Internet-Based Advertising: Additionally, we may use third-party software to serve ads on the Site, implement email marketing campaigns, and manage other interactive marketing initiatives.

Website Analytics: We may also partner with selected third-party vendors to allow tracking technologies and remarketing services on the Site through the use of first party cookies and third-party cookies.`,
    },
    {
      title: "THIRD-PARTY WEBSITES",
      content: `The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.`,
    },
    {
      title: "SECURITY OF YOUR INFORMATION",
      content: `We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.`,
    },
    {
      title: "POLICY FOR CHILDREN",
      content: `We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.`,
    },
    {
      title: "CONTROLS FOR DO-NOT-TRACK FEATURES",
      content: `Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.`,
    },
    {
      title: "OPTIONS REGARDING YOUR INFORMATION",
      content: `Account Information: You may at any time review or change the information in your account or terminate your account by logging into your account settings and updating your account or contacting us using the contact information provided.

Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.

Emails and Communications: If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by noting your preferences at the time you register your account with the Site, logging into your account settings and updating your preferences, or contacting us using the contact information provided.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 mb-6 sm:mb-8">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 sm:mb-8 px-4">
                Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed px-4">
                Last updated: October 2025
              </p>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mt-4 px-4">
                Your privacy is important to us. This policy outlines how we
                collect, use, and protect your information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-100 flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0">
                      <Icon className="text-primary-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-text-secondary leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}

            {additionalSections.map((section, index) => (
              <motion.div
                key={index + sections.length}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 transition-all duration-500 hover:shadow-2xl"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6 sm:mb-8">
                  {section.title}
                </h2>
                <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                  {section.content.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-text-secondary leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base md:text-lg whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 p-6 sm:p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              CONTACT US
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
              If you have questions or comments about this Privacy Policy,
              please contact us:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a
                href="mailto:hello@orchidconsulting.com"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-primary-100 transition-colors duration-300 text-sm sm:text-base md:text-lg"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                hello@orchidconsulting.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-primary-100 transition-colors duration-300 text-sm sm:text-base md:text-lg"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
