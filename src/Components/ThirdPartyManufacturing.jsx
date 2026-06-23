import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Dedicated manufacturing support for growing brands",
  "Private label and white-label production solutions",
  "Customized packaging and branding flexibility",
  "Flexible batch sizes for scalable market entry",
];

export default function ThirdPartyManufacturing() {
  return (
    <section
      id="thirdpartymanufacturing"
      className="relative overflow-hidden bg-slate-50 py-12 sm:py-14 lg:py-16"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[280px] lg:w-[280px] rounded-full bg-[var(--primary)]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 sm:gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="order-2 lg:order-1 rounded-[24px] sm:rounded-[28px] border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-[var(--primary)]/20 hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
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
              className="mt-6 sm:mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:gap-3"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2 flex flex-col items-start h-full">
            <div className="inline-flex max-w-full items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-3 sm:px-4 py-2 sm:py-2.5">
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--primary)] leading-snug">
                Third Party Manufacturing
              </span>
            </div>

            <h2 className="mt-4 text-[34px] sm:text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
              Expand Faster,
              <br />
              <span className="text-[var(--primary)]">
                Manufacture Smarter.
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600">
              Reliable third-party manufacturing solutions designed
              to help pharmaceutical businesses expand product lines,
              improve efficiency, and accelerate market entry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}