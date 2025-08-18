import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Groningen",
  "IPTV in Arnhem",
  "IPTV in Nijmegen",
  "IPTV met Duitse Zenders",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInEnschedePage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Enschede: Snel en Betrouwbaar in Twente"
      relatedLinks={relatedLinks}
    >
      <p>
        In het hart van Twente, de stad Enschede, leveren wij een IPTV-dienst die perfect is afgestemd op de regio. Of u nu FC Twente wilt volgen of wilt genieten van Duitse televisie, onze service biedt een compleet en betrouwbaar pakket.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Beste Verbinding voor Oost-Nederland</h2>
      <p>
        Onze servers zijn geoptimaliseerd om ook in het oosten van het land een ijzersterke verbinding te leveren. We bieden een uitgebreid zenderpakket met een speciale focus op kanalen die populair zijn in de grensregio, waaronder een groot aantal Duitse zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Enschedeërs voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Uitstekende selectie van Nederlandse en Duitse zenders.</li>
        <li>Stabiele streaming, zelfs tijdens de Grolsch Veste vol zit.</li>
        <li>Inclusief de lokale zender 1Twente Enschede.</li>
        <li>Betaalbare prijzen voor studenten en gezinnen in Twente.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
