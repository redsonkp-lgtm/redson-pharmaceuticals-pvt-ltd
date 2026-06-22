import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
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
  { label: "Private Labeling", href: "#manufacturingcapabilities" },
  { label: "Export Services", href: "#exportservices" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* CTA Strip */}
      <div className="border-b border-white/30">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Ready To Partner?
            </p>

            <h3 className="mt-2 text-2xl font-bold md:text-3xl">
              Start Your Pharmaceutical Manufacturing Journey.
            </h3>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
          >
            Request Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex-col items-start justify-start">
            <div className="flex items-start">
              {/* Logo */}
              <Link href="#hero" className="shrink-0">
                <Image
                  src="/logo-purple-temp-01.png"
                  alt="Redson Pharmaceutical"
                  width={1000}
                  height={1000}
                  priority
                  className="w-auto h-[120px]"
                />
              </Link>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Trusted pharmaceutical manufacturing partner specializing
              in contract manufacturing, private labeling, packaging,
              and export-ready healthcare solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>

            <div className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h4>

            <div className="mt-5 space-y-3">
              {services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="mt-1 text-[var(--primary)]"
                />
                <span className="text-sm text-white/70">
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="mt-1 text-[var(--primary)]"
                />
                <span className="text-sm text-white/70">
                  info@redsonpharma.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-1 text-[var(--primary)]"
                />
                <span className="text-sm text-white/70">
                  Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex items-center max-w-[1400px] gap-4 px-6 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © 2026 REDSON Pharmaceuticals Pvt. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}









// import Link from "next/link";
// import {
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

// const quickLinks = [
//   "About",
//   "Manufacturing",
//   "Quality",
//   "Services",
//   "Contact",
// ];

// const divisions = [
//   "Tablets",
//   "Capsules",
//   "Injectables",
//   "Liquid Orals",
//   "Eye Drops",
//   "Veterinary Products",
// ];

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-slate-950 text-white">
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[var(--primary)]/10 blur-[100px]" />
//       <div className="absolute right-0 bottom-0 h-[240px] w-[240px] rounded-full bg-[var(--primary)]/5 blur-[90px]" />

//       <div className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-8 lg:px-10">
//         {/* Main Footer */}
//         <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-4">
//           {/* Brand */}
//           <div>
//             <h3 className="text-2xl font-bold tracking-tight">
//               REDSON Pharmaceuticals
//             </h3>

//             <p className="mt-4 text-sm leading-7 text-slate-400">
//               Trusted pharmaceutical manufacturer, exporter, and supplier
//               delivering quality-focused healthcare solutions across
//               multiple dosage forms.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
//               Quick Links
//             </h4>

//             <ul className="mt-4 space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link}>
//                   <Link
//                     href={`#${link.toLowerCase()}`}
//                     className="text-sm text-slate-400 transition hover:text-white"
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Divisions */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
//               Manufacturing
//             </h4>

//             <ul className="mt-4 space-y-3">
//               {divisions.map((item) => (
//                 <li
//                   key={item}
//                   className="text-sm text-slate-400"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
//               Contact
//             </h4>

//             <div className="mt-4 space-y-4">
//               <div className="flex items-start gap-3">
//                 <Phone
//                   size={16}
//                   className="mt-1 text-[var(--primary)]"
//                 />
//                 <span className="text-sm text-slate-400">
//                   +91 8866003844
//                 </span>
//               </div>

//               <div className="flex items-start gap-3">
//                 <Mail
//                   size={16}
//                   className="mt-1 text-[var(--primary)]"
//                 />
//                 <span className="text-sm text-slate-400">
//                   info@redsongroup.in
//                 </span>
//               </div>

//               <div className="flex items-start gap-3">
//                 <MapPin
//                   size={16}
//                   className="mt-1 text-[var(--primary)]"
//                 />
//                 <span className="text-sm text-slate-400">
//                   Gandhinagar, Gujarat, India
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Strip */}
//         <div className="flex flex-col gap-4 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
//           <p>
//             © {new Date().getFullYear()} REDSON Pharmaceuticals Private Limited.
//             All rights reserved.
//           </p>

//           <div className="flex gap-6">
//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-white"
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               href="/terms"
//               className="transition hover:text-white"
//             >
//               Terms & Conditions
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }










// import { Phone, MessageCircle, Pill, Syringe, FlaskConical, Tablet, } from "lucide-react";
// import Link from "next/link";  

//   export default function Footer() {
//     return (
//       <footer className="relative overflow-hidden bg-[#041225] text-white">
//         {/* Watermark */}
//         <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
//           <span className="select-none text-[22rem] font-black tracking-wider text-white/[0.03]">
//             ZIORA
//           </span>
//         </div>
  
//         <div className="relative z-10 mx-auto max-w-[1400px] px-4 pt-16">
//           <div className="grid gap-12 lg:grid-cols-4">
//             {/* Company Info */}
//             <div>
//               <div className="mb-8 flex items-center gap-3">
//                 {/* Logo */}
//                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#041225]">
//                   <div className="relative h-7 w-7">
//                     <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-current"></span>
//                     <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-current"></span>
//                     <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-current"></span>
//                   </div>
//                 </div>
  
//                 <div>
//                   <h2 className="text-3xl font-bold tracking-wide">
//                     ZIORA
//                   </h2>
//                   <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
//                     Pharmaceutical
//                   </p>
//                 </div>
//               </div>
  
//               <p className="max-w-sm text-lg leading-relaxed text-slate-400">
//                 Premium third-party pharmaceutical manufacturing in
//                 Mohali, Punjab. WHO-GMP certified facility delivering
//                 consistent quality and scalable supply.
//               </p>
  
//               <button className="mt-8 rounded-full border border-cyan-500 bg-cyan-500/10 px-8 py-4 text-lg font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white">
//                 Enquire Now
//               </button>
//             </div>
  
//             {/* Quick Links */}
//             <div>
//               <h3 className="mb-8 text-xl font-bold uppercase tracking-wide">
//                 Quick Links
//               </h3>
  
//               <ul className="space-y-5 text-lg text-slate-400">
//                 <li>
//                   <Link href="#">About</Link>
//                 </li>
//                 <li>
//                   <Link href="#">Services</Link>
//                 </li>
//                 <li>
//                   <Link href="#">Products</Link>
//                 </li>
//                 <li>
//                   <Link href="#">Export</Link>
//                 </li>
//                 <li>
//                   <Link href="#">Contact</Link>
//                 </li>
//               </ul>
//             </div>
  
//             {/* Divisions */}
//             <div>
//               <h3 className="mb-8 text-xl font-bold uppercase tracking-wide">
//                 Our Divisions
//               </h3>
  
//               <ul className="space-y-5 text-lg text-slate-400">
//                 <li className="flex items-center gap-3">
//                   <Tablet size={18} />
//                   Tablets
//                 </li>
  
//                 <li className="flex items-center gap-3">
//                   <Pill size={18} />
//                   Capsules
//                 </li>
  
//                 <li className="flex items-center gap-3">
//                   <Syringe size={18} />
//                   Injections
//                 </li>
  
//                 <li className="flex items-center gap-3">
//                   <FlaskConical size={18} />
//                   Syrups
//                 </li>
//               </ul>
//             </div>
  
//             {/* Contact */}
//             <div>
//               <h3 className="mb-8 text-xl font-bold uppercase tracking-wide">
//                 Contact
//               </h3>
  
//               <div className="space-y-5 text-lg text-slate-400">
//                 <p>Mohali, Punjab - 160055</p>
//                 <p>+91 73072 79050</p>
//                 <p>info@ziorapharmaceutical.in</p>
//                 <p>Mon - Sat: 9AM - 6PM</p>
//               </div>
//             </div>
//           </div>
  
//           {/* Divider */}
//           <div className="mt-16 border-t border-white/10" />
  
//           {/* Bottom */}
//           <div className="py-6 flex flex-col gap-4 text-slate-500 md:flex-row md:items-center md:justify-between">
//             <p>
//               © 2026 Ziora Pharmaceuticals. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
// )};