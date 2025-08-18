import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import PricingSection from "@/components/pricing-section"; // ✅ Corrected

import React from "react";

interface SeoPageLayoutProps {
  children: React.ReactNode;
}

export function SeoPageLayout({ children }: SeoPageLayoutProps) {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <main>{children}</main>
      <PricingSection /> {/* Works now */}

      <Footer />
    </div>
  );
}
