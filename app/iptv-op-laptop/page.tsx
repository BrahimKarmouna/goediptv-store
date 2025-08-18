import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op PC",
  "IPTV op Smartphone",
  "IPTV op Tablet",
  "IPTV met VLC Player",
  "IPTV voor op vakantie"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnLaptopPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Laptop: Kijk Overal TV, Thuis en Onderweg"
      relatedLinks={relatedLinks}
    >
      <p>
        Een laptop biedt de perfecte balans tussen schermgrootte en draagbaarheid, waardoor het een ideaal apparaat is voor IPTV. Of u nu op de bank zit, in de tuin, of op vakantie bent, met een laptop heeft u altijd toegang tot uw favoriete zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Software voor IPTV op uw Laptop</h2>
      <p>
        Net als op een desktop PC is VLC Media Player de beste keuze voor het kijken van IPTV op een laptop. Het is lichtgewicht, wat de batterijduur van uw laptop ten goede komt, en zeer eenvoudig in gebruik. Open de M3U-link die u van ons krijgt en u kunt direct beginnen met kijken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Vrijheid van TV Kijken op een Laptop</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Kijk overal in en rondom het huis met een stabiele Wi-Fi verbinding.</li>
        <li>Neem uw TV-abonnement mee op reis of op vakantie.</li>
        <li>Geniet van een groter scherm dan een smartphone, met het comfort van een draagbaar apparaat.</li>
        <li>Eenvoudig aan te sluiten op een grotere TV of monitor via HDMI.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
