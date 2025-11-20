export type Project = {
  title: string;
  description: string;
  stack: string[];
  status: "idea" | "in-progress" | "done";
}

type ProjectCardProps = {
  project: Project;
}

export default function ProjectCard({project} : ProjectCardProps) {
  const {title, description, stack, status} = project;

  const statusLabel: Record<Project["status"], string> = {
    idea: "Idea",
    "in-progress": "In Progress",
    done: "Done"
  };

  return (
    <div className="border border-slate-800 rounded-2xl p-4 bg-slate-900/50 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200">
          {statusLabel[status]}
        </span>
      </div>

      <p className="text-sm text-slate-300">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-slate-800/80 text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}