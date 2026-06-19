import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Factory,
  ShieldCheck,
} from "lucide-react";

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

  return (
    <section className="relative overflow-hidden pt-12 bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Advancing Healthcare Through Quality & Innovation
              </span>
            </div>

            {/* Heading */}
            <div className="mt-6">
              <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[72px]">
                Pharmaceutical
                <br />
                Manufacturing
                <br />
                <span className="text-[var(--primary)]">
                  Partner
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                REDSON Pharmaceuticals Private Limited is a trusted
                pharmaceutical manufacturer, exporter, and supplier
                specializing in tablets, capsules, injectables,
                liquid orals, eye drops, veterinary products, and
                specialty healthcare formulations.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 rounded-full bg-black border-[2px] border-[black] px-6 py-3.5 text-sm font-semibold text-white hover:text-black transition-all duration-500 hover:-translate-y-0.5 hover:bg-transparent">
                Request Manufacturing Quote

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-full border-[2px] border-[black] bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                Download Company Profile
              </button>
            </div>

            {/* Trust Row */}
            <div className="mt-10 flex flex-wrap gap-6">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <Icon
                        size={16}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Main Image */}
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
              <Image
                src="/temp-img-01.png"
                alt="REDSON Pharmaceuticals Manufacturing Facility"
                width={900}
                height={1000}
                className="h-[420px] w-full object-cover md:h-[520px] lg:h-[560px]"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-xl md:bottom-6 md:left-6 md:right-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    100%
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Quality Focus
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    GMP
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Compliant
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Global
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Export Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









// import Image from "next/image";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Globe,
//   Factory,
//   ShieldCheck,
// } from "lucide-react";

// export default function Hero() {
//   const capabilities = [
//     "Tablets",
//     "Capsules",
//     "Injectables",
//     "Liquid Orals",
//     "Eye Drops",
//     "Veterinary Products",
//   ];

//   const trustItems = [
//     {
//       icon: ShieldCheck,
//       label: "Quality Assurance",
//     },
//     {
//       icon: Factory,
//       label: "Contract Manufacturing",
//     },
//     {
//       icon: Globe,
//       label: "Export Solutions",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white">
//       {/* Background Glow */}
//       <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-[var(--primary)]/5 blur-[140px]" />

//       <div className="relative mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:pb-24 lg:pt-32">
//         <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
//           {/* LEFT */}
//           <div>
//             {/* Badge */}
//             <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-5 py-3">
//               <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
//                 Advancing Healthcare Through Quality & Innovation
//               </span>
//             </div>

//             {/* Heading */}
//             <div className="mt-8">
//               <h1 className="text-6xl font-bold leading-[0.92] tracking-[-0.05em] text-slate-900 md:text-7xl xl:text-[110px]">
//                 Pharmaceutical
//                 <br />
//                 Manufacturing
//                 <br />
//                 <span className="text-[var(--primary)]">
//                   Partner
//                 </span>
//               </h1>

//               <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
//                 REDSON Pharmaceuticals Private Limited is a pharmaceutical
//                 manufacturer, exporter, and supplier specializing in tablets,
//                 capsules, injectables, liquid orals, eye drops, medical
//                 devices, veterinary products, and specialty formulations.
//               </p>
//             </div>

//             {/* Capability Pills */}
//             <div className="mt-10 flex flex-wrap gap-3">
//               {capabilities.map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="mt-12 flex flex-wrap gap-4">
//               <button className="group flex items-center gap-3 rounded-full bg-slate-900 px-8 py-5 text-base font-semibold text-white transition hover:bg-slate-800">
//                 Request Manufacturing Quote

//                 <ArrowRight
//                   size={18}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </button>

//               <button className="rounded-full border border-slate-300 bg-white px-8 py-5 text-base font-semibold text-slate-800 transition hover:bg-slate-50">
//                 Download Company Profile
//               </button>
//             </div>

//             {/* Trust Row */}
//             <div className="mt-12 flex flex-wrap gap-8">
//               {trustItems.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.label}
//                     className="flex items-center gap-3"
//                   >
//                     <Icon
//                       size={18}
//                       className="text-[var(--primary)]"
//                     />

//                     <span className="font-medium text-slate-700">
//                       {item.label}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="relative">
//             {/* Main Image */}
//             <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-slate-100 shadow-2xl">
//               <Image
//                 src="/images/pharma-manufacturing.jpg"
//                 alt="REDSON Pharmaceuticals Manufacturing Facility"
//                 width={900}
//                 height={1000}
//                 className="h-[700px] w-full object-cover"
//               />
//             </div>

//             {/* Floating Card */}
//             <div className="absolute -bottom-8 left-8 right-8 rounded-[30px] border border-white/30 bg-white/90 p-8 backdrop-blur-xl shadow-xl">
//               <div className="grid grid-cols-3 gap-6">
//                 <div>
//                   <h3 className="text-3xl font-bold text-slate-900">
//                     100%
//                   </h3>

//                   <p className="mt-2 text-sm text-slate-500">
//                     Quality Focus
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-3xl font-bold text-slate-900">
//                     GMP
//                   </h3>

//                   <p className="mt-2 text-sm text-slate-500">
//                     Compliant Processes
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-3xl font-bold text-slate-900">
//                     Global
//                   </h3>

//                   <p className="mt-2 text-sm text-slate-500">
//                     Export Support
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Highlight Strip */}

//         <div className="mt-28 rounded-[40px] border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">
//           <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
//             <div>
//               <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
//                 Integrated Pharmaceutical Manufacturing
//               </p>

//               <h3 className="text-3xl font-bold md:text-4xl">
//                 Contract Manufacturing, Private Labeling &
//                 Export Solutions Under One Trusted Partner
//               </h3>

//               <p className="mt-5 max-w-4xl text-lg text-white/70">
//                 Advanced manufacturing infrastructure, quality
//                 assurance systems, customized packaging,
//                 regulatory support, and scalable production
//                 capabilities for domestic and international
//                 pharmaceutical markets.
//               </p>
//             </div>

//             <button className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900">
//               Explore Capabilities

//               <ArrowRight size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









// import {
//     ShieldCheck,
//     Factory,
//     FlaskConical,
//     Package,
//     ArrowRight,
//   } from "lucide-react";
  
//   export default function Hero() {
//     const features = [
//       {
//         icon: ShieldCheck,
//         title: "WHO-GMP aligned facility",
//       },
//       {
//         icon: Factory,
//         title: "Third-party manufacturing",
//       },
//       {
//         icon: FlaskConical,
//         title: "Quality formulation support",
//       },
//       {
//         icon: Package,
//         title: "Product-first presentation",
//       },
//     ];
  
//     return (
//       <section className="relative overflow-hidden bg-gradient-to-r from-sky-50 via-white to-slate-50">
//         <div className="relative mx-auto max-w-[1400px] px-4 py-16 lg:py-20 lg:pt-26">
//           <div className="grid lg:grid-cols-[1fr_0.6fr]">
//             <div>
//               {/* Badge */}
//               <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-5 py-3 shadow-sm">
//                 <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
//                   Trusted Pharmaceutical Manufacturing
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="mt-8 max-w-4xl">
//                 <h1 className="text-5xl font-bold leading-none tracking-tight text-slate-900 md:text-7xl">
//                   Pharma manufacturing
//                   <br />
//                   for{" "}
//                   <span className="text-[var(--primary)]">
//                     tablets, capsules,
//                   </span>
//                   <br />
//                   <span className="text-[var(--primary)]/65">
//                     syrups
//                   </span>
//                   {" "}
//                     etc.                
//                 </h1>

//                 <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
//                   Ziora Pharmaceuticals is a third-party pharmaceutical
//                   manufacturing company based in Mohali, Punjab, focused on
//                   dependable production, clear communication, and consistent
//                   quality across core dosage forms.
//                 </p>

//                 {/* Buttons */}
//                 <div className="mt-10 flex flex-wrap gap-4">
//                   <button className="rounded-full bg-slate-900 px-10 py-4 text-lg font-semibold text-white transition hover:bg-slate-800">
//                     View Products
//                   </button>

//                   <button className="rounded-full border border-slate-300 bg-white px-10 py-4 text-lg font-medium text-slate-800 transition hover:bg-slate-50">
//                     Get In Touch
//                   </button>
//                 </div>
//               </div>
//             </div>
    
//             {/* Feature Cards */}
//             <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-2">
//               {features.map((item, index) => {
//                 const Icon = item.icon;
    
//                 return (
//                   <div
//                     key={index}
//                     className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
//                   >
//                     <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
//                       <Icon className="h-6 w-6 text-sky-500" />
//                     </div>
    
//                     <p className="text-lg font-medium text-slate-800">
//                       {item.title}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
  
//           {/* Export Card */}
//           <div className="mt-10 rounded-[32px] border border-sky-100 bg-white p-8 shadow-sm">
//             <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//               <div>
//                 <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-sky-500">
//                   Export
//                 </p>
  
//                 <h3 className="text-4xl font-bold text-slate-800">
//                   Check out our export options!
//                 </h3>
  
//                 <p className="mt-4 max-w-3xl text-lg text-slate-600">
//                   We also export all the products internationally through a
//                   smooth, documentation-ready, and compliance-focused process.
//                 </p>
//               </div>
  
//               <button className="flex items-center gap-4 rounded-full bg-slate-900 px-8 py-5 text-lg font-semibold text-white hover:bg-slate-800">
//                 Open Export Page
//                 <ArrowRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }