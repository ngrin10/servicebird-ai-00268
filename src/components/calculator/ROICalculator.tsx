
import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Calculator, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROICalculator = () => {
  const [leads, setLeads] = useState(50);
  const [avgJobValue, setAvgJobValue] = useState(500);
  const [customers, setCustomers] = useState(200);

  // Calculations based on the specific benefits mentioned
  const newLeadsCaptured = leads * 0.3 * avgJobValue; // 30% more leads from instant response
  const customerReactivation = customers * 0.25 * (avgJobValue / 12); // 25% repeat business
  const reviewDrivenRevenue = customers * 0.1 * (avgJobValue / 12); // 10% more business from reviews
  
  const monthlyIncrease = newLeadsCaptured + customerReactivation + reviewDrivenRevenue;
  const annualIncrease = monthlyIncrease * 12;

  return (
    <section className="container px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            💰 See{" "}
            <span className="text-gradient font-medium">EXACTLY How Much More You'll Make</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            If you have <strong>50 monthly leads</strong>, average job value <strong>$500</strong>, and <strong>200 current customers</strong>, here's your revenue boost:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-medium">Customize Your Numbers</h3>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Monthly Leads</label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>10</span>
                  <span className="text-primary font-medium">{leads} leads</span>
                  <span>200</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Average Job Value</label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>$100</span>
                  <span className="text-primary font-medium">${avgJobValue}</span>
                  <span>$2,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Total Customers</label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={customers}
                  onChange={(e) => setCustomers(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>50</span>
                  <span className="text-primary font-medium">{customers} customers</span>
                  <span>1,000</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-medium">Your Revenue Boost</h3>
              </div>

              <div className="space-y-4">
                <div className="glass rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">New Leads Captured</span>
                    <span className="text-primary font-bold">+${Math.round(newLeadsCaptured).toLocaleString()}/mo</span>
                  </div>
                  <div className="text-sm text-gray-400">30% more leads from instant response</div>
                </div>

                <div className="glass rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Repeat Customer Revenue</span>
                    <span className="text-primary font-bold">+${Math.round(customerReactivation).toLocaleString()}/mo</span>
                  </div>
                  <div className="text-sm text-gray-400">25% more repeat bookings</div>
                </div>

                <div className="glass rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Review-Driven Revenue</span>
                    <span className="text-primary font-bold">+${Math.round(reviewDrivenRevenue).toLocaleString()}/mo</span>
                  </div>
                  <div className="text-sm text-gray-400">5x more positive reviews</div>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-medium">Total Additional Monthly Revenue</span>
                    <span className="text-3xl font-bold text-primary">+${Math.round(monthlyIncrease).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-gray-300">Annual Revenue Increase</span>
                    <span className="text-2xl font-bold text-gradient">+${Math.round(annualIncrease).toLocaleString()}+</span>
                  </div>
                </div>
              </div>

              <Button className="button-gradient w-full mt-6">
                <DollarSign className="w-5 h-5 mr-2" />
                Get My Custom Revenue Plan
              </Button>
              
              <p className="text-xs text-gray-400 text-center">
                (Customize your numbers to see your exact revenue boost.)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
