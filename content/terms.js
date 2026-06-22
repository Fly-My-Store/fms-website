import { site } from '@/lib/site';

export const termsSections = [
  {
    title: '1. Agreement to terms',
    body: `These Terms of Service ("Terms") constitute a legally binding agreement between you and ${site.legalName} ("${site.name}", "we", "us", or "our") governing your access to and use of our website at ${site.domain}, mobile applications (Customer, Seller, and Rider apps), and related services (collectively, the "Platform").`,
    paragraphs: [
      'By creating an account, accessing, or using the Platform, you agree to these Terms and our Privacy Policy. If you do not agree, you must not use the Platform.',
      'If you use the Platform on behalf of a business or other entity, you represent that you have authority to bind that entity to these Terms.',
    ],
  },
  {
    title: '2. About the Platform',
    body: `${site.name} is a hyperlocal commerce and delivery technology platform that enables:`,
    list: [
      'Customers to discover local stores, place orders, make payments, and receive deliveries',
      'Sellers to list products, manage inventory, accept orders, and coordinate fulfillment',
      'Riders to accept delivery assignments and complete deliveries',
    ],
    paragraphs: [
      'Unless expressly stated otherwise, we act as an intermediary platform. Products listed on the Platform are generally offered by independent sellers, not by us. We do not guarantee the quality, safety, legality, or availability of products listed by sellers.',
    ],
  },
  {
    title: '3. Eligibility',
    body: 'To use the Platform, you must:',
    list: [
      'Be at least 18 years of age and capable of entering into a binding contract under Indian law',
      'Provide accurate, current, and complete registration information',
      'Maintain the security of your account credentials and OTP verification codes',
      'Comply with all applicable laws, including local commerce, tax, transport, and food safety regulations where relevant',
    ],
    paragraphs: [
      'Sellers and riders may be subject to additional onboarding, verification, and compliance requirements.',
    ],
  },
  {
    title: '4. Account registration and security',
    body: 'You may be required to register using your mobile number and verify your identity through a one-time password (OTP) or other authentication methods.',
    list: [
      'You are responsible for all activity conducted through your account',
      'You must promptly notify us of any unauthorized access or security breach',
      'We may suspend or terminate accounts that provide false information or violate these Terms',
      'You may not create multiple accounts to evade restrictions, commit fraud, or abuse promotions',
    ],
  },
  {
    title: '5. Customer terms',
    body: 'If you use the Customer app, the following terms apply:',
    subsections: [
      {
        title: '5.1 Orders',
        list: [
          'Placing an order constitutes an offer to purchase products from the selected seller',
          'An order is confirmed only after seller acceptance and successful payment, where applicable',
          'Product images, descriptions, prices, availability, and delivery estimates are provided by sellers and may change',
          'We and/or sellers may refuse or cancel orders due to unavailability, pricing errors, delivery limitations, or suspected fraud',
        ],
      },
      {
        title: '5.2 Pricing and payments',
        list: [
          'Prices, taxes, delivery fees, packaging charges, and discounts may vary by store and location',
          'Payments are processed through authorized payment partners such as Razorpay',
          'You authorize us and our payment partners to charge your selected payment method for the total order amount',
          'Failed, reversed, or disputed payments may result in order cancellation',
        ],
      },
      {
        title: '5.3 Delivery',
        list: [
          'Estimated delivery times are indicative and not guaranteed',
          'You must provide accurate delivery details and be available to receive the order or authorize receipt',
          'Risk of loss for delivered goods generally passes upon delivery to the address provided, subject to applicable law and seller policies',
        ],
      },
      {
        title: '5.4 Cancellations and refunds',
        list: [
          'Cancellation and refund eligibility depend on order status, seller policy, and payment method',
          'Refunds, where approved, will be processed through the original payment method or another method we reasonably determine',
          'We are not responsible for delays caused by banks, payment networks, or third-party processors',
        ],
      },
    ],
  },
  {
    title: '6. Seller terms',
    body: 'If you use the Seller app, the following terms apply:',
    list: [
      'You are solely responsible for your store listings, product descriptions, pricing, stock availability, packaging, and legal compliance',
      'You must fulfill accepted orders promptly and in accordance with applicable laws and Platform policies',
      'You grant us a limited license to display your store name, logos, product content, and related materials for Platform operation and promotion',
      'You are responsible for taxes, licenses, permits, and regulatory obligations applicable to your business',
      'You must not list prohibited, counterfeit, unsafe, or illegal products',
      'We may remove listings, suspend stores, or withhold settlements for violations, customer complaints, or legal risk',
    ],
  },
  {
    title: '7. Rider terms',
    body: 'If you use the Rider app, the following terms apply:',
    list: [
      'You are an independent delivery partner and not an employee, agent, or partner of ours unless expressly agreed in writing',
      'You must comply with traffic laws, safety requirements, and local delivery regulations',
      'You agree to provide accurate location updates while performing active deliveries, where enabled',
      'You must handle orders carefully and maintain professional conduct with customers and sellers',
      'We may suspend rider access for safety concerns, fraud, repeated complaints, or policy violations',
    ],
  },
  {
    title: '8. Acceptable use',
    body: 'You agree not to:',
    list: [
      'Use the Platform for unlawful, fraudulent, abusive, or harmful purposes',
      'Interfere with Platform security, servers, networks, or other users',
      'Scrape, copy, reverse engineer, or exploit the Platform except as permitted by law',
      'Submit false orders, fake reviews, or misleading information',
      'Harass, threaten, or discriminate against other users or our personnel',
      'Use automated systems to access the Platform without our written permission',
      'Circumvent fees, promotions, or access controls',
    ],
  },
  {
    title: '9. Intellectual property',
    body: `The Platform, including its software, design, trademarks, logos, and content created by ${site.name}, is owned by or licensed to us and protected by intellectual property laws.`,
    paragraphs: [
      'You may not copy, modify, distribute, sell, or create derivative works from our Platform or branding without prior written consent.',
      'Seller and user content remains owned by the respective party, subject to the licenses granted to us for Platform operation.',
    ],
  },
  {
    title: '10. Third-party services',
    body: 'The Platform integrates with third-party services including payment processors, SMS providers, cloud infrastructure, mapping services, and push notification providers. Your use of those services may be subject to separate third-party terms and privacy policies.',
  },
  {
    title: '11. Disclaimers',
    body: 'To the fullest extent permitted by applicable law:',
    list: [
      'The Platform is provided on an "as is" and "as available" basis',
      'We do not warrant uninterrupted, secure, or error-free operation',
      'We do not guarantee the accuracy of seller listings, delivery times, or third-party content',
      'We are not responsible for acts or omissions of sellers, riders, payment partners, or other third parties',
      'Food, grocery, and product quality are primarily the responsibility of the seller, subject to applicable consumer protection laws',
    ],
  },
  {
    title: '12. Limitation of liability',
    body: `To the maximum extent permitted by law, ${site.name} and its directors, officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, goodwill, or business opportunity arising from your use of the Platform.`,
    paragraphs: [
      'Our total aggregate liability for any claim arising out of or relating to the Platform or these Terms shall not exceed the greater of (a) the amount of platform fees paid by you to us for the transaction giving rise to the claim during the three (3) months preceding the event, or (b) INR 5,000.',
      'Nothing in these Terms limits liability that cannot be limited under applicable law, including liability for fraud or wilful misconduct.',
    ],
  },
  {
    title: '13. Indemnity',
    body: 'You agree to indemnify, defend, and hold harmless ' + site.legalName + ', its affiliates, and personnel from any claims, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of:',
    list: [
      'Your use of the Platform',
      'Your violation of these Terms or applicable law',
      'Your products, services, listings, or conduct as a seller or rider',
      'Any dispute between you and another user',
    ],
  },
  {
    title: '14. Suspension and termination',
    body: 'We may suspend or terminate your access to the Platform at any time, with or without notice, if we reasonably believe you have violated these Terms, created legal or security risk, or if required by law.',
    paragraphs: [
      'You may stop using the Platform at any time. Customers may request account deletion through the app, subject to completion of pending obligations.',
      'Provisions that by their nature should survive termination will survive, including intellectual property, disclaimers, limitation of liability, indemnity, and governing law.',
    ],
  },
  {
    title: '15. Force majeure',
    body: 'We are not liable for failure or delay in performance caused by events beyond our reasonable control, including natural disasters, government actions, labour disputes, internet or telecom failures, power outages, civil unrest, pandemics, or failures of third-party service providers.',
  },
  {
    title: '16. Governing law and dispute resolution',
    body: 'These Terms are governed by the laws of India, without regard to conflict of law principles.',
    paragraphs: [
      'Subject to applicable law, courts in India shall have jurisdiction over disputes arising from these Terms or the Platform.',
      'Before initiating formal proceedings, you agree to contact us at ' + site.supportEmail + ' and attempt to resolve the dispute informally in good faith.',
    ],
  },
  {
    title: '17. Changes to these Terms',
    body: 'We may modify these Terms from time to time. Updated Terms will be posted on this page with a revised "Last updated" date. Your continued use of the Platform after changes become effective constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the Platform.',
  },
  {
    title: '18. Contact information',
    body: `For questions about these Terms, contact:`,
    paragraphs: [
      `${site.legalName}\nEmail: ${site.supportEmail}\nPhone: ${site.supportPhone}\nWebsite: ${site.domain}`,
    ],
  },
];
