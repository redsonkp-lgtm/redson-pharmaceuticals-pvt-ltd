const stats = [
  {
    value: "Global",
    label: "Export Support",
  },
  {
    value: "100%",
    label: "Documentation Ready",
  },
  {
    value: "24/7",
    label: "Business Support",
  },
];

export default function GlobalReach() {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 text-center">
        <span className="text-sm uppercase tracking-[0.3em] text-purple-300">
          Global Reach
        </span>

        <h2 className="mt-6 text-6xl font-bold text-white">
          Delivering Healthcare
          Beyond Borders.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-400">
          Supporting pharmaceutical businesses with manufacturing,
          regulatory support, packaging, and export-ready solutions.
        </p>

        {/* World Map Image */}
        <div className="mt-20">
          <img
            src="/images/world-map.svg"
            alt="Global Reach"
            className="mx-auto opacity-80"
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10"
            >
              <h3 className="text-5xl font-bold text-purple-300">
                {item.value}
              </h3>

              <p className="mt-3 uppercase tracking-[0.25em] text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}








// const stats = [
//     {
//       value: "Global",
//       label: "Export Support",
//     },
//     {
//       value: "100%",
//       label: "Documentation Ready",
//     },
//     {
//       value: "24/7",
//       label: "Business Assistance",
//     },
//   ];
  
//   export default function GlobalReach() {
//     return (
//       <section className="bg-white py-32">
//         <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
//           <div className="text-center">
//             <span className="text-sm uppercase tracking-[0.25em] text-purple-700">
//               Global Reach
//             </span>
  
//             <h2 className="mt-6 text-6xl font-bold tracking-[-0.05em] text-slate-900 md:text-7xl">
//               Delivering Healthcare
//               Beyond Borders.
//             </h2>
  
//             <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-600">
//               Supporting domestic and international pharmaceutical markets
//               through manufacturing expertise, regulatory support,
//               documentation, and export-focused solutions.
//             </p>
//           </div>
  
//           <div className="mt-20 grid gap-8 md:grid-cols-3">
//             {stats.map((item) => (
//               <div
//                 key={item.label}
//                 className="rounded-[32px] border border-slate-200 p-10 text-center"
//               >
//                 <h3 className="text-5xl font-bold text-purple-700">
//                   {item.value}
//                 </h3>
  
//                 <p className="mt-4 uppercase tracking-[0.2em] text-slate-500">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }