import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV in Rotterdam",
  "IPTV in Den Haag",
  "IPTV in Utrecht",
  "IPTV in Eindhoven",
  "Betrouwbare IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInAmsterdamPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV in Amsterdam: De Beste Lokale Keuze"
      relatedLinks={relatedLinks}
    >
      <p>
        Bent u in Amsterdam en op zoek naar een betrouwbare IPTV-provider? Wij bieden een stabiele service met een enorm zenderaanbod, perfect voor de Amsterdamse markt. Geniet van alle lokale, nationale en internationale zenders zonder haperingen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom Kiezen Klanten in Amsterdam voor Ons?</h2>
      <p>
        Onze servers zijn geoptimaliseerd voor hoge snelheden, wat essentieel is in een drukke stad als Amsterdam. We garanderen 99.9% uptime, zelfs tijdens de belangrijkste live sportevenementen zoals wedstrijden van Ajax. Onze klantenservice is bovendien bekend met de lokale behoeften en kan u snel en efficiënt helpen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Directe Levering in Amsterdam</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Snelle en digitale levering van uw abonnement, vaak binnen enkele minuten.</li>
        <li>Perfecte streamingkwaliteit, zelfs in dichtbevolkte gebieden.</li>
        <li>Uitgebreid zenderpakket inclusief alle Amsterdamse lokale omroepen.</li>
        <li>Deskundige hulp bij installatie op elk apparaat.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
