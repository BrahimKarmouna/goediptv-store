import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Firestick",
  "IPTV op Smart TV",
  "IPTV op Smartphone",
  "IPTV op Android",
  "Goedkope IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnChromecastPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Chromecast: Stream Eenvoudig naar uw TV"
      relatedLinks={relatedLinks}
    >
      <p>
        Google Chromecast is een betaalbare en populaire oplossing om content van uw mobiele apparaat of computer naar uw televisie te streamen. Met de juiste app kunt u uw IPTV-abonnement moeiteloos naar het grote scherm 'casten'.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe werkt IPTV met Chromecast?</h2>
      <p>
        U gebruikt een IPTV-app op uw smartphone (Android of iPhone) die cast-functionaliteit ondersteunt, zoals 'GSE Smart IPTV'. U selecteert de zender die u wilt kijken op uw telefoon en tikt vervolgens op het Cast-icoon. De stream wordt dan direct afgespeeld op de TV die met uw Chromecast is verbonden.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van het Gebruik van Chromecast</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Een zeer betaalbare manier om IPTV op een groot scherm te kijken.</li>
        <li>Extreem eenvoudige installatie en bediening.</li>
        <li>Uw telefoon wordt de afstandsbediening, inclusief zenderlijst en EPG.</li>
        <li>Werkt naadloos samen met duizenden andere apps.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
