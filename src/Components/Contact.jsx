export default function Contact() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-6xl font-bold tracking-tight text-slate-900">
              Get In Touch
            </h2>

            <p className="mt-8 text-lg text-slate-600">
              REDSON Pharmaceuticals Private Limited
            </p>

            <div className="mt-10 space-y-6 text-slate-700">
              <p>📞 +91 8866003844</p>
              <p>✉️ info@redsongroup.in</p>
              <p>📍 Gandhinagar, Gujarat, India</p>
            </div>
          </div>

          <form className="rounded-[32px] border border-slate-200 p-8 shadow-sm">
            <div className="space-y-5">
              <input
                placeholder="Full Name"
                className="w-full rounded-2xl border p-4"
              />

              <input
                placeholder="Company Name"
                className="w-full rounded-2xl border p-4"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-2xl border p-4"
              />

              <input
                placeholder="Phone Number"
                className="w-full rounded-2xl border p-4"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full rounded-2xl border p-4"
              />

              <button className="w-full rounded-2xl bg-slate-900 py-4 text-white">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}









// import {
//     MapPin,
//     Phone,
//     Mail,
//     Clock3,
//     Send,
//   } from "lucide-react";
  
//   export default function Contact() {
//     return (
//       <section className="bg-[#071a36] py-24 text-white">
//         <div className="mx-auto max-w-[1400px] px-4">
//           {/* Heading */}
//           <div className="mb-20 text-center">
//             <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
//               Get In Touch
//             </p>
  
//             <h2 className="text-5xl font-bold md:text-6xl">
//               Start Manufacturing
//             </h2>
  
//             <div className="mt-1">
//               <span className="font-serif text-6xl italic text-cyan-400">
//                 With Us
//               </span>
//             </div>
  
//             <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-cyan-400" />
//           </div>
  
//           {/* Content */}
//           <div className="grid gap-12 lg:grid-cols-2">
//             {/* Form */}
//             <div>
//               <form className="space-y-10">
//                 <div className="grid gap-8 md:grid-cols-2">
//                   <div>
//                     <label className="mb-4 block text-sm font-semibold uppercase tracking-wider text-cyan-400">
//                       Name
//                     </label>
  
//                     <input
//                       type="text"
//                       placeholder="Your full name"
//                       className="w-full border-b border-white/20 bg-transparent pb-4 text-lg text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
//                     />
//                   </div>
  
//                   <div>
//                     <label className="mb-4 block text-sm font-semibold uppercase tracking-wider text-cyan-400">
//                       Email
//                     </label>
  
//                     <input
//                       type="email"
//                       placeholder="your@email.com"
//                       className="w-full border-b border-white/20 bg-transparent pb-4 text-lg text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
//                     />
//                   </div>
//                 </div>
  
//                 <div>
//                   <label className="mb-4 block text-sm font-semibold uppercase tracking-wider text-cyan-400">
//                     Phone
//                   </label>
  
//                   <input
//                     type="tel"
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full border-b border-white/20 bg-transparent pb-4 text-lg text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
//                   />
//                 </div>
  
//                 <div>
//                   <label className="mb-4 block text-sm font-semibold uppercase tracking-wider text-cyan-400">
//                     Your Query
//                   </label>
  
//                   <textarea
//                     rows={5}
//                     placeholder="Tell us about your manufacturing requirements..."
//                     className="w-full resize-none border-b border-white/20 bg-transparent pb-4 text-lg text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
//                   />
//                 </div>
  
//                 <button
//                   type="submit"
//                   className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-300"
//                 >
//                   Send Enquiry
//                   <Send size={18} />
//                 </button>
  
//                 <p className="text-gray-400">
//                   Or directly reach us on{" "}
//                   <a
//                     href="#"
//                     className="font-medium text-cyan-400 hover:underline"
//                   >
//                     WhatsApp
//                   </a>
//                 </p>
//               </form>
//             </div>
  
//             {/* Right Column */}
//             <div className="space-y-8">
//               {/* Contact Card */}
//               <div className="rounded-[30px] bg-white p-8 text-slate-900 shadow-xl">
//                 <h3 className="mb-8 text-3xl font-bold">
//                   Contact Information
//                 </h3>
  
//                 <div className="space-y-8">
//                   <ContactItem
//                     icon={<MapPin size={20} />}
//                     title="Address"
//                     content={
//                       <>
//                         Ziora Pharmaceuticals
//                         <br />
//                         Mohali, Punjab - 160055
//                         <br />
//                         India
//                       </>
//                     }
//                   />
  
//                   <ContactItem
//                     icon={<Phone size={20} />}
//                     title="Phone"
//                     content="+91 73072 79050"
//                   />
  
//                   <ContactItem
//                     icon={<Mail size={20} />}
//                     title="Email"
//                     content="info@ziorapharmaceutical.in"
//                   />
  
//                   <ContactItem
//                     icon={<Clock3 size={20} />}
//                     title="Business Hours"
//                     content="Mon - Sat: 9:00 AM - 6:00 PM"
//                   />
//                 </div>
//               </div>
  
//               {/* WhatsApp Card */}
//               <div className="rounded-[30px] border border-cyan-500/20 bg-[#0a2b52] p-8">
//                 <h3 className="mb-3 text-3xl font-bold text-white">
//                   Quick Enquiry
//                 </h3>
  
//                 <p className="mb-8 text-gray-400">
//                   Have a question? Chat with us directly on
//                   WhatsApp for instant responses.
//                 </p>
  
//                 <a
//                   href="#"
//                   className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:scale-105"
//                 >
//                   <Phone size={18} />
//                   Chat on WhatsApp
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   function ContactItem({ icon, title, content }) {
//     return (
//       <div className="flex gap-5">
//         <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-500">
//           {icon}
//         </div>
  
//         <div>
//           <h4 className="mb-1 text-xl font-semibold">
//             {title}
//           </h4>
  
//           <p className="leading-relaxed text-slate-500">
//             {content}
//           </p>
//         </div>
//       </div>
//     );
//   }