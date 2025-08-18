import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met Viaplay",
  "IPTV met Ziggo Sport",
  "IPTV voor Eredivisie",
  "Beste IPTV voor sport",
  "Stabiele IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvVoorFormule1Page() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV voor Formule 1: Mis Geen Enkele Race"
      relatedLinks={relatedLinks}
    >
      <p>
        Bent u een Formule 1-fan en wilt u geen enkele race, kwalificatie of vrije training missen? Met ons IPTV-pakket kijkt u alle Formule 1-actie live. Naast F1 bieden we natuurlijk nog veel meer. Ontdek waarom wij de <a href="/beste-iptv-voor-sport" className="text-primary hover:underline">beste IPTV voor sport</a> zijn. Geniet van Max Verstappen en alle andere coureurs in de hoogste kwaliteit.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Alle F1 Zenders in één Pakket</h2>
      <p>
        Vergeet het switchen tussen verschillende apps en abonnementen. Wij bieden alle belangrijke Formule 1-zenders, zoals Viaplay, F1 TV Pro, Ziggo Sport, en internationale kanalen zoals Sky Sports F1, in één overzichtelijk pakket. U kiest zelf met welk commentaar u de race wilt volgen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Formule 1 Kijken via IPTV?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Stabiele Streams:</strong> Onze servers zijn gebouwd voor live sport, dus u kijkt zonder haperingen.</li>
        <li><strong>Hoge Beeldkwaliteit:</strong> Ervaar de snelheid en spanning in haarscherpe HD- en 4K-kwaliteit.</li>
        <li><strong>Internationaal Commentaar:</strong> Kies uit Nederlands, Engels, Duits en meer.</li>
        <li><strong>Kijk Overal:</strong> Volg de race op uw TV, laptop, tablet of smartphone, zelfs op vakantie.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
