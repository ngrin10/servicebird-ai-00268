
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showSecondaryButton?: boolean;
  className?: string;
}

const CTASection = ({ 
  title, 
  description, 
  primaryButtonText = "Try Now",
  primaryButtonHref = "/get-started",
  secondaryButtonText = "Learn More",
  secondaryButtonHref = "/demo",
  showSecondaryButton = true,
  className = ""
}: CTASectionProps) => {
  return (
    <section className={`container px-4 py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-xl md:rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButtonHref.startsWith('http') ? (
            <a 
              href={primaryButtonHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="button-gradient text-lg px-8 py-4 w-full sm:w-auto">
                {primaryButtonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          ) : (
            <Link to={primaryButtonHref}>
              <Button size="lg" className="button-gradient text-lg px-8 py-4 w-full sm:w-auto">
                {primaryButtonText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          )}
          {showSecondaryButton && (
            <Link to={secondaryButtonHref}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
