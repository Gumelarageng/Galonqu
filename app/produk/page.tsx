"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Air Mineral Isi Ulang",
    description: "Air minum isi ulang berkualitas dari mata air Gunung Lawu",
    price: 4000,
    image: "/images/mineralisiulang.webp",
    category: "air-minum"
  },
  {
    id: 2,
    name: "Air RO2",
    description: "Air minum premium dengan teknologi Reverse Osmosis ganda",
    price: 8000,
    image: "/images/ro2.jpg",
    category: "air-minum"
  },
  {
    id: 3,
    name: "Galon Aqua Original",
    description: "Galon air mineral Aqua asli dengan kualitas terjamin dan menyegarkan",
    price: 20000,
    image: "/images/aquaoriginal.webp",
    category: "galon"
  },
  {
    id: 4,
    name: "Galon Le Minerale",
    description: "Galon air mineral Le Minerale dengan kesegaran alami",
    price: 18000,
    image: "/images/leminerale.jpg",
    category: "galon"
  },
  {
    id: 5,
    name: "LPG 3kg",
    description: "Tabung gas LPG 3kg untuk kebutuhan rumah tangga",
    price: 20000,
    image: "/images/gaslpg.jpeg",
    category: "gas"
  }
]

export default function ProdukPage() {
  const [cart, setCart] = useState<{[key: number]: number}>({})
  const [activeCategory, setActiveCategory] = useState("semua")

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }))
  }

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[productId] > 1) {
        newCart[productId]--
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const filteredProducts = activeCategory === "semua"
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="stagger-animation">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Produk Kami
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pilih dari berbagai produk berkualitas kami untuk memenuhi kebutuhan air minum
            dan gas LPG Anda.
          </p>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["semua", "air-minum", "galon", "gas"].map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {category.replace("-", " ")}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      <Badge variant="secondary" className="mt-2 capitalize">
                        {product.category.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className="text-lg font-bold text-sky-600">
                      Rp {product.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    {cart[product.id] ? (
                      <div className="flex items-center space-x-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{cart[product.id]}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => addToCart(product.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(product.id)}
                        className="w-full"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Tambah ke Keranjang
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
