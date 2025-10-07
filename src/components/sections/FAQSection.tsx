
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can I get set up?",
      answer: "Most businesses are fully operational within 3-5 days. This includes: Day 1: Initial setup and onboarding call. Day 2-3: Phone number verification and text messaging approval. Day 4-5: Connecting your tools and going live. We delay your 2nd month's payment to account for this setup period - because we're building the foundation that will transform your business for years to come. We provide step-by-step guidance and support throughout the process."
    },
    {
      question: "Do I need technical skills to use this?",
      answer: "Not at all! HomeServicePro is designed for busy home service professionals, not tech experts. Everything runs automatically in the background. You get a simple dashboard to see your results, but the system handles all the complex automation work."
    },
    {
      question: "What if I already have some of these tools?",
      answer: "That's fine! We can often integrate with or replace your existing tools gradually. Many customers find they can eliminate 3-5 different subscriptions once they see how HomeServicePro handles everything in one place."
    },
    {
      question: "How do I know it's working?",
      answer: "You'll see results immediately in your ROI dashboard. Track leads captured, calls converted, reviews gained, and repeat sales generated. Most customers see measurable improvements within the first week."
    },
    {
      question: "What types of home service businesses does this work for?",
      answer: "HomeServicePro is specifically built for window washing, power washing, lawn aeration, and gutter cleaning businesses. It also works seamlessly with holiday and permanent lighting services. The automations are tailored to these specific industries."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, absolutely. There are no long-term contracts or cancellation fees. We're confident you'll see the value immediately, but you're free to cancel anytime if it's not working for your business."
    },
    {
      question: "What kind of support do I get?",
      answer: "You get direct access to our support team who understand home service businesses. We provide setup assistance, training resources, and ongoing support to ensure you're getting maximum value from the platform."
    }
  ];

  return (
    <section className="container px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about HomeServicePro
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
