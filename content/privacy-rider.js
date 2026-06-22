import { site } from '@/lib/site';

export const privacyRiderSections = [
  {
    title: '1. Introduction',
    body: `This Rider Privacy Policy describes how ${site.legalName} ("${site.name}", "we", "us", or "our") collects, uses, stores, shares, and protects personal information when you use the Fly My Store Rider (Delivery) mobile application and related delivery partner services (collectively, the "Rider Services").`,
    paragraphs: [
      'This Policy applies to delivery partners who register, accept jobs, and complete deliveries through the Platform.',
      'By using the Rider app, you agree to this Policy. If you do not agree, do not use the Rider Services.',
    ],
  },
  {
    title: '2. Information we collect',
    body: 'We may collect the following information from riders:',
    subsections: [
      {
        title: '2.1 Account and profile information',
        list: [
          'Name, phone number, email address, and profile details',
          'OTP verification records and device identifiers',
          'Availability status, online/offline state, and job acceptance history',
        ],
      },
      {
        title: '2.2 Location information',
        list: [
          'Precise location when you grant location permission',
          'Foreground location while using the Rider app',
          'Background location while you are on active delivery duty, where enabled and permitted by you and applicable law',
          'Location updates submitted for live delivery tracking and dispatch',
        ],
      },
      {
        title: '2.3 Vehicle and verification information',
        list: [
          'Vehicle type, registration details, and onboarding documents',
          'Identity or compliance documents submitted during rider verification',
          'Photos or documents uploaded during onboarding or support requests',
        ],
      },
      {
        title: '2.4 Delivery and earnings data',
        list: [
          'Assigned jobs, pickup and drop details, delivery status updates, and timestamps',
          'Earnings, incentives, wallet balance, payouts, and transaction history',
          'Customer and seller contact details needed only to complete assigned deliveries',
          'Support tickets, complaints, and performance-related records',
        ],
      },
      {
        title: '2.5 Technical data',
        list: [
          'Push notification tokens for job alerts and delivery updates',
          'App logs, IP address, crash reports, and network diagnostics',
        ],
      },
    ],
  },
  {
    title: '3. How we use rider information',
    body: 'We use rider information to:',
    list: [
      'Create and manage rider accounts and verify identity',
      'Assign, offer, and manage delivery jobs',
      'Display navigation, pickup, and drop-off details for active deliveries',
      'Share live or periodic location updates with customers and operations teams during active deliveries',
      'Calculate earnings, incentives, and payouts',
      'Provide rider support and investigate delivery issues',
      'Monitor safety, service quality, fraud, and policy compliance',
      'Comply with legal and regulatory obligations',
    ],
  },
  {
    title: '4. How we share rider information',
    body: 'We may share rider information with:',
    list: [
      'Customers, limited information needed for active deliveries such as name, phone number, and live location during delivery',
      'Sellers, limited information needed for pickup coordination',
      'Payment and payout providers to process rider earnings',
      'Cloud, mapping, SMS, notification, and support service providers',
      'Law enforcement or regulators when required by law',
    ],
    paragraphs: [
      'We do not sell your personal information to third parties for their independent marketing.',
    ],
  },
  {
    title: '5. Location permission and background tracking',
    body: 'The Rider app may request foreground and background location access to assign nearby jobs, navigate deliveries, and provide live tracking during active delivery duty.',
    paragraphs: [
      'You can control location permissions in your device settings. Some Rider features may not work without location access.',
      'Background location is intended for use while completing active deliveries, not for unrelated monitoring.',
    ],
  },
  {
    title: '6. Data retention',
    body: 'We retain rider information while your account is active and as needed for payout records, dispute resolution, safety review, and legal compliance.',
  },
  {
    title: '7. Your choices and rights',
    body: 'You may update certain profile details in the Rider app and manage location or notification permissions on your device.',
    paragraphs: [
      `To exercise privacy rights or request account closure, contact ${site.supportEmail}.`,
      'Account deletion may be restricted while active deliveries, pending payouts, or investigations are unresolved.',
    ],
  },
  {
    title: '8. Security',
    body: 'We use reasonable safeguards to protect rider information. You must keep your login credentials confidential and use the app safely while driving or delivering.',
  },
  {
    title: '9. Changes and contact',
    body: 'We may update this Policy from time to time. Continued use of the Rider Services after updates constitutes acceptance of the revised Policy.',
    paragraphs: [
      `Questions: ${site.supportEmail} | ${site.supportPhone}`,
    ],
  },
];
