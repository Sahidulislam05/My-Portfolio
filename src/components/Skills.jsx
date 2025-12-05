"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Basic TypeScript",
      "Redux",
      "Tailwind CSS",
      "DaisyUI, Shadcn, HeadlessUI",
      "TanStack",
      "Framer Motion, GSAP",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: [
      "MongoDB",
      "Basic Mongoose",
      "Basic PostgreSQL",
      "Basic Prisma, Drizzle ORM",
    ],
  },
  {
    category: "Authentication",
    items: ["Firebase", "Clerk", "JWT"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Postman"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Teamwork", "Communication", "Time Management"],
  },
  {
    category: "Others",
    items: ["Basic AI/ML", "TensorFlow.js", "Automation", "(Zapier)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-neutral-400">Technical proficiency and tools</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/5 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-center text-neutral-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 " />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
