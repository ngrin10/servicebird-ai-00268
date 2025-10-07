
import { motion } from "framer-motion";
import { CheckCircle, Calendar, FileText, Users, MessageSquare, ArrowUp } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Welcome = () => {
  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header with ServiceBird Logo */}
      <header className="container px-4 py-6">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/24ffc3eb-7772-45cc-a01a-954698dd003b.png" 
            alt="ServiceBird" 
            className="h-12 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="container px-4 py-8 max-w-4xl mx-auto">
        
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            🎉 Welcome to ServiceBird!
          </h1>
          <p className="text-xl text-gray-600">
            You're about to transform how you handle leads and grow your business.
          </p>
        </motion.div>

        {/* Account Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            But first... <strong>Your account needs activation.</strong>
          </h2>
          <p className="text-xl text-gray-600">
            This 30-minute call ensures you're making money with ServiceBird in days, not weeks.
          </p>
        </motion.div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Calendly Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-primary" />
            Book Your Onboarding Call Now
          </h2>
          
          <div className="glass rounded-xl overflow-hidden border border-orange-200 bg-white/80 backdrop-blur-sm">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/servicebird-support/30min" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-500 italic mt-4 text-center">
            First available slots shown. Pick one that works with your schedule.
          </p>
        </motion.div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* What Happens on Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
            What Happens on This Call:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">We'll Do Together:</h3>
              <ul className="space-y-3">
                {[
                  "Buy your business phone number (takes 2 minutes)",
                  "Start your text messaging approval",
                  "Connect your lead sources",
                  "Launch your first campaign LIVE",
                  "Watch your first automated message send"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">You'll Leave With:</h3>
              <ul className="space-y-3">
                {[
                  "Clear plan for next 7 days"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Before Your Call */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-2 text-primary" />
            Before Your Call - Have These Ready:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-4">Must Have:</h3>
              <ul className="space-y-2">
                {[
                  "Credit card (for $1.21 phone number)",
                  "Your EIN/Tax ID number", 
                  "30 minutes uninterrupted time"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-4">Have Access To:</h3>
              <p className="text-sm text-gray-600 mb-3">(we'll help you login)</p>
              <ul className="space-y-2">
                {[
                  "Where you bought your website (GoDaddy, Wix, etc)",
                  "Your email account",
                  "CRM if you use one (Jobber, QuickBooks)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-600 mb-4">Nice to Have:</h3>
              <ul className="space-y-2">
                {[
                  "Recent customer list (even just 10 names)",
                  "Your business logo",
                  "Example of quotes you send"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Important Notes:</h2>
          
          <div className="glass rounded-lg p-6">
            <ul className="space-y-4">
              {[
                { bold: "Can't make these times?", text: "Email support@servicebird.ai for priority scheduling" },
                { bold: "Not tech savvy?", text: "Perfect! We'll handle the complex stuff" },
                { bold: "Have a team?", text: "Invite them to join the call" },
                { bold: "Using Jobber?", text: "We'll connect it live on the call" }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-700">
                    <strong>{item.bold}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* What Happens After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-primary" />
            What Happens After Your Call:
          </h2>
          
          <div className="glass rounded-lg p-6">
            <p className="text-gray-700 mb-4">While you're working, we'll complete your setup:</p>
            <ul className="space-y-2 mb-6">
              {[
                "Email system configuration",
                "Full CRM integration", 
                "Contact import",
                "Campaign activation"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-green-600">
              You'll get a "You're Live!" message from our team within 72 hours showing everything working.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Book Setup Call Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center mb-12"
        >
          <Button
            onClick={scrollToTop}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg flex items-center justify-center mx-auto"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            Book Your Setup Call
          </Button>
        </motion.div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Common Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MessageSquare className="w-6 h-6 mr-2 text-primary" />
            Common Questions:
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What if I don't have all these items?",
                answer: "No problem! We'll work with what you have and guide you through the rest."
              },
              {
                question: "I'm not good with technology...",
                answer: "That's why this call exists! We'll screen share and do it together."
              },
              {
                question: "Can I reschedule?",
                answer: "Yes, but every day without ServiceBird is lost revenue. Book the soonest slot possible."
              }
            ].map((item, index) => (
              <div key={index} className="glass rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">"{item.question}"</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <footer className="container px-4 py-8 text-center">
        <div className="text-gray-500 text-sm">
          <p>Need help? Contact us at support@servicebird.ai</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
