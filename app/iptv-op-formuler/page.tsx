import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op MAG Box",
  "IPTV met Enigma2",
  "IPTV op Android",
  "Beste IPTV Aanbieder",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnFormulerPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Formuler: MyTVOnline en Meer"
      relatedLinks={relatedLinks}
    >
      <p>
        Formuler boxen, met hun exclusieve MyTVOnline app, bieden een van de meest geavanceerde en gebruiksvriendelijke IPTV-ervaringen op de markt. Benieuwd hoe ze zich verhouden tot andere apparaten? Bekijk dan onze gids over <a href="/wat-is-de-beste-iptv-box" className="text-primary hover:underline">de beste IPTV box</a>. Ze combineren de kracht van Android met een interface die speciaal is geoptimaliseerd voor live TV kijken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Kracht van MyTVOnline</h2>
      <p>
        De MyTVOnline app is het kroonjuweel van Formuler. Het biedt geavanceerde functies zoals opnemen, terugkijken en een moderne, snelle EPG. De installatie is eenvoudig: u logt in met de gegevens die u van ons ontvangt en alle zenders en functies worden automatisch ingesteld.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom een Formuler Box de Investering Waard is</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Exclusieve en zeer krachtige MyTVOnline app.</li>
        <li>Moderne en intuïtieve gebruikersinterface.</li>
        <li>Ondersteuning voor opnemen, pauzeren en terugkijken.</li>
        <li>Regelmatige software-updates voor nieuwe functies en stabiliteit.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
