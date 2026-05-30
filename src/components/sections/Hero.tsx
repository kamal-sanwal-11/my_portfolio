"use client"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { FiArrowDown, FiLinkedin, FiGithub, FiMail } from "react-icons/fi"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4 pt-16">
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome
        </motion.p>
        <motion.h1
          className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl font-medium text-indigo-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {personalInfo.title}
        </motion.p>
        <motion.p
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {personalInfo.tagline}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            Get in Touch
          </a>
          <a href="#experience" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
            View Experience
          </a>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <FiLinkedin size={22} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <FiGithub size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-indigo-600 transition-colors">
            <FiMail size={22} />
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-10 text-gray-300 hover:text-indigo-600 transition-colors animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <FiArrowDown size={24} />
      </motion.a>
    </section>
  )
}
