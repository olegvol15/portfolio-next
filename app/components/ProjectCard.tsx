import type { Project } from "@/app/data/projects"

type ProjectCardProps = {
  project: Project
}

const statusLabel: Record<Project["status"], string> = {
  idea: "Idea",
  "in-progress": "In progress",
  done: "Done"
}

const statusColor: Record<Project["status"], string> = {
  idea: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "in-progress": "bg-sky-500/10 text-sky-300 border-sky-500/40",
  done: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40"
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, stack, status } = project

  return (
    <div className="relative flex h-full flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_0_1px_rgba(15,23,42,0.8)] backdrop-blur transition group-hover:border-sky-500/80 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
          <p className="text-xs text-slate-300 line-clamp-3">{description}</p>
        </div>
        <span
          className={`inline-flex items-center w-fit rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusColor[status]}`}
        >
          <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current " />
          {statusLabel[status]}
        </span>
      </div>

      <div className="mt-1 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-1 text-[11px] text-slate-400">
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Case study
        </span>
        <span className="inline-flex items-center gap-1 text-sky-300 group-hover:translate-x-0.5 group-hover:text-sky-200 transition">
          View details
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3 w-3"
          >
            <path
              d="M4 8h7M8 4l3 4-3 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}
