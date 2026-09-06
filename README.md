# Fredi Irawan — Developer Portfolio

A production-ready bilingual portfolio for Fredi Irawan, an Informatics student and software developer in Malang, East Java, Indonesia. The site presents verified education, training, internships, credentials, and selected projects across web, mobile, GIS, data analytics, computer vision, and augmented reality.

## ✨ Features

- Responsive, recruiter-friendly single-page portfolio
- English default with instant Bahasa Indonesia localization
- Persistent dark/light theme and language preferences
- Data-driven projects, skills, experience, education, training, and certificates
- Category-based project filters and compact project archive
- Accessible project detail dialogs, semantic structure, focus states, and reduced-motion support
- Static SEO metadata, Open Graph, sitemap, robots file, and favicon
- Automated GitHub Pages validation and deployment

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
├── certificates/      # Optional credential previews
├── images/            # Profile image
└── projects/          # Optimized project previews
```

Personal links and public profile details are centralized in `src/data/profile.ts`. UI components consume typed data and do not contain project, education, internship, skill, or credential records.

## 🌍 Localization

English is the default language. Bahasa Indonesia is available through the visible `EN / ID` switcher, updates immediately without a reload, and persists in `localStorage`.

- UI translations: `src/locales/en.ts` and `src/locales/id.ts`
- Bilingual content: localized fields inside each `src/data/*.ts` record
- Language state: `src/hooks/useLanguage.tsx`

## 🧑‍💻 Adding Projects

1. Add an optimized screenshot to `public/projects/` (optional).
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

Certificates without images receive a lightweight placeholder, so PDF files are never required in the initial page load.

## 🚀 Local Development

Node.js 22 or newer is recommended.

```bash
npm install
npm run dev
```

## 🏗 Production Build

```bash
npm run lint
npm run typecheck
npm run build
```

The optimized static output is written to `dist/`.

## 🌐 Deployment

`.github/workflows/deploy.yml` runs install, lint, typecheck, and build checks before deploying `dist/` to GitHub Pages. The Vite base path is derived from `GITHUB_REPOSITORY` in GitHub Actions, so repository project pages work without hardcoding the folder name.

In GitHub repository settings, select **Pages → Build and deployment → Source → GitHub Actions**.

If the repository or production domain changes, also update canonical and social metadata in:

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`

## 📄 License

Released under the [MIT License](LICENSE).
