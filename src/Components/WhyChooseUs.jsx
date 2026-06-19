import {
  Factory,
  ShieldCheck,
  Globe,
  FlaskConical,
  PackageCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Advanced Infrastructure",
    description:
      "Modern manufacturing facilities designed for scalable pharmaceutical production across multiple dosage forms.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Integrated quality systems focused on consistency, compliance, safety, and product reliability.",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    description:
      "Continuous innovation and formulation support to help customers develop competitive healthcare products.",
  },
  {
    icon: PackageCheck,
    title: "Private Label Solutions",
    description:
      "Customized branding, packaging, and labeling services tailored to market-specific requirements.",
  },
  {
    icon: Globe,
    title: "Export Support",
    description:
      "Comprehensive export assistance and documentation support for domestic and international markets.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "Collaborative partnerships built around responsiveness, transparency, and long-term business growth.",
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
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 lg:py-16">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[360px] w-[360px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Why Choose REDSON
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-5xl xl:text-[56px]">
              Built Around
              <br />
              Quality & Trust.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
              Combining manufacturing expertise, quality systems,
              innovation, and customer-focused services to support
              pharmaceutical brands at every stage of growth.
            </p>

            {/* Trust Stats */}
            <div className="mt-8 space-y-4 border-l border-white/10 pl-5">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-2xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Matrix */}
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[24px] border border-white/10 p-5 transition-all duration-300 hover:border-[var(--primary)]/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                    <Icon
                      size={18}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
  









// import {
//     Factory,
//     ShieldCheck,
//     Globe,
//     FlaskConical,
//     PackageCheck,
//     Users,
//   } from "lucide-react";
  
//   const features = [
//     {
//       icon: Factory,
//       title: "Advanced Infrastructure",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Quality Assurance",
//     },
//     {
//       icon: FlaskConical,
//       title: "Research & Development",
//     },
//     {
//       icon: PackageCheck,
//       title: "Private Label Solutions",
//     },
//     {
//       icon: Globe,
//       title: "Export Support",
//     },
//     {
//       icon: Users,
//       title: "Customer Focused",
//     },
//   ];
  
//   export default function WhyChooseUs() {
//     return (
//       <section className="bg-slate-950 py-32">
//         <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//           <div className="text-center">
//             <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
//               Why Choose REDSON
//             </span>
  
//             <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] text-white md:text-7xl">
//               Built Around
//               <br />
//               Quality & Trust.
//             </h2>
//           </div>
  
//           <div className="mx-auto mt-24 grid max-w-6xl gap-8 md:grid-cols-3">
//             {features.map((feature) => {
//               const Icon = feature.icon;
  
//               return (
//                 <div
//                   key={feature.title}
//                   className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
//                     <Icon className="text-purple-300" />
//                   </div>
  
//                   <h3 className="mt-6 text-2xl font-bold text-white">
//                     {feature.title}
//                   </h3>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     );
//   }