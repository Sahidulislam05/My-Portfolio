"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Cpu } from "lucide-react";
import Image from "next/image";
import myImg from "../../public/Sahidulislam.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10 md:pt-20"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mt-8 md:mt-0 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-5">
            Available for Work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-4">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient">
              Sahidul Islam
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-neutral-400 font-medium mb-6">
            Building Scalable Web Solutions with the MERN Stack.
          </h2>
          <p className="text-neutral-500 text-lg mb-8 max-w-lg leading-relaxed">
            Passionate Junior MERN Stack Developer specializing in React.js,
            Next.js, and Node.js. Committed to writing clean code and solving
            complex problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract 3D-like coding graphic */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl border border-white/10 backdrop-blur-sm p-8"
            >
              <div className="relative w-full h-full mx-auto rounded-2xl overflow-hidden">
                <Image
                  src={myImg}
                  alt="Sahidul Islam"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-8 top-20 p-4 bg-neutral-900 rounded-2xl border border-white/10 shadow-xl"
              >
                <Code2 className="w-8 h-8 text-cyan-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-8 bottom-20 p-4 bg-neutral-900 rounded-2xl border border-white/10 shadow-xl"
              >
                <Terminal className="w-8 h-8 text-purple-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute right-8 -bottom-8 p-4 bg-neutral-900 rounded-2xl border border-white/10 shadow-xl"
              >
                <Cpu className="w-8 h-8 text-pink-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
