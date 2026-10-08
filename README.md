# 🌐 MITRAXCON - Official Web Portal & Company Profile

<p align="center">
  <img src="public/assets/logo-mitraxcon.png" alt="MITRAXCON Logo" width="120" />
</p>

<p align="center">
  <strong>Platform Web Resmi MITRAXCON (PT Mitraxcon Synergy Utama)</strong><br />
  Penyedia Layanan Akses Internet Cepat, Stabil, dan Terpercaya untuk Rumah dan Bisnis.
</p>

<p align="center">
  <a href="https://kanggawe.github.io"><img src="https://img.shields.io/badge/Live%20Demo-kanggawe.github.io-00C8FF?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.3.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
</p>

---

## 📌 Daftar Isi
- [Tentang Proyek](#-tentang-proyek)
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Direktori](#-struktur-direktori)
- [Panduan Instalasi & Menjalankan Proyek](#-panduan-instalasi--menjalankan-proyek)
- [Skrip NPM](#-skrip-npm)
- [Deployment ke GitHub Pages](#-deployment-ke-github-pages)
- [Lisensi](#-lisensi)

---

## 📖 Tentang Proyek

Website ini merupakan portal resmi dan company profile dari **MITRAXCON** (*PT Mitraxcon Synergy Utama*), ISP berlisensi resmi Kominfo RI dan anggota APJII. 

Aplikasi dibangun dengan arsitektur modern berbasis **React 19**, di-bundle menggunakan **Vite 8**, serta didukung sistem styling hibrida **Tailwind CSS v4** dan modul CSS terstruktur.

---

## ✨ Fitur Utama

- **🚀 Cosmic Orbit Preloader**  
  Animasi pemuatan awal website dengan efek cincin orbit berputar, laser sweep progress (0–100%), telemetri inisialisasi jaringan fiber optic, serta logo 3D MITRAXCON.
- **🌓 Dual Theme Mode (Dark / Light)**  
  Mendukung tema terang dan gelap dinamis dengan penyimpanan preferensi di browser (`ThemeContext`).
- **🏠 Beranda Dinamis (Hero Carousel & Showcase)**  
  Slider banner promo interaktif, ringkasan keunggulan fiber optic, paket internet unggulan, dan testimoni.
- **⚡ Tech Marquee & Partner Slider**  
  Animasi slider infinity marquee untuk teknologi infrastruktur (*Core Router, FTTH, Peering*) dan jaringan mitra perusahaan.
- **💼 Halaman Layanan Lengkap**  
  Menampilkan detail paket Home Broadband, Dedicated Internet, Business Internet, WiFi Hotspot, dan Cloud CCTV.
- **🔐 Portal Pelanggan Interaktif (`/portal`)**  
  Area pelanggan untuk simulasi speedtest bandwidth, cek billing tagihan, kelola router WiFi, dan pembuatan tiket bantuan kendala teknis.
- **📰 Blog & Pusat Wawasan Teknologi**  
  Fitur artikel informatif seputar dunia internet, tips keamanan siber, dan teknologi jaringan dengan pencarian dan filter kategori.
- **📱 Desain 100% Responsif**  
  Optimal di semua resolusi layar mulai dari desktop, tablet, hingga smartphone.

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) | Library UI modern performa tinggi |
| **Build Tool** | [Vite 8](https://vite.dev/) | Tool bundling kilat dengan Fast Refresh |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) | Navigasi SPA dengan history browser |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS | Styling utility-first via `@tailwindcss/vite` |
| **Icons** | [Bootstrap Icons](https://icons.getbootstrap.com/) | Kumpulan ikon web resmi Bootstrap |
| **Tipografi** | *Google Fonts Inter* & *Friz Quadrata* | Tipografi branding elegan pada logo dan teks |
| **Hosting** | [GitHub Pages](https://pages.github.com/) | Hosting static web dengan redirect script SPA |

---

## 📁 Struktur Direktori

```text
kanggawe.github.io/
├── public/                       # Berkas aset statis publik
│   ├── assets/                   # Gambar, ilustrasi hero, dan logo publik
│   ├── 404.html                  # Fallback redirect untuk GitHub Pages SPA
│   ├── .htaccess                 # Konfigurasi rewrite server Apache
│   ├── favicon.png               # Favicon tab browser (Logo MITRAXCON)
│   └── preloader-preview.html    # Showroom preview 6 konsep preloader
├── src/
│   ├── assets/
│   │   ├── css/                  # Seluruh stylesheet modular (.css)
│   │   ├── font/                 # Berkas font TrueType lokal (Friz Quadrata)
│   │   └── img/                  # Logo 3D MITRAXCON & aset visual lokal
│   ├── components/               # Komponen UI reusable
│   │   ├── PartnerSlider.jsx     # Slider mitra rekanan
│   │   ├── Preloader.jsx         # Loading screen animasi kosmik
│   │   └── TechMarquee.jsx       # Marquee ticker infrastruktur
│   ├── contexts/                 # React Context API
│   │   └── ThemeContext.jsx      # Provider Dark/Light theme
│   ├── data/
│   │   └── blogData.js           # Database mock artikel blog
│   ├── layouts/
│   │   └── RootLayout.jsx        # Wrapper Navbar, Footer, & Outlet
│   ├── pages/                    # Halaman views routing
│   │   ├── Home.jsx              # Beranda
│   │   ├── About.jsx             # Tentang Perusahaan
│   │   ├── Services.jsx          # Katalog Layanan & Paket
│   │   ├── Blog.jsx              # Daftar Artikel Blog
│   │   ├── BlogDetail.jsx        # Detail Artikel
│   │   ├── Contact.jsx           # Formulir Kontak & Lokasi
│   │   ├── CustomerPortal.jsx    # Portal Layanan Pelanggan
│   │   └── NotFound.jsx          # Halaman Error 404
│   ├── App.jsx                   # Konfigurasi router & root component
│   └── main.jsx                  # Entry point React DOM
├── index.html                    # Dokumen HTML utama
├── vite.config.js                # Konfigurasi Vite & Tailwind plugin
└── package.json                  # Konfigurasi dependency & scripts
```

---

## 🚀 Panduan Instalasi & Menjalankan Proyek

Pastikan Anda telah memasang **Node.js** (versi 18 ke atas) di perangkat Anda.

### 1. Klon Repositori
```bash
git clone https://github.com/kanggawe/kanggawe.github.io.git
cd kanggawe.github.io
```

### 2. Pasang Dependency
```bash
npm install
```

### 3. Jalankan Server Development
```bash
npm run dev
```
Buka browser Anda dan akses: **`http://localhost:5173/`**

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil kompilasi produksi siap deploy akan berada di dalam folder `dist/`.

---

## 📜 Skrip NPM

| Perintah | Fungsi |
| :--- | :--- |
| `npm run dev` | Menjalankan local development server dengan hot reload |
| `npm run build` | Melakukan compile dan bundle aplikasi ke direktori `dist/` |
| `npm run preview` | Meninjau hasil build produksi secara lokal |
| `npm run lint` | Menjalankan ESLint untuk memeriksa standar penulisan kode |
| `npm run deploy` | Mengotomatisasi proses build dan publish ke cabang `gh-pages` |

---

## 🌐 Deployment ke GitHub Pages

Proyek ini telah dikonfigurasi untuk rilis langsung ke GitHub Pages menggunakan pustaka `gh-pages`:

1. Jalankan perintah deploy:
   ```bash
   npm run deploy
   ```
2. Skrip akan secara otomatis menjalankan `npm run build` terlebih dahulu, lalu mengunggah folder `dist/` ke branch `gh-pages`.
3. Situs Anda akan live di: **`https://kanggawe.github.io`**.

---

## 📄 Lisensi

Hak Cipta © 2026 **MITRAXCON / PT Mitraxcon Synergy Utama**. Seluruh hak cipta dilindungi undang-undang.
