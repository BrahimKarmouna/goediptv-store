import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Tablet",
  "IPTV op Laptop",
  "IPTV op Android",
  "IPTV via GSE App",
  "IPTV voor op vakantie"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnSmartphonePage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Smartphone: Uw TV Altijd in uw Broekzak"
      relatedLinks={relatedLinks}
    >
      <p>
        Met IPTV op uw smartphone heeft u de ultieme vrijheid. Of u nu in de trein zit, in de wachtkamer, of op vakantie bent, u hoeft nooit meer uw favoriete programma of sportwedstrijd te missen. Uw volledige zenderpakket, direct beschikbaar in uw handpalm.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Populaire Apps voor iOS en Android</h2>
      <p>
        Er zijn talloze uitstekende apps voor zowel iPhone als Android-telefoons. 'GSE Smart IPTV' is een populaire keuze vanwege zijn brede compatibiliteit en functies. 'IPTV Smarters Pro' is een andere favoriet, bekend om zijn gebruiksvriendelijke interface. Beide zijn gratis te downloaden in de App Store of Google Play Store.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Voordelen van Mobiel TV Kijken</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>De ultieme draagbaarheid: kijk letterlijk overal waar u een internetverbinding heeft.</li>
        <li>Eenvoudige installatie via apps uit de officiële app stores.</li>
        <li>Werkt perfect op zowel Wi-Fi als mobiele data (4G/5G).</li>
        <li>Mis nooit meer een live evenement, waar u ook bent.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
