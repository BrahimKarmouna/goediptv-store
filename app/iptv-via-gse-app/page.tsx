import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Smartphone",
  "IPTV op Tablet",
  "IPTV op Apple TV",
  "IPTV op Android",
  "IPTV Abonnement"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvViaGsePage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV via GSE App: Een Veelzijdige Speler voor Elk Apparaat"
      relatedLinks={relatedLinks}
    >
      <p>
        GSE Smart IPTV is een van de meest veelzijdige en platformonafhankelijke IPTV-apps die er zijn. Het is beschikbaar voor Android, iOS, tvOS (Apple TV) en zelfs macOS, waardoor het een alles-in-één oplossing is voor veel gebruikers.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Belangrijkste Kenmerken van GSE Smart IPTV</h2>
      <p>
        GSE ondersteunt meerdere afspeellijsten, EPG-formaten en biedt een ingebouwde speler die de meeste streamingformaten aankan. Het toevoegen van een afspeellijst is eenvoudig via een M3U-link of Xtream Codes, en de interface is duidelijk en functioneel.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Kiezen voor GSE Smart IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Beschikbaar op een breed scala aan apparaten en besturingssystemen.</li>
        <li>Ondersteuning voor Chromecast voor eenvoudig streamen naar uw TV.</li>
        <li>Ouderlijk toezicht en andere geavanceerde functies.</li>
        <li>Een betrouwbare en doorontwikkelde app met een grote gebruikersbasis.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
