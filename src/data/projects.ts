import type { Project } from '../types';

// Add a project here and (optionally) place its optimized preview in public/projects/.
// The featured grid, filters, archive, and project dialog update automatically.
export const projects: Project[] = [
  {
    id: 'citrus-detection',
    title: 'KalisCitrus — Citrus Detection & Counting',
    description: {
      en: 'An academic computer-vision web interface for detecting and counting citrus fruit on orchard trees.',
      id: 'Antarmuka web computer vision akademik untuk mendeteksi dan menghitung buah jeruk pada pohon kebun.',
    },
    overview: {
      en: 'A thesis demonstration web interface comparing YOLO11s and D-FINE-S for single-class citrus detection and counting in Kalisongo orchard imagery.',
      id: 'Antarmuka demonstrasi riset skripsi yang membandingkan YOLO11s dan D-FINE-S untuk deteksi dan penghitungan buah jeruk kelas tunggal pada citra kebun Kalisongo.',
    },
    problem: {
      en: 'Provides a reproducible inference demonstration with strict schema validation, EXIF-aware bounding-box scaling, and honest model readiness boundaries.',
      id: 'Menyediakan demonstrasi inferensi dengan validasi skema ketat, penskalaan bounding box berbasis orientasi EXIF, dan status kesiapan model yang transparan.',
    },
    features: [
      {
        en: 'Image upload validation, EXIF normalization, and confidence threshold controls',
        id: 'Validasi unggah citra, normalisasi EXIF, dan kontrol ambang confidence',
      },
      {
        en: 'Interactive SVG detection overlays and structured fruit counts',
        id: 'Overlay deteksi SVG interaktif dan hasil hitung buah terstruktur',
      },
      {
        en: 'Explicit model readiness checks and FastAPI health/status contracts',
        id: 'Pemeriksaan kesiapan model yang eksplisit serta kontrak status FastAPI',
      },
    ],
    year: 2026,
    categories: ['Computer Vision', 'Web'],
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'YOLO11s', 'D-FINE-S'],
    githubUrl: 'https://github.com/Freddy47588/citrus-detection-counting-web',
    image: 'citrus.svg',
    featured: true,
    status: 'academic',
  },
  {
    id: 'terra-folio',
    title: 'TERRA // FOLIO',
    description: {
      en: 'An interactive topographic and bathymetric cartography workbench with real-time contour extraction and 3D terrain slabs.',
      id: 'Workbench kartografi topografi dan batimetri interaktif dengan ekstraksi kontur real-time dan blok medan 3D.',
    },
    overview: {
      en: 'A zero-dependency browser cartography atelier combining Marching Squares isoline extraction, Eduard Imhof solar relief shading, D8 hydrology, and 3D axonometric rendering.',
      id: 'Atelier kartografi browser tanpa dependensi yang memadukan ekstraksi kontur Marching Squares, bayangan relief surya Eduard Imhof, hidrologi D8, dan proyeksi aksonometrik 3D.',
    },
    problem: {
      en: 'Demonstrates procedural spatial modeling, terrain sculpting, and archival cartographic rendering directly in HTML5 Canvas at 60 FPS.',
      id: 'Menampilkan pemodelan spasial prosedural, pembentukan medan interaktif, dan visualisasi peta bergaya arsip langsung di HTML5 Canvas pada 60 FPS.',
    },
    features: [
      {
        en: 'Live Marching Squares contour isolines and Eduard Imhof solar relief dial',
        id: 'Garis kontur Marching Squares real-time dan kontrol pencahayaan relief Eduard Imhof',
      },
      {
        en: 'Rotatable 3D axonometric terrain slab and D8 hydrological erosion simulation',
        id: 'Blok medan aksonometrik 3D yang dapat diputar serta simulasi aliran hidrologi D8',
      },
      {
        en: 'Synchronized A→B geological cross-section profiler and 1600×1120 PNG plate exporter',
        id: 'Profil penampang geologi A→B tersinkronisasi dan ekspor pelat peta PNG 1600×1120',
      },
    ],
    year: 2026,
    categories: ['Web', 'Data'],
    technologies: ['JavaScript ES6+', 'HTML5 Canvas', 'Web Audio API', 'Cartography', 'Algorithms'],
    githubUrl: 'https://github.com/Freddy47588/terra-folio',
    liveUrl: 'https://terra-folio.pages.dev',
    image: 'terra-folio.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'atmos-live',
    title: 'ATMOS — Live Weather Observatory',
    description: {
      en: 'A real-time weather and air-quality observatory powered by a 60fps HTML5 Canvas sky engine and bilingual telemetry.',
      id: 'Observatorium cuaca dan kualitas udara real-time dengan mesin langit HTML5 Canvas 60fps serta telemetri dwibahasa.',
    },
    overview: {
      en: 'An interactive meteorological web application integrating Open-Meteo forecast and air-quality streams with procedural sky rendering and Web Audio ambience.',
      id: 'Aplikasi web meteorologi interaktif yang memadukan data cuaca serta kualitas udara Open-Meteo secara langsung dengan visualisasi langit prosedural dan Web Audio.',
    },
    problem: {
      en: 'Transforms raw hourly and 7-day meteorological telemetry into an intuitive, zero-dependency observatory interface with instant ID/EN localization.',
      id: 'Mengubah data telemetri cuaca per jam dan 7 hari menjadi antarmuka observatorium tanpa dependensi yang intuitif dengan lokalisasi ID/EN instan.',
    },
    features: [
      {
        en: '60fps dynamic Canvas sky engine with solar phases and interactive weather FX dock',
        id: 'Mesin langit Canvas 60fps dinamis sesuai fase matahari dan dok simulasi cuaca interaktif',
      },
      {
        en: 'Scrubbable 24-hour cubic-Bezier forecast curves and expandable 7-day outlook',
        id: 'Grafik prakiraan 24 jam interaktif dan rincian prakiraan mingguan 7 hari',
      },
      {
        en: 'Live US AQI, PM2.5/PM10, UV index, wind compass, and sun trajectory arc',
        id: 'Pemantauan US AQI, PM2.5/PM10, indeks UV, kompas angin, dan lintasan matahari langsung',
      },
    ],
    year: 2026,
    categories: ['Web', 'Data'],
    technologies: ['JavaScript ES6+', 'HTML5 Canvas', 'Open-Meteo API', 'Web Audio API', 'CSS3'],
    githubUrl: 'https://github.com/Freddy47588/atmos-live',
    liveUrl: 'https://atmos-live.pages.dev',
    image: 'atmos.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'sajitap',
    title: 'SajiTap',
    description: {
      en: 'A full-stack QR restaurant ordering system with mobile-first table ordering and role-based staff workflows.',
      id: 'Sistem pemesanan restoran berbasis QR full-stack dengan alur pelanggan mobile-first dan dashboard staf multi-peran.',
    },
    overview: {
      en: 'A typed restaurant ordering platform supporting both offline local development adapters and Supabase-backed realtime kitchen, waiter, cashier, and admin views.',
      id: 'Platform pemesanan restoran bertipe yang mendukung mode pengembangan lokal maupun alur realtime berbasis Supabase untuk dapur, pelayan, kasir, dan admin.',
    },
    problem: {
      en: 'Reduces friction from scanning a table QR code to customizing menu options, submitting server-validated orders, and tracking preparation state.',
      id: 'Mengurangi hambatan sejak pemindaian QR meja, pemilihan opsi menu, validasi pesanan di server, hingga pelacakan status hidangan secara langsung.',
    },
    features: [
      {
        en: 'Searchable menu, option-aware cart persistence, and table context routing',
        id: 'Menu yang dapat dicari, keranjang persisten berbasis opsi, dan rute konteks meja',
      },
      {
        en: 'Role-based staff views for Admin, Kitchen, Cashier, and Waiter workflows',
        id: 'Tampilan staf berbasis peran untuk alur Admin, Dapur, Kasir, dan Pelayan',
      },
      {
        en: 'Supabase Postgres RLS policies, transactional order RPCs, and Vitest test coverage',
        id: 'Kebijakan RLS Supabase Postgres, RPC pesanan transaksional, dan pengujian Vitest',
      },
    ],
    year: 2026,
    categories: ['Web'],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Supabase', 'Vitest'],
    githubUrl: 'https://github.com/Freddy47588/sajitap-restaurant-ordering',
    image: 'sajitap.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'repovitals',
    title: 'RepoVitals',
    description: {
      en: 'A GitHub repository health and engineering analytics workspace with transparent evidence coverage scoring.',
      id: 'Ruang kerja analitik kesehatan repositori GitHub dengan metodologi skor dan cakupan bukti yang transparan.',
    },
    overview: {
      en: 'A Next.js App Router analytics platform that inspects public GitHub repositories across documentation, metadata, maintenance signals, CI automation, and governance readiness.',
      id: 'Platform analitik Next.js App Router yang mengevaluasi repositori publik GitHub pada aspek dokumentasi, metadata, pemeliharaan, otomasi CI, dan tata kelola.',
    },
    problem: {
      en: 'Separates verified repository evidence from unknown or inapplicable checks, pinning file inspections to immutable commit and tree SHAs.',
      id: 'Memisahkan bukti repositori terverifikasi dari indikator yang belum diketahui, dengan pemeriksaan file yang dipin pada SHA commit dan tree yang tervalidasi.',
    },
    features: [
      {
        en: 'Five-category health scoring with explicit ≥80% weighted evidence coverage gate',
        id: 'Skor kesehatan lima kategori dengan syarat cakupan bukti tertimbang minimal 80%',
      },
      {
        en: 'Server-only GitHub REST boundary with Zod validation, caching, and rate-limit cooldowns',
        id: 'Boundary REST GitHub di sisi server dengan validasi Zod, cache, dan proteksi rate-limit',
      },
      {
        en: 'Offline deterministic DEMO mode plus Vitest and Playwright regression suites',
        id: 'Mode DEMO deterministik offline serta suite pengujian regresi Vitest dan Playwright',
      },
    ],
    year: 2026,
    categories: ['Web', 'Data'],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Zod',
      'Recharts',
      'Playwright',
    ],
    image: 'repovitals.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'bandulan-gis',
    title: 'Bandulan Warung Map',
    description: {
      en: 'An interactive web map for exploring local businesses and eleven neighborhood map layers in Bandulan, Malang.',
      id: 'Peta web interaktif untuk menjelajahi usaha lokal dan sebelas lapisan peta wilayah di Bandulan, Malang.',
    },
    overview: {
      en: 'A browser-based interactive map combining structured neighborhood location datasets with a custom bilingual discovery interface and synchronized layer legend.',
      id: 'Peta interaktif berbasis browser yang memadukan dataset lokasi lingkungan dengan antarmuka penelusuran dwibahasa dan legenda lapisan tersinkronisasi.',
    },
    problem: {
      en: 'Turns neighborhood location datasets into an accessible, searchable web map for understanding local business distribution alongside roads, buildings, and facilities.',
      id: 'Mengubah dataset lokasi kelurahan menjadi peta web yang aksesibel dan dapat dicari untuk memahami persebaran warung beserta jaringan jalan, bangunan, dan fasilitas.',
    },
    features: [
      {
        en: 'Searchable warung locations and eleven toggleable map layers',
        id: 'Pencarian lokasi warung serta kontrol sebelas lapisan peta',
      },
      {
        en: 'Metric distance/area measurement, geolocation, and shareable map-view URLs',
        id: 'Pengukuran jarak/luas metrik, geolokasi, dan tautan tampilan peta yang dapat dibagikan',
      },
      {
        en: 'Responsive bilingual (ID/EN) landing page and keyboard-accessible map sidebar',
        id: 'Halaman pengantar dan sidebar peta dwibahasa (ID/EN) yang responsif serta aksesibel',
      },
    ],
    year: 2026,
    categories: ['Web', 'Data'],
    technologies: ['Leaflet', 'JavaScript', 'GeoJSON', 'Interactive Map'],
    githubUrl: 'https://github.com/Freddy47588/bandulan-warung-gis',
    liveUrl: 'https://bandulan-warung-gis.pages.dev/',
    image: 'gis.svg',
    featured: true,
    status: 'completed',
  },
  {
    id: 'civireka',
    title: 'CiviReka',
    description: {
      en: 'A Django civic administration platform and documented REST API for resident records and public complaint management.',
      id: 'Platform administrasi warga dan REST API terdokumentasi berbasis Django untuk pengelolaan data warga serta pengaduan publik.',
    },
    overview: {
      en: 'An authenticated administration system combining server-rendered Django workflows with a token-protected Django REST Framework API and OpenAPI schema.',
      id: 'Sistem administrasi terautentikasi yang menggabungkan antarmuka web Django dengan API Django REST Framework berbasis token serta skema OpenAPI.',
    },
    problem: {
      en: 'Unifies resident CRUD, 16-digit NIK validation, and complaint status tracking across both browser sessions and documented API endpoints.',
      id: 'Menyatukan pengelolaan data warga, validasi NIK 16 digit, dan pelacakan status pengaduan baik melalui sesi browser maupun endpoint API terdokumentasi.',
    },
    features: [
      {
        en: 'Dashboard metrics, resident CRUD, and complaint status filtering with pagination',
        id: 'Ringkasan metrik dashboard, CRUD warga, dan penyaringan status pengaduan dengan paginasi',
      },
      {
        en: 'Shared 16-digit NIK and phone validators across HTML forms and DRF serializers',
        id: 'Validator NIK 16 digit dan nomor telepon bersama untuk form HTML dan serializer DRF',
      },
      {
        en: 'Swagger UI, ReDoc, and downloadable OpenAPI schema powered by drf-spectacular',
        id: 'Dokumentasi Swagger UI, ReDoc, dan unduhan skema OpenAPI dengan drf-spectacular',
      },
    ],
    year: 2026,
    categories: ['Web', 'Data'],
    technologies: ['Django 5.2', 'Python', 'Django REST Framework', 'OpenAPI', 'Bootstrap 5'],
    githubUrl: 'https://github.com/Freddy47588/civireka-resident-complaint-management',
    image: 'civireka.svg',
    featured: true,
    status: 'completed',
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
      {
        en: 'Vehicle, service, and schedule management',
        id: 'Pengelolaan kendaraan, servis, dan jadwal',
      },
      {
        en: 'Maintenance statistics and report export',
        id: 'Statistik perawatan dan ekspor laporan',
      },
      {
        en: 'Local reminders with Firestore-backed records',
        id: 'Pengingat lokal dengan data berbasis Firestore',
      },
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
      {
        en: 'Marker tracking and animated GLTF model',
        id: 'Pelacakan marker dan model GLTF animasi',
      },
      {
        en: 'Touch rotation, scaling, and audio controls',
        id: 'Kontrol rotasi sentuh, skala, dan audio',
      },
      {
        en: 'Desktop preview and mobile QR launcher',
        id: 'Pratinjau desktop dan peluncur QR mobile',
      },
    ],
    year: 2026,
    categories: ['AR', 'Web'],
    technologies: ['A-Frame', 'AR.js', 'WebAR', 'JavaScript', 'GLTF'],
    githubUrl: 'https://github.com/Freddy47588/phoenix-ar-experience',
    liveUrl: 'https://phoenix-ar-experience.pages.dev/',
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
      {
        en: 'Dashboard visualization and ARIMA preparation',
        id: 'Visualisasi dashboard dan persiapan ARIMA',
      },
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
    id: 'daylight-almanac',
    title: 'The Daylight Almanac',
    description: {
      en: 'A zero-dependency astronomical almanac rendering the live sun, moon, twilight bands, and sidereal starfield for any location.',
      id: 'Almanak astronomi tanpa dependensi yang memvisualisasikan posisi matahari, bulan, fase senja, dan peta bintang untuk lokasi mana pun.',
    },
    overview: {
      en: 'An editorial broadsheet web application powered by a custom solar/lunar ephemeris engine and a 9-layer Canvas 2D panoramic sky renderer.',
      id: 'Aplikasi web bergaya lembaran editorial yang ditenagai perhitungan efemeris matahari/bulan mandiri dan perender langit panoramik Canvas 2D 9 lapis.',
    },
    problem: {
      en: 'Computes solar altitude, twilight transitions, hemisphere-accurate lunar phases, and 365-day daylight curves entirely client-side.',
      id: 'Menghitung ketinggian matahari, transisi senja, fase bulan akurat per belahan bumi, dan kurva durasi siang 365 hari sepenuhnya di sisi klien.',
    },
    features: [
      {
        en: '360° Canvas sky panorama with 29 named bright stars and 700 seeded background stars',
        id: 'Panorama langit Canvas 360° dengan 29 bintang utama bernama dan 700 bintang latar',
      },
      {
        en: 'Interactive 24-hour twilight scrubber, time-lapse playback, and 365-day daylight curve',
        id: 'Scrubber fase senja 24 jam interaktif, pemutaran time-lapse, dan kurva siang 365 hari',
      },
      {
        en: 'Automatic day/night editorial broadsheet theme shifting with solar altitude',
        id: 'Transisi tema lembaran editorial siang/malam otomatis mengikuti ketinggian matahari',
      },
    ],
    year: 2026,
    categories: ['Web', 'Data'],
    technologies: ['JavaScript ES6+', 'HTML5 Canvas', 'Astronomical Ephemeris', 'CSS3'],
    githubUrl: 'https://github.com/Freddy47588/daylight-almanac',
    liveUrl: 'https://daylight-almanac.pages.dev',
    featured: false,
    status: 'completed',
  },
  {
    id: 'monolith-m01',
    title: 'MONOLITH M-01',
    description: {
      en: 'A tactile FM and subtractive Web Audio synthesizer with a 16-step Euclidean sequencer and real-time OLED visualizer.',
      id: 'Synthesizer Web Audio FM dan subtraktif interaktif dengan sekuenser Euclidean 16-langkah serta visualiser OLED real-time.',
    },
    overview: {
      en: 'A zero-dependency browser instrument generating polyphonic synth voices and analog-style percussion procedurally through the Web Audio API.',
      id: 'Instrumen browser tanpa dependensi yang membangkitkan suara synth polifonik dan perkusi bergaya analog secara prosedural melalui Web Audio API.',
    },
    problem: {
      en: 'Explores low-latency Web Audio scheduling, Bjorklund Euclidean rhythm generation, and multi-mode Canvas 2D oscilloscope rendering without external samples.',
      id: 'Mengeksplorasi penjadwalan Web Audio latensi rendah, generator ritme Euclidean Bjorklund, dan visualisasi osiloskop Canvas 2D tanpa sampel audio eksternal.',
    },
    features: [
      {
        en: '5-track 16-step matrix with Bjorklund Euclidean generator and scale-locked mutator',
        id: 'Matriks 16-langkah 5-trek dengan generator Euclidean Bjorklund dan mutator berbasis tangga nada',
      },
      {
        en: '4-mode real-time Canvas OLED visualizer (Scope, Spectrum, Lissajous, Terrain)',
        id: 'Visualiser OLED Canvas real-time 4 mode (Scope, Spectrum, Lissajous, Terrain)',
      },
      {
        en: 'XY filter/echo modulation pad, 4 hot-swappable sound cartridges, and QWERTY keybed',
        id: 'Pad modulasi XY filter/echo, 4 kartrid preset suara, dan keybed interaktif QWERTY',
      },
    ],
    year: 2026,
    categories: ['Web'],
    technologies: ['Web Audio API', 'JavaScript ES6+', 'HTML5 Canvas', 'DSP', 'CSS3'],
    githubUrl: 'https://github.com/Freddy47588/monolith-m01',
    liveUrl: 'https://monolith-m01.pages.dev',
    featured: false,
    status: 'completed',
  },
  {
    id: 'neon-atelier',
    title: 'NEON // 04 — Light Atelier',
    description: {
      en: 'An interactive noble-gas photonics showcase, 3D/4D neon glass-tube playground, and custom neon sign studio.',
      id: 'Showcase fotonika gas mulia interaktif, ruang eksplorasi tabung neon 3D/4D, dan studio perancang papan neon kustom.',
    },
    overview: {
      en: 'A zero-dependency Canvas 2D and Web Audio experience simulating five noble gases (Ne, Ar, Kr, Xe, He), optical bloom, and freehand glass-tube bending.',
      id: 'Pengalaman Canvas 2D dan Web Audio tanpa dependensi yang mensimulasikan lima gas mulia (Ne, Ar, Kr, Xe, He), pendaran optik, dan pembentukan tabung kaca.',
    },
    problem: {
      en: 'Combines 3D/4D projection geometry, multi-pass optical tube rendering, and synthesized transformer acoustics in a single interactive studio.',
      id: 'Memadukan proyeksi geometri 3D/4D, perenderan pendaran tabung multi-lapis, dan sintesis suara transformator dalam satu studio interaktif.',
    },
    features: [
      {
        en: 'Drag-to-orbit 3D/4D neon sculptures with voltage overdrive and cold-start ignition',
        id: 'Patung neon 3D/4D yang dapat diputar dengan kontrol tegangan overdrive dan efek nyala awal',
      },
      {
        en: 'Freehand glass-tube bending studio and custom neon sign workshop with 2× PNG export',
        id: 'Studio pembengkokan tabung bebas dan pembuat papan teks neon dengan ekspor PNG 2×',
      },
      {
        en: 'Five noble gas discharge profiles shifting global site telemetry and theme accents',
        id: 'Lima profil pelepasan gas mulia yang mengubah telemetri dan tema visual secara dinamis',
      },
    ],
    year: 2026,
    categories: ['Web'],
    technologies: ['JavaScript ES6+', 'HTML5 Canvas', 'Web Audio API', '3D Projection', 'CSS3'],
    githubUrl: 'https://github.com/Freddy47588/neon-atelier',
    liveUrl: 'https://neon-atelier.pages.dev',
    featured: false,
    status: 'completed',
  },
  {
    id: 'evendly',
    title: 'Evendly',
    description: {
      en: 'A Flutter event discovery and digital ticketing application with Firebase authentication, location filtering, and QR tickets.',
      id: 'Aplikasi penemuan acara dan tiket digital berbasis Flutter dengan autentikasi Firebase, filter lokasi terdekat, dan tiket QR.',
    },
    overview: {
      en: 'A feature-modular Flutter application combining realtime Cloud Firestore event feeds with Google Maps location discovery and QR e-ticket management.',
      id: 'Aplikasi Flutter modular yang memadukan feed acara Cloud Firestore realtime dengan penelusuran lokasi Google Maps dan pengelolaan e-tiket QR.',
    },
    problem: {
      en: 'Connects event browsing, category/nearby filtering, booking orders, and venue QR ticket presentation in a cohesive mobile workflow.',
      id: 'Menghubungkan penelusuran acara, penyaringan kategori/lokasi terdekat, pemesanan tiket, dan tampilan kode QR tiket dalam satu alur mobile.',
    },
    features: [
      {
        en: 'Firebase email authentication, onboarding, and realtime event feed filtering',
        id: 'Autentikasi email Firebase, onboarding, dan penyaringan feed acara secara realtime',
      },
      {
        en: 'Location-aware nearby discovery with Google Maps and Geolocator integration',
        id: 'Penemuan acara terdekat berbasis lokasi dengan integrasi Google Maps dan Geolocator',
      },
      {
        en: 'Order booking, QR digital tickets, reviews, dark/light themes, and GitHub Actions CI',
        id: 'Pemesanan tiket, tiket digital QR, ulasan, tema gelap/terang, dan CI GitHub Actions',
      },
    ],
    year: 2026,
    categories: ['Mobile'],
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Google Maps'],
    githubUrl: 'https://github.com/Freddy47588/evendly-flutter-app',
    featured: false,
    status: 'active',
  },
  {
    id: 'meditrack',
    title: 'MediTrack',
    description: {
      en: 'A pharmacy inventory, expiry tracking, and POS sales system built with Django and Django REST Framework.',
      id: 'Sistem inventaris apotek, pemantauan kedaluwarsa, dan kasir penjualan berbasis Django serta Django REST Framework.',
    },
    overview: {
      en: 'A backend and dashboard project managing medicine stock movements, expiry alerts, atomic cashier checkouts, and token-authenticated REST API endpoints.',
      id: 'Proyek backend dan dashboard yang mengelola mutasi stok obat, peringatan kedaluwarsa, transaksi kasir atomik, serta endpoint REST API berbasis token.',
    },
    problem: {
      en: 'Prevents expired or insufficient-stock sales through transactional server validation, audit-trail stock ledgers, and 83 automated tests.',
      id: 'Mencegah penjualan obat kedaluwarsa atau stok kurang melalui validasi server transaksional, buku besar audit stok, dan 83 pengujian otomatis.',
    },
    features: [
      {
        en: 'Medicine inventory with low-stock thresholds, 30-day near-expiry alerts, and audit ledger',
        id: 'Inventaris obat dengan batas stok minimum, peringatan kedaluwarsa 30 hari, dan log audit mutasi',
      },
      {
        en: 'Atomic cashier/POS checkout lifecycle (DRAFT → PENDING → PAID) with automatic rollback',
        id: 'Siklus transaksi kasir/POS atomik (DRAFT → PENDING → PAID) dengan rollback otomatis',
      },
      {
        en: '7-day Chart.js sales dashboard, Swagger/OpenAPI docs, and 83 automated DRF tests',
        id: 'Dashboard penjualan 7 hari Chart.js, dokumentasi Swagger/OpenAPI, dan 83 tes otomatis',
      },
    ],
    year: 2025,
    categories: ['Web', 'Data'],
    technologies: ['Django', 'Django REST Framework', 'Python', 'SQLite', 'OpenAPI', 'Chart.js'],
    githubUrl: 'https://github.com/Freddy47588/meditrack-pharmacy-management-system-django',
    featured: false,
    status: 'academic',
  },
  {
    id: 'pulsewatch',
    title: 'PulseWatch',
    description: {
      en: 'A modular full-stack SaaS foundation for service uptime monitoring and incident response workflows.',
      id: 'Fondasi aplikasi SaaS full-stack modular untuk pemantauan ketersediaan layanan dan koordinasi insiden.',
    },
    overview: {
      en: 'A Phase 0 architecture establishing a Next.js 16 App Router web application, PostgreSQL + Prisma 7 schema, and a separate Redis/BullMQ worker process.',
      id: 'Arsitektur Fase 0 yang membangun fondasi web Next.js 16 App Router, skema PostgreSQL + Prisma 7, serta proses worker Redis/BullMQ terpisah.',
    },
    problem: {
      en: 'Structures a clean modular monolith boundary between the Next.js dashboard UI, database persistence, and asynchronous background job workers.',
      id: 'Menata batas modular monolith yang bersih antara antarmuka dashboard Next.js, persistensi basis data, dan worker antrean latar belakang.',
    },
    features: [
      {
        en: 'Responsive dark-mode landing page and uptime dashboard preview',
        id: 'Landing page mode gelap responsif dan pratinjau dashboard pemantauan',
      },
      {
        en: 'PostgreSQL 17 schema with Prisma 7 driver adapter and Docker Compose services',
        id: 'Skema PostgreSQL 17 dengan adapter Prisma 7 serta layanan Docker Compose',
      },
      {
        en: 'Dedicated BullMQ worker process with graceful shutdown and Zod env validation',
        id: 'Proses worker BullMQ terpisah dengan graceful shutdown dan validasi environment Zod',
      },
    ],
    year: 2026,
    categories: ['Web', 'Data'],
    technologies: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ'],
    githubUrl: 'https://github.com/Freddy47588/pulsewatch',
    featured: false,
    status: 'active',
  },
  {
    id: 'assetflow',
    title: 'AssetFlow',
    description: {
      en: 'A multi-organization asset management foundation featuring SSR authentication and server-verified session workflows.',
      id: 'Fondasi aplikasi pengelolaan aset multi-organisasi dengan autentikasi SSR dan alur sesi terverifikasi di server.',
    },
    overview: {
      en: 'A Phase 01 Next.js foundation implementing Indonesian-first public pages, Supabase Auth SSR cookie sessions, email confirmation, and password recovery.',
      id: 'Fondasi Next.js Fase 01 yang mengimplementasikan halaman publik berbahasa Indonesia, sesi cookie SSR Supabase Auth, konfirmasi email, dan pemulihan sandi.',
    },
    problem: {
      en: 'Establishes secure server-side identity verification, Zod form validation, and graceful unconfigured-service states before domain tables are added.',
      id: 'Membangun verifikasi identitas di sisi server, validasi form Zod, serta penanganan status layanan secara aman sebelum modul inventaris ditambahkan.',
    },
    features: [
      {
        en: 'Supabase Auth SSR cookie flows for registration, sign-in, confirmation, and recovery',
        id: 'Alur cookie SSR Supabase Auth untuk pendaftaran, masuk, konfirmasi, dan pemulihan akun',
      },
      {
        en: 'Keyboard-accessible form controls, Zod validation, and protected workspace routing',
        id: 'Kontrol form ramah keyboard, validasi Zod, dan proteksi rute ruang kerja',
      },
      {
        en: 'Vitest unit tests and Playwright end-to-end verification across desktop and mobile',
        id: 'Pengujian unit Vitest serta verifikasi end-to-end Playwright pada desktop dan mobile',
      },
    ],
    year: 2026,
    categories: ['Web'],
    technologies: ['Next.js', 'TypeScript', 'Supabase Auth', 'Zod', 'Vitest', 'Playwright'],
    featured: false,
    status: 'active',
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
    features: [
      { en: 'Validation and cleaning workflow', id: 'Alur validasi dan pembersihan data' },
    ],
    year: 2026,
    categories: ['Data', 'Web'],
    technologies: ['Python', 'Django', 'Data Cleaning'],
    featured: false,
    status: 'academic',
  },
];
