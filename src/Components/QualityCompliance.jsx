import {
  ShieldCheck,
  FlaskConical,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const qualityItems = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Comprehensive quality assurance systems integrated throughout every stage of manufacturing to ensure consistency, safety, and reliability.",
  },
  {
    icon: FlaskConical,
    title: "Quality Control",
    description:
      "Dedicated testing protocols, analytical evaluations, and batch validation processes maintain strict pharmaceutical quality standards.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Documentation-driven manufacturing practices designed to support regulatory requirements and customer confidence.",
  },
];

export default function QualityCompliance() {
  return (
    <section
      id="#qualitycompliance"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px] rounded-full bg-[var(--primary)]/5 blur-[110px]" />
      <div className="absolute right-0 bottom-0 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px] rounded-full bg-blue-100/40 blur-[90px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
                Quality & Compliance
              </span>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
              Quality Built
              <br />
              <span className="text-[var(--primary)]">
                Into Every Batch.
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 md:text-lg">
              At REDSON Pharmaceuticals, quality is integrated into every
              stage of manufacturing. From raw material evaluation to final
              product release, our systems are designed to maintain
              consistency, safety, and regulatory compliance.
            </p>

            <button className="group mt-6 sm:mt-8 inline-flex min-h-[48px] w-full sm:w-fit items-center justify-center gap-2 rounded-full bg-slate-900 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-slate-800 active:scale-[0.98]">
              Learn More

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right Compliance Rail */}
          <div className="relative">
            <div className="relative pb-8">
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-[var(--primary)]" />

              <div className="space-y-8 sm:space-y-10">
                {qualityItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="relative flex gap-4 sm:gap-6"
                    >
                      {/* Icon Node */}
                      <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg">
                        <Icon size={18} />
                      </div>

                      {/* Content */}
                      <div className="pb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 sm:mt-3 max-w-xl text-sm leading-6 sm:leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Highlight */}
            <div className=" rounded-2xl border border-[var(--primary)] bg-slate-50 p-4 sm:p-6">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[var(--primary)]">
                Process Driven Quality Systems
              </p>

              <p className="mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
                Every batch undergoes structured quality checkpoints,
                analytical testing, and documentation review to maintain
                manufacturing consistency and product integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









// import {
//   ShieldCheck,
//   FlaskConical,
//   FileCheck,
//   ArrowRight,
//   } from "lucide-react";
  
//   const qualityItems = [
//   {
//   icon: ShieldCheck,
//   title: "Quality Assurance",
//   description:
//   "Comprehensive quality assurance systems integrated throughout every stage of manufacturing to ensure consistency, safety, and reliability.",
//   },
//   {
//   icon: FlaskConical,
//   title: "Quality Control",
//   description:
//   "Dedicated testing protocols, analytical evaluations, and batch validation processes maintain strict pharmaceutical quality standards.",
//   },
//   {
//   icon: FileCheck,
//   title: "Regulatory Compliance",
//   description:
//   "Documentation-driven manufacturing practices designed to support regulatory requirements and customer confidence.",
//   },
//   ];
  
//   export default function QualityCompliance() {
//   return (
//   <section className="relative overflow-hidden bg-white py-20 lg:py-24">
//     {/* Background Effects */}
//    <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
//     <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[100px]" />
//     <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
//       <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
//         {/* Left Content */}
//         <div>
//           <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
//             <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
//               Quality & Compliance
//             </span>
//           </div>
  
//           <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
//             Quality Built
//             <br />
//             Into Every Batch.
//           </h2>
  
//           <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
//             At REDSON Pharmaceuticals, quality is integrated into every
//             stage of manufacturing. From raw material evaluation to final
//             product release, our systems are designed to maintain
//             consistency, safety, and regulatory compliance.
//           </p>
  
//           <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800">
//             Learn More
  
//             <ArrowRight
//               size={16}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </button>
//         </div>
  
//         {/* Right Cards */}
//         <div className="space-y-5">
//           {qualityItems.map((item) => {
//             const Icon = item.icon;
  
//             return (
//               <div
//                 key={item.title}
//                 className="group rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
//               >
//                 <div className="flex gap-4">
//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
//                     <Icon
//                       size={24}
//                       className="text-[var(--primary)]"
//                     />
//                   </div>
  
//                   <div>
//                     <h3 className="text-xl font-bold text-slate-900">
//                       {item.title}
//                     </h3>
  
//                     <p className="mt-3 text-sm leading-7 text-slate-600">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   </section>
  
//   );
//   }
  









// import {
//     ShieldCheck,
//     FlaskConical,
//     FileCheck,
//     ArrowRight,
//   } from "lucide-react";
  
//   const qualityItems = [
//     {
//       icon: ShieldCheck,
//       title: "Quality Assurance",
//       description:
//         "Comprehensive quality assurance systems integrated throughout every stage of manufacturing to ensure consistency, safety, and reliability.",
//     },
//     {
//       icon: FlaskConical,
//       title: "Quality Control",
//       description:
//         "Dedicated testing protocols, analytical evaluations, and batch validation processes maintain strict pharmaceutical quality standards.",
//     },
//     {
//       icon: FileCheck,
//       title: "Regulatory Compliance",
//       description:
//         "Documentation-driven manufacturing practices designed to support regulatory requirements and customer confidence.",
//     },
//   ];
  
//   export default function QualityCompliance() {
//     return (
//       <section className="bg-white py-32">
//         <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//           <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
//             {/* Left Content */}
//             <div>
//               <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-700">
//                 Quality & Compliance
//               </span>
  
//               <h2 className="mt-8 text-6xl font-bold tracking-[-0.05em] text-slate-900 md:text-7xl">
//                 Quality Built
//                 <br />
//                 Into Every Batch.
//               </h2>
  
//               <p className="mt-8 text-xl leading-relaxed text-slate-600">
//                 At REDSON Pharmaceuticals, quality is integrated into every
//                 stage of manufacturing. From raw material evaluation to final
//                 product release, our systems are designed to maintain
//                 consistency, safety, and regulatory compliance.
//               </p>
  
//               <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-5 text-white hover:bg-slate-800">
//                 Learn More
//                 <ArrowRight size={18} />
//               </button>
//             </div>
  
//             {/* Right Side */}
//             <div className="space-y-6">
//               {qualityItems.map((item) => {
//                 const Icon = item.icon;
  
//                 return (
//                   <div
//                     key={item.title}
//                     className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
//                   >
//                     <div className="flex gap-6">
//                       <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
//                         <Icon
//                           size={28}
//                           className="text-purple-700"
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
//           </div>
//         </div>
//       </section>
//     );
//   }