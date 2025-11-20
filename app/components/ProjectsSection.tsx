import Link from "next/link"
import { projects } from "@/app/data/projects"

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 bg-slate-950/90 py-14"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Projects
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              A selection of projects that show how I learn and apply frontend
              skills.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Updated as I learn</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur transition hover:border-sky-500/70 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>

                <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[11px] text-slate-300">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-xs text-slate-300">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}



