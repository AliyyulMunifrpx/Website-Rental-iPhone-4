import Link from "next/link.js";
import React from "react";
import MainLayout from "../../components/layouts/main-layout.jsx";
import { store } from "../../data/store.js";
import CtaSection from "../../components/home/cta-section.jsx";

// 1. Data array untuk list syarat & ketentuan (Diperbarui sesuai gambar S&K)
const termsData = [
  {
    id: 1,
    title: "1. Syarat Identitas Utama",
    description:
      "Untuk syarat sewa, penyewa wajib meninggalkan 2 Kartu Identitas selama masa sewa. Identitas pertama wajib berupa KTP Asli Fisik (atau KIA Asli Fisik apabila belum punya KTP).",
  },
  {
    id: 2,
    title: "2. Identitas Pendukung",
    description:
      "Sebagai identitas kedua, wajib melampirkan fisik asli dari salah satu dokumen berikut: SIM / KTM / Kartu Pelajar / STNK / BPKB / Akte Kelahiran / Ijazah / Kartu Keluarga.",
  },
  {
    id: 3,
    title: "3. Validitas & Penjamin",
    description:
      "Kami hanya menerima Kartu Identitas fisik asli dan masih berlaku. Jika tidak memenuhi persyaratan, identitas bisa di-mix dengan penjamin lain (pemilik identitas penjamin wajib datang ke store pada saat pengambilan).",
  },
  {
    id: 4,
    title: "4. Khusus Tipe iPhone 12 Pro ke Atas",
    description:
      "Penyewa wajib datang ke store 2 orang dengan membawa identitas masing-masing. Jika datang sendiri, penyewa wajib menjaminkan BPKB atau barang lain, atau bisa melakukan deposit uang senilai 50% dari barang yang disewa.",
  },
  {
    id: 5,
    title: "5. Khusus Tipe iPhone 14 Pro ke Atas",
    description:
      "Penyewa diwajibkan untuk menjaminkan BPKB atau barang lain, atau juga bisa melakukan deposit uang senilai 50% dari barang yang disewa.",
  },
];

export const metadata = {
  title: `Syarat & Ketentuan Sewa iPhone`,
  description: `Pelajari syarat dan ketentuan sewa iPhone di ${store.name} ${store.city}. Proses cepat, persyaratan transparan, dan jaminan unit original.`,
};

// 2. Komponen terpisah untuk masing-masing poin
const TermItem = ({ title, description }) => {
  return (
    <div className="space-y-2 lg:space-y-4">
      <h2 className="text-lg lg:text-2xl font-bold text-[#101010] tracking-tight">
        {title}
      </h2>
      <p className="text-base text-md leading-relaxed text-[#101010]/80">
        {description}
      </p>
    </div>
  );
};

// 3. Main Komponen
export default function TermsPage() {
  return (
    <MainLayout>
      <section className="w-full px-4 lg:px-48 mt-24 flex flex-col gap-8 lg:gap-16 justify-center">
        <div className="">
          <h1 className=" w-full text-2xl lg:text-5xl text-[#101010] font-semibold text-center lg:text-start col-end-4">
            Syarat & Ketentuan.
          </h1>
        </div>

        {/* Content Section dilooping dari array */}
        <div className="flex flex-col gap-8">
          {termsData.map((term) => (
            <TermItem
              key={term.id}
              title={term.title}
              description={term.description}
            />
          ))}
        </div>
        <div className="flex h-full w-full flex justify-center items-center">
          <Link
            href="/sewa-iphone"
            className="px-6 py-2 text-white bg-[#0148e4] rounded-full hover:bg-[#0148e4]/90"
          >
            Sewa Sekarang
          </Link>
        </div>
      </section>
      <CtaSection></CtaSection>
    </MainLayout>
  );
}
