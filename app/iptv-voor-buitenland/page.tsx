import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "Nederlandse IPTV in buitenland",
  "IPTV voor op vakantie",
  "IPTV Kopen",
  "Stabiele IPTV",
  "IPTV met VPN gebruiken"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvVoorBuitenlandPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV voor Buitenland: Kijk Overal ter Wereld Nederlandse TV"
      relatedLinks={relatedLinks}
    >
      <p>
        Woont u in het buitenland of bent u op vakantie en mist u de Nederlandse televisie? Met onze IPTV-service kunt u overal ter wereld genieten van uw favoriete Nederlandse en Belgische zenders. Het enige wat u nodig heeft is een stabiele internetverbinding.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Ideale Oplossing voor Expats en Reizigers</h2>
      <p>
        Onze IPTV-dienst is de perfecte oplossing voor Nederlanders en Belgen in het buitenland. Blijf op de hoogte van het laatste nieuws, volg de Eredivisie, of kijk naar uw vertrouwde talkshows, waar u ook bent. Geen schotel nodig, geen geografische beperkingen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe Werkt Het?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Wereldwijde Toegang:</strong> Onze service werkt in vrijwel elk land met een internetverbinding.</li>
        <li><strong>Eenvoudige Installatie:</strong> Installeer de IPTV-app op uw apparaat, voer uw gegevens in en begin met kijken.</li>
        <li><strong>Stabiele Verbinding:</strong> Onze servers zijn wereldwijd bereikbaar en bieden een stabiele kijkervaring.</li>
        <li><strong>VPN-vriendelijk:</strong> Hoewel vaak niet nodig, werkt onze dienst uitstekend in combinatie met een VPN voor extra privacy of in landen met strikte internetregels.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
