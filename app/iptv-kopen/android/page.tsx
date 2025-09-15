import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV op Android & Google TV | IPTV Kopen Nederland",
  description: "Installeer IPTV op Android/Google TV met TiviMate. Uitleg, tips en FAQ voor stabiele IPTV-weergave in HD/4K.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV op Android & Google TV</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        TiviMate is de populairste app op Android/Google TV. Hieronder vind je uitgebreide installatie, optimale instellingen,
        veelvoorkomende oplossingen en een FAQ om direct probleemloos te kijken.
      </p>

      {/* Aanbevolen app + Installatie */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Aanbevolen app: TiviMate</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Soepele interface, EPG en opnameopties</li>
            <li>Ondersteuning voor groepen en favorieten</li>
            <li>Krachtige player met HLS/auto-kwaliteit</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Installatie in 5 stappen</h2>
          <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
            <li>Installeer TiviMate via Google Play</li>
            <li>Open TiviMate → Playlist toevoegen</li>
            <li>Voeg M3U/portal-URL toe en sla op</li>
            <li>EPG-URL toevoegen en mappen updaten</li>
            <li>Favorieten aanmaken en sorteren</li>
          </ol>
        </div>
      </section>

      {/* Instellingen + Tips */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Optimale instellingen</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Player: HLS of Auto voor stabiliteit</li>
            <li>EPG: juiste tijdzone (CET/CEST)</li>
            <li>Beeld: 50/60Hz match content indien beschikbaar</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Problemen oplossen</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Buffering: 5GHz WiFi of ethernet gebruiken</li>
            <li>Zwart beeld: playlist opnieuw laden, app updaten</li>
            <li>EPG ontbreekt: controleer URL en ververs</li>
          </ul>
        </div>
      </section>

      {/* Uitgebreide FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Veelgestelde vragen</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Is TiviMate gratis?</h3>
            <p className="text-muted-foreground">De basis is gratis; premium biedt extra functies zoals meerdere playlists, EPG-uitbreiding en back-ups.</p>
          </div>
          <div>
            <h3 className="font-semibold">Waarom zie ik buffering?</h3>
            <p className="text-muted-foreground">Controleer je internet, gebruik 5GHz WiFi of ethernet, en zet de player op "Auto" of HLS.</p>
          </div>
          <div>
            <h3 className="font-semibold">Kan ik meerdere playlists toevoegen?</h3>
            <p className="text-muted-foreground">Ja, TiviMate ondersteunt meerdere playlists en EPG-bronnen (premium-functie).</p>
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
