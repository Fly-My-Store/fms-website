import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { termsSections } from '@/content/terms';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${site.name} — rules and conditions for using our platform.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description={`Last updated: ${site.lastUpdated}`}
    >
      <LegalSections sections={termsSections} />
    </LegalPage>
  );
}
