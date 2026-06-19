import {
    Globe,
    FileCheck,
    Truck,
    ArrowRight,
  } from "lucide-react";
  
  const exportItems = [
    {
      icon: Globe,
      title: "International Reach",
    },
    {
      icon: FileCheck,
      title: "Documentation Support",
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
    },
  ];
  
  export default function ExportServices() {
    return (
      <section className="bg-slate-950 py-14 lg:py-16 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold md:text-5xl">
              Export Services
            </h2>
  
            <p className="mt-5 max-w-2xl text-slate-400">
              Supporting pharmaceutical companies with export-ready
              manufacturing, compliance documentation, and logistics
              coordination for global markets.
            </p>
          </div>
  
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {exportItems.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <Icon size={22} className="text-[var(--primary)]" />
  
                  <h3 className="mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
  
          <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
            Explore Export Solutions <ArrowRight size={16} />
          </button>
        </div>
      </section>
    );
  }