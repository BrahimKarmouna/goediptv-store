import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV met Series",
  "IPTV Zenderlijst",
  "Beste IPTV Aanbieder",
  "IPTV met Terugkijken",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvMetFilmsPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV met Films: Een Enorme Videotheek Thuis"
      relatedLinks={relatedLinks}
    >
      <p>
        Naast duizenden live tv-zenders, bieden onze IPTV-pakketten ook toegang tot een gigantische bibliotheek met films on demand (VOD). Van de nieuwste blockbusters tot tijdloze klassiekers, u heeft een complete videotheek tot uw beschikking.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Hoe Werkt Video on Demand?</h2>
      <p>
        Onze VOD-sectie is net als Netflix of Videoland, maar dan nog uitgebreider. U navigeert eenvoudig door categorieën zoals actie, komedie, drama of thriller, kiest een film en start deze direct. De bibliotheek wordt dagelijks bijgewerkt met de nieuwste titels.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Voordelen van Films via IPTV</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Gigantisch Aanbod:</strong> Duizenden films in alle genres, direct beschikbaar.</li>
        <li><strong>Geen Extra Kosten:</strong> De VOD-bibliotheek is inbegrepen in uw abonnement.</li>
        <li><strong>Hoge Kwaliteit:</strong> Veel films zijn beschikbaar in HD, Full HD en zelfs 4K.</li>
        <li><strong>Altijd Actueel:</strong> De nieuwste bioscoopfilms worden vaak snel toegevoegd.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
