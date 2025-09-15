import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "IPTV Storing Oplossen | IPTV Kopen Nederland",
  description: "Los IPTV storingen snel op: buffering, zwart beeld, EPG-problemen en verbindingsfouten. Praktische checklist en tips.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">IPTV Storing Oplossen</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Gebruik deze checklist om veelvoorkomende IPTV-problemen snel op te lossen.
      </p>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Snelle checklist</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Gebruik 5GHz WiFi of ethernet</li>
            <li>Herstart modem/router en app</li>
            <li>Controleer M3U/portal en EPG-URL</li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Veelvoorkomende oorzaken</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Druk 2.4GHz netwerk</li>
            <li>Verouderde app of device</li>
            <li>Netwerkrestricties (VPN/Firewall)</li>
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
