# whoami — Developer Portfolio

Personal portfolio of **Pratik Karbhari Late**, Backend Developer at Magma Infotech.
Built with a terminal-inspired dark aesthetic using Next.js (App Router), React 19, and Tailwind CSS v4.

> **Content-driven by design** — all profile, experience, and project data lives in
> Git-tracked JSON files under `content/`. No database or CMS required: edit a JSON
> file, commit, and the site updates.

---

## Sections & Data Sources

| Section | Source |
|---|---|
| **Hero** | `content/profile.json` (name, title, bio, social links, resume) |
| **About** | `content/profile.json` (bio + location) |
| **Skills** | Static `components/Skills.tsx` |
| **Projects** | `content/projects.json` (mapped with `techStack`, `githubUrl`, `liveUrl`) |
| **Experience** | `content/experience.json` (work timeline + education) |
| **Contact** | `components/Contact.tsx` — footer name from `content/profile.json` |

---

## Tech Stack

- **Framework** — Next.js 16 (App Router, Server Components, React 19)
- **Language** — TypeScript (strict mode)
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Fonts** — Inter (UI) + JetBrains Mono (terminal accents)
- **Content** — Local JSON in `content/`, read server-side via Node `fs`

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
whoami/
├── app/
│   ├── layout.tsx       # Root layout — metadata derived from content/profile.json
│   ├── page.tsx         # Server Component: loads content, composes sections
│   └── globals.css      # Tailwind imports, theme variables
├── components/          # Client Components (framer-motion), data passed via props
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── content/             # Git-based data source — edit these to update the site
│   ├── profile.json
│   ├── experience.json
│   └── projects.json
├── types/               # TypeScript interfaces mirroring each content/*.json
│   ├── profile.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── index.ts
├── lib/
│   └── content.ts       # Server-only helpers reading content/ via Node fs
└── public/
    └── resume.pdf       # Served at /resume.pdf (Hero "View Resume" button)
```

---

## How the content layer works

1. **Data lives in Git** — `content/*.json` is committed like source code, so you get
   version history, reviews, and rollbacks for free.
2. **Typed** — `types/` defines interfaces (`Profile`, `Project`, `Experience`, …) that
   mirror the JSON, so the compiler catches missing/renamed fields.
3. **Read on the server** — `lib/content.ts` uses Node's `fs` to read the files inside
   `process.cwd()/content`. The page is statically prerendered at build time, so reads
   happen once on the server and the HTML is served instantly.
4. **`server-only` guard** — the helpers can't accidentally be bundled into client code.

To add a project, append an object to `content/projects.json`. To change the headline,
edit `content/profile.json`. No database migrations, no CMS.

---

## Updating your resume

Replace `public/resume.pdf` with your latest PDF. Keep the filename `resume.pdf` so the
Hero "View Resume" button keeps working at `/resume.pdf`.

---

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npm run build
```

Push to GitHub and import the repo on Vercel — zero config needed for Next.js. The
`content/` folder is committed to the repo, so it's present at build time.

