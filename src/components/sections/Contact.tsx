"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { FiMail, FiLinkedin, FiGithub, FiPhone } from "react-icons/fi"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            I&apos;m always open to discussing product opportunities, collaborations, or just a good conversation about fintech.
          </p>
        </motion.div>
        <motion.div
          className="max-w-lg mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-5">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-300 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <FiMail className="text-indigo-600 group-hover:text-white transition-colors" size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Email</p>
                <p className="text-gray-900 font-semibold text-sm">{personalInfo.email}</p>
              </div>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-300 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <FiPhone className="text-indigo-600 group-hover:text-white transition-colors" size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Phone</p>
                <p className="text-gray-900 font-semibold text-sm">{personalInfo.phone}</p>
              </div>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-300 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <FiLinkedin className="text-indigo-600 group-hover:text-white transition-colors" size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">LinkedIn</p>
                <p className="text-gray-900 font-semibold text-sm">linkedin.com/in/kamalsanwal</p>
              </div>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-300 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                <FiGithub className="text-indigo-600 group-hover:text-white transition-colors" size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">GitHub</p>
                <p className="text-gray-900 font-semibold text-sm">github.com/kamal-sanwal-11</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
