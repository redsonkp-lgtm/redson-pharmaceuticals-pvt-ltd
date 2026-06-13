// i have created an product section for an pharmaceutical manufacturing website and there 81 products and 21 categories so i have to manage that in a single section so i have created a rough or basic strucuture ui using next.js jsx and tailwindcss, can you improve that ui





"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import products from "@/data/products.json";
import {
  Search,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Filter,
} from "lucide-react";
import Image from "next/image";

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between gap-4 py-2 border-b border-slate-100">
    <span className="text-slate-500 text-sm">{label}</span>
    <span className="text-slate-800 text-sm text-right">
      {value || "-"}
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

  const visibleFilters = filters.slice(0, 7);
  const hiddenFilters = filters.slice(0);

  const filteredProducts = useMemo(() => {
    const s = searchTerm.toLowerCase();

    let result = products.filter((p) => {
      const matchSearch =
        p.name?.toLowerCase().includes(s) ||
        p.category?.toLowerCase().includes(s) ||
        p.details?.dosage?.toLowerCase().includes(s);

      const matchCategory =
        activeFilter === "All" || p.category === activeFilter;

      return matchSearch && matchCategory;
    });

    result.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return result;
  }, [searchTerm, activeFilter, sortOrder]);

  const typeStyles = {
    TAB: "bg-blue-100 text-blue-700",
    SYP: "bg-green-100 text-green-700",
    CAP: "bg-purple-100 text-purple-700",
    CRM: "bg-pink-100 text-pink-700",
    OIL: "bg-yellow-100 text-yellow-700",
    SPN: "bg-orange-100 text-orange-700",
    ORL: "bg-cyan-100 text-cyan-700",
    API: "bg-gray-200 text-gray-700",
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="max-w-7xl mx-auto px-4 py-14">

        {/* HEADER */}
        <div className="mx-auto max-w-[620px] mb-6 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[var(--primary)]">
              Our Portfolio
            </p>
  
            <h2 className="text-5xl font-bold text-black md:text-6xl">
              Product
            </h2>
  
            <h3 className="font-serif text-5xl italic text-cyan-400 md:text-6xl">
              Catalog
            </h3>
  
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-cyan-400" />
  
            <p className="mt-10 text-xl leading-relaxed text-slate-400">
            Browse the full pharmaceutical catalogue by dosage form, therapeutic
            category, or composition. Click any product to view detailed
            formulation information.
            </p>
          </div>

        {/* SEARCH + SORT */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <button
            onClick={() =>
              setSortOrder((p) => (p === "asc" ? "desc" : "asc"))
            }
            className="h-12 px-4 rounded-xl bg-white border flex items-center gap-2 hover:shadow-sm transition"
          >
            <ArrowUpDown size={16} />
            {sortOrder === "asc" ? "A → Z" : "Z → A"}
          </button>
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-2 w-full mb-6">
          <div className="relative flex gap-2 overflow-x-auto scrollbar-hide">
            {/* <div className="absolute pointer-events-none w-[20%] left-224 inset-0 bg-linear-[90deg,transparent_55%,white]"></div> */}
            {visibleFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2 rounded-full text-sm whitespace-nowrap ${
                  activeFilter === f
                    ? "bg-slate-900 text-white"
                    : "bg-white border hover:bg-slate-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div
            ref={dropdownRef}
            className="relative flex items-center justify-center"
          >
            <div className="absolute pointer-events-none w-[100%] -left-18 md:-left-20 lg:-left-23 inset-0 bg-linear-[90deg,transparent_15%,white]"></div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-2 border rounded-full text-sm whitespace-nowrap bg-white"
            >
              <ChevronDown width={20} height={20} />
              More
            </button>

            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-70 md:w-100 bg-white border rounded-xl shadow-lg p-2 z-10">
                {hiddenFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      setActiveFilter(f);
                      setIsOpen(false); // close after selection
                    }}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100"
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* PRODUCT LIST */}
        <div className="space-y-3">
          {filteredProducts.map((product) => {
            const open = openRow === product.id;

            return (
              <div
                onClick={() =>
                  setOpenRow(open ? null : product.id)
                }
                key={product.id}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-900 overflow-hidden"
              >

                {/* TOP ROW */}
                <div className="px-4 py-2 w-full flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">

                  <div className="flex md:w-[50%] items-center gap-3">

                    <div className=" bg-purple-100">
                      <img
                        src={product.image}
                        className="w-14 h-14 object-cover"
                      />
                    </div>

                    <div className="flex-col items-center">
                      <h2 className="font-semibold text-slate-900">
                        {product.name}
                      </h2>
                      <p className="text-sm text-slate-500">
                        {product.category}
                      </p>
                    </div>

                  </div>
                  <div className="flex md:w-[10%] items-center justify-start md:justify-center gap-3">
                    <div
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        typeStyles[product.type] || "text-purple-700 bg-purple-100"
                      }`}
                    >
                      {product.type}
                    </div>
                    <span className="flex md:hidden text-[#7C5993] font-semibold">
                      {product.price || "Call for Price"}
                    </span>
                  </div>

                  <div className="flex md:w-[40%] items-center justify-start md:justify-end gap-3">
                    <span className="hidden md:flex text-[#7C5993] font-semibold">
                      {product.price || "Call for Price"}
                    </span>
                    <button
                      onClick={() =>
                        setOpenRow(open ? null : product.id)
                      }
                      className={`px-3 py-2 border rounded-lg flex items-center gap-1 text-sm ${
                        open 
                          ? "text-black bg-transparent"
                          : "text-white bg-[black]/85"
                      }`}
                    >
                      Details
                      {open ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    <button className="px-3 py-2 bg-[#7C5993] text-white rounded-lg flex items-center gap-2 text-sm hover:bg-[#694a80]">
                      <MessageCircle size={14} />
                      Enquire
                    </button>

                  </div>

                </div>

                {/* EXPANDED SECTION */}
                {open && (
                  <div className="px-5 pb-5 border-t bg-slate-50/50">

                    <div className="grid md:grid-cols-2 gap-6 mt-4">

                      <div>
                        <h3 className="text-sm font-semibold mb-2 text-slate-700">
                          Product Info
                        </h3>

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
                          value={product.details?.storageInstruction}
                        />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold mb-2 text-slate-700">
                          Supply Info
                        </h3>

                        <DetailRow
                          label="Drug Type"
                          value={product.details?.drugType}
                        />
                        <DetailRow
                          label="Form"
                          value={product.details?.physicalForm}
                        />
                        <DetailRow
                          label="Delivery"
                          value={product.details?.deliveryTime}
                        />
                        <DetailRow
                          label="Supply"
                          value={product.details?.supplyAbility}
                        />
                      </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 bg-white border p-4 rounded-lg">
                      <div>
                        <p className="font-medium">
                          Interested in {product.name}?
                        </p>
                        <p className="text-sm text-slate-500">
                          Get pricing, MOQ & technical details.
                        </p>
                      </div>

                      <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">
                        Quick Enquiry
                      </button>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found
          </div>
        )}

      </section>
    </main>
  );
}





// "use client";

// import { useMemo, useState } from "react";
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
//   <div className="flex justify-between gap-4 py-2 border-b border-slate-100">
//     <span className="text-slate-500 text-sm">{label}</span>
//     <span className="text-slate-800 text-sm text-right">
//       {value || "-"}
//     </span>
//   </div>
// );

// export default function ProductSection() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [openRow, setOpenRow] = useState(null);

//   const filters = useMemo(
//     () => ["All", ...new Set(products.map((p) => p.category))],
//     []
//   );

//   const filteredProducts = useMemo(() => {
//     const s = searchTerm.toLowerCase();

//     let result = products.filter((p) => {
//       const matchSearch =
//         p.name?.toLowerCase().includes(s) ||
//         p.category?.toLowerCase().includes(s) ||
//         p.details?.dosage?.toLowerCase().includes(s);

//       const matchCategory =
//         activeFilter === "All" || p.category === activeFilter;

//       return matchSearch && matchCategory;
//     });

//     result.sort((a, b) =>
//       sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name)
//     );

//     return result;
//   }, [searchTerm, activeFilter, sortOrder]);

//   return (
//     <main className="min-h-screen bg-slate-50">
//       <section className="max-w-7xl mx-auto px-4 py-14">

//         {/* HEADER */}
//         <div className="mb-10">
//           <h1 className="text-3xl font-bold text-slate-900">
//             Product Catalog
//           </h1>
//           <p className="text-slate-500 mt-1">
//             Search and explore pharmaceutical products instantly
//           </p>
//         </div>

//         {/* SEARCH + SORT */}
//         <div className="flex flex-col md:flex-row gap-3 mb-6">
//           <div className="relative flex-1">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search products..."
//               className="w-full h-12 pl-12 pr-4 rounded-xl border bg-white outline-none focus:ring-2 focus:ring-purple-200"
//             />
//           </div>

//           <button
//             onClick={() =>
//               setSortOrder((p) => (p === "asc" ? "desc" : "asc"))
//             }
//             className="h-12 px-4 rounded-xl bg-white border flex items-center gap-2 hover:shadow-sm transition"
//           >
//             <ArrowUpDown size={16} />
//             {sortOrder === "asc" ? "A → Z" : "Z → A"}
//           </button>
//         </div>

//         {/* FILTERS */}
//         <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
//           {filters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActiveFilter(f)}
//               className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
//                 activeFilter === f
//                   ? "bg-slate-900 text-white"
//                   : "bg-white border hover:bg-slate-100"
//               }`}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCT LIST */}
//         <div className="space-y-4">
//           {filteredProducts.map((product) => {
//             const open = openRow === product.id;

//             return (
//               <div
//                 onClick={() =>
//                   setOpenRow(open ? null : product.id)
//                 }
//                 key={product.id}
//                 className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-900 overflow-hidden"
//               >

//                 {/* TOP ROW */}
//                 <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">

//                   <div className="flex items-start gap-3">

//                     <div className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium">
//                       {product.type}
//                     </div>

//                     <div>
//                       <h2 className="font-semibold text-slate-900">
//                         {product.name}
//                       </h2>
//                       <p className="text-sm text-slate-500">
//                         {product.category}
//                       </p>
//                     </div>

//                   </div>

//                   <div className="flex items-center gap-3">

//                     <span className="text-[#7C5993] font-semibold">
//                       {product.price || "Call for Price"}
//                     </span>

//                     <button
//                       onClick={() =>
//                         setOpenRow(open ? null : product.id)
//                       }
//                       className={`px-3 py-2 border rounded-lg flex items-center gap-1 text-sm ${
//                         open 
//                           ? "text-black bg-transparent"
//                           : "text-white bg-[black]/85"
//                       }`}
//                     >
//                       Details
//                       {open ? (
//                         <ChevronUp size={16} />
//                       ) : (
//                         <ChevronDown size={16} />
//                       )}
//                     </button>

//                     <button className="px-3 py-2 bg-[#7C5993] text-white rounded-lg flex items-center gap-2 text-sm hover:bg-[#694a80]">
//                       <MessageCircle size={14} />
//                       Enquire
//                     </button>

//                   </div>

//                 </div>

//                 {/* EXPANDED SECTION */}
//                 {open && (
//                   <div className="px-5 pb-5 border-t bg-slate-50/50">

//                     <div className="grid md:grid-cols-2 gap-6 mt-4">

//                       <div>
//                         <h3 className="text-sm font-semibold mb-2 text-slate-700">
//                           Product Info
//                         </h3>

//                         <DetailRow
//                           label="Dosage"
//                           value={product.details?.dosage}
//                         />
//                         <DetailRow
//                           label="Function"
//                           value={product.details?.function}
//                         />
//                         <DetailRow
//                           label="Storage"
//                           value={product.details?.storageInstruction}
//                         />
//                       </div>

//                       <div>
//                         <h3 className="text-sm font-semibold mb-2 text-slate-700">
//                           Supply Info
//                         </h3>

//                         <DetailRow
//                           label="Drug Type"
//                           value={product.details?.drugType}
//                         />
//                         <DetailRow
//                           label="Form"
//                           value={product.details?.physicalForm}
//                         />
//                         <DetailRow
//                           label="Delivery"
//                           value={product.details?.deliveryTime}
//                         />
//                         <DetailRow
//                           label="Supply"
//                           value={product.details?.supplyAbility}
//                         />
//                       </div>

//                     </div>

//                     {/* CTA */}
//                     <div className="mt-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 bg-white border p-4 rounded-lg">
//                       <div>
//                         <p className="font-medium">
//                           Interested in {product.name}?
//                         </p>
//                         <p className="text-sm text-slate-500">
//                           Get pricing, MOQ & technical details.
//                         </p>
//                       </div>

//                       <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">
//                         Quick Enquiry
//                       </button>
//                     </div>

//                   </div>
//                 )}

//               </div>
//             );
//           })}
//         </div>

//         {/* EMPTY STATE */}
//         {filteredProducts.length === 0 && (
//           <div className="text-center py-20 text-slate-500">
//             No products found
//           </div>
//         )}

//       </section>
//     </main>
//   );
// }








// "use client";

// import { useMemo, useState } from "react";
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
//   <div className="flex justify-between items-start border-b border-slate-100 pb-3">
//     <span className="text-slate-500 font-medium">{label}</span>
//     <span className="text-slate-800 text-right max-w-[60%]">
//       {value || "-"}
//     </span>
//   </div>
// );

// const PriceRow = ({ value }) => (
//   <div className="md:col-span-2">
//     <span className="font-semibold text-[#7C5993]">
//       {value || "Call for Price"}
//     </span>
//   </div>
// );

// export default function ProductSection() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [openRow, setOpenRow] = useState(null);

//   const filters = useMemo(
//     () => ["All", ...new Set(products.map((p) => p.category))],
//     []
//   );

//   const filteredProducts = useMemo(() => {
//     const search = searchTerm.toLowerCase();

//     const filtered = products.filter((product) => {
//       const matchesSearch =
//         product.name?.toLowerCase().includes(search) ||
//         product.category?.toLowerCase().includes(search) ||
//         product.details?.dosage?.toLowerCase().includes(search) ||
//         product.details?.drugType?.toLowerCase().includes(search) ||
//         product.details?.physicalForm?.toLowerCase().includes(search);

//       const matchesCategory =
//         activeFilter === "All" || product.category === activeFilter;

//       return matchesSearch && matchesCategory;
//     });

//     filtered.sort((a, b) =>
//       sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name)
//     );

//     return filtered;
//   }, [searchTerm, activeFilter, sortOrder]);

//   const typeStyles = {
//     TAB: "bg-blue-100 text-blue-700",
//     CAP: "bg-purple-100 text-purple-700",
//     API: "bg-orange-100 text-orange-700",
//     SYP: "bg-green-100 text-green-700",
//     CRM: "bg-pink-100 text-pink-700",
//     SPN: "bg-yellow-100 text-yellow-700",
//     OIL: "bg-yellow-100 text-yellow-700",
//     ORL: "bg-yellow-100 text-yellow-700",
//     DRP: "bg-yellow-100 text-yellow-700",
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
//       <section className="max-w-7xl mx-auto px-6 py-16">

//         {/* Header */}
//         <div className="mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
//             Product Catalog
//           </h1>
//           <p className="text-slate-500 mt-2">
//             Browse products, compare details, and send enquiries instantly.
//           </p>
//         </div>

//         {/* Search + Sort */}
//         <div className="flex flex-col md:flex-row gap-4 items-center">
//           <div className="relative flex-1 w-full">
//             <Search
//               size={18}
//               className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
//             />

//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search products, dosage, category..."
//               className="w-full h-14 rounded-2xl bg-white border border-slate-200 pl-14 pr-4 outline-none focus:ring-2 focus:ring-[#7C5993]/20"
//             />
//           </div>

//           <button
//             onClick={() =>
//               setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
//             }
//             className="h-14 px-6 rounded-2xl bg-white border border-slate-200 flex items-center gap-2 font-medium text-slate-700 hover:shadow-sm transition"
//           >
//             <ArrowUpDown size={18} />
//             {sortOrder === "asc" ? "Name A-Z" : "Name Z-A"}
//           </button>
//         </div>

//         {/* Filters */}
//         <div className="mt-6 flex flex-col gap-4">
//           <div className="flex items-center gap-2">
//             <Filter size={18} className="text-slate-400" />
//             <span className="text-slate-600 font-medium">Categories</span>
//           </div>

//           <div className="flex gap-3 overflow-x-auto pb-2">
//             {filters.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setActiveFilter(item)}
//                 className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition ${
//                   activeFilter === item
//                     ? "bg-slate-900 text-white"
//                     : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           <p className="text-slate-500 text-sm">
//             {filteredProducts.length} Products found
//           </p>
//         </div>

//         {/* Table */}
//         <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

//           {/* Header */}
//           <div className="hidden md:grid grid-cols-12 items-center bg-slate-100 text-slate-600 px-6 py-4 text-xs font-semibold uppercase tracking-wider border-b">
//             <div className="col-span-1">Type</div>
//             <div className="col-span-3">Product Name</div>
//             <div className="col-span-3">Category</div>
//             <div className="col-span-2">Price</div>
//             <div className="col-span-1 text-center">View</div>
//             <div className="col-span-2 text-right">Action</div>
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="p-10 text-center text-slate-500">
//               No products found.
//             </div>
//           )}

//           {filteredProducts.map((product, index) => {
//             const expanded = openRow === product.id;

//             return (
//               <div key={product.id}>

//                 {/* Row */}
//                 <div
//                   className={`grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-0 px-6 py-5 transition-all duration-200 hover:bg-slate-50 ${
//                     index !== filteredProducts.length - 1 && !expanded
//                       ? "border-b border-slate-100"
//                       : ""
//                   }`}
//                 >
//                   {/* Type */}
//                   <div className="md:col-span-1">
//                     <span
//                       className={`inline-flex px-3 py-1.5 rounded-full text-[11px] font-semibold ${
//                         typeStyles[product.type] ||
//                         "bg-slate-100 text-slate-700"
//                       }`}
//                     >
//                       {product.type}
//                     </span>
//                   </div>

//                   {/* Name */}
//                   <div className="md:col-span-3">
//                     <h3 className="font-semibold text-slate-900 hover:text-[#7C5993] transition">
//                       {product.name}
//                     </h3>
//                   </div>

//                   {/* Category */}
//                   <div className="md:col-span-3 text-slate-600">
//                     {product.category}
//                   </div>

//                   {/* Price */}
//                   <PriceRow value={product.price} />

//                   {/* Expand */}
//                   <div className="md:col-span-1 flex md:justify-center">
//                     <button
//                       onClick={() =>
//                         setOpenRow(expanded ? null : product.id)
//                       }
//                       className={`px-4 py-2 rounded-lg border flex items-center gap-1 text-sm font-medium transition ${
//                         expanded
//                           ? "bg-slate-900 border-slate-900 text-white"
//                           : "border-slate-300 text-slate-700 hover:bg-slate-50"
//                       }`}
//                     >
//                       Details
//                       {expanded ? (
//                         <ChevronUp size={18} />
//                       ) : (
//                         <ChevronDown size={18} />
//                       )}
//                     </button>
//                   </div>

//                   {/* Action */}
//                   <div className="md:col-span-2 flex md:justify-end">
//                     <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7C5993] hover:bg-[#694a80] text-white text-sm font-medium transition">
//                       <MessageCircle size={16} />
//                       Enquire
//                     </button>
//                   </div>
//                 </div>

//                 {/* Expanded */}
//                 {expanded && (
//                   <div className="border-y border-slate-200 bg-slate-50/70">
//                     <div className="p-6 animate-in fade-in duration-300">

//                       <div className="grid lg:grid-cols-2 gap-8">

//                         {/* Product Info */}
//                         <div>
//                           <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
//                             Product Information
//                           </h4>

//                           <div className="space-y-4">
//                             <DetailRow
//                               label="Dosage"
//                               value={product.details?.dosage}
//                             />
//                             <DetailRow
//                               label="Function"
//                               value={product.details?.function}
//                             />
//                             <DetailRow
//                               label="Storage"
//                               value={product.details?.storageInstruction}
//                             />
//                           </div>
//                         </div>

//                         {/* Supply Info */}
//                         <div>
//                           <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
//                             Supply Information
//                           </h4>

//                           <div className="space-y-4">
//                             <DetailRow
//                               label="Drug Type"
//                               value={product.details?.drugType}
//                             />
//                             <DetailRow
//                               label="Physical Form"
//                               value={product.details?.physicalForm}
//                             />
//                             <DetailRow
//                               label="Delivery Time"
//                               value={product.details?.deliveryTime}
//                             />
//                             <DetailRow
//                               label="Supply Ability"
//                               value={product.details?.supplyAbility}
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       {/* CTA */}
//                       <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl bg-white border border-slate-200 shadow-sm p-5">
//                         <div>
//                           <h5 className="font-semibold text-slate-900">
//                             Interested in {product.name}?
//                           </h5>
//                           <p className="text-sm text-slate-500 mt-1">
//                             Request pricing, MOQ, technical specifications and delivery details.
//                           </p>
//                         </div>

//                         <button className="bg-[#7C5993] hover:bg-[#694a80] text-white px-5 py-3 rounded-lg font-medium transition">
//                           Quick Enquiry
//                         </button>
//                       </div>

//                     </div>
//                   </div>
//                 )}

//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </main>
//   );
// }









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