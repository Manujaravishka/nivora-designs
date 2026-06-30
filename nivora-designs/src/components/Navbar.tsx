"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="text-lg font-bold tracking-[0.2em] text-white"
        >
          NIVORA
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 sm:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-6 bg-white transition-all ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-white transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-white transition-all ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
          />
        </button>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-6 sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
