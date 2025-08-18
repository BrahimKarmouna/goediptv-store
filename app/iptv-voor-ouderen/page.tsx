import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "Hulp bij IPTV installatie",
  "IPTV Handleiding",
  "Voordelen van IPTV",
  "Beste IPTV Aanbieder",
  "IPTV Zonder Schotel"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvVoorOuderenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV voor Ouderen: Eenvoudig en Toegankelijk TV Kijken"
      relatedLinks={relatedLinks}
    >
      <p>
        Is IPTV ook geschikt voor ouderen? Absoluut! Moderne IPTV-oplossingen zijn juist ontworpen met gebruiksgemak in gedachten. Het biedt een eenvoudige en comfortabele manier om van een enorm aanbod aan zenders te genieten, zonder technisch gedoe.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom is IPTV Ideaal voor Senioren?</h2>
      <ul className="list-disc pl-6 space-y-4 mt-4">
        <li>
          <strong>Eenvoudige Bediening:</strong> Met een gebruiksvriendelijke afstandsbediening en een overzichtelijke tv-gids (EPG) is het net zo makkelijk als traditionele tv.
        </li>
        <li>
          <strong>Geen Ingewikkelde Installatie:</strong> Geen gedoe met schotels of extra kabels door het hele huis. Een klein kastje en een internetverbinding is alles wat nodig is.
        </li>
        <li>
          <strong>Groot Aanbod van Vertrouwde Zenders:</strong> Alle bekende Nederlandse, regionale en hobbyzenders zijn aanwezig, vaak in betere kwaliteit dan via de kabel.
        </li>
        <li>
          <strong>Hulp en Ondersteuning:</strong> Wij helpen u graag op weg. Mocht de installatie niet lukken, dan staat onze klantenservice klaar om u stap voor stap te begeleiden.
        </li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
