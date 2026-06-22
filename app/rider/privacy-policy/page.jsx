import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { privacyRiderSections } from '@/content/privacy-rider';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Rider Privacy Policy',
  description: `Privacy Policy for Fly My Store delivery riders.`,
};

export default function RiderPrivacyPolicyPage() {
  return (
    <LegalPage
      title="Rider Privacy Policy"
      description={`Last updated: ${site.lastUpdated}`}
      activeRole="rider"
      pageType="privacy"
    >
      <LegalSections sections={privacyRiderSections} />
    </LegalPage>
  );
}
