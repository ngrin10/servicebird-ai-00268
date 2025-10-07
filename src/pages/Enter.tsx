import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Enter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <a 
          href="https://app.servicebird.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-12 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Access Your Account Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default Enter;