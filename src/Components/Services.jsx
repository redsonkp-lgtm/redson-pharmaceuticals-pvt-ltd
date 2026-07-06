"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Contract Manufacturing",
    description:
      "Complete pharmaceutical manufacturing solutions from formulation to final production, built for scalability, consistency, and regulatory compliance.",
  },
  {
    title: "Third Party Manufacturing",
    description:
      "Reliable third-party manufacturing partnerships that help businesses expand product portfolios while reducing operational overhead.",
  },
  {
    title: "Private Label Manufacturing",
    description:
      "Custom branding, product labeling, and packaging solutions designed to launch pharmaceutical products under your brand identity.",
  },
  {
    title: "Custom Packaging Solutions",
    description:
      "Flexible packaging formats, artwork assistance, and market-ready packaging solutions tailored for domestic and export requirements.",
  },
];

export default function Services() {
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
      id="services"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]"
          >
            Manufacturing Solutions
            <br />
            <span className="text-[var(--primary)]">
              Built Around Your Brand.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Flexible pharmaceutical services designed to support
            product development, manufacturing, packaging, branding,
            and global business expansion.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="mt-10 sm:mt-12 lg:mt-14 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/40 bg-white shadow-sm">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 2}
              whileHover={{ y: 0 }}
              className={`group relative transition-all duration-300 hover:bg-slate-50 ${
                index !== services.length - 1
                  ? "border-b border-[var(--primary)]/40"
                  : ""
              }`}
            >
              <motion.div
                className="absolute left-0 top-0 h-full w-px md:w-[50px] bg-[var(--primary)]/20 group-hover:bg-[var(--primary)]"
                whileHover={{ width: 60 }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex flex-col gap-5 sm:gap-6 py-6 sm:py-8 pl-4 sm:pl-6 pr-4 md:flex-row md:items-center md:justify-between">
                
                {/* Left Content */}
                <div className="flex gap-4 sm:gap-6">
                  <span className="text-sm z-1 font-semibold text-[var(--primary)] md:group-hover:text-[white] shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="max-w-3xl">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>

                    <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-slate-600 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Inline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 flex flex-col gap-5 border-t border-[var(--primary)]/40 pt-6 sm:pt-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[var(--primary)]">
              Partnership Driven Manufacturing
            </p>

            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              From formulation support and manufacturing to packaging
              and export assistance, REDSON Pharmaceuticals helps
              healthcare brands launch and scale products efficiently.
            </p>
          </div>

          <a
            href="#contact"
            className="group flex w-full sm:w-fit min-h-[48px] items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Request Consultation
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}








// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// const services = [
//   {
//     title: "Contract Manufacturing",
//     description:
//       "Complete pharmaceutical manufacturing solutions from formulation to final production, built for scalability, consistency, and regulatory compliance.",
//   },
//   {
//     title: "Third Party Manufacturing",
//     description:
//       "Reliable third-party manufacturing partnerships that help businesses expand product portfolios while reducing operational overhead.",
//   },
//   {
//     title: "Private Label Manufacturing",
//     description:
//       "Custom branding, product labeling, and packaging solutions designed to launch pharmaceutical products under your brand identity.",
//   },
//   {
//     title: "Custom Packaging Solutions",
//     description:
//       "Flexible packaging formats, artwork assistance, and market-ready packaging solutions tailored for domestic and export requirements.",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16"
//     >
//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
//         {/* Header */}
//         <div className="max-w-5xl">
//           <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
//             <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
//               Our Services
//             </span>
//           </div>

//           <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
//             Manufacturing Solutions
//             <br />
//             <span className="text-[var(--primary)]">
//               Built Around Your Brand.
//             </span>
//           </h2>

//           <p className="mt-5 sm:mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg">
//             Flexible pharmaceutical services designed to support
//             product development, manufacturing, packaging, branding,
//             and global business expansion.
//           </p>
//         </div>

//         {/* Services List */}
//         <div className="mt-10 sm:mt-12 lg:mt-14 overflow-hidden rounded-[24px] sm:rounded-[28px] border border-[var(--primary)]/40 bg-white shadow-sm">
//           {services.map((service, index) => (
//             <div
//               key={service.title}
//               className={`group relative transition-all duration-300 hover:bg-slate-50 ${
//                 index !== services.length - 1
//                   ? "border-b border-[var(--primary)]/40"
//                   : ""
//               }`}
//             >
//               <div className="absolute left-0 top-0 h-full w-px md:w-[50px] bg-[var(--primary)]/20 transition-all duration-300 group-hover:bg-[var(--primary)]" />

//               <div className="flex flex-col gap-5 sm:gap-6 py-6 sm:py-8 pl-4 sm:pl-6 pr-4 md:flex-row md:items-center md:justify-between">
//                 {/* Left Content */}
//                 <div className="flex gap-4 sm:gap-6">
//                   <span className="text-sm z-1 font-semibold text-[var(--primary)] md:group-hover:text-[white] shrink-0">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <div className="max-w-3xl">
//                     <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
//                       {service.title}
//                     </h3>

//                     <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-slate-600 md:text-base">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <a
//                   href={`https://wa.me/918866003844?text=${encodeURIComponent(
//                     `Hello, I'm interested in your ${service.title} service. I would like to know more about the process, pricing, and partnership details.`
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-all duration-300 group-hover:gap-3"
//                 >
//                   Learn More

//                   <ArrowRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Inline CTA */}
//         <div className="mt-6 flex flex-col gap-5 border-t border-[var(--primary)]/40 pt-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
//           <div>
//             <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[var(--primary)]">
//               Partnership Driven Manufacturing
//             </p>

//             <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
//               From formulation support and manufacturing to packaging
//               and export assistance, REDSON Pharmaceuticals helps
//               healthcare brands launch and scale products efficiently.
//             </p>
//           </div>
//           <a
//               href="#contact"
//               className="group flex w-full sm:w-fit min-h-[48px] items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
//             >
//               Request Consultation
//               <ArrowRight
//                 size={15} 
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </a>
//         </div>
//       </div>
//     </section>
//   );
// }