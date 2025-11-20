type ContactSectionProps = {
  email: string
  telegram?: string
  github?: string
}

export default function ContactSection({
  email,
  telegram,
  github
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950/90 py-14"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Contact
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              If you&apos;d like to talk about a project, internship or junior
              frontend role, feel free to reach out.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Prefer async messages over calls.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="text-sm font-medium text-slate-50">
              Direct contacts
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 transition hover:border-sky-500/70 hover:bg-slate-950"
              >
                <span>Email</span>
                <span className="truncate text-slate-400">{email}</span>
              </a>

              {telegram && (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 transition hover:border-sky-500/70 hover:bg-slate-950"
                >
                  <span>Telegram</span>
                  <span className="truncate text-slate-400">
                    {telegram.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 transition hover:border-sky-500/70 hover:bg-slate-950"
                >
                  <span>GitHub</span>
                  <span className="truncate text-slate-400">
                    {github.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="text-sm font-medium text-slate-50">
              Quick message
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              This is a static form for now. Later we can connect it to an API
              or email service.
            </p>

            <form className="mt-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-500/70"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-500/70"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-500/70"
                  placeholder="Tell me a bit about what you need…"
                />
              </div>

              <button
                type="button"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Send (disabled for now)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

