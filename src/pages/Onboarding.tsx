
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 pt-24 md:pt-32 pb-12 md:pb-16"
      >
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 md:mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Get Started with ServiceBird
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Choose your plan and complete your setup in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Benefits */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What happens next:</h2>
              
              {[
                "Complete secure checkout",
                "Quick 5-minute setup form",
                "Your automations go live within 24 hours",
                "Start seeing results immediately"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-base md:text-lg">{step}</span>
                </div>
              ))}

              <div className="glass rounded-lg p-4 md:p-6 mt-6 md:mt-8">
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3">What's Included:</h3>
                <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-muted-foreground">
                  <li>• Instant 60-second lead replies</li>
                  <li>• Missed call text-back automation</li>
                  <li>• Automatic 5-star review requests</li>
                  <li>• Customer reactivation campaigns</li>
                  <li>• Referral automation system</li>
                  <li>• Dedicated business phone line</li>
                  <li>• ROI tracking dashboard</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Pricing */}
            <div className="glass rounded-xl md:rounded-2xl p-6 md:p-8">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">ServiceBird Growth Engine</h3>
                
                {/* Toggle Switch */}
                <div className="flex justify-center items-center gap-3 mb-4 md:mb-6">
                  <span className="font-medium text-sm md:text-base">Monthly</span>
                  <label className="relative inline-block w-12 md:w-14 h-6 md:h-7">
                    <input 
                      type="checkbox" 
                      id="billingToggle" 
                      className="opacity-0 w-0 h-0 peer"
                    />
                    <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-muted transition-all duration-300 rounded-full before:absolute before:content-[''] before:h-4 before:w-4 md:before:h-5 md:before:w-5 before:left-1 before:bottom-1 before:bg-background before:transition-all before:duration-300 before:rounded-full peer-checked:bg-primary peer-checked:before:translate-x-6 md:peer-checked:before:translate-x-7"></span>
                  </label>
                  <span className="font-medium text-sm md:text-base">Yearly</span>
                </div>

                <div id="pricingDisplay">
                  <p id="planPrice" className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-4">$149/month</p>
                  <div className="text-sm text-green-600 font-medium mb-3 md:mb-4" id="savings" style={{ display: 'none' }}>
                    Save $300/year
                  </div>
                  
                  <a 
                    id="checkoutLink" 
                    href="https://buy.stripe.com/5kQ00kblQ0y3dsE89i3ks0t" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="button-gradient w-full mb-3 md:mb-4 text-base md:text-lg py-4 md:py-6">
                      Try Now
                    </Button>
                  </a>
                  
                  <p className="text-xs md:text-sm text-muted-foreground">
                    1 purpose. 1 dashboard. 1 login.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 md:pt-6">
                <p className="text-xs md:text-sm text-muted-foreground text-center mb-3 md:mb-4">
                  🔒 Secure checkout • Cancel anytime • No setup fees
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  After checkout, you'll receive setup instructions and access to your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />

      {/* Toggle Logic Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const toggle = document.getElementById("billingToggle");
            const price = document.getElementById("planPrice");
            const link = document.getElementById("checkoutLink");
            const savings = document.getElementById("savings");

            if (toggle && price && link && savings) {
              toggle.addEventListener("change", function () {
                const isYearly = this.checked;

                if (isYearly) {
                  price.textContent = "$124/month";
                  link.href = "https://buy.stripe.com/28EcN6ey22Gb2O02OY3ks0u";
                  savings.style.display = "block";
                } else {
                  price.textContent = "$149/month";
                  link.href = "https://buy.stripe.com/5kQ00kblQ0y3dsE89i3ks0t";
                  savings.style.display = "none";
                }
              });
            }
          });
        `
      }} />
    </div>
  );
};

export default Onboarding;
