// "use client";
// import { motion } from "framer-motion";
// import { fadeUp } from "@/lib/motionVariants";



// export default function About() {
//   return (
//     <section id="about" className="py-16 bg-white dark:bg-gray-900">
//       <motion.div
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.4 }}
//         className="max-w-4xl mx-auto px-4 text-center"
//       >
//         <h2 className="text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
//           About Me
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
//           I'm Ankit, a frontend developer who turns designs into clean, performant code using React & Tailwind.
//         </p>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24">
      {/* heading */}
      <motion.h2
        className="mb-6 text-3xl font-bold md:text-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        custom={0}
      >
        About Me
      </motion.h2>

      {/* blurb */}
      <motion.p
        className="leading-8 text-gray-700 dark:text-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        custom={1}
      >
        Passionate about transforming ideas into impactful products, I specialise
        in building scalable full‑stack applications with React, Node.js, and
        modern cloud services. My approach blends clean code, robust system
        design, and a relentless focus on user experience. Outside of code,
        you’ll find me mentoring budding developers and speaking at local tech
        meet‑ups.
      </motion.p>

      {/* skills grid */}
      <motion.div
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        custom={2}
      >
        {[
          "TypeScript • JavaScript",
          "React • Next.js • Redux • tRPC",
          "Node.js • Express • NestJS",
          "Tailwind CSS • shadcn/ui",
          "PostgreSQL • MongoDB • Prisma",
          "Docker • CI/CD • AWS • Vercel",
        ].map((skill) => (
          <div
            key={skill}
            className="rounded-2xl border bg-white/70 dark:bg-gray-800/50 p-4 text-sm shadow-sm"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
