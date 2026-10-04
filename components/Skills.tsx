"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Backend",
    skills: ["Spring Boot", "FastAPI", "Node.js", "WebSockets", "Kafka"],
  },
  {
    category: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS Amplify", "S3", "CloudFront", "Docker", "CI/CD", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-emerald-400 text-sm mb-2">$ ls skills/</p>
        <h2 className="text-3xl font-bold text-zinc-50 mb-8">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map(({ category, skills }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-5 hover:border-emerald-400/30 transition-colors"
            >
              <h3 className="font-mono text-emerald-400 text-xs uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded border border-zinc-700 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
