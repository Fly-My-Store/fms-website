export const site = {
  name: 'Fly My Store',
  legalName: 'Fly My Store',
  tagline: 'Local Stores. Delivered fast.',
  description:
    'Shop neighbourhood stores for groceries, pharmacy, food, mobiles, and more — delivered to your door.',
  domain: 'https://flymystore.com',
  supportEmail: 'contact@flymystore.com',
  supportPhone: '+91 7766886777',
  supportPhoneTel: '+917766886777',
  lastUpdated: 'July 21, 2026',
};

export const footerCompanyLinks = [
  { href: '/#download', label: 'Get the app' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/support', label: 'Support' },
];

export const footerPartnerLinks = [
  { href: '/selling-partners', label: 'Sell on Fly My Store' },
  { href: '/delivery-partners', label: 'Deliver with Fly My Store' },
];

/** Live App Store / Play Store listings */
export const storeLinks = {
  customer: {
    android: 'https://play.google.com/store/apps/details?id=com.fmscustomerapp',
    ios: 'https://apps.apple.com/us/app/fly-my-store/id6788622220',
  },
  seller: {
    android: 'https://play.google.com/store/apps/details?id=com.fmssellerapp',
    ios: 'https://apps.apple.com/us/app/fly-my-store-seller/id6788622391',
  },
  rider: {
    android: 'https://play.google.com/store/apps/details?id=com.fmsdeliveryapp',
    ios: 'https://apps.apple.com/us/app/fly-my-store-delivery/id6788622397',
  },
};

export const stats = [
  { value: 'Nearby', label: 'Stores that deliver to you' },
  { value: 'Local', label: 'Shops on your street, not warehouses' },
  { value: 'Protect', label: 'Screen guards for your phone' },
  { value: 'One pin', label: 'Grocery, pharmacy, food, mobiles' },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Set your pin',
    description: 'Open the app, allow location, and see which neighbourhood stores deliver to you.',
  },
  {
    step: '02',
    title: 'Shop the store next door',
    description: 'Groceries, pharmacy, food, mobiles, screen guards — from catalogs of stores around you.',
  },
  {
    step: '03',
    title: 'A rider picks up from that shop',
    description: 'The order leaves the store around the corner — not a warehouse — and comes to your door.',
  },
];

export const benefits = [
  {
    icon: '🏪',
    title: 'Neighbourhood stores, not warehouses',
    description: 'Orders go to shops near you — the same stores you already know on the street.',
  },
  {
    icon: '🛡️',
    title: 'Screen guards that actually fit',
    description: 'Protect matches guards to your phone model so you are not guessing at the shop counter.',
  },
  {
    icon: '💊',
    title: 'Kirana, pharmacy, food, and mobiles',
    description: 'The shops on your street, in one app — not a grocery-only dark store.',
  },
  {
    icon: '📌',
    title: 'Your pin decides what you see',
    description: 'Home only lists neighbourhood sellers who can actually reach the address you set.',
  },
];

export const features = [
  {
    title: 'Stores that can reach your pin',
    description: 'Home only shows neighbourhood sellers who deliver to the address you set.',
  },
  {
    title: 'Protect',
    description: 'Find a screen guard for your device instead of scrolling a generic accessories aisle.',
  },
  {
    title: 'Same street, different shops',
    description: 'Grocery, pharmacy, food, and electronics from stores that already sit next to each other.',
  },
];

export const faqs = [
  {
    question: 'What is Fly My Store?',
    answer:
      'Fly My Store is a neighbourhood shopping app. You order from local stores near your pin and get the order delivered to your door.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Open the app, set your pin, pick a neighbourhood store, add items, and checkout.',
  },
  {
    question: 'Do you deliver from a warehouse?',
    answer:
      'No. Orders go to real shops near you — kirana, pharmacy, food, mobiles — and a rider picks up from that counter.',
  },
  {
    question: 'What is Protect?',
    answer:
      'Protect matches a screen guard to your phone model, from neighbourhood stores that sell them — not a generic accessories aisle.',
  },
  {
    question: 'How do I get help with an order?',
    answer:
      `Use Support in the app, or contact us at ${site.supportEmail} / ${site.supportPhone}. We aim to reply within 1–2 business days.`,
  },
];

export const apps = [
  {
    id: 'customer',
    label: 'Customer app',
    description: 'Shop neighbourhood stores on your pin',
    accent: '#0070B8',
    primary: true,
    ...storeLinks.customer,
  },
  {
    id: 'seller',
    label: 'Seller app',
    description: 'List your shop for customers around the corner',
    accent: '#0072CE',
    ...storeLinks.seller,
  },
  {
    id: 'rider',
    label: 'Rider app',
    description: 'Pick up from neighbourhood shops and drop nearby',
    accent: '#228B22',
    ...storeLinks.rider,
  },
];
