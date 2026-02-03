import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FileText, 
  Receipt, 
  TrendingUp, 
  BarChart3,
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  Settings,
  Users,
  CreditCard,
  Building2,
  FileSpreadsheet,
  Fingerprint,
  Moon,
  ShieldCheck,
  BellRing
} from 'lucide-react';

const tabs = [
  { id: 'requestor', label: 'Requestor', icon: FileText },
  { id: 'admin', label: 'Admin', icon: Settings },
  { id: 'accountant', label: 'Accountant', icon: CreditCard },
  { id: 'global', label: 'Global', icon: ShieldCheck },
];

const featuresData: Record<string, { icon: typeof FileText; title: string; description: string }[]> = {
  requestor: [
    { icon: FileText, title: 'Create Cash Requests', description: 'Submit petty cash requests with detailed descriptions and amounts' },
    { icon: Receipt, title: 'Upload Receipts', description: 'Attach receipt images and supporting documents to your requests' },
    { icon: TrendingUp, title: 'Track Status', description: 'Monitor your request status in real-time from submission to payment' },
    { icon: BarChart3, title: 'Monthly Analytics', description: 'View your spending patterns with detailed monthly analytics' },
  ],
  admin: [
    { icon: CheckCircle2, title: 'Approve / Reject', description: 'Review and process incoming requests with one-tap approval' },
    { icon: MessageSquare, title: 'Request Clarifications', description: 'Ask for additional details before making a decision' },
    { icon: Settings, title: 'Set Spending Limits', description: 'Configure spending limits per user or department' },
    { icon: Users, title: 'User Management', description: 'Manage team members and their access permissions' },
  ],
  accountant: [
    { icon: CreditCard, title: 'Process Payments', description: 'Execute approved payments directly from the dashboard' },
    { icon: Building2, title: 'UPI / Bank Transfer', description: 'Support for multiple payment methods including UPI' },
    { icon: TrendingUp, title: 'Payment Tracking', description: 'Track all payment statuses and transaction history' },
    { icon: FileSpreadsheet, title: 'Financial Reports', description: 'Generate comprehensive financial reports and exports' },
  ],
  global: [
    { icon: Fingerprint, title: 'Biometric Login', description: 'Secure authentication using fingerprint or face recognition' },
    { icon: Moon, title: 'Dark/Light Mode', description: 'Choose your preferred theme for comfortable viewing' },
    { icon: ShieldCheck, title: 'Token Authentication', description: 'Enterprise-grade security with JWT token authentication' },
    { icon: BellRing, title: 'Push Notifications', description: 'Stay updated with instant push notifications' },
  ],
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('requestor');

  return (
    <section id="features" className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-purple-50/30 to-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features for <span className="gradient-text">Every Role</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            CASHORA provides tailored experiences for every team member, ensuring efficient 
            workflows and complete transparency.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'gradient-bg text-primary-foreground shadow-button'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuresData[activeTab].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover-lift border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
