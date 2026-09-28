# Static Site

Production-ready React static site built with Vite, TypeScript, and Sass.

## Stack

- **Vite + React + TypeScript** — fast dev server, optimized static build
- **Sass (SCSS)** — `src/styles/` holds shared variables and global styles
- **ESLint** — configured via `eslint.config.js`
- **GitHub Actions** — builds and deploys `dist/` to GitHub Pages on every push to `main`

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run lint      # lint the project
npm run build     # type-check and build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  assets/          static assets bundled by Vite
  styles/
    _variables.scss  shared SCSS variables + CSS custom properties (theme colors)
    global.scss       global resets and base styles, imported once in main.tsx
  App.tsx / App.scss
  main.tsx
public/            files copied to dist/ as-is
```

## Deployment (GitHub Pages)

The workflow at `.github/workflows/deploy.yml` builds the site and deploys `dist/`
to GitHub Pages whenever you push to `main`.

One-time setup after pushing this repo to GitHub:

1. In the repo settings, go to **Pages** and set the source to **GitHub Actions**.
2. Push to `main` — the workflow builds with `--base=/<repo-name>/` (matched
   automatically to your GitHub repository name) and deploys.
3. Your site will be available at `https://<user-or-org>.github.io/<repo-name>/`.

If you deploy to a custom domain or a user/org page (`<user>.github.io`) instead
of a project page, remove the `--base=/${{ github.event.repository.name }}/`
override in the workflow's build step so the site builds with base `/`.

## Node version

This project was scaffolded and tested against Node 18. `npm audit` may flag a
moderate-severity advisory in `esbuild`/`vite@5` that only affects the local dev
server (not the production build). Upgrading to Node 20+ and running
`npm audit fix --force` to move to Vite 6+ resolves it once your environment
supports it.
