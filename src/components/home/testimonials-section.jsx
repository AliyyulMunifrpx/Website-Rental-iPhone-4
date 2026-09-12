import { Star } from "lucide-react";

function Rating({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((index) => {
        const value = rating - index;

        if (value >= 1) {
          return (
            <Star key={index} className="w-4 h-4 fill-black text-[#101010]" />
          );
        }

        if (value === 0.5) {
          return (
            <div key={index} className="relative w-4 h-4">
              <Star className="absolute inset-0 w-4 h-4 fill-black/20 text-[#101010]/20" />

              <div className="absolute inset-0 w-1/2 overflow-hidden">
                <Star className="w-4 h-4 fill-black text-[#101010]" />
              </div>
            </div>
          );
        }

        return (
          <Star
            key={index}
            className="w-4 h-4 fill-black/20 text-[#101010]/20"
          />
        );
      })}
    </div>
  );
}

function TestimonialCard({ name, role, text, rating, index }) {
  return (
    <div className="flex flex-col gap-8 h-full">
      <p className="text-md lg:text-xl font-light leading-relaxed text-[#101010]">
        “{text}”
      </p>

      <div className="flex justify-between mt-auto">
        <div>
          <p className="font-semibold text-[#101010] text-lg lg:text-2xl">
            {name}
          </p>
          <p className="text-md text-[#101010]/80">{role}</p>
        </div>

        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Raka",
      role: "Pelanggan iRent",
      rating: 5,
      text: "Prosesnya cepat, unitnya bersih dan sesuai yang dijanjikan.",
    },
    {
      name: "Nadia",
      role: "Pelanggan iRent",
      rating: 4.5,
      text: "Sangat membantu untuk kebutuhan konten. Tinggal pilih unit dan langsung chat.",
    },
    {
      name: "Fajar",
      role: "Pelanggan iRent",
      rating: 5,
      text: "Harganya jelas dari awal dan proses sewanya nggak ribet.",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-16 flex flex-col mt-32 gap-8 lg:gap-16">
      <h2 className="text-[#101010] text-2xl lg:text-4xl text-center lg:text-start w-full">
        Apa{" "}
        <span className=" w-fit text-2xl lg:text-5xl text-[#101010] font-semibold text-start col-end-4">
          Kata Mereka.
        </span>
      </h2>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 -mx-4 px-4 pb-4 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {testimonials.map((item, index) => (
          <div
            key={item.name}
            className="shrink-0 w-full snap-center lg:shrink lg:w-auto lg:snap-none"
          >
            <TestimonialCard
              name={item.name}
              role={item.role}
              text={item.text}
              rating={item.rating}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
