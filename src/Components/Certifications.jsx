"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Udyam",
    image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
    file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
  },
  // {
  //   title: "ISO Certified",
  //   image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
  //   file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
  // },
  // {
  //   title: "MSME Registered",
  //   image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
  //   file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
  // },
  // {
  //   title: "Export License",
  //   image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
  //   file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
  // },
];

export default function Certifications() {
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
      id="certifications"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
              Our Certifications
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]"
          >
            Certified For
            <br />
            <span className="text-[var(--primary)]">
              Quality & Compliance.
            </span>
          </motion.h2>
        </div>

        {/* Trust Wall */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 2}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 shadow-sm transition hover:shadow-lg"
            >
              {/* Certificate Image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full object-fit"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  {cert.title}
                </h3>

                <motion.a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-3 inline-flex items-center justify-center gap-1 text-sm font-medium text-[var(--primary)]"
                >
                  View Certificate
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}








// import {
//   ArrowRight,
// } from "lucide-react";

// const certifications = [
//   {
//     title: "WHO-GMP Certified",
//     image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
//     file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
//   },
//   {
//     title: "ISO Certified",
//     image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
//     file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
//   },
//   {
//     title: "MSME Registered",
//     image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
//     file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
//   },
//   {
//     title: "Export License",
//     image: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.jpg",
//     file: "/certificates/REDSON PHARMACEUTICALS PRIVATE LIMITED_MSME UDYAM.pdf",
//   },
// ];

// export default function Certifications() {
//   return (
//     <section
//       id="certifications"
//       className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
//     >
//       <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
//         {/* Heading */}
//         <div>
//           <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
//             <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
//               Our Certifications
//             </span>
//           </div>

//           <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
//             Certified For
//             <br />
//             <span className="text-[var(--primary)]">
//               Quality & Compliance.
//             </span>
//           </h2>
//         </div>

//         {/* Trust Wall */}
//         <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {certifications.map((cert) => (
//             <div
//               key={cert.title}
//               className="group overflow-hidden rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 shadow-sm transition hover:shadow-lg"
//             >
//               {/* Certificate Image */}
//               <div className="aspect-[4/3] overflow-hidden bg-slate-100">
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="h-full w-full object-fit transition duration-300 group-hover:scale-103"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {cert.title}
//                 </h3>

//                 <a
//                   href={cert.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-3 inline-flex items-center justify-center gap-1 text-sm font-medium text-[var(--primary)]"
//                 >
//                   View Certificate
//                   <ArrowRight size={16}/>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }