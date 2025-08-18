import { SeoPageLayout } from "@/components/seo-page-layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCard = ({ plan, price, duration, features, popular = false }: { plan: string, price: string, duration: string, features: string[], popular?: boolean }) => (
  <div className={`relative p-8 rounded-2xl border ${popular ? 'border-primary shadow-2xl shadow-primary/20' : 'border-border'} bg-muted/30 flex flex-col`}>
    {popular && (
      <div className="absolute top-0 -translate-y-1/2 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary-foreground bg-primary rounded-full shadow-md">
        Meest Populair
      </div>
    )}
    <h3 className="text-2xl font-bold text-foreground">{plan}</h3>
    <p className="mt-2 text-muted-foreground">{duration}</p>
    <div className="mt-6">
      <span className="text-5xl font-extrabold text-foreground">{price}</span>
      <span className="text-lg font-medium text-muted-foreground">/maand</span>
    </div>
    <ul className="mt-8 space-y-4 text-muted-foreground flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button size="lg" className={`w-full mt-10 font-bold text-lg py-6 ${popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}>
      Kies Dit Plan
    </Button>
  </div>
);

export default function DutchIptvSubscriptionPage() {
  return (
    <SeoPageLayout>
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Kies Jouw Perfecte <span className="text-primary">IPTV Abonnement</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              Flexibele en betaalbare plannen voor onbeperkt entertainment. Directe activatie, 24/7 support.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <PricingCard 
              plan="1 Maand"
              price="€15"
              duration="Flexibel & maandelijks opzegbaar"
              features={["20,000+ Kanalen", "HD & 4K Kwaliteit", "Films & Series On-Demand", "24/7 Klantenservice"]}
            />
            <PricingCard 
              plan="1 Jaar"
              price="€8"
              duration="Beste waarde & meest gekozen"
              features={["20,000+ Kanalen", "HD & 4K Kwaliteit", "Films & Series On-Demand", "24/7 Klantenservice", "Jaarlijkse Besparing", "Priority Support"]}
              popular={true}
            />
            <PricingCard 
              plan="3 Maanden"
              price="€12"
              duration="Probeer voor een kwartaal"
              features={["20,000+ Kanalen", "HD & 4K Kwaliteit", "Films & Series On-Demand", "24/7 Klantenservice"]}
            />
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
}
