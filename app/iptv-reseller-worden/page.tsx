import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Kopen",
  "IPTV Abonnement",
  "Beste IPTV Aanbieder",
  "IPTV voor Zakelijk Gebruik",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvResellerPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Reseller Worden: Start Vandaag nog met Verkopen"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u IPTV reseller worden en uw eigen klantenkring opbouwen? Wij bieden een professioneel en betrouwbaar reseller-programma. Profiteer van onze stabiele infrastructuur en uitstekende ondersteuning om uw eigen succesvolle IPTV-bedrijf te starten.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Ons Reseller Programma?</h2>
      <p>
        Wij bieden een compleet pakket voor resellers. U krijgt toegang tot een eigen beheerpaneel, concurrerende inkoopprijzen en de vrijheid om uw eigen prijzen en pakketten te bepalen. Wij zorgen voor de techniek, zodat u zich kunt focussen op de verkoop.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Voordelen voor Onze Resellers</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Eigen Beheerpaneel:</strong> Eenvoudig klanten en abonnementen beheren.</li>
        <li><strong>Aantrekkelijke Marges:</strong> Bepaal uw eigen winst met onze scherpe inkoopprijzen.</li>
        <li><strong>Stabiele Service:</strong> Bied uw klanten een dienst aan waar u trots op kunt zijn.</li>
        <li><strong>Technische Ondersteuning:</strong> Wij staan achter u met deskundige technische support.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
