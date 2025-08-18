import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "Beste IPTV Aanbieder",
  "IPTV Reviews",
  "Stabiele IPTV",
  "Goedkope IPTV",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvVergelijkenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Vergelijken: Waar Moet U op Letten?"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u IPTV providers vergelijken? Een slimme keuze. De kwaliteit en betrouwbaarheid kunnen enorm verschillen. Wij helpen u op weg met een overzicht van de belangrijkste punten om op te letten bij uw vergelijking.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Belangrijkste Vergelijkingspunten</h2>
      <p>
        Laat u niet alleen leiden door prijs of het aantal zenders. De ware kwaliteit van een IPTV-dienst zit in de details. Hier zijn de cruciale factoren:
      </p>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <strong>Serverstabiliteit (Uptime):</strong> Vraag naar de uptime garantie. Een dienst die vaak hapert of offline is, is waardeloos. De beste aanbieders garanderen 99.9% uptime.
        </li>
        <li>
          <strong>Klantenservice:</strong> Kunt u de aanbieder makkelijk bereiken? Krijgt u een deskundig antwoord? Goede support is essentieel als u hulp nodig heeft.
        </li>
        <li>
          <strong>Kwaliteit van de Streams:</strong> Worden zenders in hoge resolutie (HD/4K) aangeboden? Is er een EPG (Elektronische Programmagids)?
        </li>
        <li>
          <strong>Reviews en Ervaringen:</strong> Wat zeggen andere klanten? Zoek naar onafhankelijke reviews om een eerlijk beeld te krijgen.
        </li>
      </ul>
      <p className="mt-6">
        Wanneer u deze punten meeneemt in uw vergelijking, zult u zien dat onze dienst op alle fronten uitstekend scoort. Wij nodigen u uit om zelf de proef op de som te nemen.
      </p>
    </AdvancedSeoPageLayout>
  );
}
