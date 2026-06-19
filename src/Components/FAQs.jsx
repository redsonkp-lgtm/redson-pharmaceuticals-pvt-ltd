"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What pharmaceutical products do you manufacture?",
    answer:
      "We manufacture tablets, capsules, injectables, liquid orals, eye drops, and veterinary products.",
  },
  {
    question: "Do you provide third-party manufacturing?",
    answer:
      "Yes, we offer scalable third-party manufacturing solutions tailored to client requirements.",
  },
  {
    question: "Do you support export documentation?",
    answer:
      "Yes, we provide complete export assistance and regulatory documentation support.",
  },
  {
    question: "Do you offer private labeling?",
    answer:
      "Yes, we provide private label manufacturing, customized packaging, and branding solutions.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-slate-50 py-14 lg:py-16">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-[var(--primary)]/15 bg-[var(--primary)]/5 px-4 py-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              FAQs
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-slate-200 bg-white p-5"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="font-semibold text-slate-900">
                  {faq.question}
                </h3>

                {open === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>

              {open === index && (
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}