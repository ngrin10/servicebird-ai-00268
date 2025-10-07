import { motion } from "framer-motion";
import { Check, X, Star, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ThreeTierPricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const tiers = [
    {
      name: "DIY Setup",
      subname: "Self-Service", 
      description: "Complete control over your setup process",
      monthlyPrice: isYearly ? "$119" : "$149",
      yearlyPrice: isYearly ? "Billed annually ($1,428/year)" : "Billed monthly",
      setupFee: "No setup fee",
      setupFeePrice: "$0",
      popular: false,
      buttonText: "Start DIY Setup",
      buttonVariant: "outline" as const,
      stripeLink: isYearly 
        ? "https://buy.stripe.com/28EcN6ey22Gb2O02OY3ks0u" 
        : "https://buy.stripe.com/5kQ00kblQ0y3dsE89i3ks0t",
      features: [
        { text: "ServiceBird software access", included: true },
        { text: "Setup documentation & videos", included: true },
        { text: "24-hour email support", included: true }
      ]
    },
    {
      name: "Managed Setup",
      subname: "Done For You",
      description: "Complete done-for-you integration. We handle everything so you can focus on your business",
      monthlyPrice: isYearly ? "$119" : "$149",
      yearlyPrice: isYearly ? "Billed annually ($1,428/year)" : "Billed monthly",
      setupFee: "One-time setup fee",
      setupFeePrice: "$497",
      popular: true,
      buttonText: "Get Managed Setup",
      buttonVariant: "default" as const,
      stripeLink: isYearly 
        ? "https://buy.stripe.com/28EcN6ey22Gb2O02OY3ks0u" 
        : "https://buy.stripe.com/5kQ00kblQ0y3dsE89i3ks0t",
      features: [
        { text: "Everything in DIY Setup, plus:", included: true, isHeader: true },
        { text: "White-glove setup service", included: true },
        { text: "1-on-1 strategy mapping call", included: true },
        { text: "Phone number setup & configuration", included: true },
        { text: "Email/DNS setup", included: true },
        { text: "Jobber integration", included: true },
        { text: "QuickBooks integration", included: true },
        { text: "Website integration", included: true },
        { text: "Custom automation workflows", included: true },
        { text: "Lead capture optimization", included: true }
      ]
    },
    {
      name: "Holiday Lighting Package",
      subname: "Complete System",
      description: "Get 10-20 Jobs Per Month",
      monthlyPrice: "Starting at $3k",
      yearlyPrice: "Full marketing system",
      setupFee: "",
      setupFeePrice: "",
      popular: false,
      buttonText: "Learn More About Ads",
      buttonVariant: "outline" as const,
      stripeLink: "/lighting-jobs",
      isSpecial: true,
      features: []
    }
  ];

  return (
    <section className="container px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Setup Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Same powerful software. Different levels of setup support.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`font-medium ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>
            <label className="relative inline-block w-16 h-8">
              <input 
                type="checkbox" 
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
                className="opacity-0 w-0 h-0 peer"
              />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-white before:transition-all before:duration-300 before:rounded-full before:shadow-md peer-checked:before:translate-x-8"></span>
            </label>
            <div className="flex items-center gap-2">
              <span className={`font-medium ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>Yearly</span>
              {isYearly && (
                 <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                   Save $360
                 </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-xl p-8 relative ${
                tier.popular 
                  ? 'border-2 border-primary shadow-xl scale-105' 
                  : tier.isSpecial
                    ? 'border-2 border-orange-500 shadow-xl'
                    : 'border border-border'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {tier.isSpecial && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Holiday Season Special
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{tier.subname}</p>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                
                {!tier.isSpecial && (
                  <>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-primary">
                        {tier.monthlyPrice}
                        <span className="text-lg text-muted-foreground font-normal">/month</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tier.yearlyPrice}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-muted-foreground mb-1">{tier.setupFee}</div>
                      <div className={`text-xl font-bold ${
                        tier.setupFeePrice === "$0" ? "text-green-600" : "text-orange-600"
                      }`}>
                        {tier.setupFeePrice}
                      </div>
                    </div>
                  </>
                )}

                {tier.isSpecial && (
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {tier.monthlyPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {tier.yearlyPrice}
                    </div>
                  </div>
                )}

                <Button 
                  asChild
                  variant={tier.buttonVariant}
                  className={`w-full text-lg py-3 ${tier.popular || tier.isSpecial ? 'button-gradient shadow-lg' : ''}`}
                >
                  <a href={tier.stripeLink} target="_blank" rel="noopener noreferrer">
                    {tier.buttonText}
                  </a>
                </Button>
              </div>

              {!tier.isSpecial && (
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.isHeader 
                          ? 'text-foreground font-semibold text-primary' 
                          : feature.included 
                            ? 'text-foreground' 
                            : 'text-muted-foreground'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {tier.name === "Managed Setup" && (
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">7-Day Guarantee</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    If we can't get you fully set up and running within 7 days, you get your setup fee back.
                  </p>
                </div>
              )}

              {tier.name === "DIY Setup" && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-800">Perfect For</span>
                  </div>
                  <p className="text-xs text-yellow-700">
                    Technical users who want full control and prefer to handle setup themselves.
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>All plans include:</strong> The complete ServiceBird software platform, lead automation, review generation, customer reactivation, dedicated phone line, and ROI tracking dashboard.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ThreeTierPricing;
