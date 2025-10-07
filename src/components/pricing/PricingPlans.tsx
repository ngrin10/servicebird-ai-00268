
import { motion } from "framer-motion";
import { Check, MessageSquare, Star, Phone, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlanCard = ({ 
  icon,
  title, 
  price, 
  description, 
  features, 
  results,
  popular = false,
  buttonText = "Start Free Trial"
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features: Array<{title: string, detail: string, highlight?: string}>;
  results: string[];
  popular?: boolean;
  buttonText?: string;
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
    
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="text-3xl font-bold text-primary">{price}</div>
        </div>
      </div>
      <p className="text-gray-400 text-lg">{description}</p>
    </div>

    <div className="space-y-6 mb-8">
      <h4 className="text-lg font-medium text-primary">Here's EXACTLY What You Get:</h4>
      
      {features.map((feature, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <span className="font-medium text-white">{feature.title}</span>
              <p className="text-gray-300 text-sm mt-1">{feature.detail}</p>
              {feature.highlight && (
                <p className="text-primary text-sm italic mt-1">({feature.highlight})</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mb-6">
      <h4 className="text-lg font-medium text-green-400 mb-3">Real Results in 30 Days:</h4>
      <ul className="space-y-2">
        {results.map((result, index) => (
          <li key={index} className="flex items-center gap-2 text-green-300">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="text-sm">{result}</span>
          </li>
        ))}
      </ul>
    </div>

    <Button className="button-gradient w-full">
      {buttonText}
    </Button>
  </motion.div>
);

const PricingPlans = () => {
  const plans = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Lead Capture & Follow-Up",
      price: "$149/mo",
      description: "This plan solves your #1 frustration: Leads slipping through the cracks.",
      features: [
        {
          title: "24/7 Instant Reply Automation",
          detail: "Instantly replies to every new lead within 60 seconds, even when you're busy working. Includes automated replies to quote requests, website forms, and Facebook/Instagram messages.",
          highlight: "Businesses replying within 60 seconds close 78% more jobs."
        },
        {
          title: "Missed Call Text-Back Automation",
          detail: "Automatically sends personalized texts to missed callers. Converts 40% more missed calls into booked jobs—zero extra effort required."
        },
        {
          title: "Simple, Dedicated Business Phone Line",
          detail: "Keeps business and personal calls completely separate, clear, and professional. Allows tracking of every customer interaction clearly and easily."
        },
        {
          title: "Easy-to-Understand Revenue Dashboard",
          detail: "Clearly shows how many leads you're capturing and converting each month. Instantly see the value you're gaining by replying to leads faster."
        }
      ],
      results: [
        "+30% revenue increase simply from instantly responding to leads",
        "10+ hours saved weekly by eliminating manual replies", 
        "Clearly see your return on investment every month—guaranteed"
      ]
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Reputation & Repeat",
      price: "$199/mo",
      description: "INCLUDES ALL FEATURES FROM PLAN #1 + Getting more repeat business and glowing reviews, automatically.",
      popular: true,
      features: [
        {
          title: "Automated Customer Reactivation (Brings Customers Back)",
          detail: "52-Week 'Keep-in-Touch' Campaign: Sends simple, helpful weekly tips via email & text to your customer list—keeping your business top-of-mind year-round.",
          highlight: "Customers receiving regular follow-ups are 25% more likely to rebook."
        },
        {
          title: "Instant '$50 Off' Campaign",
          detail: "Automatically sends strategic offers at the perfect time, turning quiet months into busy, profitable ones. Effortlessly increases bookings without feeling pushy."
        },
        {
          title: "Automated Referral System",
          detail: "Encourages past customers to refer friends automatically, rewarding them clearly with cash or discounts. Turns your happy customers into a free, consistent source of new leads."
        },
        {
          title: "Automatic 5-Star Review Generator",
          detail: "Sends perfectly timed review requests right after every completed job—no remembering required. Gets you 5x more positive Google reviews with zero manual follow-up."
        },
        {
          title: "Post-Job Follow-Ups",
          detail: "Automatically checks in after each job to ensure customers are happy. Resolves minor concerns before they become headaches or bad reviews."
        }
      ],
      results: [
        "+25% repeat bookings from automated reactivation campaigns",
        "5x more positive Google reviews without manual chasing",
        "Clear insights showing exactly how much extra revenue you're making"
      ]
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
          Two Simple Plans —{" "}
          <span className="text-gradient font-medium">Clear Benefits & Instant Value</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>

      {/* Holiday & Permanent Lighting Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 glass rounded-xl p-8 text-center max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-medium mb-4">⚡ Holiday & Permanent Lighting?</h3>
        <p className="text-gray-300 mb-4">
          If you already offer lighting, your campaigns are automatically tailored to match your service calendar. We handle:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left">
            <div className="flex items-center mb-2">
              <span className="text-primary mr-2">•</span>
              <span className="font-medium">Holiday Lighting:</span>
            </div>
            <p className="text-gray-400 ml-4">Early bird booking and seasonal messaging.</p>
          </div>
          <div className="text-left">
            <div className="flex items-center mb-2">
              <span className="text-primary mr-2">•</span>
              <span className="font-medium">Permanent Lighting:</span>
            </div>
            <p className="text-gray-400 ml-4">Automated nurturing and pre-installation follow-ups.</p>
          </div>
        </div>
      </motion.div>

      {/* Setup Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-8 glass rounded-xl p-8 text-center max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-medium mb-4">✅ Instant, Clear Setup (No Tech Skills Needed):</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <span className="font-medium">Short onboarding call</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="font-medium">Automations launch same day</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <span className="font-medium">Clearly see results immediately</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingPlans;
