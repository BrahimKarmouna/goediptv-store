import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV met VLC Player (PC/Laptop) | IPTV Kopen Nederland",
  description: "IPTV afspelen met VLC op Windows/Mac: M3U laden, afspeellijsten bewaren en veelgestelde vragen.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV met VLC Player</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        VLC is een universele speler voor PC en laptop. Laad je M3U en bekijk live tv snel en eenvoudig.
      </p>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">M3U afspelen in VLC</h2>
          <ol className="list-decimal pl-6 space-y-1 text-muted-foreground">
            <li>Open VLC → Media → Open bestand/netwerk</li>
            <li>Selecteer je M3U (bestand of URL)</li>
            <li>Sla als playlist op voor later gebruik</li>
          </ol>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Gebruik bekabelde verbinding voor stabiele weergave</li>
            <li>Schakel hardwareversnelling in bij 4K</li>
            <li>Gebruik recente VLC-versie</li>
          </ul>
        </div>
      </section>

      <div className="flex gap-3">
        <Button asChild><Link href="/#pricing">Bekijk pakketten</Link></Button>
        <Button asChild variant="outline"><Link href="/iptv-kopen">Terug naar IPTV Kopen</Link></Button>
      </div>
    </div>
  );
}
