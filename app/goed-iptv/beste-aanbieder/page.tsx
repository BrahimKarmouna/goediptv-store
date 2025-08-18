import { SeoPageLayout } from "@/components/seo-page-layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, LifeBuoy, Zap, Tag } from "lucide-react";

const Advantage = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="p-3 bg-primary/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default function GoedIptvBestProviderPage() {
  return (
    <SeoPageLayout>
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                De <span className="text-primary">Beste Aanbieder</span> voor Stabiele en Goedkope IPTV
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Wij combineren een scherpe prijs met een ongeëvenaarde service, 99.9% uptime en een gigantisch zenderaanbod. Ontdek waarom duizenden klanten voor ons kiezen als hun vaste IPTV provider.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 space-y-10">
              <Advantage 
                icon={ShieldCheck} 
                title="99.9% Uptime Garantie"
                description="Onze krachtige servers zorgen voor een stabiele kijkervaring zonder haperingen, zelfs tijdens live sport."
              />
              <Advantage 
                icon={LifeBuoy} 
                title="24/7 Klantenservice"
                description="Ons deskundige support team staat dag en nacht voor u klaar om u te helpen met al uw vragen."
              />
              <Advantage 
                icon={Zap} 
                title="Uitmuntende Beeldkwaliteit"
                description="Geniet van al uw favoriete zenders in haarscherpe HD en 4K kwaliteit voor de ultieme ervaring."
              />
              <Advantage 
                icon={Tag} 
                title="Eerlijke Prijs"
                description="De beste prijs-kwaliteitverhouding in de markt, zonder verborgen kosten of langdurige contracten."
              />
            </div>
          </div>
          <div className="mt-20 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
              Bekijk Onze Abonnementen
            </Button>
          </div>
        </div>
      </section>
    </SeoPageLayout>
  );
}
