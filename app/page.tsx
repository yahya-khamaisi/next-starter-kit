const stack = [
  {
    title: "Next.js 16",
    description: "App Router, Turbopack, and Fluid Compute-ready out of the box.",
  },
  {
    title: "React 19",
    description: "Server Components by default with the latest React features.",
  },
  {
    title: "TypeScript",
    description: "Strict mode enabled — catch mistakes before they ship.",
  },
  {
    title: "Tailwind CSS 4",
    description: "CSS-first configuration via @theme, zero config file needed.",
  },
  {
    title: "ESLint",
    description: "Flat config with Next.js recommended rules pre-wired.",
  },
  {
    title: "Ready to deploy",
    description: "Push to Vercel and go live in minutes, zero extra setup.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-neutral-950 dark:to-black">
      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          Personal starter template
        </span>

        <h1 className="mt-6 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-neutral-400 sm:text-6xl">
          Next Starter Kit
        </h1>

        <p className="mt-5 max-w-xl text-balance text-base text-slate-600 dark:text-neutral-400 sm:text-lg">
          A clean, modern baseline for new projects: Next.js 16, React 19,
          TypeScript, and Tailwind CSS 4 — pre-configured so you can start
          building instead of setting up.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/yahya-khamaisi/next-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-neutral-200"
          >
            View on GitHub
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            Next.js Docs
          </a>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {stack.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <footer className="mt-16 text-xs text-slate-400 dark:text-neutral-600">
          Built by{" "}
          <a
            href="https://github.com/yahya-khamaisi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2 hover:text-slate-600 dark:hover:text-neutral-400"
          >
            Yahya Khamaisi
          </a>
        </footer>
      </main>
    </div>
  );
}
