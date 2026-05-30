"use client"
import { motion } from "framer-motion"
import { tools } from "@/lib/data"

const categories = [
  { label: "WealthTech & Investments", items: ["US Stocks Platform", "Cross-border Remittances", "SIP Products", "Brokerage APIs", "KYC/AML Compliance"] },
  { label: "Payments & Devices", items: ["POS Lifecycle Management", "UPI Payments", "Payment Timelines", "Device Monetization", "Logistics Optimization"] },
  { label: "Product Management", items: ["0→1 Product Building", "Roadmap Planning", "A/B Testing", "GTM Strategy", "Agile/Scrum", "OKRs"] },
  { label: "Analytics & Tools", items: tools },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">Skills & Tools</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">{cat.label}</h3>
              <motion.div className="flex flex-wrap gap-2" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {cat.items.map((skill) => (
                  <motion.span key={skill} variants={item} className="px-3 py-1 bg-white text-indigo-700 text-sm rounded-full border border-indigo-100 font-medium shadow-sm">
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
