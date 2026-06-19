import Image from "next/image";
import {
  Factory,
  FlaskConical,
  Globe2,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Factory,
    title: "Advanced Manufacturing Infrastructure",
    description:
      "State-of-the-art facilities equipped with modern machinery and scalable production systems for tablets, capsules, injectables, liquid orals and specialty formulations.",
  },
  {
    icon: FlaskConical,
    title: "Research, Quality & Regulatory Excellence",
    description:
      "Dedicated R&D, QA and QC systems ensure innovation, process optimization, stringent testing, and adherence to global pharmaceutical quality standards.",
  },
  {
    icon: Globe2,
    title: "Contract Manufacturing & Global Reach",
    description:
      "Private labeling, customized packaging, export solutions and contract manufacturing support pharmaceutical companies across domestic and international markets.",
  },
];

const stats = [
  {
    value: "6+",
    label: "Dosage Forms",
  },
  {
    value: "100%",
    label: "Quality Focus",
  },
  {
    value: "Global",
    label: "Export Ready",
  },
  {
    value: "24/7",
    label: "Business Support",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 lg:py-20">
      {/* Background */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[var(--primary)]/5 blur-[110px]" />
      <div className="absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <div className="max-w-5xl text-center">
            <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                About Redson Pharmaceuticals
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
              Built for
              <br />
              <span className="text-[var(--primary)]">
                Healthcare Brands.
              </span>
            </h2>

            <p className="mt-6 max-w-5xl text-base leading-relaxed text-slate-600 md:text-lg">
              REDSON Pharmaceuticals Private Limited is a pharmaceutical
              manufacturer, exporter, and supplier delivering high-quality
              healthcare solutions through advanced manufacturing
              infrastructure, stringent quality systems, and customer-focused
              services.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-500">
              From formulation development and contract manufacturing to
              private labeling, customized packaging, and export support,
              we help pharmaceutical companies launch and scale products
              with confidence across domestic and international markets.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/temp-img-01.png"
                alt="REDSON Manufacturing Facility"
                width={900}
                height={1000}
                className="h-[420px] w-full object-cover md:h-[520px]"
              />

              {/* Bottom Overlay Strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">
                  Integrated Pharmaceutical Manufacturing
                </p>

                <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                  Advancing Healthcare Through Quality & Innovation
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80">
                  Comprehensive capabilities across formulation,
                  manufacturing, packaging, quality assurance and export
                  solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {pillars.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-5 border-b border-slate-200 pb-8 last:border-0"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon
                        size={24}
                        className="text-[var(--primary)] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="group flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-slate-800">
                Explore Manufacturing Capabilities

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 overflow-hidden rounded-[32px] bg-slate-900">
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/10 p-8 text-center md:border-b-0 md:border-r md:last:border-r-0"
              >
                <h3 className="text-4xl font-bold tracking-tight text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}










// import Image from "next/image";
// import {
//   Factory,
//   FlaskConical,
//   Globe2,
//   ArrowRight,
// } from "lucide-react";

// const pillars = [
//   {
//     icon: Factory,
//     title: "Advanced Manufacturing Infrastructure",
//     description:
//       "State-of-the-art facilities equipped with modern machinery and scalable production systems for tablets, capsules, injectables, liquid orals and specialty formulations.",
//   },
//   {
//     icon: FlaskConical,
//     title: "Research, Quality & Regulatory Excellence",
//     description:
//       "Dedicated R&D, QA and QC systems ensure innovation, process optimization, stringent testing, and adherence to global pharmaceutical quality standards.",
//   },
//   {
//     icon: Globe2,
//     title: "Contract Manufacturing & Global Reach",
//     description:
//       "Private labeling, customized packaging, export solutions and contract manufacturing support pharmaceutical companies across domestic and international markets.",
//   },
// ];

// const stats = [
//   {
//     value: "6+",
//     label: "Dosage Forms",
//   },
//   {
//     value: "100%",
//     label: "Quality Focus",
//   },
//   {
//     value: "Global",
//     label: "Export Ready",
//   },
//   {
//     value: "24/7",
//     label: "Business Support",
//   },
// ];

// export default function About() {
//   return (
//     <section className="relative overflow-hidden bg-[#f8fafc] py-28 lg:py-36">
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />

//       <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
//         {/* Heading */}
//         <div className="max-w-6xl">
//           <span className="inline-flex rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
//             About Redson Pharmaceuticals
//           </span>

//           <h2 className="mt-8 text-6xl font-bold tracking-[-0.05em] text-slate-900 md:text-7xl xl:text-8xl">
//             Built for
//             <br />
//             <span className="text-[var(--primary)]">
//               Healthcare Brands.
//             </span>
//           </h2>

//           <p className="mt-8 max-w-4xl text-xl leading-relaxed text-slate-600">
//             REDSON Pharmaceuticals Private Limited is a pharmaceutical
//             manufacturer, exporter, and supplier delivering high-quality
//             healthcare solutions through advanced manufacturing
//             infrastructure, stringent quality systems, and customer-focused
//             services.
//           </p>

//           <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-500">
//             From formulation development and contract manufacturing to
//             private labeling, customized packaging, and export support,
//             we help pharmaceutical companies launch and scale products
//             with confidence across domestic and international markets.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="mt-24 grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
//           {/* Left Image */}
//           <div className="relative">
//             <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-xl">
//               <Image
//                 src="/images/about-manufacturing.jpg"
//                 alt="REDSON Manufacturing Facility"
//                 width={900}
//                 height={1200}
//                 className="h-[750px] w-full object-cover"
//               />
//             </div>

//             {/* Floating Card */}
//             <div className="absolute bottom-8 left-8 right-8 rounded-[28px] border border-white/20 bg-white/90 p-8 backdrop-blur-xl shadow-2xl">
//               <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
//                 Integrated Pharmaceutical Manufacturing
//               </p>

//               <h3 className="mt-3 text-2xl font-bold text-slate-900">
//                 Advancing Healthcare Through Quality & Innovation
//               </h3>

//               <p className="mt-3 text-slate-600">
//                 Comprehensive capabilities across formulation,
//                 manufacturing, packaging, quality assurance and export
//                 solutions.
//               </p>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="flex flex-col justify-center">
//             <div className="space-y-8">
//               {pillars.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={index}
//                     className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//                   >
//                     <div className="flex gap-6">
//                       <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
//                         <Icon
//                           size={30}
//                           className="text-[var(--primary)]"
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-2xl font-bold text-slate-900">
//                           {item.title}
//                         </h3>

//                         <p className="mt-4 leading-8 text-slate-600">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* CTA */}
//             <div className="mt-10">
//               <button className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-5 text-white transition hover:bg-slate-800">
//                 <span className="font-semibold">
//                   Explore Manufacturing Capabilities
//                 </span>

//                 <ArrowRight
//                   size={18}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className="mt-28 overflow-hidden rounded-[40px] bg-slate-900">
//           <div className="grid md:grid-cols-2 xl:grid-cols-4">
//             {stats.map((item, index) => (
//               <div
//                 key={index}
//                 className="border-b border-white/10 p-10 text-center md:border-r md:border-b-0"
//               >
//                 <h3 className="text-5xl font-bold tracking-tight text-white">
//                   {item.value}
//                 </h3>

//                 <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/60">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









// import {
//     Building2,
//     Shield,
//     Microscope,
//     BadgeCheck,
//   } from "lucide-react";
  
//   const features = [
//     {
//       icon: Building2,
//       badge: "GMP COMPLIANT",
//       title: "WHO-GMP Certified Facility",
//       description:
//         "Our Mohali plant operates under World Health Organization GMP guidelines — every process documented, validated, and continuously audited for full international compliance.",
//     },
//     {
//       icon: Shield,
//       badge: "STERILE ZONE",
//       title: "Clean Room Production",
//       description:
//         "Dedicated clean rooms with HEPA filtration, differential pressure monitoring, and strict gowning protocols for contamination-free sterile manufacturing.",
//     },
//     {
//       icon: Microscope,
//       badge: "QC CERTIFIED",
//       title: "In-House Analytical Lab",
//       description:
//         "Full-spectrum QC laboratory running HPLC, dissolution testing, microbiological analysis, and accelerated stability studies on every batch.",
//     },
//     {
//       icon: BadgeCheck,
//       badge: "AUDIT-READY",
//       title: "Regulatory Compliance",
//       description:
//         "End-to-end batch documentation, SOPs, and traceability records ensure our facility is perpetually ready for regulatory inspections and audits.",
//     },
//   ];
  
//   export default function About() {
//     return (
//       <section className="bg-[#f7f8fa] py-28">
//         <div className="mx-auto max-w-[1400px] px-4">
//           {/* Heading */}
//           <div className="mx-auto max-w-5xl text-center">
//             <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-sky-500">
//               About Ziora
//             </p>
  
//             <h2 className="text-5xl font-bold tracking-tight text-[#14213d] md:text-6xl">
//               Precision-Driven
//             </h2>
  
//             <h3 className="mt-2 font-serif text-4xl md:text-5xl italic text-[#14213d] lg:text-6xl">
//               Pharmaceutical Manufacturing
//             </h3>
  
//             <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-sky-500" />
//           </div>
  
//           {/* Description */}
//           <div className="mx-auto mt-16 max-w-5xl text-center">
//             <p className="text-2xl leading-relaxed text-slate-700">
//               At{" "}
//               <span className="font-bold text-slate-900">
//                 Ziora Pharmaceuticals
//               </span>
//               , precision is not just a standard — it is our ethos.
//               We fuse advanced formulation expertise with
//               uncompromising quality control to manufacture
//               tablets, capsules, injections, syrups, and oral
//               liquids for the pharmaceutical market.
//             </p>
  
//             <p className="mt-10 text-xl leading-relaxed text-slate-500">
//               Based in Mohali, Punjab — the pharmaceutical hub of
//               North India — our WHO-GMP certified facility combines
//               modern production systems with documented quality
//               controls to deliver safe, effective, and consistently
//               high-quality medicines for healthcare brands across
//               India.
//             </p>
//           </div>
  
//           {/* Feature Cards */}
//           <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
  
//               return (
//                 <div
//                   key={index}
//                   className="group relative rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//                 >
//                   {/* Top Row */}
//                   <div className="mb-8 flex items-center justify-between">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#162846] text-sky-400">
//                       <Icon size={24} />
//                     </div>
  
//                     <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold tracking-[0.15em] text-sky-500">
//                       {feature.badge}
//                     </span>
//                   </div>
  
//                   <h4 className="mb-4 text-2xl font-bold text-slate-800">
//                     {feature.title}
//                   </h4>
  
//                   <p className="leading-8 text-slate-500">
//                     {feature.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     );
//   }