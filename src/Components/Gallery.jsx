import Image from "next/image";

const gallery = [
  "/temp-img-01.png",
  "/temp-img-01.png",
  "/temp-img-01.png",
  "/temp-img-01.png",
  "/temp-img-01.png",
  "/temp-img-01.png",
];

export default function Gallery() {
  return (
    <section id="#gallery" className="relative overflow-hidden bg-white py-12">
      {/* Background */}
      <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
        <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                Our Gallery
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[58px]">
              Inside Our               
              <br />
              <span className="text-[var(--primary)]">
                {" "}
                Manufacturing Facilities.
              </span>
            </h2>

          <p className="mt-5 max-w-2xl text-slate-600 leading-relaxed">
            Explore our advanced pharmaceutical manufacturing
            infrastructure, quality systems, and production environments.
          </p>
        </div>

        {/* Top Showcase */}
        <div className="mt-14 grid gap-3 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Large Image */}
          <div className="group overflow-hidden rounded-[28px]">
            <Image
              src={gallery[0]}
              alt="Manufacturing Facility"
              width={900}
              height={800}
              className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Stack */}
          <div className="grid gap-3">
            {[gallery[1], gallery[2]].map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[28px]"
              >
                <Image
                  src={image}
                  alt="Manufacturing Unit"
                  width={500}
                  height={400}
                  className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[gallery[3], gallery[4], gallery[5]].map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px]"
            >
              <Image
                src={image}
                alt="Production Area"
                width={500}
                height={400}
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}