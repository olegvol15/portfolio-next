"use client"

import { useState } from "react"
import type { Project } from "@/app/data/projects"

type TabId =
  | "overview"
  | "challenge"
  | "solution"
  | "highlights"
  | "technical"
  | "impact"
  | "future"

type Props = {
  project: Project
}

export default function ProjectStoryTabs({ project }: Props) {
  const tabs: { id: TabId; label: string; visible: boolean }[] = [
    { id: "overview", label: "Overview", visible: Boolean(project.content) },
    { id: "challenge", label: "Challenge", visible: Boolean(project.challenge) },
    { id: "solution", label: "Solution", visible: Boolean(project.solution) },
    {
      id: "highlights",
      label: "Highlights",
      visible: Boolean(project.highlights && project.highlights.length > 0),
    },
    {
      id: "technical",
      label: "Technical",
      visible: Boolean(project.technical && project.technical.length > 0),
    },
    {
      id: "impact",
      label: "Impact",
      visible: Boolean(project.impact && project.impact.length > 0),
    },
    {
      id: "future",
      label: "Future",
      visible: Boolean(
        project.futureImprovements && project.futureImprovements.length > 0
      ),
    },
  ]

  const visibleTabs = tabs.filter((t) => t.visible)
  const [active, setActive] = useState<TabId>(
    visibleTabs[0]?.id ?? "overview"
  )

  const renderContent = () => {
    if (active === "overview" && project.content) {
      return (
        <div className="prose prose-invert prose-sm max-w-none leading-relaxed text-slate-300 whitespace-pre-wrap">
          {project.content}
        </div>
      )
    }

    if (active === "challenge" && project.challenge) {
      return (
        <p className="text-slate-300 leading-relaxed">
          {project.challenge}
        </p>
      )
    }

    if (active === "solution" && project.solution) {
      return (
        <p className="text-slate-300 leading-relaxed">
          {project.solution}
        </p>
      )
    }

    if (active === "highlights" && project.highlights) {
      return (
        <ul className="space-y-3">
          {project.highlights.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-300">
              <span className="text-sky-400 mt-1 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }

    if (active === "technical" && project.technical) {
      return (
        <div className="space-y-4">
          {project.technical.map((section, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur p-5"
            >
              <h3 className="text-base font-semibold mb-2 text-sky-400">
                {section.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      )
    }

    if (active === "impact" && project.impact) {
      return (
        <div className="grid sm:grid-cols-2 gap-4">
          {project.impact.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <p className="text-sm text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      )
    }

    if (active === "future" && project.futureImprovements) {
      return (
        <ul className="space-y-2">
          {project.futureImprovements.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-300">
              <span className="text-slate-500 mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }

    return null
  }

  if (visibleTabs.length === 0) return null

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
          Project story
        </h2>
        <span className="text-[11px] text-slate-500">
          Click tabs to explore details
        </span>
      </div>

      <div className="relative mb-5 overflow-x-auto">
        <div className="flex gap-2 text-xs sm:text-sm">
          {visibleTabs.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition text-xs sm:text-sm ${
                  isActive
                    ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30"
                    : "bg-slate-900 text-slate-300 border border-slate-700 hover:border-sky-500/60 hover:text-slate-100"
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
        {renderContent()}
      </div>
    </section>
  )
}

