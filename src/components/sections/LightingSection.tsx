
import { motion } from "framer-motion";
import { Lightbulb, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const LightingSection = () => {
  return (
    <section className="container px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-8 text-center max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <Lightbulb className="w-8 h-8 text-primary" />
          <h3 className="text-3xl font-medium">🎄 Lighting Services? (Optional)</h3>
        </div>
        
        <p className="text-xl text-gray-300 mb-8">
          Already offering lighting? We automate your special campaigns perfectly:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Check className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-medium">Permanent Lighting</h4>
            </div>
            <p className="text-gray-300">
              Year-round automated nurturing and install-day reminders.
            </p>
          </div>
          
          <div className="glass rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Check className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-medium">Holiday Lighting</h4>
            </div>
            <p className="text-gray-300">
              Seasonal campaigns (Aug–Nov) capturing early bookings and urgency.
            </p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-2 justify-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="text-green-300 font-medium">Your Benefit: </span>
              <span className="text-gray-300">Effortlessly book more high-ticket lighting jobs automatically.</span>
            </div>
          </div>
        </div>

        <Button className="button-gradient">
          Activate Lighting Automation →
        </Button>
      </motion.div>
    </section>
  );
};

export default LightingSection;
