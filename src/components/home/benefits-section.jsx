import { ShieldCheck, Zap, Wallet, ArrowRight, Truck } from "lucide-react";
import Link from "next/link.js";
import { store } from "../../data/store.js";

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="flex-1 flex flex-col items-start gap-8 rounded-none ">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#101010]">
        <Icon className="w-6 h-6 text-white " />
      </div>
      <div className="flex flex-col gap-4">
        {" "}
        <h3 className="text-[#101010] font-bold text-lg lg:text-2xl">
          {title}
        </h3>
        <p className="text-[#101010]/80 text-md text-justify">{description}</p>
      </div>
    </div>
  );
}

export default function BenefitSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Unit Original & Terawat",
      description:
        "Semua unit terjamin original dan dirawat dengan baik agar tetap nyaman digunakan selama masa sewa.",
    },
    {
      icon: Zap,
      title: "Proses Cepat",
      description:
        "Pesan hari ini, proses langsung kami tangani agar unit bisa segera kamu gunakan.",
    },
    {
      icon: Wallet,
      title: "Harga Transparan",
      description:
        "Harga yang kamu lihat adalah harga yang kamu bayar, tanpa biaya tambahan yang muncul tiba-tiba.",
    },
    {
      icon: Truck,
      title: "Free COD",
      description:
        "Bisa ketemuan langsung untuk mengambil unit tanpa biaya pengantaran tambahan.",
    },
  ];

  return (
    <section className=" w-full flex flex-col justify-start mt-32 items-center  px-4 lg:px-16 gap-16">
      <h2 className="text-[#101010] text-2xl lg:text-4xl text-center lg:text-start w-full">
        Kenapa Harus{" "}
        <span className=" w-fit text-2xl lg:text-5xl text-[#101010] font-semibold text-start col-end-4">
          {store.name}?
        </span>{" "}
      </h2>
      <div className="w-full h-full grid grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((item) => (
          <BenefitCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex h-full w-full flex justify-center items-center">
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
