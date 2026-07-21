import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import BenefitsSection from '@/components/landing/BenefitsSection';
import CategoryStrip from '@/components/landing/CategoryStrip';
import DownloadSection from '@/components/landing/DownloadSection';
import FaqSection from '@/components/landing/FaqSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import PartnerStrip from '@/components/landing/PartnerStrip';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoryStrip />
        <HowItWorksSection />
        <BenefitsSection />
        <FeaturesSection />
        <DownloadSection />
        <FaqSection />
        <PartnerStrip />
      </main>
      <SiteFooter />
    </div>
  );
}
