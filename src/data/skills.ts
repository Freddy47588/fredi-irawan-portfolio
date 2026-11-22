import type { SkillGroup } from '../types';

// Skill proficiency is intentionally not scored; this list reflects used and studied tools.
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: { en: 'Frontend & Web', id: 'Frontend & Web' },
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 Canvas',
      'Web Audio API',
      'CSS3',
    ],
  },
  {
    id: 'mobile',
    title: { en: 'Mobile', id: 'Mobile' },
    skills: ['Flutter', 'Dart', 'Riverpod', 'Google Maps SDK'],
  },
  {
    id: 'backend',
    title: { en: 'Backend & APIs', id: 'Backend & API' },
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'FastAPI',
      'PHP',
      'Laravel',
      'OpenAPI / Swagger',
    ],
  },
  {
    id: 'data-ai',
    title: { en: 'Data & AI', id: 'Data & AI' },
    skills: ['Data Analytics', 'Computer Vision', 'YOLO11s', 'D-FINE', 'ARIMA', 'CSV Processing'],
  },
  {
    id: 'gis',
    title: { en: 'GIS & Spatial', id: 'GIS & Spasial' },
    skills: ['QGIS', 'Leaflet', 'qgis2web', 'Web GIS', 'Topographic Modeling'],
  },
  {
    id: 'database-cloud',
    title: { en: 'Database & Cloud', id: 'Database & Cloud' },
    skills: [
      'Supabase',
      'PostgreSQL',
      'Prisma',
      'Firebase Auth',
      'Cloud Firestore',
      'Redis / BullMQ',
      'SQLite',
    ],
  },
  {
    id: 'tools',
    title: { en: 'Testing & Tooling', id: 'Pengujian & Perangkat' },
    skills: [
      'Git',
      'GitHub Actions',
      'Vitest',
      'Playwright',
      'Vite',
      'Cloudflare Pages',
      'Google Colab',
    ],
  },
];
