import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Reviews",
  "Beste IPTV Aanbieder",
  "Stabiele IPTV",
  "Betrouwbare IPTV",
  "IPTV Vergelijken"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvErvaringenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Ervaringen: Lees de Verhalen van Onze Klanten"
      relatedLinks={relatedLinks}
    >
      <p>
        Benieuwd naar de echte IPTV ervaringen van onze gebruikers? Op deze pagina delen we de verhalen van onze klanten. Van de eenvoudige installatie tot het dagelijkse kijkplezier, lees hier hoe anderen onze dienst ervaren.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Echte Verhalen van Echte Gebruikers</h2>
      <p>
        Onze klanten zijn onze beste ambassadeurs. Hun dagelijkse ervaringen met onze service geven het meest eerlijke beeld van wat u kunt verwachten. We zijn er trots op dat we een dienst leveren die het leven van onze klanten een beetje leuker maakt.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat Waarderen Onze Klanten het Meest?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>De Stabiliteit:</strong> "Eindelijk een dienst die niet hapert tijdens de Formule 1." - Jan uit Utrecht</li>
        <li><strong>Het Grote Aanbod:</strong> "Ik kan eindelijk alle series uit Amerika direct volgen." - Fatima uit Amsterdam</li>
        <li><strong>De Klantenservice:</strong> "Ik werd super snel en vriendelijk geholpen met de installatie." - Peter uit Antwerpen</li>
        <li><strong>Het Gemak:</strong> "Ik neem mijn IPTV gewoon mee op vakantie, ideaal!" - Chantal uit Eindhoven</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
