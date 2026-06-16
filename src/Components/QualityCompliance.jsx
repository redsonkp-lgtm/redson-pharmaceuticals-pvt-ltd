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
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-700">
                Quality & Compliance
              </span>
  
              <h2 className="mt-8 text-6xl font-bold tracking-[-0.05em] text-slate-900 md:text-7xl">
                Quality Built
                <br />
                Into Every Batch.
              </h2>
  
              <p className="mt-8 text-xl leading-relaxed text-slate-600">
                At REDSON Pharmaceuticals, quality is integrated into every
                stage of manufacturing. From raw material evaluation to final
                product release, our systems are designed to maintain
                consistency, safety, and regulatory compliance.
              </p>
  
              <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-5 text-white hover:bg-slate-800">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
  
            {/* Right Side */}
            <div className="space-y-6">
              {qualityItems.map((item) => {
                const Icon = item.icon;
  
                return (
                  <div
                    key={item.title}
                    className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
                  >
                    <div className="flex gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                        <Icon
                          size={28}
                          className="text-purple-700"
                        />
                      </div>
  
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {item.title}
                        </h3>
  
                        <p className="mt-4 leading-8 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }