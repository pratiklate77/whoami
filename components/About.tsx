"use client";

import { motion } from "framer-motion";
import { Server, Zap, Cloud } from "lucide-react";

const cards = [
  {
    icon: <Server size={20} className="text-emerald-400" />,
    title: "Backend Systems",
    desc: "Designing robust REST & event-driven APIs with Spring Boot, FastAPI, and Node.js at scale.",
  },
  {
    icon: <Zap size={20} className="text-emerald-400" />,
    title: "Real-Time & Event-Driven",
    desc: "Building low-latency pipelines with Kafka, WebSockets, and Redis pub/sub for live data flows.",
  },
  {
    icon: <Cloud size={20} className="text-emerald-400" />,
    title: "Cloud & DevOps",
    desc: "Deploying cloud-native workloads on AWS with Docker, CI/CD pipelines, and infrastructure-as-code.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-emerald-400 text-sm mb-2">$ cat about.md</p>
        <h2 className="text-3xl font-bold text-zinc-50 mb-6">About Me</h2>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-6 mb-8 text-zinc-400 leading-relaxed">
          <p>
            I&apos;m a{" "}
            <span className="text-zinc-200 font-medium">
              Master of Computer Applications (MCA)
            </span>{" "}
            graduate with a passion for solving complex distributed systems
            problems. My work sits at the intersection of backend engineering,
            real-time data, and cloud infrastructure — building systems that are
            fast, fault-tolerant, and built to scale.
          </p>
          <p className="mt-4">
            I thrive in environments where reliability and performance matter,
            and I approach every problem with a first-principles mindset — from
            data modeling to deployment pipelines.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {cards.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-5 hover:border-emerald-400/40 transition-colors"
            >
              <div className="mb-3">{icon}</div>
              <h3 className="text-zinc-100 font-semibold mb-1">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
