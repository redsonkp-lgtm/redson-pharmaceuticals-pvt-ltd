import Image from "next/image";
import { Globe2, PackageCheck, FileCheck } from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "Global",
    label: "Export Support",
    description:
      "Supporting pharmaceutical businesses across international markets.",
  },
  {
    icon: FileCheck,
    value: "100%",
    label: "Documentation Ready",
    description:
      "Regulatory-focused documentation and compliance support.",
  },
  {
    icon: PackageCheck,
    value: "24/7",
    label: "Business Support",
    description:
      "Responsive customer service and operational assistance.",
  },
];

export default function GlobalReach() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 lg:py-16">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[380px] w-[380px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Global Reach
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-5xl xl:text-[56px]">
            Delivering Healthcare
            <br />
            Beyond Borders.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            Supporting pharmaceutical businesses with manufacturing,
            regulatory assistance, packaging solutions, and export-ready
            capabilities for domestic and international markets.
          </p>
        </div>

        {/* World Map */}
        <div className="mt-12 relative">
          <Image
            src="/images/world-map.svg"
            alt="Global Reach"
            width={1400}
            height={600}
            className="mx-auto w-full max-w-5xl opacity-70"
          />

          {/* soft center glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/5 to-transparent blur-2xl" />
        </div>

        {/* Stats Strip */}
        <div className="mt-10 grid border-t border-white/10 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="border-b border-white/10 px-6 py-7 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <Icon
                      size={18}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
                      {item.label}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}









// const stats = [
//   {
//     value: "Global",
//     label: "Export Support",
//   },
//   {
//     value: "100%",
//     label: "Documentation Ready",
//   },
//   {
//     value: "24/7",
//     label: "Business Support",
//   },
// ];

// export default function GlobalReach() {
//   return (
//     <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-32">
//       <div className="mx-auto max-w-[1440px] px-6 lg:px-10 text-center">
//         <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
//           Global Reach
//         </span>

//         <h2 className="mt-6 text-6xl font-bold text-white">
//           Delivering Healthcare
//           Beyond Borders.
//         </h2>

//         <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
//           Supporting pharmaceutical businesses with manufacturing,
//           regulatory support, packaging, and export-ready solutions.
//         </p>

//         {/* World Map Image */}
//         <div className="mt-20">
//           <img
//             src="/images/world-map.svg"
//             alt="Global Reach"
//             className="mx-auto opacity-80"
//           />
//         </div>

//         <div className="mt-16 grid gap-8 md:grid-cols-3">
//           {stats.map((item) => (
//             <div
//               key={item.label}
//               className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10"
//             >
//               <h3 className="text-5xl font-bold text-purple-300">
//                 {item.value}
//               </h3>

//               <p className="mt-3 uppercase tracking-[0.25em] text-slate-400">
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








// const stats = [
//     {
//       value: "Global",
//       label: "Export Support",
//     },
//     {
//       value: "100%",
//       label: "Documentation Ready",
//     },
//     {
//       value: "24/7",
//       label: "Business Assistance",
//     },
//   ];
  
//   export default function GlobalReach() {
//     return (
//       <section className="bg-white py-32">
//         <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//           <div className="text-center">
//             <span className="text-sm uppercase tracking-[0.25em] text-purple-700">
//               Global Reach
//             </span>
  
//             <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] text-slate-900 md:text-7xl">
//               Delivering Healthcare
//               Beyond Borders.
//             </h2>
  
//             <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-600">
//               Supporting domestic and international pharmaceutical markets
//               through manufacturing expertise, regulatory support,
//               documentation, and export-focused solutions.
//             </p>
//           </div>
  
//           <div className="mt-20 grid gap-8 md:grid-cols-3">
//             {stats.map((item) => (
//               <div
//                 key={item.label}
//                 className="rounded-[32px] border border-slate-200 p-10 text-center"
//               >
//                 <h3 className="text-5xl font-bold text-purple-700">
//                   {item.value}
//                 </h3>
  
//                 <p className="mt-4 uppercase tracking-[0.2em] text-slate-500">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }