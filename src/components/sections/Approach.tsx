"use client"
import { motion } from "framer-motion"
import { approachPrinciples } from "@/lib/data"

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">
            How I think &amp; work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {approachPrinciples.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <span className="text-2xl font-black text-indigo-500 dark:text-indigo-400 block mb-3 select-none">
                {p.number}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
