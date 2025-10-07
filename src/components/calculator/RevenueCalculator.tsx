
import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RevenueCalculator = () => {
  const [monthlyLeads, setMonthlyLeads] = useState(50);
  const [avgJobValue, setAvgJobValue] = useState(500);

  // Calculate revenue increases based on more realistic percentages
  const recoveredLeads = monthlyLeads * 0.3 * avgJobValue; // 30% more from missed calls + faster response
  const repeatBusiness = monthlyLeads * 0.25 * avgJobValue; // 25% increase from reactivation
  const reviewBoost = monthlyLeads * 0.1 * avgJobValue; // 10% boost from better online presence
  
  const totalMonthly = recoveredLeads + repeatBusiness + reviewBoost;
  const roi = totalMonthly - 149; // ROI after ServiceBird cost

  return (
    <section className="container px-4 py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your Revenue Boost
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how much additional revenue ServiceBird will generate for your business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold">Your Business Numbers</h3>
              </div>

              <div>
                <label className="block text-lg font-medium mb-4">Monthly Leads</label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>10</span>
                  <span className="text-primary font-bold text-lg">{monthlyLeads} leads</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-medium mb-4">Average Job Value</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>$100</span>
                  <span className="text-primary font-bold text-lg">${avgJobValue}</span>
                  <span>$2,000</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Your Revenue Impact</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 glass rounded-lg">
                  <div>
                    <p className="font-medium">Captured Leads (30% more)</p>
                    <p className="text-sm text-muted-foreground">From instant response</p>
                  </div>
                  <p className="text-xl font-bold text-primary">+${Math.round(recoveredLeads).toLocaleString()}</p>
                </div>

                <div className="flex justify-between items-center p-4 glass rounded-lg">
                  <div>
                    <p className="font-medium">Repeat Business (25% increase)</p>
                    <p className="text-sm text-muted-foreground">From reactivation campaigns, seasonal reminders, and neighborhood routes</p>
                  </div>
                  <p className="text-xl font-bold text-primary">+${Math.round(repeatBusiness).toLocaleString()}</p>
                </div>

                <div className="flex justify-between items-center p-4 glass rounded-lg">
                  <div>
                    <p className="font-medium">Review-Driven Growth</p>
                    <p className="text-sm text-muted-foreground">From 5x more reviews</p>
                  </div>
                  <p className="text-xl font-bold text-primary">+${Math.round(reviewBoost).toLocaleString()}</p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-semibold">Total Monthly Revenue Boost</p>
                    <p className="text-2xl font-bold text-primary">+${Math.round(totalMonthly).toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-muted-foreground">ServiceBird Cost</p>
                    <p className="text-muted-foreground">-$149</p>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-xl font-bold">Monthly Profit Increase</p>
                    <p className="text-3xl font-bold text-primary">+${Math.round(roi).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <Link to="/get-started">
                <Button className="button-gradient w-full mt-6 text-lg py-6">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Choose Your Plan
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
