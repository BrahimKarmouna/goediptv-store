import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV voor zakelijk gebruik",
  "Beste IPTV voor sport",
  "IPTV op meerdere apparaten",
  "Stabiele IPTV",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvVoorHorecaPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV voor de Horeca: De Beste TV-Oplossing voor uw Zaak"
      relatedLinks={relatedLinks}
    >
      <p>
        Heeft u een café, restaurant, hotel of sportbar? Dan weet u hoe belangrijk het is om uw gasten te vermaken. Live sport en entertainment van hoge kwaliteit kunnen het verschil maken. IPTV biedt een flexibele en kosteneffectieve oplossing voor de horeca.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom IPTV voor uw Horecagelegenheid?</h2>
      <ul className="list-disc pl-6 space-y-4 mt-4">
        <li>
          <strong>Alle Sport in één Pakket:</strong> Toon alle belangrijke voetbalwedstrijden, Formule 1 en andere sportevenementen op meerdere schermen tegelijk, zonder dat u verschillende dure abonnementen nodig heeft.
        </li>
        <li>
          <strong>Stabiele Streams:</strong> Onze dienst is gebouwd om te presteren, zelfs met meerdere schermen die tegelijkertijd streamen. U kunt rekenen op een stabiel signaal zonder haperingen.
        </li>
        <li>
          <strong>Eenvoudig Beheer:</strong> Beheer de content op al uw schermen eenvoudig vanuit één centraal punt.
        </li>
        <li>
          <strong>Kosteneffectief:</strong> Een zakelijke IPTV-oplossing is vaak aanzienlijk goedkoper dan traditionele zakelijke tv-pakketten, terwijl het aanbod veel groter is.
        </li>
      </ul>
      <p className="mt-6">
        Neem contact met ons op voor een op maat gemaakte offerte voor uw horecazaak en ontdek hoe wij uw klantervaring kunnen verbeteren.
      </p>
    </AdvancedSeoPageLayout>
  );
}
