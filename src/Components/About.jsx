import Image from "next/image";
import Link from "next/link";
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
      "State-of-the-art GMP-compliant facilities equipped with modern machinery and scalable production systems for tablets, capsules, injectables, liquid orals, eye drops, and specialty formulations.",
  },
  {
    icon: FlaskConical,
    title: "Research, Quality & Regulatory Excellence",
    description:
      "Dedicated R&D, QA, and QC systems ensure product innovation, process optimization, stringent testing, and adherence to global pharmaceutical quality standards.",
  },
  {
    icon: Globe2,
    title: "Contract Manufacturing & Global Reach",
    description:
      "Private labeling, customized packaging, export solutions, and third-party manufacturing support pharmaceutical companies across domestic and international markets.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex items-center justify-start">
          <div className="max-w-5xl">
            <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
                About Redson Pharmaceuticals
              </span>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
              Built for
              <br />
              <span className="text-[var(--primary)]">
                Global Healthcare Brands.
              </span>
            </h2>

            <p className="mt-5 sm:mt-6 max-w-5xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg">
              REDSON Pharmaceuticals Private Limited is a pharmaceutical
              manufacturer, exporter, and supplier delivering high-quality
              healthcare solutions through advanced manufacturing
              infrastructure, stringent quality systems, and customer-focused
              services.
            </p>

            <p className="mt-4 max-w-5xl text-sm sm:text-base leading-relaxed text-slate-500">
              From formulation development and contract manufacturing to
              private labeling, customized packaging, and export support,
              we help pharmaceutical companies build, launch, and scale
              products with quality, compliance, and reliability.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid items-center gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-slate-200 bg-slate-100 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/temp-img-01.png"
                alt="REDSON Manufacturing Facility"
                width={900}
                height={1000}
                className="h-[280px] sm:h-[380px] md:h-[520px] xl:h-[580px] w-full object-cover"
              />

              {/* Bottom Overlay Strip */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 md:p-8">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-white/70">
                  Integrated Pharmaceutical Manufacturing
                </p>

                <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Advancing Healthcare Through Quality & Innovation
                </h3>

                <p className="mt-2 max-w-lg text-xs sm:text-sm leading-relaxed text-white/80">
                  Comprehensive capabilities across formulation,
                  manufacturing, packaging, quality assurance, and
                  export solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6 sm:space-y-8">
              {pillars.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-4 sm:gap-5 border-b border-[var(--primary)]/40 pb-6 sm:pb-8 last:border-0"
                  >
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 transition-all duration-300 group-hover:bg-[var(--primary)]">
                      <Icon
                        size={22}
                        className="text-[var(--primary)] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <a
                href="#services"
                className="group flex w-full sm:w-fit min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-black bg-black px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-black active:scale-[0.98]"
              >
                <span className="whitespace-nowrap">
                  Explore Services
                </span>

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
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