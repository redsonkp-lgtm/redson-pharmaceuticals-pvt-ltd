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

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8866003844",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@redsonpharma.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "2, Radhe Kutir Bunglows, Near Safal Bunglows, Village Bhat, Dist.- Gandhinagar - 382428, Gujarat, India.",
  },
  {
    icon: Factory,
    title: "Factory Address",
    value: "Survey No. 1682, Vijapur-Ransipur Road, Sardarpur, Taluka Vijapur, Dist.- Mehsana - 382860, Gujarat, India.",
  },
];



export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } else {
      alert("Failed to send email");
    }
  };

  return (
    <section
      id="contact" className="relative overflow-hidden bg-white py-12"
    >
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
            <div className="mt-10 rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-6">
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="grid grid-cols-[0.1fr_1fr] items-start gap-4"
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
          <div className="rounded-[28px] border border-[var(--primary)]/40 bg-[var(--primary)]/5 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone Number"
                  className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />

                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Name"
                  className="h-14 rounded-2xl border border-[var(--primary)]/20 bg-white px-4 text-sm outline-none focus:border-[var(--primary)]"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us about your requirements..."
                className="w-full rounded-2xl border border-[var(--primary)]/20 bg-white px-4 py-4 text-sm outline-none focus:border-[var(--primary)]"
              />

              <div className="pt-2">
                <div className="flex flex-col gap-4">
                  
                  {/* Primary Button */}
                  <button
                    type="submit"
                    className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span>Send Inquiry</span>
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <div className="relative flex items-center">
                    <div className="flex-grow border-t border-[var(--primary)]/20"></div>
                    <span className="mx-4 bg-transparent px-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                      Or
                    </span>
                    <div className="flex-grow border-t border-[var(--primary)]/20"></div>
                  </div>

                  {/* Secondary Button */}
                  <a
                    href="https://wa.me/918866003844?text=Hello%20REDSON%20Pharmaceuticals,%20I%20would%20like%20to%20discuss%20my%20requirements."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[var(--primary)]/40 bg-white px-6 py-4 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:bg-[var(--primary)] hover:text-white hover:shadow-md"
                  >
                    <span>Chat on WhatsApp</span>
                    <MessageSquareDotIcon
                      size={16}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}