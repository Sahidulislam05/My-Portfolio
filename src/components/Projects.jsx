"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Server } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Zap Shift Service",
    tag: "Parcel Delivery App (MERN)",
    description:
      "A multi-role dashboard system (User, Rider, Admin) for logistics management. Features dynamic parcel booking, real-time tracking, and secure authentication.",
    tech: ["React", "MongoDB", "Express", "Firebase"],
    links: {
      live: "https://zap-shift-service.web.app",
      client: "https://github.com/Sahidulislam05/ZapShift",
      server: "https://github.com/Sahidulislam05/ZapShift_REST_API",
    },
    imageUrl: "/banner1.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Eco Event",
    tag: "Community Platform",
    description:
      "A platform to create and track social service events. Features event filtering, searching, and date validation logic with a modern UI.",
    tech: ["React", "MongoDB", "Express", "Firebase"],
    links: {
      live: "https://eco-event-social-development.netlify.app",
      client: "https://github.com/Sahidulislam05/Eco-Event-Client",
      server: "https://github.com/Sahidulislam05/Eco-Event-Server",
    },
    imageUrl: "/banner2.png",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Tech Gadget Store BD",
    tag: "E-commerce (Next.js)",
    description:
      "SEO-optimized store with server-side rendering. Features dynamic inventory management, secure user sessions, and a responsive shopping experience.",
    tech: ["Next.js 16", "Tailwind", "Express", "MongoDB"],
    links: {
      live: "https://tech-gadget-store-bd.vercel.app",
      client: "https://github.com/Sahidulislam05/Tech-Gadget-Store",
      server: "https://github.com/Sahidulislam05/Tech-Gadget-Store-API",
    },
    imageUrl: "/banner3.png",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-900/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-neutral-400">A selection of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] flex flex-col"
            >
              {/* Gradient Splash */}
              <div
                className={`absolute top-0 left-0 w-full h-32 bg-linear-to-br ${project.gradient} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-6 flex flex-col h-full z-10">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  {project?.imageUrl && (
                    <div className="relative w-full overflow-hidden my-5 ">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} screenshot`}
                        width={450}
                        height={10}
                      />
                    </div>
                  )}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-neutral-500 bg-neutral-950 px-2 py-1 rounded border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.links.live}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live
                    </a>
                    <a
                      href={project.links.client}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white transition-colors"
                      title="Client Repo"
                    >
                      <Github className="w-3.5 h-3.5" /> Client
                    </a>
                    <a
                      href={project.links.server}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white transition-colors"
                      title="Server Repo"
                    >
                      <Server className="w-3.5 h-3.5" /> Server
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
