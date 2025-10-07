
import { motion } from "framer-motion";

const FounderSection = () => {
  return (
    <section className="container px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-normal mb-8">
          👨‍🔧 Built by a Home Service Pro{" "}
          <span className="text-gradient font-medium">(Just Like You)</span>
        </h2>
        
        <div className="glass rounded-xl p-8">
          <p className="text-lg text-gray-300 mb-6">
            <strong>Adam Chapman</strong> scaled his businesses (PadPal & Home Service University) by simplifying automations into exactly what works:
          </p>
          
          <blockquote className="text-xl text-primary italic border-l-4 border-primary pl-6 my-6 max-w-2xl mx-auto">
            "I built the exact automation systems I wish I had—no fluff, just clear results."
          </blockquote>
          <cite className="text-gray-400">— Adam Chapman</cite>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderSection;
