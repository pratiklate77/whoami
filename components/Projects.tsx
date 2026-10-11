"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";
import type { Project } from "@/types";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-emerald-400 text-sm mb-2">
          $ git log --oneline projects/
        </p>
        <h2 className="text-3xl font-bold text-zinc-50 mb-8">Projects</h2>

        <div className="grid gap-6">
          {projects.map(({ title, description, techStack, githubUrl, liveUrl }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-6 hover:border-emerald-400/40 transition-colors"
            >
              <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-mono bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-4 py-2 text-sm font-mono border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 rounded transition-colors"
                >
                  <GitFork size={15} />
                  GitHub Repo
                </a>
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] flex items-center gap-2 px-4 py-2 text-sm font-mono border border-zinc-700 text-zinc-300 hover:border-emerald-400/50 hover:text-emerald-400 rounded transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
