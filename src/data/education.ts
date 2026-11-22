import type { Education } from '../types';

// Add education history here. Omit dates that have not been verified.
export const education: Education[] = [
  {
    id: 'asia-malang',
    institution: 'Institut Teknologi dan Bisnis Asia Malang',
    level: { en: "Bachelor's Degree", id: 'Strata 1 (S1)' },
    program: { en: "Bachelor's Degree in Informatics", id: 'S1 Teknik Informatika' },
    period: { en: '2023 – Present', id: '2023 – Sekarang' },
    status: { en: 'Present / In Progress', id: 'Sedang Ditempuh' },
    description: {
      en: "Currently pursuing a Bachelor's degree in Informatics with a focus on software engineering, data-driven applications, and computer vision.",
      id: 'Saat ini menempuh pendidikan S1 Teknik Informatika dengan fokus pada rekayasa perangkat lunak, aplikasi berbasis data, dan computer vision.',
    },
    learningAreas: [
      { en: 'Software engineering', id: 'Rekayasa perangkat lunak' },
      { en: 'Computer vision', id: 'Computer vision' },
      { en: 'Web & mobile systems', id: 'Sistem web & mobile' },
      { en: 'Data analytics & modeling', id: 'Analitik & pemodelan data' },
    ],
    featured: true,
  },
  {
    id: 'smkn-11',
    institution: 'SMK Negeri 11 Malang',
    level: { en: 'Vocational High School', id: 'Sekolah Menengah Kejuruan' },
    program: {
      en: 'Computer and Network Engineering',
      id: 'Teknik Komputer dan Jaringan (TKJ)',
    },
    description: {
      en: 'Built a technical foundation through vocational study and industry-linked learning.',
      id: 'Membangun fondasi teknis melalui pendidikan kejuruan dan pembelajaran yang terhubung dengan industri.',
    },
    learningAreas: [
      { en: 'Networking fundamentals', id: 'Dasar jaringan komputer' },
      { en: 'Computer systems', id: 'Sistem komputer' },
      { en: 'Programming fundamentals', id: 'Dasar pemrograman' },
      { en: 'Web development', id: 'Pengembangan web' },
    ],
    featured: true,
  },
];
