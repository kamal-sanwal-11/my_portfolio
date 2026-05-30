"use client"
import { motion } from "framer-motion"
import { Mail, FileDown, ExternalLink, Code2 } from "lucide-react"

const links = [
  {
    label: "Email",
    sub: "kmlsnwl@gmail.com",
    href: "mailto:kmlsnwl@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    label: "LinkedIn",
    sub: "Message me",
    href: "https://linkedin.com/in/kamalsanwal",
    icon: ExternalLink,
    primary: true,
  },
  {
    label: "Résumé",
    sub: "Download PDF",
    href: "/resume.pdf",
    icon: FileDown,
    primary: true,
    download: true,
  },
  {
    label: "GitHub",
    sub: "kamal-sanwal-11",
    href: "https://github.com/kamal-sanwal-11",
    icon: Code2,
    primary: false,
  },
]

export default function GetInTouch() {
  return (
    <section id="connect" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          {links.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                {...(link.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.07 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  link.primary
                    ? "border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-500 hover:shadow-sm text-slate-900 dark:text-slate-100"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 text-slate-600 dark:text-slate-400"
                }`}
              >
                <Icon size={20} className={link.primary ? "text-indigo-600 dark:text-indigo-400" : "text-slate-500 dark:text-slate-500"} />
                <div className="text-left">
                  <p className="font-semibold text-sm">{link.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{link.sub}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
