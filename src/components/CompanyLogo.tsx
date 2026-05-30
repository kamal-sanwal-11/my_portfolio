"use client"
import { useState } from "react"
import Image from "next/image"

interface CompanyLogoProps {
  src: string
  name: string
  className?: string
}

function initials(name: string): string {
  return name
    .split(/[\s\-–(]/)[0]
    .slice(0, 2)
    .toUpperCase()
}

export default function CompanyLogo({ src, name, className = "" }: CompanyLogoProps) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <span
        className={`inline-flex items-center justify-center h-7 w-7 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold shrink-0 ${className}`}
        aria-label={name}
      >
        {initials(name)}
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center justify-center h-7 px-1.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 ${className}`}
    >
      <Image
        src={src}
        alt={name}
        width={80}
        height={28}
        className="h-full w-auto max-w-[80px] object-contain"
        onError={() => setError(true)}
      />
    </span>
  )
}
