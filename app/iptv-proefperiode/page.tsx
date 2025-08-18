import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Kopen",
  "IPTV Abonnement",
  "Beste IPTV Aanbieder",
  "IPTV Testen",
  "IPTV Betalen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvProefperiodePage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Proefperiode: Test Onze Service Zelf"
      relatedLinks={relatedLinks}
    >
      <p>
        Twijfelt u nog? Neem de proef op de som met een IPTV proefperiode. Ervaar zelf de kwaliteit en stabiliteit van onze dienst voordat u een volledig abonnement afsluit. Een proefperiode is de beste manier om overtuigd te raken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe Werkt een Proefperiode?</h2>
      <p>
        Een proefperiode geeft u voor een korte duur, bijvoorbeeld 24 of 48 uur, volledige toegang tot ons zenderpakket. U kunt op uw eigen apparaten testen hoe de service presteert. Bevalt het? Dan kunt u eenvoudig upgraden naar een volledig abonnement.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat Kunt u Verwachten van de Proef?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Volledige Toegang:</strong> Krijg toegang tot alle zenders, net als bij een betaald abonnement.</li>
        <li><strong>Geen Verplichtingen:</strong> De proefperiode stopt automatisch. U zit nergens aan vast.</li>
        <li><strong>Eerlijke Test:</strong> Ervaar onze daadwerkelijke serverprestaties en beeldkwaliteit.</li>
        <li><strong>Snelle Start:</strong> Vraag uw proefperiode aan en begin vaak binnen enkele minuten met kijken.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
