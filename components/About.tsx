"use client";

import { motion } from "framer-motion";
import { Cloud, MapPin, Server, Zap } from "lucide-react";
import type { Profile } from "@/types";

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

export default function About({ profile }: { profile: Profile }) {
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
          <p>{profile.bio}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-zinc-500">
            <MapPin size={15} className="text-emerald-400" />
            Based in {profile.location}
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
