import PartnerLanding from '@/components/partners/PartnerLanding';
import { site, storeLinks } from '@/lib/site';

export const metadata = {
  title: 'Sell on Fly My Store',
  description: `List your neighbourhood store. Call ${site.supportPhone} — no form.`,
};

export default function SellingPartnersPage() {
  return (
    <PartnerLanding
      eyebrow="Sell on Fly My Store"
      title="Your store, on the phones next door."
      description="Customers nearby order from your catalog. Call us, upload documents, and go live after approval."
      theme="seller"
      highlights={[
        {
          icon: '📍',
          title: 'Customers around the corner',
          body: 'Orders come from people whose pin you already serve — not a national marketplace dump.',
        },
        {
          icon: '🗺️',
          title: 'Only pins you can reach',
          body: 'Your catalog shows to neighbours you can deliver to. You are not listed city-wide.',
        },
        {
          icon: '🏪',
          title: 'Kirana next to electronics',
          body: 'Grocery, pharmacy, food, and mobiles sit on the same street — and in the same app.',
        },
        {
          icon: '🛵',
          title: 'Pickup at your counter',
          body: 'Fly My Store riders collect from your shop. You do not need your own fleet.',
        },
      ]}
      steps={[
        { step: '01', title: 'Call us', body: `Ring ${site.supportPhone} and say you want to sell.` },
        { step: '02', title: 'Set up your store', body: 'Download the seller app and add shop, location, and business details.' },
        { step: '03', title: 'Upload documents', body: 'PAN and bank proof are required. GST and FSSAI if you have them. We review and approve.' },
        { step: '04', title: 'Start taking orders', body: 'After approval, your catalog shows to customers who can be delivered from your location.' },
      ]}
      requirements={[
        'A neighbourhood store (kirana, electronics, pharmacy, restaurant, and similar)',
        'PAN card and bank proof (cancelled cheque or passbook)',
        'GST certificate and FSSAI licence if they apply to your shop',
        'A smartphone for the seller app',
        'Someone who can confirm and pack orders during open hours',
      ]}
      faqs={[
        {
          question: 'Is there an application form?',
          body: `No web form. Call ${site.supportPhone} or email ${site.supportEmail}, then upload documents in the seller app for approval.`,
        },
        {
          question: 'What can I sell?',
          body: 'Whatever your shop already stocks that we can list — grocery, pharmacy, food, mobiles, screen guards, and more.',
        },
        {
          question: 'Do I need my own riders?',
          body: 'No. Fly My Store riders pick up from your counter for delivery orders.',
        },
        {
          question: 'Who sees my store?',
          body: 'Customers whose pin you can actually reach. You are not dropped into a city-wide catalog.',
        },
      ]}
      appLinks={storeLinks.seller}
      appLabel="seller app"
      callHint="sell"
    />
  );
}
