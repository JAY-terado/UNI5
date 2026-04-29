import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesOverview from '@/components/FeaturesOverview';
import ModulesSection from '@/components/ModulesSection';
import HowItWorks from '@/components/HowItWorks';
import FaqSection from '@/components/FaqSection';
import MobileAppSection from '@/components/MobileAppSection';
import Footer from '@/components/Footer';
import TestimonialCta from '@/components/TestimonialCta';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesOverview />
      <ModulesSection />
      <HowItWorks />
      <MobileAppSection />
      <TestimonialCta />
      <FaqSection />
      <Footer />
    </main>
  );
}
