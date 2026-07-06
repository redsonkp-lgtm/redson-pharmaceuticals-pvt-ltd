"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Factory,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const trustItems = [
    {
      icon: ShieldCheck,
      label: "Quality Assurance",
    },
    {
      icon: Factory,
      label: "Contract Manufacturing",
    },
    {
      icon: Globe,
      label: "Export Solutions",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white "
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-8 lg:px-10 lg:py-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5"
            >
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] text-[var(--primary)] leading-snug">
Integrated Pharmaceutical Manufacturing Solutions              </span>
            </motion.div>

            {/* Heading */}
            <div className="mt-5 sm:mt-6">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[62px]"
              >
                <span className="text-[var(--primary)]">WHO-GMP Certified</span>
                <br />
                Pharmaceutical Manufacturing

                <br />
                <span >
Company in India
                </span>
                
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg"
              >
                REDSON Pharmaceuticals Private Limited is a trusted
                pharmaceutical manufacturer, exporter, and supplier
                specializing in tablets, capsules, injectables,
                liquid orals, eye drops, veterinary products, and
                specialty healthcare formulations.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-black bg-black px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-black active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">
                  Request Manufacturing Quote
                </span>

                <ArrowRight
                  size={16}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6"
            >
              {trustItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    custom={index + 5}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <Icon
                        size={16}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              className="overflow-hidden rounded-[24px] sm:rounded-[32px] border border-slate-200 bg-slate-100 shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
            >
              <Image
                src="/hero.webp"
                alt="REDSON Pharmaceuticals Manufacturing Facility"
                width={900}
                height={1000}
                className="h-[280px] w-full object-cover sm:h-[360px] md:h-[520px] lg:h-[520px] xl:h-[560px]"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute bottom-2 left-2 right-2 rounded-[20px] border border-white/30 bg-white/90 p-3 sm:p-4 md:p-5 shadow-xl backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 md:bottom-8 md:left-8 md:right-8"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {["100%", "GMP", "Global"].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className={`flex flex-col items-center text-center px-1 sm:px-3 ${
                      i === 0
                        ? "border-r border-[var(--primary)]/40"
                        : i === 2
                        ? "border-l border-[var(--primary)]/40"
                        : ""
                    }`}
                  >
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900">
                      {item}
                    </h3>
                    <p className="mt-1 text-[9px] sm:text-xs md:text-sm text-slate-500 leading-tight">
                      {i === 0
                        ? "Quality Focus"
                        : i === 1
                        ? "Compliant"
                        : "Export Support"}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





