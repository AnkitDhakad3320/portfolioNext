"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 py-24 text-white"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
   
        <motion.h2
          className="text-3xl font-bold md:text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          Let’s build something great together.
        </motion.h2>

        <motion.p
          className="max-w-xl text-lg text-white/90"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={1}
        >
          Reach out via email or connect with me on social media.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={2}
        >
          <Button size="lg" asChild>
            <a href="mailto:ankitdhakad@example.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email Me
            </a>
          </Button>

          <Button variant="secondary" size="lg" asChild>
            <a
              href="https://github.com/ankitdhakad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>

          <Button variant="secondary" size="lg" asChild>
            <a
              href="https://linkedin.com/in/ankitdhakad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
