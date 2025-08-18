import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op MAG Box",
  "IPTV op Formuler",
  "IPTV Zenderlijst",
  "IPTV Installeren",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvWithEnigma2Page() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Enigma2: Integreer IPTV op uw Satellietontvanger"
      relatedLinks={relatedLinks}
    >
      <p>
        Enigma2 is een krachtig, open-source besturingssysteem voor satelliet- en kabelontvangers van merken als Dreambox, VU+, en Zgemma. Het stelt gebruikers in staat om hun traditionele TV-ervaring uit te breiden met de flexibiliteit van IPTV.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe voegt u IPTV toe aan Enigma2?</h2>
      <p>
        Het integreren van IPTV op een Enigma2-apparaat gebeurt meestal via een script of een plugin zoals 'JediMaker Xtream'. U voert de M3U-link of Xtream Codes-gegevens in die u van ons ontvangt, en de tool genereert automatisch een boeket (zenderlijst) dat naadloos wordt geïntegreerd met uw bestaande satellietkanalen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen voor de Enigma2 Gebruiker</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Combineer uw satelliet- en IPTV-zenders in één overzichtelijke zenderlijst.</li>
        <li>Gebruik de vertrouwde interface en afstandsbediening van uw ontvanger.</li>
        <li>Profiteer van geavanceerde functies zoals opnemen op een interne of externe harde schijf.</li>
        <li>Een perfecte oplossing voor hobbyisten die volledige controle willen.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
