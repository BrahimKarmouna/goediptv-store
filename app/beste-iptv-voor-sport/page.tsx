import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV voor Formule 1",
  "IPTV voor Eredivisie",
  "IPTV met Ziggo Sport",
  "IPTV met ESPN",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function BesteIptvVoorSportPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Beste IPTV voor Sport: Mis Nooit Meer een Wedstrijd"
      relatedLinks={relatedLinks}
    >
      <p>
        Voor de echte sportliefhebber is een betrouwbare en uitgebreide tv-dienst essentieel. De beste IPTV voor sport is een dienst die alle belangrijke kanalen aanbiedt, een stabiele stream garandeert tijdens live-evenementen en dit alles voor een eerlijke prijs. Precies wat wij leveren.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat Maakt Ons de Beste Keuze voor Sport?</h2>
      <ul className="list-disc pl-6 space-y-4 mt-4">
        <li>
          <strong>Alle Kanalen in één Pakket:</strong> Krijg toegang tot <a href="/iptv-met-viaplay" className="text-primary hover:underline">Viaplay</a> voor Formule 1, <a href="/iptv-met-espn" className="text-primary hover:underline">ESPN</a> voor de Eredivisie, en <a href="/iptv-met-ziggo-sport" className="text-primary hover:underline">Ziggo Sport Totaal</a> voor de Champions League en meer. Alles is inbegrepen.
        </li>
        <li>
          <strong>Uitmuntende Stabiliteit:</strong> Onze servers zijn gebouwd voor de piekbelasting van grote live sportwedstrijden. U kunt rekenen op een vloeiende, haperingvrije stream, zelfs tijdens de meest populaire evenementen.
        </li>
        <li>
          <strong>Superieure Beeldkwaliteit:</strong> Beleef elke goal en elke inhaalactie in haarscherpe HD- en 4K-kwaliteit. Voel de stadionsfeer in uw eigen woonkamer.
        </li>
        <li>
          <strong>Internationale Sportzenders:</strong> Naast het Nederlandse aanbod, krijgt u ook toegang tot een breed scala aan internationale sportkanalen zoals Sky Sports, BT Sport en nog veel meer.
        </li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
