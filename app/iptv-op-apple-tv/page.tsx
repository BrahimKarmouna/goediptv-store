import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Smart TV",
  "IPTV op Android",
  "IPTV op Chromecast",
  "IPTV op MAG Box",
  "IPTV op Smartphone"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnAppleTvPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Apple TV: De Beste Apps en Installatiegids"
      relatedLinks={relatedLinks}
    >
      <p>
        Apple TV staat bekend om zijn premium gebruikerservaring en uitstekende prestaties. Met de juiste app transformeert u uw Apple TV in een krachtig IPTV-apparaat, waarmee u kunt genieten van een naadloze kijkervaring.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Aanbevolen IPTV Apps voor Apple TV</h2>
      <p>
        Voor tvOS (het besturingssysteem van Apple TV) is de 'iPlayTV' app een van de meest geprezen keuzes. Ook 'GSE Smart IPTV' is een uitstekende, veelzijdige optie die beschikbaar is in de App Store. Beide apps bieden een strakke interface die perfect past bij de Apple-ecosysteem.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom IPTV op Apple TV een premium keuze is</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Uitzonderlijk soepele prestaties dankzij de krachtige Apple-chip.</li>
        <li>Perfecte integratie met andere Apple-apparaten.</li>
        <li>Hoogwaardige apps met een focus op gebruiksgemak en design.</li>
        <li>Ondersteuning voor de hoogste videokwaliteit en moderne codecs.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
