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
      en: "Currently pursuing a Bachelor's degree in Informatics.",
      id: 'Saat ini masih menempuh pendidikan S1 Teknik Informatika.',
    },
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
  {
    id: 'smpn-15',
    institution: 'SMP Negeri 15 Malang',
    level: { en: 'Junior High School', id: 'Sekolah Menengah Pertama' },
    description: {
      en: 'General secondary education in Malang.',
      id: 'Pendidikan menengah pertama di Malang.',
    },
    featured: false,
  },
  {
    id: 'sdn-2-kalisongo',
    institution: 'SD Negeri 2 Kalisongo Malang',
    level: { en: 'Elementary School', id: 'Sekolah Dasar' },
    description: {
      en: 'Primary education in Malang.',
      id: 'Pendidikan dasar di Malang.',
    },
    featured: false,
  },
];
