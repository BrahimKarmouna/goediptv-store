import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Utrecht",
  "IPTV in Almere",
  "IPTV in Arnhem",
  "IPTV in Nijmegen",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInAmersfoortPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Amersfoort: De Beste Keuze voor de Keistad"
      relatedLinks={relatedLinks}
    >
      <p>
        In het hart van Nederland, de prachtige stad Amersfoort, bieden wij een IPTV-service die perfect is voor gezinnen en iedereen die op zoek is naar betrouwbaar en compleet TV-vermaak. Geniet van een stabiele verbinding en een enorm zenderpakket.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Service voor Heel Amersfoort</h2>
      <p>
        Onze dienst is ontworpen om in heel Amersfoort, van het historische centrum tot de nieuwste wijken, een perfecte kijkervaring te bieden. We leveren een breed scala aan zenders, inclusief kinderkanalen, sport, films en series, zodat er voor ieder wat wils is.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Amersfoorters voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Een familie-vriendelijk zenderpakket voor een scherpe prijs.</li>
        <li>Uiterst stabiele verbinding, ideaal voor een avondje TV met het hele gezin.</li>
        <li>Inclusief de lokale zender EVA.</li>
        <li>Vriendelijke en behulpzame klantenservice.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
