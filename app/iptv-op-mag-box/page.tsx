import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Formuler",
  "IPTV met Enigma2",
  "IPTV op Smart TV",
  "IPTV op Android",
  "IPTV Proefperiode"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnMagBoxPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op MAG Box: Configuratie en Handleiding"
      relatedLinks={relatedLinks}
    >
      <p>
        MAG boxen zijn speciaal ontworpen voor IPTV en staan bekend om hun stabiliteit en gebruiksgemak. Deze apparaten zijn een favoriete keuze voor gebruikers die een betrouwbare, 'altijd-aan' oplossing zoeken zonder de complexiteit van andere systemen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe configureert u een MAG Box?</h2>
      <p>
        De configuratie is eenvoudig. Na het opstarten van de box navigeert u naar de instellingen en voert u de portal URL in die u van ons ontvangt. De box zal automatisch de zenderlijst en EPG laden. Er is geen technische kennis voor nodig.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van een Speciale MAG Box</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ontworpen voor maximale stabiliteit en prestaties met IPTV.</li>
        <li>Zeer eenvoudige installatie via een portal URL.</li>
        <li>Snelle laadtijden en een soepele navigatie door zenders.</li>
        <li>Robuust en betrouwbaar voor een ononderbroken kijkervaring.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
