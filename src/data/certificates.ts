import type { Certificate } from '../types';

// Add a certificate object here. Images are optional and belong in public/certificates/.
export const certificates: Certificate[] = [
  {
    id: 'tkj-competency',
    title: {
      en: 'Computer and Network Engineering Competency Certificate',
      id: 'Sertifikat Kompetensi Teknik Komputer dan Jaringan',
    },
    issuer: 'SMK Negeri 11 Malang',
    year: 2023,
    category: 'technical',
    detail: {
      en: 'Wired and Wireless Network Design — Very Competent',
      id: 'Perancangan Jaringan Kabel dan Nirkabel — Sangat Kompeten',
    },
    featured: true,
  },
  {
    id: 'azure-ai-900',
    title: {
      en: 'Preparation Course for Azure AI Fundamentals (AI-900)',
      id: 'Kursus Persiapan Azure AI Fundamentals (AI-900)',
    },
    issuer: 'Microsoft Azure',
    year: 2025,
    category: 'technical',
    featured: true,
  },
  {
    id: 'fabric-data-science',
    title: {
      en: 'Introduction to Data Science and Microsoft Fabric',
      id: 'Pengantar Data Science dan Microsoft Fabric',
    },
    issuer: 'Microsoft Elevate',
    year: 2026,
    category: 'technical',
    featured: true,
  },
  {
    id: 'rakryan-frontend-discover',
    title: { en: 'Front-End Development — Discover', id: 'Front-End Development — Discover' },
    issuer: 'Rakryan Digital Academy',
    year: 2020,
    category: 'training',
    detail: { en: 'Grade B', id: 'Nilai B' },
    featured: true,
  },
  {
    id: 'rakryan-backend-discover',
    title: { en: 'Back-End Development — Discover', id: 'Back-End Development — Discover' },
    issuer: 'Rakryan Digital Academy',
    year: 2020,
    category: 'training',
    detail: { en: 'Grade B', id: 'Nilai B' },
  },
  {
    id: 'rakryan-android-discover',
    title: { en: 'Android Development — Discover', id: 'Android Development — Discover' },
    issuer: 'Rakryan Digital Academy',
    year: 2020,
    category: 'training',
    detail: { en: 'Grade B', id: 'Nilai B' },
  },
  {
    id: 'rakryan-frontend-exploration',
    title: { en: 'Front-End — Exploration', id: 'Front-End — Exploration' },
    issuer: 'Rakryan Digital Academy',
    year: 2021,
    category: 'training',
  },
  {
    id: 'cybersecurity-awareness',
    title: {
      en: 'Introduction to Cybersecurity Awareness',
      id: 'Pengantar Kesadaran Keamanan Siber',
    },
    issuer: 'Technical Training',
    year: 2025,
    category: 'technical',
  },
];
