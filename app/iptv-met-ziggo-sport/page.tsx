import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met ESPN",
  "IPTV met Viaplay",
  "IPTV voor Formule 1",
  "Beste IPTV voor sport",
  "IPTV Zenderlijst"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetZiggoSportPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Ziggo Sport: Topvoetbal en Meer"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u genieten van al het topsportaanbod van Ziggo Sport Totaal? Met ons IPTV-abonnement krijgt u toegang tot alle Ziggo Sport-kanalen, zodat u niets hoeft te missen van de Champions League, La Liga, Serie A en nog veel meer.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Complete Ziggo Sport Totaal Pakket</h2>
      <p>
        Ons pakket omvat alle kanalen van Ziggo Sport Totaal, inclusief Ziggo Sport Select, Voetbal, Golf, Racing en Docu. U krijgt het meest complete sportaanbod van Nederland, live en in de hoogste kwaliteit, zonder dat u een Ziggo-internetabonnement nodig heeft.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Ziggo Sport Kijken via IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Compleet Aanbod:</strong> Alle zes de kanalen van Ziggo Sport Totaal.</li>
        <li><strong>Geen Extra Abonnement Nodig:</strong> Toegang tot alle sport zonder bij Ziggo aangesloten te zijn.</li>
        <li><strong>Stabiele HD-Streams:</strong> Bekijk alle actie in haarscherpe kwaliteit zonder onderbrekingen.</li>
        <li><strong>Flexibel Kijken:</strong> Volg de sport op elk apparaat, waar u ook bent.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
