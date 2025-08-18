import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Abonnement",
  "Beste IPTV Aanbieder",
  "Goedkope IPTV",
  "IPTV Vergelijken",
  "IPTV Proefperiode"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvKopenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV Kopen: Direct Toegang tot Duizenden Zenders"
      relatedLinks={relatedLinks}
    >
      <p>
        Wilt u IPTV kopen? Dan bent u bij ons aan het juiste adres. Wij bieden een eenvoudige en snelle manier om toegang te krijgen tot een wereld van entertainment. Met onze betrouwbare service en uitgebreide zenderpakketten bent u verzekerd van de beste kijkervaring.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom bij Ons IPTV Kopen?</h2>
      <p>
        Het kopen van IPTV kan soms onoverzichtelijk zijn. Wij maken het simpel. U kiest een pakket dat bij u past, rekent veilig af, en ontvangt uw toegangsgegevens vaak al binnen enkele minuten. Geen gedoe, geen lange wachttijden, gewoon direct kijken.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Onze Beloftes bij uw Aankoop</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Directe Levering:</strong> Na betaling ontvangt u direct uw gegevens per e-mail.</li>
        <li><strong>Veilig Betalen:</strong> Wij bieden veilige en vertrouwde betaalmethoden, zoals <a href="/iptv-betalen-met-ideal" className="text-primary hover:underline">iDEAL</a>.</li>
        <li><strong>Topkwaliteit:</strong> U koopt een stabiele dienst met 99.9% uptime en haarscherp beeld.</li>
        <li><strong>Uitstekende Support:</strong> Ons team staat klaar om u te helpen met de installatie en al uw vragen.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
