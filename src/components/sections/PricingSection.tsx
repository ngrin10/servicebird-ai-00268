
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="container px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ServiceBird Growth Engine
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Everything you need to capture, close, review & reactivate – nothing you don't
          </p>
          
          <Button 
            asChild 
            className="button-gradient text-lg px-8 py-3"
          >
            <a href="/get-started">
              Get Started Today
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
