import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV voor Formule 1",
  "IPTV met Belgische Zenders",
  "IPTV met Turkse Zenders",
  "IPTV met Films",
  "IPTV Kopen"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvZenderlijstPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Zenderlijst: Ontdek Ons Enorme Aanbod"
      relatedLinks={relatedLinks}
    >
      <p>
        Benieuwd welke zenders u kunt ontvangen met ons IPTV-abonnement? Onze IPTV zenderlijst is een van de meest uitgebreide op de markt. We bieden duizenden zenders van over de hele wereld, overzichtelijk gesorteerd per land en categorie.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Wat Kunt u Verwachten van Onze Zenderlijst?</h2>
      <p>
        Onze zenderlijst wordt continu bijgewerkt om u het beste en meest actuele aanbod te garanderen. Van sport en nieuws tot films, series en kinderprogramma's, er is voor ieder wat wils.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Een Greep uit Ons Aanbod</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Nederland:</strong> Alle bekende Nederlandse publieke en commerciële zenders in HD-kwaliteit.</li>
        <li><strong>Sport:</strong> Alle grote sportkanalen zoals Ziggo Sport, ESPN, Viaplay en internationale sportzenders.</li>
        <li><strong>Internationaal:</strong> Uitgebreide pakketten uit o.a. België, Duitsland, Engeland, Turkije, Marokko, Spanje, Italië en nog veel meer.</li>
        <li><strong>Films & Series:</strong> Premium filmkanalen en een enorme bibliotheek met Video on Demand (VOD).</li>
      </ul>
      <p className="mt-6">
        Voor een actueel en volledig overzicht kunt u altijd contact opnemen met onze klantenservice. We sturen u graag de meest recente lijst toe.
      </p>
    </AdvancedSeoPageLayout>
  );
}
