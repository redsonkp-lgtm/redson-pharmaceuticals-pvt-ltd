    //   {/* SEARCH */}
    //   <section className="max-w-7xl mx-auto px-6 mt-10">
    //     <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xl">
    //       <div className="relative">
    //         <Search
    //           size={20}
    //           className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
    //         />

    //         <input
    //           value={search}
    //           onChange={(e) =>
    //             setSearch(e.target.value)
    //           }
    //           placeholder="Search products, salts, formulations..."
    //           className="w-full h-14 rounded-2xl border border-slate-200 pl-14 pr-4 outline-none focus:ring-2 focus:ring-sky-500"
    //         />
    //       </div>

    //       {/* FILTERS */}
    //       <div className="flex flex-wrap gap-3 mt-5">
    //         {filters.map((item) => (
    //           <button
    //             key={item}
    //             onClick={() =>
    //               setActiveFilter(item)
    //             }
    //             className={`px-5 py-2 rounded-full text-sm font-medium transition-all
    //               ${
    //                 activeFilter === item
    //                   ? "bg-slate-900 text-white"
    //                   : "bg-slate-100 hover:bg-slate-200 text-slate-700"
    //               }`}
    //           >
    //             {item}
    //           </button>
    //         ))}
    //       </div>
    //     </div>
    //   </section>








    "use client";

    import { useMemo, useState } from "react";
    import products from "@/data/products.json";
    import {
      Search,
      ArrowUpDown,
      ChevronDown,
      ChevronUp,
      MessageCircle,
      Filter,
    } from "lucide-react";
    
    const DetailRow = ({ label, value }) => (
      <div className="flex justify-between items-start border-b border-slate-100 pb-3">
        <span className="text-slate-500 font-medium">{label}</span>
    
        <span className="text-slate-800 text-right max-w-[60%]">
          {value || "-"}
        </span>
      </div>
    );

    const PriceRow = ({ value }) => (
      <div className="md:col-span-2">
        <span className="font-medium text-[#7C5993]">
          {value || "Call for Price"}
        </span>
      </div>
    );
    
    export default function ProductSection() {
      const [activeFilter, setActiveFilter] = useState("All");
      const [searchTerm, setSearchTerm] = useState("");
      const [sortOrder, setSortOrder] = useState("asc");
      const [openRow, setOpenRow] = useState(null);
    
      const filters = useMemo(
        () => ["All", ...new Set(products.map((p) => p.category))],
        []
      );
    
      const filteredProducts = useMemo(() => {
        const filtered = products.filter((product) => {
          const search = searchTerm.toLowerCase();
    
          const matchesSearch =
            product.name?.toLowerCase().includes(search) ||
            product.category?.toLowerCase().includes(search) ||
            product.details?.dosage?.toLowerCase().includes(search) ||
            product.details?.drugType?.toLowerCase().includes(search) ||
            product.details?.physicalForm?.toLowerCase().includes(search);
    
          const matchesCategory =
            activeFilter === "All" ||
            product.category === activeFilter;
    
          return matchesSearch && matchesCategory;
        });
    
        filtered.sort((a, b) =>
          sortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
    
        return filtered;
      }, [searchTerm, activeFilter, sortOrder]);
    
      const typeStyles = {
        TAB: "bg-blue-100 text-blue-700",
        CAP: "bg-purple-100 text-purple-700",
        API: "bg-orange-100 text-orange-700",
        SYP: "bg-green-100 text-green-700",
        CRM: "bg-pink-100 text-pink-700",
        SPN: "bg-yellow-100 text-yellow-700",
        OIL: "bg-yellow-100 text-yellow-700",
        ORL: "bg-yellow-100 text-yellow-700",
        DRP: "bg-yellow-100 text-yellow-700",
      };
    
      return (
        <main className="min-h-screen bg-[#f7f9fc]">
          <section className="max-w-7xl mx-auto px-6 pb-20">
            {/* Search + Sort */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />
    
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products, dosage, category..."
                  className="w-full h-14 rounded-2xl bg-white border border-slate-200 pl-14 pr-4 outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
    
              <button
                onClick={() =>
                  setSortOrder((prev) =>
                    prev === "asc" ? "desc" : "asc"
                  )
                }
                className="h-14 px-6 rounded-2xl bg-white border border-slate-200 flex items-center gap-2 font-medium text-slate-700"
              >
                <ArrowUpDown size={18} />
                {sortOrder === "asc"
                  ? "Name A-Z"
                  : "Name Z-A"}
              </button>
            </div>
    
            {/* Filters */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-slate-400" />
                <span className="text-slate-600 font-medium">
                  Categories
                </span>
              </div>
    
              <div className="flex gap-3 overflow-x-auto pb-2">
                {filters.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveFilter(item)}
                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition ${
                      activeFilter === item
                        ? "bg-slate-900 text-white"
                        : "bg-white border border-slate-200 text-slate-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
    
              <p className="text-slate-500">
                {filteredProducts.length} Products
              </p>
            </div>
    
            {/* Table */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {/* Header */}
              <div className="hidden md:grid grid-cols-12 items-center bg-slate-900 text-white px-6 py-4 text-sm font-medium">
                <div className="col-span-1">Type</div>
                <div className="col-span-3">Product Name</div>
                <div className="col-span-3">Category</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-1 text-center">View</div>
                <div className="col-span-2 text-right">Action</div>
              </div>
    
              {filteredProducts.length === 0 && (
                <div className="p-10 text-center text-slate-500">
                  No products found.
                </div>
              )}
    
              {filteredProducts.map((product, index) => {
                const expanded = openRow === product.id;
    
                return (
                  <div key={product.id}>
                    {/* Product Row */}
                    <div
                      className={`grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-0 px-6 py-5 hover:bg-[black]/5 transition ${
                        index !== filteredProducts.length - 1 &&
                        !expanded
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      {/* Type */}
                      <div className="md:col-span-1">
                        <span
                          className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                            typeStyles[product.type] ||
                            "bg-[black]/5 text-slate-700"
                          }`}
                        >
                          {product.type}
                        </span>
                      </div>
    
                      {/* Name */}
                      <div className="md:col-span-3">
                        <h3 className="font-semibold text-slate-900">
                          {product.name}
                        </h3>
                      </div>
    
                      {/* Category */}
                      <div className="md:col-span-3 text-slate-600">
                        {product.category}
                      </div>
    
                      {/* Price */}
                      <PriceRow 
                        value={product.price}
                      />
    
                      {/* Expand */}
                      <div className="md:col-span-1 flex md:justify-center">
                        <button
                          onClick={() =>
                            setOpenRow(
                              expanded ? null : product.id
                            )
                          }
                          className={`px-4 py-2 rounded-lg border gap-1 flex items-center justify-center text-sm font-medium transition ${
                            expanded
                              ? "bg-[black] border-[black] text-white"
                              : "border-[black] hover:bg-[black]/5"
                          }`}
                        >
                          Details
                          {expanded ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      </div>
    
                      {/* Action */}
                      <div className="md:col-span-2 flex md:justify-end">
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7C5993] hover:bg-[#694a80] text-white text-sm font-medium transition">
                          <MessageCircle size={16} />
                          Enquire
                        </button>
                      </div>
                    </div>
    
                    {/* Expanded Content */}
                    {expanded && (
                      <div className="border-y border-black bg-[black]/5">
                        <div className="p-6">
                          <div className="grid lg:grid-cols-2 gap-8">
                            {/* Product Info */}
                            <div>
                              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                                Product Information
                              </h4>
    
                              <div className="space-y-4">
                                <DetailRow
                                  label="Dosage"
                                  value={product.details?.dosage}
                                />
    
                                <DetailRow
                                  label="Function"
                                  value={product.details?.function}
                                />
    
                                <DetailRow
                                  label="Storage"
                                  value={
                                    product.details
                                      ?.storageInstruction
                                  }
                                />
                              </div>
                            </div>
    
                            {/* Supply Info */}
                            <div>
                              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                                Supply Information
                              </h4>
    
                              <div className="space-y-4">
                                <DetailRow
                                  label="Drug Type"
                                  value={
                                    product.details?.drugType
                                  }
                                />
    
                                <DetailRow
                                  label="Physical Form"
                                  value={
                                    product.details?.physicalForm
                                  }
                                />
    
                                <DetailRow
                                  label="Delivery Time"
                                  value={
                                    product.details?.deliveryTime
                                  }
                                />
    
                                <DetailRow
                                  label="Supply Ability"
                                  value={
                                    product.details?.supplyAbility
                                  }
                                />
                              </div>
                            </div>
                          </div>
    
                          {/* CTA */}
                          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl bg-white border border-slate-200 p-5">
                            <div>
                              <h5 className="font-semibold text-slate-900">
                                Interested in {product.name}?
                              </h5>
    
                              <p className="text-sm text-slate-500 mt-1">
                                Request pricing, MOQ, technical
                                specifications and delivery
                                details.
                              </p>
                            </div>
    
                            <button className="bg-[#7C5993] hover:bg-[#694a80] text-white px-5 py-3 rounded-lg font-medium transition">
                              Quick Enquiry
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      );
    }










// "use client";

// import { useState } from "react";
// import products from "@/data/products.json";
// import {
//   Search,
//   ArrowUpDown,
//   ChevronDown,
//   ChevronUp,
//   MessageCircle,
//   Filter,
// } from "lucide-react";


// const DetailRow = ({ label, value }) => (
//     <div className="flex justify-between items-start border-b border-slate-100 pb-3">
//       <span className="text-slate-500 font-medium">
//         {label}
//       </span>
  
//       <span className="text-slate-800 text-right max-w-[60%]">
//         {value || "-"}
//       </span>
//     </div>
//   );

// export default function ProductSection() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [openRow, setOpenRow] = useState(1);

//   const filters = ["All", "Tablet", "Capsule", "Injection", "Syrup"];

//   return (
//     <main className="min-h-screen bg-[#f7f9fc]">
//       {/* Hero */}
//       <section className="max-w-5xl mx-auto text-center pt-20 pb-14 px-6">
//         <p className="text-sky-500 tracking-[4px] uppercase text-sm font-medium">
//           Our Portfolio
//         </p>

//         <h1 className="mt-4 text-6xl font-bold text-slate-900">
//           Product
//           <span className="block font-serif italic font-normal">
//             Catalog
//           </span>
//         </h1>

//         <div className="w-24 h-1 bg-sky-500 mx-auto mt-6 rounded-full" />

//         <p className="max-w-2xl mx-auto mt-8 text-slate-500 text-lg leading-8">
//           Browse the full pharmaceutical catalogue by dosage form,
//           therapeutic category, or composition. Click any product
//           to view detailed formulation information.
//         </p>

//         <button className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition">
//           Check our export services →
//         </button>
//       </section>

//       {/* Catalog */}
//       <section className="max-w-6xl mx-auto px-6 pb-20">
//         {/* Search */}
//         <div className="flex flex-col md:flex-row gap-4 items-center">
//           <div className="relative flex-1">
//             <Search
//               size={18}
//               className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               placeholder="Search products, salts, formulations, or categories..."
//               className="w-full h-14 rounded-2xl bg-white border border-slate-200 pl-14 pr-4 outline-none focus:ring-2 focus:ring-sky-500"
//             />
//           </div>

//           <button className="h-14 px-6 rounded-2xl bg-white border border-slate-200 flex items-center gap-2 font-medium text-slate-700">
//             <ArrowUpDown size={18} />
//             Sort by Name
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap items-center justify-between mt-6 gap-4">
//           <div className="flex items-center gap-3 flex-wrap">
//             <Filter size={18} className="text-slate-400" />

//             {filters.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setActiveFilter(item)}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition
//                 ${
//                   activeFilter === item
//                     ? "bg-slate-900 text-white"
//                     : "bg-white border border-slate-200 text-slate-600"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           <p className="text-slate-500">45 products</p>
//         </div>

//         {/* Table */}
// {/* Table */}
// <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

//   {/* Header */}
//   <div className="hidden md:grid grid-cols-12 items-center bg-slate-900 text-white px-6 py-4 text-sm font-medium">
//     <div className="col-span-1">Type</div>
//     <div className="col-span-3">Product Name</div>
//     <div className="col-span-3">Category</div>
//     <div className="col-span-2">Price</div>
//     <div className="col-span-1 text-center">View</div>
//     <div className="col-span-2 text-right">Action</div>
//   </div>

//   {products.map((product, index) => {
//     const expanded = openRow === product.id;

//     return (
//       <div key={product.id}>
//         {/* Row */}
//         <div
//           className={`
//             grid grid-cols-1 md:grid-cols-12 items-center
//             gap-4 md:gap-0
//             px-6 py-5
//             transition-all duration-200
//             hover:bg-sky-50
//             ${
//               index !== products.length - 1 && !expanded
//                 ? "border-b border-slate-100"
//                 : ""
//             }
//           `}
//         >
//           {/* Mobile Label */}
//           <div className="md:hidden text-xs uppercase text-slate-400 font-semibold">
//             Product
//           </div>

//           {/* Type */}
//           <div className="md:col-span-1">
//             <span
//               className={`
//                 inline-flex items-center justify-center
//                 px-3 py-1.5
//                 rounded-full
//                 text-xs font-semibold
//                 ${
//                   product.type === "TAB"
//                     ? "bg-blue-100 text-blue-700"
//                     : product.type === "CAP"
//                     ? "bg-purple-100 text-purple-700"
//                     : product.type === "INJ"
//                     ? "bg-orange-100 text-orange-700"
//                     : "bg-green-100 text-green-700"
//                 }
//               `}
//             >
//               {product.type}
//             </span>
//           </div>

//           {/* Product Name */}
//           <div className="md:col-span-3">
//             <h3 className="font-semibold text-slate-900">
//               {product.name}
//             </h3>
//           </div>

//           {/* Category */}
//           <div className="md:col-span-3 text-slate-600">
//             {product.category}
//           </div>

//           {/* Price */}
//           <div className="md:col-span-2">
//             <span className="font-medium text-sky-700">
//               {product.price}
//             </span>
//           </div>

//           {/* Expand */}
//           <div className="md:col-span-1 flex md:justify-center">
//             <button
//               onClick={() =>
//                 setOpenRow(expanded ? null : product.id)
//               }
//               className={`
//                 w-9 h-9
//                 rounded-lg
//                 border
//                 flex items-center justify-center
//                 transition-all
//                 ${
//                   expanded
//                     ? "bg-sky-500 border-sky-500 text-white"
//                     : "border-slate-200 hover:bg-slate-100"
//                 }
//               `}
//             >
//               {expanded ? (
//                 <ChevronUp size={18} />
//               ) : (
//                 <ChevronDown size={18} />
//               )}
//             </button>
//           </div>

//           {/* Action */}
//           <div className="md:col-span-2 flex md:justify-end">
//             <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7C5993] hover:bg-[#694a80] text-white text-sm font-medium transition">
//               <MessageCircle size={16} />
//               Enquire
//             </button>
//           </div>
//         </div>

//         {/* Expanded Row */}
//         {expanded && (
//           <div className="border-t border-slate-100 bg-slate-50">
//             <div className="p-6">

//               <div className="grid lg:grid-cols-2 gap-8">

//                 {/* Product Information */}
//                 <div>
//                   <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
//                     Product Information
//                   </h4>

//                   <div className="space-y-4">
//                     <DetailRow
//                       label="Dosage"
//                       value={product.details.dosage}
//                     />

//                     <DetailRow
//                       label="Function"
//                       value={product.details.function}
//                     />

//                     <DetailRow
//                       label="Storage"
//                       value={
//                         product.details.storageInstruction
//                       }
//                     />
//                   </div>
//                 </div>

//                 {/* Supply Information */}
//                 <div>
//                   <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
//                     Supply Information
//                   </h4>

//                   <div className="space-y-4">
//                     <DetailRow
//                       label="Drug Type"
//                       value={product.details.drugType}
//                     />

//                     <DetailRow
//                       label="Physical Form"
//                       value={product.details.physicalForm}
//                     />

//                     <DetailRow
//                       label="Delivery Time"
//                       value={product.details.deliveryTime}
//                     />

//                     <DetailRow
//                       label="Supply Ability"
//                       value={product.details.supplyAbility}
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom CTA */}
//               <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl bg-white border border-slate-200 p-5">
//                 <div>
//                   <h5 className="font-semibold text-slate-900">
//                     Interested in {product.name}?
//                   </h5>

//                   <p className="text-sm text-slate-500 mt-1">
//                     Request pricing, MOQ, technical specifications
//                     and delivery details.
//                   </p>
//                 </div>

//                 <button className="bg-[#7C5993] hover:bg-[#694a80] text-white px-5 py-3 rounded-lg font-medium transition">
//                   Quick Enquiry
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   })}
// </div>
//       </section>
//     </main>
//   );
// }