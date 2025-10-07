import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/24ffc3eb-7772-45cc-a01a-954698dd003b.png" 
              alt="ServiceBird" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://app.servicebird.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors flex items-center"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </a>
            <Link to="/get-started">
              <Button className="button-gradient">
                See Your Options
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="https://app.servicebird.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </a>
              <Link
                to="/get-started"
                onClick={() => setIsOpen(false)}
              >
                <Button className="button-gradient w-full mt-2">
                  See Your Options
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
