import { motion } from "framer-motion";
import { MessageSquare, Star, Zap, FileText, Brain, Sparkles } from "lucide-react";

const AIFeaturesSection = () => {
  const aiFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Conversation AI",
      description: "Turn every chat into a customer win",
      benefits: [
        "Responds to customer inquiries instantly, 24/7",
        "Qualifies leads and books appointments automatically", 
        "Handles objections and follows up persistently",
        "Never lets a conversation go cold"
      ],
      impact: "78% higher conversion rate from chat to booking"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Reviews AI",
      description: "Build a 5-star reputation on autopilot",
      benefits: [
        "Automatically requests reviews after job completion",
        "Follows up with gentle reminders if needed",
        "Directs happy customers to Google, handles complaints privately",
        "Generates review response suggestions"
      ],
      impact: "5× more Google reviews than manual requests"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Funnel AI",
      description: "Launch high-converting funnels without starting from scratch",
      benefits: [
        "Creates landing pages optimized for your services",
        "Designs email sequences that nurture leads",
        "Builds sales funnels with proven conversion patterns",
        "Tests and optimizes automatically for better results"
      ],
      impact: "45% higher lead-to-customer conversion"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Content AI",
      description: "Create high-impact content in a fraction of the time",
      benefits: [
        "Writes social media posts for your business",
        "Creates email newsletters and campaigns",
        "Generates blog content for SEO",
        "Produces ad copy that converts"
      ],
      impact: "Save 10+ hours per week on content creation"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Ask AI",
      description: "Get personalized business advice in conversational style",
      benefits: [
        "Answers marketing questions specific to your business",
        "Provides growth strategies based on your data",
        "Suggests improvements for your campaigns",
        "Helps troubleshoot customer service issues"
      ],
      impact: "Like having a marketing consultant available 24/7"
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
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">AI-Powered Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            What You Get With{" "}
            <span className="text-gradient">AI Employee</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Advanced AI tools that handle repetitive tasks, streamline workflows, and help your team get more done — without the burnout.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl p-8 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Impact */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-primary font-medium text-sm">
                    {feature.impact}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience AI-Powered Growth?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using AI to automate their workflows and accelerate their growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AIFeaturesSection;