import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, UserCheck, CreditCard, Wallet, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Send,
    title: 'Submit Request',
    description: 'Employee creates and submits a petty cash request with all required details',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: UserCheck,
    title: 'Admin Review',
    description: 'Admin reviews the request and approves or requests clarification',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Process Payment',
    description: 'Accountant processes the approved request via UPI or bank transfer',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Wallet,
    title: 'Receive Funds',
    description: 'User receives the money in their account instantly',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: CheckCircle2,
    title: 'Status: PAID',
    description: 'Request marked as complete with full transaction history',
    color: 'from-emerald-500 to-emerald-600',
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-50/50 via-background to-background -z-10" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple <span className="gradient-text">5-Step</span> Process
          </h2>
          <p className="text-lg text-muted-foreground">
            From request to payment, CASHORA streamlines the entire petty cash workflow 
            with complete transparency and tracking.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step number with icon */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg z-10`}
                  >
                    <step.icon className="w-9 h-9 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary text-primary text-sm font-bold flex items-center justify-center shadow-md">
                      {index + 1}
                    </span>
                  </motion.div>
                  
                  <div className="mt-6 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-primary text-primary text-xs font-bold flex items-center justify-center shadow">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-purple-200" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-1 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
