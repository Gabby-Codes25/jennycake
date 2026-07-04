const reviews = [
  {
    quote:
      "I ordered three days before the party, fully expecting to be told no. Not only did she say yes, it was the best cake anyone has had.",
    author: "— Martha",
  },
  {
    quote:
      "We booked our wedding cake WhatsApp. Easiest, fast delivery was made without excuses.",
    author: "— Daniel & Osei",
  },
  {
    quote:
      "Found her on TikTok, DMed immediately. Ten out of ten, she responded quickly. I appreciate her work ethic and professionalism. The cake was delicious and beautiful.",
    author: "— Gabriel.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-espresso py-24 text-ivory">
      <div className="mx-auto max-w-[1180px] px-7">
        <p className="mb-3.5 text-center text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brass">
          From the guest book
        </p>
        <h2 className="mb-12 text-center font-display text-[1.8rem] font-medium tracking-tight text-ivory md:text-[2.6rem]">
          Kind words
        </h2>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote
              key={r.author}
              className="rounded border border-ivory/15 p-7"
            >
              <p className="mb-[18px] font-display text-[1.05rem] italic leading-[1.5]">
                {r.quote}
              </p>
              <cite className="text-[13px] not-italic tracking-wide text-brass">
                {r.author}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
