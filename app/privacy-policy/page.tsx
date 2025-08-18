import { Metadata } from 'next';
import { AdvancedSeoPageLayout } from '@/components/advanced-seo-page-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy - StreamPro IPTV',
  description: 'Read our Privacy Policy to understand how we collect, use, and protect your personal information when you use our IPTV services.',
};

export default function PrivacyPolicy() {
  return (
    <AdvancedSeoPageLayout
      title="Privacy Policy"
      description="Last Updated: August 18, 2024"
    >
      <div className="prose prose-lg max-w-none">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Billing and payment information</li>
          <li>Account credentials</li>
          <li>Usage data and preferences</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Send you technical notices, updates, and support messages</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>4. Third-Party Services</h2>
        <p>We may employ third-party companies to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf.</p>

        <h2>5. Changes to This Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
      </div>
    </AdvancedSeoPageLayout>
  );
}
