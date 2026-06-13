import { Phone, MessageCircle, Pill, Syringe, FlaskConical, Tablet, } from "lucide-react";
import Link from "next/link";  

  export default function Footer() {
    return (
      <footer className="relative overflow-hidden bg-[#041225] text-white">
        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none text-[22rem] font-black tracking-wider text-white/[0.03]">
            ZIORA
          </span>
        </div>
  
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                {/* Logo */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#041225]">
                  <div className="relative h-7 w-7">
                    <span className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-current"></span>
                    <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-current"></span>
                    <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-current"></span>
                  </div>
                </div>
  
                <div>
                  <h2 className="text-3xl font-bold tracking-wide">
                    ZIORA
                  </h2>
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                    Pharmaceutical
                  </p>
                </div>
              </div>
  
              <p className="max-w-sm text-lg leading-relaxed text-slate-400">
                Premium third-party pharmaceutical manufacturing in
                Mohali, Punjab. WHO-GMP certified facility delivering
                consistent quality and scalable supply.
              </p>
  
              <button className="mt-8 rounded-full border border-cyan-500 bg-cyan-500/10 px-8 py-4 text-lg font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white">
                Enquire Now
              </button>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="mb-8 text-xl font-bold uppercase tracking-wide">
                Quick Links
              </h3>
  
              <ul className="space-y-5 text-lg text-slate-400">
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Services</Link>
                </li>
                <li>
                  <Link href="#">Products</Link>
                </li>
                <li>
                  <Link href="#">Export</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
  
            {/* Divisions */}
            <div>
              <h3 className="mb-8 text-xl font-bold uppercase tracking-wide">
                Our Divisions
              </h3>
  
              <ul className="space-y-5 text-lg text-slate-400">
                <li className="flex items-center gap-3">
                  <Tablet size={18} />
                  Tablets
                </li>
  
                <li className="flex items-center gap-3">
                  <Pill size={18} />
                  Capsules
                </li>
  
                <li className="flex items-center gap-3">
                  <Syringe size={18} />
                  Injections
                </li>
  
                <li className="flex items-center gap-3">
                  <FlaskConical size={18} />
                  Syrups
                </li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="mb-8 text-xl font-bold uppercase tracking-wide">
                Contact
              </h3>
  
              <div className="space-y-5 text-lg text-slate-400">
                <p>Mohali, Punjab - 160055</p>
                <p>+91 73072 79050</p>
                <p>info@ziorapharmaceutical.in</p>
                <p>Mon - Sat: 9AM - 6PM</p>
              </div>
            </div>
          </div>
  
          {/* Divider */}
          <div className="mt-16 border-t border-white/10" />
  
          {/* Bottom */}
          <div className="mt-10 flex flex-col gap-4 text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 Ziora Pharmaceuticals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
)};