
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">ServiceBird</h3>
              <p className="text-sm text-muted-foreground">
                Empowering home service businesses with automated lead capture, review requests, and customer reactivation.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Platform</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/enter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Account
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@servicebird.ai" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="https://app.servicebird.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/enter" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Setup Guide
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@servicebird.ai" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="/get-started" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Get Started
                  </a>
                </li>
                <li>
                  <a href="https://app.servicebird.ai" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} ServiceBird. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
