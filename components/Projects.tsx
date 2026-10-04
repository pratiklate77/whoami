"use client";

import { motion } from "framer-motion";
import { GitFork, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  repo: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "StudySync Microservices",
    desc: "Distributed microservices architecture with Kafka event topics for async communication, JWT-based authentication, and Redis caching for session and query optimization.",
    tags: ["Spring Boot", "Kafka", "Redis", "Docker", "PostgreSQL"],
    repo: "https://github.com/pratiklate77/StudySync-Studygroup-finder",
    live: "#",
  },
  {
    title: "Realtime Collaborator",
    desc: "Collaborative document editing app utilizing raw WebSockets for real-time document room synchronization, supporting concurrent multi-user sessions with conflict resolution.",
    tags: ["WebSockets", "Node.js", "TypeScript", "MongoDB"],
    repo: "https://github.com/pratiklate77/realtime-collaborator",
    live: "#",
  },
  {
    title: "Offline Web Archiver & Crawler",
    desc: "High-concurrency website archiving crawler built with Python and Selenium, featuring filesystem state tracking, incremental crawling, and offline asset bundling.",
    tags: ["Python", "Selenium", "AWS S3", "FastAPI"],
    repo: "https://github.com/pratikkarbhariLate/web-archiver",
    live: "#",
  },
];

export default function Projects() {
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
          {projects.map(({ title, desc, tags, repo, live }, i) => (
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
                {desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-mono bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-4 py-2 text-sm font-mono border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 rounded transition-colors"
                >
                  <GitFork size={15} />
                  GitHub Repo
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2 px-4 py-2 text-sm font-mono border border-zinc-700 text-zinc-300 hover:border-emerald-400/50 hover:text-emerald-400 rounded transition-colors"
                >
                  <ExternalLink size={15} />
                  Live Architecture
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
