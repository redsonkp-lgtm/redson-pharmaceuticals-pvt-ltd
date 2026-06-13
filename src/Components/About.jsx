import {
    Building2,
    Shield,
    Microscope,
    BadgeCheck,
  } from "lucide-react";
  
  const features = [
    {
      icon: Building2,
      badge: "GMP COMPLIANT",
      title: "WHO-GMP Certified Facility",
      description:
        "Our Mohali plant operates under World Health Organization GMP guidelines — every process documented, validated, and continuously audited for full international compliance.",
    },
    {
      icon: Shield,
      badge: "STERILE ZONE",
      title: "Clean Room Production",
      description:
        "Dedicated clean rooms with HEPA filtration, differential pressure monitoring, and strict gowning protocols for contamination-free sterile manufacturing.",
    },
    {
      icon: Microscope,
      badge: "QC CERTIFIED",
      title: "In-House Analytical Lab",
      description:
        "Full-spectrum QC laboratory running HPLC, dissolution testing, microbiological analysis, and accelerated stability studies on every batch.",
    },
    {
      icon: BadgeCheck,
      badge: "AUDIT-READY",
      title: "Regulatory Compliance",
      description:
        "End-to-end batch documentation, SOPs, and traceability records ensure our facility is perpetually ready for regulatory inspections and audits.",
    },
  ];
  
  export default function About() {
    return (
      <section className="bg-[#f7f8fa] py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-sky-500">
              About Ziora
            </p>
  
            <h2 className="text-5xl font-bold tracking-tight text-[#14213d] md:text-6xl">
              Precision-Driven
            </h2>
  
            <h3 className="mt-2 font-serif text-5xl italic text-[#14213d] md:text-6xl">
              Pharmaceutical Manufacturing
            </h3>
  
            <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-sky-500" />
          </div>
  
          {/* Description */}
          <div className="mx-auto mt-16 max-w-5xl text-center">
            <p className="text-2xl leading-relaxed text-slate-700">
              At{" "}
              <span className="font-bold text-slate-900">
                Ziora Pharmaceuticals
              </span>
              , precision is not just a standard — it is our ethos.
              We fuse advanced formulation expertise with
              uncompromising quality control to manufacture
              tablets, capsules, injections, syrups, and oral
              liquids for the pharmaceutical market.
            </p>
  
            <p className="mt-10 text-xl leading-relaxed text-slate-500">
              Based in Mohali, Punjab — the pharmaceutical hub of
              North India — our WHO-GMP certified facility combines
              modern production systems with documented quality
              controls to deliver safe, effective, and consistently
              high-quality medicines for healthcare brands across
              India.
            </p>
          </div>
  
          {/* Feature Cards */}
          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={index}
                  className="group relative rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Top Row */}
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#162846] text-sky-400">
                      <Icon size={24} />
                    </div>
  
                    <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold tracking-[0.15em] text-sky-500">
                      {feature.badge}
                    </span>
                  </div>
  
                  <h4 className="mb-4 text-2xl font-bold text-slate-800">
                    {feature.title}
                  </h4>
  
                  <p className="leading-8 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }