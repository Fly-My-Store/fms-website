import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { termsRiderSections } from '@/content/terms-rider';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Rider Terms of Service',
  description: `Terms of Service for Fly My Store delivery riders.`,
};

export default function RiderTermsPage() {
  return (
    <LegalPage
      title="Rider Terms of Service"
      description={`Last updated: ${site.lastUpdated}`}
      activeRole="rider"
      pageType="terms"
    >
      <LegalSections sections={termsRiderSections} />
    </LegalPage>
  );
}
