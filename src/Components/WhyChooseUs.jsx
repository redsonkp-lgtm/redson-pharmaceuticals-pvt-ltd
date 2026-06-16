import {
    Factory,
    ShieldCheck,
    Globe,
    FlaskConical,
    PackageCheck,
    Users,
  } from "lucide-react";
  
  const features = [
    {
      icon: Factory,
      title: "Advanced Infrastructure",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
    },
    {
      icon: FlaskConical,
      title: "Research & Development",
    },
    {
      icon: PackageCheck,
      title: "Private Label Solutions",
    },
    {
      icon: Globe,
      title: "Export Support",
    },
    {
      icon: Users,
      title: "Customer Focused",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-slate-950 py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
              Why Choose REDSON
            </span>
  
            <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] text-white md:text-7xl">
              Built Around
              <br />
              Quality & Trust.
            </h2>
          </div>
  
          <div className="mx-auto mt-24 grid max-w-6xl gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                    <Icon className="text-purple-300" />
                  </div>
  
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }