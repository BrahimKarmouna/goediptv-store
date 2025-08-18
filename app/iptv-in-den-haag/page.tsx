import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Amsterdam",
  "IPTV in Rotterdam",
  "IPTV in Utrecht",
  "IPTV Voor Buitenland",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInDenHaagPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Den Haag: Internationaal en Betrouwbaar"
      relatedLinks={relatedLinks}
    >
      <p>
        Voor de internationale en veeleisende kijker in Den Haag bieden wij een IPTV-service van topkwaliteit. Ons aanbod omvat niet alleen alle Nederlandse zenders, maar ook een enorm pakket aan internationale en expat-zenders, perfect voor de Hofstad.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Service voor de Internationale Stad</h2>
      <p>
        Den Haag is een stad met een diverse, internationale bevolking. Onze zenderlijst reflecteert dit, met uitgebreide pakketten uit heel Europa, Azië, en Amerika. Of u nu op zoek bent naar nieuws, sport of entertainment uit uw thuisland, wij hebben het. En dat alles met een stabiele verbinding, zodat u niets hoeft te missen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Inwoners van Den Haag voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Zeer uitgebreid internationaal zenderpakket.</li>
        <li>Stabiele, hoge-kwaliteit streams zonder onderbrekingen.</li>
        <li>Inclusief lokale zenders zoals Omroep West.</li>
        <li>Discrete en snelle digitale levering.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
