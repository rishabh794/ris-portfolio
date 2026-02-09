"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Code2 } from "lucide-react";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl">
              <Image
                src="/avatar.png"
                alt="Profile"
                width={192}
                height={192}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Hi, I am <span className="text-blue-500">Rishabh Buchha</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-6 max-w-2xl">
              Full Stack Developer passionate about building beautiful and functional web applications
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/rishabh794"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700 transition-colors shadow-lg group"
              >
                <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/rishabh-buchha-bb997b2a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700 transition-colors shadow-lg group"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://leetcode.com/u/rishabhh_18/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700 transition-colors shadow-lg group"
              >
                <Code2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
