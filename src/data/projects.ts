import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'citrus-detection',
    title: 'KalisCitrus Detection & Counting',
    description: {
      en: 'A research prototype that detects and estimates citrus fruit counts in field images.',
      id: 'Prototipe riset untuk mendeteksi dan memperkirakan jumlah buah jeruk pada citra lapangan.',
    },
    overview: {
      en: 'An end-to-end image inference experience connecting a typed React interface to a FastAPI computer-vision service.',
      id: 'Pengalaman inferensi citra menyeluruh yang menghubungkan antarmuka React bertipe dengan layanan visi komputer FastAPI.',
    },
    problem: {
      en: 'Makes field-image detection results easier to inspect through visual bounding boxes and structured fruit counts.',
      id: 'Memudahkan pemeriksaan hasil deteksi citra lapangan melalui bounding box visual dan jumlah buah yang terstruktur.',
    },
    features: [
      { en: 'Image upload and confidence controls', id: 'Unggah citra dan pengaturan confidence' },
      {
        en: 'Responsive detection overlays and category counts',
        id: 'Overlay deteksi responsif dan jumlah per kategori',
      },
      {
        en: 'Explicit model, validation, and error states',
        id: 'Status model, validasi, dan galat yang jelas',
      },
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'YOLO11s', 'D-FINE'],
    category: 'AI',
    githubUrl: 'https://github.com/Freddy47588/citrus-detection-counting-web',
    image: 'citrus.svg',
    featured: true,
  },
  {
    id: 'mentorride',
    title: 'MentorRide',
    description: {
      en: 'An Android companion for vehicle records, maintenance costs, schedules, and local reminders.',
      id: 'Aplikasi Android untuk pencatatan kendaraan, biaya perawatan, jadwal servis, dan pengingat lokal.',
    },
    overview: {
      en: 'A Material 3 mobile product that keeps vehicle maintenance history organized per user.',
      id: 'Produk mobile Material 3 yang merapikan riwayat perawatan kendaraan untuk setiap pengguna.',
    },
    problem: {
      en: 'Consolidates scattered service records, odometer updates, costs, and upcoming maintenance into one workflow.',
      id: 'Menyatukan catatan servis, pembaruan odometer, biaya, dan jadwal perawatan dalam satu alur.',
    },
    features: [
      {
        en: 'Vehicle, service, and schedule management',
        id: 'Pengelolaan kendaraan, servis, dan jadwal',
      },
      {
        en: 'Maintenance statistics and PDF/CSV reports',
        id: 'Statistik perawatan dan laporan PDF/CSV',
      },
      {
        en: 'Local reminders with Firestore-backed data',
        id: 'Pengingat lokal dengan data berbasis Firestore',
      },
    ],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Firestore'],
    category: 'Mobile',
    githubUrl: 'https://github.com/Freddy47588/mentorride-mobile',
    image: 'mentorride.svg',
    featured: true,
  },
  {
    id: 'bandulan-gis',
    title: 'Bandulan Warung GIS',
    description: {
      en: 'An interactive WebGIS for exploring local businesses and spatial layers in Bandulan, Malang.',
      id: 'WebGIS interaktif untuk menjelajahi usaha lokal dan lapisan spasial di Bandulan, Malang.',
    },
    overview: {
      en: 'A browser-based map combining QGIS data preparation with a tailored, bilingual discovery interface.',
      id: 'Peta berbasis browser yang memadukan persiapan data QGIS dengan antarmuka penelusuran dwibahasa.',
    },
    problem: {
      en: 'Turns local spatial datasets into a searchable, accessible map for understanding business distribution.',
      id: 'Mengubah dataset spasial lokal menjadi peta yang mudah dicari dan diakses untuk memahami persebaran usaha.',
    },
    features: [
      {
        en: 'Searchable business locations and layer controls',
        id: 'Lokasi usaha yang dapat dicari dan kontrol lapisan',
      },
      {
        en: 'Measurement, geolocation, and shareable views',
        id: 'Pengukuran, geolokasi, dan tampilan yang dapat dibagikan',
      },
      { en: 'Responsive bilingual map interface', id: 'Antarmuka peta dwibahasa yang responsif' },
    ],
    technologies: ['QGIS', 'qgis2web', 'Leaflet', 'JavaScript', 'Web GIS'],
    category: 'GIS',
    githubUrl: 'https://github.com/Freddy47588/bandulan-warung-gis',
    liveUrl: 'https://freddy47588.github.io/bandulan-warung-gis/',
    image: 'gis.svg',
    featured: true,
  },
  {
    id: 'sajitap',
    title: 'SajiTap Restaurant Ordering',
    description: {
      en: 'A mobile-first, QR-linked table ordering flow for browsing, customizing, and checking out meals.',
      id: 'Alur pemesanan meja berbasis QR dan mobile-first untuk memilih, menyesuaikan, dan memesan menu.',
    },
    overview: {
      en: 'A typed restaurant ordering interface designed around quick customer decisions and persistent cart state.',
      id: 'Antarmuka pemesanan restoran bertipe yang dirancang untuk keputusan pelanggan yang cepat dan keranjang persisten.',
    },
    problem: {
      en: 'Reduces friction between scanning a table code, selecting menu options, and completing an order.',
      id: 'Mengurangi hambatan dari pemindaian kode meja, pemilihan opsi menu, hingga penyelesaian pesanan.',
    },
    features: [
      {
        en: 'Search, filters, favorites, and availability states',
        id: 'Pencarian, filter, favorit, dan status ketersediaan',
      },
      { en: 'Option-aware cart and table context', id: 'Keranjang berbasis opsi dan konteks meja' },
      {
        en: 'Accessible checkout and confirmation flow',
        id: 'Alur checkout dan konfirmasi yang aksesibel',
      },
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Supabase'],
    category: 'Web',
    githubUrl: 'https://github.com/Freddy47588/sajitap-restaurant-ordering',
    liveUrl: 'https://project-kuliner.netlify.app/',
    image: 'sajitap.svg',
    featured: true,
  },
  {
    id: 'phoenix-ar',
    title: 'Phoenix WebAR Experience',
    description: {
      en: 'A marker-based augmented-reality experience that brings an animated Phoenix into the browser.',
      id: 'Pengalaman augmented reality berbasis marker yang menghadirkan Phoenix animasi di browser.',
    },
    overview: {
      en: 'A lightweight WebAR project with a camera-free 3D preview and mobile interaction controls.',
      id: 'Proyek WebAR ringan dengan pratinjau 3D tanpa kamera dan kontrol interaksi mobile.',
    },
    problem: {
      en: 'Makes an interactive 3D character accessible without requiring users to install a native app.',
      id: 'Membuat karakter 3D interaktif dapat diakses tanpa mengharuskan pengguna memasang aplikasi native.',
    },
    features: [
      {
        en: 'Marker tracking and animated GLTF model',
        id: 'Pelacakan marker dan model GLTF animasi',
      },
      {
        en: 'Touch rotation, scaling, and audio controls',
        id: 'Kontrol rotasi sentuh, skala, dan audio',
      },
      {
        en: 'Desktop 3D preview and mobile QR launcher',
        id: 'Pratinjau 3D desktop dan peluncur QR mobile',
      },
    ],
    technologies: ['A-Frame', 'AR.js', 'WebAR', 'JavaScript', 'GLTF'],
    category: 'AR',
    githubUrl: 'https://github.com/Freddy47588/phoenix-ar-experience',
    liveUrl: 'https://freddy47588.github.io/phoenix-ar-experience/',
    image: 'phoenix.svg',
    featured: true,
  },
  {
    id: 'traffic-forecasting',
    title: 'WeAreMania Traffic Forecasting',
    description: {
      en: 'An internal dashboard for forecasting editorial traffic with GA4 data and ARIMA modeling.',
      id: 'Dashboard internal untuk memprediksi trafik editorial dengan data GA4 dan pemodelan ARIMA.',
    },
    overview: {
      en: 'A Django dashboard that connects analytics data with time-series forecasts for editorial planning.',
      id: 'Dashboard Django yang menghubungkan data analitik dengan prediksi deret waktu untuk perencanaan editorial.',
    },
    problem: {
      en: 'Supports data-informed editorial decisions by making historical traffic and forecasts easier to interpret.',
      id: 'Mendukung keputusan editorial berbasis data dengan menyajikan histori trafik dan prediksi secara lebih mudah dipahami.',
    },
    features: [
      { en: 'GA4 analytics integration', id: 'Integrasi analitik GA4' },
      { en: 'ARIMA time-series forecasting', id: 'Prediksi deret waktu ARIMA' },
      {
        en: 'Internal decision-support dashboard',
        id: 'Dashboard internal untuk dukungan keputusan',
      },
    ],
    technologies: ['Django', 'Python', 'ARIMA', 'GA4 API', 'SQLite'],
    category: 'Web',
    githubUrl: 'https://github.com/Freddy47588/django-arima-wearemania-traffic-forecasting',
    image: 'forecast.svg',
    featured: true,
  },
];
