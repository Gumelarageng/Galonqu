import Link from "next/link"
import { Droplet, Facebook, Instagram, Mail, MapPin, Phone, Apple as WhatsApp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sky-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Droplet className="h-8 w-8" />
              <span className="text-2xl font-bold">Galonqu</span>
            </Link>
            <p className="text-sm leading-6">
              Air minum isi ulang berkualitas dari mata air Gunung Lawu,
              menghadirkan kesegaran alami untuk keluarga Anda.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-sky-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-sky-300">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-sky-300">
                <WhatsApp className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Menu</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/tentang" className="text-sm hover:text-sky-300">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="/layanan" className="text-sm hover:text-sky-300">
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link href="/produk" className="text-sm hover:text-sky-300">
                      Produk
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontak" className="text-sm hover:text-sky-300">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Kontak</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">+62 812-3456-7890</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">info@galonqu.com</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-1" />
                    <span className="text-sm">
                      Jl. Raya Sragen No. 123<br />
                      Sragen, Jawa Tengah
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5">
            &copy; {new Date().getFullYear()} Galonqu. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}