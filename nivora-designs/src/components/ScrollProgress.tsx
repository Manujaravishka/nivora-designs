"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="fixed right-[7px] top-0 z-[60] h-full w-[2px] bg-white/10 max-sm:right-[5px]" />
      <motion.div
        className="fixed right-[7px] top-0 z-[60] w-[2px] origin-top bg-[#ff0000] shadow-[0_0_6px_#ff0000] max-sm:right-[5px]"
        style={{ scaleY }}
      />
    </>
  );
}
