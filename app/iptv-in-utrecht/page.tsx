import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Amsterdam",
  "IPTV in Rotterdam",
  "IPTV in Den Haag",
  "IPTV in Eindhoven",
  "Goedkope IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInUtrechtPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Utrecht: Centraal, Snel en Stabiel"
      relatedLinks={relatedLinks}
    >
      <p>
        In het hart van Nederland, Utrecht, leveren wij een IPTV-service die net zo dynamisch is als de stad zelf. Of u nu student bent of een gezin heeft, onze dienst biedt een betaalbare en betrouwbare oplossing voor al uw kijkwensen, van live sport tot de nieuwste series.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Perfect voor de Domstad</h2>
      <p>
        Onze infrastructuur is ontworpen om topprestaties te leveren in de dichtbevolkte en centraal gelegen stad Utrecht. We bieden een vlekkeloze streamingervaring, of u nu in het centrum woont of in een van de buitenwijken. Geniet van FC Utrecht en alle andere Eredivisie-wedstrijden zonder ook maar één seconde te missen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Kiezen voor IPTV in Utrecht?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Betaalbare pakketten, ideaal voor studenten en gezinnen.</li>
        <li>Supersnelle en stabiele verbinding, zelfs tijdens piekuren.</li>
        <li>Inclusief alle lokale zenders zoals RTV Utrecht.</li>
        <li>Snelle en vriendelijke klantenservice.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
