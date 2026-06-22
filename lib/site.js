export const site = {
  name: 'Fly My Store',
  legalName: 'Fly My Store',
  tagline: 'Shop local. Delivered fast.',
  description:
    'Order from trusted neighbourhood stores and track your delivery in real time — groceries, essentials, and more at your doorstep.',
  domain: 'https://flymystore.com',
  supportEmail: 'support@flymystore.com',
  supportPhone: '+91 1800-123-4567',
  supportPhoneTel: '+9118001234567',
  lastUpdated: 'June 22, 2026',
};

export const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '/support', label: 'Support' },
  { href: '/privacy-policy', label: 'Privacy' },
];

export const legalUrls = {
  customer: {
    privacy: `${site.domain}/privacy-policy`,
    terms: `${site.domain}/terms`,
  },
  seller: {
    privacy: `${site.domain}/seller/privacy-policy`,
    terms: `${site.domain}/seller/terms`,
  },
  rider: {
    privacy: `${site.domain}/rider/privacy-policy`,
    terms: `${site.domain}/rider/terms`,
  },
};

export const footerLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/support', label: 'Support' },
];

export const categories = [
  { emoji: '🥬', label: 'Fresh produce' },
  { emoji: '🛒', label: 'Groceries' },
  { emoji: '🥛', label: 'Dairy & bread' },
  { emoji: '🍿', label: 'Snacks' },
  { emoji: '🧴', label: 'Personal care' },
  { emoji: '📱', label: 'Electronics' },
  { emoji: '🏠', label: 'Home essentials' },
  { emoji: '🛡️', label: 'Screen guard' },
];

export const stats = [
  { value: 'Local', label: 'Neighbourhood stores' },
  { value: 'Live', label: 'Order tracking' },
  { value: 'Secure', label: 'Razorpay payments' },
  { value: '24/7', label: 'In-app support' },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Set your location',
    description: 'Open the app, allow location access, and discover stores delivering near you.',
  },
  {
    step: '02',
    title: 'Browse & add to cart',
    description: 'Explore categories, pick products from local sellers, and checkout in minutes.',
  },
  {
    step: '03',
    title: 'Track to your door',
    description: 'Pay securely, follow live order status, and get delivery updates until it arrives.',
  },
];

export const benefits = [
  {
    icon: '⚡',
    title: 'Fast local delivery',
    description: 'Hyperlocal stores mean shorter routes and quicker deliveries to your neighbourhood.',
  },
  {
    icon: '🏪',
    title: 'Trusted local sellers',
    description: 'Shop from verified neighbourhood stores you know — not anonymous warehouses.',
  },
  {
    icon: '📍',
    title: 'Real-time tracking',
    description: 'Follow your order from confirmation to doorstep with live status updates.',
  },
  {
    icon: '💳',
    title: 'Safe payments',
    description: 'Pay securely via Razorpay with UPI, cards, and other trusted payment options.',
  },
  {
    icon: '🛡️',
    title: 'Order protection',
    description: 'Raise support tickets in-app if anything goes wrong — we are here to help.',
  },
  {
    icon: '🔁',
    title: 'Easy reordering',
    description: 'View order history and reorder your favourites without starting from scratch.',
  },
];

export const features = [
  {
    title: 'Browse by category',
    description: 'Find what you need quickly with organised categories from fresh produce to electronics.',
  },
  {
    title: 'Nearby store discovery',
    description: 'See which local stores are open and delivering to your address right now.',
  },
  {
    title: 'Smart cart & checkout',
    description: 'Add items, review your order, choose delivery address, and pay — all in one flow.',
  },
  {
    title: 'Push notifications',
    description: 'Get instant updates when your order is confirmed, packed, and out for delivery.',
  },
];

export const testimonials = [
  {
    quote:
      'Finally an app that connects me to stores in my area. Ordered groceries and tracked the rider right to my door.',
    name: 'Priya S.',
    location: 'Customer',
  },
  {
    quote:
      'Love browsing categories and seeing what local shops have. Checkout was smooth and payment felt secure.',
    name: 'Rahul M.',
    location: 'Customer',
  },
  {
    quote:
      'The order history makes reordering so easy. Support responded quickly when I had a question.',
    name: 'Ananya K.',
    location: 'Customer',
  },
];

export const faqs = [
  {
    question: 'What is Fly My Store?',
    answer:
      'Fly My Store is a hyperlocal shopping app that lets you order from neighbourhood stores and get deliveries to your doorstep.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Download the customer app, set your delivery location, browse stores and products, add items to cart, and checkout with your preferred payment method.',
  },
  {
    question: 'Can I track my delivery?',
    answer:
      'Yes. Once your order is placed, you can follow its status in the app from confirmation through delivery.',
  },
  {
    question: 'What payment methods are supported?',
    answer:
      'We support secure online payments through Razorpay, including UPI and cards where available.',
  },
  {
    question: 'How do I get help with an order?',
    answer:
      'Use the in-app Support section to create a ticket, or contact us at support@flymystore.com.',
  },
];

export const apps = [
  {
    id: 'customer',
    label: 'Customer app',
    description: 'Shop from local stores and track deliveries',
    accent: '#2563eb',
    primary: true,
  },
  {
    id: 'seller',
    label: 'Seller app',
    description: 'Manage your store, orders, and inventory',
    accent: '#16a34a',
    href: '/support',
  },
  {
    id: 'rider',
    label: 'Rider app',
    description: 'Accept delivery jobs and track earnings',
    accent: '#d97706',
    href: '/support',
  },
];
