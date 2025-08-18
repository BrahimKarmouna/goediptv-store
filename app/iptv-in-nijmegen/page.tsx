import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Arnhem",
  "IPTV in Eindhoven",
  "IPTV in Utrecht",
  "IPTV met Duitse Zenders",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInNijmegenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Nijmegen: Betrouwbare TV voor de Oudste Stad van Nederland"
      relatedLinks={relatedLinks}
    >
      <p>
        In de historische stad Nijmegen, bekend om zijn universiteit en de Vierdaagse, leveren wij een IPTV-service die traditie en technologie combineert. Geniet van een stabiele, hoogwaardige kijkervaring met een zenderpakket dat is afgestemd op de wensen van elke Nijmegenaar.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Dienst voor de Waalstad</h2>
      <p>
        Of u nu de wedstrijden van N.E.C. wilt volgen of op de hoogte wilt blijven van het wereldnieuws, onze service biedt het allemaal. Dankzij de ligging nabij Duitsland hebben we ook een uitstekend aanbod van Duitse zenders. Onze servers garanderen een soepele stream, zelfs tijdens de drukte van de Vierdaagsefeesten.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Nijmegenaren voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Zeer betrouwbare service met 99.9% uptime.</li>
        <li>Uitgebreid zenderpakket met Nederlandse, Duitse en andere internationale kanalen.</li>
        <li>Inclusief de lokale zender RN7.</li>
        <li>Voordelige prijzen, ideaal voor de vele studenten in de stad.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
