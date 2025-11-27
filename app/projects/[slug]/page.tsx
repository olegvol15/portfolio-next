import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/app/data/projects"
import ProjectStoryTabs from "@/app/components/ProjectStoryTabs"

type PageParams = {
  slug: string
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[-200px] top-0 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[150px]" />
        <div className="absolute right-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[400px] w-[800px] rounded-full bg-sky-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 pb-20">
        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to projects
        </Link>

        {/* Hero section */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role}</span>
            <span>•</span>
            <span className="capitalize">{project.type} Project</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-6">
            {project.description}
          </p>

          {/* Tags and status */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              {project.status === "in-progress" && (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                  </span>
                  In Progress
                </>
              )}
              {project.status === "done" && (
                <>
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Completed
                </>
              )}
              {project.status === "idea" && (
                <>
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Planning
                </>
              )}
            </span>

            {project.stack.slice(0, 4).map(tech => (
              <span
                key={tech}
                className="rounded-full bg-slate-900/60 border border-slate-800 px-4 py-2 text-sm text-slate-300 hover:border-sky-500/50 transition"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="text-sm text-slate-500">
                +{project.stack.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex gap-3 mt-6">
              {project.links.map(link => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                    link.type === 'demo'
                      ? 'bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-lg shadow-sky-500/25'
                      : 'border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-sky-500/60 hover:bg-slate-900'
                  }`}
                >
                  {link.type === 'github' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {link.type === 'demo' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <ProjectStoryTabs project={project} />
          </div>

          {/* Right sidebar - Sticky */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Tech Stack */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            {project.learnings && project.learnings.length > 0 && (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  What I Learned
                </h3>
                <ul className="space-y-3">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-sky-400 mt-0.5 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Project Info */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Project Info
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-slate-500 text-xs mb-1">Timeline</div>
                  <div className="text-slate-200">{project.year}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-1">Role</div>
                  <div className="text-slate-200">{project.role}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-xs mb-1">Type</div>
                  <div className="text-slate-200 capitalize">{project.type}</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-purple-500/10 backdrop-blur p-5">
              <h3 className="text-sm font-semibold text-slate-100 mb-2">
                Interested in this project?
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Feel free to reach out if you'd like to discuss the technical details or see more examples.
              </p>
              <a
                href="/#contact"
                className="block w-full text-center rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition"
              >
                Get in touch
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}


