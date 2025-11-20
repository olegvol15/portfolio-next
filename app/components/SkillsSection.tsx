type SkillLevel = "learning" | "beginner" | "intermediate" | "advanced";

export type Skill = {
  name: string;
  level: SkillLevel;
};

type SkillsSectionProps = {
  skills: Skill[];
};

const levelLabel: Record<SkillLevel, string> = {
  learning: "Learning",
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const levelBarWidth: Record<SkillLevel, string> = {
  learning: "w-1/4",
  beginner: "w-1/3",
  intermediate: "w-2/3",
  advanced: "w-5/6",
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-950/80 py-14"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Skills
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              A quick overview of the technologies I&apos;m working with and
              actively learning right now.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <span>Updated as I learn and build new projects.</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur transition hover:border-sky-500/70 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-medium text-slate-50">
                  {skill.name}
                </h3>

                <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-300">
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {levelLabel[skill.level]}
                </span>
              </div>

              <div className="mt-3 h-1.5 w-full rounded-full bg-slate-800/80">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-300 ${levelBarWidth[skill.level]}`}
                />
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                {skill.level === "learning" &&
                  "Currently exploring this technology and using it in practice projects."}
                {skill.level === "beginner" &&
                  "I know the basics and can use this in simple projects."}
                {skill.level === "intermediate" &&
                  "Comfortable using this in real projects and combining it with other tools."}
                {skill.level === "advanced" &&
                  "I can build complex features and feel very confident with this tech."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


