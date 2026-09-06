# Fredi Irawan — Developer Portfolio

A modern, bilingual developer portfolio for Fredi Irawan. It presents selected work across web, mobile, GIS, computer vision, data, and interactive technology in a fast static site.

## ✨ Features

- React, TypeScript, Vite, and Tailwind CSS
- Responsive navigation and layouts from 320px to large desktops
- Dark and light themes with persistent preference
- English (default) and Bahasa Indonesia localization
- Filterable project collection with accessible detail dialogs
- Semantic HTML, keyboard navigation, focus states, and reduced-motion support
- SEO metadata, Open Graph tags, sitemap, robots file, and favicon
- Automated GitHub Pages deployment

## 🛠️ Tech Stack

- **UI:** React 19, TypeScript, Tailwind CSS 4, Lucide React
- **Build:** Vite 7
- **Quality:** ESLint, Prettier, strict TypeScript
- **Hosting:** GitHub Pages through GitHub Actions

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/        # Navbar and footer
│   ├── projects/      # Project cards and accessible dialog
│   ├── sections/      # Portfolio page sections
│   └── ui/            # Shared headings and reveal behavior
├── data/              # Projects, skills, experience, and education
├── hooks/             # Language and theme state
├── locales/           # English and Indonesian translations
├── styles/            # Tailwind import and design system
├── types/             # Shared TypeScript types
├── App.tsx
└── main.tsx
public/
├── images/            # Profile image
└── projects/          # Lightweight project preview assets
```

## 🚀 Getting Started

Node.js 20 or newer is recommended.

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## 🏗️ Production Build

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

The optimized static output is written to `dist/`.

## 🌐 Deployment

The workflow at `.github/workflows/deploy.yml` validates and deploys `dist/` whenever `main` is pushed. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The Vite base path is derived from `GITHUB_REPOSITORY` during Actions builds, so project pages work after a repository rename—including `fredi-irawan-dev-portfolio`. Local builds use `/`. For a username site such as `Freddy47588.github.io`, the same dynamic configuration resolves to `/<repository>/`; change `base` in `vite.config.ts` to `/` for that special case.

Canonical, Open Graph, robots, and sitemap URLs currently point to the existing `fredi-irawan-portfolio` GitHub Pages address. Update these files if the repository or production domain changes:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## 🌍 Languages

- **English** — default
- **Bahasa Indonesia** — selectable from the navigation bar

The selected language is applied instantly and persisted in `localStorage`. Translation copy lives in `src/locales/`.

## 📸 Screenshots

Add final desktop and mobile captures here after the production deployment. The project cards currently use custom lightweight placeholders rather than unrelated stock photography.

## Manual Content Updates

- Replace placeholder project previews in `public/projects/` with optimized real screenshots.
- Add a CV PDF and enable a download action when the final document is available.
- Add Fredi’s verified LinkedIn URL in the contact section.
- Add verified internship/employer names and dates to `src/data/experience.ts`.
- Add live demo URLs to `src/data/projects.ts` only when they are publicly available.

## 📄 License

Released under the [MIT License](LICENSE).
