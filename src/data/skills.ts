import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: { en: 'Frontend', id: 'Frontend' },
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Vite'],
  },
  { title: { en: 'Mobile', id: 'Mobile' }, skills: ['Flutter', 'Dart', 'Material 3'] },
  { title: { en: 'Backend', id: 'Backend' }, skills: ['Django', 'Python', 'FastAPI', 'REST API'] },
  {
    title: { en: 'Data & AI', id: 'Data & AI' },
    skills: ['Computer Vision', 'YOLO', 'D-FINE', 'ARIMA', 'Google Colab'],
  },
  {
    title: { en: 'Database & Cloud', id: 'Database & Cloud' },
    skills: ['Firebase', 'Firestore', 'Supabase', 'SQLite'],
  },
  {
    title: { en: 'GIS & Tools', id: 'GIS & Alat' },
    skills: ['QGIS', 'Web GIS', 'Leaflet', 'Git', 'GitHub', 'VS Code'],
  },
];
