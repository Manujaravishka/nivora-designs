"use client";

import { Pen, Layers, Share2, Monitor } from "lucide-react";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { title: "Logo Design", desc: "Memorable brand marks that stand the test of time.", icon: Pen },
  { title: "Branding", desc: "Complete visual identity systems for modern businesses.", icon: Layers },
  { title: "Social Media Design", desc: "Scroll-stopping content for every platform.", icon: Share2 },
  { title: "UI/UX Design", desc: "Intuitive digital experiences that delight users.", icon: Monitor },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-white border-t border-black/10 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-[10px] tracking-[0.3em] text-black/40">
              ABOUT
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-black sm:text-4xl">
              Design That Speaks
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-black/60">
              At NIVORA DESIGNS, we craft visual identities that communicate
              your brand&apos;s essence. Every pixel, every curve, every
              interaction is intentional. We don&apos;t just design — we create
              experiences that leave lasting impressions.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/about"
                className="mt-8 inline-flex h-10 items-center justify-center border border-black/20 px-8 text-[10px] tracking-[0.2em] text-black/60 transition-all hover:border-black hover:text-black"
              >
                LEARN MORE
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-white/40">
              PORTFOLIO
            </p>
            <h2 className="mb-12 text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
              Featured Works
            </h2>
          </Reveal>

          <PortfolioGrid />

          <Reveal delay={0.3} className="mt-12 text-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/portfolio"
                className="inline-flex h-12 w-48 items-center justify-center border border-white text-xs tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
              >
                VIEW ALL
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-t border-black/10 px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-black/40">
              SERVICES
            </p>
            <h2 className="mb-16 text-3xl font-bold tracking-[-0.02em] text-black sm:text-4xl">
              What We Do
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={child}
                  whileHover={{ y: -6 }}
                  className="group cursor-default border border-black/10 p-8 transition-all duration-500 hover:border-black/30 hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="mb-6 h-8 w-8 text-black/30 transition-colors duration-500 group-hover:text-black" strokeWidth={1.2} />
                  </motion.div>
                  <h3 className="text-xl font-bold tracking-[-0.02em] text-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
