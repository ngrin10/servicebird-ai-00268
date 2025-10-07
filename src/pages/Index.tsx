
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsOverview from "@/components/sections/BenefitsOverview";
import AIFeaturesSection from "@/components/sections/AIFeaturesSection";
import MarketingFeaturesSection from "@/components/sections/MarketingFeaturesSection";
import SimpleSetupSection from "@/components/sections/SimpleSetupSection";
import CTASection from "@/components/sections/CTASection";
import RevenueCalculator from "@/components/calculator/RevenueCalculator";
import ThreeTierPricing from "@/components/pricing/ThreeTierPricing";
import PricingComparison from "@/components/pricing/PricingComparison";
import LightingOfferSection from "@/components/sections/LightingOfferSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <HeroSection />

      <BenefitsOverview />

      <AIFeaturesSection />

      <MarketingFeaturesSection />

      <SimpleSetupSection />

      <ThreeTierPricing />

      <CTASection
        title="Ready to See How It Works?"
        description="See exactly how you'll automatically capture leads, generate repeat business, and get more 5-star reviews."
        primaryButtonText="Get Started"
        primaryButtonHref="/get-started"
        showSecondaryButton={false}
      />

      {/* Holiday Lighting Special Offer */}
      <LightingOfferSection />

      <RevenueCalculator />

      <PricingComparison />

      <FAQSection />

      <CTASection 
        title="Ready to See ServiceBird in Action?"
        description="See exactly how you'll automatically capture leads, generate repeat business, and get more 5-star reviews."
        primaryButtonText="See Pricing"
        primaryButtonHref="/get-started"
        showSecondaryButton={false}
        className="py-20"
      />

      <Footer />
    </div>
  );
};

export default Index;
