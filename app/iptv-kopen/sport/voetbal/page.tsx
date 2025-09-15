import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV Voetbal Kijken | IPTV Kopen Nederland",
  description: "Kijk voetbal via IPTV: competities, tips voor stabiliteit en geschikte apps/devices. Start vandaag met IPTV.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV Voetbal</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Kijk nationale en internationale voetbalcompetities via IPTV in HD/4K. Optimaliseer je setup voor de beste wedstrijdbeleving.
      </p>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Tips voor voetbalstreams</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Gebruik bekabelde verbinding of 5GHz WiFi</li>
            <li>Stel je app in op HLS/auto quality</li>
            <li>Werk EPG/kanalenlijst regelmatig bij</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Aanbevolen devices</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Android/Google TV met TiviMate</li>
            <li>Apple TV met iPlayTV</li>
            <li>Smart TV met Smart STB</li>
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
