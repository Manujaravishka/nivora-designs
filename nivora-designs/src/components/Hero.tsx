"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/hero-bg-1.jpg",
  "/hero-bg-2.jpg",
  "/hero-bg-3.jpg",
  "/hero-bg-4.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden px-6 sm:px-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-xs tracking-[0.3em] text-white/40"
        >
          EST. 2024
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl font-bold tracking-[-0.02em] text-white sm:text-7xl lg:text-8xl"
        >
          NIVORA
          <br />
          DESIGNS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-md text-sm tracking-[0.25em] text-white/50"
        >
          CREATIVE GRAPHIC DESIGN STUDIO
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/portfolio"
            className="inline-flex h-12 w-48 items-center justify-center border border-white text-xs tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
          >
            VIEW WORK
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 w-48 items-center justify-center border border-white/20 text-xs tracking-[0.2em] text-white/60 transition-all hover:border-white hover:text-white"
          >
            CONTACT US
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[2px] w-8 transition-all duration-500 ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
