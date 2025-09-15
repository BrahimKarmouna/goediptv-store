import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV Formule 1 Kijken | IPTV Kopen Nederland",
  description: "IPTV voor Formule 1: stabiele streams, aanbevolen apps en devices, en tips voor beste race-ervaring.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV Formule 1</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Volg elke race via IPTV in HD/4K. Zorg voor een stabiele verbinding en de juiste app-instellingen.
      </p>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Tips voor F1-streams</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Gebruik ethernet voor maximale stabiliteit</li>
            <li>Schakel bewegingsverbetering uit op je TV</li>
            <li>Gebruik een recente appversie</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Aanbevolen apps</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>TiviMate (Android/Google TV)</li>
            <li>iPlayTV (Apple TV)</li>
            <li>Smart STB (Smart TV)</li>
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
