import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met Films",
  "IPTV Zenderlijst",
  "Beste IPTV Aanbieder",
  "IPTV met Terugkijken",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetSeriesPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Series: Binge-Watch Duizenden TV Shows"
      relatedLinks={relatedLinks}
    >
      <p>
        Bent u een liefhebber van series? Met de Video on Demand (VOD) functie van ons IPTV-pakket heeft u toegang tot een enorme bibliotheek met duizenden series van over de hele wereld. Van populaire HBO-series tot de nieuwste Netflix-hits, u vindt het allemaal.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Alle Seizoenen, Alle Afleveringen</h2>
      <p>
        Onze VOD-bibliotheek bevat complete seizoenen van uw favoriete series. U hoeft niet meer te wachten op de wekelijkse uitzending. Kies een serie, selecteer het seizoen en de aflevering, en begin direct met kijken. Ideaal voor een avondje binge-watchen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van Series via IPTV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Uitgebreide Bibliotheek:</strong> Duizenden series, inclusief de meest recente en populaire shows.</li>
        <li><strong>Complete Seizoenen:</strong> Geen losse afleveringen, maar volledige seizoenen om te bingen.</li>
        <li><strong>Inbegrepen in uw Pakket:</strong> Toegang tot de volledige serie-bibliotheek zonder extra kosten.</li>
        <li><strong>Hoge Kwaliteit:</strong> Stream uw favoriete series in haarscherpe HD- en 4K-kwaliteit.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
