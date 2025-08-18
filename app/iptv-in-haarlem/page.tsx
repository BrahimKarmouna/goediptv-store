import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Amsterdam",
  "IPTV in Zaanstad",
  "IPTV in Utrecht",
  "IPTV met Films",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInHaarlemPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Haarlem: Kwaliteit en Stijl voor de Spaarnestad"
      relatedLinks={relatedLinks}
    >
      <p>
        In de prachtige, historische stad Haarlem hoort een IPTV-service van hetzelfde kaliber. Wij bieden een premium kijkervaring met een zeer stabiele verbinding en een zorgvuldig samengesteld pakket van nationale en internationale zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Dienst voor de Veeleisende Kijker</h2>
      <p>
        Haarlemmers staan bekend om hun goede smaak. Onze dienst sluit hierbij aan met een focus op beeldkwaliteit en een breed aanbod aan cultuur-, lifestyle-, en filmzenders. Uiteraard ontbreken ook de belangrijkste sportkanalen niet, allemaal in kristalheldere HD- en 4K-kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Haarlemmers voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Premium beeld- en geluidskwaliteit.</li>
        <li>Uitgebreid aanbod van film-, serie- en cultuurzenders.</li>
        <li>Inclusief de lokale zender Haarlem105.</li>
        <li>Uiterst betrouwbare service met persoonlijke ondersteuning.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
