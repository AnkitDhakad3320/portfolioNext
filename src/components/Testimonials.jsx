"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";
import { TESTIMONIALS } from "@/components/data/siteData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 dark:bg-gray-800 py-24 text-gray-900 dark:text-gray-100"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* heading */}
        <motion.h2
          className="mb-10 text-3xl font-bold md:text-4xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          Testimonials
        </motion.h2>

        {/* testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.author}
              className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-sm border border-gray-200 dark:border-gray-700"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <p className="mb-4 italic leading-7">“{t.quote}”</p>
              <footer className="text-sm font-medium uppercase tracking-wide">
                {t.author} — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
