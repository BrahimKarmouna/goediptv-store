import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV op Smart TV (Samsung, LG, Android TV) | IPTV Kopen Nederland",
  description: "Beste IPTV-apps voor Smart TV, installatie-instructies en tips voor haarscherpe weergave.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV op Smart TV</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Krijg IPTV werkend op Samsung, LG en Android/Google TV. Kies de juiste app per platform, volg de installatie en optimaliseer
        beeld- en netwerkinstellingen voor haarscherpe weergave.
      </p>

      {/* Apps per platform */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Samsung (Tizen)</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Smart STB (portaal/portal)</li>
            <li>SS IPTV (alternatief)</li>
            <li>Let op: app-availability kan variëren per model/jaar</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">LG (webOS)</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Smart STB (portaal/portal)</li>
            <li>SS IPTV (alternatief)</li>
            <li>Controleer de meest recente app-versies</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Android/Google TV</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>TiviMate (aanrader)</li>
            <li>IPTV Smarters (alternatief)</li>
            <li>EPG en favorieten eenvoudig beheren</li>
          </ul>
        </div>
      </section>

      {/* Installatie algemeen */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Installatie in 5 stappen</h2>
        <div className="bg-card border border-border rounded-xl p-6">
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
            <li>Installeer de juiste app voor jouw TV-platform</li>
            <li>Voeg je M3U/portal-URL toe en sla op</li>
            <li>Voeg (optioneel) een EPG-URL toe voor programmagids</li>
            <li>Update zenderlijsten en maak favorieten</li>
            <li>Test verschillende player/decoder-instellingen voor stabiliteit</li>
          </ol>
        </div>
      </section>

      {/* Beeld- en netwerkinstellingen */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Beeldinstellingen</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Schakel “Match frame rate” in indien beschikbaar</li>
            <li>Gebruik Film/Cinema beeldmodus voor natuurgetrouwe kleuren</li>
            <li>Vermijd te agressieve ruisonderdrukking/motion smoothing</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Netwerktips</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Geef de voorkeur aan ethernet of 5GHz WiFi</li>
            <li>Plaats de router dicht bij de TV of gebruik mesh</li>
            <li>Herstart router en TV bij aanhoudende buffering</li>
          </ul>
        </div>
      </section>

      {/* Problemen oplossen + FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Problemen oplossen</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Buffering</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Schakel naar 5GHz of bekabeld</li>
              <li>Verlaag kwaliteit of wijzig player-instellingen</li>
              <li>Update app/firmware van TV</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-2">Geen EPG of zenderlijst</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Controleer EPG-URL en ververs data</li>
              <li>Herlaad M3U/portal en controleer bereikbaarheid</li>
              <li>Test alternatieve app indien nodig</li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-3">Veelgestelde vragen</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Welke app is het beste voor mijn TV?</h3>
            <p className="text-muted-foreground">Samsung/LG: Smart STB; Android/Google TV: TiviMate. Test opties en kies wat stabiel werkt.</p>
          </div>
          <div>
            <h3 className="font-semibold">Kan ik opnemen?</h3>
            <p className="text-muted-foreground">Opnemen is app-afhankelijk. TiviMate premium biedt extra opties; Smart STB is doorgaans live-weergave gericht.</p>
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
