import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const policies = [
  {
    id: 'terms',
    title: 'Terms & Conditions',
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>Welcome to CASHORA. By accessing and using our mobile application and services, you agree to be bound by these Terms and Conditions.</p>
        
        <h4 className="font-semibold text-foreground">1. Acceptance of Terms</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>By downloading, installing, or using CASHORA, you agree to these terms</li>
          <li>If you do not agree, please do not use our services</li>
          <li>We reserve the right to modify these terms at any time</li>
        </ul>

        <h4 className="font-semibold text-foreground">2. User Accounts</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>You must provide accurate and complete registration information</li>
          <li>You are responsible for maintaining the confidentiality of your account</li>
          <li>You must notify us immediately of any unauthorized access</li>
        </ul>

        <h4 className="font-semibold text-foreground">3. Permitted Use</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>CASHORA is intended for legitimate petty cash management purposes only</li>
          <li>You may not use the service for any illegal or unauthorized purpose</li>
          <li>You must comply with all applicable laws and regulations</li>
        </ul>

        <h4 className="font-semibold text-foreground">4. Intellectual Property</h4>
        <p>All content, features, and functionality of CASHORA are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>

        <h4 className="font-semibold text-foreground">5. Limitation of Liability</h4>
        <p>CASHORA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
      </div>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
        
        <h4 className="font-semibold text-foreground">1. Information We Collect</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Personal identification information (name, email, phone number)</li>
          <li>Financial information for payment processing</li>
          <li>Device information and usage data</li>
          <li>Location data (with your consent)</li>
        </ul>

        <h4 className="font-semibold text-foreground">2. How We Use Your Information</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>To provide and maintain our service</li>
          <li>To process transactions and send related information</li>
          <li>To send notifications about your account or requests</li>
          <li>To improve our service and user experience</li>
        </ul>

        <h4 className="font-semibold text-foreground">3. Data Security</h4>
        <p>We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your data.</p>

        <h4 className="font-semibold text-foreground">4. Data Sharing</h4>
        <p>We do not sell or rent your personal information. We may share data with trusted third parties only as necessary to provide our services.</p>

        <h4 className="font-semibold text-foreground">5. Your Rights</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access and receive a copy of your personal data</li>
          <li>Rectify any inaccurate personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'refund',
    title: 'Refund & Cancellation Policy',
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>This policy outlines the terms for refunds and cancellations related to CASHORA services.</p>
        
        <h4 className="font-semibold text-foreground">1. Subscription Cancellation</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>You may cancel your subscription at any time through the app settings</li>
          <li>Cancellation will take effect at the end of the current billing period</li>
          <li>You will retain access to premium features until the period ends</li>
        </ul>

        <h4 className="font-semibold text-foreground">2. Refund Eligibility</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Refunds may be requested within 7 days of purchase</li>
          <li>Technical issues preventing service use may qualify for refunds</li>
          <li>Refunds are processed within 5-7 business days</li>
        </ul>

        <h4 className="font-semibold text-foreground">3. Non-Refundable Items</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Partially used subscription periods</li>
          <li>Services already rendered</li>
          <li>Custom development or integration work</li>
        </ul>

        <h4 className="font-semibold text-foreground">4. How to Request a Refund</h4>
        <p>Contact our support team at support@cashora.app with your account details and reason for the refund request.</p>
      </div>
    ),
  },
  {
    id: 'return',
    title: 'Return Policy',
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>As CASHORA is a digital service/software product, traditional return policies for physical goods do not apply. However, we offer the following provisions:</p>
        
        <h4 className="font-semibold text-foreground">1. Digital Service Nature</h4>
        <p>CASHORA is a software-as-a-service (SaaS) product delivered electronically. There is no physical product to return.</p>

        <h4 className="font-semibold text-foreground">2. Service Satisfaction</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>We offer a free trial period for new users</li>
          <li>If unsatisfied during the trial, you may discontinue use without charge</li>
          <li>Post-trial issues are handled through our refund policy</li>
        </ul>

        <h4 className="font-semibold text-foreground">3. Data Portability</h4>
        <p>If you choose to leave CASHORA, you may request an export of your data in a standard format within 30 days of account closure.</p>

        <h4 className="font-semibold text-foreground">4. Account Termination</h4>
        <p>You may terminate your account at any time. Upon termination, your data will be retained for 30 days before permanent deletion.</p>
      </div>
    ),
  },
  {
    id: 'shipping',
    title: 'Shipping Policy',
    content: (
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>CASHORA is a digital mobile application, and therefore physical shipping does not apply to our core services. This policy covers digital delivery and any potential physical materials.</p>
        
        <h4 className="font-semibold text-foreground">1. Digital Delivery</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>CASHORA app is available for instant download from app stores</li>
          <li>Account activation is immediate upon registration</li>
          <li>Premium features are activated instantly upon payment confirmation</li>
        </ul>

        <h4 className="font-semibold text-foreground">2. Access Credentials</h4>
        <p>Login credentials and access instructions are delivered via email immediately upon account creation.</p>

        <h4 className="font-semibold text-foreground">3. Promotional Materials</h4>
        <p>If we offer any physical promotional materials or merchandise:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Shipping within India: 5-7 business days</li>
          <li>International shipping: 10-15 business days</li>
          <li>Tracking information provided via email</li>
        </ul>

        <h4 className="font-semibold text-foreground">4. Support Documentation</h4>
        <p>User manuals, guides, and documentation are available digitally through the app and our website at no additional cost.</p>
      </div>
    ),
  },
];

const PolicyAccordion = () => {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
      <h3 className="text-xl font-semibold mb-6 text-foreground">Policies & Legal Information</h3>
      <Accordion type="single" collapsible className="space-y-2">
        {policies.map((policy) => (
          <AccordionItem
            key={policy.id}
            value={policy.id}
            className="border border-border/50 rounded-xl px-4 bg-background/50 data-[state=open]:bg-accent/30"
          >
            <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
              {policy.title}
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              {policy.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PolicyAccordion;
