"use client";

import Image from "next/image";
import Link from "next/link";

import { Search } from "lucide-react";
import { useState } from "react";

import { iPhones } from "../../data/iphones.js";

function formatPrice(price) {
  return `Rp${price.toLocaleString("id-ID")}`;
}

function slugify(name) {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}

function PhoneCard({ url, name, price, index }) {
  const slug = slugify(name);

  return (
    <div className="w-full h-auto">
      <Link
        href={`/sewa-iphone/${slug}`}
        className="w-full h-full lg:p-4 flex flex-col gap-4"
      >
        <Image
          alt={name}
          src={url}
          width={400}
          height={400}
          className="w-full aspect-square lg:hover:scale-105 transition ease-out"
        />

        <h4 className="text-[#101010] w-full text-center font-bold text-md lg:text-2xl">
          {name}
        </h4>

        <div className="flex gap-4 w-full justify-between items-center">
          <div className="flex flex-col items-start">
            <p className="text-sm lg:text-md text-[#101010]/80">Mulai</p>

            <div className="flex items-baseline gap-1">
              <p className="text-md lg:text-xl text-[#101010] font-bold">
                {formatPrice(price)}
              </p>
            </div>
          </div>

          <span className="px-4 py-2 whitespace-nowrap text-center rounded-full bg-[#0148e4] hover:bg-[#0148e4]/90 text-white text-xs lg:text-md">
            Detail
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function IphoneCatalog() {
  const [search, setSearch] = useState("");

  const filteredIPhones = iPhones.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="h-auto w-full flex flex-col mt-24 justify-start items-center px-4 lg:px-16 gap-16">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <h1 className="text-[#101010] text-2xl lg:text-4xl text-center lg:text-start">
          Katalog{" "}
          <span className=" w-fit text-2xl lg:text-5xl text-[#101010] font-semibold text-start col-end-4">
            iPhone
          </span>
        </h1>

        <div className="relative w-full lg:w-80">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#101010]/50"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari iPhone..."
            className="w-full rounded-full border border-[#101010]/15 bg-white py-3 pl-12 pr-5 text-sm text-[#101010] outline-none transition focus:border-[#101010]/40"
          />
        </div>
      </div>

      {filteredIPhones.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 h-full w-full gap-8">
          {filteredIPhones.map((item, i) => (
            <PhoneCard
              key={item.name}
              url={item.url}
              name={item.name}
              price={item.prices[0].price}
              index={i}
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-20 text-center">
          <p className="text-[#101010]/60">
            iPhone yang kamu cari tidak ditemukan.
          </p>
        </div>
      )}
    </section>
  );
}
