"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Manufacturing", href: "#manufacturingcapabilities" },
    { label: "Quality", href: "#quality" },
    { label: "Export", href: "#export" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-center z-[100] py-0 transition-all duration-300 ${
        scrolled || menuOpen
          ? "lg:py-0 bg-white shadow-[0_4px_32px_rgba(1,1,1,0.25)]"
          : "lg:py-2"
      }`}
    >
      <div className="mx-auto w-full lg:max-w-[1440px] h-[10vh] px-0 lg:px-4">
        {/* Main Header */}
        <div
          className={`relative h-[10vh] bg-white z-[1] flex h-full items-center justify-between rounded-none lg:rounded-[40px] p-4 transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "border-b border-gray-200"
                : ""
            }
            ${
              scrolled || menuOpen
                ? ""
                : "shadow-[0_4px_32px_rgba(1,1,1,0.2)]"
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-purple-temp-01.png"
              alt="Ziora Pharmaceutical"
              width={180}
              height={60}
              priority
              className="h-auto w-[160px] lg:w-[180px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide text-black transition-colors duration-300 hover:text-black/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button className="hidden lg:block rounded-[37px] border border-[#7C5993] px-6 xl:px-8 py-3 text-sm xl:text-base font-semibold text-[#7C5993] transition-all duration-300 hover:bg-[#7C5993] hover:text-white">
            Enquire Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center text-[#7C5993]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-[900ms] ease-in-out ${
            menuOpen
              ? "max-h-[600px] opacity-100 translate-y-0 shadow-[0_50px_64px_rgba(1,1,1,0.2)]"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="bg-white p-5 border-b-2 border-gray-600">
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition-all duration-300 hover:text-[#7C5993] ${
                    index !== navItems.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <span>{item.label}</span>

                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </nav>

            <button className="mt-6 w-full rounded-full bg-[#7C5993] py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}







// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 60);

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     "ABOUT",
//     "PRODUCTS",
//     "SERVICES",
//     "QUALITY ASSURANCE",
//     "CONTACT",
//     "EXPORT",
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full flex justify-center z-[100] py-0 transition-all duration-300 ${
//         scrolled || menuOpen
//           ? "lg:py-0 bg-white shadow-[0_4px_32px_rgba(1,1,1,0.25)]"
//           : "lg:py-2"
//       }`}
//     >
//       <div className="mx-auto w-full lg:max-w-[1440px] h-[10vh] px-0 lg:px-4">
//         {/* Main Header */}
//         <div
//           className={`relative bg-white z-[1] flex h-full items-center justify-between rounded-none lg:rounded-[40px] p-4 transition-all duration-300 ease-in-out
//             ${
//               menuOpen
//                 ? "border-b border-gray-200"
//                 : ""
//             }
//             ${
//               scrolled || menuOpen
//                 ? ""
//                 : "shadow-[0_4px_32px_rgba(1,1,1,0.2)]"
//             }
//           `}
//         >
//           {/* Logo */}
//           <Link href="/" className="shrink-0">
//             <Image
//               src="/logo-purple-temp-01.png"
//               alt="Ziora Pharmaceutical"
//               width={180}
//               height={60}
//               priority
//               className="h-auto w-[160px] lg:w-[180px]"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 href="#"
//                 className="text-sm font-medium tracking-wide text-black transition-colors duration-300 hover:text-black/60"
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop CTA */}
//           <button className="hidden lg:block rounded-[37px] border border-[#7C5993] px-6 xl:px-8 py-3 text-sm xl:text-base font-semibold text-[#7C5993] transition-all duration-300 hover:bg-[#7C5993] hover:text-white">
//             Enquire Now
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden flex items-center justify-center text-[#7C5993]"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//           >
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-[900ms] ease-in-out ${
//             menuOpen
//               ? "max-h-[600px] opacity-100 translate-y-0"
//               : "max-h-0 opacity-0 -translate-y-4"
//           }`}
//         >
//           <div className="bg-white p-5 shadow-[0_4px_32px_rgba(1,1,1,0.2)] border-b-2 ">
//             <nav className="flex flex-col">
//               {navItems.map((item, index) => (
//                 <Link
//                   key={item}
//                   href="#"
//                   onClick={() => setMenuOpen(false)}
//                   className={`group flex items-center justify-between py-4 text-[15px] font-medium text-gray-800 transition-all duration-300 hover:text-[#7C5993] ${
//                     index !== navItems.length - 1
//                       ? "border-b border-gray-100"
//                       : ""
//                   }`}
//                 >
//                   <span>{item}</span>

//                   <svg
//                     className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </Link>
//               ))}
//             </nav>

//             <button className="mt-6 w-full rounded-full bg-[#7C5993] py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
//               Enquire Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }