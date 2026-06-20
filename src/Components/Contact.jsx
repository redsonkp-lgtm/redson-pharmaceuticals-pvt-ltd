import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@redsonpharma.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ahmedabad, Gujarat, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat / 9:00 AM - 7:00 PM",
  },
];

export default function Contact() {
  return (
    <section
      id="#contact" className="relative overflow-hidden bg-white py-12"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-blue-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Contact Us
                </span>
              </div>

              <h2 className="mt-4 text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
                Let’s Build Your
                <br />
                <span className="text-[var(--primary)]">
                Next Product.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-slate-600 leading-relaxed">
                Connect with REDSON Pharmaceuticals for contract
                manufacturing, third-party production, private labeling,
                packaging, and export solutions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                        <Icon
                          size={18}
                          className="text-[var(--primary)]"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-500">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="h-14 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Tell us about your requirements..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm outline-none focus:border-[var(--primary)]"
              />

              <button className="rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}









// import {
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
// } from "lucide-react";

// export default function Contact() {
//   return (
//     <section className="relative overflow-hidden bg-white py-14 lg:py-16">
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[var(--primary)]/5 blur-[100px]" />
//       <div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-blue-100/40 blur-[90px]" />

//       <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
//         <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
//           {/* Left Content */}
//           <div>
//             <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2">
//               <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
//                 Contact Us
//               </span>
//             </div>

//             <h2 className="mt-5 text-3xl font-bold leading-[1] tracking-[-0.04em] text-slate-900 md:text-5xl xl:text-[54px]">
//               Let's Discuss Your
//               <br />
//               Manufacturing Needs.
//             </h2>

//             <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 md:text-base">
//               Connect with REDSON Pharmaceuticals to explore contract
//               manufacturing, private labeling, packaging solutions,
//               export support, and pharmaceutical product development.
//             </p>

//             {/* Contact Cards */}
//             <div className="mt-7 space-y-3">
//               {[
//                 {
//                   icon: Phone,
//                   label: "Phone",
//                   value: "+91 8866003844",
//                 },
//                 {
//                   icon: Mail,
//                   label: "Email",
//                   value: "info@redsongroup.in",
//                 },
//                 {
//                   icon: MapPin,
//                   label: "Location",
//                   value: "Gandhinagar, Gujarat, India",
//                 },
//               ].map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.label}
//                     className="flex items-center gap-4 rounded-[20px] border border-slate-200 bg-white p-4"
//                   >
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10">
//                       <Icon
//                         size={18}
//                         className="text-[var(--primary)]"
//                       />
//                     </div>

//                     <div>
//                       <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
//                         {item.label}
//                       </p>

//                       <p className="text-sm font-semibold text-slate-900">
//                         {item.value}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Form */}
//           <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:p-7">
//             <h3 className="text-xl font-bold text-slate-900">
//               Send an Inquiry
//             </h3>

//             <p className="mt-2 text-sm text-slate-600">
//               Fill out the form and our team will connect with you shortly.
//             </p>

//             <form className="mt-5 space-y-4">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
//               />

//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
//               />

//               <div className="grid gap-4 md:grid-cols-2">
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
//                 />
//               </div>

//               <textarea
//                 rows={4}
//                 placeholder="Tell us about your requirements..."
//                 className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
//               />

//               <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
//                 Send Inquiry

//                 <ArrowRight
//                   size={15}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




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