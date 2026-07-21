export const site = {
  name: 'Fly My Store',
  legalName: 'Fly My Store',
  tagline: 'Shop local. Delivered fast.',
  description:
    'Order from neighbourhood stores on the customer app, with sellers packing orders and riders delivering to your door.',
  domain: 'https://flymystore.com',
  supportEmail: 'contact@flymystore.com',
  supportPhone: '+91 7766886777',
  supportPhoneTel: '+917766886777',
  lastUpdated: 'July 21, 2026',
};

/** Use absolute paths so links work from Support / Privacy / Terms, not only the homepage. */
export const navLinks = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features', label: 'Features' },
  { href: '/support', label: 'Support' },
  { href: '/privacy-policy', label: 'Privacy' },
];

export const legalUrls = {
  privacy: `${site.domain}/privacy-policy`,
  terms: `${site.domain}/terms`,
};

export const footerLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/support', label: 'Support' },
];

export const categories = [
  { emoji: '📱', label: 'Mobile' },
  { emoji: '🎧', label: 'Audio' },
  { emoji: '🔋', label: 'Power' },
  { emoji: '🛡️', label: 'Screen guard' },
  { emoji: '🔌', label: 'Accessories' },
  { emoji: '🛒', label: 'Essentials' },
  { emoji: '🏠', label: 'Home' },
  { emoji: '🧴', label: 'Personal care' },
];

export const stats = [
  { value: '3 apps', label: 'Customer, seller, rider' },
  { value: 'Local', label: 'Neighbourhood stores' },
  { value: 'Live', label: 'Order status updates' },
  { value: 'Secure', label: 'Pay online or COD' },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Set your location',
    description: 'Open the customer app, allow location access, and see stores that deliver near you.',
  },
  {
    step: '02',
    title: 'Browse & checkout',
    description: 'Pick products from local sellers, add them to cart, and pay with Razorpay or cash on delivery.',
  },
  {
    step: '03',
    title: 'Track until delivery',
    description: 'Follow order status as the seller packs and a rider brings it to your door.',
  },
];

export const benefits = [
  {
    icon: '⚡',
    title: 'Local delivery',
    description: 'Orders go to nearby stores, so routes stay short and delivery stays practical.',
  },
  {
    icon: '🏪',
    title: 'Neighbourhood stores',
    description: 'Shop from sellers on the platform — real local stores, not anonymous warehouses.',
  },
  {
    icon: '📍',
    title: 'Order status in-app',
    description: 'See confirmation, packing, out-for-delivery, and delivered updates on your order.',
  },
  {
    icon: '💳',
    title: 'Online pay or COD',
    description: 'Checkout with Razorpay (UPI, cards) or choose cash on delivery where available.',
  },
  {
    icon: '🛡️',
    title: 'In-app support tickets',
    description: 'Raise a ticket from order details or Support in the customer, seller, or rider app.',
  },
  {
    icon: '📦',
    title: 'Order history',
    description: 'Open past orders anytime to review items, status, and delivery details.',
  },
];

export const features = [
  {
    title: 'Browse by category',
    description: 'Find products quickly across categories like mobile, audio, power, accessories, and screen guards.',
  },
  {
    title: 'Nearby store discovery',
    description: 'See which local stores can deliver to your address and shop from their catalog.',
  },
  {
    title: 'Cart & checkout',
    description: 'Add items, choose a delivery address, and pay online or with cash on delivery.',
  },
  {
    title: 'Push notifications',
    description: 'Get notified when your order is confirmed, packed, assigned, and out for delivery.',
  },
];

export const faqs = [
  {
    question: 'What is Fly My Store?',
    answer:
      'Fly My Store is a hyperlocal shopping platform with three apps: customers order from neighbourhood stores, sellers manage inventory and packing, and riders complete deliveries.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Open the customer app, set your delivery location, browse stores and products, add items to cart, and checkout with Razorpay or cash on delivery.',
  },
  {
    question: 'Can I track my delivery?',
    answer:
      'Yes. Open the order in the customer app to follow status from confirmation through packing and delivery. Status updates when the seller and rider complete each step.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'You can pay securely online through Razorpay (including UPI and cards where available), or choose cash on delivery when the store offers it.',
  },
  {
    question: 'How do I get help with an order?',
    answer:
      'Use Support in the app to create a ticket from your order, or contact us at contact@flymystore.com / +91 7766886777. We aim to respond within 1–2 business days.',
  },
];

export const apps = [
  {
    id: 'customer',
    label: 'Customer app',
    description: 'Shop from local stores and follow order status',
    accent: '#2563eb',
    primary: true,
  },
  {
    id: 'seller',
    label: 'Seller app',
    description: 'Confirm orders, pack items, and manage your store',
    accent: '#16a34a',
    href: '/support',
  },
  {
    id: 'rider',
    label: 'Rider app',
    description: 'Accept jobs, navigate to pickup/drop, and mark delivered',
    accent: '#d97706',
    href: '/support',
  },
];
