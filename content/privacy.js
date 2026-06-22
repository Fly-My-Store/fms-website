import { site } from '@/lib/site';

export const privacySections = [
  {
    title: '1. Introduction',
    body: `This Privacy Policy ("Policy") describes how ${site.legalName} ("${site.name}", "we", "us", or "our") collects, uses, stores, shares, and protects personal information when you access or use our website at ${site.domain}, mobile applications (including the Customer, Seller, and Rider apps), and related services (collectively, the "Platform").`,
    paragraphs: [
      'By using the Platform, you acknowledge that you have read and understood this Policy. If you do not agree with this Policy, please do not use the Platform.',
      'This Policy is published in accordance with applicable Indian laws, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, to the extent applicable.',
    ],
  },
  {
    title: '2. Scope and roles',
    body: 'This Policy applies to all users of the Platform, including:',
    list: [
      'Customers who browse stores, place orders, and receive deliveries',
      'Sellers who list products, manage stores, and fulfill orders',
      'Riders who accept and complete delivery assignments',
      'Visitors to our website and users who contact support',
    ],
    paragraphs: [
      `${site.name} operates as a technology platform that connects customers, sellers, and riders. Sellers are independent merchants responsible for their product listings, pricing, and fulfillment. Riders are independent delivery partners responsible for completing assigned deliveries.`,
    ],
  },
  {
    title: '3. Information we collect',
    body: 'We may collect the following categories of information:',
    subsections: [
      {
        title: '3.1 Information you provide',
        list: [
          'Name, phone number, email address, and profile details',
          'Delivery addresses, saved locations, and address labels',
          'Order details, cart contents, preferences, and support messages',
          'Attachments uploaded with support tickets',
          'Seller store details, business information, catalog data, and inventory information',
          'Rider profile, vehicle details, availability, and delivery status updates',
          'OTP verification data and account deletion requests',
        ],
      },
      {
        title: '3.2 Information collected automatically',
        list: [
          'Device information such as device model, operating system, app version, and unique device identifiers',
          'Log data including IP address, access times, pages viewed, and app interactions',
          'Push notification tokens for order and service updates',
          'Approximate or precise location data when you grant permission (for store discovery, delivery routing, and live tracking)',
          'Background location data for riders while on active delivery duty, where permitted by you and applicable law',
        ],
      },
      {
        title: '3.3 Payment information',
        list: [
          'Transaction identifiers, payment status, order amounts, refunds, and billing metadata',
          'Payment processing is handled by Razorpay and other authorized payment partners',
          'We do not store full card numbers, CVV, or UPI PIN on our servers',
        ],
      },
      {
        title: '3.4 Information from third parties',
        list: [
          'OTP and SMS delivery status from our SMS provider (2Factor.in)',
          'Payment confirmation and fraud signals from payment processors',
          'Push delivery and engagement data from Firebase Cloud Messaging',
          'Email delivery status from our email service provider (SendGrid), where applicable',
        ],
      },
    ],
  },
  {
    title: '4. Sensitive personal data',
    body: 'Certain information we process may be considered sensitive personal data or information under Indian law, including:',
    list: [
      'Financial information related to payment transactions (processed by payment partners)',
      'Precise geolocation data used for delivery and rider tracking',
      'Government-issued identification or business documents, if submitted for seller or rider verification',
    ],
    paragraphs: [
      'We collect and process such information only where necessary, with your consent or other lawful basis, and in accordance with applicable law.',
    ],
  },
  {
    title: '5. How we use your information',
    body: 'We use personal information for the following purposes:',
    list: [
      'Creating and managing user accounts and authenticating users via OTP',
      'Enabling customers to discover stores, place orders, and receive deliveries',
      'Enabling sellers to manage stores, products, orders, and payouts',
      'Enabling riders to receive, accept, and complete delivery assignments',
      'Processing payments, refunds, and transaction records',
      'Providing order status updates, push notifications, SMS, and email communications',
      'Displaying live or periodic location updates for order tracking',
      'Operating customer support, dispute handling, and account deletion workflows',
      'Improving Platform performance, security, fraud prevention, and user experience',
      'Complying with legal obligations, law enforcement requests, and regulatory requirements',
    ],
  },
  {
    title: '6. Legal basis for processing',
    body: 'Depending on the context, we process personal data based on one or more of the following grounds:',
    list: [
      'Your consent, including for location access, notifications, and marketing where applicable',
      'Performance of a contract, including fulfilling orders and providing Platform services',
      'Compliance with legal obligations',
      'Legitimate interests such as fraud prevention, security, analytics, and service improvement, where not overridden by your rights',
    ],
  },
  {
    title: '7. How we share information',
    body: 'We may share personal information in the following circumstances:',
    list: [
      'With sellers, to fulfill customer orders (such as name, phone number, delivery address, and order details)',
      'With riders, to complete deliveries (such as pickup/drop details, customer contact information, and location data)',
      'With customers, limited seller/rider information needed for order fulfillment and support',
      'With service providers who assist us in operating the Platform, including cloud hosting, payment processing (Razorpay), SMS/OTP delivery (2Factor.in), email delivery (SendGrid), push notifications (Firebase), analytics, and customer support tools',
      'With government authorities, regulators, courts, or law enforcement when required by law or to protect rights, safety, and security',
      'In connection with a merger, acquisition, financing, or sale of assets, subject to appropriate safeguards',
    ],
    paragraphs: [
      'We do not sell your personal information to third parties for their independent marketing purposes.',
      'Sellers and riders who receive your information through the Platform are expected to use it only for legitimate order-related purposes and in compliance with applicable law.',
    ],
  },
  {
    title: '8. Data retention',
    body: 'We retain personal information only for as long as necessary to fulfill the purposes described in this Policy, unless a longer retention period is required or permitted by law.',
    list: [
      'Account information is retained while your account remains active',
      'Order and transaction records may be retained for accounting, tax, dispute resolution, and legal compliance',
      'Support tickets and related communications may be retained to resolve issues and improve service',
      'Logs and security records may be retained for a limited period for fraud prevention and auditing',
    ],
    paragraphs: [
      'When you delete your account, we will delete or anonymize personal information where feasible, except where retention is required by law or for legitimate business purposes such as resolving disputes or enforcing agreements.',
    ],
  },
  {
    title: '9. Account deletion',
    body: 'Customers may request deletion of their account through the in-app account deletion flow, subject to eligibility checks (such as pending orders or unresolved disputes). Account deletion may require OTP verification sent to your registered phone number.',
    paragraphs: [
      'Upon successful deletion, access to your account will be removed and personal data will be deleted or anonymized in accordance with our retention practices and legal obligations.',
      'To request deletion or assistance, you may also contact us at ' + site.supportEmail + '.',
    ],
  },
  {
    title: '10. Your rights and choices',
    body: 'Subject to applicable law, you may have the right to:',
    list: [
      'Access personal information we hold about you',
      'Request correction of inaccurate or incomplete information',
      'Withdraw consent where processing is based on consent',
      'Request deletion of your account and personal information, subject to legal exceptions',
      'Restrict or object to certain processing activities',
      'Nominate another person to exercise your rights in the event of death or incapacity, where permitted by law',
    ],
    paragraphs: [
      'You can update certain profile and address information directly in the app. You may control location, camera, notification, and other device permissions through your device settings.',
      'To exercise your rights, contact us at ' + site.supportEmail + '. We may need to verify your identity before processing requests.',
    ],
  },
  {
    title: '11. Cookies and website data',
    body: `Our website (${site.domain}) is primarily informational. We may use essential cookies or similar technologies necessary for site functionality, security, and performance. We do not use the website to knowingly profile users for third-party advertising.`,
  },
  {
    title: '12. Security',
    body: 'We implement reasonable technical and organizational safeguards designed to protect personal information against unauthorized access, disclosure, alteration, or destruction. These measures may include access controls, encryption in transit, secure authentication, and monitoring.',
    paragraphs: [
      'However, no method of transmission over the internet or electronic storage is completely secure. You are responsible for maintaining the confidentiality of your account credentials and OTP codes.',
    ],
  },
  {
    title: '13. Children',
    body: 'The Platform is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us and we will take appropriate steps to delete such information.',
  },
  {
    title: '14. International transfers',
    body: 'Your information may be stored and processed in India and, where applicable, in other countries where our service providers operate. When we transfer information internationally, we take steps designed to ensure appropriate safeguards consistent with applicable law.',
  },
  {
    title: '15. Third-party links and services',
    body: 'The Platform may contain links to third-party websites or services. This Policy does not apply to third-party services such as payment gateways, app stores, or external websites. We encourage you to review the privacy policies of those third parties.',
  },
  {
    title: '16. Changes to this Policy',
    body: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. The updated Policy will be posted on this page with a revised "Last updated" date. Material changes may also be communicated through the app or other appropriate means where required by law.',
  },
  {
    title: '17. Grievance and contact',
    body: `If you have questions, concerns, or complaints regarding this Privacy Policy or our data practices, please contact:`,
    paragraphs: [
      `Grievance Officer / Data Protection Contact\n${site.legalName}\nEmail: ${site.supportEmail}\nPhone: ${site.supportPhone}`,
      'We will endeavour to respond to grievances within the timelines prescribed under applicable Indian law.',
    ],
  },
];
