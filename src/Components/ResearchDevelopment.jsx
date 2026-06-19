import {
    FlaskConical,
    Microscope,
    Beaker,
    Lightbulb,
  } from "lucide-react";
  
  const researchItems = [
    {
      icon: FlaskConical,
      title: "Formulation Development",
      description:
        "Customized pharmaceutical formulations designed to meet specific market and therapeutic requirements.",
    },
    {
      icon: Microscope,
      title: "Stability Studies",
      description:
        "Scientific evaluation of product stability, shelf life, and packaging compatibility.",
    },
    {
      icon: Beaker,
      title: "Process Optimization",
      description:
        "Continuous improvements in manufacturing efficiency, consistency, and scalability.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Support",
      description:
        "Helping brands develop competitive and future-ready healthcare products.",
    },
  ];
  
  export default function ResearchDevelopment() {
    return (
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div>
              <div className="inline-flex rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Research & Development
                </span>
              </div>
  
              <h2 className="mt-5 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-5xl xl:text-[56px]">
                Innovation Backed
                <br />
                By Science.
              </h2>
  
              <p className="mt-5 text-slate-600 leading-relaxed">
                Our R&D capabilities focus on formulation innovation,
                process optimization, and product enhancement to support
                evolving healthcare demands.
              </p>
            </div>
  
            {/* Right */}
            <div className="grid gap-5 md:grid-cols-2">
              {researchItems.map((item) => {
                const Icon = item.icon;
  
                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 p-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                      <Icon size={18} className="text-[var(--primary)]" />
                    </div>
  
                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
  
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
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