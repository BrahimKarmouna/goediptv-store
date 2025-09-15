"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Tv, Smartphone, MonitorSmartphone, ShieldCheck, Zap, Headphones, PlayCircle, Cable, Radio } from "lucide-react";

export default function IptvKopenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pb-16 pt-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 mb-4">
              Betrouwbaar • Snel • HD/4K
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              IPTV Kopen in Nederland
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Bestel direct en kijk binnen enkele minuten. Kies een looptijd die bij je past en geniet van duizenden kanalen, films en series in HD/4K.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/#pricing">Bekijk prijzen</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6">
                <Link href="/beste-nederlandse-iptv-aanbieders">Waarom wij?</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Veilige betaling</span>
              <span className="w-px h-4 bg-border" />
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Directe activatie</span>
              <span className="w-px h-4 bg-border" />
              <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-primary" /> 24/7 NL support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 border-b border-border/50 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary"/> Geld-terug-garantie</span>
            <span className="hidden md:inline w-px h-4 bg-border"/>
            <span className="inline-flex items-center gap-2"><Headphones className="w-4 h-4 text-primary"/> 24/7 NL klantenservice</span>
            <span className="hidden md:inline w-px h-4 bg-border"/>
            <span className="inline-flex items-center gap-2"><PlayCircle className="w-4 h-4 text-primary"/> Films & Series on-demand</span>
            <span className="hidden md:inline w-px h-4 bg-border"/>
            <span className="inline-flex items-center gap-2"><Cable className="w-4 h-4 text-primary"/> HD/4K kwaliteit</span>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Alles wat je nodig hebt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[ 
              { icon: <Tv className="w-7 h-7 text-primary" />, title: "10.000+ Kanalen", desc: "Inclusief NL, sport, films en internationaal aanbod" },
              { icon: <MonitorSmartphone className="w-7 h-7 text-primary" />, title: "Werkt op elk apparaat", desc: "Smart TV, Android, Apple TV, laptop en meer" },
              { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "Betrouwbare kwaliteit", desc: "HD/4K streams met minimale buffering" },
              { icon: <Headphones className="w-7 h-7 text-primary" />, title: "Nederlandse support", desc: "Hulp bij installatie en gebruik, 24/7 bereikbaar" },
            ].map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">NL en internationale zenders</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
            {["NPO 1","NPO 2","NPO 3","RTL 4","RTL 5","SBS 6","ESPN","Ziggo Sport","BBC","Sky","ARD","ZDF"].map((ch) => (
              <div key={ch} className="text-center border border-border rounded-lg p-3 bg-card text-sm text-foreground/80">
                {ch}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">+ duizenden extra zenders en VOD-titels beschikbaar</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Zo werkt het</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Kies je abonnement", desc: "Selecteer 1, 3, 6 of 12 maanden – altijd flexibel en zonder contract" },
              { step: "2", title: "Ontvang activatie", desc: "Na betaling ontvang je direct je gegevens en eenvoudige instructies" },
              { step: "3", title: "Kijk direct", desc: "Installeer de app of gebruik je smart TV – klaar binnen enkele minuten" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Compatibel met al je apparaten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Smart TV", desc: "Samsung, LG, Android TV, Google TV" },
              { title: "Apple TV & iOS", desc: "Apple TV, iPhone en iPad" },
              { title: "Android & Fire TV", desc: "Android phones, tablets en Fire TV Stick" },
              { title: "Laptop & Desktop", desc: "Kijk via VLC of webapps op PC/Laptop" },
            ].map((d, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-1">{d.title}</h3>
                <p className="text-muted-foreground">{d.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5" /> Eenvoudige installatie</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5" /> Heldere handleiding</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5" /> 24/7 hulp indien nodig</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App tiles / Popular apps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Populaire apps en spelers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[ 
              { title: "Smart STB", desc: "Veelgebruikt op Smart TV" },
              { title: "TiviMate", desc: "Topkeuze op Android & Google TV" },
              { title: "iPlayTV", desc: "Uitstekend voor Apple TV" },
              { title: "VLC Player", desc: "Universeel voor PC/Laptop" },
            ].map((app) => (
              <div key={app.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold">{app.title}</h3>
                <p className="text-muted-foreground mt-1">{app.desc}</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5"/> Eenvoudige setup</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-500 mt-0.5"/> EPG & favorieten</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Vergelijk en kies slim</h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4">Kenmerk</th>
                  <th className="py-3 px-4">Onze service</th>
                  <th className="py-3 px-4 text-muted-foreground">Andere aanbieders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { k: 'Aantal kanalen', a: '10.000+', b: '2.000-5.000' },
                  { k: 'HD/4K inbegrepen', a: 'Ja', b: 'Vaak extra kosten' },
                  { k: 'Apparaatondersteuning', a: 'Smart TV, Apple TV, Android, PC', b: 'Beperkter' },
                  { k: 'Maandprijs', a: 'Vanaf €19,99', b: '€15–€30' },
                  { k: 'Contract', a: 'Geen', b: 'Vaak wel' },
                ].map((row) => (
                  <tr key={row.k} className="hover:bg-muted/20">
                    <td className="py-3 pr-4 font-medium text-foreground/90">{row.k}</td>
                    <td className="py-3 px-4 font-semibold text-primary">{row.a}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg"><Link href="/#pricing">Naar pakketten</Link></Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">Veelgestelde vragen over IPTV kopen</h2>
          <div className="space-y-6">
            {[
              { q: "Is IPTV legaal?", a: "IPTV is legaal wanneer je gebruikmaakt van aanbieders met de juiste rechten. Wij adviseren enkel betrouwbare providers." },
              { q: "Hoe snel kan ik starten?", a: "Meestal binnen enkele minuten. Je ontvangt direct na betaling de activatie-instructies." },
              { q: "Op hoeveel apparaten kan ik kijken?", a: "Afhankelijk van je pakket: 1 tot onbeperkt apparaten. Dit staat bij elk pakket vermeld." },
              { q: "Werkt het in het buitenland?", a: "Ja, met een stabiele internetverbinding kun je wereldwijd kijken." },
              { q: "Welke betaalmethoden?", a: "We ondersteunen o.a. iDEAL, creditcard en andere veilige methoden." },
              { q: "Wat als ik hulp nodig heb?", a: "Onze Nederlandstalige support is 24/7 beschikbaar voor installatie en vragen." },
            ].map((f, i) => (
              <div key={i} className="border-b border-border pb-4">
                <h3 className="text-lg font-semibold mb-1">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te beginnen?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">Kies je looptijd en start vandaag nog met kijken – zonder contracten en met 24/7 support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/#pricing">Bekijk alle pakketten</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="https://wa.me/3197010270035" target="_blank" rel="noopener noreferrer">Hulp nodig? Chat met ons</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
            <Radio className="w-5 h-5 text-primary"/>
            <span className="text-sm text-muted-foreground">Twijfel je nog? Bekijk onze gids of neem contact op voor advies.</span>
            <Button asChild size="sm" className="ml-2"><Link href="/iptv-kopen-gids">Lees de gids</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
