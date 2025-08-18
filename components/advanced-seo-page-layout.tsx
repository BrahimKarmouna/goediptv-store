import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import PricingSection from "@/components/pricing-section";
import React from "react";
import Link from 'next/link';

interface RelatedLink {
  title: string;
  href: string;
}

interface AdvancedSeoPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  relatedLinks?: RelatedLink[];
}

export function AdvancedSeoPageLayout({ title, children, relatedLinks = [] }: AdvancedSeoPageLayoutProps) {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-8">
                {title}
              </h1>
              <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
                {children}
              </div>
            </div>
            {/* Sidebar with related links */}
            {relatedLinks.length > 0 && (
              <aside className="mt-12 lg:mt-0">
                <div className="sticky top-24 p-6 bg-muted/30 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Gerelateerde Onderwerpen
                  </h3>
                  <ul className="space-y-3">
                    {relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-primary hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>
      <PricingSection />
      <Footer />
    </div>
  );
}
