"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link.js";
import { useState } from "react";

const faqs = [
  {
    number: "01",
    title: "Bagaimana cara menyewa iPhone?",
    answer:
      "Pilih unit iPhone yang kamu inginkan, lalu isi detail penyewaan dan lanjutkan proses melalui WhatsApp. Tim iRent akan membantu mengecek ketersediaan dan mengonfirmasi penyewaanmu.",
  },
  {
    number: "02",
    title: "Apa saja syarat untuk menyewa?",
    answer:
      "Penyewa wajib memberikan data yang diperlukan untuk proses verifikasi dan penyewaan. Data yang diberikan harus benar dan dapat dipertanggungjawabkan.",
  },
  {
    number: "03",
    title: "Apakah ada deposit atau jaminan?",
    answer:
      "Ketentuan deposit atau jaminan dapat berbeda untuk setiap unit. Detail biaya dan jaminan akan dikonfirmasi sebelum penyewaan dilakukan.",
  },
  {
    number: "04",
    title: "Apakah iPhone bisa diantar?",
    answer:
      "Bisa. Untuk area tertentu, iRent menyediakan layanan pengantaran sehingga unit dapat diantar langsung ke lokasi yang telah disepakati.",
  },
  {
    number: "05",
    title: "Bagaimana jika iPhone rusak atau hilang?",
    answer:
      "Setiap unit diperiksa sebelum dan setelah masa penyewaan. Kerusakan atau kehilangan yang disebabkan oleh kelalaian penyewa dapat dikenakan biaya perbaikan atau penggantian sesuai kondisi unit.",
  },
  {
    number: "06",
    title: "Bagaimana jika terlambat mengembalikan unit?",
    answer:
      "Unit wajib dikembalikan sesuai tanggal dan waktu yang telah disepakati. Keterlambatan pengembalian dapat dikenakan biaya tambahan sesuai dengan ketentuan penyewaan.",
  },
  {
    number: "07",
    title: "Apakah bisa memperpanjang masa sewa?",
    answer:
      "Bisa, selama unit masih tersedia untuk periode berikutnya. Hubungi tim iRent sebelum masa sewa berakhir untuk mengajukan perpanjangan.",
  },
  {
    number: "08",
    title: "Untuk kebutuhan apa saja iPhone bisa disewa?",
    answer:
      "iPhone dapat digunakan untuk berbagai kebutuhan seperti membuat konten, fotografi, videografi, perjalanan, event, maupun kebutuhan pribadi.",
  },
];

function FAQItem({ number, title, children, isOpen, onClick }) {
  return (
    <div className="group border-b border-black/10 py-4 lg:py-8">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex cursor-pointer items-center justify-between gap-8 text-left"
      >
        <div className="flex items-center gap-8">
          <span className="text-md text-[#101010]/80">{number}</span>

          <h3 className="text-lg lg:text-2xl font-semibold text-[#101010]">
            {title}
          </h3>
        </div>

        <ChevronDown
          className={`w-10 h-10 text-[#101010] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-4 pl-12 text-[#101010]/80 text-md leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (number) => {
    setOpenFAQ((current) => (current === number ? null : number));
  };

  return (
    <section className="w-full flex flex-col gap-16 px-4 lg:px-48 mt-32">
      <h2 className="text-[#101010] text-2xl lg:text-4xl text-center  w-full">
        Paling{" "}
        <span className=" w-fit text-2xl lg:text-5xl text-[#101010] font-semibold text-start col-end-4">
          Sering Ditanyakan
        </span>
      </h2>

      <div className="w-full">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.number}
            number={faq.number}
            title={faq.title}
            isOpen={openFAQ === faq.number}
            onClick={() => toggleFAQ(faq.number)}
          >
            {faq.answer}
          </FAQItem>
        ))}
      </div>

      <div className="flex h-full w-full justify-center items-center">
        <Link
          href="/sewa-iphone"
          className="px-6 py-2 text-white bg-[#0148e4] rounded-full hover:bg-[#0148e4]/90"
        >
          Sewa iPhone
        </Link>
      </div>
    </section>
  );
}
