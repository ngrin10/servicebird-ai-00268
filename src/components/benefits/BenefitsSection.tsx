
import { motion } from "framer-motion";
import { Clock, Phone, Users, Star, Shield, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

const ExpandableBenefit = ({
  icon,
  title,
  subtitle,
  whyItMatters,
  details,
  index
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  whyItMatters: string;
  details: string[];
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass glass-hover rounded-xl p-6"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-gray-300 mb-3">{subtitle}</p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="text-primary font-medium">Why it matters: </span>
                <span className="text-gray-300">{whyItMatters}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <span className="mr-2">Learn More</span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`} 
            />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-gray-700"
        >
          <div className="space-y-3">
            {details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">{detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "✅ Instant Lead Response (24/7)",
      subtitle: "Immediately reply to every lead, form submission, or inquiry—day or night.",
      whyItMatters: "Businesses responding within 60 seconds close 78% more jobs. Never lose another lead to competitors.",
      details: [
        "Automatically responds to website forms, phone calls, and social media messages",
        "Works 24/7, even when you're on-site or sleeping",
        "Personalized responses based on the service they're inquiring about",
        "Instantly schedules follow-up calls or sends estimates"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "✅ Missed Call Text-Back",
      subtitle: "Instantly converts missed calls into booked jobs via automatic texts.",
      whyItMatters: "Recapture up to 40% more missed calls, stopping leads from calling your competitors next.",
      details: [
        "Sends immediate text message when you can't answer",
        "Includes your availability and callback time",
        "Automatically schedules appointments if they respond",
        "Tracks which missed calls convert to jobs"
      ]
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "✅ Customer Reactivation & Referrals",
      subtitle: "Automatically bring back past customers and generate easy referrals.",
      whyItMatters: "Businesses using automated reactivation get 25% more repeat customers without any extra effort.",
      details: [
        "52-Week Keep-in-Touch Campaign: Weekly helpful tips—keeping you top-of-mind year-round",
        "Instant $50-Off Promos: Boost slow months instantly",
        "Automatic Referral Generation: Effortlessly get referrals rewarded automatically",
        "Seasonal service reminders (gutter cleaning in fall, window washing in spring)"
      ]
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "✅ Automatic 5-Star Reviews",
      subtitle: "Effortlessly collect more positive reviews after every job.",
      whyItMatters: "Generate 5x more positive reviews, boosting your visibility, trust, and new customers automatically.",
      details: [
        "Sends review request immediately after job completion",
        "Follows up if they don't leave a review within 3 days",
        "Directs happy customers to Google, unhappy ones to private feedback",
        "Tracks review conversion rates and celebrates new reviews"
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "✅ Dedicated Business Phone Line",
      subtitle: "Clearly separate personal and professional communications.",
      whyItMatters: "Track every customer interaction professionally—no more confusion or mixed personal/business calls.",
      details: [
        "Professional voicemail with your business name",
        "Call recording for quality and training purposes",
        "Automatic call logging in your customer database",
        "Text messaging capability from your business number"
      ]
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
          ⚡️ How HomeServicePro{" "}
          <span className="text-gradient font-medium">Grows Your Business Automatically</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Each section expands to reveal exactly how it works. Click "Learn More" on any feature below.
        </motion.p>

        <div className="space-y-8">
          {benefits.map((item, index) => (
            <ExpandableBenefit key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
