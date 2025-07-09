"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";
import { EXPERIENCE } from "@/components/data/siteData";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-100 dark:bg-gray-900 py-24">
      <div className="mx-auto max-w-4xl px-4">
    
        <motion.h2
          className="mb-10 text-3xl font-bold md:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          custom={0}
        >
          Experience
        </motion.h2>

      
        <div className="relative border-l pl-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              custom={i}
            >
              <span className="absolute -left-3 mt-1 h-6 w-6 rounded-full bg-indigo-600" />
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
