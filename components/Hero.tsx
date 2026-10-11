"use client";

import { motion } from "framer-motion";
import { FileText, GitFork, Link, Mail, Terminal } from "lucide-react";
import type { Profile } from "@/types";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function Hero({ profile }: { profile: Profile }) {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-dvh flex flex-col justify-center px-6 py-20 max-w-4xl mx-auto">
      <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-6">
        <Terminal size={18} className="text-emerald-400" />
        <span className="font-mono text-emerald-400 text-sm tracking-widest">
          $ whoami
        </span>
        <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block" />
      </motion.div>

      <motion.h1
        {...fadeUp(0.1)}
        className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-50 mb-3"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
        className="text-xl sm:text-2xl font-mono text-emerald-400 mb-6"
      >
        {profile.title}
      </motion.p>

      <motion.p
        {...fadeUp(0.3)}
        className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
      >
        {profile.bio}
      </motion.p>

      <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-10">
        <button
          onClick={() => scrollTo("projects")}
          className="min-h-[44px] px-6 py-2.5 font-mono text-sm border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#090d16] transition-colors rounded"
        >
          [ View Projects ]
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="min-h-[44px] px-6 py-2.5 font-mono text-sm border border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-zinc-100 transition-colors rounded"
        >
          [ Get In Touch ]
        </button>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-emerald-400 bg-zinc-900 border border-emerald-500/30 rounded-md hover:bg-emerald-500/10 hover:border-emerald-500/60 transition-all duration-200 active:scale-95"
        >
          <FileText className="w-4 h-4" />
          <span>View Resume</span>
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.5)} className="flex gap-5">
        {[
          {
            href: profile.social.github,
            icon: <GitFork size={22} />,
            label: "GitHub",
          },
          {
            href: profile.social.linkedin,
            icon: <Link size={22} />,
            label: "LinkedIn",
          },
          {
            href: profile.social.email,
            icon: <Mail size={22} />,
            label: "Email",
          },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            {icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
