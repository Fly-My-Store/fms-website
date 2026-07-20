import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { termsSections } from '@/content/terms';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Fly My Store customers, sellers, and riders.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="Last updated: July 20, 2026"
      currentPath="/terms"
    >
      <LegalSections sections={termsSections} />
    </LegalPage>
  );
}
