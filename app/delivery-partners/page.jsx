import PartnerLanding from '@/components/partners/PartnerLanding';
import { site, storeLinks } from '@/lib/site';

export const metadata = {
  title: 'Deliver with Fly My Store',
  description: `Join as a delivery partner. Call ${site.supportPhone} — no form.`,
};

export default function DeliveryPartnersPage() {
  return (
    <PartnerLanding
      eyebrow="Deliver with Fly My Store"
      title="Ride neighbourhood orders."
      description="Pick up from local stores and drop to nearby homes. Call us, upload documents in the rider app, and go live after approval."
      theme="rider"
      highlights={[
        {
          icon: '🛵',
          title: 'Short hops',
          body: 'Store to door on the same pin — not cross-city hauls.',
        },
        {
          icon: '🏪',
          title: 'Pickup at the shop',
          body: 'You collect from neighbourhood counters, not a warehouse at the edge of town.',
        },
        {
          icon: '🛍️',
          title: 'Mixed local bags',
          body: 'Grocery, pharmacy, food, and electronics from shops on the same streets.',
        },
        {
          icon: '📌',
          title: 'Streets you already know',
          body: 'Jobs stay around stores on Fly My Store — the neighbourhood, not a new city every shift.',
        },
      ]}
      steps={[
        { step: '01', title: 'Call us', body: `Ring ${site.supportPhone} and say you want to deliver.` },
        { step: '02', title: 'Get the rider app', body: 'Download from the App Store or Google Play and add your details and vehicle.' },
        { step: '03', title: 'Upload documents', body: 'Driving licence, Aadhaar (front and back), and a photo. We review and approve.' },
        { step: '04', title: 'Take nearby jobs', body: 'After approval, pick up from shops on your pin and drop nearby.' },
      ]}
      requirements={[
        '18 years or older',
        'A two-wheeler and a valid driving licence (front and back photos)',
        'Aadhaar (front and back) and a recent photo',
        'A smartphone (iOS or Android)',
      ]}
      faqs={[
        {
          question: 'Is there an application form?',
          body: `No web form. Call ${site.supportPhone} or email ${site.supportEmail}, then upload documents in the rider app for approval.`,
        },
        {
          question: 'Do I need my own vehicle?',
          body: 'Yes. Deliveries are on a two-wheeler you bring. We do not provide bikes.',
        },
        {
          question: 'Where will I deliver?',
          body: 'Around neighbourhood stores on Fly My Store — pickup and drop stay on the same pin.',
        },
        {
          question: 'Is this warehouse delivery?',
          body: 'No. You pick up from real shops — kirana, pharmacy, food, electronics — and drop nearby.',
        },
      ]}
      appLinks={storeLinks.rider}
      appLabel="rider app"
      callHint="deliver"
    />
  );
}
