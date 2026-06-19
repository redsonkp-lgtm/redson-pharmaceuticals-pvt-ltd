import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-12">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-slate-950 px-8 py-10 text-center text-white md:px-12 md:py-12">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-[var(--primary)]/15 blur-[90px]" />
        <div className="absolute right-0 bottom-0 h-[220px] w-[220px] rounded-full bg-[var(--primary)]/10 blur-[90px]" />

        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-4 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Let's Work Together
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-bold leading-[1] tracking-[-0.04em] text-white md:text-5xl xl:text-[52px]">
            Looking for a Reliable
            <br />
            Pharmaceutical Manufacturing Partner?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
            Partner with REDSON Pharmaceuticals for quality-driven
            manufacturing, private labeling, packaging solutions,
            regulatory support, and scalable production capabilities
            designed for growing healthcare brands.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90">
              Request Manufacturing Quote

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Our Team
            </button>
          </div>

          {/* Bottom confidence strip */}
          <div className="mt-7 border-t border-white/10 pt-4">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 md:text-sm">
              <span>Contract Manufacturing</span>
              <span>Private Label Solutions</span>
              <span>Export Support</span>
              <span>Regulatory Assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









// export default function CTA() {
//     return (
//       <section className="px-6 py-20 lg:px-10">
//         <div className="mx-auto max-w-[1440px] rounded-[48px] bg-slate-950 px-12 py-20 text-center text-white">
//           <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
//             Looking for a Reliable
//             <br />
//             Pharmaceutical Manufacturing Partner?
//           </h2>
  
//           <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
//             Let's build healthcare solutions together through quality,
//             innovation, and scalable manufacturing.
//           </p>
  
//           <button className="mt-10 rounded-full bg-purple-600 px-8 py-5 font-semibold text-white hover:bg-purple-500">
//             Request Manufacturing Quote
//           </button>
//         </div>
//       </section>
//     );
//   }