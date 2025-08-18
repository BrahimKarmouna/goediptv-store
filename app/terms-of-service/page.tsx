import { Metadata } from 'next';
import { AdvancedSeoPageLayout } from '@/components/advanced-seo-page-layout';

export const metadata: Metadata = {
  title: 'Terms of Service - StreamPro IPTV',
  description: 'Read our Terms of Service to understand the rules and guidelines for using our IPTV services.',
};

export default function TermsOfService() {
  return (
    <AdvancedSeoPageLayout
      title="Terms of Service"
      description="Last Updated: August 18, 2024"
    >
      <div className="prose prose-lg max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

        <h2>2. Service Description</h2>
        <p>StreamPro IPTV provides streaming television services over the internet. We reserve the right to modify or discontinue our services at any time without notice.</p>

        <h2>3. Account Registration</h2>
        <p>To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>

        <h2>4. Payment and Billing</h2>
        <p>All fees are non-refundable except as required by law. We may change our pricing at any time, but will provide notice of any price changes.</p>

        <h2>5. Prohibited Activities</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services for any illegal purpose</li>
          <li>Share your account credentials with others</li>
          <li>Attempt to bypass our security measures</li>
          <li>Resell or redistribute our content without permission</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>All content provided through our services is protected by copyright and other intellectual property laws. You may not copy, distribute, or create derivative works without our permission.</p>

        <h2>7. Limitation of Liability</h2>
        <p>We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>

        <h2>8. Changes to Terms</h2>
        <p>We may update these Terms of Service from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this page.</p>
      </div>
    </AdvancedSeoPageLayout>
  );
}
