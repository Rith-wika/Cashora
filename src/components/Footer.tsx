import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import cashoraLogo from '@/assets/cashora-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-800/10" />
      
      <div className="container-custom relative">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={cashoraLogo} alt="CASHORA" className="w-10 h-10" />
                <span className="text-xl font-bold text-primary-foreground">CASHORA</span>
              </div>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Smart Petty Cash Management System for modern organizations. 
                Digitize your cash workflows with complete transparency.
              </p>
              <div className="flex gap-3">
                {['📱', '💻', '📊'].map((emoji, i) => (
                  <span key={i} className="text-xl">{emoji}</span>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Features', href: '#features' },
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'Contact Us', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-primary-foreground mb-4">Features</h4>
              <ul className="space-y-2">
                {[
                  'Cash Requests',
                  'Approval Workflow',
                  'Payment Processing',
                  'Analytics Dashboard',
                  'Role Management',
                ].map((item) => (
                  <li key={item} className="text-primary-foreground/70 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>support@sriainfotech.com</li>
                <li>+91 9701314138</li>
                <li>
                  First Floor, 1-121/63 Survey No. 63 Part,<br />
                  Hotel Sitara Grand Backside, Miyapur,<br />
                  Telangana 500049
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
              © {currentYear} CASHORA. Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> in India
            </p>
            <div className="flex gap-6 text-sm">
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
