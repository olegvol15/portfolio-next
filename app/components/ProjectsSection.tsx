import Link from "next/link"
import { projects } from "@/app/data/projects"
import ProjectCard from "@/app/components/ProjectCard"

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
              A selection of projects that show how I learn, experiment and apply frontend skills in real products.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Updated as I ship new things</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}





