import type { Experience } from '../types';

// Keep public dates and responsibilities factual; add new roles as single objects.
export const experiences: Experience[] = [
  {
    id: 'digtive-2026',
    company: 'PT Digtive Global Media',
    role: { en: 'IT / Web Development Intern', id: 'Magang IT / Web Development' },
    period: { en: 'February 2026 – July 2026', id: 'Februari 2026 – Juli 2026' },
    summary: {
      en: 'Contributed to web, analytics, GIS, information-system, database, forecasting, testing, and documentation work across several internal and public-facing initiatives.',
      id: 'Berkontribusi pada pekerjaan web, analitik, GIS, sistem informasi, basis data, forecasting, pengujian, dan dokumentasi dalam beberapa inisiatif internal maupun publik.',
    },
    highlights: [
      {
        en: 'Harmoni Sains / OJS: supported journal structure, responsive interfaces, content and metadata, navigation, multi-journal configuration, and usability testing.',
        id: 'Harmoni Sains / OJS: mendukung struktur jurnal, antarmuka responsif, konten dan metadata, navigasi, konfigurasi multi-jurnal, serta pengujian usability.',
      },
      {
        en: 'UMKM GIS Directory: collected and validated records, handled duplicates, normalized categories, prepared locations, and produced GIS-ready CSV datasets.',
        id: 'Direktori GIS UMKM: mengumpulkan dan memvalidasi data, menangani duplikasi, menormalisasi kategori, menyiapkan lokasi, dan menghasilkan dataset CSV siap GIS.',
      },
      {
        en: 'Wearemania Analytics: worked on CSV upload, validation, cleaning, URL normalization, category mapping, dashboards, visualization, and ARIMA time-series preparation.',
        id: 'Analitik Wearemania: mengerjakan unggah CSV, validasi, pembersihan, normalisasi URL, pemetaan kategori, dashboard, visualisasi, dan persiapan deret waktu ARIMA.',
      },
    ],
    technologies: ['Django', 'Python', 'CSV', 'GIS', 'OJS', 'ARIMA', 'Testing'],
  },
  {
    id: 'berkah-2022',
    company: 'PT Berkah Teknologi Global',
    role: {
      en: 'Software Development Intern — Vocational Internship',
      id: 'Magang Software Development — PKL SMK',
    },
    period: { en: 'August 2022 – January 2023', id: 'Agustus 2022 – Januari 2023' },
    mode: { en: 'Remote / WFH', id: 'Remote / WFH' },
    association: 'SMK Negeri 11 Malang',
    summary: {
      en: 'A vocational internship focused on frontend and backend fundamentals using PHP, CSS, Laravel, and Tailwind CSS.',
      id: 'PKL SMK yang berfokus pada dasar frontend dan backend menggunakan PHP, CSS, Laravel, dan Tailwind CSS.',
    },
    highlights: [
      {
        en: 'Practiced Laravel concepts including authentication, authorization, sessions, and cache.',
        id: 'Mempelajari konsep Laravel termasuk authentication, authorization, session, dan cache.',
      },
      {
        en: 'Completed focused UI exercises such as product and NFT cards, FAQ and rating cards, plus daily, weekly, and monthly time-tracking interfaces.',
        id: 'Menyelesaikan latihan UI terarah seperti product dan NFT card, FAQ dan rating card, serta antarmuka time tracking harian, mingguan, dan bulanan.',
      },
    ],
    technologies: ['PHP', 'Laravel', 'CSS', 'Tailwind CSS', 'Frontend', 'Backend'],
  },
];
