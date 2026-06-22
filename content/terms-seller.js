import { site } from '@/lib/site';

export const termsSellerSections = [
  {
    title: '1. Agreement',
    body: `These Seller Terms of Service ("Terms") govern your use of the Fly My Store Seller application and related seller services provided by ${site.legalName} ("${site.name}", "we", "us", or "our").`,
    paragraphs: [
      'By registering a store or using the Seller app, you agree to these Terms and the Seller Privacy Policy.',
    ],
  },
  {
    title: '2. Seller relationship',
    body: 'You operate as an independent merchant on the Platform. Unless expressly stated otherwise, you are not an employee, agent, or legal partner of Fly My Store.',
    paragraphs: [
      'You are responsible for the products you list, prices you set, order fulfillment, packaging, quality, and compliance with applicable laws.',
    ],
  },
  {
    title: '3. Eligibility and onboarding',
    body: 'To use the Seller app, you must:',
    list: [
      'Be at least 18 years old and authorized to operate the business you register',
      'Provide accurate store, contact, and business information',
      'Complete onboarding, verification, and document requirements where requested',
      'Maintain valid licenses, permits, and tax registrations required for your business',
    ],
  },
  {
    title: '4. Store listings and catalog',
    body: 'You are solely responsible for your product listings, descriptions, images, prices, stock availability, and category placement.',
    list: [
      'Listings must be accurate, lawful, and not misleading',
      'You must not sell prohibited, counterfeit, unsafe, or restricted products',
      'We may remove listings or suspend stores that violate law or platform policies',
      'You grant us a license to display your store name, branding, and catalog content to operate the Platform',
    ],
  },
  {
    title: '5. Orders and fulfillment',
    body: 'When a customer places an order with your store:',
    list: [
      'You are responsible for accepting, preparing, and handing over orders on time',
      'You must keep inventory and availability accurate',
      'You must cooperate with riders and customers for successful pickup or delivery',
      'You may cancel only for valid reasons such as stock unavailability, safety concerns, or operational issues',
    ],
  },
  {
    title: '6. Pricing, fees, and payouts',
    body: 'Prices, taxes, packaging charges, and discounts displayed in your store are your responsibility unless otherwise agreed in writing.',
    list: [
      'Platform fees, commissions, or settlement terms may apply as communicated during onboarding or in your seller dashboard',
      'Payouts are processed through authorized payment/settlement partners',
      'We may withhold or adjust payouts for refunds, chargebacks, fraud investigations, or policy violations',
    ],
  },
  {
    title: '7. Customer data',
    body: 'You may receive limited customer information to fulfill orders. You must use that information only for order fulfillment and support, keep it confidential, and not use it for unrelated marketing without lawful consent.',
  },
  {
    title: '8. Prohibited conduct',
    body: 'You must not:',
    list: [
      'Manipulate prices, reviews, or order flow fraudulently',
      'Divert customers off-platform to evade fees unlawfully',
      'Harass customers, riders, or platform staff',
      'Upload malware, false documents, or infringing content',
      'Operate multiple deceptive stores or impersonate another business',
    ],
  },
  {
    title: '9. Suspension and termination',
    body: 'We may suspend or terminate seller access for policy violations, customer complaints, legal risk, failed verification, or non-payment of amounts owed to the Platform.',
    paragraphs: [
      'You may request store closure subject to completion of pending orders and settlements.',
    ],
  },
  {
    title: '10. Disclaimers and liability',
    body: 'The Seller Services are provided on an "as is" and "as available" basis to the extent permitted by law.',
    paragraphs: [
      'We are not liable for indirect or consequential damages arising from your use of the Seller app, except where liability cannot be excluded under applicable law.',
    ],
  },
  {
    title: '11. Governing law',
    body: 'These Terms are governed by the laws of India. Disputes are subject to courts in India unless otherwise required by law.',
  },
  {
    title: '12. Contact',
    body: `Seller support: ${site.supportEmail} | ${site.supportPhone}`,
  },
];
