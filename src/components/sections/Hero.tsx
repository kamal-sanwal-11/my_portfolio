"use client"
import { motion } from "framer-motion"
import { ArrowDown, FileDown } from "lucide-react"
import { personalInfo, heroMetrics } from "@/lib/data"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 pb-24 bg-white dark:bg-[#0B0B0F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase mb-4">
            {personalInfo.eyebrow}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-6">
            I build{" "}
            <span className="text-indigo-600 dark:text-indigo-400">0→1 products</span>
            {" "}that scale in regulated environments.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
            {personalInfo.subline}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#work"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              View work
            </a>
            <a
              href="#connect"
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FileDown size={16} />
              Résumé
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {heroMetrics.map((m) => (
              <div
                key={m.label}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg"
              >
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{m.value}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 ml-1.5">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
