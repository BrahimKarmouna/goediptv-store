import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Tv, Monitor, Tablet, Cast, Gamepad2 } from "lucide-react"

export function DeviceCompatibility() {
  const devices = [
    {
      name: 'Smart TV',
      icon: Tv,
      description: 'Compatibel met alle moderne Smart TV merken zoals Samsung, LG, Sony en meer',
      supported: [
        'Android TV',
        'Samsung Tizen',
        'LG WebOS',
        'Sony Bravia'
      ]
    },
    {
      name: 'Mobiel & Tablet',
      icon: Smartphone,
      description: 'Kijk overal met onze mobiele apps voor iOS en Android',
      supported: [
        'iPhone & iPad',
        'Android telefoons',
        'Android tablets',
        'iPads'
      ]
    },
    {
      name: 'Streaming Devices',
      icon: Cast,
      description: 'Ondersteuning voor populaire streaming apparaten',
      supported: [
        'Chromecast',
        'Apple TV',
        'Amazon Fire TV',
        'NVIDIA Shield'
      ]
    },
    {
      name: 'Computer',
      icon: Monitor,
      description: 'Kijk op je laptop of desktop computer',
      supported: [
        'Windows',
        'macOS',
        'Linux',
        'Web browser'
      ]
    },
    {
      name: 'Gaming Consoles',
      icon: Gamepad2,
      description: 'Ook beschikbaar op je favoriete game console',
      supported: [
        'PlayStation 4/5',
        'Xbox One/Series X',
        'Nintendo Switch'
      ]
    },
    {
      name: 'Overige apparaten',
      icon: Tablet,
      description: 'En nog veel meer ondersteunde apparaten',
      supported: [
        'Mag Box',
        'Formuler Z',
        'Enigma2',
        'Kodi'
      ]
    }
  ]

  return (
    <section id="devices" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compatibel met al je apparaten
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bekijk je favoriete zenders op elk apparaat, waar en wanneer je maar wilt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device, index) => {
            const DeviceIcon = device.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <DeviceIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{device.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{device.description}</p>
                  <div className="space-y-2">
                    {device.supported.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Onze service werkt op vrijwel elk apparaat met een internetverbinding
          </p>
          <a 
            href="/handleiding" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-primary hover:text-primary/80 transition-colors duration-200"
          >
            Bekijk installatiehandleidingen
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
