
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/month</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            {feature.included ? (
              <Check className="w-5 h-5 text-primary" />
            ) : (
              <X className="w-5 h-5 text-gray-500" />
            )}
            <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <Button className="button-gradient w-full">
        {price === "Custom" ? "Contact Sales" : "Start Free Trial"}
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  const coreFeatures = [
    { name: "Branded Portal", included: true },
    { name: "Quote Templates", included: true },
    { name: "Payments & e-Sign", included: false },
    { name: "Dual Pipelines", included: true },
    { name: "52-Week SMS & Email", included: false },
    { name: "Zapier & Jobber Sync", included: false },
    { name: "Dedicated Onboarding Call", included: true }, // 1h
  ];

  const proFeatures = [
    { name: "Branded Portal", included: true },
    { name: "Quote Templates", included: true },
    { name: "Payments & e-Sign", included: true },
    { name: "Dual Pipelines", included: true },
    { name: "52-Week SMS & Email", included: true },
    { name: "Zapier & Jobber Sync", included: false },
    { name: "Dedicated Onboarding Call", included: true }, // 2h
  ];

  const enterpriseFeatures = [
    { name: "Branded Portal", included: true },
    { name: "Quote Templates", included: true },
    { name: "Payments & e-Sign", included: true },
    { name: "Dual Pipelines", included: true },
    { name: "52-Week SMS & Email", included: true },
    { name: "Zapier & Jobber Sync", included: true },
    { name: "White-glove Onboarding", included: true },
  ];

  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Choose Your{" "}
          <span className="text-gradient font-medium">Service Plan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Start growing your home service business with the right tools and support
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Core"
          price="$149"
          description="Essential tools for growing home service businesses"
          features={coreFeatures}
        />
        <PricingTier
          name="Pro"
          price="$199"
          description="Complete automation and payment processing"
          features={proFeatures}
          isPopular
        />
        <PricingTier
          name="Enterprise"
          price="Custom"
          description="White-glove setup with custom integrations"
          features={enterpriseFeatures}
        />
      </div>
    </section>
  );
};
