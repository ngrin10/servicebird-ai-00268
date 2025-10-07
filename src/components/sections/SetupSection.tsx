
import { motion } from "framer-motion";
import { Phone, Zap, TrendingUp } from "lucide-react";

const SetupSection = () => {
  const steps = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Short Onboarding Form"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Your automations launch the same day"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "See immediate, clear results"
    }
  ];

  return (
    <section className="container px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl p-8 text-center max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-medium mb-8">
          📅 Clear & Instant Setup{" "}
          <span className="text-primary">(No Tech Skills Needed)</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h4 className="text-lg font-medium text-center">{step.title}</h4>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SetupSection;
