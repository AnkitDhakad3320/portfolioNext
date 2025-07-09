"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 py-24 text-white"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold leading-tight md:text-6xl"
        >
          Code that turns{" "}
          <span className="text-primary-foreground">ideas</span> into products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl"
        >
          A full-stack developer who builds performant, delightful
          web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#projects" className="flex items-center gap-2">
              View Work <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <a href="#contact">Let’s Talk</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
