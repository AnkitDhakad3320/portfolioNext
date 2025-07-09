"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionVariants";
import { PROJECTS } from "@/components/data/siteData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-24">
 
      <motion.h2
        className="mb-10 text-3xl font-bold md:text-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        custom={0}
      >
        Projects
      </motion.h2>

  
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={proj.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <Card className="h-full hover:shadow-lg transition">
              <CardContent className="flex h-full flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold">{proj.name}</h3>

                <p className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-400">
                  {proj.description}
                </p>


                <div className="mb-4 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  <Button variant="secondary" asChild size="sm">
                    <a
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" asChild size="sm">
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
