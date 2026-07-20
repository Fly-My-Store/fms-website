import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { privacyPolicySections } from '@/content/privacy-policy';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Fly My Store customers, sellers, and riders.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="Last updated: July 20, 2026"
      currentPath="/privacy-policy"
    >
      <LegalSections sections={privacyPolicySections} />
    </LegalPage>
  );
}
