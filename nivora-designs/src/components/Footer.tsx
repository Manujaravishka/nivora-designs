import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div>
            <p className="text-lg font-bold tracking-[0.2em] text-white">
              NIVORA
            </p>
            <p className="mt-1 text-xs tracking-widest text-white/40">
              CREATIVE GRAPHIC DESIGN STUDIO
            </p>
          </div>

          <div className="flex gap-8 text-xs tracking-widest text-white/40">
            <Link href="/portfolio" className="transition-colors hover:text-white">
              PORTFOLIO
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              ABOUT
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              CONTACT
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-[10px] tracking-[0.15em] text-white/30">
          &copy; {new Date().getFullYear()} NIVORA DESIGNS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
