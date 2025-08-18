import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "Wat is IPTV",
  "IPTV Installeren",
  "IPTV Handleiding",
  "Is IPTV legaal",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function HoeWerktIptvPage() {
  return (
    <AdvancedSeoPageLayout 
      title="Hoe Werkt IPTV? Een Eenvoudige Uitleg"
      relatedLinks={relatedLinks}
    >
      <p>
        IPTV staat voor 'Internet Protocol Television'. Simpel gezegd betekent dit dat u televisie kijkt via uw internetverbinding, in plaats van via de traditionele kabel of schotel. Maar hoe werkt dat precies?
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Het Proces in Drie Stappen</h2>
      <p>
        Het proces van IPTV kan worden opgesplitst in drie eenvoudige stappen:
      </p>
      <ol className="list-decimal pl-6 space-y-4 mt-4">
        <li>
          <strong>De Bron:</strong> TV-zenders sturen hun signaal naar de IPTV-provider. Onze provider verzamelt deze signalen van over de hele wereld.
        </li>
        <li>
          <strong>De Servers:</strong> De provider digitaliseert deze signalen en stuurt ze via krachtige servers over het internet naar u toe. Dit is waar de 'Internet Protocol' vandaan komt.
        </li>
        <li>
          <strong>Uw Apparaat:</strong> U gebruikt een IPTV-app op een apparaat (zoals een Smart TV, een speciale IPTV-box, of uw telefoon) om dit signaal te ontvangen en om te zetten in het tv-beeld dat u op uw scherm ziet.
        </li>
      </ol>
      <p className="mt-6">
        Het enige wat u dus nodig heeft is een stabiele internetverbinding en een geschikt apparaat. De rest wordt geregeld via de servers van de IPTV-provider, wat zorgt voor een flexibele en uitgebreide kijkervaring.
      </p>
    </AdvancedSeoPageLayout>
  );
}
