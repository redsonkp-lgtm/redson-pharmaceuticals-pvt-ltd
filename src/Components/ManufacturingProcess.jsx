const process = [
    "Research",
    "Development",
    "Testing",
    "Production",
    "Packaging",
    "Distribution",
  ];
  
  export default function ManufacturingProcess() {
    return (
      <section className="bg-white py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="max-w-4xl">
            <span className="text-sm uppercase tracking-[0.25em] text-purple-700">
              Process
            </span>
  
            <h2 className="mt-6 text-6xl font-bold tracking-tight text-slate-900">
              How We Deliver
              Pharmaceutical Excellence.
            </h2>
          </div>
  
          <div className="mt-24 grid gap-8 md:grid-cols-3 xl:grid-cols-6">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-slate-200 p-8"
              >
                <span className="text-sm text-purple-600">
                  0{index + 1}
                </span>
  
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }