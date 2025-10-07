
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Owner @ SparkleClean",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "HomeServicePro replaced Jobber and saved me 5 hours/week. Our quote-to-close rate improved by 30% with the automated follow-ups.",
    metric: "+30% Quote-to-Close Rate"
  },
  {
    name: "Carlos Diaz", 
    role: "CEO @ ClearView Windows",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Their SMS-nurture campaigns got our old clients back on schedule. We're seeing 5× more repeat bookings than before.",
    metric: "5× More Repeat Bookings"
  },
  {
    name: "Priya Patel",
    role: "Founder @ BrightLight Pros", 
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Snapshot deploy took 3 minutes—we were live same day. The zero-setup hassle made switching painless.",
    metric: "Zero-Setup Hassle"
  },
  {
    name: "Mike Johnson",
    role: "Manager @ CleanCorp",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "The dual pipeline system keeps our sales and production teams organized. No more confusion about job stages.",
    metric: "Streamlined Operations"
  },
  {
    name: "Sarah Wilson",
    role: "Owner @ GutterGuard Pro",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4", 
    content: "Payment collection improved dramatically with integrated Stripe. Customers love the e-sign functionality.",
    metric: "Faster Payments"
  },
  {
    name: "David Chen",
    role: "CEO @ PowerWash Plus",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "The automation workflows handle appointment reminders and follow-ups perfectly. Our customer service improved instantly.",
    metric: "Improved Customer Service"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">From Our Clients</h2>
          <p className="text-muted-foreground text-lg">
            Real results from home service businesses like yours
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {testimonial.metric}
                    </span>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {testimonial.metric}
                    </span>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
