import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tv, Film, Trophy, Globe, Music, Baby as Child, Info, Check } from "lucide-react"
import { Button } from "./ui/button"

export function ChannelPackages() {
  const packages = [
    {
      id: 'dutch',
      title: 'Nederlandse Zenders',
      icon: Tv,
      channels: [
        'NPO 1, 2, 3',
        'RTL 4, 5, 7, 8',
        'SBS 6, 9, Vero',
        'RTL Z, NOS, Nieuws',
        'Alle regionale zenders'
      ],
      color: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600'
    },
    {
      id: 'international',
      title: 'Internationaal',
      icon: Globe,
      channels: [
        'Duitse zenders',
        'Franse zenders',
        'Spaanse zenders',
        'Turkse zenders',
        'Engelse zenders'
      ],
      color: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600'
    },
    {
      id: 'sports',
      title: 'Sport',
      icon: Trophy,
      channels: [
        'Ziggo Sport',
        'ESPN',
        'Eredivisie Live',
        'Premier League',
        'Champions League'
      ],
      color: 'bg-red-100 dark:bg-red-900/30',
      iconColor: 'text-red-600'
    },
    {
      id: 'movies',
      title: 'Films & Series',
      icon: Film,
      channels: [
        'Film1, Film1+',
        'SBS9',
        'Comedy Central',
        'FOX',
        'RTL Lounge'
      ],
      color: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600'
    },
    {
      id: 'kids',
      title: 'Kinderen',
      icon: Child,
      channels: [
        'Nickelodeon',
        'Disney Channel',
        'Cartoon Network',
        'NPO Zapp',
        'RTL Telekids'
      ],
      color: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600'
    },
    {
      id: 'music',
      title: 'Muziek',
      icon: Music,
      channels: [
        'MTV',
        'TMF',
        'DanceTrippin',
        'QMusic',
        'Slam!'
      ],
      color: 'bg-pink-100 dark:bg-pink-900/30',
      iconColor: 'text-pink-600'
    }
  ]

  return (
    <section id="channel-packages" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onze Uitgebreide Zenderpakketten
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kies uit onze uitgebreide selectie van zenders in kristalheldere HD-kwaliteit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            return (
              <Card key={pkg.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`${pkg.color} ${pkg.iconColor} p-3 rounded-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{pkg.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.channels.map((channel, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{channel}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <Info className="w-4 h-4 mr-2" />
                    Bekijk alle zenders
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Meer dan 10.000 kanalen beschikbaar in onze volledige collectie
          </p>
          <Button size="lg" className="px-8">
            Bekijk alle beschikbare zenders
          </Button>
        </div>
      </div>
    </section>
  )
}

