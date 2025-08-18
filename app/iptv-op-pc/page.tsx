import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Laptop",
  "IPTV met VLC Player",
  "IPTV via Kodi",
  "IPTV op Smartphone",
  "IPTV Abonnement"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnPcPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op PC: Kijk TV op uw Computer met VLC en Meer"
      relatedLinks={relatedLinks}
    >
      <p>
        Uw PC of computer is een krachtig en veelzijdig apparaat om IPTV op te kijken. Met de juiste software kunt u eenvoudig duizenden zenders streamen, opnemen en beheren, allemaal vanaf uw bureaublad.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Beste Manier: VLC Media Player</h2>
      <p>
        De meest populaire en betrouwbare manier om IPTV op een PC te kijken is via VLC Media Player. Deze gratis en open-source software is lichtgewicht, stabiel en kan vrijwel elk videoformaat aan. U hoeft alleen de M3U-link die u van ons ontvangt in VLC te openen om direct toegang te krijgen tot alle zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van IPTV Kijken op uw PC</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Geen extra hardware nodig; u gebruikt uw bestaande computer.</li>
        <li>Mogelijkheid om uitzendingen eenvoudig op te nemen op uw harde schijf.</li>
        <li>Flexibiliteit om te kijken terwijl u werkt of andere taken uitvoert.</li>
        <li>Ondersteuning voor meerdere schermen voor de ultieme multitasking-ervaring.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
