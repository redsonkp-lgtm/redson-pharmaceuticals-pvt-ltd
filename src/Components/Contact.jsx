  "use client";

import {
  Phone,
  Mail,
  MapPin,
  Factory,
  Send,
  MessageSquareDotIcon,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8866003844",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@redsongroup.in",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value:
      "2, Radhe Kutir Bunglows, Near Safal Bunglows, Village Bhat, Dist.- Gandhinagar - 382428, Gujarat, India.",
  },
  {
    icon: Factory,
    title: "Factory Address",
    value:
      "Survey No. 1682, Vijapur-Ransipur Road, Sardarpur, Taluka Vijapur, Dist.- Mehsana - 382860, Gujarat, India.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
    },
  }),
};

export default function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",


  
  message: "",
});

const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);

const [status, setStatus] = useState({
  type: "",
  message: "",
});



const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Please enter a valid email.";
  }

  const phone = formData.phone.replace(/\D/g, "");

if (!phone) {
  newErrors.phone = "Phone number is required.";
} else if (!/^(91)?[6-9]\d{9}$/.test(phone)) {
  newErrors.phone =
    "Please enter a valid Indian mobile number.";
}

  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
  } else if (formData.message.trim().length < 20) {
    newErrors.message =
      "Message should contain at least 20 characters.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));

  setStatus({
    type: "",
    message: "",
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    setStatus({
      type: "success",
      message:
        "Thank you! Your inquiry has been submitted successfully.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    setErrors({});
  } catch (error) {
    setStatus({
      type: "error",
      message:
        error.message ||
        "Unable to submit your inquiry. Please try again.",
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-12"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.div
                variants={fadeUp}
                custom={1}
                className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Contact Us
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={2}
                className="mt-4 text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]"
              >
                Let’s Build Your
                <br />
                <span className="text-[var(--primary)]">
                  Next Product.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-5 max-w-lg text-slate-600 leading-relaxed"
              >
                Connect with REDSON Pharmaceuticals for contract
                manufacturing, third-party production, private labeling,
                packaging, and export solutions.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-10 rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-6"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      custom={index + 5}
                      whileHover={{ x: 6 }}
                      className="grid grid-cols-[0.1fr_1fr] items-start gap-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-all duration-300 hover:scale-110">
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
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

  {/* Status Message */}
  {status.message && (
    <div
      className={`rounded-xl border px-4 py-3 text-sm font-medium ${
        status.type === "success"
          ? "border-green-200 bg-green-50 text-green-700"
          : "border-red-200 bg-red-50 text-red-700"
      }`}
    >
      {status.message}
    </div>
  )}

  {/* Name & Email */}
  <div className="grid gap-5 md:grid-cols-2">

    <div>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="name"
        placeholder="Your Name *"
        value={formData.name}
        onChange={handleChange}
        aria-invalid={!!errors.name}
        className={`h-14 w-full rounded-2xl border bg-white px-4 text-sm outline-none transition-all

        ${
          errors.name
            ? "border-red-500"
            : "border-[var(--primary)]/20 focus:border-[var(--primary)]"
        }`}
      />

      {errors.name && (
        <p className="mt-2 text-sm text-red-500">
          {errors.name}
        </p>
      )}
    </div>

    <div>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="email"
        name="email"
        placeholder="Email Address *"
        value={formData.email}
        onChange={handleChange}
        aria-invalid={!!errors.email}
        className={`h-14 w-full rounded-2xl border bg-white px-4 text-sm outline-none transition-all

        ${
          errors.email
            ? "border-red-500"
            : "border-[var(--primary)]/20 focus:border-[var(--primary)]"
        }`}
      />

      {errors.email && (
        <p className="mt-2 text-sm text-red-500">
          {errors.email}
        </p>
      )}
    </div>

  </div>

  {/* Phone & Company */}

  <div className="grid gap-5 md:grid-cols-2">

    <div>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        name="phone"
        placeholder="Phone Number *"
        value={formData.phone}
        onChange={handleChange}
        aria-invalid={!!errors.phone}
        className={`h-14 w-full rounded-2xl border bg-white px-4 text-sm outline-none transition-all

        ${
          errors.phone
            ? "border-red-500"
            : "border-[var(--primary)]/20 focus:border-[var(--primary)]"
        }`}
      />

      {errors.phone && (
        <p className="mt-2 text-sm text-red-500">
          {errors.phone}
        </p>
      )}
    </div>

    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="text"
      name="company"
      placeholder="Company Name (Optional)"
      value={formData.company}
      onChange={handleChange}
      className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
    />

  </div>

  {/* Message */}

  <div>

    <motion.textarea
      whileFocus={{ scale: 1.01 }}
      rows={6}
      name="message"
      placeholder="Tell us about your requirements... *"
      value={formData.message}
      onChange={handleChange}
      aria-invalid={!!errors.message}
      className={`w-full rounded-2xl border bg-white px-4 py-4 text-sm outline-none transition-all

      ${
        errors.message
          ? "border-red-500"
          : "border-[var(--primary)]/20 focus:border-[var(--primary)]"
      }`}
    />

    {errors.message && (
      <p className="mt-2 text-sm text-red-500">
        {errors.message}
      </p>
    )}

  </div>

  <div className="pt-2">

    <div className="flex flex-col gap-4">

      {/* Submit */}

      <motion.button
        whileHover={!loading ? { y: -3 } : {}}
        whileTap={!loading ? { scale: 0.97 } : {}}
        disabled={loading}
        type="submit"
        className="group flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                opacity=".2"
              />
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 1 10 10h-4a6 6 0 0 0-6-6V2z"
              />
            </svg>

            Sending...
          </>
        ) : (
          <>
            <span>Send Inquiry</span>

            <Send
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </>
        )}
      </motion.button>

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-[var(--primary)]/20" />

        <span className="mx-4 text-xs font-medium uppercase tracking-wider text-gray-500">
          Or
        </span>

        <div className="flex-grow border-t border-[var(--primary)]/20" />
      </div>

      <motion.a
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        href="https://wa.me/918866003844?text=Hello%20REDSON%20Pharmaceuticals,%20I%20would%20like%20to%20discuss%20my%20requirements."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 rounded-2xl border border-[var(--primary)]/40 bg-white px-6 py-4 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:shadow-md"
      >
        <span>Chat on WhatsApp</span>

        <MessageSquareDotIcon
          size={16}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </motion.a>

    </div>

  </div>

</form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}








// "use client";

// import {
//   Phone,
//   Mail,
//   MapPin,
//   Factory,
//   Send,
//   MessageSquareDotIcon,
// } from "lucide-react";
// import { useState } from "react";

// const contactInfo = [
//   {
//     icon: Phone,
//     title: "Phone",
//     value: "+91 8866003844",
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     value: "info@redsongroup.in",
//   },
//   {
//     icon: MapPin,
//     title: "Office Address",
//     value: "2, Radhe Kutir Bunglows, Near Safal Bunglows, Village Bhat, Dist.- Gandhinagar - 382428, Gujarat, India.",
//   },
//   {
//     icon: Factory,
//     title: "Factory Address",
//     value: "Survey No. 1682, Vijapur-Ransipur Road, Sardarpur, Taluka Vijapur, Dist.- Mehsana - 382860, Gujarat, India.",
//   },
// ];



// export default function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Email sent successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         message: "",
//       });
//     } else {
//       alert("Failed to send email");
//     }
//   };

//   return (
//     <section
//       id="contact" className="relative overflow-hidden bg-white py-12"
//     >
//       <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
//         <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
//           {/* Left Side */}
//           <div className="flex flex-col justify-between">
//             <div>
//               <div className="inline-flex items-center rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2.5">
//                 <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
//                   Contact Us
//                 </span>
//               </div>

//               <h2 className="mt-4 text-4xl font-bold leading-[0.96] tracking-[-0.04em] text-slate-900 md:text-6xl xl:text-[64px]">
//                 Let’s Build Your
//                 <br />
//                 <span className="text-[var(--primary)]">
//                 Next Product.
//                 </span>
//               </h2>

//               <p className="mt-5 max-w-lg text-slate-600 leading-relaxed">
//                 Connect with REDSON Pharmaceuticals for contract
//                 manufacturing, third-party production, private labeling,
//                 packaging, and export solutions.
//               </p>
//             </div>

//             {/* Contact Details */}
//             <div className="mt-10 rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-6">
//               <div className="space-y-6">
//                 {contactInfo.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.title}
//                       className="grid grid-cols-[0.1fr_1fr] items-start gap-4"
//                     >
//                       <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10">
//                         <Icon
//                           size={18}
//                           className="text-[var(--primary)]"
//                         />
//                       </div>

//                       <div>
//                         <p className="text-sm font-medium text-slate-500">
//                           {item.title}
//                         </p>
//                         <p className="mt-1 text-sm font-semibold text-slate-900">
//                           {item.value}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Right Side Form */}
//           <div className="rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-6 md:p-8">
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid gap-5 md:grid-cols-2">
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="Your Name"
//                   className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
//                 />

//                 <input
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   type="email"
//                   placeholder="Email Address"
//                   className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
//                 />
//               </div>

//               <div className="grid gap-5 md:grid-cols-2">
//                 <input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="Phone Number"
//                   className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
//                 />

//                 <input
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="Company Name"
//                   className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
//                 />
//               </div>

//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={6}
//                 placeholder="Tell us about your requirements..."
//                 className="w-full rounded-2xl border border-[var(--primary)]/20 bg-white px-4 py-4 text-sm outline-none focus:border-[var(--primary)]"
//               />

//               <div className="pt-2">
//                 <div className="flex flex-col gap-4">

//                   {/* Primary Button */}
//                   <button
//                     type="submit"
//                     className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
//                   >
//                     <span>Send Inquiry</span>
//                     <Send
//                       size={16}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </button>

//                   <div className="relative flex items-center">
//                     <div className="flex-grow border-t border-[var(--primary)]/20"></div>
//                     <span className="mx-4 bg-transparent px-2 text-xs font-medium uppercase tracking-wider text-gray-500">
//                       Or
//                     </span>
//                     <div className="flex-grow border-t border-[var(--primary)]/20"></div>
//                   </div>

//                   {/* Secondary Button */}
//                   <a
//                     href="https://wa.me/918866003844?text=Hello%20REDSON%20Pharmaceuticals,%20I%20would%20like%20to%20discuss%20my%20requirements."
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[var(--primary)]/40 bg-white px-6 py-4 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:shadow-md"
//                   >
//                     <span>Chat on WhatsApp</span>
//                     <MessageSquareDotIcon
//                       size={16}
//                       className="transition-transform duration-300 group-hover:scale-110"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }