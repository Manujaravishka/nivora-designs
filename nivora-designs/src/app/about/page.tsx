"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-black/40">
              ABOUT
            </p>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-[-0.02em] text-black sm:text-5xl"
            >
              Our Story
            </motion.h1>
          </Reveal>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-16 grid gap-16 sm:grid-cols-2"
          >
            <motion.div variants={child}>
              <p className="text-xs tracking-[0.2em] text-black/40">WHO WE ARE</p>
              <h2 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-black">
                A Studio Built on Purpose
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-black/60">
                NIVORA DESIGNS was founded with a simple belief: great design
                has the power to transform businesses. What started as a
                one-person operation has grown into a boutique studio serving
                clients worldwide.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black/60">
                We work across branding, print, digital, and UI/UX — always
                pushing for clarity, elegance, and meaning in everything we
                create.
              </p>
            </motion.div>

            <motion.div variants={child} className="space-y-16">
              <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 200 }}>
                <p className="text-xs tracking-[0.2em] text-black/40">VISION</p>
                <p className="mt-4 text-base leading-relaxed text-black/70">
                  To be the leading creative force behind brands that dare to be
                  different — shaping visual culture one project at a time.
                </p>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 200 }}>
                <p className="text-xs tracking-[0.2em] text-black/40">MISSION</p>
                <p className="mt-4 text-base leading-relaxed text-black/70">
                  To deliver exceptional design solutions that communicate brand
                  stories with clarity, creativity, and purpose — elevating
                  businesses through the power of visual communication.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <Reveal delay={0.3}>
            <motion.div className="mt-24 border-t border-black/10 pt-16">
              <p className="mb-2 text-[10px] tracking-[0.3em] text-black/40">
                STUDIO OWNER
              </p>
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">
                Meet the Founder
              </h2>

              <div className="mt-10 grid gap-10 sm:grid-cols-[200px_1fr] sm:gap-16">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden border border-black/10"
                >
                  <Image
                    src="/owner.jpg"
                    alt="Studio Owner"
                    fill
                    className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
                    sizes="200px"
                  />
                </motion.div>

                <div>
                  <p className="text-xl font-bold tracking-[-0.02em] text-black">
                    Nivora Studio Owner
                  </p>
                  <p className="mt-1 text-xs tracking-[0.2em] text-black/40">
                    CREATIVE DIRECTOR & FOUNDER
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-black/60">
                    With over a decade of experience in visual design, I founded
                    NIVORA DESIGNS to bridge the gap between creative vision and
                    business strategy. Every project is a partnership — I believe
                    the best work comes from listening, understanding, and pushing
                    creative boundaries.
                  </p>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="mt-6 space-y-2 text-sm text-black/50"
                  >
                    <motion.p variants={child}>+1 (234) 567-890</motion.p>
                    <motion.p variants={child}>owner@nivoradesigns.com</motion.p>
                  </motion.div>

                  <div className="mt-5 flex gap-5">
                    {["INSTAGRAM", "FACEBOOK", "LINKEDIN"].map((link, i) => (
                      <motion.a
                        key={link}
                        href={`https://${link.toLowerCase()}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ y: -2 }}
                        className="text-[10px] tracking-[0.2em] text-black/40 transition-colors hover:text-black"
                      >
                        {link}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.4}>
            <motion.div className="mt-24 border-t border-black/10 pt-16 text-center">
              <p className="text-xs tracking-[0.3em] text-black/40">
                LET&apos;S CREATE TOGETHER
              </p>
              <p className="mt-4 text-2xl font-bold tracking-[-0.02em] text-black">
                Have a project in mind?
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="/contact"
                  className="mt-8 inline-flex h-12 w-48 items-center justify-center border border-black text-xs tracking-[0.2em] text-black transition-all hover:bg-black hover:text-white"
                >
                  GET IN TOUCH
                </a>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
