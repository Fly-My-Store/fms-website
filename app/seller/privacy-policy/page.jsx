import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { privacySellerSections } from '@/content/privacy-seller';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Seller Privacy Policy',
  description: `Privacy Policy for Fly My Store sellers.`,
};

export default function SellerPrivacyPolicyPage() {
  return (
    <LegalPage
      title="Seller Privacy Policy"
      description={`Last updated: ${site.lastUpdated}`}
      activeRole="seller"
      pageType="privacy"
    >
      <LegalSections sections={privacySellerSections} />
    </LegalPage>
  );
}
