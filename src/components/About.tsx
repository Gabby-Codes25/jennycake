import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-ivory-2 py-16 md:py-[88px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-7 md:grid-cols-[1fr_1fr] md:gap-12">
        <div>
          <span className="mb-5 block font-display text-[4rem] italic leading-none text-clay md:text-[6rem]">
            &ldquo;
          </span>
          <p className="mb-5 max-w-[32ch] font-display text-xl font-medium leading-[1.35] md:text-[1.5rem]">
            Hi, I&rsquo;m Jenny. Welcome to my kitchen.
          </p>
          <p className="max-w-[62ch] text-espresso/80">
            We run all of our cakes and pastries from a small kitchen in the heart of the Umuahia. I love what I do. Every cake is made with care, and every pastry is baked to perfection. I hope you enjoy our treats as much as I enjoy making them.
          </p>
          <p className="mt-6 italic text-clay-dark">
            — Jenny appreciates your support.
          </p>
        </div>

        <div className="relative mx-auto h-[320px] w-[240px] overflow-hidden rounded-[9999px] shadow-[0_30px_50px_-20px_rgba(43,36,32,0.35)] sm:h-[380px] sm:w-[280px] md:h-[470px] md:w-[350px]">
          <Image
            src="/images/BrandOwner.jpg"
            alt="Jenny, founder of Jenny's Cake"
            fill
            sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}