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
    <section className="bg-white py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Gallery
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl xl:text-[56px]">
            Inside Our Manufacturing
            <br />
            Facilities.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px]"
            >
              <Image
                src={image}
                alt="Gallery"
                width={600}
                height={500}
                className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}