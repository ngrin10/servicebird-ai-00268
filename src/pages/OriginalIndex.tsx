
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsOverview from "@/components/sections/BenefitsOverview";
import CTASection from "@/components/sections/CTASection";
import RevenueCalculator from "@/components/calculator/RevenueCalculator";
import PricingSection from "@/components/sections/PricingSection";
import PricingComparison from "@/components/pricing/PricingComparison";
import FAQSection from "@/components/sections/FAQSection";

const OriginalIndex = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <HeroSection />

      <BenefitsOverview />

      <CTASection
        title="Ready to See How It Works?"
        description="See exactly how you'll automatically capture leads, generate repeat business, and get more 5-star reviews."
        primaryButtonText="Choose Your Plan"
        primaryButtonHref="/get-started"
        showSecondaryButton={false}
      />

      <RevenueCalculator />

      <PricingSection />

      <PricingComparison />

      <FAQSection />

      <CTASection 
        title="Ready to See ServiceBird in Action?"
        description="See exactly how you'll automatically capture leads, generate repeat business, and get more 5-star reviews."
        primaryButtonText="Choose Your Plan"
        primaryButtonHref="/get-started"
        showSecondaryButton={false}
        className="py-20"
      />

      <Footer />
    </div>
  );
};

export default OriginalIndex;
