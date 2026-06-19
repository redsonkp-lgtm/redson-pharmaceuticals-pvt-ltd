import { PackageCheck, ArrowRight } from "lucide-react";

export default function ThirdPartyManufacturing() {
  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
              <PackageCheck size={24} className="text-[var(--primary)]" />
            </div>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Third Party Manufacturing
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
              Reliable third-party manufacturing solutions designed to
              support product expansion, operational efficiency, and
              faster market entry.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8">
            <ul className="space-y-4 text-slate-700">
              <li>• Dedicated production support</li>
              <li>• Private label manufacturing</li>
              <li>• Customized packaging</li>
              <li>• Flexible batch sizes</li>
            </ul>

            <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}