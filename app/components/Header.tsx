"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClasses = [
    "sticky top-0 z-30 border-b border-slate-800/60",
    "bg-slate-950/70 backdrop-blur-md",
    "transition-all",
    isScrolled ? "shadow-md shadow-slate-950/80" : "",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-3 md:py-4">
        {/* Left spacer to visually center nav on desktop */}
        <div className="w-9 md:w-0" />

        {/* Centered desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative inline-flex items-center text-[13px] font-medium text-slate-300 transition-colors hover:text-slate-50"
            >
              <span>{link.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-sky-400 to-violet-400 opacity-0 transition-transform transition-opacity duration-200 group-hover:scale-x-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700/70 bg-slate-900/80 text-slate-100 shadow-sm shadow-black/40 outline-none ring-sky-500/70 transition hover:border-slate-500 md:hidden focus-visible:ring-2"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={
                "h-0.5 w-4 rounded-full bg-slate-100 transition-transform duration-200" +
                (isOpen ? " translate-y-1.5 rotate-45" : "")
              }
            />
            <span
              className={
                "h-0.5 w-4 rounded-full bg-slate-100 transition-opacity duration-150" +
                (isOpen ? " opacity-0" : "")
              }
            />
            <span
              className={
                "h-0.5 w-4 rounded-full bg-slate-100 transition-transform duration-200" +
                (isOpen ? " -translate-y-1.5 -rotate-45" : "")
              }
            />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 text-sm text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-[13px] font-medium hover:bg-slate-900/80"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}



