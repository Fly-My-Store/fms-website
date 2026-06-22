import { site } from '@/lib/site';

export const privacySellerSections = [
  {
    title: '1. Introduction',
    body: `This Seller Privacy Policy describes how ${site.legalName} ("${site.name}", "we", "us", or "our") collects, uses, stores, shares, and protects personal and business information when you use the Fly My Store Seller mobile application and related seller services (collectively, the "Seller Services").`,
    paragraphs: [
      'This Policy applies to store owners, managers, and authorized staff who register and operate a store on the Platform.',
      'By using the Seller app, you agree to this Policy. If you do not agree, do not use the Seller Services.',
    ],
  },
  {
    title: '2. Information we collect',
    body: 'We may collect the following information from sellers:',
    subsections: [
      {
        title: '2.1 Account and identity information',
        list: [
          'Name, phone number, email address, and login credentials',
          'OTP verification records and device information',
          'Profile photo and contact details shown to customers where applicable',
        ],
      },
      {
        title: '2.2 Store and business information',
        list: [
          'Store name, description, address, location coordinates, and operating hours',
          'Business category, support email, and store branding assets',
          'Product listings, prices, inventory, variants, images, and catalog metadata',
          'Tax, billing, and payout-related details where required for settlements',
        ],
      },
      {
        title: '2.3 Verification and compliance documents',
        list: [
          'Government-issued identification, business registration, or KYC documents submitted during onboarding',
          'Store documents uploaded for verification or compliance review',
        ],
      },
      {
        title: '2.4 Order and operations data',
        list: [
          'Incoming orders, order status updates, cancellations, and fulfillment records',
          'Communications with customers or support regarding orders',
          'Wallet balance, payouts, transaction history, and settlement records',
        ],
      },
      {
        title: '2.5 Technical and usage data',
        list: [
          'App usage logs, IP address, device identifiers, and crash diagnostics',
          'Push notification tokens for order alerts and operational messages',
        ],
      },
    ],
  },
  {
    title: '3. How we use seller information',
    body: 'We use seller information to:',
    list: [
      'Create and manage seller accounts and authenticate users',
      'Onboard, verify, and activate stores on the Platform',
      'Display store and product listings to customers',
      'Route customer orders to your store and support order fulfillment',
      'Process settlements, payouts, and financial records',
      'Provide seller support, dispute handling, and compliance review',
      'Send operational notifications about orders, payouts, and account status',
      'Prevent fraud, enforce platform policies, and comply with legal obligations',
    ],
  },
  {
    title: '4. How we share seller information',
    body: 'We may share seller information with:',
    list: [
      'Customers, to the extent needed to display your store, products, and order-related contact details',
      'Riders, to coordinate pickup and delivery of orders from your store',
      'Payment partners and banking/payout service providers to process settlements',
      'Cloud hosting, SMS, email, notification, and analytics providers that help us operate the Seller Services',
      'Regulators, courts, or law enforcement when required by law',
    ],
    paragraphs: [
      'We do not sell your personal information to third parties for their independent marketing.',
    ],
  },
  {
    title: '5. Sensitive and business data',
    body: 'Some seller information may be considered sensitive personal data or confidential business information under applicable law, including identity documents, financial settlement data, and precise store location.',
    paragraphs: [
      'We process such information only where necessary to provide the Seller Services, verify your business, process payouts, or comply with law.',
    ],
  },
  {
    title: '6. Data retention',
    body: 'We retain seller information while your account and store remain active and for as long as needed for accounting, tax, dispute resolution, fraud prevention, and legal compliance.',
    paragraphs: [
      'If your seller account is closed, we may retain certain records as required by law or legitimate business needs.',
    ],
  },
  {
    title: '7. Your choices and rights',
    body: 'You may update certain store and profile information in the Seller app. Subject to applicable law, you may request access, correction, or deletion of personal information by contacting us.',
    paragraphs: [
      `Contact: ${site.supportEmail}`,
      'Account deletion or store closure may be restricted while pending orders, payouts, or compliance reviews are unresolved.',
    ],
  },
  {
    title: '8. Security',
    body: 'We use reasonable technical and organizational safeguards to protect seller information. You are responsible for securing devices used to access the Seller app and for controlling staff access to your store account.',
  },
  {
    title: '9. Changes and contact',
    body: 'We may update this Policy from time to time. Continued use of the Seller Services after updates constitutes acceptance of the revised Policy.',
    paragraphs: [
      `Questions: ${site.supportEmail} | ${site.supportPhone}`,
    ],
  },
];
