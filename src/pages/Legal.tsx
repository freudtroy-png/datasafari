import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

interface LegalProps {
  title: string
}

const legalContent: Record<string, { sections: { heading: string; body: string }[] }> = {
  'Privacy Policy': {
    sections: [
      {
        heading: 'Information We Collect',
        body: 'We collect information you provide directly, such as your name, email address, and payment information when you purchase an eSIM. We also collect device information, IP address, and usage data to improve our service.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'Your information is used to process your orders, deliver eSIM profiles, provide customer support, send service updates, and improve our platform. We never sell your personal data to third parties.',
      },
      {
        heading: 'Data Sharing',
        body: 'We share your data only with trusted partners who help us deliver the eSIM service (network operators, payment processors). These partners are contractually bound to protect your data.',
      },
      {
        heading: 'Data Retention',
        body: 'We retain your personal data for as long as your account is active or as needed to provide you services. You can request deletion of your data at any time by contacting our support team.',
      },
      {
        heading: 'Your Rights',
        body: 'You have the right to access, correct, or delete your personal data. You may also restrict or object to processing. To exercise these rights, contact us at privacy@datasafari.com.',
      },
      {
        heading: 'Cookies',
        body: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and serve targeted advertisements. You can control cookie preferences in your browser settings.',
      },
      {
        heading: 'Security',
        body: 'We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your personal information from unauthorized access.',
      },
      {
        heading: 'International Transfers',
        body: 'Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place through standard contractual clauses.',
      },
      {
        heading: 'Children Privacy',
        body: 'Our service is not directed to individuals under 16. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete it promptly.',
      },
      {
        heading: 'Changes to This Policy',
        body: 'We may update this privacy policy from time to time. We will notify you of material changes by email or through a notice on our website.',
      },
      {
        heading: 'Contact',
        body: 'For privacy-related inquiries, contact us at privacy@datasafari.com or write to DataSafari, 100 Connectivity Lane, Singapore 048580.',
      },
    ],
  },
  'Terms of Service': {
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: 'By purchasing or using any DataSafari eSIM service, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.',
      },
      {
        heading: 'Service Description',
        body: 'DataSafari provides digital eSIM profiles that allow you to connect to mobile networks in supported countries. Service availability, speeds, and coverage vary by destination and local network conditions.',
      },
      {
        heading: 'Account Registration',
        body: 'You must provide accurate information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.',
      },
      {
        heading: 'Purchases and Payments',
        body: 'All prices are in USD unless otherwise stated. Payment is due at time of purchase. We accept major credit cards, PayPal, and selected local payment methods.',
      },
      {
        heading: 'eSIM Activation and Usage',
        body: 'eSIM profiles are activated upon first connection to a supported network. Data allowances reset per plan terms. Unused data does not roll over unless specified.',
      },
      {
        heading: 'Fair Usage Policy',
        body: 'Unlimited data plans are subject to a fair usage cap of 30 GB per billing period. After reaching this cap, speeds may be reduced to 1 Mbps for the remainder of the period.',
      },
      {
        heading: 'Refund Policy',
        body: 'Full refunds are available within 30 days for eSIMs that have not been installed or activated. Installed but unused eSIMs may be eligible for a one-time courtesy refund.',
      },
      {
        heading: 'Prohibited Activities',
        body: 'You may not use our service for illegal activities, spam, network abuse, or any activity that violates applicable laws or network operator policies.',
      },
      {
        heading: 'Limitation of Liability',
        body: 'DataSafari is not liable for indirect damages arising from service interruptions, data loss, or network unavailability. Our total liability is limited to the amount paid for the affected service.',
      },
      {
        heading: 'Termination',
        body: 'We reserve the right to suspend or terminate accounts that violate these terms. You may terminate your account at any time by contacting support.',
      },
      {
        heading: 'Governing Law',
        body: 'These terms are governed by the laws of Singapore. Any disputes shall be resolved through binding arbitration in Singapore.',
      },
      {
        heading: 'Changes to Terms',
        body: 'We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.',
      },
      {
        heading: 'Contact',
        body: 'For questions about these terms, contact legal@datasafari.com.',
      },
      {
        heading: 'Severability',
        body: 'If any provision of these terms is found to be unenforceable, the remaining provisions remain in full force and effect.',
      },
      {
        heading: 'Entire Agreement',
        body: 'These terms constitute the entire agreement between you and DataSafari regarding the use of our services.',
      },
      {
        heading: 'Waiver',
        body: 'Failure to enforce any right or provision of these terms does not constitute a waiver of such right or provision.',
      },
      {
        heading: 'Assignment',
        body: 'You may not assign your rights or obligations under these terms without our prior written consent.',
      },
    ],
  },
  'Refund Policy': {
    sections: [
      {
        heading: '30-Day Guarantee',
        body: 'We offer a full refund on any eSIM that has not been installed or activated within 30 days of purchase. Simply contact our support team with your order number.',
      },
      {
        heading: 'Unused eSIMs',
        body: 'If you have installed your eSIM but have not used any data, you may be eligible for a one-time courtesy refund. Contact support within 30 days of purchase.',
      },
      {
        heading: 'Partially Used eSIMs',
        body: 'Partially used eSIMs are generally non-refundable. However, we evaluate requests on a case-by-case basis for extenuating circumstances.',
      },
      {
        heading: 'Technical Issues',
        body: 'If you experience persistent technical issues that prevent eSIM activation despite our support team troubleshooting, you are eligible for a full refund.',
      },
      {
        heading: 'Coverage Disputes',
        body: 'Coverage information is provided by our network partners and is accurate at time of listing. Refunds for coverage disputes are evaluated case by case.',
      },
      {
        heading: 'Processing Time',
        body: 'Refunds are processed within 5-10 business days. The refund will be credited to your original payment method.',
      },
      {
        heading: 'Promotional Purchases',
        body: 'eSIMs purchased with promotional codes or during sales events are subject to the same refund policy unless otherwise stated in the promotion terms.',
      },
      {
        heading: 'Bulk Orders',
        body: 'Bulk and corporate orders may have different refund terms as specified in your agreement. Contact your account manager for details.',
      },
      {
        heading: 'Fraud Prevention',
        body: 'We reserve the right to deny refunds if we detect patterns of abuse or fraudulent activity associated with an account.',
      },
      {
        heading: 'How to Request',
        body: 'Email support@datasafari.com with your order number and reason for refund. Our team typically responds within 2 hours.',
      },
    ],
  },
  'Cookie Policy': {
    sections: [
      {
        heading: 'What Are Cookies',
        body: 'Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, understand how you use our site, and improve your experience.',
      },
      {
        heading: 'Essential Cookies',
        body: 'These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of essential cookies.',
      },
      {
        heading: 'Analytics Cookies',
        body: 'We use analytics cookies to understand how visitors interact with our website. This helps us improve the user experience by identifying which pages are most useful and where users encounter issues.',
      },
      {
        heading: 'Functional Cookies',
        body: 'Functional cookies remember your preferences, such as currency selection and language, to provide a personalized experience on future visits.',
      },
      {
        heading: 'Advertising Cookies',
        body: 'We partner with third-party advertising networks to show you relevant offers. These cookies track your browsing across websites to build a profile of your interests.',
      },
      {
        heading: 'Third-Party Cookies',
        body: 'Some cookies are placed by third-party services that appear on our pages, including payment processors, analytics providers, and social media platforms.',
      },
      {
        heading: 'Managing Cookies',
        body: 'You can control cookie preferences through your browser settings. You may block or delete cookies, but this may affect the functionality of our website.',
      },
      {
        heading: 'Cookie Duration',
        body: 'Session cookies expire when you close your browser. Persistent cookies remain on your device for a set period or until manually deleted.',
      },
      {
        heading: 'Updates to This Policy',
        body: 'We may update this cookie policy periodically. Changes will be posted on this page with a revised effective date.',
      },
    ],
  },
}

export function Legal({ title }: LegalProps) {
  const content = legalContent[title]
  if (!content) return null

  return (
    <>
      <section className="pt-32 pb-12 bg-ds-ink text-white">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-10 h-10 rounded-full border border-white/8 flex items-center justify-center mx-auto mb-4">
              <Shield size={16} className="text-ds-green" />
            </div>
            <h1 className="text-[clamp(28px,3.6vw,48px)] font-extrabold tracking-tight">{title}</h1>
          </motion.div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="wrap max-w-[700px]">
          <div className="flex gap-3 mb-8 flex-wrap">
            {Object.keys(legalContent).map((name) => {
              const slugs: Record<string, string> = {
                'Privacy Policy': '/privacy',
                'Terms of Service': '/terms',
                'Refund Policy': '/refund',
                'Cookie Policy': '/cookies',
              }
              return (
                <a
                  key={name}
                  href={slugs[name]}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    title === name
                      ? 'bg-ds-green/10 text-ds-green-dark border border-ds-green/30'
                      : 'bg-transparent text-ds-muted border border-ds-line hover:border-ds-green/30'
                  }`}
                >
                  {name}
                </a>
              )
            })}
          </div>
          <div className="space-y-10">
            {content.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <h2 className="text-lg font-bold text-ds-ink mb-2">{section.heading}</h2>
                <p className="text-sm text-ds-body leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
