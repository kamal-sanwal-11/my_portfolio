"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Award, Briefcase } from "lucide-react"
import { experiences, type Experience } from "@/lib/data"

function StintCard({ exp, defaultOpen }: { exp: Experience; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
      style={{
        borderLeftColor: exp.theme.primary,
        borderLeftWidth: 4,
        backgroundColor: open ? exp.theme.bg : undefined,
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full text-white shrink-0"
              style={{ backgroundColor: exp.theme.primary }}
            >
              {exp.company.split(" – ")[0].split(" (")[0]}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{exp.period}</span>
          </div>
          <p className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug">{exp.role}</p>
          {!open && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{exp.summary}</p>
          )}
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-1 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-5 border-t border-slate-100 dark:border-slate-800 pt-4">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                <Briefcase size={14} className="shrink-0 mt-0.5 text-slate-400" />
                {exp.summary}
              </p>

              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  Responsibilities
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: exp.theme.primary }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
                  Key outcomes
                </p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-indigo-400" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.award && (
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400">
                  <Award size={15} />
                  {exp.award}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CareerStints() {
  return (
    <section id="career" className="py-24 bg-white dark:bg-[#0B0B0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            Career Stints
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Where I&apos;ve built
          </h2>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
            >
              <StintCard exp={exp} defaultOpen={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
