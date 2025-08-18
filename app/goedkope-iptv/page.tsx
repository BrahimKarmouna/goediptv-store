import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Abonnement",
  "IPTV Kopen",
  "IPTV Vergelijken",
  "Beste IPTV Aanbieder",
  "IPTV Betalen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function GoedkopeIptvPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Goedkope IPTV: Betaalbaar Kijken Zonder Compromis"
      relatedLinks={relatedLinks}
    >
      <p>
        Op zoek naar goedkope IPTV? Goedkoop hoeft geen duurkoop te zijn. Wij bewijzen dat een voordelig IPTV abonnement hand in hand kan gaan met hoge kwaliteit, een groot zenderaanbod en een betrouwbare service.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe Wij Kwaliteit Betaalbaar Houden</h2>
      <p>
        Wij focussen op efficiëntie. Door onze processen te automatiseren en slim te investeren in onze infrastructuur, kunnen we de kosten laag houden. Deze besparing geven we direct door aan u, de klant. Zo geniet u van een premium ervaring voor een scherpe prijs.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat U Krijgt voor een Lage Prijs</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Volledig Zenderpakket:</strong> Geen uitgeklede pakketten, u krijgt toegang tot ons volledige aanbod.</li>
        <li><strong>Stabiele Streams:</strong> Ook onze goedkope pakketten draaien op onze high-performance servers.</li>
        <li><strong>Geen Langlopende Contracten:</strong> Flexibiliteit en vrijheid staan voorop.</li>
        <li><strong>Eerlijke Prijs:</strong> Geen verborgen kosten of onverwachte prijsverhogingen.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
