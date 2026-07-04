export default function Hero() {
  return (
    <section id="top" className="overflow-hidden py-24 md:py-[96px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-7 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <div>
          <p className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-clay-dark">
            Small-batch · Made to order · Est. in a home kitchen
          </p>
          <h1 className="mb-6 font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight md:text-[4.1rem]">
            Cakes worth
            <br />
            clearing the table for.
          </h1>
          <p className="mb-9 max-w-[44ch] text-[1.05rem] text-espresso/80">
            Every order is mixed, filled, and finished by hand — one cake at a
            time, one kitchen, no shortcuts. Tell us the occasion, we&rsquo;ll
            do the rest.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#order"
              className="inline-block rounded-sm bg-espresso px-7 py-3.5 text-sm font-semibold text-ivory transition-all hover:-translate-y-0.5 hover:bg-clay-dark"
            >
              Book your cake
            </a>
            <a
              href="#menu"
              className="inline-block rounded-sm border border-espresso/15 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-espresso"
            >
              See the menu
            </a>
          </div>
        </div>

        <div className="relative flex justify-center" aria-hidden="true">
          <div className="animate-rise relative flex h-[280px] w-[280px] flex-col-reverse items-center">
            <div className="z-[1] -mb-1.5 h-[70px] w-[230px] rounded-md bg-clay shadow-[0_18px_30px_-14px_rgba(43,36,32,0.35)]" />
            <div className="z-[2] -mb-1.5 h-16 w-[185px] rounded-md border border-espresso/15 bg-ivory-2 shadow-[0_18px_30px_-14px_rgba(43,36,32,0.35)]" />
            <div className="z-[3] h-[58px] w-[145px] rounded-md bg-sage shadow-[0_18px_30px_-14px_rgba(43,36,32,0.35)]" />
            <div className="absolute -top-3.5 left-1/2 z-[4] h-5 w-5 -translate-x-1/2 rounded-full bg-brass shadow-[0_6px_10px_-4px_rgba(43,36,32,0.4)]" />
          </div>
          <div className="absolute -bottom-1.5 right-1.5 rounded-full border border-espresso/15 bg-ivory px-3.5 py-1.5 font-display text-sm italic">
            Today&rsquo;s stand
          </div>
        </div>
      </div>
    </section>
  );
}
