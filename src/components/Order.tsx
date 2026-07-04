import { links, siteConfig } from "@/config/site";

const tickets = [
  {
    index: "01",
    title: "WhatsApp",
    desc: "Fastest for quick questions, flavor picks, or sending inspiration photos.",
    detail: "+234 708 436 0923",
    cta: "Message us →",
    href: links.whatsapp,
  },
  {
    index: "02",
    title: "Email",
    desc: "Best for full order details — date, guest count, allergies, and design notes.",
    detail: siteConfig.email,
    cta: "Send details →",
    href: links.email,
  },
  {
    index: "03",
    title: "TikTok",
    desc: "See the latest cakes coming out of the kitchen, then DM us to book yours.",
    detail: siteConfig.tiktokHandle,
    cta: "Watch & DM →",
    href: links.tiktok,
  },
];

export default function Order() {
  return (
    <section id="order" className="bg-ivory-2 py-[100px]">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="mb-3.5 text-center text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brass">
          Placing an order
        </p>
        <h2 className="mb-3 text-center font-display text-[1.8rem] font-medium tracking-tight md:text-[2.6rem]">
          Pick your ticket
        </h2>
        <p className="mx-auto mb-14 max-w-[52ch] text-center text-espresso/75">
          Three ways to reach the kitchen. Choose whichever feels easiest —
          we read all three ourselves.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tickets.map((t) => (
            <a
              key={t.title}
              href={t.href}
              target={t.title === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-sm border border-espresso/10 bg-ivory p-[26px] pt-8 shadow-[0_24px_34px_-26px_rgba(43,36,32,0.35)] transition-all duration-200 hover:-translate-y-1.5 hover:rotate-[-0.4deg] hover:border-clay hover:shadow-[0_30px_42px_-24px_rgba(43,36,32,0.45)]"
            >
              <span className="absolute left-6 top-0 h-4 w-px border-l border-dashed border-espresso/15" />
              <span className="mb-3.5 block font-display text-[13px] italic text-clay-dark">
                {t.index}
              </span>
              <h3 className="mb-2.5 font-display text-[1.3rem] font-medium">
                {t.title}
              </h3>
              <p className="mb-[18px] flex-1 text-sm text-espresso/75">
                {t.desc}
              </p>
              <span className="mb-2.5 border-t border-espresso/10 pt-3.5 text-[13.5px] font-semibold tracking-wide">
                {t.detail}
              </span>
              <span className="text-[13px] font-semibold text-clay-dark">
                {t.cta}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
