import type { SkillGroup } from '../types';

// Skill proficiency is intentionally not scored; this list reflects used and studied tools.
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: { en: 'Frontend', id: 'Frontend' },
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  { id: 'mobile', title: { en: 'Mobile', id: 'Mobile' }, skills: ['Flutter', 'Dart'] },
  {
    id: 'backend',
    title: { en: 'Backend', id: 'Backend' },
    skills: ['Python', 'Django', 'PHP', 'Laravel', 'REST API fundamentals'],
  },
  {
    id: 'data-ai',
    title: { en: 'Data & AI', id: 'Data & AI' },
    skills: ['Data Analytics', 'Computer Vision', 'YOLO', 'D-FINE', 'ARIMA'],
  },
  { id: 'gis', title: { en: 'GIS', id: 'GIS' }, skills: ['QGIS', 'Web GIS'] },
  {
    id: 'database-cloud',
    title: { en: 'Database / Cloud', id: 'Database / Cloud' },
    skills: ['Firebase', 'Firestore', 'SQLite'],
  },
  {
    id: 'tools',
    title: { en: 'Tools', id: 'Perangkat' },
    skills: ['Git', 'GitHub', 'Vite', 'Google Colab', 'VS Code'],
  },
];
