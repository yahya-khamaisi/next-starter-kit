# Next Starter Kit

A clean, opinionated personal starter template for new projects — Next.js 16, React 19, TypeScript, and Tailwind CSS 4, pre-configured so you can start building instead of setting up.

## What's included

- **[Next.js 16](https://nextjs.org/)** — App Router with Turbopack for dev and build.
- **[React 19](https://react.dev/)** — Server Components by default.
- **[TypeScript](https://www.typescriptlang.org/)** — strict mode enabled.
- **[Tailwind CSS 4](https://tailwindcss.com/)** — CSS-first config via `@theme`, no `tailwind.config.js` needed.
- **[ESLint](https://eslint.org/)** — flat config with `eslint-config-next` rules.
- A minimal, custom landing page (not the default CRA-style boilerplate) so the repo looks intentional the moment you clone it.

## Using this template

Click **"Use this template"** on GitHub, or clone directly:

```bash
git clone https://github.com/yahya-khamaisi/next-starter-kit.git my-project
cd my-project
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it running.

## Scripts

```bash
npm run dev    # start the dev server (Turbopack)
npm run build  # production build
npm run start  # run the production build
npm run lint   # run ESLint
```

## Project structure

```
app/
├── layout.tsx     # root layout, fonts, metadata
├── page.tsx       # landing page
└── globals.css    # Tailwind entry + theme tokens
```

## Deploying

The fastest path is [Vercel](https://vercel.com/new): import the repo and it builds with zero configuration.
