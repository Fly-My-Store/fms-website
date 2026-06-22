import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { privacyCustomerSections } from '@/content/privacy-customer';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Customer Privacy Policy',
  description: `Privacy Policy for Fly My Store customers.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Customer Privacy Policy"
      description={`Last updated: ${site.lastUpdated}`}
      activeRole="customer"
      pageType="privacy"
    >
      <LegalSections sections={privacyCustomerSections} />
    </LegalPage>
  );
}
