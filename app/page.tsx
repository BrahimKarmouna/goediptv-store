import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import PricingSection from "@/components/pricing-section"
import FeaturesSection from "@/components/features-section"
import { ChannelPackages } from "@/components/channel-packages"
import { DeviceCompatibility } from "@/components/device-compatibility"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ChannelPackages />
      <DeviceCompatibility />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
