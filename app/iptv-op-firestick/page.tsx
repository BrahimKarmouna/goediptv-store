import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Chromecast",
  "IPTV op Android",
  "IPTV op Smart TV",
  "IPTV Abonnement",
  "Goedkope IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnFirestickPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Firestick: Installatiegids voor Amazon's TV-stick"
      relatedLinks={relatedLinks}
    >
      <p>
        De Amazon Firestick is een krachtige en betaalbare streaming-stick die elke TV met een HDMI-poort omtovert tot een Smart TV. Het is een uitstekend apparaat voor IPTV vanwege zijn Android-basis en de mogelijkheid om apps van buiten de Amazon Appstore te installeren.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe installeert u IPTV op een Firestick?</h2>
      <p>
        Omdat veel IPTV-apps niet in de Amazon Appstore staan, gebruiken we de 'Downloader' app. Hiermee kunt u direct de installatiebestanden (APK) van apps zoals 'TiviMate' of 'IPTV Smarters Pro' downloaden en installeren. Het proces is eenvoudig en we voorzien u van een stapsgewijze handleiding.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom de Firestick een topkeuze is</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Betaalbaar en zeer krachtig voor zijn formaat.</li>
        <li>Draait op een versie van Android, wat zorgt voor brede app-compatibiliteit.</li>
        <li>Wordt geleverd met een handige Alexa-spraakafstandsbediening.</li>
        <li>Makkelijk om apps te 'sideloaden' voor maximale flexibiliteit.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
