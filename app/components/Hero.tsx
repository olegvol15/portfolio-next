import Link from "next/link";

type HeroProps = {
  name: string;
  role: string;
  intro: string;
  learning: string[];
};

export default function Hero({ name, role, intro, learning }: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-120px] h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:py-20 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for frontend internships / junior roles
          </p>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
            <p className="mt-3 text-sm font-medium text-sky-300/90 sm:text-base">
              {role}
            </p>
          </div>

          <p className="max-w-xl text-sm text-slate-300 sm:text-[15px]">
            {intro}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-500/60 hover:bg-slate-900"
            >
              Contact me
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-400">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-slate-500">
                Focus
              </span>
              <span>Frontend · React · Next.js</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-wide text-slate-500">
                Location
              </span>
              <span>Europe · Remote friendly</span>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:max-w-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_0_50px_rgba(15,23,42,0.9)] backdrop-blur">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Currently learning
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] text-slate-200"
                >
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  Goal for this year
                </p>
                <p className="mt-1 text-[13px] font-medium">
                  Get my first frontend job
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  Main stack
                </p>
                <p className="mt-1 text-[13px] font-medium">
                  React · Next.js · TypeScript
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
              I&apos;m building this portfolio project in public as I learn. You
              can scroll down to see my skills and projects evolve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

