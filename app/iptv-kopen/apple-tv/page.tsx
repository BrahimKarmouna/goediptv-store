import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV op Apple TV | IPTV Kopen Nederland",
  description: "Alles over IPTV op Apple TV: beste apps (iPlayTV), installatie, tips en veelgestelde vragen. Start vandaag met IPTV in HD/4K op Apple TV.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV op Apple TV</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Kijk IPTV op Apple TV met top-apps zoals iPlayTV. In deze gids vind je de beste apps, een uitgebreide installatiehandleiding,
        aanbevolen instellingen voor HD/4K en oplossingen voor veelvoorkomende problemen.
      </p>

      {/* Overzicht: app en installatie */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Aanbevolen app: iPlayTV</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Eenvoudige M3U/portal-configuratie</li>
            <li>EPG, favorieten en categorieën</li>
            <li>Stabiele weergave in HD/4K</li>
            <li>Ondersteuning voor meerdere playlists</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Installatie in 5 stappen</h2>
          <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
            <li>Open de App Store en installeer iPlayTV</li>
            <li>Start de app en kies “Playlist toevoegen”</li>
            <li>Voer je M3U- of portal-URL in en sla op</li>
            <li>Voeg EPG-URL toe voor programmagids</li>
            <li>Herstart de app en controleer zendergroepen</li>
          </ol>
        </div>
      </section>

      {/* Voor- en nadelen */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Voordelen</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Zeer gebruiksvriendelijk op Apple TV</li>
            <li>Uitstekende beeldkwaliteit (HD/4K)</li>
            <li>Goede EPG-ondersteuning en favorieten</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Aandachtspunten</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Gebruik ethernet of sterk 5GHz WiFi voor 4K</li>
            <li>Controleer regelmatig app- en tvOS-updates</li>
            <li>Niet alle apps ondersteunen opnemen</li>
          </ul>
        </div>
      </section>

      {/* Beste instellingen */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Beste instellingen voor Apple TV</h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Schakel “Match Content” in voor framerate/SDR-HDR indien nodig</li>
            <li>Gebruik HLS of “Auto” als afspeelprotocol</li>
            <li>EPG: stel juiste tijdzone (CET/CEST) in binnen de app</li>
            <li>Geluid: kies passthrough/auto afhankelijk van je receiver</li>
          </ul>
        </div>
      </section>

      {/* Problemen oplossen */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Problemen oplossen</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Buffering of haperingen</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Schakel over op 5GHz WiFi of gebruik ethernet</li>
              <li>Verlaag kwaliteit of kies HLS/Auto in de app</li>
              <li>Herstart modem/router en Apple TV</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Geen EPG of verkeerde tijden</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Controleer EPG-URL en vernieuwing</li>
              <li>Stel tijdzone correct in (CET/CEST)</li>
              <li>Leeg app-cache of herlaad playlist</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Uitgebreide FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Veelgestelde vragen</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Werkt IPTV op alle Apple TV modellen?</h3>
            <p className="text-muted-foreground">Gebruik bij voorkeur Apple TV HD/4K met de nieuwste tvOS-versie voor de beste prestaties.</p>
          </div>
          <div>
            <h3 className="font-semibold">Welke afspeelinstellingen zijn het beste?</h3>
            <p className="text-muted-foreground">HLS of Auto levert meestal de beste stabiliteit. Pas framerate matching aan onder “Match Content”.</p>
          </div>
          <div>
            <h3 className="font-semibold">Kan ik opnemen op Apple TV?</h3>
            <p className="text-muted-foreground">Niet elke app ondersteunt opnemen. Controleer de functies van iPlayTV of alternatieven.</p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button asChild><Link href="/#pricing">Bekijk pakketten</Link></Button>
        <Button asChild variant="outline"><Link href="/iptv-kopen">Terug naar IPTV Kopen</Link></Button>
      </div>
    </div>
  );
}
