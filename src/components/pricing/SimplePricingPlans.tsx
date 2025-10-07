
import { motion } from "framer-motion";
import { Check, MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlanCard = ({ 
  icon,
  title, 
  price, 
  description, 
  features, 
  benefit,
  popular = false,
  buttonText = "Select This Plan"
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features: string[];
  benefit: string;
  popular?: boolean;
  buttonText?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass glass-hover rounded-xl p-8 relative h-full ${popular ? 'border-2 border-primary' : ''}`}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="text-3xl font-bold text-primary">{price}</div>
      </div>
    </div>

    <p className="text-gray-400 text-lg mb-6">{description}</p>

    <div className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <span className="text-gray-300">{feature}</span>
        </div>
      ))}
    </div>

    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
        <div>
          <span className="text-green-300 font-medium">Your Benefit: </span>
          <span className="text-gray-300">{benefit}</span>
        </div>
      </div>
    </div>

    <Button className="button-gradient w-full">
      {buttonText} →
    </Button>
  </motion.div>
);

const SimplePricingPlans = () => {
  const plans = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "📲 Leads & Sales Automation",
      price: "$129/mo",
      description: "Instantly boost your job bookings & never lose another lead.",
      features: [
        "✅ Instant Lead Response Automation",
        "✅ Missed Call Text-Back Automation", 
        "✅ Professional Dedicated Phone Line",
        "✅ Clear Revenue Dashboard"
      ],
      benefit: "Instantly boost your job bookings & never lose another lead."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "⭐️ Reputation & Repeat Automation",
      price: "$179/mo",
      description: "Everything from Leads & Sales Automation, PLUS:",
      popular: true,
      features: [
        "✅ Everything from Leads & Sales Automation",
        "✅ Automated Customer Reactivation & Referral Campaigns",
        "✅ Automatic 5-Star Google Reviews",
        "✅ Post-Job Follow-Ups (customer satisfaction)"
      ],
      benefit: "Automatically generate more repeat business, reviews, referrals—zero extra work."
    }
  ];

  return (
    <section className="container px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-normal text-center mb-6"
        >
          🏅 Two Simple Plans{" "}
          <span className="text-gradient font-medium">(Choose Clearly)</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Both handle instant lead capture & replies. Select if you also want repeat customer campaigns and automatic reviews clearly included.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimplePricingPlans;
