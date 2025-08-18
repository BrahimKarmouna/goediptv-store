import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Utrecht",
  "IPTV in Enschede",
  "IPTV in Amsterdam",
  "Goedkope IPTV",
  "IPTV Abonnement"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInGroningenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Groningen: Betaalbaar en Betrouwbaar in het Noorden"
      relatedLinks={relatedLinks}
    >
      <p>
        Ook in het hoge noorden, in de bruisende stad Groningen, leveren wij een topkwaliteit IPTV-service. Onze dienst is perfect voor de vele studenten en inwoners, met betaalbare prijzen en een stabiele verbinding voor ongestoord kijkplezier.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Beste Keuze voor Studenten en Stadjers</h2>
      <p>
        We weten dat een snelle en betrouwbare internetverbinding in Groningen essentieel is. Onze IPTV-dienst is geoptimaliseerd om perfect te werken, of je nu in een studentenhuis in het centrum woont of daarbuiten. Mis geen enkele wedstrijd van FC Groningen en geniet van duizenden andere zenders.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Groningers voor Ons Kiezen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Zeer scherpe prijzen, ideaal voor een studentenbudget.</li>
        <li>Stabiele servers die ook in het noorden van het land perfect presteren.</li>
        <li>Inclusief lokale zenders zoals OOG TV.</li>
        <li>Snelle, digitale levering en eenvoudige installatie.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
