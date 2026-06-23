import Link from "next/link";
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
    description:
      "Serving pharmaceutical partners with export-ready manufacturing support for domestic and international markets.",
  },
  {
    icon: FileCheck,
    title: "Documentation Support",
    description:
      "Complete export documentation, compliance paperwork, and shipment readiness assistance for smooth operations.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "Coordinated delivery systems designed for efficient, secure, and timely supply chain movement worldwide.",
  },
];

export default function ExportServices() {
  return (
    <section
      id="#exportservices"
      className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[280px] lg:w-[280px] rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
              Export Services
            </span>
          </div>

          <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
            Global Supply,
            <br />
            <span className="text-[var(--primary)]">
              Delivered With Confidence.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
            Supporting pharmaceutical businesses with export-ready
            manufacturing, compliance documentation, and logistics
            coordination for seamless international delivery.
          </p>
        </div>

        {/* Export Flow */}
        <div className="mt-10 sm:mt-12 lg:mt-14 grid gap-8 sm:gap-10 md:grid-cols-3">
          {exportItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative">
                {/* Connector Line */}
                {index !== exportItems.length - 1 && (
                  <div className="absolute left-[64px] top-6 hidden h-px w-full bg-slate-200 md:block" />
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-[var(--primary)]/20 hover:bg-white">
                    <Icon
                      size={20}
                      className="text-[var(--primary)]"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-8 sm:mt-10 inline-flex min-h-[48px] w-full sm:w-fit items-center justify-center gap-2 rounded-full border border-[var(--primary)] px-5 sm:px-6 py-3 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:gap-3 active:scale-[0.98]"
        >
          Explore Export Solutions
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}