import Image from "next/image";
import { store } from "../../data/store.js";
import MainLayout from "../../components/layouts/main-layout.jsx"; // Sesuaikan path jika pakai layout
import CtaSection from "../../components/home/cta-section.jsx";

export const metadata = {
  title: `Legalitas & Dokumen Resmi | ${store.name}`,
  description: `Informasi legalitas, dokumen resmi, dan transparansi layanan sewa iPhone ${store.name} di ${store.city}.`,
  openGraph: {
    title: `Legalitas | ${store.name}`,
    description: `Dokumen resmi dan legalitas operasi ${store.name}.`,
    url: "/legal",
    siteName: store.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function LegalPage() {
  return (
    <MainLayout>
      <section className="w-full px-4 lg:px-16 mt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <h1 className=" w-full text-2xl lg:text-5xl  text-[#101010] font-semibold text-center lg:text-start  col-end-4">
              Legalitas & Transparansi
            </h1>
            <p className="text-[#101010]/70 text-md text-center lg:text-start  w-full ">
              Kepercayaan dan keamanan pelanggan adalah prioritas kami.{" "}
              {store.name} beroperasi secara sah dan mematuhi regulasi yang
              berlaku di {store.city}.
            </p>
          </div>

          {/* Section Dokumen Foto */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#101010] border-b border-gray-200">
              Dokumen Perizinan
            </h2>
            <p className="text-[#101010]/70 text-md mb-8">
              Berikut adalah salinan dokumen legalitas operasional bisnis kami
              sebagai jaminan keamanan bertransaksi di {store.name}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dokumen 1 */}
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/assets/doc/1.webp" // Ganti dengan path foto aslimu
                    alt={`Dokumen Legal 1 ${store.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#101010]">
                    Nomor Induk Berusaha (NIB)
                  </h3>
                  <p className="text-sm text-[#101010]/60 mt-1">
                    Bukti registrasi pendaftaran penanaman modal dan perizinan
                    berusaha.
                  </p>
                </div>
              </div>

              {/* Dokumen 2 */}
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/assets/doc/2.webp" // Ganti dengan path foto aslimu
                    alt={`Dokumen Legal 2 ${store.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#101010]">
                    Sertifikat Pendaftaran Pendirian Perseroan Perorangan{" "}
                  </h3>
                  <p className="text-sm text-[#101010]/60 mt-1">
                    Dokumen resmi yang menyatakan legalitas domisili usaha di{" "}
                    {store.city}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Kepatuhan Data (Opsional tapi disarankan) */}
          <div className=" rounded-3xl ">
            <h2 className="text-xl font-bold text-[#101010] mb-4">
              Komitmen Keamanan Data
            </h2>
            <div className="text-[#101010]/70 space-y-4 text-md lg:text-base leading-relaxed">
              <p>
                Selain legalitas usaha yang sah, {store.name} juga berkomitmen
                menjaga kerahasiaan data pribadi yang diserahkan pelanggan (KTP,
                SIM, Kartu Mahasiswa, dll) sebagai jaminan sewa.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Data jaminan hanya digunakan selama masa penyewaan
                  berlangsung.
                </li>
                <li>
                  Identitas pelanggan disimpan di tempat yang aman dan tidak
                  akan disalahgunakan atau diperjualbelikan kepada pihak ketiga.
                </li>
                <li>
                  Unit iPhone yang dikembalikan akan kami pastikan telah
                  di-reset untuk menjaga privasi data digital Anda.
                </li>
              </ul>
              <p className="mt-6">
                Punya pertanyaan terkait legalitas atau prosedur penyewaan?
                Hubungi kami langsung melalui{" "}
                <a
                  href={`https://wa.me/${store.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <CtaSection></CtaSection>
    </MainLayout>
  );
}
