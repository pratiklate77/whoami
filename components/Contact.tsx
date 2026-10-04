"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your preferred form endpoint (e.g. Formspree, AWS SES)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputClass =
    "w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-400 transition-colors text-sm";

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-emerald-400 text-sm mb-2">
          $ curl -X POST /contact
        </p>
        <h2 className="text-3xl font-bold text-zinc-50 mb-8">Get In Touch</h2>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-6 max-w-xl">
          {status === "sent" ? (
            <div className="text-center py-8">
              <p className="font-mono text-emerald-400 text-lg mb-2">
                ✓ Message sent!
              </p>
              <p className="text-zinc-400 text-sm">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={inputClass + " resize-none"}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="min-h-[44px] flex items-center justify-center gap-2 px-6 py-2.5 font-mono text-sm bg-emerald-400 text-[#090d16] font-semibold rounded hover:bg-emerald-300 disabled:opacity-60 transition-colors"
              >
                <Send size={15} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </motion.div>

      <footer className="mt-24 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
        <p className="font-mono">
          © {new Date().getFullYear()} Pratik Karbhari Late
        </p>
        <nav className="flex gap-6">
          {["about", "skills", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-emerald-400 transition-colors capitalize"
            >
              {id}
            </button>
          ))}
        </nav>
      </footer>
    </section>
  );
}
