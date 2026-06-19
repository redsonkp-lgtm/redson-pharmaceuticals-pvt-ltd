import { Factory, ArrowRight } from "lucide-react";

export default function ContractManufacturing() {
  return (
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
              <Factory size={24} className="text-[var(--primary)]" />
            </div>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Contract Manufacturing
            </h2>

            <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
              End-to-end pharmaceutical manufacturing support including
              formulation, production, packaging, and regulatory-focused
              operations for healthcare brands.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 p-8">
            <ul className="space-y-4 text-slate-700">
              <li>• Scalable production capacity</li>
              <li>• Multiple dosage forms</li>
              <li>• Quality-focused manufacturing</li>
              <li>• Regulatory-compliant operations</li>
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