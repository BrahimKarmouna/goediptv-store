import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV Abonnement",
  "IPTV Kopen",
  "IPTV op Smart TV",
  "IPTV op Smartphone",
  "Beste IPTV Aanbieder"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOpMeerdereApparatenPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Meerdere Apparaten: Hoe Werkt Het?"
      relatedLinks={relatedLinks}
    >
      <p>
        Een veelgestelde vraag is of u één IPTV-abonnement op meerdere apparaten tegelijk kunt gebruiken. Dit is een belangrijk punt om te overwegen bij het kiezen van een provider. We leggen hier uit wat de standaardregels zijn en welke opties er bestaan.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Eén Verbinding per Abonnement</h2>
      <p>
        Standaard staat een IPTV-abonnement het gebruik op <strong>één apparaat tegelijk</strong> toe. Dit is om de stabiliteit van het netwerk voor alle gebruikers te garanderen. Als u probeert met hetzelfde abonnement op een tweede apparaat in te loggen terwijl het eerste nog actief is, zal de verbinding op het eerste apparaat meestal verbroken worden.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Installatie op Meerdere Apparaten</h2>
      <p>
        U kunt uw abonnement wel op meerdere apparaten <strong>installeren</strong>. U kunt bijvoorbeeld de IPTV-app op zowel uw Smart TV in de woonkamer als op uw tablet voor onderweg installeren. Zolang u ze niet tegelijkertijd gebruikt, is dit geen enkel probleem. U logt simpelweg uit op het ene apparaat voordat u op het andere kijkt.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Opties voor Meerdere Verbindingen</h2>
      <p>
        Heeft u toch de wens om op meerdere schermen tegelijk te kijken in hetzelfde huishouden? Neem dan contact met ons op. Voor een kleine meerprijs bieden we vaak de mogelijkheid om een extra, gelijktijdige verbinding aan uw abonnement toe te voegen.
      </p>
    </AdvancedSeoPageLayout>
  );
}
