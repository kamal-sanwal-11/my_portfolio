"use client"
import { motion } from "framer-motion"
import { personalInfo, aboutText, competencies } from "@/lib/data"
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Who I Am</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-1 flex flex-col items-center md:items-start gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-40 h-40 rounded-2xl bg-indigo-100 flex items-center justify-center text-5xl font-bold text-indigo-600 ring-4 ring-indigo-200">
              KS
            </div>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2"><FiMapPin className="text-indigo-600" />{personalInfo.location}</div>
              <div className="flex items-center gap-2"><FiMail className="text-indigo-600" />{personalInfo.email}</div>
              <div className="flex items-center gap-2"><FiPhone className="text-indigo-600" />{personalInfo.phone}</div>
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {aboutText.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
            ))}
            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-900 mb-3">Core Competencies</p>
              <div className="flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span key={c} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full font-medium">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
