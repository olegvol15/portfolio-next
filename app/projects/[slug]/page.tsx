import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/app/data/projects"

type PageParams = {
  slug: string
}

export default async function ProjectPage({
  params
}: {
  params: Promise<PageParams>
}) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-200px] top-0 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute right-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-10">
        <Link
          href="/#projects"
          className="text-slate-400 text-sm hover:text-sky-400 transition"
        >
          ← Back to projects
        </Link>

        <header className="mt-8 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="text-slate-400 max-w-2xl">{project.description}</p>

          <div className="flex items-center gap-3 flex-wrap pt-2">
            <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
              {project.status === "idea" && "💡 Idea"}
              {project.status === "in-progress" && "🚧 In progress"}
              {project.status === "done" && "✅ Done"}
            </span>

            {project.stack.map(s => (
              <span
                key={s}
                className="rounded-full bg-slate-900/60 border border-slate-800 px-3 py-1 text-xs text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="prose prose-invert prose-sm max-w-none leading-relaxed text-slate-300 whitespace-pre-wrap">
            {project.content}
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 space-y-4">
            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Project snapshot
              </h2>
              <p className="mt-2">
                Status:{" "}
                <span className="text-sky-300">
                  {project.status === "idea" && "Planning and outlining"}
                  {project.status === "in-progress" && "Currently building"}
                  {project.status === "done" && "Completed"}
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Technologies
              </h2>
              <ul className="mt-2 space-y-1">
                {project.stack.map(s => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                What I am learning here
              </h2>
              <p className="mt-2 text-slate-400">
                For each project you can later add a short list of things you
                practised: state management, API calls, animations, database
                work and so on.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}


