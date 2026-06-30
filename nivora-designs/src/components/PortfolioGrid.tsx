"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "LUXE BRAND", category: "Branding", image: "/portfolio-1.jpg", cols: "sm:col-span-2 sm:row-span-1" },
  { id: 2, title: "MINIMALIST LOGO", category: "Logo Design", image: "/portfolio-2.jpg", cols: "" },
  { id: 3, title: "SOCIAL CAMPAIGN", category: "Social Media", image: "/portfolio-3.jpg", cols: "" },
  { id: 4, title: "ECO PACKAGING", category: "Packaging", image: "/portfolio-4.jpg", cols: "sm:col-span-2" },
  { id: 5, title: "DASHBOARD UI", category: "UI/UX Design", image: "/portfolio-5.jpg", cols: "" },
  { id: 6, title: "FASHION BRAND", category: "Branding", image: "/portfolio-6.jpg", cols: "sm:col-span-2" },
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-3">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`group relative aspect-square cursor-pointer overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/30 ${project.cols}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 right-0 translate-y-4 px-6 pb-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-xl font-bold tracking-[-0.02em] text-white">
              {project.title}
            </p>
            <p className="mt-1 text-[10px] tracking-[0.25em] text-white/60">
              {project.category}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}
    </div>
  );
}
