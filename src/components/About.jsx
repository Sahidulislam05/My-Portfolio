"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "React.js", bg: "bg-blue-500/10", text: "text-blue-400" },
  { name: "Next.js", bg: "bg-white/10", text: "text-white" },
  { name: "Node.js", bg: "bg-green-500/10", text: "text-green-400" },
  { name: "MongoDB", bg: "bg-green-600/10", text: "text-green-500" },
  { name: "Express", bg: "bg-gray-500/10", text: "text-gray-400" },
  { name: "Firebase", bg: "bg-orange-500/10", text: "text-orange-400" },
  { name: "Tailwind", bg: "bg-cyan-500/10", text: "text-cyan-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            I'm a dedicated Full Stack Developer with a strong foundation in the
            MERN stack. My journey involves creating dynamic, responsive web
            applications that solve real-world problems. I thrive on learning
            new technologies and constantly improving my skillset to deliver
            high-quality code.
          </p>
        </motion.div>

        {/* Tech Stack Grid/Marquee style */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-10">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "px-6 py-3 rounded-xl border border-white/5 backdrop-blur-sm font-medium transition-all duration-300 hover:border-white/20 hover:scale-105 cursor-default",
                  tech.bg,
                  tech.text
                )}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
