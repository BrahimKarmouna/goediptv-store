import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Installeren",
  "IPTV Storing Oplossen",
  "Hulp bij IPTV installatie",
  "IPTV op Smart TV",
  "Hoe werkt IPTV"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvHandleidingPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Handleiding: Alle Gidsen en Instructies op één Plek"
      relatedLinks={relatedLinks}
    >
      <p>
        Welkom bij ons centrale overzicht van alle IPTV handleidingen. Of u nu hulp nodig heeft bij de installatie, een storing wilt oplossen of gewoon meer wilt weten over de mogelijkheden van IPTV, hier vindt u de juiste gids.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Onze Handleidingen</h2>
      <p>
        We hebben onze handleidingen onderverdeeld in verschillende categorieën om u zo snel mogelijk op weg te helpen. Klik op de link die het beste past bij uw vraag.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Populaire Handleidingen</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/iptv-installeren" className="text-primary hover:underline">Algemene Installatie Handleiding</a></li>
        <li><a href="/iptv-op-smart-tv" className="text-primary hover:underline">Handleiding voor Smart TV</a></li>
        <li><a href="/iptv-op-android" className="text-primary hover:underline">Handleiding voor Android Apparaten</a></li>
        <li><a href="/iptv-op-apple-tv" className="text-primary hover:underline">Handleiding voor Apple TV</a></li>
        <li><a href="/iptv-storing-oplossen" className="text-primary hover:underline">Handleiding voor het Oplossen van Storingen</a></li>
      </ul>
      <p className="mt-6">
        Staat uw vraag er niet tussen of heeft u liever persoonlijke begeleiding? Bekijk dan onze pagina voor <a href="/hulp-bij-iptv-installatie" className="text-primary hover:underline">hulp bij installatie</a> of neem contact op met onze klantenservice.
      </p>
    </AdvancedSeoPageLayout>
  );
}
