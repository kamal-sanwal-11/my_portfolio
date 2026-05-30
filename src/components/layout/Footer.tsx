import { personalInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  )
}
