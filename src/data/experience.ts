import type { Education, Experience } from '../types';

// Add verified employer names and dates here when they are available.
export const experiences: Experience[] = [
  {
    title: { en: 'Full-stack Product Development', id: 'Pengembangan Produk Full-stack' },
    type: { en: 'Independent software projects', id: 'Proyek perangkat lunak mandiri' },
    description: {
      en: 'Built typed, responsive applications with clear data layers, validation, persistence, and deployment-ready documentation.',
      id: 'Membangun aplikasi bertipe dan responsif dengan lapisan data, validasi, persistensi, serta dokumentasi siap deploy.',
    },
    technologies: ['React', 'TypeScript', 'Django', 'Flutter'],
  },
  {
    title: { en: 'Applied Data & Computer Vision', id: 'Data Terapan & Visi Komputer' },
    type: { en: 'Research and analytical projects', id: 'Proyek riset dan analitik' },
    description: {
      en: 'Developed interfaces around object detection, counting, analytics ingestion, and time-series forecasting workflows.',
      id: 'Mengembangkan antarmuka untuk alur deteksi objek, penghitungan, pengambilan data analitik, dan prediksi deret waktu.',
    },
    technologies: ['Python', 'YOLO', 'D-FINE', 'ARIMA'],
  },
  {
    title: { en: 'Interactive & Spatial Experiences', id: 'Pengalaman Interaktif & Spasial' },
    type: {
      en: 'Web GIS and augmented reality projects',
      id: 'Proyek Web GIS dan augmented reality',
    },
    description: {
      en: 'Published accessible browser experiences for spatial exploration and marker-based 3D interaction.',
      id: 'Mempublikasikan pengalaman browser yang aksesibel untuk eksplorasi spasial dan interaksi 3D berbasis marker.',
    },
    technologies: ['QGIS', 'Leaflet', 'WebAR', 'A-Frame'],
  },
];

export const education: Education[] = [
  {
    institution: 'SMK Negeri 11 Malang',
    program: { en: 'Vocational technology education', id: 'Pendidikan kejuruan bidang teknologi' },
    location: 'Malang, Indonesia',
  },
];
