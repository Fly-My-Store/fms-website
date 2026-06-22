import LegalPage from '@/components/LegalPage';
import LegalSections from '@/components/LegalSections';
import { privacySections } from '@/content/privacy';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${site.name} — how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={`Last updated: ${site.lastUpdated}`}
    >
      <LegalSections sections={privacySections} />
    </LegalPage>
  );
}
