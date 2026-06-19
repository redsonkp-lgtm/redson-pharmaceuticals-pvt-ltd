import {
    BadgeCheck,
    ShieldCheck,
    FileCheck,
    Award,
  } from "lucide-react";
  
  const certifications = [
    "WHO-GMP Certified",
    "ISO Certified",
    "Quality Compliance",
    "Export Documentation Ready",
  ];
  
  const icons = [BadgeCheck, ShieldCheck, FileCheck, Award];
  
  export default function Certifications() {
    return (
      <section className="bg-slate-950 py-14 lg:py-16 text-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Certifications
              </span>
            </div>
  
            <h2 className="mt-5 text-4xl font-bold md:text-5xl xl:text-[56px]">
              Certified For Quality
              <br />
              & Compliance.
            </h2>
          </div>
  
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {certifications.map((item, index) => {
              const Icon = icons[index];
  
              return (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <Icon size={22} className="text-[var(--primary)]" />
  
                  <h3 className="mt-4 text-lg font-semibold">
                    {item}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }