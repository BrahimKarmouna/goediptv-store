import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV voor Eredivisie",
  "IPTV met Ziggo Sport",
  "IPTV met Viaplay",
  "Beste IPTV voor sport",
  "IPTV Zenderlijst"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetEspnPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met ESPN: Alle Eredivisie en Meer Live"
      relatedLinks={relatedLinks}
    >
      <p>
        Volg al het Nederlandse topvoetbal en de beste Amerikaanse sporten met ESPN via IPTV. Met ons abonnement krijgt u toegang tot het volledige ESPN Compleet-pakket, zodat u nooit meer een belangrijke wedstrijd hoeft te missen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Volledige ESPN-aanbod</h2>
      <p>
        Krijg toegang tot alle ESPN-kanalen, inclusief de kanalen die normaal gesproken extra kosten. Kijk live naar alle Eredivisie-wedstrijden, de Keuken Kampioen Divisie, de KNVB Beker en een breed scala aan internationale sporten zoals de NFL, NBA en MLB. Alles in één pakket, zonder extra kosten.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van ESPN via IPTV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>ESPN Compleet:</strong> Alle kanalen, inclusief de extra's, zijn standaard inbegrepen.</li>
        <li><strong>Geen Kabelabonnement Nodig:</strong> Krijg toegang tot ESPN zonder vast te zitten aan een traditionele provider.</li>
        <li><strong>Haarscherpe Kwaliteit:</strong> Volg elke pass en elk doelpunt in kristalheldere HD-kwaliteit.</li>
        <li><strong>Kijk op Elk Apparaat:</strong> Geniet van de wedstrijden op uw TV, computer, tablet of smartphone.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
