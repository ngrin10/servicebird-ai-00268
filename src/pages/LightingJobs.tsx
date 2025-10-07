import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Phone, Calendar, Zap, DollarSign, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LightingJobs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              HOLIDAY LIGHTING SPECIALISTS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get 10-20 Holiday Lighting Jobs Per Month
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              You're the type of person who doesn't wait for opportunity—you create it. 
              Stop competing on price and start dominating your market with our proven system.
            </p>
          </div>

          {/* The Problem Section */}
          <section className="mb-16">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-red-800">You Know This Pain All Too Well...</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-red-700">• Feast or famine—busy one week, dead the next</p>
                  <p className="text-red-700">• Competing against lowballers who don't know their costs</p>
                  <p className="text-red-700">• Spending weekends chasing down quotes that never close</p>
                  <p className="text-red-700">• Missing out on the holiday rush while competitors get booked solid</p>
                </div>
                <div className="space-y-4">
                  <p className="text-red-700">• Relying on word-of-mouth that's unpredictable</p>
                  <p className="text-red-700">• No way to track where your best customers come from</p>
                  <p className="text-red-700">• Working IN your business instead of ON your business</p>
                  <p className="text-red-700">• Feeling like you're always one step behind</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Solution Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Here's How We Get You 40-80 Qualified Leads Monthly
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                You deserve to feel confident about your business pipeline. 
                Here's the exact system that transforms lighting contractors from stressed to successful.
              </p>
            </div>

            {/* The Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="text-4xl font-bold text-green-600 mb-2">40-80</div>
                <div className="text-green-700 font-medium">Qualified Leads</div>
                <div className="text-sm text-green-600 mt-2">Per Month, Guaranteed</div>
              </div>
              <div className="text-center bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">20%</div>
                <div className="text-blue-700 font-medium">Close Rate</div>
                <div className="text-sm text-blue-600 mt-2">Industry Leading</div>
              </div>
              <div className="text-center bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">10-20</div>
                <div className="text-purple-700 font-medium">Closed Jobs</div>
                <div className="text-sm text-purple-600 mt-2">Every Single Month</div>
              </div>
            </div>

            {/* How It Works */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Your Professional Website Works 24/7</h3>
                <div className="space-y-4">
                  {[
                    "Captures leads while you sleep with instant quote calculator",
                    "Before/after gallery that sells your quality craftsmanship",
                    "Mobile-optimized for customers browsing on their phones",
                    "SEO-optimized to outrank your competition on Google",
                    "Professional design that justifies premium pricing",
                    "Integrated scheduling for seamless booking"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Targeted Ads That Actually Convert</h3>
                <div className="space-y-4">
                  {[
                    "Facebook & Google ads targeting homeowners in your service area",
                    "Seasonal optimization for holiday lighting demand",
                    "Retargeting campaigns that follow up with interested prospects",
                    "Lead nurturing sequences that convert browsers to buyers",
                    "Real-time performance tracking and optimization",
                    "Ad spend optimization for maximum ROI"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* The Complete System */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">The Complete ServiceBird System for Lighting Contractors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Dedicated Phone Line</h4>
                  <p className="text-sm text-muted-foreground">Professional number that tracks all leads</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Automated Follow-Up</h4>
                  <p className="text-sm text-muted-foreground">Never miss a lead with smart automation</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Review Generation</h4>
                  <p className="text-sm text-muted-foreground">Automatically get 5-star reviews</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">ROI Tracking</h4>
                  <p className="text-sm text-muted-foreground">See exactly what's making you money</p>
                </div>
              </div>
            </div>
          </section>

          {/* Transformation Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Imagine Your Business This December
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">You're the type of person who...</h3>
                <div className="space-y-4 mb-8">
                  <p>• Values your time and wants predictable income</p>
                  <p>• Knows quality work deserves premium pricing</p>
                  <p>• Understands that marketing is an investment, not an expense</p>
                  <p>• Wants to be the go-to lighting contractor in your area</p>
                  <p>• Believes in systems that work while you work</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-800 mb-3">Here's what changes:</h4>
                  <div className="space-y-2 text-sm text-green-700">
                    <p>✓ Your phone rings with qualified prospects, not tire-kickers</p>
                    <p>✓ You book jobs at premium prices because you look professional</p>
                    <p>✓ Your calendar fills up weeks in advance</p>
                    <p>✓ You sleep better knowing leads are coming in automatically</p>
                    <p>✓ You finally work ON your business instead of IN it</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Investment: $1,500/month</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>40-80 qualified leads</span>
                    <span className="font-semibold">$18-37 per lead</span>
                  </div>
                  <div className="flex justify-between">
                    <span>10-20 closed jobs</span>
                    <span className="font-semibold">$75-150 per job</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold">
                    <span>ROI if avg job = $2,500</span>
                    <span className="text-green-600">1,667% - 3,333%</span>
                  </div>
                </div>
                
                <Button className="w-full button-gradient text-lg py-3 mb-4">
                  Get Started Today
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Limited availability for holiday season setup
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary to-orange-500 text-white rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't Let Another Holiday Season Pass You By
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                You know what it feels like to watch your competitors get all the good jobs. 
                This year can be different. This year, you can be the contractor everyone wants to hire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4"
                >
                  Start Getting Jobs Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-4"
                >
                  See How It Works
                </Button>
              </div>
              
              <p className="text-sm mt-6 opacity-90">
                Setup completed in 7 days or your money back
              </p>
            </div>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default LightingJobs;