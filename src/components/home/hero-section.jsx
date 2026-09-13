import Image from "next/image.js";
import Link from "next/link.js";
import { store } from "../../data/store.js";

export default function HeroSection() {
  return (
    <section className="relative grid grid-cols-3 grid-rows-3 h-[100dvh] w-full ">
      {/* CONTAINER GAMBAR */}
      <div className="flex justify-center col-start-1 col-end-4 row-start-1 row-end-3 lg:row-end-4 w-full h-full">
        <Image
          alt=""
          src="/assets/iphone.webp"
          width={1500}
          height={1500}
          className="object-contain translate-y-[140%] md:translate-y-[130%] lg:translate-y-[75%] w-[60%] h-[60%] lg:w-[80%] lg:h-[80%]"
        />
      </div>

      {/* CONTAINER TEKS & TOMBOL (Tambahkan relative dan z-10 di sini) */}
      <div className="relative z-10 col-start-1 w-full row-start-1 lg:row-start-1 flex flex-col justify-center lg:justify-center items-center row-end-3 col-end-4">
        <h1 className="text-[#353535] w-full text-3xl lg:text-5xl text-center ">
          Sewa iPhone {store.city}
        </h1>

        <p className=" w-fit text-2xl lg:text-5xl bg-gradient-to-r py-2 mt-2 from-[#353535] to-[#0148e4] via-[#fe6101] bg-clip-text text-transparent font-semibold text-center col-end-4">
          Termurah, Terlengkap, di Jogja
        </p>

        <div className="flex mt-8">
          <Link
            href="/sewa-iphone"
            className=" px-6 py-2 text-white bg-[#0148e4] rounded-full hover:bg-[#0148e4]/90"
          >
            Pilih Unit
          </Link>
        </div>

        <div className="flex mt-8">
          <div className="border-r border-black px-2 flex min-w-35 flex-col items-center justify-center">
            <p className="font-bold text-black text-xl ">5000+</p>
            <p className="text-black text-md">Pelanggan</p>
          </div>
          <div className=" flex flex-col px-2 min-w-35  items-center justify-center">
            <p className="font-bold text-black text-xl ">5400+</p>
            <p className="text-black text-md">Unit Tersewa</p>
          </div>
          <div className="border-l border-black min-w-35  px-2 flex flex-col items-center justify-center">
            <p className="font-bold text-black text-xl ">4.9/5.0</p>
            <p className="text-black text-md">500+ Penilaian</p>
          </div>
        </div>
      </div>
    </section>
  );
}
