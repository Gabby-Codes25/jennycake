import { links, siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-espresso py-12 text-ivory">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-5 px-7">
        <div>
          <p className="mb-1 font-display text-lg font-semibold">
            {siteConfig.name}
          </p>
          <p className="text-sm text-ivory/60">Home-baked, by appointment.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            WhatsApp
          </a>
          <a
            href={links.email}
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            Email
          </a>
          <a
            href={links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
