import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV voor Formule 1",
  "IPTV met ESPN",
  "Beste IPTV voor sport",
  "Stabiele IPTV",
  "IPTV Zenderlijst"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetViaplayPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Viaplay: Formule 1, Premier League en Meer"
      relatedLinks={relatedLinks}
    >
      <p>
        Krijg toegang tot al het exclusieve entertainment en de live sport van Viaplay met ons IPTV-abonnement. Kijk naar Formule 1, de Engelse Premier League, de Duitse Bundesliga, darts en de nieuwste Viaplay Originals, allemaal via één dienst.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Beste van Viaplay, Zonder Extra App</h2>
      <p>
        Met IPTV heeft u geen apart Viaplay-abonnement of een losse app meer nodig. De Viaplay-kanalen zijn volledig geïntegreerd in onze zenderlijst, zodat u naadloos kunt schakelen tussen al uw favoriete sporten en entertainment.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van Viaplay via IPTV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Alles-in-één:</strong> Formule 1, voetbal, darts en meer in één pakket.</li>
        <li><strong>Geen Gedoe:</strong> Geen aparte apps of abonnementen nodig.</li>
        <li><strong>Hoge Kwaliteit:</strong> Geniet van alle actie in stabiele, haarscherpe HD-kwaliteit.</li>
        <li><strong>Direct Toegankelijk:</strong> De Viaplay-zenders staan gewoon in uw zenderlijst.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
