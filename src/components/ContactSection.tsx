import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import PolicyAccordion from './PolicyAccordion';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: 'Agreement Required',
        description: 'Please agree to the terms and policies before submitting.',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you soon.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setAgreed(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-purple-50/30 to-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl -z-10" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about CASHORA? We're here to help you get started with 
            your petty cash management journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agree"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked === true)}
                    className="mt-1"
                  />
                  <label htmlFor="agree" className="text-sm text-muted-foreground cursor-pointer">
                    I agree to the Terms & Conditions, Privacy Policy, Refund & Cancellation Policy, 
                    Return Policy, and Shipping Policy.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-bg text-primary-foreground shadow-button hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground text-sm">
                      123 Business Park, Tech City,<br />
                      Bangalore, Karnataka 560001, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email Address</h4>
                    <p className="text-muted-foreground text-sm">support@cashora.app</p>
                    <p className="text-muted-foreground text-sm">sales@cashora.app</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone Number</h4>
                    <p className="text-muted-foreground text-sm">+91 80 1234 5678</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 text-center hover-lift border border-border/50">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-medium text-sm text-foreground">Download App</h4>
                <p className="text-xs text-muted-foreground">Coming Soon</p>
              </div>
              <div className="glass-card rounded-xl p-4 text-center hover-lift border border-border/50">
                <div className="text-3xl mb-2">📧</div>
                <h4 className="font-medium text-sm text-foreground">Newsletter</h4>
                <p className="text-xs text-muted-foreground">Stay Updated</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Policy Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <PolicyAccordion />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
