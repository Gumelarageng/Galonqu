"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function KontakPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Pesan Terkirim",
      description:
        "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-white">
      <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 stagger-animation">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami siap membantu Anda. Silakan hubungi kami melalui form di bawah
            ini atau melalui kontak yang tersedia.
          </p>
        </div>
      </div>
      </div>

        {/* Title Form */}
        <div className="lg:mx-auto mx-6 max-w-2xl lg:text-center animate-fade-in-up pt-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Formulir Pesan
          </p>
        </div>

      <div className="mx-auto px-6 py-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-sky-600" />
              <div>
                <h3 className="font-semibold">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Raya Sragen No. 123
                  <br />
                  Sragen, Jawa Tengah
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-sky-600" />
              <div>
                <h3 className="font-semibold">Telepon</h3>
                <p className="text-gray-600">+62 812-3456-7890</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-sky-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@galonqu.com</p>
              </div>
            </div>
          </Card>
        </div>
        {/* Contact Form */}
        <form
        action="https://formspree.io/f/mwpvkdgl"
        method="POST"
          className="lg:col-span-2 space-y-6 animate-fade-in-up"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nama</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Masukkan nama Anda"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Masukkan email Anda"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Topik</Label>
            <Select name="topic" required>
              <SelectTrigger>
                <SelectValue placeholder="Pilih topik" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="umum">Pertanyaan Umum</SelectItem>
                <SelectItem value="pesanan">Informasi Pesanan</SelectItem>
                <SelectItem value="layanan">Layanan Pelanggan</SelectItem>
                <SelectItem value="keluhan">Keluhan</SelectItem>
                <SelectItem value="lainnya">Lainnya</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Pesan</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tulis pesan Anda di sini"
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Kirim Pesan
          </Button>
        </form>
      </div>
    </div>
  );
}
