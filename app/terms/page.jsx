import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { termsCustomerSections } from '@/content/terms-customer';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Customer Terms of Service',
  description: `Terms of Service for Fly My Store customers.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Customer Terms of Service"
      description={`Last updated: ${site.lastUpdated}`}
      activeRole="customer"
      pageType="terms"
    >
      <LegalSections sections={termsCustomerSections} />
    </LegalPage>
  );
}
