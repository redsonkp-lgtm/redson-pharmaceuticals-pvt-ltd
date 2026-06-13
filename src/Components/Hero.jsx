import {
    ShieldCheck,
    Factory,
    FlaskConical,
    Package,
    ArrowRight,
  } from "lucide-react";
  
  export default function Hero() {
    const features = [
      {
        icon: ShieldCheck,
        title: "WHO-GMP aligned facility",
      },
      {
        icon: Factory,
        title: "Third-party manufacturing",
      },
      {
        icon: FlaskConical,
        title: "Quality formulation support",
      },
      {
        icon: Package,
        title: "Product-first presentation",
      },
    ];
  
    return (
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-50 via-white to-slate-50">
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
  
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-5 py-3 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-700">
              Trusted Pharmaceutical Manufacturing
            </span>
          </div>
  
          {/* Content */}
          <div className="mt-8 max-w-4xl">
            <h1 className="text-5xl font-extrabold leading-none tracking-tight text-slate-900 md:text-7xl">
              Pharma manufacturing
              <br />
              for{" "}
              <span className="text-blue-600">
                tablets, capsules,
              </span>
              <br />
              <span className="text-sky-500">
                injections, and syrups.
              </span>
            </h1>
  
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
              Ziora Pharmaceuticals is a third-party pharmaceutical
              manufacturing company based in Mohali, Punjab, focused on
              dependable production, clear communication, and consistent
              quality across core dosage forms.
            </p>
  
            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-slate-900 px-10 py-4 text-lg font-semibold text-white transition hover:bg-slate-800">
                View Products
              </button>
  
              <button className="rounded-full border border-slate-300 bg-white px-10 py-4 text-lg font-medium text-slate-800 transition hover:bg-slate-50">
                Get In Touch
              </button>
            </div>
          </div>
  
          {/* Feature Cards */}
          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50">
                    <Icon className="h-6 w-6 text-sky-500" />
                  </div>
  
                  <p className="text-lg font-medium text-slate-800">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
  
          {/* Export Card */}
          <div className="mt-10 rounded-[32px] border border-sky-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-sky-500">
                  Export
                </p>
  
                <h3 className="text-4xl font-bold text-slate-800">
                  Check out our export options!
                </h3>
  
                <p className="mt-4 max-w-3xl text-lg text-slate-600">
                  We also export all the products internationally through a
                  smooth, documentation-ready, and compliance-focused process.
                </p>
              </div>
  
              <button className="flex items-center gap-4 rounded-full bg-slate-900 px-8 py-5 text-lg font-semibold text-white hover:bg-slate-800">
                Open Export Page
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }