
import { motion } from "framer-motion";
import { Clock, Phone, Star, Users, ArrowRight, Shield, Target, Calendar } from "lucide-react";

const BenefitsOverview = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Responds to every lead in 60 seconds",
      description: "Auto-texts everyone instantly",
      benefit: "30% more bookings when you answer first"
    },
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Runs long-term marketing on autopilot",
      description: "Seasonal campaigns + months-long nurture sequences",
      benefit: "Converts 'not ready yet' into paying customers"
    },
    {
      icon: <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Recovers missed calls with smart text-back",
      description: "Different messages for business vs. after hours",
      benefit: "Saves 40% of calls that go to voicemail"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Reactivates past customers automatically",
      description: "Targeted offers and neighborhood campaigns",
      benefit: "Brings back 25% of dormant customers"
    },
    {
      icon: <Star className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Requests reviews after every job",
      description: "Auto-texts link when you mark job 'Won'",
      benefit: "5× more Google reviews → rank higher"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "Professional business line included",
      description: "Dedicated business number (unlimited calls/texts)",
      benefit: "Keep your personal number private forever"
    }
  ];

  return (
    <section className="container px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          What ServiceBird Does for You
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Everything you need to capture, close, review & reactivate – nothing you don't
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-6 text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base text-muted-foreground mb-4">{item.description}</p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-sm font-medium text-primary">{item.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsOverview;
