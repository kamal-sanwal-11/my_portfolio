"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { work, type WorkItem } from "@/lib/data"

function WorkCard({ item }: { item: WorkItem }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
      style={{ borderTopColor: item.companyColor, borderTopWidth: 3 }}
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Category + company */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            {item.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
            style={{ backgroundColor: item.companyColor }}
          >
            {item.company}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">{item.blurb}</p>

        {/* Metrics pinned to bottom of collapsed area */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.metrics.map((m) => (
            <div
              key={m.label}
              className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <span className="font-bold text-slate-800 dark:text-slate-200">{m.value}</span>
              <span className="text-slate-500 dark:text-slate-400 ml-1">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-3 border-t border-slate-100 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
        aria-expanded={expanded}
      >
        <span>{expanded ? "Close" : "Read more"}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 py-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800">
              {item.detail}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Products &amp; impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-6 items-stretch">
          {work.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              className="flex"
            >
              <WorkCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
