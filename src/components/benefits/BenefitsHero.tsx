
import { motion } from "framer-motion";
import { Clock, Shield, Phone, Star, BarChart3, Users, ChevronDown, TrendingUp } from "lucide-react";
import { useState } from "react";

const ExpandableFeature = ({
  icon,
  title,
  percentage,
  quickBenefit,
  problem,
  solution,
  result,
  index
}: {
  icon: React.ReactNode;
  title: string;
  percentage: string;
  quickBenefit: string;
  problem: string;
  solution: string;
  result: string;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass glass-hover rounded-xl p-6 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-medium">{title}</h3>
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                {percentage}
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-primary transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
              />
            </div>
          </div>
          
          <p className="text-gray-300 mb-3">{quickBenefit}</p>
          
          <div className="flex items-center text-sm text-primary cursor-pointer">
            <TrendingUp className="w-4 h-4 mr-1" />
            Click to see how it works
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-6 pt-6 border-t border-gray-700"
        >
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-red-300 font-medium">The Problem: </span>
                  <span className="text-gray-300">{problem}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-primary font-medium">Our Solution: </span>
                  <span className="text-gray-300">{solution}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-green-300 font-medium">Your Result: </span>
                  <span className="text-gray-300">{result}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const BenefitsHero = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Instant Lead Response",
      percentage: "+78%",
      quickBenefit: "Respond to every lead within 60 seconds, even when you're busy on-site",
      problem: "Missing calls and messages means losing potential customers to competitors who respond faster.",
      solution: "Our automated system instantly sends personalized text and email replies to new inquiries within 60 seconds, 24/7. Whether you're on-site, driving, or relaxing at home, your leads receive immediate responses.",
      result: "78% higher close rates for businesses responding within 60 seconds. Never lose another lead to slow response times."
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Missed Call Recovery",
      percentage: "+40%",
      quickBenefit: "Automatically follow up on every missed call to capture lost opportunities",
      problem: "Every unanswered call is potential revenue walking out the door to your competition.",
      solution: "When a call goes unanswered, our system immediately sends an automatic, personalized follow-up text, ensuring the caller feels attended to and encouraging them to engage further.",
      result: "Recover 40% of missed calls that would otherwise be lost forever. Turn missed opportunities into booked jobs."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Customer Reactivation",
      percentage: "+25%",
      quickBenefit: "Bring back past customers with automated campaigns that actually work",
      problem: "Past customers forget about you and hire competitors for future work because you're not staying in touch.",
      solution: "Automated campaigns run seamlessly in the background, sending strategic offers and reminders tailored to re-engage previous customers and encourage referrals.",
      result: "Increase repeat bookings by up to 25%. Your past customers become a reliable revenue stream without any extra effort."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Review Generation",
      percentage: "5x",
      quickBenefit: "Get 5x more positive reviews without having to remember to ask",
      problem: "Forgetting to ask for reviews means missing out on social proof that drives new customers.",
      solution: "Immediately after completing a job, your customer automatically receives a personalized message requesting a Google review, making it effortless for them to leave feedback.",
      result: "Receive 5x more positive reviews. Build a stellar online reputation that automatically attracts new customers."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Clear Growth Insights",
      percentage: "100%",
      quickBenefit: "See exactly what's working and what isn't with crystal-clear metrics",
      problem: "Confusing dashboards and unclear data make it impossible to know what's actually growing your business.",
      solution: "A streamlined, easy-to-read dashboard highlighting only essential growth-focused metrics, giving clear insights into what's driving your business forward.",
      result: "Instantly identify opportunities for growth and track key performance indicators without confusion or clutter."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Professional Business Line",
      percentage: "100%",
      quickBenefit: "Separate your business and personal communications professionally",
      problem: "Mixing personal and business calls leads to confusion, missed opportunities, and appears unprofessional to customers.",
      solution: "Receive your own dedicated business phone number integrated seamlessly into your automation system, managing all interactions professionally and efficiently.",
      result: "Enhance professionalism, track every customer interaction, and effortlessly manage your communications."
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
          From Chaos to{" "}
          <span className="text-gradient font-medium">Systematic Growth</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Stop losing revenue to manual tasks. Click any feature below to see exactly how it works and the proven results you'll get.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <ExpandableFeature key={index} {...item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 glass rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-medium mb-4">Works Alongside Your Current CRM</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Your current CRM (like Jobber) handles scheduling and payments well but leaves gaps in instant customer communication and follow-up. Our system bridges that gap, ensuring no lead or revenue opportunity slips through.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsHero;
