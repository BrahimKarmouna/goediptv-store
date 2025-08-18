import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Eindhoven",
  "IPTV in Breda",
  "IPTV in Den Bosch", // Assuming Den Bosch might be a relevant nearby city
  "IPTV in Utrecht",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInTilburgPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Tilburg: Betrouwbaar, Snel en Perfect voor Studenten"
      relatedLinks={relatedLinks}
    >
      <p>
        In de levendige stad Tilburg, bekend om zijn universiteit en evenementen, bieden wij een IPTV-service die altijd presteert. Of je nu de wedstrijden van Willem II wilt volgen of een avondje wilt ontspannen met een film, onze dienst is de perfecte match.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Service voor de Tilburgse Kijker</h2>
      <p>
        Wij leveren een stabiele, snelle IPTV-verbinding die is opgewassen tegen de drukte van een studentenstad. Onze pakketten zijn scherp geprijsd en bieden een gigantisch aanbod aan zenders, films en series. Ideaal voor elk huishouden in Tilburg en omstreken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Tilburgers voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Voordelige abonnementen die passen bij een studentenbudget.</li>
        <li>Hoge stabiliteit, zelfs tijdens grote evenementen zoals de Tilburgse Kermis.</li>
        <li>Inclusief Omroep Tilburg en andere regionale zenders.</li>
        <li>Eenvoudige installatie en een behulpzame klantenservice.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
