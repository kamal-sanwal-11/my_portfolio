"use client"
import { motion } from "framer-motion"
import { education } from "@/lib/data"
import { FiBook } from "react-icons/fi"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Education</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-100 flex items-center justify-center">
                <FiBook className="text-indigo-600" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-indigo-600 text-sm font-medium mt-0.5">{edu.field}</p>
                <p className="text-gray-500 text-sm mt-1">{edu.institution}</p>
                <p className="text-gray-400 text-xs mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
