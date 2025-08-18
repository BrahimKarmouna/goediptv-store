import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Amsterdam",
  "IPTV in Den Haag",
  "IPTV in Utrecht",
  "IPTV in Eindhoven",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInRotterdamPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Rotterdam: Stabiel en Snel, Zelfs in de Havenstad"
      relatedLinks={relatedLinks}
    >
      <p>
        Op zoek naar de beste IPTV-ervaring in Rotterdam? Wij leveren een robuuste en snelle service die perfect is afgestemd op de dynamiek van de havenstad. Geniet van duizenden zenders, inclusief alle Feyenoord-wedstrijden, in kristalheldere kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Onze Service in Rotterdam</h2>
      <p>
        Wij begrijpen dat Rotterdammers een no-nonsense mentaliteit hebben. Daarom bieden we een dienst die gewoon werkt. Geen ingewikkelde installaties, geen haperingen tijdens belangrijke momenten. Onze krachtige infrastructuur zorgt voor een vlekkeloze kijkervaring, van het centrum tot aan de rand van de stad.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Rotterdammers voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Uitmuntende streamingstabiliteit, essentieel voor live sport.</li>
        <li>Inclusief alle lokale zenders zoals RTV Rijnmond.</li>
        <li>Snelle digitale levering en installatiehulp in de regio Rotterdam.</li>
        <li>Eerlijke prijzen zonder verborgen kosten.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
