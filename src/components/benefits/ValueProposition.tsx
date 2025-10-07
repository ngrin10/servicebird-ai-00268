
import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp, Users } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      metric: "10+ Hours",
      description: "Saved per week on manual tasks",
      detail: "Stop doing repetitive follow-ups, review chasing, and payment reminders"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      metric: "30% More",
      description: "Revenue from better follow-up",
      detail: "Convert more leads with instant responses and systematic nurturing"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      metric: "5x More",
      description: "Google & Facebook reviews",
      detail: "Automated review collection gets you the social proof you need"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      metric: "25%",
      description: "Past customers reactivated",
      detail: "Win back old customers with automated reactivation campaigns"
    }
  ];

  return (
    <section className="container px-4 py-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            Real Results from{" "}
            <span className="text-gradient font-medium">Real Businesses</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            These aren't theoretical benefits. These are measurable improvements our customers see within their first 30 days.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-6 text-center"
            >
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                {value.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{value.metric}</div>
              <h3 className="text-lg font-medium mb-3">{value.description}</h3>
              <p className="text-gray-400 text-sm">{value.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
