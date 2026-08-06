# Ahsan Ahmed — Portfolio & Blog

My personal portfolio: a React + Vite site deployed for free on GitHub Pages via GitHub Actions,
covering my background as a Full-Stack Developer and Unity/AR-VR Specialist, and a built-in
markdown-powered blog.

Live site: **https://sam666-deb.github.io/Personal-Protfolio/**

## Tech stack

- React 19 + Vite 7
- Tailwind CSS v4 (with a class-based dark mode toggle)
- React Router (`HashRouter`, so it works on GitHub Pages with no server config)
- `marked` + `DOMPurify` to render blog posts written in Markdown
- EmailJS for the contact form
- GitHub Actions → GitHub Pages for hosting (free, zero servers to maintain)

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/     # Hero, About, Skills, Projects, Research, Experience, Education, Contact, Navigation
  pages/          # BlogList.jsx, BlogPost.jsx
  content/blog/   # blog posts, one Markdown file per post
  lib/blog.js     # loads + parses the Markdown files at build time
  hooks/useTheme.jsx   # light/dark theme context
```

## ✍️ Writing a new blog post

Blog posts are plain Markdown files in `src/content/blog/`. There's no CMS, database, or
external account involved — you write a file, commit it, and GitHub Actions rebuilds and
redeploys the whole site automatically on every push to `main`.

**1. Scaffold a new post:**

```bash
npm run new:post -- "My Post Title"
```

This creates `src/content/blog/my-post-title.md` pre-filled with frontmatter:

```markdown
---
title: "My Post Title"
date: "2026-08-06"
excerpt: "One or two sentences describing this post — shown on the blog list page."
tags: [tag1, tag2]
---

Start writing here. Standard Markdown is supported: **bold**, _italics_, [links](https://example.com),
lists, and code blocks.
```

You can also just create the `.md` file by hand — the frontmatter format above is all the
loader expects (`title`, `date`, `excerpt`, `tags` are recognized; anything else is ignored).

**2. Preview it:**

```bash
npm run dev
```

Go to `http://localhost:5173/#/blog` — new posts appear automatically, sorted by date. No
registration or manifest file to update.

**3. Publish it:**

```bash
git add src/content/blog/my-post-title.md
git commit -m "Add blog post: My Post Title"
git push
```

GitHub Actions picks up the push, runs `npm run build`, and deploys the result to GitHub
Pages — usually live within a minute or two. Check progress under the repo's **Actions** tab.

That's the entire publishing workflow: **write Markdown → push → live.** No hosting costs
beyond what you already have (GitHub Pages is free for public repos).

### Markdown tips for posts

- Internal links to specific portfolio sections (e.g. `#contact`) don't work reliably from
  inside post content because the site uses hash-based routing for the blog itself — link to
  external URLs freely, but for "get in touch" style calls to action, rely on the button
  already provided at the bottom of every post.
- Images: drop them in `public/` and reference them as `/your-image.png` (respecting the
  `base: '/Personal-Protfolio/'` path from `vite.config.js`), or link to an externally hosted
  image.

## Deployment

Deployment is handled by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every
push to `main` triggers a build and publish to GitHub Pages. No manual deploy step, no hosting
bill — this is the free tier working as intended.

If you ever want a custom domain (e.g. `ahsanahmed.dev`) instead of the `github.io` URL, GitHub
Pages supports that too: buy a domain from any registrar (~$10–15/year), add a `CNAME` file to
`public/`, and point the domain's DNS at GitHub Pages. Everything else about this setup stays
the same.

## Local email setup (contact form)

The contact form uses [EmailJS](https://www.emailjs.com/) directly from the browser — no backend
required for the deployed site. `server.js` in this repo is an optional local Node/Express +
Nodemailer alternative for local development; it's not used in the GitHub Pages deployment.
