import Link from "next/link";
import {
  Factory,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Scalable production capacity",
  "Multiple dosage forms support",
  "GMP compliant manufacturing",
  "Regulatory-focused operations",
];

export default function ContractManufacturing() {
  return (
    <section id="#contractmanufacturing" className="relative overflow-hidden bg-white py-16">
      {/* Background */}
      <div className="absolute left-0 top-0 h-[280px] w-[280px] rounded-full bg-[var(--primary)]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Contract Manufacturing
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
                Reliable Manufacturing,
              <br />
                Multiple
              <span className="text-[var(--primary)]">
                {" "}
                Built for Your Growth.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
              End-to-end pharmaceutical manufacturing support including
              formulation development, production, packaging, and
              compliance-focused operations designed to help healthcare
              brands scale efficiently.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-[var(--primary)]/20 hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <CheckCircle2
                        size={16}
                        className="text-[var(--primary)]"
                      />
                    </div>

                    <p className="text-sm font-medium leading-6 text-slate-700">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-all hover:gap-3"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}