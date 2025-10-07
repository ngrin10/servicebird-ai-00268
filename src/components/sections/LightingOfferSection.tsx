import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, Star } from "lucide-react";

const LightingOfferSection = () => {
  return (
    <section className="container px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 relative border-2 border-primary shadow-xl"
        >
          {/* Most Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Holiday Season Special
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Holiday Lighting Package</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get 10-20 Jobs Per Month
            </p>
            
            <Button 
              asChild
              className="w-full text-lg py-3 button-gradient shadow-lg"
            >
              <a href="/lighting-jobs" target="_blank" rel="noopener noreferrer">
                Learn More About Ads
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LightingOfferSection;