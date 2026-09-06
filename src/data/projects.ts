import type { Project } from '../types';

// Add a project here and (optionally) place its optimized preview in public/projects/.
// The featured grid, filters, archive, and project dialog update automatically.
export const projects: Project[] = [
  {
    id: 'citrus-detection',
    title: 'Citrus Detection & Counting',
    description: {
      en: 'An academic research interface for detecting and counting citrus fruit in field images.',
      id: 'Antarmuka riset akademik untuk mendeteksi dan menghitung buah jeruk pada citra lapangan.',
    },
    overview: {
      en: 'A web-based computer-vision prototype supporting ongoing academic research into citrus detection and counting.',
      id: 'Prototipe computer vision berbasis web yang mendukung riset akademik deteksi dan penghitungan buah jeruk yang masih berlangsung.',
    },
    problem: {
      en: 'Explores a clear workflow for uploading images, reviewing detections, and inspecting structured counts without overstating unfinished research results.',
      id: 'Mengeksplorasi alur yang jelas untuk mengunggah citra, meninjau deteksi, dan memeriksa hasil hitung tanpa melebih-lebihkan hasil riset yang belum final.',
    },
    features: [
      { en: 'Image upload and confidence controls', id: 'Unggah citra dan pengaturan confidence' },
      { en: 'Detection overlays and structured counts', id: 'Overlay deteksi dan hasil hitung terstruktur' },
      { en: 'Explicit loading, validation, and error states', id: 'Status loading, validasi, dan galat yang jelas' },
    ],
    year: 2026,
    categories: ['Computer Vision', 'Web'],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'YOLO', 'D-FINE'],
    githubUrl: 'https://github.com/Freddy47588/citrus-detection-counting-web',
    image: 'citrus.svg',
    featured: true,
    status: 'academic',
  },
  {
    id: 'mentorride',
    title: 'MentorRide',
    description: {
      en: 'A motorcycle maintenance history and service scheduling application built with Flutter.',
      id: 'Aplikasi riwayat perawatan dan penjadwalan servis sepeda motor yang dibangun dengan Flutter.',
    },
    overview: {
      en: 'A Material 3 mobile application that organizes vehicle records, service history, costs, and maintenance schedules.',
      id: 'Aplikasi mobile Material 3 untuk mengelola data kendaraan, riwayat servis, biaya, dan jadwal perawatan.',
    },
    problem: {
      en: 'Brings scattered motorcycle maintenance records and upcoming service needs into one usable workflow.',
      id: 'Menyatukan catatan perawatan motor yang tersebar dan kebutuhan servis mendatang dalam satu alur yang mudah digunakan.',
    },
    features: [
      { en: 'Vehicle, service, and schedule management', id: 'Pengelolaan kendaraan, servis, dan jadwal' },
      { en: 'Maintenance statistics and report export', id: 'Statistik perawatan dan ekspor laporan' },
      { en: 'Local reminders with Firestore-backed records', id: 'Pengingat lokal dengan data berbasis Firestore' },
    ],
    year: 2026,
    categories: ['Mobile'],
    technologies: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Firestore'],
    githubUrl: 'https://github.com/Freddy47588/mentorride-mobile',
    image: 'mentorride.svg',
    featured: true,
    status: 'active',
  },
  {
    id: 'bandulan-gis',
    title: 'Bandulan Warung GIS',
    description: {
      en: 'An interactive Web GIS for exploring local businesses and spatial layers in Bandulan, Malang.',
      id: 'Web GIS interaktif untuk menjelajahi usaha lokal dan lapisan spasial di Bandulan, Malang.',
    },
    overview: {
      en: 'A browser-based map combining QGIS data preparation with a tailored bilingual discovery interface.',
      id: 'Peta berbasis browser yang memadukan persiapan data QGIS dengan antarmuka penelusuran dwibahasa.',
    },
    problem: {
      en: 'Turns local spatial data into a searchable map for understanding the distribution of neighborhood businesses.',
      id: 'Mengubah data spasial lokal menjadi peta yang dapat dicari untuk memahami persebaran usaha di lingkungan sekitar.',
    },
    features: [
      { en: 'Searchable business locations and layer controls', id: 'Lokasi usaha yang dapat dicari dan kontrol lapisan' },
      { en: 'Measurement, geolocation, and shareable views', id: 'Pengukuran, geolokasi, dan tampilan yang dapat dibagikan' },
      { en: 'Responsive bilingual map interface', id: 'Antarmuka peta dwibahasa yang responsif' },
    ],
    year: 2026,
    categories: ['GIS', 'Web'],
    technologies: ['QGIS', 'qgis2web', 'Leaflet', 'JavaScript', 'Web GIS'],
    githubUrl: 'https://github.com/Freddy47588/bandulan-warung-gis',
    liveUrl: 'https://freddy47588.github.io/bandulan-warung-gis/',
    image: 'gis.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'sajitap',
    title: 'SajiTap',
    description: {
      en: 'A mobile-first restaurant ordering flow for browsing, customizing, and ordering meals from a table.',
      id: 'Alur pemesanan restoran mobile-first untuk memilih, menyesuaikan, dan memesan menu dari meja.',
    },
    overview: {
      en: 'A typed restaurant ordering interface designed around quick customer decisions and persistent cart state.',
      id: 'Antarmuka pemesanan restoran bertipe yang dirancang untuk keputusan pelanggan yang cepat dan keranjang persisten.',
    },
    problem: {
      en: 'Reduces friction between opening a table menu, selecting options, and completing an order.',
      id: 'Mengurangi hambatan dari membuka menu meja, memilih opsi, hingga menyelesaikan pesanan.',
    },
    features: [
      { en: 'Search, filters, favorites, and availability states', id: 'Pencarian, filter, favorit, dan status ketersediaan' },
      { en: 'Option-aware cart and table context', id: 'Keranjang berbasis opsi dan konteks meja' },
      { en: 'Accessible checkout and confirmation flow', id: 'Alur checkout dan konfirmasi yang aksesibel' },
    ],
    year: 2026,
    categories: ['Web'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Supabase'],
    githubUrl: 'https://github.com/Freddy47588/sajitap-restaurant-ordering',
    liveUrl: 'https://project-kuliner.netlify.app/',
    image: 'sajitap.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'phoenix-ar',
    title: 'Phoenix AR Experience',
    description: {
      en: 'A marker-based augmented-reality experience that brings an animated phoenix into the browser.',
      id: 'Pengalaman augmented reality berbasis marker yang menghadirkan phoenix animasi di browser.',
    },
    overview: {
      en: 'A lightweight WebAR experiment with an animated 3D model, mobile interaction controls, and a camera-free preview.',
      id: 'Eksperimen WebAR ringan dengan model 3D animasi, kontrol interaksi mobile, dan pratinjau tanpa kamera.',
    },
    problem: {
      en: 'Explores interactive 3D storytelling without requiring a native application installation.',
      id: 'Mengeksplorasi penyampaian cerita 3D interaktif tanpa mengharuskan instalasi aplikasi native.',
    },
    features: [
      { en: 'Marker tracking and animated GLTF model', id: 'Pelacakan marker dan model GLTF animasi' },
      { en: 'Touch rotation, scaling, and audio controls', id: 'Kontrol rotasi sentuh, skala, dan audio' },
      { en: 'Desktop preview and mobile QR launcher', id: 'Pratinjau desktop dan peluncur QR mobile' },
    ],
    year: 2026,
    categories: ['AR', 'Web'],
    technologies: ['A-Frame', 'AR.js', 'WebAR', 'JavaScript', 'GLTF'],
    githubUrl: 'https://github.com/Freddy47588/phoenix-ar-experience',
    liveUrl: 'https://freddy47588.github.io/phoenix-ar-experience/',
    image: 'phoenix.svg',
    featured: true,
    status: 'experimental',
  },
  {
    id: 'traffic-forecasting',
    title: 'Wearemania Traffic Forecasting',
    description: {
      en: 'A Django dashboard for preparing editorial traffic data and exploring ARIMA forecasts.',
      id: 'Dashboard Django untuk menyiapkan data trafik editorial dan mengeksplorasi prediksi ARIMA.',
    },
    overview: {
      en: 'An internship project connecting CSV ingestion, data cleaning, dashboards, visualization, and time-series preparation.',
      id: 'Proyek magang yang menghubungkan impor CSV, pembersihan data, dashboard, visualisasi, dan persiapan deret waktu.',
    },
    problem: {
      en: 'Makes historical traffic data and forecasting workflows easier to validate and inspect; no unverified production impact is claimed.',
      id: 'Memudahkan validasi dan pemeriksaan data trafik historis serta alur forecasting; tanpa klaim dampak produksi yang belum terverifikasi.',
    },
    features: [
      { en: 'CSV upload, validation, and cleaning', id: 'Unggah, validasi, dan pembersihan CSV' },
      { en: 'URL normalization and category mapping', id: 'Normalisasi URL dan pemetaan kategori' },
      { en: 'Dashboard visualization and ARIMA preparation', id: 'Visualisasi dashboard dan persiapan ARIMA' },
    ],
    year: 2026,
    categories: ['Data', 'Web'],
    technologies: ['Django', 'Python', 'CSV', 'ARIMA', 'SQLite'],
    githubUrl: 'https://github.com/Freddy47588/django-arima-wearemania-traffic-forecasting',
    image: 'forecast.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'hadirpro',
    title: 'HadirPro',
    description: {
      en: 'An employee attendance data-cleaning dashboard for validating and preparing operational records.',
      id: 'Dashboard pembersihan data presensi karyawan untuk memvalidasi dan menyiapkan catatan operasional.',
    },
    overview: {
      en: 'A supporting analytics project focused on practical data-quality workflows.',
      id: 'Proyek analitik pendukung yang berfokus pada alur kualitas data praktis.',
    },
    problem: {
      en: 'Explores repeatable checks for inconsistent attendance records before analysis.',
      id: 'Mengeksplorasi pemeriksaan berulang untuk data presensi yang tidak konsisten sebelum dianalisis.',
    },
    features: [{ en: 'Validation and cleaning workflow', id: 'Alur validasi dan pembersihan data' }],
    year: 2026,
    categories: ['Data', 'Web'],
    technologies: ['Python', 'Django', 'Data Cleaning'],
    featured: false,
    status: 'academic',
  },
  {
    id: 'meditrack',
    title: 'MediTrack',
    description: {
      en: 'A pharmacy management system API for structured medicine and inventory workflows.',
      id: 'API sistem manajemen apotek untuk alur data obat dan inventaris yang terstruktur.',
    },
    overview: {
      en: 'A backend-focused project applying Django patterns to pharmacy data management.',
      id: 'Proyek berfokus backend yang menerapkan pola Django pada pengelolaan data apotek.',
    },
    problem: {
      en: 'Organizes common pharmacy records behind a maintainable application interface.',
      id: 'Mengelola catatan umum apotek melalui antarmuka aplikasi yang mudah dirawat.',
    },
    features: [{ en: 'Structured REST API workflows', id: 'Alur REST API terstruktur' }],
    year: 2025,
    categories: ['Web', 'Data'],
    technologies: ['Django', 'Python', 'REST API'],
    githubUrl: 'https://github.com/Freddy47588/meditrack-django-api',
    featured: false,
    status: 'academic',
  },
  {
    id: 'goevent',
    title: 'GoEvent',
    description: {
      en: 'A selected Flutter coursework application exploring event discovery and mobile interface patterns.',
      id: 'Aplikasi tugas Flutter pilihan yang mengeksplorasi penemuan acara dan pola antarmuka mobile.',
    },
    overview: {
      en: 'A compact mobile coursework project retained as part of the wider development archive.',
      id: 'Proyek tugas mobile ringkas yang dipertahankan sebagai bagian dari arsip pengembangan.',
    },
    problem: {
      en: 'Practices structured navigation and reusable mobile interface components.',
      id: 'Melatih navigasi terstruktur dan komponen antarmuka mobile yang dapat digunakan ulang.',
    },
    features: [{ en: 'Event browsing interface', id: 'Antarmuka penelusuran acara' }],
    year: 2025,
    categories: ['Mobile'],
    technologies: ['Flutter', 'Dart'],
    featured: false,
    status: 'academic',
  },
];
