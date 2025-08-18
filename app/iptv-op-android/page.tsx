import { AdvancedSeoPageLayout } from "@/components/advanced-seo-page-layout";
import { generateSlug } from "@/lib/utils";

const relatedKeywords = [
  "IPTV op Smart TV",
  "IPTV op Apple TV",
  "IPTV op Smartphone",
  "IPTV op Tablet",
  "IPTV op Firestick"
];

const relatedLinks = relatedKeywords.map(keyword => ({
  title: keyword,
  href: `/${generateSlug(keyword)}`
}));

export default function IptvOnAndroidPage() {
  return (
    <AdvancedSeoPageLayout 
      title="IPTV op Android: Installatie en Beste Apps"
      relatedLinks={relatedLinks}
    >
      <p>
        Android is een van de meest veelzijdige platformen voor IPTV. Of u nu een Android TV box, smartphone of tablet gebruikt, er zijn talloze hoogwaardige apps beschikbaar die een soepele kijkervaring garanderen.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Beste IPTV Apps voor Android</h2>
      <p>
        Voor Android-gebruikers raden we apps aan zoals 'TiviMate', 'IPTV Smarters Pro' of 'GSE Smart IPTV'. Deze apps bieden een gebruiksvriendelijke interface, EPG-ondersteuning en de mogelijkheid om meerdere afspeellijsten te beheren. U kunt ze eenvoudig downloaden vanuit de Google Play Store.
      </p>
      <h2 className="mt-8 mb-4 text-2xl font-bold text-foreground">Waarom kiezen voor IPTV op Android?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Enorme keuze aan gratis en betaalde IPTV-apps.</li>
        <li>Flexibiliteit om te kijken op TV, telefoon of tablet.</li>
        <li>Mogelijkheid om externe spelers zoals VLC of MX Player te gebruiken.</li>
        <li>Eenvoudig te configureren met een M3U-link of Xtream Codes.</li>
      </ul>
    </AdvancedSeoPageLayout>
  );
}
