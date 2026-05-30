"use client"
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { education } from "@/lib/data"

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-[#0B0B0F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100">Education</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
              className="flex gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center">
                <GraduationCap size={18} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug">{edu.degree}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 text-xs font-medium mt-0.5">{edu.field}</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">{edu.institution}</p>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
