import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Droplet, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80"
          alt="Water Delivery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-sky-900/70" />
        <div className="absolute inset-0 mx-auto max-w-7xl px-6 flex items-center lg:px-8">
          <div className="max-w-2xl text-white stagger-animation">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Air Minum Berkualitas Untuk Keluarga Anda
            </h1>
            <p className="mt-6 text-lg leading-8">
              Nikmati kesegaran air minum dari mata air Gunung Lawu. Kami menghadirkan
              air minum berkualitas tinggi dengan pengiriman cepat ke rumah Anda.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/produk">
                <Button size="lg" className="bg-white text-sky-900 hover:bg-sky-100 animate-float">
                  Pesan Sekarang
                </Button>
              </Link>
              <Link href="/tentang" className="flex items-center space-x-2 hover:text-sky-300 group">
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white to-sky-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center animate-fade-in-up">
            <h2 className="text-base font-semibold leading-7 text-sky-600">
              Mengapa Memilih Kami?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Kualitas Terbaik untuk Anda
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kami berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tinggi
              untuk memenuhi kebutuhan air minum Anda.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 stagger-animation">
              <div className="flex flex-col hover:transform hover:scale-105 transition-transform duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Droplet className="h-5 w-5 text-sky-600" />
                  Kualitas Terjamin
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Air minum kami melalui proses filtrasi bertingkat untuk memastikan
                    kualitas dan kebersihan yang optimal.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col hover:transform hover:scale-105 transition-transform duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <Truck className="h-5 w-5 text-sky-600" />
                  Pengiriman Cepat
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Layanan pengiriman cepat dan tepat waktu ke lokasi Anda dengan
                    armada yang selalu siap.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col hover:transform hover:scale-105 transition-transform duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  Pelayanan Prima
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Tim kami siap melayani dengan ramah dan profesional untuk
                    memberikan pengalaman terbaik.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}