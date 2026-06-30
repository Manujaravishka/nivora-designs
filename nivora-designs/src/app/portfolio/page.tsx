"use client";

import { motion } from "framer-motion";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";

export default function PortfolioPage() {
  return (
    <>
      <section className="px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-white/40">
              PORTFOLIO
            </p>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl"
            >
              Our Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-lg text-sm leading-relaxed text-white/50"
            >
              Every project is a collaboration between vision and craft. Here is
              a selection of work we&apos;re proud to have created.
            </motion.p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16">
              <PortfolioGrid />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
