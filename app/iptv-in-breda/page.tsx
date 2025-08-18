import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Tilburg",
  "IPTV in Eindhoven",
  "IPTV in Rotterdam",
  "IPTV met Belgische Zenders",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInBredaPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Breda: De Beste Keuze voor de Parel van het Zuiden"
      relatedLinks={relatedLinks}
    >
      <p>
        Voor de inwoners van het sfeervolle Breda bieden wij een IPTV-service die de stad eer aandoet. Geniet van een stabiele, haarscherpe verbinding en een enorm zenderpakket, inclusief alle wedstrijden van NAC Breda en een breed scala aan internationale kanalen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Premium Dienst voor Breda</h2>
      <p>
        Onze service is perfect voor de Bredase levensgenieter. We bieden niet alleen een uitgebreid sportpakket, maar ook talloze film-, serie- en lifestylezenders. Dankzij de nabijheid van België hebben we ook een uitstekend aanbod aan Vlaamse zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Bredanaars voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Uitstekende beeldkwaliteit, perfect voor sport en films.</li>
        <li>Groot aanbod van Nederlandse en Belgische zenders.</li>
        <li>Inclusief de lokale zender BredaNu.</li>
        <li>Betrouwbare service met een 99.9% uptime garantie.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
