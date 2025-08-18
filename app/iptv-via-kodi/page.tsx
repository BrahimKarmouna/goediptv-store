import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met VLC Player",
  "IPTV op PC",
  "IPTV op Firestick",
  "IPTV met Films",
  "IPTV met Series"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvViaKodiPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV via Kodi: Installeer de PVR IPTV Simple Client"
      relatedLinks={relatedLinks}
    >
      <p>
        Kodi is een extreem krachtig en veelzijdig open-source media center dat op vrijwel elk apparaat draait. Door een PVR (Personal Video Recorder) add-on te configureren, kunt u uw IPTV-abonnement naadloos integreren in uw Kodi-bibliotheek.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De PVR IPTV Simple Client configureren</h2>
      <p>
        De meest gebruikte methode is de 'PVR IPTV Simple Client' add-on, die standaard in Kodi beschikbaar is. U hoeft deze alleen maar in te schakelen en te configureren met de M3U-link en EPG-URL die u van ons ontvangt. Na een herstart verschijnt er een 'TV' tabblad in uw Kodi-menu met alle zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Kodi gebruiken voor IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Integreer live TV, films, series, muziek en foto's in één enkele interface.</li>
        <li>Zeer aanpasbaar met duizenden skins en add-ons.</li>
        <li>Werkt op een breed scala aan apparaten, van PC's tot Raspberry Pi's.</li>
        <li>Een alles-in-één oplossing voor al uw media.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
