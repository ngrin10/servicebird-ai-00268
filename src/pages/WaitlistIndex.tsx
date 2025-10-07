
import WaitlistNavigation from "@/components/WaitlistNavigation";
import Footer from "@/components/Footer";
import WaitlistHeroSection from "@/components/sections/WaitlistHeroSection";
import BenefitsOverview from "@/components/sections/BenefitsOverview";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { useEffect } from "react";

const WaitlistIndex = () => {
  useEffect(() => {
    // Load Typeform script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WaitlistNavigation />
      
      <WaitlistHeroSection />

      <BenefitsOverview />

      <CTASection 
        title="Ready to See How It Works?"
        description="Join our waitlist to be the first to know when ServiceBird launches."
        primaryButtonText="Join Waitlist"
        primaryButtonHref="#waitlist"
        showSecondaryButton={false}
      />

      {/* Typeform Embed */}
      <section id="waitlist" className="container px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be the first to know when ServiceBird launches and get exclusive early access.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div data-tf-live="01JYE9M396M10SYVZX2E41W4PN"></div>
        </div>
      </section>

      <FAQSection />

      <CTASection 
        title="Ready to Transform Your Business?"
        description="Join hundreds of home service professionals who are already on the waitlist."
        primaryButtonText="Join Waitlist"
        primaryButtonHref="#waitlist"
        showSecondaryButton={false}
        className="py-20"
      />

      <Footer />
    </div>
  );
};

export default WaitlistIndex;
