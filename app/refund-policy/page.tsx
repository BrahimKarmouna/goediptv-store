import { Metadata } from 'next';
import { AdvancedSeoPageLayout } from '@/components/advanced-seo-page-layout';

export const metadata: Metadata = {
  title: 'Refund Policy - StreamPro IPTV',
  description: 'Learn about our refund policy for IPTV subscriptions and services.',
};

export default function RefundPolicy() {
  return (
    <AdvancedSeoPageLayout
      title="Refund Policy"
      description="Last Updated: August 18, 2024"
    >
      <div className="prose prose-lg max-w-none">
        <h2>1. General Refund Policy</h2>
        <p>All sales of StreamPro IPTV services are final. Due to the digital nature of our products and services, we do not offer refunds except as required by law or at our sole discretion.</p>

        <h2>2. Free Trial Period</h2>
        <p>We offer a 7-day free trial for new customers. You may cancel your subscription at any time during the trial period without being charged.</p>

        <h2>3. Subscription Cancellation</h2>
        <p>You may cancel your subscription at any time, but no refunds will be provided for any unused portion of your subscription period.</p>

        <h2>4. Service Issues</h2>
        <p>If you experience any issues with our service, please contact our support team. We will make every effort to resolve any technical problems you may encounter.</p>

        <h2>5. Billing Disputes</h2>
        <p>If you believe you have been charged in error, please contact our support team immediately. We will investigate any billing disputes and issue refunds when appropriate.</p>

        <h2>6. Changes to This Policy</h2>
        <p>We reserve the right to modify this refund policy at any time. Any changes will be effective immediately upon posting on our website.</p>
      </div>
    </AdvancedSeoPageLayout>
  );
}
