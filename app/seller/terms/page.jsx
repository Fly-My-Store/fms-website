import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { termsSellerSections } from '@/content/terms-seller';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Seller Terms of Service',
  description: `Terms of Service for Fly My Store sellers.`,
};

export default function SellerTermsPage() {
  return (
    <LegalPage
      title="Seller Terms of Service"
      description={`Last updated: ${site.lastUpdated}`}
      activeRole="seller"
      pageType="terms"
    >
      <LegalSections sections={termsSellerSections} />
    </LegalPage>
  );
}
