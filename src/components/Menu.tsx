"use client"
import Image from "next/image";

const items = [
  {
    title: "Celebration Layer Cake",
    desc: "Blue colored, brown butter, filled and finished to order. Serves 10–24.",
    image: "/images/cake1.jpg"
  },
  {
    title: "Wedding & Event Cakes",
    desc: "Tiered and designed for your wedding and traditional event, and guest count. Tastings by appointment.",
    image: "/images/cake3.jpg",
  },
  {
    title: "Pastry Boxes",
    desc: "Doughnuts, cookies, and mini-cake, well packed and boxed for gifting or your own friends.",
    image: "/images/chops1.jpg",
  },
  {
    title: "Custom Requests",
    desc: "All kinds and sizes, flavours and colours, a shape nobody else will make you — ask, we probably will.",
    image: "/images/cake5.jpg",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="mb-3.5 text-center text-[12.5px] font-semibold uppercase tracking-[0.14em] text-clay-dark">
          The stand
        </p>
        <h2 className="mb-12 text-center font-display text-[1.8rem] font-medium tracking-tight md:text-[2.6rem]">
          What we&rsquo;re baking
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col rounded border border-espresso/10 bg-ivory p-[26px] pb-7 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_30px_-22px_rgba(43,36,32,0.4)]"
            >
              <div className="relative mb-5 h-[220px] w-full overflow-hidden rounded">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="mb-2.5 font-display text-lg font-medium">{item.title}</h3>
              <p className="mb-[18px] flex-1 text-sm text-espresso/75">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
