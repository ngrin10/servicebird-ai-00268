
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const PricingComparison = () => {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ServiceBird vs. DIY Approach
            </h2>
            <p className="text-xl text-muted-foreground">
              See the real cost of trying to build this yourself
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DIY Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                ⚠️ DIY With Multiple Tools
              </h3>
              <p className="text-muted-foreground mb-6 text-center">If you try to stitch this together yourself...</p>
              
              <div className="space-y-4">
                {[
                  ["Dedicated Business Line (OpenPhone)", "$39"],
                  ["Review Automation Tool (NiceJob)", "$99"],
                  ["Lead Follow-Up & Text-Back (Zapier + SMS)", "$79"],
                  ["Email & SMS Platform (Mailchimp)", "$59"],
                  ["CRM & Automation (ActiveCampaign)", "$149"],
                  ["Referral Tools (ReferralCandy)", "$99"],
                  ["Call Tracking (CallRail)", "$45"],
                  ["Your Time (10 hrs/mo × $100/hr)", "$1,000"]
                ].map(([tool, cost], index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/50 last:border-b-0">
                    <div className="flex items-center">
                      <X className="w-4 h-4 text-muted-foreground mr-3 flex-shrink-0" />
                      <span className="text-sm">{tool}</span>
                    </div>
                    <span className="font-medium">{cost}</span>
                  </div>
                ))}
                <div className="border-t-2 border-border pt-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">TOTAL:</span>
                    <span className="font-bold text-2xl text-muted-foreground">$1,569+/month</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6 text-center">
                😬 Plus you still have to manage 7 tools, 5 dashboards, and 0 clear ROI.
              </p>
            </motion.div>

            {/* ServiceBird Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border-2 border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                ✅ ServiceBird Solution
              </h3>
              
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary mr-3" />
                  <span className="text-lg font-medium">All-in-One Automation Platform</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-4">$149/month</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="font-bold text-primary text-2xl">1</div>
                  <div className="text-sm text-muted-foreground">Login</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="font-bold text-primary text-2xl">1</div>
                  <div className="text-sm text-muted-foreground">Dashboard</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <div className="font-bold text-primary text-2xl">5</div>
                  <div className="text-sm text-muted-foreground">Day Setup</div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="font-bold text-lg text-primary mb-2">
                  10x cheaper. 100x simpler.
                </p>
                <p className="text-muted-foreground">
                  Everything you need in one place, built specifically for home service professionals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
