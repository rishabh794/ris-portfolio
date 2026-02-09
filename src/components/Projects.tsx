"use client";
import React, { useState } from "react";
import { Terminal, ArrowRight, Github, ExternalLink, Command, Cpu, Network, Database, Layout } from "lucide-react";

const projects = [
  {
    id: "securesteps",
    title: "SecureSteps",
    cmd: "run secure-steps --prod",
    description: "A real-time safety application designed for immediate emergency response. Features live SOS alerting, geolocation tracking, and guardian notification systems.",
    tech: ["React", "Node.js", "WebSockets", "PostgreSQL", "Leaflet"],
    stats: {
      performance: "50+ SOS/min",
      latency: "< 100ms",
      users: "1k+ Profiles"
    },
    links: { github: "#", demo: "#" },
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    id: "securevault",
    title: "SecureVault",
    cmd: "exec vault-manager --encrypt",
    description: "Zero-knowledge password manager using client-side AES encryption. Data is encrypted before it ever leaves the browser, ensuring 100% privacy.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Crypto-JS", "Tailwind"],
    stats: {
      encryption: "AES-256",
      exposure: "0% Server-Side",
      items: "500+ Vaults"
    },
    links: { github: "#", demo: "#" },
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "turnpage",
    title: "Turn-The-Page",
    cmd: "npm start book-review",
    description: "Full-stack book review platform integrating Google Books API. Engineered with high-performance caching strategies to minimize API latency.",
    tech: ["MERN Stack", "Google Books API", "Redis", "JWT"],
    stats: {
      speed: "35% Faster Fetch",
      caching: "Redis Layer",
      auth: "JWT HttpOnly"
    },
    links: { github: "#", demo: "#" },
    color: "from-green-500/20 to-emerald-500/20"
  }
];

const Projects = () => {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find(p => p.id === activeId) || projects[0];

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="max-w-7xl w-full">
      <div className="flex items-center mb-8 gap-3">
        <h2 className="text-3xl font-bold text-white">
          <span className="text-blue-500">03.</span> Projects
        </h2>
      </div>

      {/* Main Dashboard Container */}
      <div className="bg-[#1e1e1e] border border-gray-800 rounded-xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
        
        {/* LEFT PANEL: Project List (Sidebar) */}
        <div className="md:col-span-4 bg-[#252526] border-r border-gray-700 flex flex-col">
          {/* Terminal Header */}
          <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between bg-[#2a2d2e]">
             <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
             <div className="text-xs text-gray-500 font-mono flex items-center">
                <Command size={10} className="mr-1" /> select-project
             </div>
          </div>

          {/* List Items */}
          <div className="flex-1 overflow-y-auto">
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`group px-6 py-5 cursor-pointer transition-all border-l-2 ${
                  activeId === project.id 
                    ? "bg-[#1e1e1e] border-blue-500" 
                    : "border-transparent hover:bg-[#2a2d2e]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold text-sm ${activeId === project.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                    {project.title}
                  </span>
                  {activeId === project.id && <ArrowRight size={14} className="text-blue-500" />}
                </div>
                <div className="text-xs text-gray-600 font-mono truncate">
                  {project.cmd}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL: Active Project Details (Preview) */}
        <div className="md:col-span-8 bg-[#1e1e1e] flex flex-col">
          
          {/* Top Bar */}
          <div className="h-10 border-b border-gray-700 flex items-center px-4 bg-[#1e1e1e]">
             <span className="text-xs text-gray-500 flex items-center">
               <Terminal size={12} className="mr-2" /> 
               Output / {activeProject.id} / preview
             </span>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              {/* Header & Stats Grid */}
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-2xl font-bold text-white mb-2">{activeProject.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                     {activeProject.description}
                   </p>
                 </div>
                 {/* Visual Placeholder for Image/Gradient */}
                 <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${activeProject.color} flex items-center justify-center border border-white/5`}>
                    <Layout size={24} className="text-white/50" />
                 </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                 {Object.entries(activeProject.stats).map(([key, value]) => (
                   <div key={key} className="bg-[#252526] p-3 rounded border border-gray-800/50">
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{key}</div>
                      <div className="text-sm font-medium text-blue-400">{value}</div>
                   </div>
                 ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-bold">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-gray-500 transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-800">
               <a href={activeProject.links.github} className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded transition-all">
                  <Github size={16} className="mr-2" /> View Source
               </a>
               <a href={activeProject.links.demo} className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded transition-all">
                  <ExternalLink size={16} className="mr-2" /> Live Demo
               </a>
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Projects;