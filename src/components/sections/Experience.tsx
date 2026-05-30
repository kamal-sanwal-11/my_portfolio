"use client"
import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { FiAward } from "react-icons/fi"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Experience</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-indigo-200 hidden md:block" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative md:pl-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="hidden md:flex absolute left-0 top-1.5 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white shadow-sm items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-indigo-600 font-semibold text-sm mb-3">{exp.company}</p>
                  <p className="text-gray-500 text-sm italic mb-4">{exp.summary}</p>
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-indigo-400 mt-1 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievements.length > 0 && (
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">Key Achievements</p>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="text-sm text-gray-600 flex gap-2">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exp.award && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-700">
                      <FiAward size={12} />
                      {exp.award}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
