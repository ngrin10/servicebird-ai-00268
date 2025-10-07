
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState } from "react";

const WaitlistHeroSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const coreServices = [
    "Window Washing", 
    "Power Washing", 
    "Gutter Cleaning"
  ];

  const additionalServices = [
    "Lawn Aeration",
    "Holiday Lighting",
    "Permanent Lighting"
  ];

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative container px-4 pt-20 pb-12 md:pt-24 md:pb-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
          <TextGenerateEffect words="Automate your home service business" />
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <TextGenerateEffect words="ServiceBird captures leads, requests reviews, and rebooks customers — all on autopilot." />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <Button 
            size="lg" 
            className="button-gradient text-lg px-10 py-4 mb-4"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Be the first to know when we launch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <p className="text-lg text-muted-foreground mb-4">Built for:</p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {coreServices.map((service, index) => (
              <div key={index} className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 text-sm font-medium">
                <Check className="mr-2 w-4 h-4" />
                <span>{service}</span>
              </div>
            ))}
            {showAllServices && additionalServices.map((service, index) => (
              <div key={index + coreServices.length} className="flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 text-sm font-medium">
                <Check className="mr-2 w-4 h-4" />
                <span>{service}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setShowAllServices(!showAllServices)}
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center mx-auto"
          >
            {showAllServices ? 'Show Less' : '+ See More Services'}
            <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showAllServices ? 'rotate-180' : ''}`} />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WaitlistHeroSection;
