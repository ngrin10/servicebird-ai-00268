
import { motion } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";

const ProblemSolution = () => {
  const comparisons = [
    {
      problem: "Manually calling back every missed lead",
      solution: "Automatic text-back within 60 seconds",
      impact: "Convert 40% more leads"
    },
    {
      problem: "Forgetting to follow up on estimates",
      solution: "Automated 48-hour follow-up sequences",
      impact: "30% higher quote acceptance"
    },
    {
      problem: "Chasing customers for Google reviews",
      solution: "Automated review requests after job completion",
      impact: "Get 5x more reviews"
    },
    {
      problem: "Past customers disappearing forever",
      solution: "52-week reactivation campaigns",
      impact: "Bring back 25% of old customers"
    }
  ];

  return (
    <section className="container px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-normal text-center mb-16"
        >
          From Manual Chaos to{" "}
          <span className="text-gradient font-medium">Automated Profit</span>
        </motion.h2>

        <div className="space-y-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item.problem}</span>
                </div>
                
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item.solution}</span>
                  </div>
                  <div className="text-primary font-medium text-sm ml-8">
                    {item.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
