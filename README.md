# 🌐 ESANET - Penyedia Layanan Internet

Website resmi ESANET, penyedia layanan internet terpercaya dengan teknologi fiber optic terdepan. Website ini dibangun menggunakan React.js dengan desain modern dan responsif.

![ESANET Website](https://img.shields.io/badge/React-18.2.0-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.0-purple)
![Vite](https://img.shields.io/badge/Vite-4.4.0-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Instalasi](#-instalasi)
- [Cara Menjalankan](#-cara-menjalankan)
- [Struktur Project](#-struktur-project)
- [Komponen](#-komponen)
- [Styling](#-styling)
- [Konfigurasi](#-konfigurasi)
- [Deployment](#-deployment)
- [Kontribusi](#-kontribusi)
- [Lisensi](#-lisensi)

## ✨ Fitur Utama

### 🎨 **Desain & UI/UX**
- **Responsive Design** - Optimal di semua device (Desktop, Tablet, Mobile)
- **Modern UI** - Desain clean dan profesional dengan gradien warna menarik
- **Dark Mode** - Toggle dark/light mode di navbar
- **Smooth Animations** - Transisi dan animasi yang halus
- **Accessibility** - Mendukung keyboard navigation dan screen reader

### 🚀 **Fungsionalitas**
- **Hero Slider** - Banner utama dengan animasi zoom dan fade
- **Pathnet Slider** - Logo partner dengan marquee animation
- **Coverage Checker** - Cek ketersediaan layanan berdasarkan alamat
- **Package Cards** - Tampilan paket internet dengan efek hover
- **Contact Integration** - Integrasi WhatsApp dan telepon langsung
- **SEO Optimized** - Meta tags dan struktur HTML yang SEO-friendly

### 📱 **Komponen Interaktif**
- **Navigation Bar** - Menu responsive dengan dropdown
- **Scroll to Top** - Button untuk kembali ke atas halaman
- **Form Validation** - Validasi input form yang user-friendly
- **Loading States** - Indikator loading untuk UX yang lebih baik

## 🛠 Teknologi yang Digunakan

### **Frontend Framework**
- **React 18.2.0** - JavaScript library untuk UI
- **React Router DOM** - Client-side routing
- **Vite** - Build tool dan development server

### **Styling & UI**
- **Bootstrap 5.3.0** - CSS framework untuk layout dan komponen
- **Bootstrap Icons** - Icon library
- **CSS Variables** - Custom properties untuk theming
- **CSS Animations** - Custom keyframes dan transitions

### **Development Tools**
- **ESLint** - Code linting
- **Git** - Version control
- **npm** - Package manager

## 📦 Instalasi

### **Prerequisites**
Pastikan Anda telah menginstall:
- [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [yarn](https://yarnpkg.com/)

### **Clone Repository**
```bash
# Clone repository dari GitHub
git clone https://github.com/your-username/kanggawe.github.io.git

# Masuk ke direktori project
cd kanggawe.github.io
```

### **Install Dependencies**
```bash
# Install semua dependencies
npm install

# Atau menggunakan yarn
yarn install
```

## 🚀 Cara Menjalankan

### **Development Mode**
```bash
# Jalankan development server
npm run dev

# Atau menggunakan yarn
yarn dev
```

Website akan berjalan di `http://localhost:5173`

### **Build untuk Production**
```bash
# Build project untuk production
npm run build

# Preview build production
npm run preview
```

### **Linting**
```bash
# Jalankan ESLint
npm run lint

# Fix linting errors otomatis
npm run lint:fix
```

## 📁 Struktur Project

```
kanggawe.github.io/
├── public/                 # Static files
│   ├── 404.html           # Custom 404 page
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Assets (images, CSS, JS)
│   │   ├── css/          # Component-specific CSS
│   │   │   ├── Footer.css
│   │   │   ├── Navbar.css
│   │   │   ├── PathnetSlider.css
│   │   │   ├── priceList.css
│   │   │   ├── Slider.css
│   │   │   └── Units.css
│   │   ├── img/          # Images
│   │   └── js/           # JavaScript files
│   ├── components/       # React components
│   │   ├── Footer.jsx
│   │   ├── MainContent.jsx
│   │   ├── Navbar.jsx
│   │   ├── PathnetSlider.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Slider.jsx
│   │   └── Units.jsx
│   ├── pages/            # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Disclaimer.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Portfolio.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Service.jsx
│   │   ├── Sitemap.jsx
│   │   └── TermsOfService.jsx
│   ├── App.css           # Main app styles
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global CSS variables
│   └── main.jsx          # Entry point
├── .eslintrc.cjs         # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies & scripts
├── README.md             # Project documentation
└── vite.config.js        # Vite configuration
```

## 🧩 Komponen

### **Core Components**

#### **Navbar.jsx**
- Navigation bar dengan dark mode toggle
- Responsive mobile menu
- Active link highlighting

#### **Slider.jsx**
- Hero slider dengan animasi zoom
- Slick carousel integration
- Custom navigation arrows

#### **PathnetSlider.jsx**
- Logo partner marquee animation
- CSS-only continuous scroll
- Hover effects dengan grayscale to color

#### **Units.jsx**
- Coverage checker form
- Package cards dengan popular badge
- Feature cards dan stats section

#### **Footer.jsx**
- 4-column dynamic layout
- Newsletter subscription
- Social media links

### **Pages**

#### **Home.jsx**
- Landing page dengan semua sections
- Lazy loading untuk performance

#### **About.jsx**
- Company information
- Team details
- Mission & vision

#### **Service.jsx**
- Service packages
- Pricing tables
- Feature comparison

#### **Contact.jsx**
- Contact form
- Location map
- Contact information

## 🎨 Styling

### **CSS Architecture**
- **CSS Variables** - Global theme colors dan spacing
- **Component-specific CSS** - Styling terpisah untuk setiap komponen
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Theme switching dengan CSS variables

### **Color Scheme**
```css
/* Primary Colors */
--primary-color: #007bff;    /* Blue */
--secondary-color: #dc3545;  /* Red */
--accent-color: #ffc107;     /* Yellow */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #2a6df4 0%, #007bff 100%);
--gradient-secondary: linear-gradient(135deg, #ff6b6b 0%, #dc3545 100%);
--gradient-accent: linear-gradient(135deg, #ffd54f 0%, #ffc107 100%);
```

### **Typography**
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Font Sizes**: Responsive scale dari 0.75rem hingga 3rem
- **Line Heights**: 1.2 untuk headings, 1.6 untuk body text

## ⚙️ Konfigurasi

### **Environment Variables**
Buat file `.env` di root directory:
```env
VITE_APP_TITLE=ESANET - Penyedia Layanan Internet
VITE_APP_DESCRIPTION=Website resmi ESANET, penyedia layanan internet terpercaya
VITE_APP_URL=https://your-domain.com
```

### **Vite Configuration**
File `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

### **ESLint Configuration**
File `.eslintrc.cjs`:
```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@eslint/js',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

## 🚀 Deployment

### **GitHub Pages**
1. **Build project**:
   ```bash
   npm run build
   ```

2. **Deploy ke GitHub Pages**:
   - Push ke repository GitHub
   - Aktifkan GitHub Pages di repository settings
   - Set source ke `gh-pages` branch atau `/docs` folder

### **Netlify**
1. **Connect repository** ke Netlify
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy otomatis** saat push ke main branch

### **Vercel**
1. **Import project** ke Vercel
2. **Framework preset**: Vite
3. **Build settings** otomatis terdeteksi
4. **Deploy** dengan satu klik

### **Custom Domain**
1. **Add custom domain** di hosting provider
2. **Update base URL** di `vite.config.js`
3. **Rebuild dan deploy**

## 🔧 Customization

### **Mengubah Warna Theme**
Edit file `src/index.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

### **Mengubah Content**
- **Text content**: Edit file JSX di `src/components/` dan `src/pages/`
- **Images**: Ganti file di `src/assets/img/`
- **Icons**: Gunakan Bootstrap Icons atau custom SVG

### **Menambah Halaman Baru**
1. Buat file baru di `src/pages/`
2. Import di `src/components/MainContent.jsx`
3. Tambahkan route baru
4. Update navigation di `src/components/Navbar.jsx`

### **Menambah Komponen Baru**
1. Buat file baru di `src/components/`
2. Buat CSS file di `src/assets/css/` (jika diperlukan)
3. Import CSS di `src/App.css`
4. Gunakan komponen di halaman yang diinginkan

## 🤝 Kontribusi

### **Cara Berkontribusi**
1. **Fork** repository
2. **Create feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit changes**:
   ```bash
   git commit -m 'Add: your feature description'
   ```
4. **Push to branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create Pull Request**

### **Coding Standards**
- Gunakan **ESLint** untuk code linting
- Ikuti **React best practices**
- Tulis **descriptive commit messages**
- Test di **multiple browsers**

### **File Structure Guidelines**
- **Components**: PascalCase naming
- **CSS files**: kebab-case naming
- **Assets**: Organize by type (img, css, js)
- **Pages**: One component per page

## 📞 Support

### **Contact Information**
- **Email**: info@mitracom-isp.com
- **WhatsApp**: +62 822-6060-1982
- **Phone**: +62 822-6060-1982

### **Documentation**
- **React Docs**: https://react.dev/
- **Vite Docs**: https://vitejs.dev/
- **Bootstrap Docs**: https://getbootstrap.com/

### **Issues & Bugs**
Jika menemukan bug atau masalah:
1. **Search existing issues** di GitHub
2. **Create new issue** dengan template yang sesuai
3. **Provide detailed information**:
   - Browser dan version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (jika diperlukan)

## 📄 Lisensi

Project ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Acknowledgments

- **Bootstrap** - CSS framework
- **React** - JavaScript library
- **Vite** - Build tool
- **Bootstrap Icons** - Icon library
- **Slick Carousel** - Slider component

---

**© 2024 ESANET. All rights reserved.**

*Dibuat dengan ❤️ untuk pengalaman internet yang lebih baik*
