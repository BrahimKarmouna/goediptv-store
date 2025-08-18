import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Installeren",
  "IPTV Handleiding",
  "Hoe werkt IPTV",
  "IPTV op PC",
  "IPTV via Kodi"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function WatIsEenM3uLinkPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Wat is een M3U Link? De Sleutel tot IPTV"
      relatedLinks={relatedLinks}
    >
      <p>
        Als u zich verdiept in IPTV, komt u al snel de term 'M3U link' of 'M3U-afspeellijst' tegen. Maar wat is het precies? Een M3U-link is in feite de sleutel die u toegang geeft tot de IPTV-streams van uw provider.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Definitie van een M3U Link</h2>
      <p>
        Een M3U-bestand (.m3u) is een afspeellijst-formaat. In de context van IPTV bevat deze afspeellijst de links naar alle tv-zenders, films en series die uw provider aanbiedt. Wanneer u een IPTV-abonnement koopt, ontvangt u van ons een unieke M3U-link.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe Gebruikt u een M3U Link?</h2>
      <p>
        U gebruikt deze link om uw IPTV-app (zoals IPTV Smarters, TiviMate, of VLC Player) te configureren. U voert de M3U-link in de app in, en de app laadt vervolgens automatisch de volledige zenderlijst en de Video on Demand-bibliotheek. Het is de meest universele methode om IPTV op vrijwel elk apparaat te installeren.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">M3U Link vs. Gebruikersnaam/Wachtwoord</h2>
      <p>
        Sommige apps en apparaten (zoals de Formuler-boxen) werken met een gebruikersnaam, wachtwoord en een server-URL in plaats van een M3U-link. Dit wordt ook wel een 'Xtream Codes' login genoemd. In de basis doen ze hetzelfde: ze geven de app toegang tot de content. Wij leveren beide formats aan, zodat u altijd de juiste methode voor uw apparaat kunt gebruiken.
      </p>
    </AdvancedSeoPageLayout>
  );
}
