import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { iPhones } from "../../../data/iphones.js";
import MainLayout from "../../../components/layouts/main-layout.jsx";
import CtaSection from "../../../components/home/cta-section.jsx";
import { store } from "../../../data/store.js";

function formatPrice(price) {
  return `Rp${price.toLocaleString("id-ID")}`;
}

function slugify(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

function getPhone(slug) {
  return iPhones.find((item) => slugify(item.name) === slug);
}

export function generateStaticParams() {
  return iPhones.map((item) => ({
    slug: slugify(item.name),
  }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const phone = getPhone(slug);

  if (!phone) {
    return {
      title: "iPhone tidak ditemukan",
    };
  }

  return {
    title: `  Sewa ${phone.name} `,
    description: `Sewa ${phone.name} di ${store.city}, cocok untuk kebutuhan ngonten, event, liburan atau yang lain, mulai dari ${formatPrice(
      phone.prices[0].price,
    )}. Proses cepat, syarat gampang.`,
  };
}

export default async function IphoneDetailPage({ params }) {
  const { slug } = await params;

  const phone = getPhone(slug);

  if (!phone) {
    notFound();
  }

  return (
    <MainLayout>
      <section className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 lg:px-16 mt-24">
        <div className="w-full lg:w-1/2 aspect-square relative">
          <Image
            alt={phone.name}
            src={phone.url}
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          {phone.badge && (
            <span className="px-4 py-2 rounded-full bg-[#fe6101] text-white text-sm">
              {phone.badge}
            </span>
          )}

          <h1 className="text-[#101010] text-2xl lg:text-4xl font-bold">
            {phone.name}
          </h1>

          <div className="flex flex-col gap-2 w-full">
            {phone.prices.map((option) => (
              <div
                key={option.duration}
                className="flex justify-between items-center w-full py-2 border-b border-[#101010]/10"
              >
                <p className="text-[#101010]/80 text-md">
                  {option.duration} jam
                </p>

                <p className="text-[#101010] font-bold text-md lg:text-xl">
                  {formatPrice(option.price)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex mt-8 w-full lg:w-auto">
            <Link
              href={`/sewa?unit=${slug}`}
              className="w-full lg:w-auto text-center px-6 py-2 text-white bg-[#0148e4] hover:bg-[#0148e4]/90 rounded-full"
            >
              Sewa Sekarang
            </Link>
          </div>
        </div>
      </section>
      <CtaSection></CtaSection>
    </MainLayout>
  );
}
