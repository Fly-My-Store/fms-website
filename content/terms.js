import { termsOfServiceSections } from './terms-of-service';
import { termsOfUseSections } from './terms-of-use';

export const termsSections = [
  {
    title: 'Terms & Conditions',
    paragraphs: [
      'Welcome to FLY MY STORE.',
      'These Terms & Conditions ("Terms") combine our platform Terms of Service and app Terms of Use into a single agreement between you ("User", "You", "Customer", "Vendor", or "Delivery Partner") and FLY MY STORE PRIVATE LIMITED ("Company", "We", "Us", or "Our").',
      'They govern your access to and use of the FLY MY STORE mobile applications (Google Play Store and Apple App Store), our website, and related services (collectively, the "Platform").',
      'The Company is registered under the laws of India, with its registered office at H. No 24, Block No 2, Shastrinagar, Kadma, Jamshedpur, Jharkhand, PIN 831005.',
      'By downloading, installing, accessing, or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must discontinue use immediately.',
    ],
  },
  {
    title: 'Part A — Platform Terms of Service',
    body: 'The following sections govern marketplace operations, orders, payments, and platform use.',
  },
  ...termsOfServiceSections.slice(1),
  {
    title: 'Part B — App Terms of Use',
    body: 'The following sections govern your download, installation, and use of the mobile application, including Apple App Store and Google Play Store requirements.',
  },
  ...termsOfUseSections.slice(1, -2),
];
