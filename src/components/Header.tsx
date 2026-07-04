"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-ivory/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-7 py-[18px]">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          Jenny&rsquo;s Cake
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className="rounded-sm bg-espresso px-[18px] py-[9px] text-ivory transition-colors hover:bg-clay-dark"
          >
            Book
          </a>
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`h-[1.5px] w-6 bg-espresso transition-transform duration-200 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-espresso transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-espresso transition-transform duration-200 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-espresso/10 bg-ivory transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-7 py-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-2.5 opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-sm bg-espresso px-[18px] py-2.5 text-center text-ivory transition-colors hover:bg-clay-dark"
          >
            Book
          </a>
        </nav>
      </div>
    </header>
  );
}