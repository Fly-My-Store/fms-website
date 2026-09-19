import { fetchRootCategories } from '@/lib/categories';
import SiteFooter from '@/components/SiteFooter';
import BenefitsSection from '@/components/landing/BenefitsSection';
import CategoryStrip from '@/components/landing/CategoryStrip';
import DownloadSection from '@/components/landing/DownloadSection';
import FaqSection from '@/components/landing/FaqSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import PartnerStrip from '@/components/landing/PartnerStrip';

export const revalidate = 300;

export default async function HomePage() {
  const categories = await fetchRootCategories();

  return (
    <div className="flex min-h-screen flex-col bg-white" data-theme="customer">
      <main className="flex-1">
        <HeroSection categories={categories} />
        <CategoryStrip categories={categories} />
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
