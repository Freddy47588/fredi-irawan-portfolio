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
    id: 'cybersecurity-awareness',
    title: {
      en: 'Introduction to Cybersecurity Awareness',
      id: 'Pengantar Kesadaran Keamanan Siber',
    },
    issuer: 'Technical Training',
    year: 2025,
    category: 'technical',
    featured: true,
  },
  {
    id: 'rakryan-industry-class',
    title: {
      en: 'Rakryan Digital Academy — Industry Class Program (4 Tracks)',
      id: 'Rakryan Digital Academy — Program Kelas Industri (4 Jalur)',
    },
    issuer: 'Rakryan Digital Academy · SMK Negeri 11 Malang',
    year: 2021,
    category: 'training',
    detail: {
      en: 'Front-End Discover & Exploration, Back-End Discover, and Android Development Discover (Grade B)',
      id: 'Front-End Discover & Exploration, Back-End Discover, serta Android Development Discover (Nilai B)',
    },
  },
];
