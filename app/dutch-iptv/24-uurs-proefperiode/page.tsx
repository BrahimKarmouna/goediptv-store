import { SeoPageLayout } from "@/components/seo-page-layout";
import { Button } from "@/components/ui/button";
import { Tv, Zap, Clapperboard, ShieldCheck } from "lucide-react";

const Feature = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-muted/30 rounded-lg border border-border transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
    <div className="p-4 bg-primary/10 rounded-full mb-4">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function DutchIptvTrialPage() {
  return (
    <SeoPageLayout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-muted/20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Probeer Onze Premium <span className="text-primary">Dutch IPTV</span> 24 Uur Gratis
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Ervaar zelf de superieure kwaliteit en het enorme aanbod van onze IPTV-service. Volledig risicovrij, geen verplichtingen.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6">
              Start Nu Je Gratis Proefperiode
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature 
              icon={Tv} 
              title="20,000+ Kanalen"
              description="Krijg toegang tot een gigantisch aanbod van Nederlandse en internationale zenders."
            />
            <Feature 
              icon={Zap} 
              title="HD & 4K Kwaliteit"
              description="Geniet van haarscherp beeld zonder haperingen voor de beste kijkervaring."
            />
            <Feature 
              icon={Clapperboard} 
              title="Films & Series"
              description="On-demand toegang tot de nieuwste films en populaire series, direct beschikbaar."
            />
            <Feature 
              icon={ShieldCheck} 
              title="Stabiel & Betrouwbaar"
              description="Onze servers garanderen 99.9% uptime, zodat je nooit iets hoeft te missen."
            />
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
}
