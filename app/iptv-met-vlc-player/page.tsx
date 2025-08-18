import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op PC",
  "IPTV op Laptop",
  "IPTV via Kodi",
  "Wat is een M3U link",
  "IPTV Installeren"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvWithVlcPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met VLC Player: De Eenvoudigste Manier om te Kijken"
      relatedLinks={relatedLinks}
    >
      <p>
        VLC Media Player is een van de meest bekende en vertrouwde mediaspelers ter wereld. Het is gratis, open-source, en kan vrijwel elk bestandsformaat afspelen, inclusief IPTV-streams. Voor veel gebruikers is dit de snelste en makkelijkste manier om te beginnen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe gebruikt u VLC voor IPTV?</h2>
      <p>
        Het proces is ongelooflijk eenvoudig. Open VLC, ga naar 'Media' -{">"} 'Netwerkstream openen' en plak de M3U-afspeellijst-URL die u van ons heeft ontvangen. VLC laadt vervolgens alle zenders in een afspeellijst, waar u eenvoudig doorheen kunt navigeren.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van het Gebruik van VLC</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Absoluut gratis en vrij van advertenties of spyware.</li>
        <li>Extreem stabiel en betrouwbaar.</li>
        <li>Lichtgewicht en verbruikt weinig systeembronnen.</li>
        <li>Beschikbaar voor Windows, macOS en Linux.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
