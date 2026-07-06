"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
      { label: "Home", href: "#hero" },

  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Manufacturing", href: "#manufacturingcapabilities" },
  { label: "Quality", href: "#quality" },
  { label: "Export", href: "#export" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Contract Manufacturing", href: "#contractmanufacturing" },
  { label: "Third Party Manufacturing", href: "#thirdpartymanufacturing" },
  { label: "Private Labeling", href: "#services" },
  { label: "Export Services", href: "#exportservices" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--primary)] blur-[120px]"
      />

      {/* CTA Strip */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="border-b border-white/30"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Ready To Partner?
            </p>

            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              Start Your Pharmaceutical Manufacturing Journey.
            </h3>
          </div>

          <div className="grid md:grid-cols-[1fr_0.7fr] gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-white border border-[white] transition hover:scale-[1.02]"
            >
              Request Consultation
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
                <ArrowUpRight
                  size={16}
                  className="group-hover:-rotate-[405deg] transition-all duration-500"
                />
              </div>
            </a>

            <a
              href="tel:+918866003844"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-[var(--primary)] px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
            >
              Call Now
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
                <Phone
                  size={16}
                  className="group-hover:rotate-[360deg] transition-all duration-500"
                />
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 xl:grid-cols-4"
        >
          {/* Company Info */}
          <motion.div variants={fadeUp} custom={1}>
            <div className="flex-col items-start justify-start">
              <div className="flex items-start">
                <div
                >
                  <Link href="#hero" className="shrink-0">
                    <Image
                      src="/logo-footer-white-temp-01.png"
                      alt="Redson Pharmaceutical"
                      width={1000}
                      height={1000}
                      priority
                      className="w-auto h-[38px] md:h-[42px] lg:h-[46px] xl:h-[50px]"
                    />
                  </Link>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Trusted pharmaceutical manufacturing partner specializing
                in contract manufacturing, private labeling, packaging,
                and export-ready healthcare solutions.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>

            <div className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h4>

            <div className="mt-5 space-y-3">
              {services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={4}>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-5">
              <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
                <Phone size={16} className="mt-1 text-[var(--primary)]" />
                <a
                  href="tel:+918866003844"
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  +91 8866003844
                </a>
              </div>

              <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
                <Mail size={16} className="mt-1 text-[var(--primary)]" />
                <a
                  href="mailto:info@redsongroup.in"
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  info@redsongroup.in
                </a>
              </div>

              <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
                <MapPin size={16} className="mt-1 text-[var(--primary)]" />
                <p className="text-sm">
                  Office Address:{" "}
                  <span className="text-white/70">
                    2, Radhe Kutir Bunglows, Near Safal Bunglows, Village Bhat,
                    Dist.- Gandhinagar - 382428, Gujarat, India.
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
                <Factory size={16} className="mt-1 text-[var(--primary)]" />
                <p className="text-sm">
                  Factory Address:{" "}
                  <span className="text-sm text-white/70">
                    Survey No. 1682, Vijapur-Ransipur Road, Sardarpur, Taluka
                    Vijapur, Dist.- Mehsana - 382860, Gujarat, India.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-white/10"
      >
        <div className="mx-auto flex items-center max-w-[1400px] gap-4 px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © 2026 REDSON Pharmaceuticals Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}








// import Link from "next/link";
// import Image from "next/image";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Factory,
//   ArrowUpRight,
// } from "lucide-react";

// const quickLinks = [
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Manufacturing", href: "#manufacturingcapabilities" },
//   { label: "Quality", href: "#quality" },
//   { label: "Export", href: "#export" },
//   { label: "Contact", href: "#contact" },
// ];

// const services = [
//   { label: "Contract Manufacturing", href: "#contractmanufacturing" },
//   { label: "Third Party Manufacturing", href: "#thirdpartymanufacturing" },
//   { label: "Private Labeling", href: "#services" },
//   { label: "Export Services", href: "#exportservices" },
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-slate-950 text-white">
//       {/* CTA Strip */}
//       <div className="border-b border-white/30">
//         <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
//           <div>
//             <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
//               Ready To Partner?
//             </p>

//             <h3 className="mt-2 text-2xl font-bold md:text-3xl">
//               Start Your Pharmaceutical Manufacturing Journey.
//             </h3>
//           </div>

//           <div className="grid md:grid-cols-[1fr_0.7fr] gap-3">
//             <a
//               href="#contact"
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-white border border-[white] transition hover:scale-[1.02]"
//             >
//               Request Consultation
//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
//               <ArrowUpRight size={16} 
//               className="group-hover:-rotate-405 transition-all duration-500"
//               />
//               </div>
//             </a>
//             <a
//               href="tel:+918866003844"
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-[var(--primary)] px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
//             >
//               Call Now
//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
//               <Phone size={16} 
//               className="group-hover:rotate-360 transition-all duration-500"
//               />
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
//         <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
//           <div className="flex-col items-start justify-start">
//             <div className="flex items-start">
//               {/* Logo */}
//               <Link href="#hero" className="shrink-0">
//                 <Image
//                   src="/logo-footer-white-temp-01.png"
//                   alt="Redson Pharmaceutical"
//                   width={1000}
//                   height={1000}
//                   priority
//                   className="w-auto h-[52px]"
//                 />
//               </Link>
//             </div>
//             <p className="mt-4 text-sm leading-7 text-white/70">
//               Trusted pharmaceutical manufacturing partner specializing
//               in contract manufacturing, private labeling, packaging,
//               and export-ready healthcare solutions.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
//               Quick Links
//             </h4>

//             <div className="mt-5 space-y-3">
//               {quickLinks.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="block text-sm text-white/70 transition hover:text-white"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
//               Services
//             </h4>

//             <div className="mt-5 space-y-3">
//               {services.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="block text-sm text-white/70 transition hover:text-white"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
//               Contact
//             </h4>

//             <div className="mt-5 space-y-5">
//               <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
//                 <Phone
//                   size={16}
//                   className="mt-1 text-[var(--primary)]"
//                 />
//                 <a 
//                 href="tel:+918866003844"
//                 className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
//                 >
//                   +91 8866003844
//                 </a>
//               </div>

//               <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
//                 <Mail
//                   size={16}
//                   className="mt-1 text-[var(--primary)]"
//                 />
//                 <a
//                   href="mailto:info@redsongroup.in"
//                   className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
//                 >
//                   info@redsongroup.in
//                 </a>
//               </div>

//               <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
//                 <MapPin
//                   size={16}
//                   className="mt-1 text-[var(--primary)]"
//                 />
//                 <p className="text-sm">
//                   Office Address : 
//                   {" "}
//                 <span className="text-white/70">
//                   2, Radhe Kutir Bunglows, Near Safal Bunglows, Village Bhat, Dist.- Gandhinagar - 382428, Gujarat, India.
//                 </span>
//                 </p>
//               </div>

//               <div className="grid grid-cols-[0.05fr_1fr] items-start gap-3">
//                 <Factory
//                   size={16}
//                   className="mt-1 text-[var(--primary)]"
//                 />
//                 <p className="text-sm">
//                   Factory Address : 
//                   {" "}
//                 <span className="text-sm text-white/70">
//                   Survey No. 1682, Vijapur-Ransipur Road, Sardarpur, Taluka Vijapur, Dist.- Mehsana - 382860, Gujarat, India.
//                 </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto flex items-center max-w-[1400px] gap-4 px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-10">
//           <p>
//             © 2026 REDSON Pharmaceuticals Pvt. Ltd.
//             All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }