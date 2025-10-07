
import { motion } from "framer-motion";
import { Check, MessageSquare, Quote, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const TierCard = ({ 
  tier, 
  price, 
  description, 
  features, 
  cta, 
  popular = false,
  icon 
}: {
  tier: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass glass-hover rounded-xl p-8 relative ${popular ? 'border-2 border-primary' : ''}`}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-6">
      <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-medium mb-2">{tier}</h3>
      <div className="text-4xl font-bold mb-2">{price}</div>
      <p className="text-gray-400">{description}</p>
    </div>

    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>

    <Button className="button-gradient w-full">
      {cta}
    </Button>
  </motion.div>
);

const TierBenefits = () => {
  const tiers = [
    {
      tier: "Starter",
      price: "$149/mo",
      description: "Perfect for getting started with basic automation",
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      features: [
        "Instant lead text-back system",
        "Automated appointment reminders",
        "Basic review collection",
        "Simple pipeline management",
        "Email & SMS follow-ups"
      ],
      cta: "Start Free Trial"
    },
    {
      tier: "Growth",
      price: "$249/mo",
      description: "Everything in Starter + professional quoting",
      icon: <Quote className="w-8 h-8 text-primary" />,
      popular: true,
      features: [
        "Everything in Starter",
        "Professional quote system",
        "E-signature & contracts",
        "48-hour quote follow-ups",
        "Customer reactivation campaigns",
        "Revenue tracking dashboard"
      ],
      cta: "Start Free Trial"
    },
    {
      tier: "Premium",
      price: "$449/mo",
      description: "For high-revenue businesses + AI features",
      icon: <Brain className="w-8 h-8 text-primary" />,
      features: [
        "Everything in Growth",
        "AI-powered appointment setting",
        "Advanced conversation management",
        "Industry-specific templates",
        "CRM integrations (Jobber, etc.)",
        "White-glove setup & training"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-normal mb-6"
        >
          Start Where You Are,{" "}
          <span className="text-gradient font-medium">Scale As You Grow</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400"
        >
          Every package solves real problems and saves you hours every week. Choose based on your business size and automation needs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <TierCard key={index} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default TierBenefits;
