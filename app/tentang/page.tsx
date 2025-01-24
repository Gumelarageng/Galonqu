import Image from "next/image"
import { CheckCircle2, Truck, Droplet } from "lucide-react"

export default function TentangPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-sky-100/20">
      <div className="relative mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0">
        <Image
                src="/images/tentangkami.webp"
                alt="Proses Filtrasi Air"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-600 opacity-70"></div>
      </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
                Tentang Kami
              </h1>
              <div className="mt-6 max-w-xl lg:mt-8">
                <p className="text-lg leading-8 text-white">
                  Isi ulang Nur Tirta didirikan pada tahun 2014 di Sragen, Jawa Tengah.
                  Kami adalah spesialis dalam penjualan dan pengiriman air minum isi ulang
                  dan gas LPG.
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Sumber air kami berasal dari lereng Gunung Lawu, tepatnya di Tawangmangu,
                  yang diangkut menggunakan truk tangki air. Setibanya di depot, air melalui
                  beberapa tahap filtrasi untuk memastikan kualitas air minum yang higienis
                  dan siap konsumsi.
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Komitmen kami adalah menyediakan air minum berkualitas tinggi dengan
                  harga terjangkau. Setiap tetes air yang kami proses melalui sistem
                  filtrasi modern dan pengujian kualitas yang ketat.
                </p>
              </div>
        </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center animate-fade-in-up">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Nilai-Nilai Kami
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Komitmen Untuk Kualitas
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 stagger-animation">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-sky-600/10 p-2 ring-1 ring-inset ring-sky-600/20">
                <CheckCircle2 className="h-6 w-6 text-sky-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Kualitas Premium</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Kami menggunakan teknologi filtrasi modern untuk memastikan air minum
                yang kami hasilkan memenuhi standar kualitas tertinggi.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-sky-600/10 p-2 ring-1 ring-inset ring-sky-600/20">
                <Truck className="h-6 w-6 text-sky-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Pengiriman Handal</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Tim pengiriman kami siap mengantarkan pesanan Anda dengan cepat dan
                tepat waktu ke lokasi yang ditentukan.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-sky-600/10 p-2 ring-1 ring-inset ring-sky-600/20">
                <Droplet className="h-6 w-6 text-sky-600" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Kebersihan Terjamin</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Setiap galon dan peralatan kami dibersihkan secara menyeluruh untuk
                menjamin higienitas produk.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
