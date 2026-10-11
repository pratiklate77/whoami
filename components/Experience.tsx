"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin, School } from "lucide-react";
import type { Experience } from "@/types";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

export default function Experience({ experience }: { experience: Experience }) {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div {...fadeUp(0)}>
        <p className="font-mono text-emerald-400 text-sm mb-2">
          $ cat experience.md
        </p>
        <h2 className="text-3xl font-bold text-zinc-50 mb-8">Experience</h2>

        <div className="space-y-6">
          {experience.work.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.startDate}`}
              {...fadeUp(i * 0.1)}
              className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-xl font-semibold text-zinc-100">
                  {job.role}{" "}
                  <span className="text-emerald-400">@ {job.company}</span>
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <Calendar size={13} />
                  {job.startDate} — {job.endDate}
                </span>
              </div>

              <p className="inline-flex items-center gap-1.5 text-xs text-zinc-500 mb-3">
                <MapPin size={13} /> {job.location}
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {job.summary}
              </p>

              {job.highlights.length > 0 && (
                <ul className="list-disc pl-5 mb-5 space-y-1.5">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-zinc-400 text-sm leading-relaxed"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-mono bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} className="text-emerald-400" />
            <h3 className="text-xl font-semibold text-zinc-100">Education</h3>
          </div>

          <div className="space-y-5">
            {experience.education.map((edu, i) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                {...fadeUp(i * 0.1)}
                className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h4 className="text-lg font-semibold text-zinc-100">
                    {edu.degree}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <Calendar size={13} />
                    {edu.startDate} — {edu.endDate}
                  </span>
                </div>

                <p className="inline-flex items-center gap-1.5 text-sm text-emerald-400 mb-1">
                  <School size={14} /> {edu.institution}
                </p>
                <p className="inline-flex items-center gap-1.5 text-xs text-zinc-500 mb-3">
                  <MapPin size={13} /> {edu.location}
                </p>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
