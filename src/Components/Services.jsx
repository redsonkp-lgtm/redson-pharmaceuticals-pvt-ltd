import { ArrowRight } from "lucide-react";

const services = [
  "Contract Manufacturing",
  "Third Party Manufacturing",
  "Private Label Manufacturing",
  "Custom Packaging",
];

export default function Services() {
  return (
    <section className="bg-slate-950 py-32 text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <span className="text-sm uppercase tracking-[0.25em] text-purple-300">
          Services
        </span>

        <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] md:text-7xl">
          Manufacturing Solutions
          <br />
          Built Around Your Brand.
        </h2>

        <div className="mt-20">
          {services.map((service) => (
            <div
              key={service}
              className="group flex items-center justify-between border-b border-white/10 py-10"
            >
              <h3 className="text-3xl font-semibold md:text-5xl">
                {service}
              </h3>

              <ArrowRight className="transition group-hover:translate-x-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}