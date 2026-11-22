# Fredi Irawan — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/▶%20LIVE%20DEMO-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://fredi-irawan-portfolio.pages.dev)

A production-ready bilingual portfolio for Fredi Irawan, an Informatics student and software developer in Malang, East Java, Indonesia. The site presents verified education, training, internships, credentials, and selected projects across web, mobile, GIS, data analytics, computer vision, and augmented reality.

## ✨ Features

- Responsive, recruiter-friendly single-page portfolio
- English default with instant Bahasa Indonesia localization
- Persistent dark/light theme and language preferences
- Data-driven projects, skills, experience, education, training, and certificates
- Category-based project filters and compact project archive
- Scroll-aware active navigation with an accessible location indicator
- Directional, one-time reveal animations with short card staggers
- Accessible project detail dialogs with backdrop/Escape closing and trigger focus restoration
- Direct bilingual CV download from the hero
- Reduced-motion support across reveal, hero, filter, dialog, and theme transitions
- Static SEO metadata, a 1200 × 630 social preview, sitemap, robots file, and favicon
- Production hosting on Cloudflare Pages with automated GitHub Actions CI/CD validation

## 🛠 Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide React
- ESLint and Prettier

## 📁 Architecture

```text
src/
├── components/
│   ├── layout/        # Navigation and footer
│   ├── projects/      # Project card and accessible detail dialog
│   ├── sections/      # Page sections
│   └── ui/            # Shared presentation primitives
├── data/              # All maintainable portfolio content
├── hooks/             # Language and theme state
├── locales/           # English and Indonesian UI copy
├── styles/            # Tailwind import and design system
├── types/             # Shared TypeScript contracts
├── App.tsx
└── main.tsx
public/
├── certificates/       # Optional credential previews
├── cv/                 # Public CV PDF
├── images/             # Profile image
├── projects/           # Optimized project previews
├── social-preview.svg  # Editable social preview source
└── social-preview.png  # Production social card (1200 × 630)
```

Personal links and public profile details are centralized in `src/data/profile.ts`. UI components consume typed data and do not contain project, education, internship, skill, or credential records.

## CV Download

The hero's bilingual **Download CV / Unduh CV** action downloads the configured PDF directly.

- Store the PDF in `public/cv/`.
- Configure its public path only through `cvUrl` in `src/data/profile.ts`; UI components do not hardcode the path.
- The hero resolves `cvUrl` through Vite's `BASE_URL`, so the download works on local static hosting and GitHub Pages repository paths.
- Leave `cvUrl` empty to hide the hero action gracefully.

The `linkedin` value in `src/data/profile.ts` follows the same conditional pattern: leave it empty to hide unavailable LinkedIn actions.

## Motion and Navigation

`Reveal` supports `direction` (`up`, `left`, `right`, or `scale`), `delay`, `duration`, and `className`. Section headings use directional reveals, while card groups use short 50–90 ms stagger increments. Each reveal runs once through `IntersectionObserver`; content stays visible when the API is unavailable. All motion is disabled by `prefers-reduced-motion: reduce`.

The navigation observes the page sections and applies an active underline plus `aria-current="location"`. Hash navigation remains native, with `scroll-padding-top` accounting for the fixed header.

## 🌍 Localization

English is the default language. Bahasa Indonesia is available through the visible `EN / ID` switcher, updates immediately without a reload, and persists in `localStorage`.

- UI translations: `src/locales/en.ts` and `src/locales/id.ts`
- Bilingual content: localized fields inside each `src/data/*.ts` record
- Language state: `src/hooks/useLanguage.tsx`

## 🧑‍💻 Adding Projects

1. Add a real, optimized project screenshot to `public/projects/` (optional). Prefer WebP or AVIF for smaller production payloads.
2. Add one typed project object to `src/data/projects.ts`.
3. Set `featured: true` for the main grid or `false` for the compact archive.
4. Add only verified `githubUrl` and `liveUrl` values.

The project filters, cards, archive, and detail dialog update automatically from metadata.

## 🎓 Adding Education

Add one object to `src/data/education.ts`. Dates are optional and should be omitted when they have not been verified. Use `featured: true` for technically relevant or current education.

## 🏆 Adding Certificates

1. Optionally add an optimized preview image to `public/certificates/`.
2. Add one object to `src/data/certificates.ts`.
3. Set the optional `image` to the filename only, for example `image: 'ai-900.webp'`.
4. Add a `credentialUrl` only when a public, verified link exists.

Certificates without images receive a credential fallback card showing their category, issuer, and year. A **View credential** action appears only when `credentialUrl` contains a verified public URL.

## Social Preview

`public/social-preview.svg` is the editable source and `public/social-preview.png` is the production Open Graph/Twitter image. Keep the PNG at exactly 1200 × 630, verify it is a real PNG after conversion, and update the absolute metadata URLs in `index.html` if the production domain or repository name changes.

## 🚀 Local Development

Node.js 22 or newer is recommended.

```bash
npm install
npm run dev
```

## 🏗 Production Build

```bash
npm ci
npm run format
npm run lint
npm run typecheck
npm run build
```

The optimized static output is written to `dist/`.

## 🌐 Deployment

The primary production site is deployed on **Cloudflare Pages** at [`https://fredi-irawan-portfolio.pages.dev`](https://fredi-irawan-portfolio.pages.dev) with build command `npm run build` and output directory `dist`.

`.github/workflows/deploy.yml` also runs install, lint, typecheck, and build verification on every push to `main` (and supports optional GitHub Pages deployment). The Vite base path automatically adapts when built inside GitHub Actions for repository pages.

If the production domain changes, update canonical and social metadata in:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## 📄 License

Released under the [MIT License](LICENSE).
