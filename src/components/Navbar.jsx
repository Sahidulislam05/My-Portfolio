"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-md border-white/10 py-4"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-heading group">
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300">
            Sahidul.
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors relative group text-sm font-medium"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="/resume.sahidul_islam.pdf"
            target="_blank"
            download="Sahidul_Resume.pdf"
            className="px-5 py-2 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <span>Resume</span>
            <Download className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-neutral-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/resume.sahidul_islam.pdf"
                target="_blank"
                download="Sahidul_Resume.pdf"
                className="w-full text-center px-6 py-3 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
