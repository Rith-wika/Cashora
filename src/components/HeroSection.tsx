import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cashoraLogo from '@/assets/cashora-logo.png';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-background to-purple-100/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-200/20 to-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Smart Petty Cash Management
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="gradient-text">CASHORA</span>
              <br />
              <span className="text-foreground">Smart Petty Cash</span>
              <br />
              <span className="text-foreground">Management System</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Manage requests, approvals, and payments digitally with full transparency. 
              Streamline your organization's cash flow with our intuitive mobile app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="gradient-bg text-primary-foreground shadow-button hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 group text-base px-8"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-primary/30 text-foreground hover:bg-accent hover:border-primary/50 transition-all duration-300 group text-base px-8"
              >
                <Play className="mr-2 w-5 h-5 text-primary" />
                Request Demo
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </span>
                Secure Authentication
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                </span>
                Real-time Tracking
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                </span>
                Role-based Access
              </div>
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-30 scale-110" />
              
              {/* Phone mockup container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative glass-card rounded-3xl p-8 md:p-12"
              >
                <div className="relative w-64 md:w-80 aspect-[9/16] bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl overflow-hidden shadow-elevated">
                  {/* Phone screen content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background to-purple-50">
                    <motion.img
                      src={cashoraLogo}
                      alt="CASHORA"
                      className="w-24 h-24 mb-6"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="text-center">
                      <h3 className="text-2xl font-bold gradient-text mb-2">CASHORA</h3>
                      <p className="text-sm text-muted-foreground">Petty Cash Management</p>
                    </div>
                    
                    {/* Mock UI elements */}
                    <div className="mt-8 w-full space-y-3">
                      <div className="h-12 bg-gradient-to-r from-purple-400/20 to-purple-300/20 rounded-xl" />
                      <div className="h-12 bg-gradient-to-r from-purple-300/20 to-purple-200/20 rounded-xl" />
                      <div className="h-10 gradient-bg rounded-xl flex items-center justify-center">
                        <span className="text-primary-foreground text-sm font-medium">Get Started</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/10 rounded-full" />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center shadow-card"
              >
                <span className="text-2xl">💰</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center shadow-card"
              >
                <span className="text-2xl">✅</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-8 w-14 h-14 glass-card rounded-xl flex items-center justify-center shadow-card"
              >
                <span className="text-xl">📊</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
