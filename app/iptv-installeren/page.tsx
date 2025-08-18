import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Handleiding",
  "IPTV op Smart TV",
  "IPTV op Android",
  "IPTV op Apple TV",
  "Hulp bij IPTV installatie"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvInstallerenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Installeren: Een Stap-voor-Stap Handleiding"
      relatedLinks={relatedLinks}
    >
      <p>
        Heeft u een IPTV abonnement gekocht en wilt u het installeren? Geen zorgen, het proces is eenvoudiger dan u denkt. Met onze handleiding helpen we u stap voor stap om uw IPTV op elk gewenst apparaat te installeren.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">De Basis van IPTV Installatie</h2>
      <p>
        Na uw aankoop ontvangt u van ons een M3U-link en vaak ook een EPG-link. Dit zijn de sleutels tot uw zenderpakket. Het enige wat u nodig heeft, is een IPTV-app op uw apparaat waarin u deze links kunt invoeren.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Installatie per Apparaat</h2>
      <p>
        Elk apparaat heeft zijn eigen specifieke installatiemethode en aanbevolen apps. Voor gedetailleerde instructies per apparaat, kunt u terecht op onze specifieke handleidingen:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-4">
        <li><a href="/iptv-op-smart-tv" className="text-primary hover:underline">IPTV installeren op een Smart TV</a></li>
        <li><a href="/iptv-op-android" className="text-primary hover:underline">IPTV installeren op Android (telefoon, tablet, TV box)</a></li>
        <li><a href="/iptv-op-apple-tv" className="text-primary hover:underline">IPTV installeren op Apple TV</a></li>
        <li><a href="/iptv-op-pc" className="text-primary hover:underline">IPTV installeren op een PC of Laptop</a></li>
        <li><a href="/iptv-op-firestick" className="text-primary hover:underline">IPTV installeren op een Amazon Firestick</a></li>
      </ul>
      <p className="mt-6">
        Komt u er niet uit? Onze klantenservice staat altijd voor u klaar om u te helpen met de installatie.
      </p>
    </AdvancedSeoPageLayout>
  );
}
