import {
  Pill,
  Syringe,
  FlaskConical,
  Eye,
  ShieldPlus,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    title: "Tablet Manufacturing",
    subtitle: "Precision Solid Dosage Forms",
    image: "/images/tablets.jpg",
    description:
      "Manufacturing solutions for coated tablets, chewable tablets, dispersible tablets, and sustained-release formulations.",
    features: [
      "Film Coated",
      "Dispersible",
      "Chewable",
      "Sustained Release",
    ],
  },
  {
    title: "Capsule Manufacturing",
    subtitle: "Reliable Capsule Production",
    image: "/images/capsules.jpg",
    description:
      "Hard gelatin capsules and specialized formulations manufactured with strict quality controls and batch consistency.",
    features: [
      "Hard Gelatin",
      "Pellet Capsules",
      "Combination Products",
      "Custom Formulations",
    ],
  },
  {
    title: "Injectable Manufacturing",
    subtitle: "Sterile & Critical Care Solutions",
    image: "/images/injectables.jpg",
    description:
      "Sterile manufacturing processes designed for injectable formulations with quality assurance at every stage.",
    features: [
      "Dry Powder",
      "Liquid Injections",
      "Sterile Filling",
      "QC Tested",
    ],
  },
  {
    title: "Liquid Oral Manufacturing",
    subtitle: "Pediatric & Adult Formulations",
    image: "/images/liquid-orals.jpg",
    description:
      "Comprehensive manufacturing of syrups, suspensions, and oral liquid formulations.",
    features: [
      "Syrups",
      "Suspensions",
      "Oral Solutions",
      "Nutraceuticals",
    ],
  },
  {
    title: "Eye Drops",
    subtitle: "Specialized Ophthalmic Manufacturing",
    image: "/images/eyedrops.jpg",
    description:
      "Sterile ophthalmic manufacturing supported by advanced quality systems and regulatory compliance.",
    features: [
      "Ophthalmic Solutions",
      "Sterile Processing",
      "Quality Assurance",
      "Regulatory Support",
    ],
  },
  {
    title: "Veterinary Products",
    subtitle: "Animal Healthcare Solutions",
    image: "/images/veterinary.jpg",
    description:
      "Manufacturing support for veterinary healthcare formulations and private-label animal health products.",
    features: [
      "Veterinary Formulations",
      "Private Label",
      "Custom Packaging",
      "Export Ready",
    ],
  },
];

const icons = [
  Pill,
  Pill,
  Syringe,
  FlaskConical,
  Eye,
  ShieldPlus,
];

export default function ManufacturingCapabilities() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-5xl">
          <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            Manufacturing Capabilities
          </span>

          <h2 className="mt-8 text-6xl font-bold tracking-[-0.05em] text-white md:text-7xl xl:text-8xl">
            Built Across
            <br />
            Multiple
            <span className="text-purple-400"> Dosage Forms.</span>
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-slate-400">
            Comprehensive pharmaceutical manufacturing capabilities supported
            by advanced infrastructure, quality assurance systems, and
            customer-focused production solutions.
          </p>
        </div>

        {/* Capability Grid */}
        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30"
              >
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
                    <Icon size={24} className="text-purple-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="mb-3 text-sm uppercase tracking-[0.2em] text-purple-300">
                    {item.subtitle}
                  </p>

                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="mt-8 inline-flex items-center gap-3 text-purple-300 transition hover:gap-4">
                    <span className="font-semibold">
                      Explore Capability
                    </span>

                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                Integrated Manufacturing Solutions
              </p>

              <h3 className="mt-4 text-4xl font-bold text-white">
                Contract Manufacturing, Private Labeling &
                Export Support
              </h3>

              <p className="mt-4 max-w-3xl text-lg text-slate-400">
                Supporting pharmaceutical companies with scalable
                manufacturing, packaging, quality assurance, and
                international distribution capabilities.
              </p>
            </div>

            <button className="rounded-full bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-500">
              Request Manufacturing Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}









// import {
//     Tablet,
//     Pill,
//     Syringe,
//     FlaskConical,
//     ArrowRight,
//   } from "lucide-react";
  
//   const divisions = [
//     {
//       title: "Tablet Division",
//       icon: Tablet,
//       variants: "20+ Variants",
//       image:
//         "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200",
//       description:
//         "Comprehensive tablet manufacturing including coated, dispersible and sustained-release formulations.",
//       tags: [
//         "Film Coated Tablets",
//         "Dispersible Tablets",
//         "Sustained Release",
//         "Beta & Non-Beta",
//       ],
//     },
//     {
//       title: "Capsule Division",
//       icon: Pill,
//       variants: "8 Variants",
//       image:
//         "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1200",
//       description:
//         "Hard gelatin capsules and pellets for gastro, anti-infective and anti-fungal formulations.",
//       tags: [
//         "Hard Gelatin Capsules",
//         "Enteric Coated Pellets",
//         "Sustained Release",
//         "Dual Drug Combinations",
//       ],
//     },
//     {
//       title: "Injection Division",
//       icon: Syringe,
//       variants: "7 Variants",
//       image:
//         "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200",
//       description:
//         "Sterile injectable manufacturing with aseptic processing for broad-spectrum antibiotics and critical care.",
//       tags: [
//         "Dry Powder Injections",
//         "Sterile Vials",
//         "Broad Spectrum",
//         "Critical Care",
//       ],
//     },
//     {
//       title: "Syrup Division",
//       icon: FlaskConical,
//       variants: "10 Variants",
//       image:
//         "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200",
//       description:
//         "Palatable liquid formulations for pediatrics and adults including cough syrups and nutritional supplements.",
//       tags: [
//         "Cough Syrups",
//         "Antacid Suspensions",
//         "Nutritional Supplements",
//         "Pediatric Formulations",
//       ],
//     },
//   ];
  
//   export default function ManufacturingDivisions() {
//     return (
//       <section className="relative overflow-hidden bg-[#081a38] py-28">
//         {/* Background Glow */}
//         <div className="absolute inset-0">
//           <div className="absolute left-1/3 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
//           <div className="absolute right-1/4 bottom-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
//         </div>
  
//         {/* Tiny Dots */}
//         <div className="absolute inset-0 opacity-30">
//           {[...Array(30)].map((_, i) => (
//             <span
//               key={i}
//               className="absolute h-1 w-1 rounded-full bg-cyan-400"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//             />
//           ))}
//         </div>
  
//         <div className="relative z-10 mx-auto max-w-[1400px] px-4">
//           {/* Header */}
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
//               What We Manufacture
//             </p>
  
//             <h2 className="text-5xl font-bold text-white md:text-6xl">
//               Manufacturing
//             </h2>
  
//             <h3 className="font-serif text-5xl italic text-cyan-400 md:text-6xl">
//               Divisions
//             </h3>
  
//             <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-cyan-400" />
  
//             <p className="mt-10 text-xl leading-relaxed text-slate-400">
//               Four specialized divisions producing high-quality
//               pharmaceutical formulations across multiple
//               therapeutic categories.
//             </p>
//           </div>
  
//           {/* Cards */}
//           <div className="mt-20 grid gap-8 lg:grid-cols-2">
//             {divisions.map((division, index) => {
//               const Icon = division.icon;
  
//               return (
//                 <article
//                   key={index}
//                   className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b2147]"
//                 >
//                   {/* Background Image */}
//                   <div
//                     className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
//                     style={{
//                       backgroundImage: `url(${division.image})`,
//                     }}
//                   />
  
//                   {/* Dark Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#081a38]/85 via-[#081a38]/75 to-[#081a38]/95" />
  
//                   {/* Glow */}
//                   <div className="absolute inset-0 bg-cyan-500/5 opacity-0 transition group-hover:opacity-100" />
  
//                   <div className="relative z-10 flex h-full flex-col p-9">
//                     {/* Top */}
//                     <div className="mb-8 flex items-start justify-between">
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
//                         <Icon size={26} />
//                       </div>
  
//                       <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-600">
//                         {division.variants}
//                       </span>
//                     </div>
  
//                     {/* Content */}
//                     <h3 className="mb-4 text-4xl font-bold text-white">
//                       {division.title}
//                     </h3>
  
//                     <p className="max-w-xl text-lg leading-relaxed text-slate-300">
//                       {division.description}
//                     </p>
  
//                     {/* Tags */}
//                     <div className="mt-8 flex flex-wrap gap-3">
//                       {division.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
  
//                     {/* CTA */}
//                     <button className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-cyan-400 transition hover:gap-4">
//                       View Products
//                       <ArrowRight size={18} />
//                     </button>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     );
//   }