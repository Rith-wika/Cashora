import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Smartphone, Users, Bell } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Built with Flutter + GetX',
    description: 'Cross-platform mobile app with reactive state management',
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Biometric login and token-based security',
  },
  {
    icon: Users,
    title: 'Role-based Dashboards',
    description: 'Customized views for Requestor, Admin & Accountant',
  },
  {
    icon: Bell,
    title: 'Real-time Notifications',
    description: 'Instant updates on request status changes',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl -z-10" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            About CASHORA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Revolutionizing <span className="gradient-text">Petty Cash</span> Management
          </h2>
          <p className="text-lg text-muted-foreground">
            CASHORA is a role-based petty cash management mobile application designed for 
            organizations to digitize cash request workflows. Say goodbye to paper-based 
            processes and embrace transparent, efficient financial management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover-lift border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 shadow-button group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '100%', label: 'Digital Workflow' },
            { value: '24/7', label: 'Access Available' },
            { value: '3', label: 'User Roles' },
            { value: '∞', label: 'Scalability' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-accent/50">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
