import { ArrowRight } from "lucide-react";
import Link from "next/link.js";

function StepCard({ number, title, description, isFirst }) {
  return (
    <div
      className={`flex-1 flex flex-col gap-8 ${
        isFirst ? "" : "border-0 border-black/10"
      }`}
    >
      <p className="text-5xl font-bold text-[#101010] ">{number}</p>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#101010] font-bold text-lg lg:text-2xl">
          {title}
        </h3>
        <p className="text-[#101010]/80 text-justify text-md">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Pilih Unit",
      description: "Temukan iPhone yang sesuai dengan kebutuhanmu.",
    },
    {
      number: "02",
      title: "Isi Formulir Penyewaan",
      description: "Tentukan unit, tanggal, durasi, dan metode penerimaan.",
    },
    {
      number: "03",
      title: "Kirim ke WhatsApp",
      description: "Detail pesanan otomatis dikirim ke tim iRent.",
    },
    {
      number: "04",
      title: "Konfirmasi",
      description: "Kami konfirmasi ketersediaan dan detail penyewaanmu.",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-start mt-32 items-center px-4 lg:px-16 gap-16">
      <h2 className=" w-full text-2xl lg:text-5xl  text-[#101010] font-semibold text-start col-end-4">
        Semudah Ini
      </h2>
      <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, index) => (
          <StepCard
            key={item.number}
            number={item.number}
            title={item.title}
            description={item.description}
            isFirst={index === 0}
          />
        ))}
      </div>
      <div className="flex h-full w-full flex justify-center items-center">
        <Link
          href="/sewa-iphone"
          className=" px-6 py-2 text-white bg-[#0148e4] rounded-full hover:bg-[#0148e4]/90"
        >
          Sewa iPhone
        </Link>
      </div>
    </section>
  );
}
