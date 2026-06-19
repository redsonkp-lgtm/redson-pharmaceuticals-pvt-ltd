import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Contract Manufacturing",
    description:
      "End-to-end pharmaceutical manufacturing solutions with scalable production capabilities and quality-focused processes.",
  },
  {
    title: "Third Party Manufacturing",
    description:
      "Reliable manufacturing partnerships designed to support product expansion, market growth, and operational efficiency.",
  },
  {
    title: "Private Label Manufacturing",
    description:
      "Customized product branding, packaging, and labeling solutions tailored to your business requirements.",
  },
  {
    title: "Custom Packaging",
    description:
      "Flexible packaging formats, artwork support, and market-ready solutions for domestic and export markets.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 lg:py-20 text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[var(--primary)]/10 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[var(--primary)]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Services
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-6xl xl:text-[64px]">
            Manufacturing Solutions
            <br />
            Built Around Your Brand.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
            Flexible pharmaceutical manufacturing services designed to
            support product development, production, branding, packaging,
            and global market expansion.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-14">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative ${
                index !== services.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="absolute left-0 top-0 h-full w-px bg-white/10 transition-all duration-300 group-hover:bg-[var(--primary)]" />

              <div className="flex flex-col gap-6 py-8 pl-6 md:flex-row md:items-center md:justify-between">
                {/* Left Content */}
                <div className="flex gap-6">
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-all group-hover:gap-3">
                  Learn More

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Inline CTA */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--primary)]">
              Partnership Driven Manufacturing
            </p>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
              From formulation support and manufacturing to packaging
              and export assistance, REDSON Pharmaceuticals helps
              healthcare brands bring products to market efficiently.
            </p>
          </div>

          <button className="rounded-full bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
}










// import { ArrowRight } from "lucide-react";

// const services = [
//   "Contract Manufacturing",
//   "Third Party Manufacturing",
//   "Private Label Manufacturing",
//   "Custom Packaging",
// ];

// export default function Services() {
//   return (
//     <section className="bg-slate-950 py-32 text-white">
//       <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//         <span className="text-sm uppercase tracking-[0.25em] text-purple-300">
//           Services
//         </span>

//         <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] md:text-7xl">
//           Manufacturing Solutions
//           <br />
//           Built Around Your Brand.
//         </h2>

//         <div className="mt-20">
//           {services.map((service) => (
//             <div
//               key={service}
//               className="group flex items-center justify-between border-b border-white/10 py-10"
//             >
//               <h3 className="text-3xl font-semibold md:text-5xl">
//                 {service}
//               </h3>

//               <ArrowRight className="transition group-hover:translate-x-2" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }