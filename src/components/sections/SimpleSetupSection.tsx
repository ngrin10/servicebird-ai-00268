import { motion } from "framer-motion";
import { Phone, FileCheck, Zap, Settings } from "lucide-react";

const SimpleSetupSection = () => {
  const steps = [
    {
      day: "Day 1",
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      title: "Purchase & Onboarding Call",
      description: "Sign up and book your setup call. We'll walk through your business needs"
    },
    {
      day: "Day 2-3", 
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone & Verification",
      description: "Set up your business phone number. Complete carrier verification (we guide you). Submit for text approval"
    },
    {
      day: "Day 4-5",
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "Connect & Launch", 
      description: "Link your existing tools (if any). Activate your automations. Start capturing more leads"
    }
  ];

  return (
    <section className="container px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Done-With-You Setup Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Getting Started Takes 3-5 Days
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Need help? Your dedicated onboarding specialist guides you through each step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-xl p-8 text-center relative"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              
              <div className="text-sm font-semibold text-primary mb-2">
                {step.day}
              </div>
              
              <h3 className="text-xl font-bold mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <Zap className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="glass rounded-xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            What's Included in Your Setup:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>1-on-1 onboarding call</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Setup documentation & videos</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Support during verification process</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Help connecting your existing tools</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SimpleSetupSection;