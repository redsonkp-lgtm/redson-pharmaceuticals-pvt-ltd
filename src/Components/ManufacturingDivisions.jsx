import {
    Tablet,
    Pill,
    Syringe,
    FlaskConical,
    ArrowRight,
  } from "lucide-react";
  
  const divisions = [
    {
      title: "Tablet Division",
      icon: Tablet,
      variants: "20+ Variants",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200",
      description:
        "Comprehensive tablet manufacturing including coated, dispersible and sustained-release formulations.",
      tags: [
        "Film Coated Tablets",
        "Dispersible Tablets",
        "Sustained Release",
        "Beta & Non-Beta",
      ],
    },
    {
      title: "Capsule Division",
      icon: Pill,
      variants: "8 Variants",
      image:
        "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1200",
      description:
        "Hard gelatin capsules and pellets for gastro, anti-infective and anti-fungal formulations.",
      tags: [
        "Hard Gelatin Capsules",
        "Enteric Coated Pellets",
        "Sustained Release",
        "Dual Drug Combinations",
      ],
    },
    {
      title: "Injection Division",
      icon: Syringe,
      variants: "7 Variants",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200",
      description:
        "Sterile injectable manufacturing with aseptic processing for broad-spectrum antibiotics and critical care.",
      tags: [
        "Dry Powder Injections",
        "Sterile Vials",
        "Broad Spectrum",
        "Critical Care",
      ],
    },
    {
      title: "Syrup Division",
      icon: FlaskConical,
      variants: "10 Variants",
      image:
        "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200",
      description:
        "Palatable liquid formulations for pediatrics and adults including cough syrups and nutritional supplements.",
      tags: [
        "Cough Syrups",
        "Antacid Suspensions",
        "Nutritional Supplements",
        "Pediatric Formulations",
      ],
    },
  ];
  
  export default function ManufacturingDivisions() {
    return (
      <section className="relative overflow-hidden bg-[#081a38] py-28">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/3 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
          <div className="absolute right-1/4 bottom-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
        </div>
  
        {/* Tiny Dots */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-cyan-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
  
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
              What We Manufacture
            </p>
  
            <h2 className="text-5xl font-bold text-white md:text-6xl">
              Manufacturing
            </h2>
  
            <h3 className="font-serif text-5xl italic text-cyan-400 md:text-6xl">
              Divisions
            </h3>
  
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-cyan-400" />
  
            <p className="mt-10 text-xl leading-relaxed text-slate-400">
              Four specialized divisions producing high-quality
              pharmaceutical formulations across multiple
              therapeutic categories.
            </p>
          </div>
  
          {/* Cards */}
          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {divisions.map((division, index) => {
              const Icon = division.icon;
  
              return (
                <article
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b2147]"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${division.image})`,
                    }}
                  />
  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#081a38]/85 via-[#081a38]/75 to-[#081a38]/95" />
  
                  {/* Glow */}
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 transition group-hover:opacity-100" />
  
                  <div className="relative z-10 flex h-full flex-col p-9">
                    {/* Top */}
                    <div className="mb-8 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        <Icon size={26} />
                      </div>
  
                      <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-cyan-600">
                        {division.variants}
                      </span>
                    </div>
  
                    {/* Content */}
                    <h3 className="mb-4 text-4xl font-bold text-white">
                      {division.title}
                    </h3>
  
                    <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                      {division.description}
                    </p>
  
                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {division.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
  
                    {/* CTA */}
                    <button className="mt-10 inline-flex items-center gap-3 text-lg font-semibold text-cyan-400 transition hover:gap-4">
                      View Products
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }