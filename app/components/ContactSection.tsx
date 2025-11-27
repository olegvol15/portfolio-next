type ContactSectionProps = {
  email: string
  telegram?: string
  github?: string
}

export default function ContactSection({
  email,
  telegram,
  github,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950/90 py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-400">
              Get in touch
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Let&apos;s work together
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              If you&apos;d like to talk about a project, internship or junior
              frontend role, feel free to reach out. I usually respond within a
              day.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            I prefer async messages over calls.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          {/* Direct contacts */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="text-sm font-medium text-slate-50">
              Direct contacts
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              The best places to reach me.
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm transition hover:border-sky-500/70 hover:bg-slate-950"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-[11px] text-sky-300">
                    @
                  </span>
                  <span>Email</span>
                </div>
                <span className="truncate text-xs text-slate-400">
                  {email}
                </span>
              </a>

              {telegram && (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm transition hover:border-sky-500/70 hover:bg-slate-950"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-[11px] text-sky-300">
                      TG
                    </span>
                    <span>Telegram</span>
                  </div>
                  <span className="truncate text-xs text-slate-400">
                    {telegram.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              )}

              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm transition hover:border-sky-500/70 hover:bg-slate-950"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-[11px] text-sky-300">
                      GH
                    </span>
                    <span>GitHub</span>
                  </div>
                  <span className="truncate text-xs text-slate-400">
                    {github.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="text-sm font-medium text-slate-50">Quick message</h3>
            <p className="mt-2 text-xs text-slate-400">
              This is a static form for now. Later we can connect it to an API
              or email service.
            </p>

            <form className="mt-4 space-y-3">
              <div className="space-y-1">
                <label
                  htmlFor="contact-name"
                  className="text-xs text-slate-400"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500/70"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-email"
                  className="text-xs text-slate-400"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500/70"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="text-xs text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-sky-500/70"
                  placeholder="Tell me a bit about what you need…"
                />
              </div>

              <button
                type="button"
                aria-disabled="true"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-700/70 px-5 py-2 text-sm font-medium text-slate-400 shadow-sm shadow-slate-950/70 outline-none transition hover:bg-slate-700/90"
              >
                Send (coming soon)
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


