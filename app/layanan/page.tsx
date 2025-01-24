import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Droplet, 
  Truck, 
  Clock, 
  Phone,
  Flame,
  CalendarCheck,
  Shield,
  BadgeCheck
} from "lucide-react"

export default function LayananPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center stagger-animation">
            <h2 className="text-base font-semibold leading-7 text-sky-600">Layanan Kami</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Solusi Air Minum & Gas LPG
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kami menyediakan berbagai layanan untuk memenuhi kebutuhan air minum dan gas LPG Anda
              dengan kualitas terbaik dan pengiriman yang cepat.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 stagger-animation">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-sky-600/10 p-3">
                <Droplet className="h-6 w-6 text-sky-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Air Minum Isi Ulang</h3>
                <p className="mt-2 text-gray-600">
                  Layanan pengisian ulang air minum dengan kualitas terjamin. Tersedia untuk
                  berbagai jenis galon dan ukuran.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2">
                    <BadgeCheck className="h-5 w-5 text-sky-600" />
                    <span>Proses filtrasi bertingkat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-sky-600" />
                    <span>Higienitas terjamin</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-sky-600" />
                    <span>Pengisian cepat</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-sky-600/10 p-3">
                <Flame className="h-6 w-6 text-sky-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Gas LPG</h3>
                <p className="mt-2 text-gray-600">
                  Layanan pengiriman gas LPG untuk kebutuhan rumah tangga dan bisnis.
                  Tersedia dalam berbagai ukuran tabung.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-sky-600" />
                    <span>Pengiriman cepat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CalendarCheck className="h-5 w-5 text-sky-600" />
                    <span>Tersedia 7 hari seminggu</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-sky-600" />
                    <span>Pemesanan mudah</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}