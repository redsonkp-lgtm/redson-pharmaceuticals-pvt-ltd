"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/g1.webp",
  "/g2.webp",
  "/g3.webp",
  "/g4.webp",
  "/g5.webp",
  "/g6.webp",
  "/g7.webp",
  "/g8.webp",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
    },
  }),
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-12">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Our Gallery
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mt-4 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]"
          >
            Inside Our
            <br />
            <span className="text-[var(--primary)]">
              Manufacturing Facilities.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-5 max-w-2xl text-slate-600 leading-relaxed"
          >
            Explore our advanced pharmaceutical manufacturing
            infrastructure, quality systems, and production environments.
          </motion.p>
        </div>

        {/* Modern Gallery */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 4}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100
              ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }
              ${
                index === 3 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
              />

              {/* Floating Label */}
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}








// import Image from "next/image";

// const galleryImages = [
//   "/gallery-1.jpg",
//   "/gallery-2.jpg",
//   "/gallery-3.jpg",
//   "/gallery-4.jpg",
//   "/gallery-5.jpg",
//   "/gallery-6.jpg",
//   "/gallery-7.jpg",
//   "/gallery-8.jpg",
// ];

// export default function Gallery() {
//   return (
//     <section id="gallery" className="relative overflow-hidden bg-white py-12">
//       <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
//         {/* Header */}
//         <div className="max-w-4xl">
//           <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
//             <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
//               Our Gallery
//             </span>
//           </div>

//           <h2 className="mt-4 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
//             Inside Our
//             <br />
//             <span className="text-[var(--primary)]">
//               Manufacturing Facilities.
//             </span>
//           </h2>

//           <p className="mt-5 max-w-2xl text-slate-600 leading-relaxed">
//             Explore our advanced pharmaceutical manufacturing
//             infrastructure, quality systems, and production environments.
//           </p>
//         </div>
        
//         {/* Modern Gallery */}
//         <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px]">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className={`group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100
//               ${
//                 index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
//               }
//               ${
//                 index === 3 ? "lg:row-span-2" : ""
//               }`}
//             >
//               <div className="absolute inset-0">
//                 <Image
//                   src={image}
//                   alt={`Gallery ${index + 1}`}
//                   fill
//                   className="object-cover transition duration-700 ease-out group-hover:scale-110"
//                 />
//               </div>

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

//               {/* Floating Label */}
//               <div className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg">
//                 <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
//                   Facility {index + 1}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }