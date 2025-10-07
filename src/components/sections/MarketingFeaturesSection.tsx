import { motion } from "framer-motion";
import { Calendar, Globe, FileText, BarChart3, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarketingFeaturesSection = () => {
  const marketingFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Command Center",
      description: "Manage all your social platforms in one place",
      benefits: [
        "Connect Facebook, Instagram, LinkedIn, TikTok & more",
        "Bulk upload posts with CSV for efficiency",
        "Schedule content across all platforms simultaneously",
        "AI-powered content generation for consistent posting"
      ],
      highlight: "Never miss a post again"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Professional Website Templates",
      description: "Custom websites that convert visitors to customers",
      benefits: [
        "Industry-specific templates for service businesses",
        "Mobile-responsive designs that look professional",
        "Easy customization without coding knowledge",
        "Built-in lead capture and contact forms"
      ],
      highlight: "Launch your website in minutes"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Smart Quoting System",
      description: "Create professional quotes that close more deals",
      benefits: [
        "Customizable quote templates for your services",
        "Automated follow-up sequences for pending quotes",
        "Digital signature collection for faster approval",
        "Integration with your existing workflow tools"
      ],
      highlight: "Close deals 40% faster"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Unified Calendar Management",
      description: "Never double-book or miss an appointment again",
      benefits: [
        "Sync with Google Calendar, Outlook, and more",
        "Automated appointment reminders via SMS & email",
        "Client self-scheduling with availability windows",
        "Team calendar coordination for multi-person jobs"
      ],
      highlight: "Reduce no-shows by 60%"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Track what matters for your business growth",
      benefits: [
        "Lead source tracking and conversion rates",
        "Social media engagement and reach metrics",
        "Quote acceptance rates and revenue analysis",
        "Customer lifetime value and retention stats"
      ],
      highlight: "Make data-driven decisions"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Workflows",
      description: "Put your marketing on autopilot",
      benefits: [
        "Automated lead nurturing sequences",
        "Social media posting schedules",
        "Follow-up reminders for quotes and appointments",
        "Customer review request automation"
      ],
      highlight: "Save 10+ hours per week"
    }
  ];

  return (
    <section className="container px-4 py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Everything You Need to
          <span className="block text-primary">Grow Your Service Business</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          From social media management to professional websites, smart quoting to powerful analytics - 
          ServiceBird gives you the complete marketing toolkit that enterprise companies pay thousands for.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {marketingFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            
            <p className="text-muted-foreground mb-4">{feature.description}</p>
            
            <div className="space-y-2 mb-4">
              {feature.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-3 border-t border-border">
              <span className="text-sm font-medium text-primary">{feature.highlight}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Service Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of service professionals who've already streamlined their operations, 
            increased their revenue, and reclaimed their time with ServiceBird's all-in-one platform.
          </p>
          <Button size="lg" className="font-semibold">
            Start Your Free Trial Today
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default MarketingFeaturesSection;