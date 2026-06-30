"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const child = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white px-6 pb-24 pt-32 sm:px-10 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-2 text-[10px] tracking-[0.3em] text-black/40">
              CONTACT
            </p>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-[-0.02em] text-black sm:text-5xl"
            >
              Get in Touch
            </motion.h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-black/60">
              Ready to bring your vision to life? Reach out and let&apos;s start
              a conversation.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p variants={child} className="mb-8 text-xs tracking-[0.2em] text-black/40">
                SEND US A MESSAGE
              </motion.p>
              <motion.div variants={child}>
                <ContactForm />
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="space-y-12"
            >
              <motion.div variants={child}>
                <p className="mb-6 text-xs tracking-[0.2em] text-black/40">
                  REACH US DIRECTLY
                </p>

                <div className="space-y-6">
                  <motion.a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4 border border-black/10 px-6 py-4 transition-all hover:border-black/30"
                  >
                    <span className="text-lg tracking-[-0.02em] text-black">WhatsApp</span>
                    <span className="text-[10px] tracking-[0.15em] text-black/40 transition-colors group-hover:text-black/60">
                      +1 (234) 567-890
                    </span>
                  </motion.a>

                  <motion.a
                    href="mailto:hello@nivoradesigns.com"
                    whileHover={{ x: 6 }}
                    className="group flex items-center gap-4 border border-black/10 px-6 py-4 transition-all hover:border-black/30"
                  >
                    <span className="text-lg tracking-[-0.02em] text-black">Email</span>
                    <span className="text-[10px] tracking-[0.15em] text-black/40 transition-colors group-hover:text-black/60">
                      hello@nivoradesigns.com
                    </span>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div variants={child}>
                <p className="mb-6 text-xs tracking-[0.2em] text-black/40">
                  STUDIO OWNER
                </p>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border border-black/10 p-8 transition-all hover:border-black/30 hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ rotate: 6 }}
                    className="flex h-16 w-16 items-center justify-center border border-black/20 bg-black/[0.03]"
                  >
                    <span className="text-lg font-bold tracking-[-0.02em] text-black">
                      ND
                    </span>
                  </motion.div>

                  <p className="mt-6 text-lg font-bold tracking-[-0.02em] text-black">
                    Nivora Studio Owner
                  </p>
                  <p className="mt-1 text-xs tracking-[0.15em] text-black/40">
                    Creative Director
                  </p>

                  <div className="mt-6 space-y-3 text-xs tracking-[0.15em] text-black/40">
                    <p>+1 (234) 567-890</p>
                    <p>owner@nivoradesigns.com</p>
                  </div>

                  <div className="mt-6 flex gap-4 border-t border-black/10 pt-6">
                    {["INSTAGRAM", "FACEBOOK"].map((link, i) => (
                      <motion.a
                        key={link}
                        href={`https://${link.toLowerCase()}.com/nivoradesigns`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="text-[10px] tracking-[0.2em] text-black/40 transition-colors hover:text-black"
                      >
                        {link}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
